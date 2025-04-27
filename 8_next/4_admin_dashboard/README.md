# Kategori Sayacı Fonksiyonu Açıklaması

```tsx
const object: Record<string, number> = {};

products.forEach((product) => {
  object[product.category] = (object[product.category] || 0) + 1;
});
```

Bu kod, bir ürün listesindeki kategorileri sayar:

1. `const object: Record<string, number> = {}` - Boş bir nesne oluşturur. TypeScript ile bu nesnenin string anahtarlar ve number değerler içereceğini belirtir.

2. `products.forEach((product) => {...})` - Ürünler dizisinin her elemanı için fonksiyonu çalıştırır.

3. `object[product.category] = (object[product.category] || 0) + 1` - Bu satır kritik:
   - Eğer kategori nesne içinde zaten varsa, değerini 1 artırır
   - Yoksa önce `|| 0` ile 0 değerini kullanır, sonra 1 ekler

Bu yöntem, bir veri kümesindeki kategorileri saymak için yaygın bir JavaScript/TypeScript desenidir. Sonuçta `object` içinde her kategorinin adı anahtar olarak, sayısı da değer olarak saklanır.

Örnek sonuç:

```
{
  "elektronik": 5,
  "giyim": 8,
  "kitap": 3
}
```

### değişken || "değer" kullanımı

Bu ifadeyle birlikte değişkenin değeri undefined ise "değer" kullanılır.
Değişkenin değeri undefined değilse değişkenin değeri kullanılır.

```tsx
const x = undefined;
console.log(x || "merhaba"); // "merhaba"

const x = "merhaba";
console.log(x || "merhaba"); // "merhaba"
```

# Suspense

- Nextjs'deki Suspense, bir componentin yüklenmesi sırasında bir loading göstermek için kullanılır.
- Bütün sayfanın yüklenmesi yerine sadece spesifik bir bölümünün yüklenmesi gerektiğinde kullanılır.
- Async componentları suspense ile sarmalarız ve fallback propuyla yüklenme sırasında ekrana basılcak conmponent'ı veririz

```tsx
<Suspense fallback={<Loading />}>
  <UserTable />
</Suspense>
```
