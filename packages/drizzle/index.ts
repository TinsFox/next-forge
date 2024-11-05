import { env } from '@repo/env';
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle(env.DATABASE_URL);
