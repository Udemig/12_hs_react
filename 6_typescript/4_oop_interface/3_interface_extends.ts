/*
 * Interface type'larda olduğu gibi farklı bir bir/birkaç interface'in özelliklerini miras alabilir
 * Miras alama extends anahtar kelimesi ile gerçekleşir
 * Sınıflardan farklı olarak istersek birden fazla interface'i tek seferde miras alabiliriz.
 */

// bir interface oluşturalım
interface IEvEsyasi {
  isim: string;
  fiyat: number;
}

// yeni bir interface oluşturalım ve öncekini miras alsın
interface IMobilya extends IEvEsyasi {
  renk: string;
}

// interface'i bir nesne tipi tanımında kullanalım
const masa: IMobilya = {
  isim: "Yemek Masası",
  fiyat: 200,
  renk: "Siyah",
};

// farklı bir interface daha oluşturalım
interface IElektronik {
  marka: string;
  garantiSuresi: number;
  şarj?: number;
}

// birden fazla interface'i miras alma
interface IUrun extends IElektronik, IMobilya {
  id: string;
}

// interface'i kullanalım
const tv: IUrun = {
  id: "23sf",
  marka: "LG",
  isim: "Akıllı TV",
  fiyat: 45999,
  garantiSuresi: 2,
  renk: "Siyah",
};

/*
 ! Challange
 * İlk olarak 2 farklı interface oluşturun.
 * Ardından 3. bir interface oluşturup ilk 2 interface'i miras olarak alıp genişletsin.
 * Son olarak bu interface'i 1 nesnenin tipini tanımlarken kullanın
 */

// Cevap
interface IPersonalData {
  ad: string;
  soyad: string;
  country: string;
}

interface IContactData {
  email: string;
  phone: Number;
}

interface IUserData extends IPersonalData, IContactData {
  isSignup: boolean;
}

const user: IUserData = {
  ad: "Ali",
  soyad: "can",
  country: "Turkey",
  email: "ali@gmail.com",
  phone: 1234567890,
  isSignup: true,
};

// Cevap
interface SuBazlıBoya {
  suBazlı: boolean;
  kurumaSüresi: number;
}
interface YağBazlıBoya {
  parlaklıkDerecesi: string;
  solventBazlı: boolean;
}

interface BoyaÜrünü extends SuBazlıBoya, YağBazlıBoya {
  marka: string;
  renk: string;
  fiyat: number;
}

const boya: BoyaÜrünü = {
  marka: "Polisan",
  renk: "Beyaz",
  fiyat: 500,
  suBazlı: true,
  kurumaSüresi: 2,
  parlaklıkDerecesi: "Yarı Mat",
  solventBazlı: false,
};
console.log(boya);

// Cevap
interface KrediBasvurusu {
  basvuruSahibi: string;
  krediTutari: number;
  krediSuresi: number;
  aylikGelir: number;
}

interface KrediTuru {
  tur: string;
  faizOrani: number;
}

interface KonutKredisi extends KrediBasvurusu, KrediTuru {
  pesinat: number;
}

const konutKredisi: KonutKredisi = {
  basvuruSahibi: "Ahmet Yılmaz",
  krediTutari: 100000,
  krediSuresi: 12,
  aylikGelir: 20000,
  tur: "Konut Kredisi",
  faizOrani: 3.5,
  pesinat: 15000,
};

console.log(konutKredisi);
konutKredisi.faizOrani = 3.8;
console.log(konutKredisi);

// Cevap
interface IArac {
  marka: string;
  yakit: "benzin" | "elektrik" | "gaz";
}

interface IOzellik {
  renk: string;
  durum: "Satılık" | "Kiralık";
}

interface IAraba extends IArac, IOzellik {
  sahip?: { ad: string; tel: number };
}

const araba: IAraba = {
  marka: "Togg",
  yakit: "elektrik",
  renk: "kırmızı",
  durum: "Satılık",
};

// Cevap
interface iPhone {
  model: string;
  pilÖmrü: number;
  kameraKalitesi: string;
}

interface Samsung {
  model: string;
  pilÖmrü: number;
  ekranBoyutu: number;
}

interface Xioami extends iPhone, Samsung {
  marka: string;
}

const Poco: Xioami = {
  model: "Galaxy S21",
  pilÖmrü: 24,
  kameraKalitesi: "108MP",
  ekranBoyutu: 6.8,
  marka: "Samsung",
};

console.log(Poco);
