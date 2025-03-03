import { FC, useEffect, useState } from "react";
import { fetchCars } from "../../utils/service";
import { Car } from "../../types";
import Warning from "../warning";
import Card from "./card";

const List: FC = () => {
  const [cars, setCars] = useState<Car[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCars()
      .then((data) => {
        setCars(data.results);
        setTotal(data.total_count);
      })
      .catch((err) => setError(err.message));
  }, []);

  // 1) cars null ise > Henüz API'dan cevap gelmemiştir
  if (!cars) return <Warning>Yükleniyor...</Warning>;

  // 2) error dolu ise > API'dan hatalı cevap gelmiştir
  if (error) return <Warning>{error}</Warning>;

  // 3) cars boş dizi ise > Aranılan kriterde veri  yoktur
  if (cars.length < 1) return <Warning>Veri Bulunamadı</Warning>;

  // 4) cars dolu dizi ise > API'dan veriler gelmiştir
  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        {cars.map((car, i) => (
          <Card key={car.id} car={car} />
        ))}
      </section>
    </div>
  );
};

export default List;
