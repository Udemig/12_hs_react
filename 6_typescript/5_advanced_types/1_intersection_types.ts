/*
 ! Intersection Types - Kesişim Türler
 * Typescript'de kesişim türler iki veya daha fazla türü birleştirmek için kullanılır
*/

type AType = { key1: string };
type BType = { key2: number };

// Intersection: Her iki tipinde özelliklerini birleştirelim
type ABType = AType & BType;

let foo: ABType = { key1: "merhaba", key2: 45 };

// Union: Belirlenen türlerin ez birinin bütün özelliklerinin tanımlanması yeterrli olur
type AorBType = AType | BType;

let bar: AorBType = { key1: "merhaba" };
let baz: AorBType = { key2: 45 };
let ban: AorBType = { key1: "merhaba", key2: 45 };

// Intersection Types Örnek
type BusinessPartner = {
  credit: number;
  name: string;
};

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Identity & Contact;
type Customer = Identity & BusinessPartner;
type VıpCustomer = Identity & BusinessPartner & BusinessPartner;
