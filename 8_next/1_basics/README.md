# Next.js Routing

- Bir nextjs projesinde routing için 2 farklı yöntem kullanılır.
- App Router (yeni yöntem) - v14'ten sonra kullanılıyordu.
- Pages Router (eski yöntem) - v13'ten önce kullanılıyordu.

## App Router

- Dosya dizinine göre / klasör tabanlı sayflamaya yarar
- Bütün sayfalar /src/app klasörü içerisinde olmalıdır.
- /app içerisinde tanımlanan ve içerisinde page.jsx dosyası olan klasörler otomatik olarak route olarak tanınır.
- Page.jsx dosyasının içerinde bir react component'ı export edilir.
- Page.jsx'i kapsayan klasörün adı, route'un adını oluşturur.

## Nested Routes - İç İçe Yollar

- örn:
- /profile/page.jsx > profili görüntüleyin
- /profile/settings/page.jsx > profil ayarlarını görüntüleyin
- /profile/edit/page.jsx > profil düzenleme sayfasını görüntüleyin

## Dynamic Routes - Dinamik Yollar

- Sayfa içeriği url'deki parametreye göre değişiceği için parametre kullanırız.
- Parametre tanımlarken [parametre_adi] şeklinde tanımlarız.

- örn:
- /products/1 > 1 numaralı ürünü görüntüleyin
- /products/2 > 2 numaralı ürünü görüntüleyin
- /products/3 > 3 numaralı ürünü görüntüleyin

## Link

- Yönlendirme için kullanırız.
- href değeri yönlendirlicek url'i belirler
- "." ile bir önceki sayfaya yönlendirebiliriz

## Route Group

- Proje içerisindeki sayfa sayısı arttıkça daha organize olabilmek için sayfaları gruplandırmak isteyebiliriz.

- Yazdığımız sayfların daha kolay erişlebilir olması için sayfaları gruplandırırz.

- Url'e etki etmesini istemiğimi klasörleri `()` içine alırız.

## Metadata

- SEO açısından metadataları tanımlamak önemlidir.
- Sayfaların metada dediğimiz tarayıca öne çıkması için ihtiyacı olan başlık/açıklama/logo gibi değerleri react'da sabit bir şekilde bütün sayfalarda aynı olarak ifade ederken next.js'de her sayfaya özel metadata tanımlayabiliyoruz.

## Layout - Düzen Bileşeni

- Bir uygulamanın / sayfa grubunun genel sayfa düzenini ve ortak bileşenlerini tanımlamamızı sağlar.

- RootLayout'da yapılan değişiklikler projedeki bütün sayfaları etkiler ama bazı durumlarda sadece bir route grubundaki sayfaların ortak componentlarını tanımlamak isteyebiliriz bu durumda o route grubuna özel layout oluşturruz

## Template - Düzen Bileşeni

- Layout ile aynı mantıkla çalışır.
- Layout'tan farklı olarak sayfa geçişlerinde tutulan state'ler sıfırlanır

# Özel Dosyalar

- Next.js'de ismi varsayılan olarak belirlenöiş ve özel bir amaca hizmet eden dosyalar vardır.

- `page`: Bir sayfa tanımlamaya yarar
- `layout`: sayfaların ortak düzenini tanımlar
- `template`: sayfaların ortak düzenini tanımlar
- `not-found`: 404 sayfasını tanımlar
- `loading`: sayfa yüklenirken yapılacak işlemleri tanımlar
- `error`: sayfa hatası durumunda yapılacak işlemleri tanımlar

# SSG - Static Site Generation

- Next.js'de static ve dynamic page kavramları sayfanın nasıl oluşturulduğunu ve kullanıcıya hangi yoldan sunacağımızı ifade eder.

1. Static Page

- Derleme aşamasında (build-time) oluşturulur.

- Statik sayfalar, derleme aşamasında oluşturulur ve html dosyası olarak sunucuya yüklenir. Bu sayfalar, içeriklerinde değişiklik olmadıkça tekrardan oluşturulmazlar.

- Performans çok hızlıdır, çünkü sayfalar bir kez oluşturulur ve CDN üzerinden önbelleğe alınabilir. Bu sayede her istek sunucuda işlenmez.

- SEO açısından statik sayfalar iyidir. Sayfa içeriği kolayca indexlenebiliri.

2. Dynamic Page

- Dinamik sayfalar, her istekte (request-time) oluşturulur.
