/*
 ! OOP (Object Orianted Programming)
 * Nesne yönelimli programlama, yazılım geliştirme sürecinde kullanılan bir tekniktir.
 * Bu yaklaşım yazılımı nesneler ve bu nesneler arasındaki etkileşimler arasında yapmaya çalışır.
  
 * OOP'nin temel kavramları:
 * Sınıf (Class)
 * Nesne (Object)
 * Kalıtım (Inheritance)
 * Interface
  
 * OOP'nin temel amacı, kodu daha anlaşılır, yönetilebilir ve yeniden kullanılabilir olmasını sağlamaktır. Bu yaklaşım büyük projelerde faydalı olur  
*/

/*
 ! Sınıf (Class)
 * Sınıflar, nesnelerin şablonudur.
 * Bir sınıf, belirli türdeki nesneler için veri ve fonksiyonları tanımlar.
 * Örneğin "Araba" sınıfı bir arabanın sahip olucağı özellikler (renk,marka,şanzıman) ve davranışlar (hızlanma,vites,fren) tanımlanabilir.
*/

class OldPhone {
  // properties - özellikler
  telefon_tipi: string = "entegre";
  tus_takimi: string = "çevirmeli";
  govde: "yatay" | "dikey" = "yatay";

  // methods - fonksiyonlar
  ahizeAc(): void {
    console.log("ahize açılıyor..");
  }
  numaraCevir(telNum: string): void {
    console.log(telNum + " çalıyor...");
  }
}

/*
 ! Class Kullanımı
 * Class'ı tanımlamak tek başına bir şey ifade etmez
 * Fonksiyonlarda olduğu gibi fonksiyonları tanımlamadan sonra çağırırız ve görevini yapar.
 * Class'larda da durum aynıdır class'ı new ile çağırırız ve bize bir nesne oluşturur.
 * Class'ın oluşturuduğu bu nesneye instance (örnek) denir.
*/

const telefon_1 = new OldPhone();
const telefon_2 = new OldPhone();

telefon_2.tus_takimi = "tuşlu";
telefon_2.govde = "dikey";
telefon_2.telefon_tipi = "ayrılmış";

console.log(telefon_1);
console.log(telefon_2);
