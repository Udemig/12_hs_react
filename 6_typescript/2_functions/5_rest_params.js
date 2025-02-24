/*
 ! Rest Param
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanıdlır

 * Özellikler
 * Bir parametreyi rest param haline getirmek için "..." kullanırız
 * Bir rest paramın ardından herhangi farklı bir parametre yazılamaz
 * Sebebi ise rest paramın kaç değer alıcağının belli olmaması
 * Rest param aldığı parametreleri en son dizi haline getirir.
*/
// Örnek
var yokalama = function (teacher) {
    var students = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        students[_i - 1] = arguments[_i];
    }
    console.log(teacher + " öğretmen yoklamaya başladı");
    console.log("-------------------------------------");
    students.forEach(function (student) { return console.log(student + " burdaaaaa!"); });
    console.log(students.length + " öğrenci var");
};
yokalama("Mahmut", "Ali", "Mehmet", "Ayşe", "Fatma", "Burak", "Kadir");
// Örnek
function toplam(metin) {
    var sayilar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sayilar[_i - 1] = arguments[_i];
    }
    console.log(metin, sayilar.reduce(function (toplam, sayi) { return toplam + sayi; }, 0));
}
toplam("Sonuç: ", 9, 8, 6, 4, 8, 0, 4, 2, 6, 9, 5, 3, 5, 8);
toplam("Sonuç: ", 45, 678, 34, 54, 89, 84, 33, 4);
/*
 ! Soru
 * İstenildiği kadar sayıyı parametre olarak alan bir fonksiyon yazınız.
 * Parametre olarak aldığı ilk 2 sayıyı çarpsın
 * İlk 2 parametreden geriye kalan bütün sayıları toplasın
 * Toplam ve çarpımı bir nesne içerisinde döndürsün

 * hesapla(2,3,4,5,6) =====> {carpim:6,toplam:15}
*/
var degerHesapla = function (sayi1, sayi2) {
    var sayilar = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        sayilar[_i - 2] = arguments[_i];
    }
    var carpim = sayi1 * sayi2;
    var toplam = sayilar.reduce(function (toplam, sayi) { return toplam + sayi; }, 0);
    return {
        toplam: toplam,
        carpim: carpim,
    };
};
console.log(degerHesapla(2, 3, 4, 5, 6));
