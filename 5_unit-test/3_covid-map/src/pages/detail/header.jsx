import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft as Arrow } from "react-icons/md";
import HeaderLoader from "../../components/loader/header-loader";

const Header = () => {
  const { isLoading, data } = useSelector((store) => store);

  return (
    <div className="flex justify-between items-center">
      <Link to="/" className="bg-gray-400 py-2 px-2 pe-3 rounded-md hover:bg-gray-500 flex gap-2 items-center shadow">
        <Arrow />
        Geri
      </Link>

      {isLoading ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-4">
            <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold font-sans">{data.country}</h1>

            <img
              src={data.flag.png}
              alt={data.flag.alt}
              className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] w-16 rounded"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Header;
