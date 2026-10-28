import database from '#backend/database/index.ts';
import type { sharedInitializedObjects } from '#backend/modules/shared/models/index.ts';

export default function initializer(): sharedInitializedObjects {
	const db = database();
	return { db };
}
