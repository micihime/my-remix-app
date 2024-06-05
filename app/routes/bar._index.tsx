import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3"

import { db } from "~/drizzle/config.server";
import { bartenders, customers, drinks, ingredients, orders, people, items } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {  
    //Select with all columns
    const allDrinks = db.select().from(drinks).all()
    //Partial select
    const peopleMin = await db.select({
        field1: people.id,
        field2: people.name,
      }).from(people);
    const { field1, field2 } = peopleMin[0];
    //Using arbitrary expressions as selection fields
    const bartendersUpper = await db.select({
        id: bartenders.id,
        upperName: sql<string>`upper(${bartenders.name})`,
      }).from(bartenders);

    // const result = await db.query.drinks.findMany({
    //     with: {
    //       posts: true      
    //     },
    //   });

    return json({
      allDrinks,
      peopleMin,
      field1, 
      field2,
      bartendersUpper
    })
}

export default function Items() {
  //const data = db.select().from(drinks).all() //throws error Server-only module referenced by client
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1> Bar </h1>
      <p>Select with all columns</p>
      <ul>
        {data.allDrinks.map(drink => (
          <li key={drink.id}>{drink.name}</li>
        ))}
      </ul>
      <p>Partial select</p>
      <ul>
        {data.peopleMin.map(person => (
          <li key={person.field1}>{person.field2}</li>
        ))}
      </ul>
      <p>First person ID {data.field1}, their name {data.field2}</p>
      <p>Using arbitrary expressions as selection fields</p>
      <ul>
        {data.bartendersUpper.map(person => (
          <li key={person.id}>{person.upperName}</li>
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