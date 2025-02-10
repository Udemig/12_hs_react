// test edilecek fonksiyon
const fn = (a, b) => a + b;

// testleri gruplandırmak için kullanırız
describe("fonksiyon testleri", () => {
  // bütün testlerin öncesinde bir kez çalışır
  beforeAll(() => {
    console.log("beforeAll çalıştı");
  });

  // bütün testlerin sonrasında bir kez çalışır
  afterAll(() => {
    console.log("afterAll çalıştı");
  });

  // her bir testin öncesinde çalışır
  beforeEach(() => {
    console.log("beforeEach çalıştı");
  });

  // her bir testin sonrasında çalışır
  afterEach(() => {
    console.log("afterEach çalıştı");
  });

  // fonksiyonun 1. testi
  test("pozitif sayılarda çalışır", () => {
    const sum = fn(9, 6);
    expect(sum).toBe(15);
  });

  // fonksiyonun 2. testi
  test("negatif sayılarda çalışır", () => {
    const sum = fn(-6, -8);
    expect(sum).toBe(-14);
  });
});
