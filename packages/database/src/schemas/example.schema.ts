import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const exampleTable = pgTable("example", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
});
