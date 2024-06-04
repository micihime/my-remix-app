import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { db } from "~/drizzle/config.server";
import { items } from "~/drizzle/schema.server";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  // use drizzle to get the data
  const data = db.select().from(items).all()
  return json({
    data,
  })
}

export default function Items() {
  const items = useLoaderData<typeof loader>()
  return (
    <div>
      <h1> Items </h1>
      <ul>
        {items.data.map((item) => (
          <li key={item.id}>{item.title} - {item.description}</li>
        ))}
      </ul>
      <p>
        <Link to="/additem">
          Add an Item
        </Link>
      </p>
      <p>
        <Link to="/">
          Back Home
        </Link>
      </p>
    </div>
  )
}