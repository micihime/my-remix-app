import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { and, eq, gte, lt, ne, not, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3"

import { db } from "~/drizzle/config.server";
import { bartenders, customers, drinks, ingredients, orders, people, items } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {  
    //Select with all columns
    const allDrinks = db.select().from(drinks).orderBy(drinks.price).all()
    
    //Filter operators in the .where() method
    const drinks1 = await db.select().from(drinks).where(eq(drinks.price, 5)); //= 5;
    const drinks2 = await db.select().from(drinks).where(lt(drinks.price, 5)); //< 5;
    const drinks3 = await db.select().from(drinks).where(gte(drinks.price, 5)); //>= 5;
    const drinks4 = await db.select().from(drinks).where(ne(drinks.price, 5)); //<> 5;
    
    //the same but different
    const drinks5 = await db.select().from(drinks).where(not(eq(drinks.id, 4)));
    const drinks6 = await db.select().from(drinks).where(sql`${drinks.id} <> 4`);
    const drinks7 = await db.select().from(drinks).where(sql`not ${drinks.id} = 4`);

    const drinks8 = await db.select().from(drinks).where(sql`lower(${drinks.name}) = 'mojito'`);
    const drinks9 = await db.select().from(drinks).where(
        and(
          lt(drinks.id, 4),
          eq(drinks.price, 5)
        )
      );

    const filteredDrinks = drinks9;

    return json({
      allDrinks,
      filteredDrinks
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
      
      <p>Filtered drinks</p>
      <ul>
        {data.filteredDrinks.map(drink => (
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