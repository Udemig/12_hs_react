"use client";

// Error component'lar "use client" ile işaretlenmelidir
// Error componnetları bir sayfada hata olduğunda  ototmatik olarak ekrana basılır
// Error component'ları hata mesajını ve isteği tekrar atmaya yarayan fonksiyonu prop olarak alır

export default function Error({ error, reset }) {
  return (
    <div className="page">
      <h1>Hata!</h1>

      <p>{error.message}</p>

      <button onClick={() => reset()}>Tekrar Dene</button>
    </div>
  );
}
