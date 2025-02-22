/*
 ! Array Type
 * Typescriptde dizilerin tipini tanımlarken sadece bu değişken bir dizi olucak demek yerine bu değişkenin string değerlerden oluşan bir dizi olucak diyoruz.
 * Sonuç olarak dizi olması gerektiğinden dizideki elemanların veri tipini söylemeliyiz.
*/

// Örnek - 1
const users: string[] = ["ali", "ayşe", "mehmet"];

users.push("mahmut");
// users.push(56); //! Hata (diziye string dışı eleman eklenemez)

// Örnek - 2
const ids: number[] = [45, 67, 8, 3, 34];

// Örnek - 3
const values: boolean[] = [true, false, true, false];

// Soru: Bir dizinin içerisinde birden fazla tipte eleman olabilir mi ?
// Cevap: Evet, union types kullanarak bu mümkün
const teachers: (string | null)[] = ["Uğur", "Ahmet", null, "Yasin", null];

// Soru: obje dizisi oluşturabilir miyiz ?
// Cevap: Evet bu mümkün
const cars: { name: string }[] = [{ name: "BMW" }, { name: "Mercedes" }, { name: "Audi" }];
