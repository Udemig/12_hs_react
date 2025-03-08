# 🚗 Araç Kataloğu

Modern bir arayüzle araç veritabanını filtreleyip keşfedebileceğiniz React ve TypeScript tabanlı bir web uygulaması.

## ✨ Özellikler

- Araçları marka, model ve yıla göre filtreleme
- Gerçek zamanlı arama sonuçları
- Otomatik tamamlamalı marka seçimi
- Sayfalama desteği
- Responsive tasarım
- URL tabanlı filtreler (bookmark & paylaşım desteği)
- Detaylı araç bilgisi görüntüleme

## 🛠️ Teknolojiler

- **Frontend Framework:** [React](https://reactjs.org/)
- **Programlama Dili:** [TypeScript](https://www.typescriptlang.org/)
- **Stil Kütüphanesi:** [Tailwind CSS](https://tailwindcss.com/)
- **Paketleyici:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **UI Bileşenleri:**
  - [React Select](https://react-select.com/) - Gelişmiş dropdown menüler
  - [React Paginate](https://www.npmjs.com/package/react-paginate) - Sayfalama bileşeni

## 🚀 Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# Repoyu klonlayın
git clone <repo-url>

# Proje dizinine gidin
cd car-rental

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak http://localhost:5173 adresinde çalışacaktır.

## 💡 Kullanım

1. Ana sayfadaki arama barını kullanarak araçları filtreleyebilirsiniz:

   - Marka seçin (dropdown menüden)
   - Model yazın (metin alanına)
   - Yıl seçin (sayı alanına)

2. Arama sonuçları filtrelere göre gerçek zamanlı olarak güncellenecektir

3. Sonuçlar arasında gezinmek için sayfalama kontrollerini kullanabilirsiniz

## 📚 API Kaynakları

- **Araç Verileri:**

  - [Open Data Soft API](https://public.opendatasoft.com/explore/dataset/all-vehicles-model/api/?sort=scharger)
  - Endpoint: `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records`

- **Araç Görselleri:**
  - [Imagin Studio API](https://docs.imagin.studio/guides/getting-images/embedding-in-your-website)
  - Örnek: `https://cdn.imagin.studio/getImage?customer=hrjavascript-mastery&make=BMW&modelFamily=m4`

## 🧠 Geliştirme Araçları

- **[Cursor AI](https://cursor.sh/)** - Yapay zeka destekli kod editörü
  - Otomatik kod tamamlama
  - Akıllı kod önerileri
  - Entegre AI chatbot desteği
  - Composer ile kod yazma

## 📝 Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.
