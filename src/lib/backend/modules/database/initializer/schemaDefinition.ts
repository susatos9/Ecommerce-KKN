import type { ColumnDef, Schema } from '#backend/database/models/index.ts';

const timestamps: Record<string, ColumnDef> = {
	created_at: { type: 'DATETIME', default: { raw: 'CURRENT_TIMESTAMP' } },
	updated_at: { type: 'DATETIME', default: { raw: 'CURRENT_TIMESTAMP' } }
};

export const schema: Schema = {
	categories: {
		columns: {
			id: { type: 'INTEGER', primaryKey: true, autoIncrement: true },
			title: { type: 'VARCHAR(255)', notNull: true },
			...timestamps
		}
	},
	users: {
		columns: {
			id: { type: 'INTEGER', primaryKey: true, autoIncrement: true },
			name: { type: 'VARCHAR(255)', notNull: true },
			email: { type: 'VARCHAR(255)', notNull: true, unique: true },
			isAdmin: { type: 'BOOLEAN', default: false },
			password: { type: 'VARCHAR(255)', notNull: true },
			isActive: { type: 'BOOLEAN', default: true },
			...timestamps
		}
	},
	blogs: {
		columns: {
			id: { type: 'INTEGER', primaryKey: true, autoIncrement: true },
			categoryId: {
				type: 'INTEGER',
				notNull: true,
				references: { table: 'categories' }
			},
			userId: {
				type: 'INTEGER',
				notNull: true,
				references: { table: 'users', onDelete: 'CASCADE' }
			},
			title: { type: 'VARCHAR(255)', notNull: true },
			imageUrl: { type: 'VARCHAR(255)', notNull: true },
			content: { type: 'TEXT', notNull: true },
			...timestamps
		}
	}
};
