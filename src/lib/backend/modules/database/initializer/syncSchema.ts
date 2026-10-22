import type Database from 'bun:sqlite';
import type { ColumnDef, Schema, TableDef, SyncOptions } from '#backend/database/models/index.ts';
import { createTable } from '#backend/database/utils/index.ts';
import { hashOf, q, rebuildTable } from '#backend/database/utils/index.ts';

export default function syncSchema(
	db: Database,
	schema: Schema,
	{ prune = false, log = console.log }: SyncOptions = {}
) {
	// Must be outside the transaction, otherwise the PRAGMA is a no-op.
	db.run('PRAGMA foreign_keys = OFF;');

	try {
		db.transaction(() => {
			db.run(
				`CREATE TABLE IF NOT EXISTS _schema_state (
           name TEXT PRIMARY KEY,
           hash TEXT NOT NULL
         )`
			);

			const existing = new Set(
				(
					db
						.query(
							`SELECT name FROM sqlite_master
               WHERE type = 'table'
                 AND name NOT LIKE 'sqlite_%'
                 AND name != '_schema_state'`
						)
						.all() as { name: string }[]
				).map((r) => r.name)
			);

			const state = new Map(
				(
					db.query(`SELECT name, hash FROM _schema_state`).all() as {
						name: string;
						hash: string;
					}[]
				).map((r) => [r.name, r.hash])
			);

			const saveHash = (name: string, hash: string) =>
				db.run(
					`INSERT INTO _schema_state (name, hash) VALUES (?, ?)
           ON CONFLICT(name) DO UPDATE SET hash = excluded.hash`,
					[name, hash]
				);

			for (const [name, def] of Object.entries(schema)) {
				const createNewTable = createTable(name, def);
				const hash = hashOf(createNewTable);

				if (!existing.has(name)) {
					db.run(createNewTable);
					log(`[schema] created table ${name}`);
				} else if (state.get(name) !== hash) {
					rebuildTable(db, name, def);
					log(`[schema] updated table ${name}`);
				} else {
					continue; // up to date
				}
				saveHash(name, hash);
			}

			if (prune) {
				for (const name of existing) {
					if (name in schema) continue;
					db.run(`DROP TABLE ${q(name)}`);
					db.run(`DELETE FROM _schema_state WHERE name = ?`, [name]);
					log(`[schema] dropped table ${name}`);
				}
			}
		})();

		const broken = db.query('PRAGMA foreign_key_check').all();
		if (broken.length) log(`[schema] WARNING: FK violations: ${JSON.stringify(broken)}`);
	} finally {
		db.run('PRAGMA foreign_keys = ON;');
	}
}
