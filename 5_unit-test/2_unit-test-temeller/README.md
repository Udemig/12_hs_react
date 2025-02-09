# Selectors - Seçici Methodları

- Screen nesnesi aracılığı ile erişlen methodlardır
- Test içerisinde jsx elementlerini çağırmaya yarar
- https://testing-library.com/docs/queries/about/

# HTML Element Rolleri

- Her HTML elementinin görevğini temsil eden bir rolü vardır.
- Bu rol ismi bazen element ismi ile aynı bazen farklı olabilir.
- Testlerde en çok getByRole ile elementleri rollerine göre çağırırız.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

# Matchers

- Expect fonksiyonu aracılığı ile kullandığımız methodlardır.
- Çağırdığımız html elementlerini veya fonksiyonları test etmeye yarayan methodlardır
- İki çeşit methcer'lar vardır:
- DOM: https://github.com/testing-library/jest-dom
- Değişkenler: https://jestjs.io/docs/using-matchers
