import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema/index.ts';

export function createDb(config: { url: string; authToken?: string }) {
	const client = createClient(config);
	const db = drizzle(client, { schema });

	return { client, db };
}

export type Db = ReturnType<typeof createDb>['db'];
