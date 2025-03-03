import { Car } from "../types";

export default function calcPrice(arac: Car): number {
  // Temel fiyatı belirleyelim (örneğin 200 TL'den başlıyoruz)
  let price = 500;

  // Aracın yaşı: Yeni araçlar daha pahalı, eski araçlarda indirim uygulanabilir.
  const aracYili = parseInt(arac.year);
  const simdikiYil = new Date().getFullYear();
  const yas = simdikiYil - aracYili;
  // Her yaş için %2 indirim, maksimum %20 indirim
  const yasIndirimi = Math.min(yas * 0.02, 0.2);
  price *= 1 - yasIndirimi;

  // Motor hacmi (displ): Motor hacmi arttıkça ek ücret uygulanabilir.
  // displ genellikle litre cinsindendir; cc'ye çevirmek için 1000 ile çarpıyoruz.
  const cc = arac.displ * 1000;
  let motorUcreti = 0;
  if (cc > 1000) {
    motorUcreti = (cc - 1000) * 0.2; // cc başına 0.2 TL ek ücret
  }
  price += motorUcreti;

  // Sonucu yuvarlayarak döndür (2 ondalık basamak)
  return Math.round(price * 100) / 100;
}
