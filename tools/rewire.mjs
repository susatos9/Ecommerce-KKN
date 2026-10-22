/**
 * Post-conversion handler wiring for converted Svelte pages.
 *
 * Usage (import from scripts): rewire helpers mutate file contents in place.
 *   button_goto(file, label, path)   -> <div data-name="... Button"> containing label becomes
 *                                       <button type="button" ... onclick={() => goto(path)}>
 *   span_to_link(file, text, path)   -> <span>text</span> becomes <a href="path">text</a>
 *   p_to_link(file, text, path)      -> <p>text</p> (matching exact inner text) becomes <a href="path">
 *
 * CLI:
 *   bun tools/rewire.mjs <file> button <label> <path>
 *   bun tools/rewire.mjs <file> span <text> <path>
 *   bun tools/rewire.mjs <file> p <text> <path>
 *   bun tools/rewire.mjs <file> row <label> <path>
 *   bun tools/rewire.mjs <file> tab <label> <path>
 */
import { readFileSync, writeFileSync } from 'node:fs';

function buttonGotoAt(text, labelIdx, path) {
	let searchFrom = labelIdx;
	let found = null;
	while (true) {
		const idx = text.lastIndexOf('<div ', searchFrom);
		if (idx < 0) return null;
		const tagEnd = text.indexOf('>', idx);
		const tag = text.slice(idx, tagEnd + 1);
		if (/data-name="[A-Za-z ]*Button"/.test(tag)) {
			found = { start: idx, tagEnd };
			break;
		}
		searchFrom = idx - 1;
	}
	const end = findDivEnd(text, found.start);
	if (end < 0) throw new Error('closing div not found');
	const tag = text.slice(found.start, found.tagEnd + 1);
	const cls = tag.match(/class="([^"]*)"/)?.[1] ?? '';
	const dataName = tag.match(/data-name="([^"]*)"/)?.[1] ?? '';
	const open = `<button type="button" class="${cls} cursor-pointer" data-name="${dataName}" onclick={() => goto('${path}')}>`;
	return (
		text.slice(0, found.start) +
		open +
		text.slice(found.tagEnd + 1, end) +
		'</button>' +
		text.slice(end + 6)
	);
}

export function buttonGoto(text, label, path) {
	const marker = `>${label}</p>`;
	const labelIdx = text.indexOf(marker);
	if (labelIdx < 0) throw new Error(`button container not found for label: ${label}`);
	const out = buttonGotoAt(text, labelIdx, path);
	if (!out) throw new Error(`button container not found for label: ${label}`);
	return out;
}

export function buttonGotoAll(text, label, path) {
	const marker = `>${label}</p>`;
	const idxs = [];
	for (let i = text.indexOf(marker); i >= 0; i = text.indexOf(marker, i + 1)) idxs.push(i);
	if (idxs.length === 0) throw new Error(`button container not found for label: ${label}`);
	for (const idx of [...idxs].reverse()) {
		const out = buttonGotoAt(text, idx, path);
		if (!out) throw new Error(`button container not found for label: ${label}`);
		text = out;
	}
	return text;
}

function findDivEnd(text, startIdx) {
	// startIdx points at '<div '
	let depth = 0;
	let i = startIdx;
	while (i < text.length) {
		const nextOpen = text.indexOf('<div ', i);
		const nextClose = text.indexOf('</div>', i);
		if (nextClose < 0) return -1;
		if (nextOpen >= 0 && nextOpen < nextClose) {
			depth++;
			i = nextOpen + 5;
		} else {
			depth--;
			if (depth === 0) return nextClose;
			i = nextClose + 6;
		}
	}
	return -1;
}

export function spanToLink(text, inner, path) {
	const open = `<span class="`;
	// find span whose inner text equals `inner`
	const re = new RegExp(
		`<span class="([^"]*)">${inner.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</span>`
	);
	const m = text.match(re);
	if (!m) throw new Error(`span not found: ${inner}`);
	return text.replace(re, `<a href="${path}" class="$1 hover:underline">${inner}</a>`);
}

export function pToLink(text, inner, path) {
	// matches <p ...>inner</p> where inner may contain braces expressions stripped to plain text
	const re = new RegExp(
		`<p class="([^"]*)">\\s*${inner.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*</p>`
	);
	const m = text.match(re);
	if (!m) throw new Error(`p not found: ${inner}`);
	return text.replace(re, `<a href="${path}" class="$1 hover:underline">${inner}</a>`);
}

