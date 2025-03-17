# Kütüphaneler

- React
- Tailwind CSS
- React Router DOM - react-router-dom
- Tanstack Query - @tanstack/react-query
- Formik - formik
- Yup - yup
- Axios - axios
- React Icons - react-icons
- React Toastify - react-toastify

# Projeyi çalıştırmak için

1. Projeyi clonelayın.
2. `cd backend` ile backend klasörüne gidin.
3. Backend bağımlılıklarını yüklemek için `npm install` yazın.
4. Backend'i çalıştırmak için `npm start` yazın.
5. yeni terminalde `cd frontend` ile frontend klasörüne gidin.
6. Frontend bağımlılzbıklarını yüklemek için `npm install` yazın.
7. Projeyi çalıştırmak için `npm run dev` yazın.

# Tanstack Query

- React projelerinde api'dan gelen cevab'ın state'ini daha kolay ve optimize bir şekilde yönetmek için kullanılır.

### Özellikler

- Otomatik olarak loading,error,data state'lerini yönetir.
- Otomatik olarak cache işlemi uygular.
- Api isteği başarısız olursa emin olmak için 3 kez daha dener
- Component'lardaki karşılıklığı azaltır
- Apı'dan gelen verileri için Redux ihtiyacı olmaz.
- Birden fazla component'ta aynı api isteğini atarsanız, sadece bir kere api isteği atılı, gelen cevap cache'de tutulur ve diğer component'larda cache'ten okunur.

### Tanstack Query Hook'ları

- useQuery
- useMutation

### useQuery Hook'u

- useQuery hook'una benzersiz bir isim ve api isteğini atan fonksiyon verilir
- Api isteğinin tüm sürecini otomatik yönetir
- İstek durumunu (loading, error, data) otomatik takip eder
- Hata durumunda 3 kez daha deneme yapar
- Başarılı cevapları otomatik olarak cache'ler
- Aynı veriyi kullanan birden fazla component olduğunda sadece ilk istek api'ye gider, diğerleri cache'den alır
- State management ihtiyacını ortadan kaldırır

```ts
useQuery({
  // sorgu için benzersiz bir isim
  queryKey: ["places"],
  // api isteği atan fonksiyon
  queryFn: () => {
    api.get<PlacesResponse>("/places").then((res) => res.data.places);
  },
});
```

# Formik

- Form'larda state yönetimi için kullanılan bir kütüphane.
- Form içerisindeki inputların değerlerini ve hatalarını yönetmek için kullanılır.

# Regex

- Regular Expression
- Düzenli ifadeler
- String içerisinde arama yapmak için kullanılır
- Örnek: "1234567890" stringi içerisinde "567" aramak için "567" yazılır
- String metinlerin belirli koşullara uygun olup olmadığını kontrol etmek için kullanılır
- Örneğin bir şifre alanının yeterince güçlü olup olmadığını kontrol etmek için büyük harf, küçük harf, sayı ve özel karakter içermesi gerektiğini belirtmek için kullanılır.
- Bir isim alanında sadece harflerin kullanılmasını sağlamak için kullanılır.
