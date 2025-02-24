/*
 ! Constructor - İnşa Methodu
 * Contructor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar.
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz.
 * Conksiyon new anahtar kelimesi ile class'ı çağrıldığında ilk çalışan kod constructordur.
 * Constructor ile class'a gelen parametrelerle erişebiliriz.
*/

class Person {
  // 1) sınıfın ana özelliklerini belirle
  ad: string;
  soyad: string;
  yas: number;

  // 2) constructor yardımıyla dışarıdan değişkenlere değer ataması yapabiliyoruz
  constructor(yeni_ad: string, yeni_soyad: string, yeni_yas: number) {
    this.ad = yeni_ad;
    this.soyad = yeni_soyad;
    this.yas = yeni_yas;
  }
}

const kisi1 = new Person("Burak", "Musa", 45);
const kisi2 = new Person("Can", "Çimen", 24);
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
class Laptop {
  marka: string;
  model: string;
  islemci: string;
  ram: number;

  constructor(marka: string, model: string, islemci: string, ram: number) {
    this.marka = marka;
    this.model = model;
    this.islemci = islemci;
    this.ram = ram;
  }

  toggle(open: boolean) {
    console.log(open ? "Pc açılıyor" : "Pc kapanıyor");
  }
}

const myLaptop = new Laptop("Apple", "MacBook Pro", "M1 Pro", 16);

// cevap
class BeyazEsya {
  ad: string;
  marka: string;
  model: number;
  ciftkapi: boolean;

  constructor(yeni_ad: string, yeni_marka: string, yeni_model: number, yeni_ciftkapi: boolean) {
    this.ad = yeni_ad;
    this.marka = yeni_marka;
    this.model = yeni_model;
    this.ciftkapi = yeni_ciftkapi;
  }

  urunBilgisi(): string {
    return `Ürün: ${this.ad}, Marka: ${this.marka}, Model: ${this.model}, Çift Kapı: ${
      this.ciftkapi ? "Evet" : "Hayır"
    }`;
  }

  modelGuncelle(yeniModel: number): void {
    this.model = yeniModel;
    console.log(`${this.ad} model yılı güncellendi: ${this.model}`);
  }
}

// cevap
class TeknolojikAlet {
  marka: string;
  model: string;
  fiyat: number;

  constructor(marka: string, model: string, fiyat: number) {
    this.marka = marka;
    this.model = model;
    this.fiyat = fiyat;
  }

  bilgiGoster(): void {
    console.log(`📱 Teknolojik Alet: 
        Marka: ${this.marka}
        Model: ${this.model}
        Fiyat: ${this.fiyat} TL`);
  }
}

const telefon = new TeknolojikAlet("Apple", "iPhone 14", 45000);
telefon.bilgiGoster();

// cevap
class Device {
  ad: string;
  model: string;
  year: number;
  portable: boolean;

  constructor(ad: string, model: string, year: number, portable: boolean) {
    this.ad = ad;
    this.model = model;
    this.year = year;
    this.portable = portable;
  }

  deviceStatus(): void {
    console.log("çalışıyor");
  }
}

const pc = new Device("bilgisayar", "asus", 2025, true);
pc.deviceStatus();

// cevap
class WashMachine {
  marka: string;
  kapasite: number;
  renk: string;
  yıl: number;

  constructor(yeni_marka: string, yeni_kapasite: number, yeni_renk: string, yeni_yıl: number) {
    this.marka = yeni_marka;
    this.kapasite = yeni_kapasite;
    this.renk = yeni_renk;
    this.yıl = yeni_yıl;
  }
}
const myMachine = new WashMachine("Bosch", 7, "Beyaz", 2023);
console.log(myMachine);
