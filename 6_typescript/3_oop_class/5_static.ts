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

//TODO STATIC Property
