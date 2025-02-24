/*
 * Typescript, js'in bazı önemli açıklarını düzeltmek için microsoft tarafından geliştirilen bir programalama dilidir.

 * Açıklar:
 * * Js'de tanımladığımız değişkene daha sonra değer ataması yaparken ilk tanımladığımız değerden farklı tipte bir değer atayabiliyoruz.
  
 * * Js'de çok kısıtlı bir oto. tamamlama desteği bulunuyor. Typescript tarafından api'dan gelene verilerde bile oto olarak tamamlanır 

 * * Js'de kısıtlı bir editör hata kontrolü vardır. Typescript tarafından çok daha gelişmiş bir editor hata tespiti vardır.
 
 * * Js'de değişkenlere tip ataması yapamıyoruz

 * Not
 * * Typescript kodları tarayıcı tarafından doğrudan çalıştırılamaz. Bundan dolayı ts kodunu çalıştırmak için önce js'e derlememiz gerekiyor.
 * * TSC - Tyescript Complier - Derleyici
*/

const selamla = (isim: string) => {
  console.log("Selam " + isim);
};

selamla("ahmet");
