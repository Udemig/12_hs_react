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
var math = new Matematik();
math.topla(19);
// static olan bir methoda erişme
Matematik.carp(10, 20);
