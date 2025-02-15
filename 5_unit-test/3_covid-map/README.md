# Gerekli Kütüphaneler

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event@14.0
- axios
- millify
- react-simple-maps
- react-router-dom
- react-icons
- tailwindcss
- @reduxjs/toolkit
- react-redux
- redux-thunk

# Kaynaklar

- DETAY VERİLERİ İÇİN API: https://rapidapi.com/api-sports/api/covid-193/playground/apiendpoint_97f1d614-d52d-459a-bb34-be1211366b0c

- TOPLAM VERİLER İÇİN API: https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/playground/apiendpoint_ef9e1955-666c-43ba-9b5c-4b463ae316dc

- GEO.JSON: https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json

# Selector

- Ekrandaki elementleri almak için kullandığımız seçici methodları 3 ana parçadan oluşur.

1. Method:

- Get: Ekrandaki elementi alamazsa hata verir
- Query: Ekrandaki elementi alamazsa hata vermez null döndürür
- Find: Ekrana asenkron olarak basılan etlementleri alır

2. All İfadesi:

- Eğerki ekrandan tek bir methodla birden fazla eleman alamak istiyorsak kullandığımız methodun devamını all ifadesi ekleriz
- All kullanırsak dönen cevap her zaman dizi içerisinde olur
- queryAllBy | getAllBy | findAllBy

3. Sorgu Methodu:

- Hangi yöntemle elementi seçiceğimizi belirleyen method
- ByRole
- ByLabelText
- ByPlaceholder
- ByText
- ByDisplayValue
- ByAltText
- ByTitle
- ByTestId

## Nesne İle Dizi Farkı

- Nesne: Genelde bir elemanın birden fazla özelliğini key-value şeklinde tutar

  ```js
  const x = {
    name: "ali",
    age: 43,
  };
  ```

- Dizi: Genelde aynı türden birden fazla elemanı tutar

```js
const y = ["mehmet", "ali", "burak"];
```
