import { useState } from "react";
import Selector from "./selector";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Card = ({ item }) => {
  const [selectedType, setSelectedType] = useState(null);
  const dispatch = useDispatch();

  const handleType = (type) => {
    setSelectedType(type === selectedType ? null : type);
  };

  const handleBasket = () => {
    // store'a haber ver
    dispatch(addToCart({ item, selectedType }));

    // seçeneği temizle
    setSelectedType(null);
  };

  return (
    <div className="bg-black/20 border border-white/50 rounded-[24px] pl-[10px] pr-[20px] py-[30px] flex gap-[15px] lg:gap-[30px]">
      <div className="flex items-center">
        <img src={item.image} className="w-[100px] md:w-[150px] drop-shadow-2xl" />
      </div>

      <div className="flex-1">
        <h2 className="text-[24px] font-medium">{item.name}</h2>

        <Selector selectedType={selectedType} handleType={handleType} />

        <div className="mt-5 flex justify-between">
          <p>₺{item.price} / top</p>

          <button
            onClick={handleBasket}
            className={`border py-1 px-3 rounded-md hover:bg-white/30 transition ${!selectedType && "invisible"}`}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
