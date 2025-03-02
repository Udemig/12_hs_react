/*
 * Omit
 * Bir type'da istemediğimiz bir değer olduğunda bütün tipi baştan azmak yerine istemediğimiz değeri çıkartıp tipi kullanmamızı sağlar
 */

type Product = {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
};

// api'dan ürünler alınınca bir ürün dizisi dönüceği için Product tipini kullandık
const getProducts = (): Product[] => {
  return [];
};

// api'a yeni ürün ekliyeceği ama product tipini kullanamayız çünkü id'yi biz eklemiyorız
const createProduct = (newProduct: Omit<Product, "id">) => {};

createProduct({ name: "laptop", price: 3434, isAvailable: true });
