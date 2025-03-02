/*
 ! Inheritance (Kalıtım | Miras)
 * Bir oop kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.

 * Bu işlem kodun tekrar kullanıbilirliğini arttırır ve kod organizasyonunu güçlendirir.

 * Miras her zaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında gerçekleşir.

 * Alt sınıf (Derived Class | Child Class), bir üst sınıftan (Parent Class) miras oalrak özelliklerini ve davranışlarını alabiliri.
*/

// Parent Class
class GeometrikSekil {
  ad: string;

  constructor(ad: string) {
    this.ad = ad;
  }

  tanim() {
    console.log(`Bu bir ${this.ad} şeklidir`);
  }
}

// Derived Class - Constructor Yok
class Dikdortgen extends GeometrikSekil {
  uzunluk = 50;
  genislik = 100;
}

const d = new Dikdortgen("Dikdörtgen");
d.tanim();
console.log(d);

// Derived Class - Constructor Var
class Daire extends GeometrikSekil {
  yaricap: number;

  constructor(yari_cap: number) {
    super("daire"); // parent class'ın constructor'ına değer gönder

    this.yaricap = yari_cap;
  }
}

const daire = new Daire(90);
console.log(daire);

//* Super anahtar kelimesi alt sınıfta üst sınıfın constructor'ını çağırmaya yarar

// Parent
class Arac {
  marka: string;
  model: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log("Araca giriş yapılıyor...");
  }
}

// Child
class Araba extends Arac {
  // miras alınan class'a yeni özellik ekle
  yakit: string;

  constructor(marka: string, model: string, yakit: string) {
    super(marka, model);
    this.yakit = yakit;
  }

  // miras alınan class'a yeni method ekle
  x() {
    console.log("selam");
  }

  // miras olarak alınan methodun üzerine yazma: Method Overriding
  calistir(): void {
    super.calistir(); // parent class'ın fonksiyonunu çağır
    console.log("Kontak çevriliyor...");
  }
}

const bmw = new Araba("bmw", "m4", "benzin");
console.log(bmw);
console.log(bmw.calistir());

// Bir class aynı anda birden fazla farklı class'ı miras alamaz.
// Ama miras alma olayı birden fazla kere gerçekleşebilir.
class Human {
  eye_color: string = "";
}

class Father extends Human {
  eye_color: string = "Kahverengi";
}

class Mother extends Human {
  eye_color: string = "Mavi";
}

class Son extends Father {}
