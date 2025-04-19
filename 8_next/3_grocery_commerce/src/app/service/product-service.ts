import { GetProductsResponse, GetProductResponse } from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Bütün ürünleri getirir
const getProducts = async (): Promise<GetProductsResponse> => {
  const res = await fetch(`${BASE_URL}/api/groceries`);

  return res.json();
};

// Belirli bir ürünü getirir
const getProduct = async (id: string): Promise<GetProductResponse> => {
  const res = await fetch(`${BASE_URL}/api/groceries/${id}`);

  return res.json();
};

export { getProducts, getProduct };
