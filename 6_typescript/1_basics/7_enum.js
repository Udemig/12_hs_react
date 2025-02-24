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
var color = {
    red: 0,
    yellow: 1,
    green: 2,
};
// Typescript ile
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
// bu seneryoda enum kullanmanın bize sağlıyacağı fayda tip tanımı olarak kullanıbiliyor olması
var speak = function (light) {
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
var Gun;
(function (Gun) {
    Gun[Gun["Pazartesi"] = 0] = "Pazartesi";
    Gun[Gun["Sali"] = 1] = "Sali";
    Gun[Gun["Carsamba"] = 2] = "Carsamba";
    Gun[Gun["Persembe"] = 3] = "Persembe";
    Gun[Gun["Cuma"] = 4] = "Cuma";
    Gun[Gun["Cumartesi"] = 5] = "Cumartesi";
    Gun[Gun["Pazar"] = 6] = "Pazar";
})(Gun || (Gun = {}));
var day1 = Gun.Carsamba;
var day2 = Gun[4];
var day3 = Gun[Gun.Pazar];
console.log(day1); // 2
console.log(day2); // Cuma
console.log(day3);
