console.log('---> ', env);
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { schemas } from './schemas';
import { env } from './config/env';

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: env.DATABASE_URL,
  max: 10, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
  ssl: env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false,
});

// Register error handler for unexpected connection issues
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Create and export Drizzle client
export const databaseInstance = drizzle(pool, {
  schema: {
    ...schemas,
  },
});

// Function to properly close the database connection
export async function closeDatabase() {
  await pool.end();
}

// Function to check if the database is connected
export async function checkConnection() {
  try {
    const client = await pool.connect();
    client.release();
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
}