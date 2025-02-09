import { render, screen } from "@testing-library/react";
import App from "./App";

// App bileşeninin tetlerinin yazıldığı dosyadır
// Bir dosyanın test dosyası oldığunu anlamak için .test.js/.test.jsx uzantısına bakarız

/*
 ! Unit Test
 * Yazdığımız dinamik olan bütün bileşenlerin testini yazarız

 * Unit test yazmamız sayesinde kod değişikliği yapıldığında, yaptığımız değişiklikleri githuba göndermeden önce testleri çalıştırarak hata olup olmaığını kontrol ederiz.

 * Projelerde her işlevi el ile kontrol etmek çok fazla zaman alıcağından ve gözden bir şey kaçma ihtimali yüksek olduğundan test yazmak önemlidir.

 * Bu yüzden unit test ile bileşenlerimizin doğru çalışıp çalışmadığının testini yazarız

 ! Test Yazma
 * Bir fonksiyonun ve bileşenin testini yazmak için "test" veya "it" methodunu kullanırız
 * Test fonksiyonu 2 parametre alır:
 * 1) string: testin adı
 * 2) fonksiyon: testin yapıldığı fonksiyon
*/

test("Merhaba Dünya başlığı ekrana basılır", () => {
  //1) test edilecek olan bileşeni render ederiz (virtual - sanal)
  render(<App />);

  //2) test edilecek olan elementi çağırırız
  // js yazıyor olsaydık elementi document nesnesi ve querySelector,getElementById.. methodlar ile çağırırdık
  // elementler sanal ortamda olduğu için screen nesnesi ve getByText,getByRole.. methodları ile çağırıcaz
  const titleElement = screen.getByText("Merhaba Dünya");

  //3) çağrılan elementten beklentimizi söyleriz
  expect(titleElement).toBeInTheDocument();
});
