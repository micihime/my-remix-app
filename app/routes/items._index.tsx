import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    items: [
      {
        id: 1,
        title: "My First Post",
      },
      {
        id: 2,
        title: "A Mixtape I Made Just For You",
      },
    ],
  });
};

export default function Items() {
  const { items } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
              {item.title}
          </li>
        ))}
      </ul>
    </main>
  );
}