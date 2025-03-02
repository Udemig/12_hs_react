/*
 ! Type Casting - Tür Dönüşümü

 * Bir değişkenin tanımlanmasının ardından kullanıldığı yere özel olarak farklı bir tipte algılanmasını istiyorsak type casting kullanırız
 
 * As operatörü kullanıldığı kod satırının değişkenin tipini değiştirmeye yarar.
*/

type Product = {
  name: string;
  price: string | number;
};

let product1: Product = {
  name: "Laptop",
  price: 10000000,
};

/*
 * Normalde price string veya number olabilceğinden
 * Number'a a özgü olan toFixed() methodunu kullanamıyoruz
 * As kullanarak aşağıdaki kod starına özel price değişkenin tipini number olarak değiştirdik
 * Bu sayede .toFixed() methodunu kullandık.
 */
(product1.price as number).toFixed();

// Örnek - 2

// Bu kisi verisi bize firebase'den gelmiş olsun (type'ıda firebase belirlemiş)
let kisi: unknown = {
  name: "John",
  age: 56,
  address: "1237sokak no:96",
};

// kişi nesnenin tipi unknown olduğu için age değerine erişemiyoruz
// kisi.age; //!HATA

// Nesne için bir tip oluşturuyorum
interface IPerson {
  name: string;
  age: number;
  address: string;
}

// kişi nesnenin değerlerine erişmek için varsayılan tipini değiştir
(kisi as IPerson).age;
