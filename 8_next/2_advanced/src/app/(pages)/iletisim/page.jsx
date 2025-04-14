"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

// Client Component
export default function Iletisim() {
  const [name, setName] = useState("");

  //useRouter
  const router = useRouter();

  // usePathname
  const pathname = usePathname();

  // useSearchParams
  const searchParams = useSearchParams();

  console.log(searchParams.get("name"));
  console.log(searchParams.get("x"));

  return (
    <div className="client-component min-h-screen">
      <div>
        <button onClick={() => router.back()}>Geri</button>
        <button onClick={() => router.forward()}>İleri</button>
        <button onClick={() => router.refresh()}>Yenile</button>
        <button onClick={() => router.push("?name=John&x=10")}>
          Yönlendir
        </button>
        <button onClick={() => router.replace("/")}>Değiştir</button>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-10">İletişim Sayfası</h1>

        <span className="client">Client Component (CSR)</span>
      </div>

      <div>
        <input onChange={(e) => setName(e.target.value)} />
        <button onClick={() => alert("Selam " + name)}>Tıkla</button>
      </div>
    </div>
  );
}
