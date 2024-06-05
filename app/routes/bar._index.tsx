import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { and, eq, gte, lt, ne, not, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3"

import { db } from "~/drizzle/config.server";
import { bartenders, customers, drinks, ingredients, orders, people, items } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {  
    //Select with all columns
    const allDrinks = db.select().from(drinks).orderBy(drinks.price).all()
    
    // const result = await db.query.drinks.findMany({
    //     with: {
    //       posts: true      
    //     },
    //   });

    return json({
      allDrinks
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
      
      <p>
        <Link to="/">
          Back Home
        </Link>
      </p>
    </div>
  )
}