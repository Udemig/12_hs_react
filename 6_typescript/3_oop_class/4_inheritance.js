/*
 ! Inheritance (Kalıtım | Miras)
 * Bir oop kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.

 * Bu işlem kodun tekrar kullanıbilirliğini arttırır ve kod organizasyonunu güçlendirir.

 * Miras her zaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında gerçekleşir.

 * Alt sınıf (Derived Class | Child Class), bir üst sınıftan (Parent Class) miras oalrak özelliklerini ve davranışlarını alabiliri.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent Class
var GeometrikSekil = /** @class */ (function () {
    function GeometrikSekil(ad) {
        this.ad = ad;
    }
    GeometrikSekil.prototype.tanim = function () {
        console.log("Bu bir ".concat(this.ad, " \u015Feklidir"));
    };
    return GeometrikSekil;
}());
// Derived Class - Constructor Yok
var Dikdortgen = /** @class */ (function (_super) {
    __extends(Dikdortgen, _super);
    function Dikdortgen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uzunluk = 50;
        _this.genislik = 100;
        return _this;
    }
    return Dikdortgen;
}(GeometrikSekil));
var d = new Dikdortgen("Dikdörtgen");
d.tanim();
console.log(d);
// Derived Class - Constructor Var
var Daire = /** @class */ (function (_super) {
    __extends(Daire, _super);
    function Daire(yari_cap) {
        var _this = _super.call(this, "daire") || this; // parent class'ın constructor'ına değer gönder
        _this.yaricap = yari_cap;
        return _this;
    }
    return Daire;
}(GeometrikSekil));
var daire = new Daire(90);
console.log(daire);
//* Super anahtar kelimesi alt sınıfta üst sınıfın constructor'ını çağırmaya yarar
// Parent
var Arac = /** @class */ (function () {
    function Arac(marka, model) {
        this.marka = marka;
        this.model = model;
    }
    Arac.prototype.calistir = function () {
        console.log("Araca giriş yapılıyor...");
    };
    return Arac;
}());
// Child
var Araba = /** @class */ (function (_super) {
    __extends(Araba, _super);
    function Araba(marka, model, yakit) {
        var _this = _super.call(this, marka, model) || this;
        _this.yakit = yakit;
        return _this;
    }
    // miras alınan class'a yeni method ekle
    Araba.prototype.x = function () {
        console.log("selam");
    };
    // miras olarak alınan methodun üzerine yazma: Method Overriding
    Araba.prototype.calistir = function () {
        _super.prototype.calistir.call(this); // parent class'ın fonksiyonunu çağır
        console.log("Kontak çevriliyor...");
    };
    return Araba;
}(Arac));
var bmw = new Araba("bmw", "m4", "benzin");
console.log(bmw);
console.log(bmw.calistir());
// Bir class aynı anda birden fazla farklı class'ı miras alamaz.
// Ama miras alma olayı birden fazla kere gerçekleşebilir.
var Human = /** @class */ (function () {
    function Human() {
        this.eye_color = "";
    }
    return Human;
}());
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    function Father() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eye_color = "Kahverengi";
        return _this;
    }
    return Father;
}(Human));
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eye_color = "Mavi";
        return _this;
    }
    return Mother;
}(Human));
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Son;
}(Father));
