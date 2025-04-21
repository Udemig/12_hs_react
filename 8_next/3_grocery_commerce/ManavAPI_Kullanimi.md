# Manav API Kullanım Kılavuzu

Bu kılavuz, Manav API'sini Postman aracılığıyla test etmek için gerekli adımları içerir.

## Başlangıç

1. Postman uygulamasını açın
2. `ManavAPI.postman_collection.json` dosyasını içe aktarın ("Import" > "File" > dosyayı seçin)
3. Koleksiyon başarıyla içe aktarıldıktan sonra, "Manav API" koleksiyonu Postman'da görünecektir

## Değişkenler

Koleksiyonda üç değişken tanımlanmıştır:

- `grocery_id`: Manav ürünleri için ID değeri
- `order_id`: Siparişler için ID değeri
- `user_id`: Sepet işlemleri için kullanıcı ID değeri (varsayılan olarak "user123")

Bu değişkenleri, API'yi test ederken elde ettiğiniz gerçek ID'lerle güncellemeniz gerekir.

## Test Veri Seti

`GroceryTestData.json` dosyası, veritabanınıza ekleyebileceğiniz örnek manav ürünlerini içerir. Bu veri setini veritabanınıza eklemek için MongoDB arayüzü veya `seedGrocery.js` script'ini kullanabilirsiniz.

## API Endpoint'leri

### Manav Ürünleri

#### Tüm Manav Ürünlerini Getir

- Endpoint: `GET /api/groceries`
- Açıklama: Tüm manav ürünlerini listeler

#### ID ile Manav Ürünü Getir

- Endpoint: `GET /api/groceries/:id`
- Açıklama: Belirli bir ID'ye sahip manav ürününü getirir
- Kullanım: URL'deki `{{grocery_id}}` değişkenini, gerçek bir ürün ID'si ile değiştirin

### Sepet İşlemleri

#### Sepeti Görüntüle

- Endpoint: `GET /api/cart?userId={{user_id}}`
- Açıklama: Belirli bir kullanıcının sepetini görüntüler

#### Sepete Ürün Ekle

- Endpoint: `POST /api/cart`
- Body:

```json
{
  "userId": "{{user_id}}",
  "groceryId": "{{grocery_id}}",
  "quantity": 2
}
```

- Açıklama: Sepete ürün ekler veya mevcut ürün miktarını günceller

#### Sepeti Boşalt

- Endpoint: `DELETE /api/cart?userId={{user_id}}`
- Açıklama: Kullanıcının sepetini tamamen boşaltır

#### Sepetteki Ürün Miktarını Güncelle

- Endpoint: `PUT /api/cart/item`
- Body:

```json
{
  "userId": "{{user_id}}",
  "groceryId": "{{grocery_id}}",
  "quantity": 3
}
```

- Açıklama: Sepetteki belirli bir ürünün miktarını günceller

#### Sepetten Ürün Kaldır

- Endpoint: `DELETE /api/cart/item?userId={{user_id}}&groceryId={{grocery_id}}`
- Açıklama: Sepetten belirli bir ürünü tamamen kaldırır

### Siparişler

#### Tüm Siparişleri Getir

- Endpoint: `GET /api/orders`
- Açıklama: Tüm siparişleri listeler

#### Yeni Sipariş Oluştur

- Endpoint: `POST /api/orders`
- Body:

```json
{
  "product": "{{grocery_id}}",
  "quantity": 2,
  "money_spend": 50,
  "currency": "TRY",
  "customer_name": "Ahmet Yılmaz",
  "customer_phone": "05551234567",
  "delivery_address": "Örnek Mahallesi, Test Sokak No:123, İstanbul",
  "is_delivery": true
}
```

- Açıklama: Yeni bir sipariş oluşturur

#### ID ile Sipariş Getir

- Endpoint: `GET /api/orders/:id`
- Açıklama: Belirli bir ID'ye sahip siparişi getirir
- Kullanım: URL'deki `{{order_id}}` değişkenini, gerçek bir sipariş ID'si ile değiştirin

#### Sipariş Güncelle

- Endpoint: `PUT /api/orders/:id`
- Body:

```json
{
  "quantity": 3,
  "delivery_address": "Yeni Mahalle, Farklı Sokak No:456, İstanbul",
  "is_delivery": true
}
```

- Açıklama: Belirli bir siparişi günceller
- Kullanım: URL'deki `{{order_id}}` değişkenini, gerçek bir sipariş ID'si ile değiştirin

#### Sipariş Sil

- Endpoint: `DELETE /api/orders/:id`
- Açıklama: Belirli bir siparişi siler
- Kullanım: URL'deki `{{order_id}}` değişkenini, gerçek bir sipariş ID'si ile değiştirin

### Ödeme İşlemi

#### Tek Ürün Satın Alma

- Endpoint: `POST /api/checkout`
- Body:

```json
{
  "grocery": {
    "_id": "{{grocery_id}}",
    "name": "Elma",
    "price": 25,
    "description": "Taze Amasya elması"
  },
  "quantity": 2,
  "customerInfo": {
    "name": "Mehmet Öz",
    "phone": "05559876543",
    "deliveryAddress": "Bahçeli Mahalle, Meyve Sokak No:45, Ankara",
    "isDelivery": true
  }
}
```

- Açıklama: Tek bir manav ürünü satın alma işlemi gerçekleştirir

#### Sepet İçeriğini Toplu Satın Alma

- Endpoint: `POST /api/checkout`
- Body:

```json
{
  "userId": "{{user_id}}",
  "customerInfo": {
    "name": "Mehmet Öz",
    "phone": "05559876543",
    "deliveryAddress": "Bahçeli Mahalle, Meyve Sokak No:45, Ankara",
    "isDelivery": true
  }
}
```

- Açıklama: Sepetteki tüm ürünleri toplu olarak satın alma işlemi gerçekleştirir

## Test Sıralaması

API'yi test etmek için önerilen adımlar:

### Tekli Ürün Satın Alma

1. "Get All Groceries" endpoint'i ile mevcut ürünleri görüntüleyin
2. Bir ürün ID'si alın ve koleksiyon değişkenlerindeki `grocery_id` değerini güncelleyin
3. "Checkout Single Item" endpoint'i ile bir satın alma işlemi gerçekleştirin
4. "Get All Orders" endpoint'i ile oluşan siparişi görüntüleyin

### Sepetten Toplu Satın Alma

1. "Get All Groceries" endpoint'i ile mevcut ürünleri görüntüleyin
2. "Add to Cart" endpoint'i ile sepete birkaç farklı ürün ekleyin (her biri için `grocery_id` değerini güncelleyin)
3. "Get Cart" endpoint'i ile sepet içeriğini kontrol edin
4. "Checkout Cart" endpoint'i ile sepetteki tüm ürünleri satın alın
5. "Get All Orders" endpoint'i ile oluşan siparişleri görüntüleyin
6. "Get Cart" endpoint'i ile sepetin boşaldığını doğrulayın

## Hata Durumları

- 400: Geçersiz istek (Örn: Eksik kullanıcı ID, yetersiz stok durumu)
- 404: İstek yapılan kaynak bulunamadı (Örn: Yanlış ID ile ürün veya sipariş sorgulaması)
- 500: Sunucu hatası (Beklenmeyen hatalar)
