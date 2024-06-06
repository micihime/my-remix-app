import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import type { ActionFunctionArgs } from "@remix-run/node";
import { db } from "~/drizzle/config.server";
import { people } from "~/drizzle/schema.server";

export default function AddPerson() {
  return (
    <div>
      <h1> Add a Person </h1>
      <Form method="post">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="name" name="name" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" />
        </div>
        {/* <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div> */}
        <div>
          <label htmlFor="job">Job:</label>
          <input type="text" name="job" />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" />
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input type="number" name="salary" />
        </div>
        <div>
          <label htmlFor="isSomething">Is this person something?</label>
          <input type="radio" name="isSomething" />
        </div>
        <button type="submit">Add</button>
      </Form>
    </div>
  );
}

export async function action({ request, }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log(formData)

  const name = String(formData.get("name"));
  const address = String(formData.get("address"));
  //console.log(name);
  
  await db.insert(people).values({ name: name, address: address })
  
  return redirect("/people");
}