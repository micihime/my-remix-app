import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { db } from "~/drizzle/config.server";
import { bartenders, customers, drinks, ingredients } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {
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
  db.insert(customers).values({ name: "customer 13" }).run()
  db.insert(customers).values({ name: "customer 14" }).run()
  db.insert(customers).values({ name: "customer 15" }).run()
  db.insert(customers).values({ name: "customer 16" }).run()

    const data = db.select().from(drinks).all()
    return json({
      data,
    })
}

export default function Items() {
  //const data = db.select().from(drinks).all() //throws error Server-only module referenced by client
  const items = useLoaderData<typeof loader>()

  return (
    <div>
      <h1> Bar </h1>
      <ul>
        {items.data.map(drink => (
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