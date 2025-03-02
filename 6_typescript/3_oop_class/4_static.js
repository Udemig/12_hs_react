/*
 ! Static
 * Static anahtar kelimesi özellik veya methodun sınıfın örneğini oluşturmaya gerek kalamadan kullanmamızı sağlar.
*/
//! Static Method
var Matematik = /** @class */ (function () {
    function Matematik() {
        this.x = 10;
    }
    Matematik.prototype.topla = function (y) {
        console.log(this.x + y);
    };
    Matematik.carp = function (a, b) {
        console.log(a * b);
    };
    return Matematik;
}());
// static olmayan topla methoduna erişelim
// normal methodlara sadece class'tan alınan örnek üzerinden erişlebilir (uğraştıryo)
var math = new Matematik();
math.topla(19);
// static olan bir methoda erişme
// doğrudan class üzerinden erişilebilir (kolay)
Matematik.carp(10, 20);
// Static Property
// Doğrudan class üzerinden erişebildiğimiz değişkenler
var Ogrenci = /** @class */ (function () {
    function Ogrenci(isim) {
        this.isim = isim;
        Ogrenci.ogrenciSayisi++;
    }
    Ogrenci.ogrenciSayisi = 0;
    return Ogrenci;
}());
var o1 = new Ogrenci("Ali");
var o2 = new Ogrenci("Ahmet");
var o3 = new Ogrenci("Fatma");
console.log(o1, o2, o3);
console.log("Toplam Öğrenci", Ogrenci.ogrenciSayisi);
