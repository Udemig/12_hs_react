import { FaStar as Star } from "react-icons/fa";

const HeroCard = () => {
  return (
    <div>
      {/* kart */}
      <div className="flex gap-[23px]">
        <div className="bg-white p-[30px_25px_40px_30px] rounded-2xl text-black">
          <div className="flex gap-[20px]">
            <img src="/profile.png" />
            <div>
              <h3 className="text-[24px] font-semibold">Cihan</h3>
              <div className="flex gap-1 text-yellow-500">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>

          <p className="mt-[15px] lg:max-w-[300px]">
            Karşı konulmaz dondurma lezzetlerimizle donmuş mutluluğun tadını çıkarın!
          </p>
        </div>

        <img src="/dots.svg" />
      </div>

      {/* butonlar */}
      <div className="mt-[40px] lg:mt-[83px]">
        <h3 className="fs-5 mb-[15px] font-medium">Kategori Seçiniz</h3>

        <div className="flex gap-[40px]">
          <button className="card-btn">
            <img src="/icon-3.svg" />
          </button>

          <button className="card-btn">
            <img src="/icon-2.svg" />
          </button>

          <button className="card-btn">
            <img src="/icon-1.svg" />
          </button>

          <button className="card-btn">
            <img src="/icon-4.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
