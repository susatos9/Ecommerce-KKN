import database from '#backend/database/index.ts';
import type { sharedInitializedObjects } from '#backend/modules/shared/models/index.ts';
import initAuth from '#backend/modules/auth/auth.ts';
export default function initializer(): sharedInitializedObjects {
	const db = database();
	const auth = initAuth(db);
	return { db, auth };
}
