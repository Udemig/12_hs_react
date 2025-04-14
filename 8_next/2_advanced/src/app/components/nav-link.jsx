"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, name }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname === href ? "bg-blue-500 p-2 rounded-md" : ""}
    >
      {name}
    </Link>
  );
}
