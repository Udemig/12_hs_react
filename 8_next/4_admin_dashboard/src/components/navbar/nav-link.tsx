"use client";

import { Option } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ name, icon, url }: Option) {
  const path = usePathname();

  return (
    <Link
      href={url || "/"}
      className={`flex items-center gap-2 p-5 hover:bg-gray-100 transition border-l-2 border-transparent ${
        path === url ? "text-blue-500 !border-blue-500" : ""
      }`}
    >
      {icon}

      <span className="nav-text">{name}</span>
    </Link>
  );
}
