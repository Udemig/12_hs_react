"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="grid place-items-center h-[70vh]">
      <div className="w-[70%] max-w-[500px]">
        <div className="bg-red-500  text-white p-5 rounded-lg text-center text-lg">
          <h1 className="font-semibold">Bir hata oluştu</h1>
          <p>{error.message}</p>
        </div>

        <div className="flex justify-center mt-5 text-black">
          <button
            onClick={() => reset()}
            className="border border-zinc-700 rounded-md px-4 py-2 hover:bg-zinc-200 transition cursor-pointer"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    </div>
  );
}
