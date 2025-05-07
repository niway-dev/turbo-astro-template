import { closeDatabase, databaseInstance } from '@/client';
import { exampleTable } from '@/schemas/example.schema';
import { reset } from 'drizzle-seed';

export async function resetExample() {
  await reset(databaseInstance, { exampleTable });
  await closeDatabase();
}