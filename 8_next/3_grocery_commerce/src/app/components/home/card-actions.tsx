"use client";

import { addToBasket } from "@/app/service/basket-service";
import { useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";

export default function CardActions({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userId = "furkan123"; // gerçek uygulamada kullanıcı id'si dinamik olucak

  const handleAddToCart = () => {
    setIsLoading(true);

    addToBasket(userId, productId, 1)
      .then(() => alert("sepete eklendi"))
      .finally(() => setIsLoading(false))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleAddToCart}
      className="bg-green-500 text-white shadow-sm rounded-full p-2 cursor-pointer transition-all hover:bg-green-600 hover:shadow-md disabled:brightness-85"
    >
      {isLoading ? <FaSpinner className="animate-spin" /> : <FaPlus />}
    </button>
  );
}
