import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-500 p-5 text-xl flex justify-between items-center">
      <Link href="/">Amazon</Link>

      <nav className="flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
}
