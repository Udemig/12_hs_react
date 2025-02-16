const HeroBrand = () => {
  return (
    <div className="max-w-[660px] flex flex-col gap-[25px]">
      <h1 className="fs-1 font-semibold">Kardutlu Dondurma</h1>

      <p>
        Karadutlu Dondurma, doğanın en taze lezzetlerinden ilham alarak üretilen eşsiz bir tatlı deneyimi sunar. Özenle
        seçilmiş karadutlar, yoğun ve ferahlatıcı aromasıyla her lokmada doğal bir serinlik hissi yaratır.
      </p>

      <div className="flex gap-[40px]">
        <button className="hero-btn">Sipariş Et</button>
        <button className="hero-btn bg-white/15 border-0">Rezarvsayon</button>
      </div>
    </div>
  );
};

export default HeroBrand;
