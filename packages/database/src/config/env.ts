import 'dotenv/config';
import { z } from 'zod';

console.log('---> ', process.env.DATABASE_URL);
// PostgreSQL connection URL format validation
// Format: postgres://user:password@host:port/database
const postgresUrlSchema = z
  .string({ required_error: 'DATABASE_URL is required' })
  .url()
  .refine(
    (url) => url.startsWith('postgres://') || url.startsWith('postgresql://'),
    {
      message: 'Database URL must be a valid PostgreSQL connection string',
    }
  );


const envSchema = z.object({
  DATABASE_URL: postgresUrlSchema,
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const env = envSchema.parse(process.env);

