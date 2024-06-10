import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { sql } from "drizzle-orm";

import { db } from "~/drizzle/config.server";
import { people } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {
  // use drizzle to get the data
  const usersAll = await db.query.users.findMany({ with: { profile: true } })
  console.log(usersAll)

  return json({
    usersAll
  })
}

export default function People() {
  const data = useLoaderData<typeof loader>()
  return (
    <div>
      <h1> People </h1>
      
      <p>
        <Link to="/">
          Back Home
        </Link>
      </p>
    </div>
  )
}