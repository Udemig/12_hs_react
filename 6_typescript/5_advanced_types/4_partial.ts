/*
 * Typecript içerisinde varsayılan olarak bulunan bir type'dır.
 * Generic olarak aldığı nesnenin bütün değerlni opsiyonel yapar
 */

type User = {
  username: string;
  age: number;
  password: string;
};

const update = (user: User) => {
  // axios.put() > kullanıcın bütün değerlerini alamalıyız
};

const updatePart = (user: Partial<User>) => {
  // axios.patch() > sadece güncellenicek değerleri almalıyız
};

update({ username: "furkanevin", age: 34, password: "12312" });
updatePart({ username: "furkanevin" });
