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
const yokalama = (teacher: string, ...students: string[]) => {
  console.log(teacher + " öğretmen yoklamaya başladı");
  console.log("-------------------------------------");
  students.forEach((student) => console.log(student + " burdaaaaa!"));
  console.log(students.length + " öğrenci var");
};

yokalama("Mahmut", "Ali", "Mehmet", "Ayşe", "Fatma", "Burak", "Kadir");

// Örnek
function toplam(metin: string, ...sayilar: number[]) {
  console.log(
    metin,
    sayilar.reduce((toplam, sayi) => toplam + sayi, 0)
  );
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

const degerHesapla = (sayi1: number, sayi2: number, ...sayilar: number[]) => {
  let carpim = sayi1 * sayi2;
  let toplam = sayilar.reduce((toplam, sayi) => toplam + sayi, 0);

  return {
    toplam,
    carpim,
  };
};

console.log(degerHesapla(2, 3, 4, 5, 6));
