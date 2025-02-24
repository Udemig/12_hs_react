/*
 ! Default Param (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyiz bunun yerine varsayılan bir değere sahip olması istenebilir.
*/

// Örnek
function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Ali");
selamVer();

/* Soru:
 * Ürünün kdv'li fiyatını hespalayan bir fonksiyon yazınız
 * fonksiyon 2 parametre alsın 1.fiyat 2.kdv oranı
 * 2. paramtreye değer gönderilmediği zaman kdv 18% den hesaplansın
 * hesapla(200,35) ===> 270
 * hesapla(200) ===> 236
 */

const hesapla = (fiyat: number, kdv = 18): number => {
  return fiyat + (kdv / 100) * fiyat;
};

console.log("Varsayılan kdv'li fiyat", hesapla(200));
console.log("%35 kdv'li fiyat", hesapla(200, 35));
