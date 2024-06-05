import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { db } from "~/drizzle/config.server";
import { bartenders, customers, drinks, ingredients } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {
    const data = db.select().from(drinks).all()
    return json({
      data,
    })
}

export default function Items() {
  //const data = db.select().from(drinks).all() //error Server-only module referenced by client
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