"use client";
import { useParams } from "next/navigation";
import { data } from "../../../../../constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Modal = () => {
  const { id } = useParams();
  const router = useRouter();

  const wonder = data.find((item) => item.id === id);

  const close = () => {
    router.back();
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="w-4/5 md:w-2/3 h-4/5 bg-white rounded-md mx-auto px-10 pb-10 text-xl flex flex-col gap-5 text-black text-center overflow-auto">
        <div className="flex justify-between mt-3">
          <button onClick={close}>X</button>
          <button onClick={refresh}>?</button>
        </div>

        <h1 className="text-2xl">{wonder.name}</h1>

        <Image
          src={wonder.src}
          alt={wonder.name}
          className="w-full max-h-[300px] aspect-square object-cover rounded-md"
        />

        <p>{wonder.photographer}</p>
        <p>{wonder.location}</p>
      </div>
    </div>
  );
};

export default Modal;
