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
