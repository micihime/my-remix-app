import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { db } from "~/drizzle/config.server";
import { items } from "~/drizzle/schema.server";

export async function action({
    request,
  }: ActionFunctionArgs) {
    db.insert(items).values({ title: "Item title" }).run()
    return {
      success: true,
    }
  }
  export async function loader({
    request,
  }: LoaderFunctionArgs) {
    // use drizzle to get the data
    const data = db.select().from(items).all()
    return json({
      data,
    })
  }
  export default function Index() {
    const items = useLoaderData<typeof loader>()
    return (
      <div>
        <h1> Items </h1>
        <ul>
          {items.data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <Form method="POST">
          <input type="submit" value="Submit" />
        </Form>
      </div>
    )
  }