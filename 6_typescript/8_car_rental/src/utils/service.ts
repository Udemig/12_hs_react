import { Car } from "../types";

type ReturnType = {
  results: Car[];
  total_count: number;
};

// Asenkron fonksiyonların return tipinde doğrudan fonksiyonun return ettiği veriyi yazdığımız zaman haat alırız. Asenkron fonksiyonların return tipi her zaman Promise type'ı kullanılarak ifade edilmeli. Sebebi ise fonksiyonun loading veya hata döndürme ihtimali diyebiliriz.
// Promise interface'i asenkron işlemerlini tipini ifade eder ona generic olarak gönderdiğimiz tip ise işlem başarılı olunca dönücek datanın tipidir
export const fetchCars = async (): Promise<ReturnType> => {
  const url =
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20&refine=make:BMW";

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
