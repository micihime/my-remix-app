import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { and, eq, gte, lt, ne, not, sql } from "drizzle-orm";

import { db } from "~/drizzle/config.server";
import { drinks, customers, orders } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) { 
  //join
  const ordersAll = await db.select()
    .from(orders)
    .leftJoin(customers, eq(customers.id, orders.customerId))
    .leftJoin(drinks, eq(drinks.id, orders.drinkId)) 

  return json({
    ordersAll
  })
}

export default function Items() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1> Orders </h1>
      <ul>
        {data.ordersAll.map(order => (
          <li key={order.customer_bartender_drinks.id}>{order.customers?.name} ordered {order.drinks?.name}</li>
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