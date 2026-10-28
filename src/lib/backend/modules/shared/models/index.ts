import type { Database } from 'bun:sqlite';

export type sharedInitializedObjects = {
	db: Database;
};
