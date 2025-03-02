/*
 ! Readonly - Salt Okunur

 * Typescript'de bir sınıfın veya nensnenin içerisindeki bir özelliğin sadece okunabilir olmasını sağlar

 * Readonly ile tanımladığımız özelliklere değer ataması:
 * * Sınıflarda sadece constructor ile değer ataması yapılabilir
 * * Nensnelrde sadece değişkeni tanımlarken değer ataması yapabiliriz.
*/
var kisi = {
    isim: "Mahmut",
    soyad: "Kaya",
    tc_no: "2456677882",
};
kisi.isim = "Mehmet";
kisi.soyad = "Demir";
// kisi.tc_no = "13435734895743";
// Classlardaki Kullanımı
var Kitap = /** @class */ (function () {
    function Kitap(isim, sayfa, yazar) {
        this.yazar = "Orhan Pamuk"; // tanımlarken değer ataması
        this.isim = isim;
        this.sayfa = sayfa;
        this.yazar = yazar; // constructor'da değer ataması
    }
    return Kitap;
}());
var kitap = new Kitap("Hobbit", 500, "Tolkien");
console.log(kitap);
