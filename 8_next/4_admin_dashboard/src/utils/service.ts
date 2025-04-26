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

const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${BaseUrl}/products/${id}`, {
    method: "DELETE", // GET dışındaki isteklerde methodu belirtmek gerekiyor
  });

  return res.json();
};

const createProduct = async (
  product: Omit<Product, "id">
): Promise<Product> => {
  const res = await fetch(`${BaseUrl}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

export { getOrders, getProducts, deleteProduct, createProduct };
