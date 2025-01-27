# Yazılım Mimarisi

Yazılım mimarisi, bir yazılımın (uygulama, web sitesi, API, oyun) temel yapı taşlarını, bu yapı taşlarının birbiriyle olan etkileşimlerini, sistemdeki akışları, karar noktalarını ve performans ile sürdürülebilirlik gereksinimlerini kapsayan bir disiplindir.

Yazılım mimarisi, sistemin teknik vizyonunu oluşturur ve yazılım geliştirme sürecindeki teknik kararları belirler.

## Yazılım Mimarisinin Elemanları

### 1. Bileşenler (Components)

Mimarinin işlevsel birimlerini temsil eder.

- Kullanıcı Arayüzü Katmanı (UI Layer): Kullanıcı ile etkileşim sağlanan katman.
- İş Mantığı Katmanı (Business Logic Layer): Uygulamanın iş kurallarını içeren katman.
- Veri Erişim Katmanı (Data Access Layer): Veritabanı ve veri yönetimi işlemlerini gerçekleştiren katman.

### 2. Bağlantılar (Connections)

Bileşenler arasındaki etkileşim yollarıdır.

- API Çağrıları (API Calls): Sistem bileşenleri arasındaki iletişim için kullanılan arabirimler.
- Mesajlaşma Sistemleri (Messaging Systems): Bileşenler arası asenkron iletişim sağlayan sistemler.
- Veritabanı Bağlantıları (Database Connections): Veri erişimi için kullanılan bağlantılar.

### 3. Mimari Türleri (Design Patterns)

Sistemin genel tasarımını belirleyen yaklaşımlardır.

- Monolithic Mimari:  
  Tüm sistemin tek bir kod tabanı ve dağıtım biriminde bulunduğu model.

- Mikroservis Mimari:  
  Sistemin küçük, bağımsız servislerden oluştuğu model.

- MVC (Model-View-Controller):  
   Bir yazılımın 3 ayrı katman (Model, Görünüm, Kontrolcü) üzerinden yazıldığı mimari desen.

- Component-Based Architecture:  
  React, Vue, Angular gibi kütüphanelerde kullanılan, bileşen tabanlı bir mimari desen.

### 4. Kalite Nitelekleri:

Sistemde beklenen performans, ölçeklenebilirlik, güvenlik, erişlebilirlik gibi gereksinimleri ifade eder.

### 5. Kısıtlar

Teknolojik veya işlevsel kısıtlamlardır.

- Kullanılcak dil veya framework
- Bulut sağlayıcısına bağlılık (AWS,AZURE,FIREBASE)

## Doğru yazılım mimarisinin faydaları

1. Ölçeklenebilirlik: doğru mimari hem yatay (yeni sunuclar ekleme) hem de dikey(daha güçlü donanım) ölçeklenmesini kolaylaştırır.

Sunucu-1: 6.0 Ghz 30.000 Rpm Hard Disk 64 GB ECC Registered
Sunucu-2: 3.0 Ghz 15.000 Rpm Hard Disk 4 GB ECC Registered
Sunucu-3: 3.0 Ghz 15.000 Rpm Hard Disk 4 GB ECC Registered
Sunucu-4: 3.0 Ghz 15.000 Rpm Hard Disk 4 GB ECC Registered
Sunucu-5: 3.0 Ghz 15.000 Rpm Hard Disk 4 GB ECC Registered

2. Performns Artışı: İyi tasarlanmış bir mimari sistemin kaynaklarını verimli kullanmamızı sağlar.

3. Bakım ve Geliştirilebilirlik Kolaylığı

4. Ekipler Arası İş Birliği ve Verimlilik

5. Maaliyet Verimliliği

6. Yeniden Kullanılabilirlik

# S.O.L.I.D Prensipleri
