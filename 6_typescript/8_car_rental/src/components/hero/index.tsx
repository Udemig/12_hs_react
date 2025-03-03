import { FC } from "react";
import Button from "../button";
import { motion } from "motion/react";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="pt-14 padding-x flex-1 mah-[920px]">
        <h1 className="hero-title">Özgürlüğü Hisset, Yolculuğa Başla</h1>

        <p className="hero-subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç kiralama deneyimini Altın Seçenekleri ile
          taçlandırarak her anını özel kılabilirsin.
        </p>

        <Button text="Arabaları Keşfet" designs="mt-10" />
      </div>

      <div className="flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          animate={{ translateX: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/hero.png"
          alt="gri renkte bmw araba"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
