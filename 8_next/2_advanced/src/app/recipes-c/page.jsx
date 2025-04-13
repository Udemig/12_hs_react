"use client";

import { useEffect, useState } from "react";
import { getRecipes } from "../service";
import Link from "next/link";
import Image from "next/image";

export default function RecipesC() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data.recipes);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="client-component min-h-screen">
      <h1 className="text-2xl font-bold">Recipes</h1>
      <div>
        {recipes?.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="flex gap-4 mt-10 p-2 rounded-md border hover:bg-zinc-200/10 transition"
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={100}
              height={100}
            />

            <div>
              <h1>{recipe.name}</h1>
              <h1>{recipe.cuisine}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
