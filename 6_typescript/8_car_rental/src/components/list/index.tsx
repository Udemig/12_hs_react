import { FC, useEffect, useState } from "react";
import { fetchCars } from "../../utils/service";
import { Car } from "../../types";
import Warning from "../warning";
import Card from "./card";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const List: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState<Car[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Url'den parametreleri al
  const make = searchParams.get("make") || "";
  const model = searchParams.get("model") || "";
  const year = searchParams.get("year") || "";
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    // State'leri sıfırla
    setIsLoading(true);
    setError(null);

    fetchCars(make, model, year, page)
      .then((data) => {
        setCars(data.results);
        setTotal(data.total_count);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [make, model, year, page]); // Parametreler değiştiğinde yeniden fetch et

  // 1) isLoading is true > API'dan veriler yükleniyor
  if (isLoading) return <Warning>Yükleniyor...</Warning>;

  // 2) error dolu ise > API'dan hatalı cevap gelmiştir
  if (error) return <Warning>{error}</Warning>;

  // 3) cars boş dizi ise > Aranılan kriterde veri yoktur
  if (!cars || cars.length < 1) return <Warning>Veri Bulunamadı</Warning>;

  // 4) cars dolu dizi ise > API'dan veriler gelmiştir
  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </section>

      {total && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          initialPage={(parseInt(page) || 1) - 1}
          onPageChange={(e) => {
            searchParams.set("page", (e.selected + 1).toString());
            setSearchParams(searchParams);
          }}
          pageCount={Math.ceil(total / 10)}
          pageRangeDisplayed={5}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
        />
      )}
    </div>
  );
};

export default List;
