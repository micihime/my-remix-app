import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { and, eq, gte, lt, ne, not, sql } from "drizzle-orm";

import { db } from "~/drizzle/config.server";
import { drinks, ingredients } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {  
    return null
}

export default function Items() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1> Orders </h1>
      
      <p>
        <Link to="/">
          Back Home
        </Link>
      </p>
    </div>
  )
}