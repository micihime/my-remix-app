import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, Link, redirect, useLoaderData } from "@remix-run/react";
import { sql } from "drizzle-orm";

import { db } from "~/drizzle/config.server";
import { userProfiles, users } from "~/drizzle/schema.server";

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
      <Form method="post">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" />
        </div>
        <div>
          <label htmlFor="job">Job:</label>
          <input type="text" name="job" />
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input type="number" name="salary" />
        </div>
        <div>
          <label htmlFor="gender">Salary:</label>
          <input type="text" name="gender" />
        </div>
        <button type="submit">Add</button>
      </Form>
      <p>
        <Link to="/">
          Back Home
        </Link>
      </p>
    </div>
  )
}

export async function action({ request, }: ActionFunctionArgs) {
  const formData = await request.formData();
  //console.log(formData)

  const username = String(formData.get("username"));
  const email = String(formData.get("email"));
  const name = String(formData.get("name"));
  const address = String(formData.get("address"));
  const phone = String(formData.get("phone"));
  const job = String(formData.get("job"));
  const salary = String(formData.get("salary"));
  const gender = String(formData.get("gender"));

  const test = await db.insert(users).values({ username: username, email: email })
  console.log(test) //{ changes: 1, lastInsertRowid: 5 }
  //const test2 = await db.insert(userProfiles).values({ username: username, email: email })
  //console.log(test2) //{ changes: 1, lastInsertRowid: 5 }
  
  return redirect("/people");
}