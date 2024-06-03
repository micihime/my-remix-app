import { sql } from "drizzle-orm"

import {
  sqliteTable,
  text,
  integer,
} from "drizzle-orm/sqlite-core"

export const items = sqliteTable("items", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
})