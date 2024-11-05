import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const PageSchema = pgTable('page', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
});
