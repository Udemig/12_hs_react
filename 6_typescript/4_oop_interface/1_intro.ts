/*
 ! Interface
 * Bir nesnenin yapısını yani nesnenin hangi tipte özellik ve methodlara sahip olucağını ifade eder

 ! Custom Types | Abstract Class | Interface
 * Bunların herbiriyle bir nesne tipi tanımlayabiliyorsunuz

 ? Abstract Class VS Interface
 * Abstract class'lar aynı anda sadce bir class'ı miras alabilir
 * Interface'ler tek seferde birden fazla interface'i miras alabilir
 
 ? Type VS Interface
 * Nesne tipi tanımlama açısından ikisininde birbirinden hiçbir farkı yok
 * Type ile birlikte sadece nesne tipi değil dizi/tuple/function tipi de tanımlanabiliri.
 * Interafe ile sadece nesne tipi tanımlanabilir.
 */

// Type
type PersonType = {
  name: string;
  age: number;
};

// Interface
interface IPerson {
  name: string;
  age: number;
}

const kisi: PersonType = {
  name: "Ali",
  age: 55,
};

// Type ile farklı türde tip tanımlama
type FnType = () => {};

type ArrayType = [string, string, number, boolean];

type SNBType = "string" | "number" | "boolean";

// İleride oluşturucağamız bir geometrik şekil nesnesinin özellik ve methodlarını tanımladığımız interface yazalım
interface IShape {
  width: number;
  height: number;
  corner?: number;
  radius?: number;
  calculateArea: () => number | string;
}

// Yukarıdaki interface ile bir nesne tipi tanımlayalım
const square: IShape = {
  width: 200,
  height: 200,
  corner: 4,
  calculateArea() {
    return this.width * this.height;
  },
};

// interface ile farklı bir nesnde tipi tanımlayalım
const circle: IShape = {
  width: 40,
  height: 1,
  radius: 20,
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  },
};
