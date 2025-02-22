/*
 ! Tuple Type
 * Typescript ile birlikte hayatımıza giren veritipidir.
 * Uzunluğu ve elemanlarının sırası/tipi sabit olan dizilerin tip tanımı için kullanılır.
 * Genelde az sayıda eleman sahip olan ve elemanlarının sırası aynı olan dizilerde kullanılır
*/

// Örnek - 1
// X yanlış
const ders1: (string | number)[] = [3, "edebiyat", 5];

// ✔︎ doğru
const ders2: [string, number] = ["matematik", 3];

// Örnek - 2
const gradient: [string, number, number] = ["to right", 252525, 567845];

// Örnek - 3
// Bir css rgb/rgba renginin verisini dizi olarak tutalım
// rgb(123,56,78)
// rgba(123,56,78,0.8)

// bu seneryoda sondaki değeri opsiyonel yapmamız gerekir
let color: [number, number, number, number?];

color = [123, 56, 78];
color = [123, 56, 78, 0.8];

// Örnek - 4
// Birden fazla opsiyonel değer olduğu deneryo

let date: [number, string?, number?];

date = [1, "Ocak", 1956];
date = [1, "Ocak"];
date = [1];
date = [1, , 1956];
