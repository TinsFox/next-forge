import { env } from '@repo/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
