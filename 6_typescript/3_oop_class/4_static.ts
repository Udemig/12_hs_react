/*
 ! Static
 * Static anahtar kelimesi özellik veya methodun sınıfın örneğini oluşturmaya gerek kalamadan kullanmamızı sağlar.
*/

//! Static Method
class Matematik {
  x: number = 10;

  topla(y: number): void {
    console.log(this.x + y);
  }

  static carp(a: number, b: number): void {
    console.log(a * b);
  }
}

// static olmayan topla methoduna erişelim
// normal methodlara sadece class'tan alınan örnek üzerinden erişlebilir (uğraştıryo)
const math = new Matematik();
math.topla(19);

// static olan bir methoda erişme
// doğrudan class üzerinden erişilebilir (kolay)
Matematik.carp(10, 20);

// Static Property
// Doğrudan class üzerinden erişebildiğimiz değişkenler

class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(isim: string) {
    this.isim = isim;
    Ogrenci.ogrenciSayisi++;
  }
}

const o1 = new Ogrenci("Ali");
const o2 = new Ogrenci("Ahmet");
const o3 = new Ogrenci("Fatma");

console.log(o1, o2, o3);
console.log("Toplam Öğrenci", Ogrenci.ogrenciSayisi);
