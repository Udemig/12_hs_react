/*
 ! Function Type
 * Typescript'de fonksiyonların tipini tanımlamaktan kastımız fonksiyonun aldığı parametrlerin ve return ettiği değerin tanımlamaktan ibarettir.
*/

// normal fonk
function hesaplama(a: number, b: number): string {
  return "Hesaplama Sonucu:" + (a + b);
}

const sonuc = hesaplama(10, 50);

console.log(sonuc);

// arrow fonk
const hesapla = (a: number, b: number): number => {
  return a + b;
};
