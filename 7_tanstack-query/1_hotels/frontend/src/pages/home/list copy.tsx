import { FC, useEffect, useState } from "react";
import api from "../../utils/api";
import { Place, PlacesResponse } from "../../types";

const List: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Place[]>([]);

  useEffect(() => {
    setIsLoading(true);

    api
      .get<PlacesResponse>("/places")
      .then((res) => setData(res.data.places))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  console.log(isLoading, error, data);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      {data.map((place) => (
        <div key={place.id}>{place.name}</div>
      ))}
    </div>
  );
};

export default List;
