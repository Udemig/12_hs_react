/*
 ! Constructor - İnşa Methodu
 * Contructor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar.
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz.
 * Conksiyon new anahtar kelimesi ile class'ı çağrıldığında ilk çalışan kod constructordur.
 * Constructor ile class'a gelen parametrelerle erişebiliriz.
*/
var Person = /** @class */ (function () {
    // 2) constructor yardımıyla dışarıdan değişkenlere değer ataması yapabiliyoruz
    function Person(yeni_ad, yeni_soyad, yeni_yas) {
        this.ad = yeni_ad;
        this.soyad = yeni_soyad;
        this.yas = yeni_yas;
    }
    return Person;
}());
var kisi1 = new Person("Burak", "Musa", 45);
var kisi2 = new Person("Can", "Çimen", 24);
console.log(kisi1);
console.log(kisi2);
/*
 ! Soru
 * Bir teknolojik/ev aleti için bir class oluşturun
 * Bu class'tan oluşturduğunu nesneler, değerlerini constructor'dan alsın.
 * Class en az 4 özellik ve 1 methoda sahip olsun.
 * Bu class'tan en az 1 örnek oluşturun (new)
*/
// cevap
var Laptop = /** @class */ (function () {
    function Laptop(marka, model, islemci, ram) {
        this.marka = marka;
        this.model = model;
        this.islemci = islemci;
        this.ram = ram;
    }
    Laptop.prototype.toggle = function (open) {
        console.log(open ? "Pc açılıyor" : "Pc kapanıyor");
    };
    return Laptop;
}());
var myLaptop = new Laptop("Apple", "MacBook Pro", "M1 Pro", 16);
// cevap
var BeyazEsya = /** @class */ (function () {
    function BeyazEsya(yeni_ad, yeni_marka, yeni_model, yeni_ciftkapi) {
        this.ad = yeni_ad;
        this.marka = yeni_marka;
        this.model = yeni_model;
        this.ciftkapi = yeni_ciftkapi;
    }
    BeyazEsya.prototype.urunBilgisi = function () {
        return "\u00DCr\u00FCn: ".concat(this.ad, ", Marka: ").concat(this.marka, ", Model: ").concat(this.model, ", \u00C7ift Kap\u0131: ").concat(this.ciftkapi ? "Evet" : "Hayır");
    };
    BeyazEsya.prototype.modelGuncelle = function (yeniModel) {
        this.model = yeniModel;
        console.log("".concat(this.ad, " model y\u0131l\u0131 g\u00FCncellendi: ").concat(this.model));
    };
    return BeyazEsya;
}());
// cevap
var TeknolojikAlet = /** @class */ (function () {
    function TeknolojikAlet(marka, model, fiyat) {
        this.marka = marka;
        this.model = model;
        this.fiyat = fiyat;
    }
    TeknolojikAlet.prototype.bilgiGoster = function () {
        console.log("\uD83D\uDCF1 Teknolojik Alet: \n        Marka: ".concat(this.marka, "\n        Model: ").concat(this.model, "\n        Fiyat: ").concat(this.fiyat, " TL"));
    };
    return TeknolojikAlet;
}());
var telefon = new TeknolojikAlet("Apple", "iPhone 14", 45000);
telefon.bilgiGoster();
// cevap
var Device = /** @class */ (function () {
    function Device(ad, model, year, portable) {
        this.ad = ad;
        this.model = model;
        this.year = year;
        this.portable = portable;
    }
    Device.prototype.deviceStatus = function () {
        console.log("çalışıyor");
    };
    return Device;
}());
var pc = new Device("bilgisayar", "asus", 2025, true);
pc.deviceStatus();
// cevap
var WashMachine = /** @class */ (function () {
    function WashMachine(yeni_marka, yeni_kapasite, yeni_renk, yeni_yıl) {
        this.marka = yeni_marka;
        this.kapasite = yeni_kapasite;
        this.renk = yeni_renk;
        this.yıl = yeni_yıl;
    }
    return WashMachine;
}());
var myMachine = new WashMachine("Bosch", 7, "Beyaz", 2023);
console.log(myMachine);
