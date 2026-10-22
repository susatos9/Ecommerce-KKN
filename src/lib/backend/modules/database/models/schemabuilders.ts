// This file is containing type definitin for the automatic schema builder.

export type DefaultValue = string | number | boolean | { raw: string };

export type ColumnDef = {
	type: string; // "INTEGER" | "TEXT" | "VARCHAR(255)" | "DATETIME" ...
	primaryKey?: boolean;
	autoIncrement?: boolean;
	notNull?: boolean;
	unique?: boolean;
	default?: DefaultValue; // strings are quoted; use { raw: "CURRENT_TIMESTAMP" } for SQL expressions
	references?: {
		table: string;
		column?: string; // defaults to "id"
		onDelete?: 'CASCADE' | 'SET NULL' | 'RESTRICT' | 'NO ACTION';
	};
};

export type TableDef = { columns: Record<string, ColumnDef> };
export type Schema = Record<string, TableDef>;

export type SyncOptions = {
	/** Drop tables that are not in the schema (DESTRUCTIVE). Default: true */
	prune?: boolean;
	log?: (msg: string) => void;
};
