import { FC } from "react";
import { sortOptions } from "../../utils/constants";
import { usePlaces } from "../../utils/service";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();

  // otellerin şehirlerinden oluşan benzersiz bir dizi oluştur
  const locations = [...new Set(data?.map((i) => i.location))];

  // url'e parametre ekler
  const handleChange = (name: string, value: string): void => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10">
      <div className="field">
        <label htmlFor="">Nereye Gitmek İstiyorsunuz?</label>
        <select
          className="input"
          value={searchParams.get("location") || ""}
          onChange={(e) => handleChange("location", e.target.value)}
        >
          <option value={""}>Seçiniz</option>

          {locations?.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="">Konakalama yeri adına göre ara?</label>
        <input
          type="text"
          placeholder="örn:Seaside Villa"
          className="input"
          value={searchParams.get("title") || ""}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>

      <div className="field">
        <label>Sıralama Ölçütü</label>
        <select
          className="input"
          value={searchParams.get("order") || ""}
          onChange={(e) => handleChange("order", e.target.value)}
        >
          {sortOptions.map((i) => (
            <option value={i.value}>{i.label}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="reset"
          onClick={() => setSearchParams({})}
          className="bg-blue-500 p-1 px-4 text-white rounded-md w-fit cursor-pointer"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
