"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="size-full grid place-items-center">
      <h1 className="text-2xl font-semibold">Hat Oluştu !!</h1>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
