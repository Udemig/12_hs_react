import { FC, FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // URL'den mevcut yıl parametresini al
  const initialYear = searchParams.get("year") || "";
  const [year, setYear] = useState<string>(initialYear);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mevcut URL parametrelerini koru
    const params = new URLSearchParams(searchParams);
    
    // Yıl değeri varsa ekle, yoksa parametreden kaldır
    if (year) {
      params.set("year", year);
    } else {
      params.delete("year");
    }
    
    // URL'yi güncelle
    navigate(`/?${params.toString()}`);
  };

  return <form onSubmit={handleSubmit} className="flex flex-col">
    <label htmlFor="year">Yıl</label>
 
    <div className="flex">
      <input 
        type="number" 
        id="year"  
        className="w-28 py-[6px] px-2 rounded-l-[4px] shadow text-black bg-white border-r border-zinc-200" 
        placeholder="örn:2023"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-white rounded-r px-3 text-blue-500 hover:bg-zinc-200 transition cursor-pointer"
      >
        🔎
      </button>
    </div>
  </form>;
};

export default Year;
