"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // butona tıklanınca
  const handleDelete = async () => {
    // silme işlemi için onay al
    if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;

    try {
      setIsLoading(true);
      await deleteProduct(id);
      router.refresh();
      alert("İşlem başarılı");
    } catch (error) {
      alert("İşlem başarısız");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className={`bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors w-19 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      {isLoading ? "Siliniyor..." : "Sil"}
    </button>
  );
}
