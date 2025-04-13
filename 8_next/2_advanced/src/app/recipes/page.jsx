import Image from "next/image";
import Link from "next/link";
import { getRecipes } from "../service";

// revalidate server component'larının cache'lenme süresini belirler
// eğer  değeri 0 yaparsanız cache'lenmemesi anlamına gelir
// export const revalidate = 60;

// server component'ları async olarak tanımlayabiliyoruz
export default async function Recipes() {
  // api'dan gelen veriyi bir değişkene atıp kullanabiliyoruz
  const { recipes } = await getRecipes();

  return (
    <div className="server-component min-h-screen">
      <h1 className="text-2xl font-bold">Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="flex gap-4 mt-10 p-2 rounded-md border hover:bg-zinc-200/10 transition"
          >
            <Image
              src={recipe.image}
              alt={recipe.name}
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
