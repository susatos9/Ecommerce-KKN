import type { Database } from 'bun:sqlite';
export type {
	DefaultValue,
	ColumnDef,
	TableDef,
	Schema,
	SyncOptions
} from '#backend/database/models/schemabuilders.ts';

export type CompoundDatabase = {
	sql: Database;
	cache: Map<string, any>;
};
