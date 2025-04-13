"use client";

export default function Button({ name }) {
  return (
    <div className="client-component">
      <button onClick={() => alert("Selam " + name)}>Tıkla</button>
      <span className="client">Client Component</span>
    </div>
  );
}
