const Error = ({ info, refetch }) => {
  return (
    <div data-testid="error" className="col-span-3 my-20 flex flex-col justify-center text-center gap-10">
      <div className="bg-red-400 p-5 rounded-md">
        <p>Üzgünüz bir sorun oluştu</p>
        <p>{info}</p>
      </div>

      <button className="border shadow mt-10 text-black p-2" onClick={refetch}>
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
