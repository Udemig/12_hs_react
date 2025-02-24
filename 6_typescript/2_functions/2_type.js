/*
 * Typescript'de bir fonksiyonun tipini doğrudan fonksiyonu tanımmlarken ifade etmek yerine custom type ile ayrı bir noktada tanımlayıp tekrar tekrar kullanabiliyoruz
 */
// 1. yol
var func1 = function (par1, par2) {
    return "Fonksiyon Çalıştı:" + par1 + par2;
};
var func2 = function (par1, par2) {
    return "Fonksiyon Çalıştı:" + par1 + par2;
};
var func3 = function (par1, par2) {
    return "Fonksiyon Çalıştı:" + par1 + par2;
};
var func4 = function (par1, par2) {
    return "Fonksiyon Çalıştı:" + par1 + par2;
};
var getWeatherInfo = function (sehir, derece) {
    if (derece >= 30) {
        return "".concat(sehir, " konumu olduk\u00E7a s\u0131cak ve ").concat(derece, " derece");
    }
    else if (derece < 30 && derece > 0) {
        return "".concat(sehir, " konumu \u0131l\u0131k ve ").concat(derece, " derece");
    }
    else {
        return "".concat(sehir, " konumu olduk\u00E7a so\u011Fuk ve ").concat(derece, " derece");
    }
};
console.log(getWeatherInfo("İzmir", 1));
console.log(getWeatherInfo("İstanbul", -5));
console.log(getWeatherInfo("Adana", 35));
