import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { and, eq, gte, lt, ne, not, sql } from "drizzle-orm";

import { db } from "~/drizzle/config.server";
import { drinks, ingredients } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {  
    //join

    db.insert(ingredients).values({ name: "lotus", drinkId: 1 }).run()
    db.insert(ingredients).values({ name: "jasmine", drinkId: 1 }).run()
    db.insert(ingredients).values({ name: "rose", drinkId: 1 }).run()
    db.insert(ingredients).values({ name: "orchid", drinkId: 1 }).run()
    db.insert(ingredients).values({ name: "gladiolus", drinkId: 1 }).run()
    db.insert(ingredients).values({ name: "marigold", drinkId: 2 }).run()
    db.insert(ingredients).values({ name: "hibiscus", drinkId: 3 }).run()
    db.insert(ingredients).values({ name: "buttercup", drinkId: 3 }).run()
    db.insert(ingredients).values({ name: "lily", drinkId: 3 }).run()
    db.insert(ingredients).values({ name: "saffron", drinkId: 3 }).run()
    db.insert(ingredients).values({ name: "poppy", drinkId: 4 }).run()
    db.insert(ingredients).values({ name: "primrose", drinkId: 4 }).run()
    db.insert(ingredients).values({ name: "daisy", drinkId: 4 }).run()
    db.insert(ingredients).values({ name: "iris", drinkId: 5 }).run()
    db.insert(ingredients).values({ name: "hydrangea", drinkId: 5 }).run()

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