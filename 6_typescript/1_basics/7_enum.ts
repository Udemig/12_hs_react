/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi

 * Benzer kategorideki değerleri bir arada tutmak için kullanılır.

 * İsimlendirme
 * İlk harfi büyük olur
 * Çoğul takısı kullanılmaz
 * Months X  |  Month ✔︎
*/

// Örn-1) Trafik ışığının aşamlarının verisini tutalım

// Klasik js ile
const color = {
  red: 0,
  yellow: 1,
  green: 2,
};

// Typescript ile
enum Color {
  red,
  yellow,
  green,
}

// bu seneryoda enum kullanmanın bize sağlıyacağı fayda tip tanımı olarak kullanıbiliyor olması
const speak = (light: Color) => {
  switch (light) {
    case Color.red:
      return console.log("Lütfen durunuz");
    case Color.yellow:
      return console.log("Hazırlanın");
    case Color.green:
      return console.log("İlerleyebirsiniz");
  }
};

// bu fonksiyonu kullanırken sadece color enumndaki deperleri prametre olarak gönderebiilyoruz
speak(Color.red);
speak(Color.yellow);
speak(Color.green);

// Örnek - 2
enum Gun {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let day1 = Gun.Carsamba;
let day2 = Gun[4];
let day3 = Gun[Gun.Pazar];

console.log(day1); // 2
console.log(day2); // Cuma
console.log(day3); // Pazar

// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kulllanıcılara arayüzde sıklıkla kargo durumunu bildirmemiz gerekiyor.
// Bu durumda karga aşamalarını js'te bir nesneye atardık ts'de ise bunu enum'da tutarız

enum Status {
  pending = "beklemede",
  processing = "hazırlanıyor",
  shipping = "dağıtımda",
  done = "teslim edildi",
  cancel = "iptal edilid",
}

const updateStatus = (value: Status) => {
  // kargo durumu parametre olarak gelen değerle güncellenir
};

updateStatus(Status.cancel);

// Örnek - 4

enum Action {
  create = "CREATE",
  update = "UPDATE",
  delete = "DELETE",
}

const reducer = (state: any, action: Action) => {
  console.log("action çalıştıırldı", action);
};

reducer(1, Action.create);
reducer(2, Action.update);
reducer(2, Action.create);
