import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import type { ActionFunctionArgs } from "@remix-run/node";
import { db } from "~/drizzle/config.server";
import { items } from "~/drizzle/schema.server";

export default function AddItem() {
  return (
    <div>
      <h1> Add an Item </h1>
      <Form method="post">
        <p>
          <input type="title" name="title" />
        </p>
        <p>
          <input type="description" name="description" />
        </p>
        <button type="submit">Add</button>
      </Form>
    </div>
  );
}

export async function action({ request, }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = String(formData.get("title"));
  const description = String(formData.get("description"));
  //console.log(title + " - " + description);
  
  db.insert(items).values({ title: title, description: description }).run()
  
  return redirect("/items");
}