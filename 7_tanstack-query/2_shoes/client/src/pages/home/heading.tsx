import { FC } from "react";

const Heading: FC = () => {
  return (
    <div className="flex justify-between items-center my-[24px] md:mt-[36px] lg:mt-[50px] xl:mt-[90px] xl:mb-[32px]">
      <h1 className="font-semibold uppercase  leading-[96%] text-[24px] md:text-[36px] lg:text-[60px] xl:text-[74px]">
        Yeni ürünleri <br /> kaçırma
      </h1>

      <button className="bg-my-blue text-white py-[8px] px-[12px] lg:py-[12px] lg:px-[28px] rounded-[8px] hover:brightness-90 transition cursor-pointer">
        Alışverişe Başla
      </button>
    </div>
  );
};

export default Heading;
