import { FC } from "react";
import { FaHeart } from "react-icons/fa";
import DOMPurify from "dompurify";

interface Props {
  description: string;
}

const Foot: FC<Props> = ({ description }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="flex-1 bg-black p-4 rounded-lg cursor-pointer hover:brightness-90 transition">
            Sepete Ekle
          </button>
          <button className="bg-black p-4 rounded-lg cursor-pointer hover:brightness-90 transition">
            <FaHeart />
          </button>
        </div>

        <button className="bg-my-blue p-4 rounded-lg cursor-pointer hover:brightness-90 transition">
          Hemen Satın Al
        </button>
      </div>

      <div>
        <h2 className="font-semibold mt-8 mb-2 text-[24px] text-grey-dark">
          Bu ürün hakkında
        </h2>

        <p
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></p>
      </div>
    </div>
  );
};

export default Foot;

/*
 Backend'den gelen html kodunu ekrana basarken 
 XSS saldırılaarından (html kodunun içerisine script kodu saklanması) korunmak için
 DOMPurify kütüphanesi kullanlıp gelen html kodunu strerileze eder ve html'i bu şekillde kullanırız.
 */
