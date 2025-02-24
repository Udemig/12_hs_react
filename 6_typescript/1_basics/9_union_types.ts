/*
 * Union Types (Birleşmiş Tipler)
 * Bir dğeişkenin alabilceği birden fazla farklı türde veri varsa kullanılır.
  
 * Örn: Bir şehir değişkeni var ama şehir ismi mi (string) yoksa plakası mı (number) olucak belli değil. Bu tarz durumlarda değişkenin tipinin hem stirng hemde number olabaliceğini söyleriz.   
*/

let city: string | number;

city = "İstanbul";
city = 34;

// Örn: Telefonlara yönelik bir site yazıyoruz ve Android / Ios telefonlarının verileri farklı.
// Bundan dolayı iki farklı nesne tipi oluşturucaz.

type IOS = {
  ios_version: number;
  airdrop_status: boolean;
  device: string;
};

type Android = {
  android_version: string;
  google_play_version: number;
  device: string;
};

let phone: Android | IOS;

phone = {
  ios_version: 17.2,
  airdrop_status: true,
  device: "Iphone 16",
};

phone = {
  android_version: "Marshmellow",
  google_play_version: 4.5,
  device: "Samsung Note 15",
};

// Union Types - Nesneler İle Kullanımında:

type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// example değişkeninin tipine union ile AType veya BType tipinde diyelim
let example: AType | BType;

// hata vermemesi için ya A tipinin değerlerini tanımla
example = { key1: "selam", key2: "selam" };

// ya B tipinin değerlerini tanımla
example = { key3: 45, key4: 67 };

// yada hem A hemde B tiplerinin bütün değerlerini alabilir
example = { key1: "selam", key2: "selam", key3: 45, key4: 67 };
