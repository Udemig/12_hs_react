import { CiSearch } from "react-icons/ci";

export default function SearchForm() {
  return (
    <form className="flex gap-2 py-2 px-4 rounded-full border border-zinc-300 md:w-1/2">
      <button className={`text-xl text-zinc-700`}>
        <CiSearch />
      </button>

      <input
        type="text"
        placeholder="Bir ürün veya kategori arayın"
        className="outline-none text-zinc-800 w-full"
      />
    </form>
  );
}
