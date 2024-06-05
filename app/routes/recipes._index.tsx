import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { and, eq, gte, lt, ne, not, sql } from "drizzle-orm";

import { db } from "~/drizzle/config.server";
import { drinks, ingredients } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {  
    //join
    const recipe = await db.select().from(drinks).leftJoin(ingredients, eq(drinks.id, ingredients.drinkId))

    return json({
      recipe
    })
}

export default function Items() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1> Recipe </h1>
      <ul>
        {data.recipe.map(recipe => (
          <li key={recipe.drinks.id}>{recipe.drinks.name} - ingredient {recipe.ingredients?.name}</li>
        ))}
      </ul>

      <p>
        <Link to="/">
          Back Home
        </Link>
      </p>
    </div>
  )
}