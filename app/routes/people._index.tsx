import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/drizzle/config.server";
import { people } from "~/drizzle/schema.server";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  // use drizzle to get the data
  const data = db.select().from(people).all()
  return json({
    data,
  })
}

export default function People() {
  const people = useLoaderData<typeof loader>()
  return (
    <div>
      <h1> People </h1>
      <ul>
        {people.data.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}