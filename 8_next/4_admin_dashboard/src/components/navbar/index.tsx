import { sections } from "@/utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./nav-link";

export default function Navbar() {
  return (
    <div className="min-h-screen min-w-[60px] shadow-lg text-black bg-white">
      <div className="navbar flex flex-col gap-5 text-gray-500 fixed h-screen z-50 bg-white border-r border-zinc-300">
        <button className="flex items-start justify-start pl-5 pt-5 text-2xl">
          <input type="checkbox" id="menu-toggle" />

          <label htmlFor="menu-toggle">
            <RxHamburgerMenu />
          </label>
        </button>

        <div>
          {sections.map((i, key) => (
            <NavLink {...i} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
