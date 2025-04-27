import { Order, Product, User } from "@/types";

const BaseUrl = "http://localhost:9090";

// bütün siparişleri getir
const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${BaseUrl}/orders`);

  return res.json();
};

// bütün ürünleri getir
const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BaseUrl}/products`);

  return res.json();
};

// tek bir ürün getir
const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${BaseUrl}/products/${id}`);

  return res.json();
};

// bir ürünü güncelle
const updateProduct = async (
  id: string,
  product: Partial<Product>
): Promise<Product> => {
  const res = await fetch(`${BaseUrl}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

// ürün sil
const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${BaseUrl}/products/${id}`, {
    method: "DELETE", // GET dışındaki isteklerde methodu belirtmek gerekiyor
  });

  return res.json();
};

// ürün oluştur
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

// bütün kullanıcıları getir
const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${BaseUrl}/users`);

  return res.json();
};

// bir kullanıcıyı sil
const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${BaseUrl}/users/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

// tek bir kullanıcıyı getir
const getUser = async (id: string): Promise<User> => {
  const res = await fetch(`${BaseUrl}/users/${id}`);

  return res.json();
};

// anansayfa için verileri döndüren fonksiyon
const getValues = async () => {
  const users = await getUsers();
  const products = await getProducts();
  const orders = await getOrders();

  return {
    total_users: users.length,
    total_products: products.length,
    total_orders: orders.length,
    total_price: orders.reduce((acc, order) => acc + order.total_price, 0),
  };
};

export {
  getOrders,
  getProducts,
  deleteProduct,
  createProduct,
  getProduct,
  updateProduct,
  getUsers,
  deleteUser,
  getUser,
  getValues,
};
