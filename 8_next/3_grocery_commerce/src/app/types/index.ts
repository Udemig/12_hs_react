// Ürünler

type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo: string;
  __v: number;
};

type GetProductsResponse = {
  groceries: Product[];
};

type GetProductResponse = {
  grocery: Product;
};

// Sepet
type Cart = {
  message: string;
  cart: {
    _id: string;
    userId: string;

    items: {
      grocery: Product;
      quantity: number;
      price: number;
      name: string;
      _id: string;
    }[];

    totalAmount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

export type { Product, GetProductsResponse, GetProductResponse, Cart };
