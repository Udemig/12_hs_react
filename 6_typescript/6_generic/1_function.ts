/*
 ! Generic
 * Bir fonksiyon'ın, type'ın, class'ın veya interface'in içerisindeki bazı tiplerin dinamil olarak dışarıdan gelen değere bağlı değişmesini  istediğimiz durumlarda kullanırız
 * Bu durumda generic özelliğini kullanarak dışarıdan parametre olarak tip alabilyoruz
*/

// Yazıcağımız fonksiyon:
// 1) Number dizisi gelirse rastgele bir sayı döndürmeli
// 2) String dizisi gelirse rastgele bir string döndürmeli

// Union kullandığımızda return tipi ya string ya number olucak diyoruz bu da string dizisi geldiğinde number döndürebilceği anlmına gelir. Yani yukarıdaki koşullara uygun değil
const getRandomNumber = (array: number[] | string[]): number | string => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

console.log(getRandomNumber([3, 5, 7, 9, 34, 67, 90]));
console.log(getRandomNumber(["s", "f", "d", "a", "c"]));

// Generic Yardımıyla fonksiyonu tekrar yazalım
const getRandomEle = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

// fonksiyonu kullanraken array ve return tipini belirle
getRandomEle<string>(["s", "f", "d", "a", "c"]);
getRandomEle<number>([3, 5, 7, 9, 34, 67, 90]);
getRandomEle<object>([{ id: 1 }, { id: 2 }, { id: 3 }]);

/*
 * Gerçek Projede
 * useState<string>()
 * axios.get<Person[]>()
 */
