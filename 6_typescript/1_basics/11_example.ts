/*
 * Herkes içerisinde en az 1 tane
 * string
 * number
 * boolean
 * array
 * object
 * tuple          ----->   [string, number]
 * union-type
 * string-literal
 * any
 * tiplerine sahip bir nesne tipi tanımlayın ve bu oluşturuğunuz tipi bir nesne üzerinde kullanın
 */

type Mouse = {
  model: string;
  dpi: number;
};

const mouse: Mouse = {
  model: "Logitech",
  dpi: 8000,
};

type futbolPlayer = {
  ga: [number, number];
};

const fp: futbolPlayer = {
  ga: [10, 7],
};

// Cevap - 1
type Card = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  desription: string;
  topcategories: "all" | "new";
  sales: any;
  savecomplate: boolean;
};

const cards: Card = {
  id: 1,
  name: "iphone",
  category: "phone",
  price: 1000,
  stock: 10,
  desription: "iphone 12",
  topcategories: "all",
  sales: 100,
  savecomplate: true,
};

// Cevap - 2
type Arac = {
  marka: string;
  model: string;
  yil: number;
  elektrikliMi: boolean;
  yakitTuru: "Benzin" | "Dizel" | "Elektrik" | "Hibrit";
  ozellikler: string[];
  sahip: { ad: string; telefon: string };
  motorBilgisi: [number, string];
  durum: "satilik" | "kiralik";
  ekstraBilgi: any;
};

const araba1: Arac = {
  marka: "Tesla",
  model: "Model 3",
  yil: 2023,
  elektrikliMi: true,
  yakitTuru: "Elektrik",
  ozellikler: ["Otomatik Pilot", "Hızlı Şarj"],
  sahip: { ad: "Volkan", telefon: "+49 176 123 45 67" },
  motorBilgisi: [0, "Elektrik"],
  durum: "satilik",
  ekstraBilgi: { renk: "Beyaz", garanti: "5 yıl", yazilim: "v12.3", maksimumHiz: "250 km/h" },
};

// cevap
console.log(araba1);

type kitap = {
  adi: string;
  sayfa_sayisi: number;
  okundu: boolean;
  tur: "şiir" | "roman" | "hikaye" | "ansiklopedi";
  yazarlar: string[];
  ücret: any;
};

// cevap
type Ehliyet = { a: string; b: string; puan: number };

const sonuc: Ehliyet = { a: "geçti", b: "kaldı", puan: 100 };

// cevap
type TV = {
  model: string;
  yıl: number;
  smart: boolean;
  ekranBoyutu: number;
  çözünürlük: "HD" | "Full HD" | "4K" | "8K";
  renk: "siyah" | "gri" | "gümüş";
  boyut: [number, number];
};

const myTv: TV = {
  model: "LG",
  yıl: 2021,
  smart: false,
  çözünürlük: "Full HD",
  renk: "siyah",
  ekranBoyutu: 60,
  boyut: [250, 100],
};

// cevap
type Phone = {
  model: string;
  ucret: number;
  akillimi: boolean;
  ozellik: string[];
  boyut: [number, number];
  sistem: "android" | "ios";
  ekbilgi: any;
};

const samsung: Phone = {
  model: "samsung",
  ucret: 123,
  akillimi: true,
  ozellik: ["5g", "32ram"],
  boyut: [8, 10],
  sistem: "android",
  ekbilgi: { renk: "siyah", agirlik: "50gr" },
};

// cevap
type Developer = {
  fullName: [string, string];

  experience: number;

  isEmployed: boolean;

  skills: [string, number][];

  level: "Junior" | "Mid" | "Senior";

  location: string;
};

const developer: Developer = {
  fullName: ["Oktay", "Derelioglu"],
  experience: 5,
  isEmployed: true,
  skills: [
    ["JavaScript", 5],
    ["TypeScript", 3],
    ["React", 4],
    ["Node.js", 2],
  ],
  level: "Mid",
  location: "Istanbul",
};

// cevap
type Product = {
  id: number;
  category: string;
  name: string;
  ram: [number, number];
  price: number;
  inStock: boolean;
  hdd: number;
  screen: [number, number];
  keyboard: [string, string];
};

const laptop: Product = {
  id: 1,
  category: "laptop",
  name: "MacBook Pro",
  ram: [256, 512],
  price: 2499.99,
  inStock: true,
  hdd: 2,
  screen: [24, 32],
  keyboard: ["q", "f"],
};
console.log(laptop);
