import { drizzle } from "drizzle-orm/better-sqlite3"
import { db } from "./config.server";
import { bartenders, customers, drinks, ingredients, orders, people, userProfiles, users } from "~/drizzle/schema.server";

// import * as dotenv from "dotenv";
// dotenv.config({ path: "./.env.development" });

// if (!("DATABASE_URL" in process.env))
//         throw new Error("DATABASE_URL not found on .env.development");

const main = async () => {
  db.insert(drinks).values({ name: "mojito", price: 5 }).run()
    
    // const client = new Pool({
    //     connectionString: process.env.DATABASE_URL,
    // });
    // const db = drizzle(client);
    // const data: (typeof users.$inferInsert)[] = [];

    // for (let i = 0; i < 20; i++) {
    //     data.push({
    //         username: faker.internet.userName(),
    //         email: faker.internet.email(),
    //     });
    // }

    // console.log("Seed start");
    // await db.insert(users).values(data);
    // console.log("Seed done");
};

const seedData = async () => {
  db.insert(drinks).values({ name: "mojito", price: 5 }).run()
  db.insert(drinks).values({ name: "margarita", price: 4 }).run()
  db.insert(drinks).values({ name: "tequila sunrise", price: 4 }).run()
  db.insert(drinks).values({ name: "hugo", price: 5 }).run()
  db.insert(drinks).values({ name: "negroni", price: 6 }).run()

  db.insert(bartenders).values({ name: "bartender 1" }).run()
  db.insert(bartenders).values({ name: "bartender 2" }).run()
  db.insert(bartenders).values({ name: "bartender 3" }).run()
  db.insert(bartenders).values({ name: "bartender 4" }).run()
  db.insert(bartenders).values({ name: "bartender 5" }).run()
  db.insert(bartenders).values({ name: "bartender 6" }).run()
  db.insert(bartenders).values({ name: "bartender 7" }).run()

  db.insert(customers).values({ name: "customer 1" }).run()
  db.insert(customers).values({ name: "customer 2" }).run()
  db.insert(customers).values({ name: "customer 3" }).run()
  db.insert(customers).values({ name: "customer 4" }).run()
  db.insert(customers).values({ name: "customer 5" }).run()
  db.insert(customers).values({ name: "customer 6" }).run()
  db.insert(customers).values({ name: "customer 7" }).run()
  db.insert(customers).values({ name: "customer 8" }).run()
  db.insert(customers).values({ name: "customer 9" }).run()
  db.insert(customers).values({ name: "customer 10" }).run()
  db.insert(customers).values({ name: "customer 11" }).run()
  db.insert(customers).values({ name: "customer 12" }).run()
  db.insert(customers).values({ name: "customer 13" }).run()
  db.insert(customers).values({ name: "customer 14" }).run()
  db.insert(customers).values({ name: "customer 15" }).run()

  db.insert(orders).values({ bartenderId: 1, customerId: 1, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 2, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 3, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 4, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 5, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 2, customerId: 1, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 2, customerId: 2, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 2, customerId: 3, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 2, customerId: 4, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 2, customerId: 5, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 2, customerId: 6, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 2, customerId: 7, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 2, customerId: 8, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 3, customerId: 9, drinkId: 3 }).run()
  db.insert(orders).values({ bartenderId: 3, customerId: 10, drinkId: 4 }).run()
  db.insert(orders).values({ bartenderId: 3, customerId: 11, drinkId: 4 }).run()
  db.insert(orders).values({ bartenderId: 3, customerId: 12, drinkId: 4 }).run()
  db.insert(orders).values({ bartenderId: 3, customerId: 13, drinkId: 4 }).run()
  db.insert(orders).values({ bartenderId: 4, customerId: 14, drinkId: 4 }).run()
  db.insert(orders).values({ bartenderId: 4, customerId: 15, drinkId: 4 }).run()
  db.insert(orders).values({ bartenderId: 4, customerId: 1, drinkId: 4 }).run()
  db.insert(orders).values({ bartenderId: 4, customerId: 1, drinkId: 5 }).run()
  db.insert(orders).values({ bartenderId: 4, customerId: 1, drinkId: 5 }).run()
  db.insert(orders).values({ bartenderId: 5, customerId: 2, drinkId: 5 }).run()
  db.insert(orders).values({ bartenderId: 6, customerId: 2, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 6, customerId: 3, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 6, customerId: 4, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 6, customerId: 11, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 6, customerId: 13, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 6, customerId: 15, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 6, customerId: 6, drinkId: 3 }).run()
  db.insert(orders).values({ bartenderId: 6, customerId: 8, drinkId: 3 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 1, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 7, drinkId: 4 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 5, drinkId: 4 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 5, drinkId: 5 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 4, drinkId: 5 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 9, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 1, customerId: 11, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 7, customerId: 15, drinkId: 2 }).run()
  db.insert(orders).values({ bartenderId: 7, customerId: 14, drinkId: 1 }).run()
  db.insert(orders).values({ bartenderId: 7, customerId: 13, drinkId: 4 }).run()

	db.insert(ingredients).values({ name: "lotus", drinkId: 1 }).run()
  db.insert(ingredients).values({ name: "jasmine", drinkId: 1 }).run()
  db.insert(ingredients).values({ name: "rose", drinkId: 1 }).run()
  db.insert(ingredients).values({ name: "orchid", drinkId: 1 }).run()
  db.insert(ingredients).values({ name: "gladiolus", drinkId: 1 }).run()
  db.insert(ingredients).values({ name: "marigold", drinkId: 2 }).run()
  db.insert(ingredients).values({ name: "hibiscus", drinkId: 3 }).run()
  db.insert(ingredients).values({ name: "buttercup", drinkId: 3 }).run()
  db.insert(ingredients).values({ name: "lily", drinkId: 3 }).run()
  db.insert(ingredients).values({ name: "saffron", drinkId: 3 }).run()
  db.insert(ingredients).values({ name: "poppy", drinkId: 4 }).run()
  db.insert(ingredients).values({ name: "primrose", drinkId: 4 }).run()
  db.insert(ingredients).values({ name: "daisy", drinkId: 4 }).run()
  db.insert(ingredients).values({ name: "iris", drinkId: 5 }).run()
  db.insert(ingredients).values({ name: "hydrangea", drinkId: 5 }).run()

  db.insert(users).values({ username: "test1", email: "test@test.sk" }).run()
  db.insert(users).values({ username: "test2", email: "test2@test.com" }).run()

  db.insert(userProfiles).values({ userId: 1, name: "testik" }).run()
}

main();