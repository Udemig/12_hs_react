// @ts-check
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// MongoDB bağlantı bilgisi
const MONGODB_URI =
  "mongodb+srv://admin:admin@notour.ihasugb.mongodb.net/CarDB";

// Grocery şeması
const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "isim değeri zorunludur"],
  },
  category: {
    type: String,
    required: [true, "kategori değeri zorunludur"],
  },
  price: {
    type: Number,
    required: [true, "fiyat değeri zorunludur"],
  },
  unit: {
    type: String,
    required: [true, "birim değeri zorunludur"],
  },
  stock: {
    type: Number,
    required: [true, "stok değeri zorunludur"],
  },
  origin: {
    type: String,
    required: [true, "menşei değeri zorunludur"],
  },
  isOrganic: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: [true, "açıklama değeri zorunludur"],
    maxLength: [300, "açıklama 300 karakterden uzun olamaz"],
  },
  nutritionalValue: {
    type: String,
    required: [true, "besin değeri zorunludur"],
  },
  expiryDays: {
    type: Number,
    required: [true, "raf ömrü değeri zorunludur"],
  },
  photo: {
    type: String,
    default: "https://i.ibb.co/4rMCygc/default.png",
  },
});

// Grocery modelini oluştur
const Grocery =
  mongoose.models.Grocery || mongoose.model("Grocery", grocerySchema);

// Veri setini oku
const groceryData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "GroceryTestData.json"), "utf-8")
);

// Veritabanına bağlan ve veriyi ekle
async function seedGroceries() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB bağlantısı başarılı");

    // Önce koleksiyonu temizle
    await Grocery.deleteMany({});
    console.log("Grocery koleksiyonu temizlendi");

    // Örnek veriyi ekle
    const result = await Grocery.insertMany(groceryData);
    console.log(`${result.length} manav ürünü başarıyla eklendi`);

    // Her ürünün kimliğini görüntüle
    result.forEach((item) => {
      console.log(`${item.name}: ${item._id}`);
    });

    return result;
  } catch (error) {
    console.error("Hata:", error);
  } finally {
    // Bağlantıyı kapat
    await mongoose.disconnect();
    console.log("MongoDB bağlantısı kapatıldı");
  }
}

// Seed işlemini çalıştır
seedGroceries()
  .then(() => console.log("Seed işlemi tamamlandı"))
  .catch((err) => console.error("Seed işleminde hata:", err));
