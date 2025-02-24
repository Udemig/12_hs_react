/*
 ! Void Type
 * Sadece fonksiyonların return tipinde kullanabiliyoruz.
 * Fonksiyon herhangi bir veri return etmiyorsa kullanılır.
 * Void varsa ya return satırı yoktur yada return satırı değer döndürmüyodur. 
*/

function selamla(): void {
  console.log("Selam nasılsınız?");

  return; // fonksiyonu durduran yani değer döndürmeyen return satırları kullanıabilir
}

/*
 ! Never Type
 * Sadece fonksiyonların return tipinde kullanabiliyoruz.
 * Foksiyon hata fırlatıyorsa return tipi never olarak ifade edilir
 * "Hiçbir zaman görevini tam olarak tamamlayamaz" durumunu ifade edr
*/

function log(message?: string): string | never {
  if (!message) {
    throw new Error("Mesaj sağlanmadı");
  } else {
    return "Mesaj alındı";
  }
}

log("selam");

log();
