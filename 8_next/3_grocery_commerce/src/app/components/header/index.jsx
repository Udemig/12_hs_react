import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import SearchForm from "./search-form";

export default function Header() {
  return (
    <div className="bg-white flex justify-between items-center py-5 px-7 lg:py-6 lg:px-10 shadow-sm">
      <Link
        href="/"
        className="text-green-600 font-bold text-2xl lg:text-3xl flex items-center gap-2"
      >
        <MdOutlineLocalGroceryStore />
        <span>MANAV</span>
      </Link>

      <SearchForm />

      <div className="flex items-center gap-5">
        <Link
          href="/orders"
          className="text-lg relative text-gray-700 hover:text-green-600 transition flex items-center gap-2"
        >
          <RiFileList3Line className="text-2xl" />
          <span className="max-md:hidden">Siparişlerim</span>
        </Link>

        <Link
          href="/cart"
          className="text-lg relative text-gray-700 hover:text-green-600 transition flex items-center gap-2"
        >
          <FaShoppingCart className="text-2xl" />
          <span className="max-md:hidden">Sepetim</span>
        </Link>
      </div>
    </div>
  );
}
