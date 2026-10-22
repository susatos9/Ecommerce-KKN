import Database from 'bun:sqlite';
import syncSchema from '#backend/database/initializer/syncSchema.ts';
import { schema } from '#backend/database/initializer/schemaDefinition.ts';

/* ------------------------------------------------------------------ */
/* SQL builders                                                        */
/* ------------------------------------------------------------------ */

const DATABASE_EXISTS = 'Database file exists. Connecting to the existing database...';
const DATABASE_NOT_EXISTS = 'Database file does not exist. Creating a new database...';
const DB_PATH = 'ecommerce.sqlite';

export default function setupDatabase() {
	//check if database file exists, if not create it
	const isNewDatabase = Bun.file(DB_PATH).size === 0;
	console.log(isNewDatabase ? DATABASE_NOT_EXISTS : DATABASE_EXISTS);

	// Create a new database or connect to the existing one handled automatically
	// using bun Database
	const db = new Database('ecommerce.sqlite', { create: true });
	syncSchema(db, schema);
	console.log('Database initialized successfully.');

	return db;
}
