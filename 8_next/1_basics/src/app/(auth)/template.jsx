"use client";

import { useState } from "react";
import Link from "next/link";

// Layout bileşenleri ekrana basılcak sayfaları children propu olarak alır
export default function AuthLayout({ children }) {
  const [username, setUsername] = useState("");

  return (
    <div className="flex w-full items-center p-5 gap-10 page">
      <aside className="border h-fit rounded nav flex flex-col p-10 text-xl">
        <h1 className="font-bold">Merhaba, {username}</h1>

        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Link href="/login">Giriş Yap</Link>
        <Link href="/signup">Kayıt Ol</Link>
      </aside>

      <div>{children}</div>
    </div>
  );
}
