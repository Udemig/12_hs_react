/*
 ! Any Type
 * Bir değişkene any type atadığımız zaman değişken herhangi bir türde değer alabilir ve bir tür kısıtlamasına maruz kalmaz.

 * Ts'de any type ile tanımlanamış olan bir değişken js değişkeni gibi davranır.

 * Otomatik tamamlama ve tür kısıtlaması devre dışı kalır.

 * Normal şartlarda any kullanılması ts mantığına aykırıdır. Çünkü ts'deki amaç her değişkenin türünün belirli olmasıdır.

 * Any genelde "geçici/acil" durumlarda kullanır.

 * Mutlaka any tipleri bir noktadan sonra kaldırılıp yerine doğru tipler tanımlanmalı
*/

let foo: any;

foo = "string";
foo = 45;
foo = true;
foo = function () {};

// dizilerde kullanımı
let bar: any[] = ["ahmet", 34, true, {}];
