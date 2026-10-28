import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	TURSO_DATABASE_URL: {},
	TURSO_AUTH_TOKEN: {},
	BETTER_AUTH_SECRET: {},
	BETTER_AUTH_URL: {},
	GOOGLE_CLIENT_ID: { schema: (value) => value },
	GOOGLE_CLIENT_SECRET: { schema: (value) => value }
});
