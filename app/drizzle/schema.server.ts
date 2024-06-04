import { sql } from "drizzle-orm"

import {
  sqliteTable,
  text,
  integer,
  real,
  blob
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

export const people = sqliteTable("people", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address"),
  phone: text("phone"),
  job: text("job"),
  salary: real("salary").default(sql`1000`),
  gender: text("gender", { enum: ["value1", "value2"] }), //You can define { enum: ["value1", "value2"] } config to infer insert and select types, it won’t check runtime values.
  blob: blob('blob', { mode: 'buffer' }),
  isSomething: integer("isSomething", { mode: "boolean" }),
  itemId: integer("item_id").references(() => items.id),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
})