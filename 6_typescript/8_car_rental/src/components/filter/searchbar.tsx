import { FC, FormEvent, useState } from "react";
import ReactSelect from "react-select";
import { makes } from "../../utils/constants";
import { useNavigate, useSearchParams } from "react-router-dom";

type SelectOption = {
  label: string;
  value: string;
};

const Searchbar: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get initial values from URL params if they exist
  const initialMake = searchParams.get("make") || "";
  const initialModel = searchParams.get("model") || "";

  const [selectedMake, setSelectedMake] = useState<SelectOption | null>(
    initialMake ? { label: initialMake, value: initialMake } : null
  );
  const [model, setModel] = useState<string>(initialModel);

  // makes array'ini map'le dönüp string'leri object'lere çevir
  const options = makes.map((make) => ({
    label: make,
    value: make,
  }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mevcut URL parametrelerini koru
    const params = new URLSearchParams(searchParams);

    // Make ve model parametrelerini güncelle
    if (selectedMake?.value) {
      params.set("make", selectedMake.value);
    } else {
      params.delete("make");
    }

    if (model) {
      params.set("model", model);
    } else {
      params.delete("model");
    }

    params.set("page", "1");

    // URL'yi güncelle
    navigate(`/?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="searchbar flex gap-3 items-center justify-center"
    >
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col">
          <label htmlFor="make">Marka</label>
          <ReactSelect
            className="w-full text-black"
            options={options}
            placeholder="Marka seçiniz"
            value={selectedMake}
            onChange={(option) =>
              setSelectedMake(option as SelectOption | null)
            }
            inputId="make"
            classNamePrefix="select"
          />
        </div>

        <button type="submit" className="ml-3 sm:hidden cursor-pointer">
          <img src="/search.svg" alt="search" className="size-[40px]" />
        </button>
      </div>

      <div className="searchbar-item flex flex-col !items-start">
        <label htmlFor="model">Model</label>

        <div className="w-full flex">
          <div className="absolute ml-3 mt-1">
            <img src="/model-icon.png" alt="model" className="size-[25px]" />
          </div>

          <input
            type="text"
            id="model"
            className="searchbar-input rounded text-black bg-white"
            placeholder="Model yazınız..."
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <button type="submit" className="ml-3 cursor-pointer">
            <img src="/search.svg" alt="search" className="size-[40px]" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
