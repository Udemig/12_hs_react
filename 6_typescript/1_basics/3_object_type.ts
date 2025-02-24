/*
 ! Object Type
 * Normal şartlarda ts'de bir object type'ı mevcuttur.
 * Ama object type'ı ucu çok açık bir type olduğu için kullanılmasını tercih etmeyiz.
 * Biz genelde daha spesifik bir şekilde özellikleri ve özelliklerini tipi belirli olan nesnelerle çalışırız.
*/

// X Doğru değil
let data: object;

data = {};
data = [];
data = function () {};
data = new Date();

// nesne tipi tanımlamanın doğru yolu
let student: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
};

// tanımladığımız tipe göre değer ataması yapalım
student = {
  id: 4,
  firstname: "ali",
  lastname: "yılmaz",
  isGraduated: true,
};
