/*
 ! Readonly - Salt Okunur

 * Typescript'de bir sınıfın veya nensnenin içerisindeki bir özelliğin sadece okunabilir olmasını sağlar

 * Readonly ile tanımladığımız özelliklere değer ataması:
 * * Sınıflarda sadece constructor ile değer ataması yapılabilir
 * * Nensnelrde sadece değişkeni tanımlarken değer ataması yapabiliriz.
*/

// Nesnelerdeki Kullanımı
type Person = {
  isim: string;
  soyad: string;
  readonly tc_no: string;
};

const kisi: Person = {
  isim: "Mahmut",
  soyad: "Kaya",
  tc_no: "2456677882",
};

kisi.isim = "Mehmet";
kisi.soyad = "Demir";
// kisi.tc_no = "13435734895743";

// Classlardaki Kullanımı
class Kitap {
  public isim: string;
  protected sayfa: number;
  public readonly yazar: string = "Orhan Pamuk"; // tanımlarken değer ataması

  constructor(isim: string, sayfa: number, yazar: string) {
    this.isim = isim;
    this.sayfa = sayfa;
    this.yazar = yazar; // constructor'da değer ataması
  }
}

const kitap = new Kitap("Hobbit", 500, "Tolkien");
console.log(kitap);

/*
 * Challange
 * Bir class tanılayın ve class'tan örnek oluşturun.
 * Bu class en az 4 özelliğe sahip olsun
 * En az 1 özelliği readonly olsun
 * Özellikleri tanımlarken erişim belirteçlerini efektif bir şekilde kullanın
 */

class CosmeticProduct {
  readonly barcode: string;
  public name: string;
  public brand: string;
  protected price: number;

  constructor(barcode: string, name: string, brand: string, price: number) {
    this.barcode = barcode;
    this.name = name;
    this.brand = brand;
    this.price = price;
  }
}

const product1 = new CosmeticProduct("8691234567890", "Lipstick", "LuxeBeauty", 120);
console.log(product1);
