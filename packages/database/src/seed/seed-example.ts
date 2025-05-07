import { closeDatabase } from '@/client';
import { databaseInstance } from '@/client';
import { exampleTable } from '@/schemas/example.schema';
import { seed } from 'drizzle-seed';

export async function seedExample() { 
  await seed(databaseInstance, { exampleTable });
  await closeDatabase();
}