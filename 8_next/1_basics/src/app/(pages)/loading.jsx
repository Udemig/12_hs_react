// Asenkron componentlar api isteği attıklarında api'dan cevap gelene kadar otomatik olarak ekrana bu componenti basılır

export default function Loading() {
  return (
    <div className="page">
      <h1>Yükleniyor...</h1>
    </div>
  );
}