function labelPRegex(label) {
	const esc = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	return new RegExp(`<p class="([^"]*)">(?:\\s*\\{\\s*\`)?\\s*${esc}\\s*(?:\`\\s*\\})?\\s*</p>`);
}

function enclosingDiv(text, pIdx, requireRe) {
	// walk back from pIdx to nearest '<div ' whose tag matches requireRe
	let from = pIdx;
	while (true) {
		const idx = text.lastIndexOf('<div ', from);
		if (idx < 0) return null;
		const tagEnd = text.indexOf('>', idx);
		const tag = text.slice(idx, tagEnd + 1);
		if (requireRe.test(tag)) return { start: idx, tagEnd };
		from = idx - 1;
	}
}

/** Convert nav-row <div data-name="Flex Horizontal"> containing exactly `label`
 *  (row identifiable by px-[12px] py-[10px]) into <a href="path">. */
export function rowToLink(text, label, path) {
	const re = labelPRegex(label);
	let count = 0;
	let out = '';
	let rest = text;
	let m;
	while ((m = re.exec(rest))) {
		const row = enclosingDiv(rest, m.index, /px-\[12px\] py-\[10px\]/);
		if (!row) {
			out += rest.slice(0, m.index + m[0].length);
			rest = rest.slice(m.index + m[0].length);
			re.lastIndex = 0;
			continue;
		}
		const end = findDivEnd(rest, row.start);
		if (end < 0) throw new Error(`row close not found for: ${label}`);
		const tag = rest.slice(row.start, row.tagEnd + 1);
		const cls = tag.match(/class="([^"]*)"/)?.[1] ?? '';
		const dataName = tag.match(/data-name="([^"]*)"/)?.[1] ?? '';
		const hover = cls.includes('bg-[#f5f5f5]') ? '' : ' hover:bg-gray-50';
		out +=
			rest.slice(0, row.start) +
			`<a href="${path}" class="${cls}${hover}" data-name="${dataName}">` +
			rest.slice(row.tagEnd + 1, end) +
			'</a>';
		rest = rest.slice(end + 6);
		re.lastIndex = 0;
		count++;
	}
	if (count === 0) throw new Error(`nav row not found for: ${label}`);
	return out + rest;
}

/** Convert a tab <div> containing `label` into <a href="path">
 *  (matches data-name="Tab item" or "Tab 01", "Tab 02", ...). */
export function tabToLink(text, label, path) {
	const re = labelPRegex(label);
	let m = re.exec(text);
	while (m) {
		const tab = enclosingDiv(text, m.index, /data-name="Tab (?:item|0\d)"/);
		if (tab) {
			const end = findDivEnd(text, tab.start);
			if (end < 0) throw new Error(`tab close not found for: ${label}`);
			const tag = text.slice(tab.start, tab.tagEnd + 1);
			const cls = tag.match(/class="([^"]*)"/)?.[1] ?? '';
			const dataName = tag.match(/data-name="([^"]*)"/)?.[1] ?? '';
			return (
				text.slice(0, tab.start) +
				`<a href="${path}" class="${cls}" data-name="${dataName}">` +
				text.slice(tab.tagEnd + 1, end) +
				'</a>' +
				text.slice(end + 6)
			);
		}
		m = re.exec(text);
	}
	throw new Error(`tab item not found for: ${label}`);
}

/* CLI */
if (process.argv[1] && process.argv[1].endsWith('rewire.mjs')) {
	const [, , file, op, arg, path] = process.argv;
	let t = readFileSync(file, 'utf8');
	if (op === 'button') t = buttonGoto(t, arg, path);
	else if (op === 'buttonall') t = buttonGotoAll(t, arg, path);
	else if (op === 'span') t = spanToLink(t, arg, path);
	else if (op === 'p') t = pToLink(t, arg, path);
	else if (op === 'row') t = rowToLink(t, arg, path);
	else if (op === 'tab') t = tabToLink(t, arg, path);
	else throw new Error(`unknown op: ${op}`);
	writeFileSync(file, t);
	console.error(`rewired ${op} ${JSON.stringify(arg)} -> ${path} in ${file}`);
}
