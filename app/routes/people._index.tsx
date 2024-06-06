import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { sql } from "drizzle-orm";

import { db } from "~/drizzle/config.server";
import { people, users } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {
  // use drizzle to get the data
  const usersAll = await db.query.users.findFirst()

  const peopleAll = db.select().from(people).all()

  //Partial select
  const peopleMin = await db.select({
    field1: people.id,
    field2: people.name,
  }).from(people);
  const { field1, field2 } = peopleMin[0];

  //Using arbitrary expressions as selection fields
  const bartendersUpper = await db.select({
    id: people.id,
    upperName: sql<string>`upper(${people.name})`,
  }).from(people);

  return json({
    peopleAll,
    peopleMin,
    field1, 
    field2,
    bartendersUpper
  })
}

export default function People() {
  const data = useLoaderData<typeof loader>()
  return (
    <div>
      <h1> People </h1>
      <ul>
        {data.peopleAll.map((person) => (
          <li key={person.id}>{person.name}, living at {person.address}</li>
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
        <Link to="/addperson">
          Add a Person
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