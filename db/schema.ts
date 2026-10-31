// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const accounts=sqliteTable('accounts',{id:text('id').primaryKey(),username:text('username').notNull().unique(),hash:text('hash').notNull(),salt:text('salt').notNull(),hero:text('hero').notNull(),affiliation:text('affiliation').notNull()});
export const sessions=sqliteTable('sessions',{token:text('token').primaryKey(),account:text('account').notNull(),expires:integer('expires').notNull()});
export const posts=sqliteTable('posts',{id:text('id').primaryKey(),account:text('account').notNull(),title:text('title').notNull(),body:text('body').notNull(),category:text('category').notNull(),created:text('created').notNull()});
export const comments=sqliteTable('comments',{id:text('id').primaryKey(),post:text('post').notNull(),account:text('account').notNull(),body:text('body').notNull(),created:text('created').notNull()});
export const attempts=sqliteTable('attempts',{key:text('key').primaryKey(),count:integer('count').notNull(),reset:integer('reset').notNull()});
