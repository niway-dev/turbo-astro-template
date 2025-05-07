import { env } from '@/config/env';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/**/**.schema.ts",
  out: "./drizzle_migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
  migrations: {
    table: '__migrations__', // `__drizzle_migrations` by default
    schema: 'public', // used in PostgreSQL only, `drizzle` by default
  },
});
