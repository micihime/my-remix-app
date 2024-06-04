import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import type { ActionFunctionArgs } from "@remix-run/node";

export default function Signup() {
  return (
    <div>
      <h1> Signup </h1>
      <Form method="post">
        <p>
          <input type="email" name="email" />
        </p>
        <p>
          <input type="password" name="password" />
        </p>
        <button type="submit">Sign Up</button>
      </Form>
    </div>
  );
}

export async function action({ request, }: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  console.log(email + " " + password);
  
  return redirect("/items");
}