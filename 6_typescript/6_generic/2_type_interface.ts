/*
 * Fonksiyonlarda olduğu gibi generic yapısını yeniden kullanılabilir olması için type ve interface'lerde de kullanbiliyoruz
 */

type ArrayType<T> = {
  items: T[];
  addItem: (newItem: T) => void;
  getItem: (index: number) => T;
};

const arr: ArrayType<number> = {
  items: [1, 2, 3, 4],

  addItem(newItem) {
    this.items.push(newItem);
  },

  getItem(index) {
    return this.items[index];
  },
};

arr.addItem(5);

// Interface ile kullanım
interface IArray<T> {
  items: T[];
  addItem: (newItem: T) => void;
  getItem: (index: number) => T;
}

const arr1: IArray<number> = {
  items: [1, 2, 3, 4],

  addItem(newItem) {
    this.items.push(newItem);
  },

  getItem(index) {
    return this.items[index];
  },
};

// örnek
// T,R,Z,E,V,A,S,D
interface IPerson<T, R> {
  name: T;
  age: R;
  id: R;
  father: T;
  mother: T;
}

const foo: IPerson<string, number> = {
  name: "Ahmet",
  age: 34,
  id: 1234567,
  father: "Faruk",
  mother: "Fatma",
};

const bar: IPerson<number, number> = {
  name: 675936,
  age: 34,
  id: 1234567,
  father: 389463245,
  mother: 127312,
};
