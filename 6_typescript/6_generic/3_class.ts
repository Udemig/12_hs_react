class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const arr1 = new Sorter<string>(["d", "a", "c", "b"]);
const arr2 = new Sorter<number>([2, 3, 5, 9, 1]);
const arr3 = new Sorter<boolean>([true, false, true, false]);

console.log(arr1.sortData());
console.log(arr2.sortData());

// Generic Özellik
// Tipi generic olarak tanımladığımız her türlü tipte değer alabilmesinin önünü açıyoruz
// Bundan dolayı bazı durumlarda alabilceği tipte kısıtlama yapmak isteyebiliriz
// Extends ile T generic tipini dışarıdan sadece string veya number tipi alabilicek şekilde kısıt.
class Container<T extends string | number> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}

new Container<string>("Uçak");
new Container<number>(45);
// new Container<boolean>(true);
// new Container<object>({});

/*
 ! Challange
 * En az 1 generic tip alan type / interface / class / function yazınız
 * Tanımladığınız yapıyı en az 1 kez kullanın
 * Bonus: extends kullanabilirsiniz
*/

// Cevap
interface car<T, R> {
  make: T;
  year: R;
}

const stringCar: car<string, number> = { make: "Ford", year: 2015 };

// Cevap
type ApiRes<T extends string | number> = {
  status: number;
  message: string;
  data: T;
};

const res: ApiRes<string> = {
  status: 200,
  message: "İşlem başarılı",
  data: "Kullanıcı başarıyla oluşturuldu",
};

console.log(res);

// cevap
type card<T extends string, R extends number> = {
  id: T;
  name: T;
  category: T;
  price: R;
  stock: R;
  desription: T;
};

const Cards: card<string, number> = {
  id: "1",
  name: "iphone",
  category: "phone",
  price: 1000,
  stock: 10,
  desription: "iphone 12",
};
