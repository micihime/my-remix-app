import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

import type { ActionFunctionArgs } from "@remix-run/node";

export default function Signup() {
const actionData = useActionData<typeof action>();
  return (
    <div>
      <h1> Signup </h1>
      <Form method="post">
        <p>
          <input type="email" name="email" />
          {actionData?.errors?.email ? (
            <em>{actionData?.errors.email}</em>
            ) : null}
        </p>
        <p>
          <input type="password" name="password" />
          {actionData?.errors?.password ? (
            <em>{actionData?.errors.password}</em>
            ) : null}
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
  
  const errors:any = {};

  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (password.length < 12) {
    errors.password =
      "Password should be at least 12 characters";
  }

  if (Object.keys(errors).length > 0) {
    console.log(errors);
    return json({ errors });
  }

  console.log(email + " " + password);

  return redirect("/items");
}