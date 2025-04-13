// Server Component
// Server componentlarında kullanıc etkileşimleri İZLENEMEZ.
// Server componentlarında react hooks KULLANILAMAZ.
// Eğer bir server component içerisinde client component'un yapabilceği bir işe ihtiyacımız varsa, bu işlemi ayrıca bir client component oluşturarak ve onu server comp içerisidne kullanarak yaparız.

import Button from "@/app/components/button";

export default function Hakkimizda() {
  console.log("Hakkımızda Component'ı renderlandı");

  return (
    <div className="server-component min-h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-10">Hakkımızda Sayfası</h1>

        <span className="server">Server Component (SSR)</span>
      </div>

      <div>
        <Button name="Hakkımızda" />
      </div>
    </div>
  );
}
