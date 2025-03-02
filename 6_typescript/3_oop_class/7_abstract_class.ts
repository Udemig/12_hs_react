/*
 * Abstract Class (Soyut Sınıf)

 * Abstract class'lar sınıflar için birebir şablon görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özelliklerini ve methodlarını belirleriz.
 * Soyut sınıfların doğrudan örnekleri oluşturulamazlar
 * Bundan dolayı soyut sınıflara normal sınıflar için tip tanımı diyebiliriz.  
*/

// Soyut Sınıf
abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}

  // method: doğrudan miras alan sınıfa geçer
  takePicture() {
    console.log("fotoğraf çekiliyor...");
  }

  // soyut method: methodun görevini miras alan sınıflarda tanımlarız
  abstract share(send: string): void;
}

// Soyut sınıfı miras alan sınıf
class Instagram extends TakePhoto {
  share(send: string): void {
    console.log(`Atılan hikaye ${send} kişisiyle paylaşılıyor`);
  }
}

// Soyut sınıfı miras alan sınıf
class Twitter extends TakePhoto {
  share(send: string): void {
    console.log(`Gönderilen tweet ${send} kişisiyle paylaşılıyor`);
  }
}

const tw = new Twitter("arka kamera", "manzara");
tw.takePicture();
tw.share("@ali");
