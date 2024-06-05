import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { and, eq, gt, gte, lt, ne, not, sql } from "drizzle-orm";

import { db } from "~/drizzle/config.server";
import { drinks, ingredients } from "~/drizzle/schema.server";

export async function loader({ request, }: LoaderFunctionArgs) {  
    const ingredientOverview = await db.select({
        drinkId: drinks.id,
        drink: drinks.name,
        ingredientCount: sql<number>`cast(count(${ingredients.id}) as int)`,
      })
        .from(drinks)
            .leftJoin(ingredients, eq(drinks.id, ingredients.drinkId))
        .groupBy(drinks.id)

    const recipes = await db.select({
        drinkId: drinks.id,
        drink: drinks.name,
        ingredientList: ingredients.name
      })
        .from(drinks)
            .leftJoin(ingredients, eq(drinks.id, ingredients.drinkId))
        .groupBy(drinks.id)
    console.log(recipes[0])

    return json({
      recipes,
      ingredientOverview
    })
}

export default function Items() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1> Recipe </h1>
      <ul>
        {data.recipes.map(recipe => (
          <li key={recipe.drinkId}>{recipe.drink} - ingredient {recipe.ingredientList}</li>
        ))}
      </ul>

      <h1> Ingredients overview </h1>
      <ul>
        {data.ingredientOverview.map(drinks => (
          <li key={drinks.drinkId}>{drinks.drink} has {drinks.ingredientCount} ingredients</li>
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