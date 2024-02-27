import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).notNull()
});

export const demo = pgTable('demo', {
	id: serial('id').primaryKey(),
	value: varchar('value', { length: 255 }).notNull()
});

export const another = pgTable('another', {
	id: serial('id').primaryKey(),
	value: varchar('value', { length: 255 }).notNull()
});
