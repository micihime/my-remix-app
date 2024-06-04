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
        <p>
          <input type="name" name="name" />
        </p>
        <p>
          <input type="address" name="address" />
        </p>
        <button type="submit">Add</button>
      </Form>
    </div>
  );
}

export async function action({ request, }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name"));
  const address = String(formData.get("address"));
  //console.log(name);
  
  db.insert(people).values({ name: name, address: address }).run()
  
  return redirect("/people");
}