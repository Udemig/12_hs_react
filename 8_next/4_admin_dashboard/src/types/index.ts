import { StaticImageData } from "next/image";
import { JSX } from "react";

interface Option {
  icon: JSX.Element;
  name: string;
  url?: string;
}

interface InfoCardItem {
  icon: StaticImageData;
  label: string;
  value: string | number;
}

interface Order {
  order_id: number;
  user_id: number;
  order_date: string;
  status: string;
  total_price: number;
  shipping_address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  items: {
    product_id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
  id: string;
}

interface ChartData {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      borderColor?: string | string[];
      backgroundColor?: string | string[];
    }
  ];
}

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image_url: string;
  rating: number;
  reviews_count: number;
  brand: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  phone: string;
  orders: {
    order_id: number;
    product_id: number;
    quantity: number;
    total_price: number;
    order_date: string;
  }[]; // sipariş nesnelerinden oluşan bir dizi
};

export type { Option, InfoCardItem, Order, ChartData, Product, User };
