const Selector = ({ selectedType, handleType }) => {
  return (
    <div>
      <p className="mt-5">Sipariş Tipi</p>

      <div className="flex mt-3 gap-5">
        <button
          onClick={() => handleType("cornet")}
          className={`select-btn ${selectedType === "cornet" && "bg-white text-black"}`}
        >
          Külahta
        </button>

        <button
          onClick={() => handleType("cup")}
          className={`select-btn ${selectedType === "cup" && "bg-white text-black"}`}
        >
          Bardakta
        </button>
      </div>
    </div>
  );
};

export default Selector;
