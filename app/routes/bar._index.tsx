import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { db } from "~/drizzle/config.server";
import { bartenders, customers, drinks, ingredients, orders } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {
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