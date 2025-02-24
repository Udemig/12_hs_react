/*
 * Typescript'de bir fonksiyonun tipini doğrudan fonksiyonu tanımmlarken ifade etmek yerine custom type ile ayrı bir noktada tanımlayıp tekrar tekrar kullanabiliyoruz
 */

// 1. yol
const func1 = (par1: string, par2: number): string => {
  return "Fonksiyon Çalıştı:" + par1 + par2;
};

const func2 = (par1: string, par2: number): string => {
  return "Fonksiyon Çalıştı:" + par1 + par2;
};

// 2.yol
// kendi tipimizi oluşturuyoruz
type FuncType = (par1: string, par2: number) => string;

const func3: FuncType = (par1, par2) => {
  return "Fonksiyon Çalıştı:" + par1 + par2;
};

const func4: FuncType = (par1, par2) => {
  return "Fonksiyon Çalıştı:" + par1 + par2;
};

/*
 * Yukarıdaki 2.yolda olduğu gibi bir fonksiyon tipini ayrıca tanımlayın ve bu tipi fonksiyonda kullanın

 * * kişinin bulunduğu şehri ve o şehirdeki havanın derecisini parametre olarak alsın
 * * derecece 30'dan fazla ".... konumu oldukça sıcak ve .... derece"
 * * derecece 30-0 aralığında ise ".... konumu ılık ve .... derece"
 * * derecece 0'ın altındaya ise ".... konumu oldukça soğuk ve .... derece"
 
 * şeklinde bir metin döndüren fonksiyon yazmanızı istiyorum.
 */

type WeatherFn = (sehir: string, derece: number) => string;

const getWeatherInfo: WeatherFn = (sehir, derece) => {
  if (derece >= 30) {
    return `${sehir} konumu oldukça sıcak ve ${derece} derece`;
  } else if (derece < 30 && derece > 0) {
    return `${sehir} konumu ılık ve ${derece} derece`;
  } else {
    return `${sehir} konumu oldukça soğuk ve ${derece} derece`;
  }
};

console.log(getWeatherInfo("İzmir", 1));
console.log(getWeatherInfo("İstanbul", -5));
console.log(getWeatherInfo("Adana", 35));
