import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const AmountPicker = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex border rounded-md">
      <button
        onClick={() => dispatch(deleteFromCart(item))}
        className="px-3 py-1 border-r hover:bg-zinc-300/30 transition"
      >
        -
      </button>

      <span className="w-8 text-center py-1">{item.amount}</span>

      <button
        onClick={() => dispatch(addToCart({ item, selectedType: item.type }))}
        className="px-3 py-1 border-l hover:bg-zinc-300/30 transition"
      >
        +
      </button>
    </div>
  );
};

export default AmountPicker;
