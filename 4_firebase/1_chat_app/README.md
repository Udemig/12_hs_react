# Firebase Auth

- Oturumu açık olan kullanıncının verilierini almak için 2 farklı yöntem bulunur.

1. auth.currentUser: veri ilk olarak null geldiği için ekrana basarken sorun yaşayabiliriz ama consolde kullanıyı kontrol etmek için kullanılabilir

2. onAuthStateChanged Methodu: sürekli olarka kullanıcı oturumu izler her değiştiğinde güncel verilieri bizi getirir.

# Firebase Firestore

1. Collection: Kolleksiyonlar, bir grup belgeyi bir arada tutar. Kendisi doğrudan veri içermez, yalnızca belgeleri tutar

- Örneğin, users kollekisyonu herbir kullanıcı için birer belge tutar.

2. Document: Kolleksiyonlar içerisinde yer alan veriyi saklayan yapılardır. Belgeler JSON benzeri bir yapıya sahip ve anahta-değer çifleriyle veriyi saklar.

- Örneğin, users koolleksiyonu içerisindeki bir belge:

```js
{
    "id":"122345",
    "name":"Ali",
    "email":"ali@example.com",
    "age":30
}
```

# Hesaplama

```js
setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 100);
```

- scrollTop: kullanıcı yukarıdan itibaren ne kadar kaydırdı
- clientHeight: kullanıcnın ekranda görebildiği kısmın yüksekliği
- scrollHeight: tüm içeriğin yüksekliği (gizli kısımlar dahil)
