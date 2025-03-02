/*
 ! Access Modifiers - Erişim Belirteçleri
 
 * Class elemanları ile tutucağımız zaman bu bilgilerin class'ın dışarısından erişilip erişilmeyceğini belirtmek için kullandığımız yöntem.

 * 3 adet erişim belirteci vardır:

 * public: hem class dışarsından hem de class'ı miras alan diğer class'lardan erişilebilir
 * protected: class'ın dışasrından erişilemez ama class'ı miras alan diğer class'lar erişir
 * private: hem class'ın dışarısından hem de class'ı mirsa alan diğer class'lar erişemez
*/

// Oluşturduğumuz class
class Arac {
  public marka: string = "BMW";
  protected model: string = "m4";
  private chasis_no: number = 534684390273842;

  tanit() {
    console.log(this.marka, this.chasis_no);
  }
}

// Miras aldığımız class
class Motor extends Arac {
  calistir() {
    console.log(this.marka);
  }
}

// Class'tan alınan örnek
const mercedes = new Motor();
console.log(mercedes.marka);

/*
 * Not: Erişim belirteçleri ts'e özel bütün kodlarda olduğu gibi js'de derlerdiğim zaman ortadan kalkar. Yani belirteçler sadece geliştirme aşamasında daha güvenli olmak için kullanılır.

*  Erişim             DIŞARIDAN           MİRAS ALAN CALSS          TANIMLANDIĞI CLASSS

*  PUBLIC               💥                        💥                          💥

*  PROTECTED                                      💥                          💥

*  PRIVATE                                                                    💥
*/
