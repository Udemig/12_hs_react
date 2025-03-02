/*
 ! Generic
 * Bir fonksiyon'ın, type'ın, class'ın veya interface'in içerisindeki bazı tiplerin dinamil olarak dışarıdan gelen değere bağlı değişmesini  istediğimiz durumlarda kullanırız
 * Bu durumda generic özelliğini kullanarak dışarıdan parametre olarak tip alabilyoruz
*/
// Number dizisi gelirse rastgele bir sayı döndürmeli
// String dizisi gelirse rastgele bir string döndürmeli
var getRandomNumber = function (array) {
    var i = Math.round(Math.random() * array.length);
    return "selam";
};
console.log(getRandomNumber([3, 5, 7, 9, 34, 67, 90]));
console.log(getRandomNumber(["s", "f", "d", "a", "c", "g"]));
