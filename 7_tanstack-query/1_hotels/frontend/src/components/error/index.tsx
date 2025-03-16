import { FC } from "react";

interface Props {
  message: string;
  onRetry: () => void;
}

const Error: FC<Props> = ({ message, onRetry }) => {
  return (
    <div className="w-full">
      <div className="mt-20 bg-red-500 text-white rounded-lg p-4 font-semibold text-center">
        <h1>Üzgünüz bir sorun oluştu</h1>
        <p>{message}</p>

        <div className="flex justify-center mt-4">
          <button
            onClick={onRetry}
            className="border rounded-lg border-zinc-100 hover:bg-zinc-200 hover:text-black transition px-4 py-1 rounded-m cursor-pointer"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
