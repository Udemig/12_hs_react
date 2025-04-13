import { getRecipe, getRecipes } from "@/app/service";
import BuyBtn from "@/app/components/buy-btn";
import Image from "next/image";
import Link from "next/link";

// Normal şartlarda dinamik olarak hazırlanan sayfaları statik hale getirir.
// Pages router kullanıyorsanız getStaticPaths/getServerSideProps kullanılır
export async function generateStaticParams() {
  // bütün tarif verilerini alır
  const { recipes } = await getRecipes();

  // statik olarak önceden hazırlanıcak sayfaların parametrelerini (string olarak) return et
  return recipes.map((recipe) => ({
    id: String(recipe.id),
  }));
}

export default async function RecipePage({ params }) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return (
    <div className="server-component min-h-screen">
      <div className="flex flex-col items-center gap-10">
        <div className="flex justify-between items-center w-full">
          <Link href="/recipes" className="border p-2 text-xl w-fit rounded-md">
            Geri
          </Link>

          <BuyBtn />
        </div>

        <h1 className="text-4xl font-bold">{recipe.name}</h1>

        <Image
          src={recipe.image}
          alt={recipe.name}
          width={300}
          height={300}
          className="rounded-md"
        />

        <div className="flex flex-col gap-5 text-2xl w-full">
          <h1 className="flex justify-between">
            <p>Mutfak:</p>
            <p>{recipe.cuisine}</p>
          </h1>

          <h1 className="flex justify-between">
            <p>Rayting:</p>
            <p>{recipe.rating}</p>
          </h1>

          <h1 className="flex justify-between">
            <p>Zorluk:</p>
            <p>{recipe.difficulty}</p>
          </h1>
        </div>
      </div>
    </div>
  );
}
