import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
      <li>
          <Link to="/signup">Test form</Link>
        </li>
        <li>
          <Link to="/items">Items</Link> or <Link to="/additem">Add an Item</Link>
        </li>
        <li>
          <Link to="/people">People</Link> or <Link to="/addperson">Add a Person</Link>
        </li>
        <li>
          <Link to="/bar">Bar Playground</Link> or <Link to="/menu">Menu</Link> or <Link to="/recipes">Recipes</Link> or <Link to="/orders">Orders</Link>
        </li>  
      </ul>
    </div>
  );
}
