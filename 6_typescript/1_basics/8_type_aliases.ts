/*
 ! Type Aliases | Custom Type
 * Şuana kadar tip ataması yaparken js'de var olan temel tiplerin yanısıra ekstra olaarak typescript'deki bir iki tipi kullandık.

 * Gerçek projelerde o anki yaptığımız işe özel spesifik veri tiplerine ihtiyaç duyabiliyoruz.

 * Bunları tanımlamak için type anahtar kelimesini kullanırız.

 ? Neden ihtiyacımız var?
 * Çünkü, belirlediğimiz bir type'ı proje içerisinde bir çok alanda / sayfada kullanmanız gerekebilir. Bu nokatada type aliases kullanrak kendi tipimizi oluşturusak ve bu oluşturuğumuzu tipi export edersek kod tekrarının önüne geçebiliriz.
*/

// Örnek - 1
// kendi özel tipimizi oluşturalım
type metin = string;

// kendi oluşturduğumuz tipi kullanalım
let kullanici_ismi: metin = "Zeki";

// Örnek - 2
// Uçuş projesinde sıkça kullanıcağımız enlem ve boylam değerlerini içeren dizinin tipini tanımlayalım

type Geo = [number, number];

let xCoord: Geo = [56, 78];

let yCoord: Geo = [45, 34];

let flightRoute: Geo[] = [
  [12, 13],
  [13, 14],
  [14, 15],
];

// Örnek - 3

// aynı tipi birden fazla kullanammız gereken bir seneryo
let user1: { name: string; age: number } = { name: "Ali", age: 45 };

let user2: { name: string; age: number } = { name: "Ayşe", age: 24 };

let updateUser = (newUser: { name: string; age: number }) => {};

// type aliases ile kendi tipimizi oluşturarak yukarıdaki kod tekrarını önleyebiliriz
type UserType = { name: string; age: number };

let user3: UserType = { name: "Ali", age: 45 };

let user4: UserType = { name: "Ayşe", age: 24 };

let updateUserr = (newUser: UserType) => {};
