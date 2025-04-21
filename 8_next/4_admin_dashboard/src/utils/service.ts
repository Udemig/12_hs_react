import { Order, Product } from "@/types";

const BaseUrl = "http://localhost:9090";

const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${BaseUrl}/orders`);

  return res.json();
};

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BaseUrl}/products`);

  return res.json();
};

export { getOrders, getProducts };
