const Hero = () => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="container py-10 pb-16 md:pt-[100px] md:pb-[120px] grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="text-3xl md:text-4xl">COVID-19 CANLI TAKİP</h1>

          <p className="text-gray-300">
            Koronavirüs hastalığı 2019 şiddetli akut solunum sendromu koronavirüsü 2'nin neden olduğu bulaşıcı bir hastalıktır. İlk vaka ile
            Çin'in Hubei eyaletinin Wuhan şehrinde Kasım 2019 tarihinde karşılaşılmıştır.
          </p>

          <div className="flex gap-5">
            <button className="hero-btn hover:brightness-75">Nasıl Korunulur</button>
            <button className="hero-btn bg-transparent border border-white hover:bg-white hover:text-black">Doktor Bul</button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/hero.png" className="w-[300px] md:h-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
