"use client";

import { useState } from "react";

// Client Component
export default function Iletisim() {
  const [name, setName] = useState("");
  console.log("İletişim Component'ı renderlandı");

  return (
    <div className="client-component min-h-screen">
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
