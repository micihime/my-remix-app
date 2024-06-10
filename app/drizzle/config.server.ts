import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import Database from "better-sqlite3"

import * as schema from "./schema.server" 

// if (!process.env.DATABASE_PATH) {
//   throw new Error(
//     "Missing environment variable: DATABASE_PATH",
//   )
// }

export const db = drizzle(
  new Database("/sqlite2.db"), // new Database(process.env.DATABASE_PATH),
  { schema }
)

// Automatically run migrations on startup
void migrate(db, {
  migrationsFolder: "app/drizzle/migrations",
})