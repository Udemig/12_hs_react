import { Cart } from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const addToBasket = async (
  userId: string,
  groceryId: string,
  quantity: number
): Promise<Cart> => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export { addToBasket };
