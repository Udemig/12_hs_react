"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col gap-4">
        <div className="text-red-500 text-2xl font-bold text-center">
          <h1>Bir hata oluştu</h1>
          <p>{error.message}</p>
        </div>

        <button
          onClick={reset}
          className="border py-1 px-4 rounded-md hover:bg-zinc-200 cursor-pointer transition-colors"
        >
          Tekrar dene
        </button>
      </div>
    </div>
  );
}
