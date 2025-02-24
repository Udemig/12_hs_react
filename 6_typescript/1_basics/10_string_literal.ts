/*
  ! String Literal
  * Bir metnin tipini string olarak tanımlamak yerine eğerki alabilceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak değer kısıtlaması yapabiliyoruz.

  * Örn: Spotify benzeri bir projede kullanıcı nesnesinin tipini tanımlamak istiyoruz.
  * Hesap türünün tipini tanımlarkden string yazmak yerine sadece alabileceği 3-4 farklı değer ifade edersek daha kısıtlayıcı bir tip tanımı yapmış oluruz
*/

type User = {
  id: number;
  name: string;
  account_type: "admin" | "free" | "premium"; // string literal | union type
  gender: "woman" | "man";
};

const newUser: User = {
  id: 4354356,
  name: "Faruk",
  account_type: "admin",
  gender: "man",
};

// Örnek
// Bir araba kiralama sitesi için api'dan gelen araba verilerinin tipini tanıma
type Car = {
  make: string;
  model: string;
  gearbox: "otomatik" | "manuel" | "yarı otomatik";
  fuel: "benzin" | "dizel" | "elektrik" | "hibrit" | "gaz";
  year: number;
  owner: any;
};

const newCar: Car = {
  make: "BMW",
  model: "340i",
  gearbox: "otomatik",
  fuel: "benzin",
  year: 2020,
  owner: null,
};
