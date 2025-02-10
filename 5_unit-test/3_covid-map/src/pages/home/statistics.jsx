import millify from "millify";
import Item from "./item";
import { useEffect, useState } from "react";
import { totalApi } from "../../utils/api";
import Loader from "../../components/loader";

const Statistics = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    totalApi
      .get("/total", { params: { date: "2023-01-01" } })
      .then((res) => setData(res.data.data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container py-0">
      <div className="bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 gap-5 mt-[-34px] md:mt-[-48px]">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <p>Üzgünüz bir sorun oluştu</p>
        ) : (
          data && (
            <>
              <Item color="text-pink-500" text="Toplam Vaka" value={millify(data.confirmed)} />

              <Item color="text-green-500" text="Aktif Vaka" value={millify(data.active)} />

              <Item color="text-gray-500" text="Toplam Vefat" value={millify(data.deaths)} />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Statistics;
