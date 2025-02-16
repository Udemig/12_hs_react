const CartButton = () => {
  return (
    <div className="sticky top-4 left-1 z-[999] mt-10 -mb-10 w-fit">
      <button className="list-btn">
        Sepet
        <img src="/cart.png" alt="cart" className="w-12 absolute right-1 bottom-0" />
      </button>
    </div>
  );
};

export default CartButton;
