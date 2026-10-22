#!/usr/bin/env bun
/**
 * Mechanical React(JSX) page -> Svelte page converter for the Shopix prototype.
 *
 * Full page mode:
 *   bun tools/convert.mjs <src.tsx> [--out dest.svelte] [--keep-shell]
 *   - extracts asset consts into a <script lang="ts"> block
 *   - resolves the default-export wrapper -> real component JSX
 *   - strips inline Header/Footer sections (rendered by SiteHeader/SiteFooter)
 *   - transforms JSX -> Svelte template, reports manual follow-ups
 *
 * Snippet mode (raw JSX section, e.g. extracted header markup):
 *   bun tools/convert.mjs <snippet.jsx> --snippet [--out dest.svelte]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const args = process.argv.slice(2);
const flags = { out: null, keepShell: false, snippet: false };
const inputs = [];
for (let i = 0; i < args.length; i++) {
	if (args[i] === '--out') flags.out = args[++i];
	else if (args[i] === '--keep-shell') flags.keepShell = true;
	else if (args[i] === '--snippet') flags.snippet = true;
	else inputs.push(args[i]);
}
if (inputs.length !== 1) {
	console.error(
		'usage: convert.mjs <src.tsx|snippet.jsx> [--out dest.svelte] [--keep-shell] [--snippet]'
	);
	process.exit(1);
}
const srcPath = resolve(inputs[0]);
let source = readFileSync(srcPath, 'utf8');
const notes = [];

/* ------------------------------------------------------------- shared bits */
function splitStyleBody(body) {
	const out = [];
	let depth = 0;
	let quote = '';
	let cur = '';
	for (const ch of body) {
		if (quote) {
			cur += ch;
			if (ch === quote) quote = '';
			continue;
		}
		if (ch === '"' || ch === "'") {
			quote = ch;
			cur += ch;
			continue;
		}
		if (ch === '(' || ch === '{') depth++;
		else if (ch === ')' || ch === '}') depth--;
		if (ch === ',' && depth === 0) {
			out.push(cur);
			cur = '';
			continue;
		}
		cur += ch;
	}
	if (cur.trim()) out.push(cur);
	return out;
}
function styleReplacer(whole, body) {
	const decls = [];
	if (/^\s*width\s*,/.test(body)) {
		const mm = body.match(/^\s*width\s*,\s*maxHeight:\s*(\d+)/);
		decls.push('width: {width}px', `max-height: ${mm ? mm[1] : 0}px`);
		notes.push('style width shorthand -> width: {width}px');
	} else {
		for (const part of splitStyleBody(body)) {
			const kv = part.match(/^\s*(\w+)\s*:\s*([\s\S]+)$/);
			if (!kv) continue;
			const key = kv[1].replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());
			let val = kv[2].trim();
			if (val.startsWith('`') && val.endsWith('`')) {
				val = val
					.slice(1, -1)
					.replace(/\$\{(\w+)\}/g, '{$1}')
					.replace(/"/g, "'");
			} else if (val.startsWith('"') && val.endsWith('"')) {
				val = val.slice(1, -1);
			} else if (/^\{?\w+\}?$/.test(val)) {
				val = `{${val.replace(/[{}]/g, '')}}`;
				if (val === '{width}') val = '{width}px';
			}
			decls.push(`${key}: ${val}`);
		}
	}
	return `style="${decls.join('; ')}"`;
}
const attrMap = {
	onClick: 'onclick',
	onMouseLeave: 'onmouseleave',
	onMouseEnter: 'onmouseenter',
	onMouseDown: 'onmousedown',
	onMouseUp: 'onmouseup',
	strokeLinecap: 'stroke-linecap',
	strokeLinejoin: 'stroke-linejoin',
	strokeWidth: 'stroke-width',
	tabIndex: 'tabindex',
	autoFocus: 'autofocus',
	htmlFor: 'for'
};
function transformJsx(jsx) {
	jsx = jsx.replace(/\bclassName=/g, 'class=');
	jsx = jsx.replace(/ ?data-node-id="[^"]*"/g, '');
	jsx = jsx.replace(/\baria-hidden(?=[\s>])/g, 'aria-hidden="true"');
	jsx = jsx.replace(/style=\{\{([^}]*(?:\}[^}]*)*?)\}\}/g, styleReplacer);
	jsx = jsx.replace(
		/<(div|span|p|section|header|footer|nav|ul|li|figure)((?:[^<>"]|"[^"]*")*?)\s*\/>/g,
		'<$1$2></$1>'
	);
	for (const [from, to] of Object.entries(attrMap)) {
		jsx = jsx.replace(new RegExp(`\\b${from}=`, 'g'), `${to}=`);
	}
	return jsx;
}
function residualReport(jsx) {
	const report = [];
	const frags = (jsx.match(/<>|<\/>/g) || []).length;
	const ands = (jsx.match(/\{\w[^{}]*&&/g) || []).length;
	const ternaryEl = (jsx.match(/\? \(/g) || []).length;
	const onClick = (jsx.match(/\bonclick=/g) || []).length;
	if (frags) report.push(`fragments: ${frags} (convert to plain markup)`);
	if (ands) report.push(`&& conditionals: ${ands} (convert to {#if})`);
	if (ternaryEl) report.push(`possible ternary elements: ${ternaryEl}`);
	if (onClick) report.push(`event handlers: ${onClick} (review)`);
	const stray = jsx.match(/\bclassName\b|data-node-id|style=\{\{|React\./g);
	if (stray) report.push(`UNCONVERTED: ${[...new Set(stray)].join(', ')}`);
	return report;
}
function emit(content, report) {
	if (flags.out) {
		writeFileSync(resolve(flags.out), content);
		console.error(`wrote ${flags.out} (${content.split('\n').length} lines)`);
	} else process.stdout.write(content);
	if (notes.length) console.error(`notes: ${notes.join('; ')}`);
	if (report.length) console.error('MANUAL:\n  - ' + report.join('\n  - '));
}

/* ------------------------------------------------------------ snippet mode */
if (flags.snippet) {
	const jsx = transformJsx(source);
	emit(jsx, residualReport(jsx));
	process.exit(0);
}

/* ------------------------------------------------------------------ consts */
const assetMap = new Map();
source = source.replace(
	/^const assetPathPrefix = "[^"]*";\n(?:^const (\w+) = `\$\{assetPathPrefix\}\/([^`]+)`;\n)*/gm,
	(block) => {
		for (const m of block.matchAll(/^const (\w+) = `\$\{assetPathPrefix\}\/([^`]+)`;/gm)) {
			assetMap.set(m[1], `/assets/${m[2]}`);
		}
		return '';
	}
);
const scriptConsts = [...assetMap].map(([k, v]) => `const ${k} = '${v}';`).join('\n');

/* ----------------------------------------------- helpers + types (reported) */
const funcRe =
	/^export default function (\w+)\s*\(|^function (\w+)\s*\(|^export function (\w+)\s*\(/gm;
let m;
const funcStarts = [];
while ((m = funcRe.exec(source))) {
	funcStarts.push({ idx: m.index, name: m[1] || m[2] || m[3], exported: !!m[1] });
}
const defaults = funcStarts.filter((f) => f.exported);
if (defaults.length !== 1) {
	console.error(`expected exactly 1 exported function, found ${defaults.length}`);
	process.exit(1);
}
const defaultFn = defaults[0];
// Two shapes exist:
//  1) wrapper: export default function X1() { return <Real className="ROOT" />; }
//  2) direct:  export default function X() { return ( <div className="ROOT" ...> }
const wrapperSlice = source.slice(defaultFn.idx, defaultFn.idx + 600);
const wrapperM = wrapperSlice.match(/return\s*<(\w+)\s+className="([^"]*)"\s*\/>/);
let innerName;
let rootClass = null;
let innerFnIdx;
if (wrapperM) {
	innerName = wrapperM[1];
	rootClass = wrapperM[2];
	const innerM = new RegExp(`^function ${innerName}\\(`, 'm').exec(source);
	if (!innerM) {
		console.error(`inner component ${innerName} not found`);
		process.exit(1);
	}
	innerFnIdx = innerM.index;
} else {
	innerName = defaultFn.name;
	innerFnIdx = defaultFn.idx;
}
const helperRanges = [];
for (const f of funcStarts) {
	if (f.name === innerName || f === defaultFn) continue;
	let start = f.idx;
	const before = source.slice(0, f.idx);
	const typeM = [...before.matchAll(/^(?:type|interface) \w+[^{;]*=? ?\{[\s\S]*?\n\}\n/gm)].pop();
	if (typeM && f.idx - (typeM.index + typeM[0].length) < 60) start = typeM.index;
	helperRanges.push({ name: f.name, start });
}

/* --------------------------------------------------- default export JSX */
const retIdx = source.indexOf('return (', innerFnIdx);
let jsx = source.slice(retIdx + 'return ('.length);
const tailIdx = jsx.lastIndexOf(');');
jsx = jsx.slice(0, tailIdx);
jsx = jsx.replace(/\s+$/, '\n');

/* --------------------------------------------------- strip shell sections */
function stripSection(lines, dataName) {
	const firstLine = lines.find((l) => l.trim().length > 0) ?? '';
	const rootIndent = (firstLine.match(/^ */) || [''])[0].length;
	const target = rootIndent + 2;
	for (let i = 0; i < lines.length; i++) {
		const ind = (lines[i].match(/^ */) || [''])[0].length;
		if (ind === target && lines[i].includes(`data-name="${dataName}">`)) {
			for (let j = i + 1; j < lines.length; j++) {
				const ind2 = (lines[j].match(/^ */) || [''])[0].length;
				if (ind2 === target && lines[j].trim() === '</div>') {
					lines.splice(i, j - i + 1);
					return true;
				}
			}
		}
	}
	return false;
}
let strippedHeader = false;
let strippedFooter = false;
{
	const lines = jsx.split('\n');
	if (!flags.keepShell) {
		strippedFooter = stripSection(lines, 'Footer');
		strippedHeader = stripSection(lines, 'Header');
		const hIdx = lines.findIndex((l) => /^ {6}<Header\s/.test(l) && l.trim().endsWith('/>'));
		if (hIdx >= 0) {
			lines.splice(hIdx, 1);
			strippedHeader = true;
		}
	}
	jsx = lines.join('\n');
}

/* ------------------------------------------------------------- transforms */
if (rootClass !== null) {
	jsx = jsx.replace(/className=\{className \|\| "[^"]*"\}/, () => {
		notes.push('root className prop -> wrapper class');
		return `class="${rootClass}"`;
	});
}
jsx = transformJsx(jsx);

/* ------------------------------------------------- manual-fix report */
const report = residualReport(jsx);
if (helperRanges.length) {
	report.unshift(
		`helpers to extract (${helperRanges.length}): ` +
			helperRanges
				.map((h) => `${h.name}@L${source.slice(0, h.start).split('\n').length}`)
				.join(', ')
	);
}
const rootTag = (jsx.split('\n').find((l) => /^ {4}</.test(l)) || '').trim().match(/^<(\w+)/)?.[1];
if (rootTag && rootTag !== 'div' && rootTag !== 'section') {
	report.push(`unexpected root element <${rootTag}>`);
}

/* --------------------------------------------------------------- output */
let out = '';
if (scriptConsts) out += `<script lang="ts">\n${scriptConsts}\n</script>\n\n`;
out += jsx.trimStart() + '\n';

emit(out, report);
console.error(`header stripped: ${strippedHeader}, footer stripped: ${strippedFooter}`);
