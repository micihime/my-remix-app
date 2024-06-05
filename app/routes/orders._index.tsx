import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { and, asc, desc, eq, gt, gte, lt, ne, not, sql, sum } from "drizzle-orm";

import { db } from "~/drizzle/config.server";
import { drinks, customers, orders } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) { 
  //join subquery
  const ordersAllSubquery = db.select()
    .from(orders)
    .leftJoin(customers, eq(customers.id, orders.customerId))
    .leftJoin(drinks, eq(drinks.id, orders.drinkId))

  const ordersAll = await ordersAllSubquery.orderBy(asc(customers.id), desc(drinks.price))

  const customerDrinkCount = await db.select({
    customerId: customers.id,
    customer: customers.name,
    drinkCount: sql<number>`cast(count(${drinks.id}) as int)`,
    amountSpent: sum(drinks.price)
  })
    .from(orders)
        .leftJoin(customers, eq(customers.id, orders.customerId))
        .leftJoin(drinks, eq(drinks.id, orders.drinkId))
    .groupBy(customers.name)
    .having(({ drinkCount: count }) => gt(count, 1))

  return json({
    ordersAll,
    customerDrinkCount
  })
}

export default function Items() {
  const data = useLoaderData<typeof loader>()
  
  return (
    <div>
      <h1> Customer overview </h1>
      <ul>
        {data.customerDrinkCount.map(customer => (
          <li key={customer.customerId}>{customer.customer} drank {customer.drinkCount} drinks for {customer.amountSpent} in total</li>
        ))}
      </ul>

      <h1> Order log </h1>
      <ul>
        {data.ordersAll.map(order => (
          <li key={order.customer_bartender_drinks.id}>{order.customers?.name} ordered {order.drinks?.name} for {order.drinks?.price}</li>
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