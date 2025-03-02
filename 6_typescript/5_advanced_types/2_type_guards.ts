/*
 ! Type Guards

 * Type guards'ın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılır

 * 2 farklı typeGuards yöntemi mevcuttur (typeOf,instanceOf)
*/

// 1) typeOf operatörü ile typeGuard tekniğini uygulayalım
function log(input: string | number): void {
  console.log("tip", typeof input);
  if (typeof input === "string") {
    // eğer inputun tipi string ise stringe özgü işlem yap
    console.log(input.toLowerCase());
  } else {
    // eğer inputun tipi number ise numbera özgü işlem yap
    console.log(input.toFixed(2));
  }
}

log(568.453453);
log("SELAM");

// instanceOf nedir?
// bir nesnenin hangi class'tan meydana geldiğini kontrol etmemizi sağlar
class Bird {}
class Rabbit {}

const tavsan = new Rabbit();

console.log("Tavşan nesnesi rabbit class'ının örneği midir?", tavsan instanceof Rabbit);
console.log("Tavşan nesnesi bird class'ının örneği midir?", tavsan instanceof Bird);

// instanceOf operatörü ile typeGuard tekniği uygulama
class Cat {
  meow(): void {
    console.log("🐈🐈🐈 miyav miyav");
  }
}

class Dog {
  bark(): void {
    console.log("🐶🐶🐶 hav hav");
  }
}

function makeSound(animal: Cat | Dog) {
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.bark();
  }
}

const kedi = new Cat();
const kopek = new Dog();

makeSound(kedi);
makeSound(kopek);
