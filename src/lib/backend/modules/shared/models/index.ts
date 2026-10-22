import type { Database } from 'bun:sqlite';
export type sharedInitializedObjects = {
	db: Database;
	auth: ReturnType<typeof import('#backend/modules/auth/auth.ts').default>;
};
