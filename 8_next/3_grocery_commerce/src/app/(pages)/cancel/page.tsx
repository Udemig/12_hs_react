import Link from "next/link";
import { IoIosCloseCircle as Close } from "react-icons/io";

export default function Cancel() {
  return (
    <div className="h-[80vh]">
      <div className="h-[50%] bg-red-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <Close className="text-[70px]" />

          <p className="font-semibold text-4xl text-center">
            Ödeme Başarısız Oldu
          </p>
        </div>
      </div>

      <div className="h-[50%] p-10 mt-5 text-center text-black">
        <p className="text-lg">Ödeme işlemi sırasında bir hata oluştu.</p>

        <p className="mt-5 mb-10 text-zinc-800">
          Lütfen daha sonra tekrar deneyiniz.
        </p>

        <Link
          href="/"
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg"
        >
          Anasayfa
        </Link>
      </div>
    </div>
  );
}
