import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from '$app/env/private';
import { createDb } from './core.ts';

export const { client, db } = createDb({
	url: TURSO_DATABASE_URL,
	authToken: TURSO_AUTH_TOKEN
});
