import { relations, sql } from "drizzle-orm"
import { sqliteTable, text, integer, real, blob } from "drizzle-orm/sqlite-core"
import { createInsertSchema } from "drizzle-zod"

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
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
}) 

export const bartenders = sqliteTable("bartenders", {
  id: integer("id").primaryKey(),
  name: text("name")
})

export const customers = sqliteTable("customers", {
  id: integer("id").primaryKey(),
  name: text("name")
})

export const drinks = sqliteTable("drinks", {
  id: integer("id").primaryKey(),
  name: text("name"),
  price: integer("price")
})

export const ingredients = sqliteTable("ingredients", {
  id: integer("id").primaryKey(),
  name: text("name"),
  drinkId: integer("drink_id").references(() => drinks.id)
})

export const orders = sqliteTable("customer_bartender_drinks", {
 id: integer("id").primaryKey(),
 bartenderId: integer("bartender_id").references(() => bartenders.id),
 customerId: integer("customer_id").references(() => customers.id),
 drinkId: integer("drink_id").references(() => drinks.id),
 createdAt: text("createdAt")
   .notNull()
   .default(sql`CURRENT_TIMESTAMP`)
})

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull(),
  profileId: integer("profile_id").references(() => userProfiles.id),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
}) 

export const userProfiles = sqliteTable("userProfiles", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address"),
  phone: text("phone"),
  job: text("job"),
  salary: real("salary").default(sql`1000`),
  gender: text("gender", { enum: ["value1", "value2"] }), //You can define { enum: ["value1", "value2"] } config to infer insert and select types, it won’t check runtime values.
  //userId: integer("user_id").references(() => users.id),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
}) 

export const usersRelations = relations(users, ({ one }) => ({
  profile: one(userProfiles),
}));

export const insertItemsSchema = createInsertSchema(items);
export const insertPeopleSchema = createInsertSchema(people);