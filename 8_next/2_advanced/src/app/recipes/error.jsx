"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h1>Error</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
