import { colgroup } from "motion/react-client";
import { Car } from "../types";

type ReturnType = {
  results: Car[];
  total_count: number;
};

// Asenkron fonksiyonların return tipinde doğrudan fonksiyonun return ettiği veriyi yazdığımız zaman haat alırız. Asenkron fonksiyonların return tipi her zaman Promise type'ı kullanılarak ifade edilmeli. Sebebi ise fonksiyonun loading veya hata döndürme ihtimali diyebiliriz.
// Promise interface'i asenkron işlemerlini tipini ifade eder ona generic olarak gönderdiğimiz tip ise işlem başarılı olunca dönücek datanın tipidir
export const fetchCars = async (
  make?: string,
  model?: string,
  year?: string,
  page: string = "1"
): Promise<ReturnType> => {
  // Start with the base URL
  let url =
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?";

  // Eğer marka filtresi varsa, url'e marka filtresini ekleyin
  if (make) {
    url += `&refine=make:${encodeURIComponent(make)}`;
  }

  // Eğer model filtresi varsa, url'e model filtresini ekleyin
  if (model) {
    url += `&refine=model:${encodeURIComponent(model)}`;
  }

  // Eğer yıl filtresi varsa, url'e yıl filtresini ekleyin
  if (year) {
    url += `&refine=year:${encodeURIComponent(year)}`;
  }

  // page    1       2       3       4       5
  // limit   10      10      10      10      10
  // offset  0       10      20      30      40
  const offset = (parseInt(page) - 1) * 10;

  url += `&limit=10`;
  url += `&offset=${offset}`;

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
