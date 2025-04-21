"use client";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { CartItemProps } from "./cart-item";
import { removeCartItem, updateCartItem } from "@/app/service/basket-service";
import { userId } from "@/app/utils/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "../loader";

const ItemActions = ({ item }: CartItemProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUpdateQuantity = async (quantity: number) => {
    try {
      setIsLoading(true);
      await updateCartItem(userId, item.grocery._id, quantity);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveItem = async () => {
    try {
      setIsLoading(true);
      await removeCartItem(userId, item.grocery._id);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-300 rounded mr-4">
        <button
          disabled={item.quantity === 1 || isLoading}
          className="px-2 py-2 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50 cursor-pointer"
          onClick={() => handleUpdateQuantity(item.quantity - 1)}
        >
          <FaMinus />
        </button>

        <span className="px-3 py-1 border-x border-gray-300 min-w-[36px] text-center">
          {item.quantity}
        </span>

        <button
          disabled={item.quantity === item.grocery.stock || isLoading}
          onClick={() => handleUpdateQuantity(item.quantity + 1)}
          className="px-2 py-2 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50 cursor-pointer"
        >
          <FaPlus />
        </button>
      </div>

      <button
        disabled={isLoading}
        onClick={handleRemoveItem}
        className="text-red-600 hover:text-red-700 cursor-pointer disabled:opacity-50"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ItemActions;
