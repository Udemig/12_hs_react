/*
 ! Type Annotation
 * Javascript'de değişkenin türünü belirleme gibi bir özellik söz konusu değildir.
 * Fakat typescript'de tanımladığımız değişkenlerin tiplerinide biz belirleyebiliyoruz.
 * Bu sayede değer ataması yaparken belirlenen tip ksıtlamasının dışarısına çıkamıyoruz. Bu da kodda oluşabilecek hataların daha hızlı farkına varmamızı sağlar. 
*/

let foo: number = 35;

foo = 45;

foo = 55;

// foo = true; // ! hata

/*
 * Javascript'de bulunan veri tipleri
 * number
 * string
 * boolean
 * object
 * array
 * function
 * Date
 * null
 * undefined
 * symbol (pek kullanmıyoruz)
 * bigint (pek kullanmıyoruz)
 */

let company: string = "Udemig";

let age: number = 56;

let has_license: boolean = true;

let student: object = { id: 2, name: "Ali" };

let value: null = null;

let value1: undefined;

let value2: undefined = undefined;

let value3: Function = () => {};

let value4: Date = new Date();

let value5: bigint = BigInt(93586394757895478083485);

let value6: symbol = Symbol("selam");

/*
 * Javascript'de veri türleri ikiye ayılır

 * 1) Primitive Veri Türleri
 * Değer üzerinden saklanır ve kopyalanır. Değerleri değiştirilemez ve bellekte doğrudan saklanır.
 - string
 - number
 - boolean
 - undefined
 - null
 - symbol
 - bigint
 * Hafızada sabit bir alan kaplar
 * Bellekte değişkenin kendisi saklanır.
 * Bir değişkeni başka bir değişkenin değeri atanırsa, kopyası alınır ve yeni değişkende değişiklik yapmak orjinal değeri değiştirmez.
*/

let x = 5;
let y = x; // y, x'in bir kopyasını alır
y = 10;
console.log(x); // 5

/*
 * 2) Non-Primitive (Referans) Veri Türleri
 * Referans üzerinden saklanır. Değerleri değiştirilebilir ve bellekte referansı tutulur.
 
 - Object
 - Array
 - Function

 * Bellekte bir referans (adres) üzerinden saklanır.
 * Bir değişkene farklı bir değişkenin değeri atanırsa, aynı referansı paylaşır.
 * Bir değişkende yapılan değişiklik diğerini de etkiler.
*/

let obj1 = { name: "Ali" };
let obj2 = obj1; // obj2, obj1 ile aynı referansı paylaşır
obj2.name = "Veli";
console.log(obj1.name); // Veli (orjinal değişkeni de değiştir)
