import type { DefaultValue, TableDef, ColumnDef } from '#backend/database/models/index.ts';
import { q } from '#backend/database/utils/index.ts';

function defaultSql(v: DefaultValue): string {
	if (typeof v === 'object') return v.raw;
	if (typeof v === 'boolean') return v ? '1' : '0';
	if (typeof v === 'number') return String(v);
	return `'${v.replace(/'/g, "''")}'`;
}

function columnSql(name: string, c: ColumnDef): string {
	const parts = [q(name), c.type];
	if (c.primaryKey) parts.push('PRIMARY KEY');
	if (c.autoIncrement) parts.push('AUTOINCREMENT');
	if (c.notNull) parts.push('NOT NULL');
	if (c.unique) parts.push('UNIQUE');
	if (c.default !== undefined) parts.push(`DEFAULT ${defaultSql(c.default)}`);
	if (c.references) {
		const { table, column = 'id', onDelete } = c.references;
		parts.push(`REFERENCES ${q(table)}(${q(column)})`);
		if (onDelete) parts.push(`ON DELETE ${onDelete}`);
	}
	return parts.join(' ');
}
export default function createTable(table: string, def: TableDef): string {
	const cols = Object.entries(def.columns).map(([n, c]) => columnSql(n, c));
	return `CREATE TABLE ${q(table)} (\n  ${cols.join(',\n  ')}\n)`;
}
