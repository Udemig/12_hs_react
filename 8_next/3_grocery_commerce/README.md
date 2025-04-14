Next.js’te **parallel routes (paralel rotalar)**, bir sayfanın farklı bölümlerini bağımsız olarak yönetmek istediğinde çok kullanışlı olur. Özellikle aynı sayfa içinde birden fazla “alt içerik” alanını senkronize etmeden göstermek gerektiğinde devreye girer.

### 👇 Ne zaman kullanılır?

- Bir sayfa içinde birden fazla **bağımsız alan** varsa, her biri farklı rotalarla yönetiliyorsa.
- Modal, tab, dashboard gibi farklı içeriklerin aynı anda render edilmesi ama birbirlerinden bağımsız olması gerekiyorsa.
- Her alan kendi URL state’ini koruyacaksa.

---

## ✅ Örnek Senaryo: Dashboard Sayfası

Bir admin paneli düşün:

```
/dashboard
```

Bu sayfa üç ana bölüme sahip:

1. 👤 `UserList` (sol kısımda kullanıcılar listesi)
2. 📝 `UserDetail` (orta kısımda seçili kullanıcının detayları)
3. 📈 `UserActivity` (sağ kısımda kullanıcının aktivite grafiği)

Bu üç alanın da **bağımsız** olarak çalışması gerekiyor:

- Kullanıcı seçtiğinde sadece orta kısım değişsin.
- Sağdaki aktivite detayları kendi içinde bir rota ve state yönetsin.
- Belki modal açıldığında sadece bir outlet üzerinde modal gösterilsin.

### 📂 Parallel Route ile Yapısı

```bash
/app
  /dashboard
    @users/page.tsx          → Sol panel (UserList)
    @details/[id]/page.tsx   → Orta panel (UserDetail)
    @activity/[id]/page.tsx  → Sağ panel (UserActivity)
    layout.tsx               → Bu üç alanı birlikte yerleştirir
```

```tsx
// /app/dashboard/layout.tsx

export default function DashboardLayout({ users, details, activity }) {
  return (
    <div className="dashboard">
      <aside>{users}</aside>
      <main>{details}</main>
      <section>{activity}</section>
    </div>
  );
}
```

Şimdi URL şöyle olabilir:

```
/dashboard
/dashboard/details/123
/dashboard/activity/123
```

Bu yapı sayesinde:

- Her panel bağımsız yüklenir.
- `@details` veya `@activity` rotaları değişince sadece o kısım render edilir.
- Kullanıcı deneyimi hızlı, modüler ve yönetilebilir olur.

---

## 💡 Başka Örnekler

- E-ticaret ürünü detay sayfası: Sol kısımda galeri, sağ kısımda ürün açıklaması, altta önerilen ürünler.
- Messaging app: Sol panelde sohbet listesi, ortada seçili sohbet, sağda kişi detayları.
- Modal routing: Sayfanın altında ana içerik devam ederken modal açılır, modal kendi rotasında çalışır.

---
