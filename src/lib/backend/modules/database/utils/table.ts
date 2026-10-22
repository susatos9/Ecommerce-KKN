/* ------------------------------------------------------------------ */
/* Optional: derive a table definition from a sample JSON object        */
/* ------------------------------------------------------------------ */

import type { ColumnDef, TableDef } from '#backend/database/models/index.ts';

export function tableFromJson(sample: Record<string, unknown>): TableDef {
	const columns: Record<string, ColumnDef> = {};

	if (!('id' in sample)) {
		columns.id = { type: 'INTEGER', primaryKey: true, autoIncrement: true };
	}

	for (const [key, value] of Object.entries(sample)) {
		if (key === 'id') {
			columns.id = { type: 'INTEGER', primaryKey: true, autoIncrement: true };
		} else if (typeof value === 'number') {
			columns[key] = { type: Number.isInteger(value) ? 'INTEGER' : 'REAL' };
		} else if (typeof value === 'boolean') {
			columns[key] = { type: 'BOOLEAN', default: false };
		} else if (value instanceof Date) {
			columns[key] = { type: 'DATETIME' };
		} else {
			// string, object, array (objects/arrays are stored as JSON text)
			columns[key] = { type: 'TEXT' };
		}
	}

	return { columns };
}
