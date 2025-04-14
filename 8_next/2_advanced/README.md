# Catch-All Segments

- Url'den 1'den fazla parametre almak istediğimiz durumlarda kullanılır.
- [...parametre_ismi] syntaxı ile kullanılır

# Parallel Routes

- Parallel Routes, birden fazla sayfayı aynı layout içerisinde ekrana basmaya yarar.
- Her sayfa kendi bağımsız loding / error 'una sahiptir. (Normal component yerine ekrana sayfa basmamızın sebebi bu)

- Slot: @ işareti ile tanımlanan sayfalara slot ismi verilir.
- Slot olarak tanımlnana sayfalar layout prop olarak gider.
- Layout üzerinden slot olarak tanımlı sayfaları aynı anda veya koşullu ekrana basabiliriz

# Intercepting Routes

- Önizleme'li route.
- Kullanıcı bir sayfaya girmek isteğinde o sayfaya direkt yönlendirmek yerine bir önzileme sayfasına yönlendirip (genelde modal olarak açarız) kullanıcaya kesintisiz bir deneyim sunmamıza olanak sağlar.
- Bu özellik genel olarak ürün/gönderi detay sayfalarında , login/register sayfalarında kullanıcıyı ana akıştan koparmadan işlemlerini yaptırmak istiyorsak kullanırız.
- Parallel routes ile birlikte kullanıldığında asıl etkiyi gösterir.

# Next.js Image

- Next.js resimler için optimizasyona sahiptir.
- Normal image etiket'i yerine next.js Image component'ı kullanılır.
- Next.js resimlerin hem seo dostu hem de daha düşük boyutlu/hızlı ekrana basılmasını sağlar

# Client Side Rendering (CSR) vs Server Side Rendering (SSR)

- Client side rendering yöntemi uygulanan bir sayfaya girdiğimizde `js kodu` ve `boş html dosyası` indiririz. İndirilen js kodu `kendi cihazımızda` çalıştırılır ve sayfa içeriği oluşturulur.

- Server side rendering yöntemi uygulanan bir sayfaya girdiğimizde `js kodu` ve `dolu html dosyası` indiririz. İndirilen html dosyası `server'da` oluşturulur ve sayfa içeriği oluşturulur.

# Neden SSR kullanırız?

1. Performans: JS kodu client'da çalışıcağına donanım olarak daha güçlü olan server'da çalıştığı için client'a daha az yük bindirir.

2. SEO: SEO açısından SSR daha avantajlıdır. SSR sayfalarının içeriği server'da oluşturulduğu için arama motorları tarafından daha kolay indexlenebilir.

# Nasıl SSR veya CSR renderlarız ?

Next.js'de 2 farklı component türü vardır:

1. Server Component: SSR için kullanılır.
2. Client Component: CSR için kullanılır.

- Next.js biz aksini belirtmedikçe her component'ı server component yapar.
- Eğer bir component'ın en üstünde `use client` yazarsak bu component client component olur.

- Not: Her component'ı server component yapamyız çünkü server component'lar kullanıcı etkileşimini (onClick,onSubmit) takip edemezler ve react hooks (useState,useEffect) kullanamazlar.

# Next.js İmport

- Bir içeriği import ederken iki farklı yöntem kullanabiliriz:

1. `@` ile absolute import

- Bu işaret varsayılan olarak import yolunu /src klasöründen başlatır
- Bu sayede dosya konumu değiştirince hata alma ihtimalini ortadan kaldırırır çünkü import yolu değişmez.

2. `./` ile relative import

- Bu import yönteminde import ediceğimiz içerik mevcut dosyadan ne kadar uzaktaysa ona göre ... işaretleri import ederiz

# Data Fetching

- Next.js'de veri çekme olayının server component'larda yapılması önerilir.
- Server component'larda veri çektiğimiz zaman next.js api'dan gelen cevabı cache'de tutar ve aynı api isteğini tekrar attığımız zaman api'da gitmek yerine cache'deki cevabı döndürür.

- Bu sayede:
- - ilk istek sonrasında api'dan cevap bekleme gerek kalmaz > daha hızlı
- - api gereksiz istek gitmez > daha az yük
- - cache özelliği sayesinde eğer api'dan gelen cevabı birden fazla component'da kullanmak istiyorsak redux vb. gerek kalmadan bütün component'larda api isteğini yapabiliriz.

# SSG (Static Site Generation) & generateStaticParams

- SSG, bir sayfanın statik olarak oluşturulmasıdır.
- Bir sayfa parametre alıyorsa dinamik, parametre almıyorsa statik bir sayfadır.
- generateStaticParams, dinamik bir sayfanın statik hale getirilmesi için kullanlan bir fonksiyondur.
- generateStaticParams, return ettiği paramtrelere sahipr dinamik sayfalrın hepsini staitk olrak hazırlar.

# ISR (Incremental Static Regeneration)

- Dinamik içerikleri sahip (sosyal medya gönderileri) sayfaları statik olarak oluşturup arıdından belirli bir zaman aralıklarıyla bu içeriklerin güncel kalması için sayfanın tekrardan oluşturulmasını / verinin tekrar alınmasını sağlayan tekniktir

- revalidate:
  - server component'larının cache'lenme süresini belirler
  - generateStaticParams ile birlikte de kullanılabilir.
  - eğer değeri 0 yaparsanız cache'lenmemesi anlamına gelir
  - api isteklerinde api isteklerinin cache'de tutulam süresini belirlemek için de kullanıalbilir.

# Font

- Next.js resimlerde olduğu gibi fontlar da optimize edilmiştir.
- Örneğin bir fontun sadace projede kullanılan boyutlarını import eder.
- Bu sayede font boyutu küçültülür ve sayfa yükleme hızı artar.
- İki farklı şekilde font import edilebilir:

1. Local Font

- Font dosyasının proje içerisinde bulunması gerekir.

2. Remote Font

- Fontun google fonts linki kullanılır

# Next Methods

## useRouter

- sadece `client component` içerisinde kullanılır
- proje içerisinde yönlendirme yapmak için kullanılır
- back() | forward() | push() | refresh() | replace()

## redirect

- sadece `server component` içerisinde kullanılır
- proje içerisinde yönlendirme yapmak için kullanılır
- redirect("/")

## notFound

- hem `server component` hem `client component` içerisinde kullanılır
- 404 sayfasını renderlar
- notFound()

## usePathname

- sadece `client component` içerisinde kullanılır
- proje içerisindeki aktif route'u döndürür
- usePathname()

## useParams

- sadece `client component` içerisinde kullanılır
- kullancığı bulunduğu route'un parametrelerini döndürür
- useParams()

## useSearchParams

- sadece `client component` içerisinde kullanılır
- kullancığı bulunduğu route'un query parametrelerini döndürür
- useSearchParams()
