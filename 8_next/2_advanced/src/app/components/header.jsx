import NavLink from "./nav-link";
import { getRecipes } from "../service";

export default async function Header() {
  const { recipes } = await getRecipes();

  return (
    <div className="flex justify-between items-center p-4 font-bungee-spice">
      <h1 className="text-2xl font-bold">Recipe App</h1>

      <div className="flex gap-4">
        <NavLink href="/recipes" name="Tarifler Server" />
        <NavLink href="/recipes-c" name="Tarifler Client" />
      </div>
    </div>
  );
}
