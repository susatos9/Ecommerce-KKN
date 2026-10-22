import Database from 'bun:sqlite';
import type { ColumnDef, Schema, TableDef, SyncOptions } from '#backend/database/models/index.ts';
import { createTable, hashOf, q } from '#backend/database/utils/index.ts';

export default function rebuildTable(db: Database, name: string, def: TableDef) {
	const tmp = `${name}__new`;
	db.run(`DROP TABLE IF EXISTS ${q(tmp)}`);
	db.run(createTable(tmp, def));

	const oldCols = (db.query(`PRAGMA table_info(${q(name)})`).all() as { name: string }[]).map(
		(c) => c.name
	);

	const common = Object.keys(def.columns).filter((c) => oldCols.includes(c));
	if (common.length) {
		const list = common.map(q).join(', ');
		db.run(`INSERT INTO ${q(tmp)} (${list}) SELECT ${list} FROM ${q(name)}`);
	}

	db.run(`DROP TABLE ${q(name)}`);
	db.run(`ALTER TABLE ${q(tmp)} RENAME TO ${q(name)}`);
}
