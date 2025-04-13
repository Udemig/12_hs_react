import Link from "next/link";
import { getRecipes } from "../service";

export default async function Header() {
  const { recipes } = await getRecipes();

  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Recipe App</h1>

      <div className="flex gap-4">
        <Link href="/recipes">Tarifler Server ({recipes.length})</Link>
        <Link href="/recipes-c">Tarifler Client</Link>
      </div>
    </div>
  );
}
