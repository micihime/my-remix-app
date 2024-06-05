import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { eq, gte, lt, ne, not, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3"

import { db } from "~/drizzle/config.server";
import { bartenders, customers, drinks, ingredients, orders, people, items } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {  
    //Select with all columns
    const allDrinks = db.select().from(drinks).all()
    // //Partial select
    // const peopleMin = await db.select({
    //     field1: people.id,
    //     field2: people.name,
    //   }).from(people);
    // const { field1, field2 } = peopleMin[0];
    // //Using arbitrary expressions as selection fields
    // const bartendersUpper = await db.select({
    //     id: bartenders.id,
    //     upperName: sql<string>`upper(${bartenders.name})`,
    //   }).from(bartenders);
    //Filter operators in the .where() method
    const drinks1 = await db.select().from(drinks).where(eq(drinks.price, 5)); //= 5;
    const drinks2 = await db.select().from(drinks).where(lt(drinks.price, 5)); //< 5;
    const drinks3 = await db.select().from(drinks).where(gte(drinks.price, 5)); //>= 5;
    const drinks4 = await db.select().from(drinks).where(ne(drinks.price, 5)); //<> 5;
    //the same but different
    const drinks5 = await db.select().from(drinks).where(not(eq(drinks.id, 42)));
    const drinks6 = await db.select().from(drinks).where(sql`${drinks.id} <> 4`);
    const drinks7 = await db.select().from(drinks).where(sql`not ${drinks.id} = 4`);

    const drinks8 = await db.select().from(drinks).where(sql`lower(${drinks.name}) = 'mojito'`);

    // const result = await db.query.drinks.findMany({
    //     with: {
    //       posts: true      
    //     },
    //   });

    return json({
      allDrinks,
      drinks1
    })
}

export default function Items() {
  //const data = db.select().from(drinks).all() //throws error Server-only module referenced by client
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1> Bar </h1>
      <p>All drinks</p>
      <ul>
        {data.allDrinks.map(drink => (
          <li key={drink.id}>{drink.name}, {drink.price}</li>
        ))}
      </ul>
      
      <p>All drinks where drinks.price = 5</p>
      <ul>
        {data.drinks1.map(drink => (
          <li key={drink.id}>{drink.name}</li>
        ))}
      </ul>

      <p>
        <Link to="/">
          Back Home
        </Link>
      </p>
    </div>
  )
}