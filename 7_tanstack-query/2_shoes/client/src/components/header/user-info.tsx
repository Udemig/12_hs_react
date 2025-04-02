import { FC, useEffect, useRef, useState } from "react";
import useUser from "../../hooks/useUser";
import { FaUserAlt as User, FaSearch as Search } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserInfo: FC = () => {
  const { user } = useUser();
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // eğer tıklanan eleman user iconu değilse modalı kapat
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // ekrandaki ger tıklama olayını izle
    document.addEventListener("click", handleClickOutside);

    // component unmount olduğunda event listener'ı kaldır
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [user]);

  return (
    <div className="flex gap-6 xl:gap-10">
      <button className="cursor-pointer md:text-xl xl:text-2xl max-md:hidden">
        <Search />
      </button>

      <button ref={dropdownRef} className="relative cursor-pointer md:text-lg">
        <User onClick={() => setIsOpen(!isOpen)} />

        {user && isOpen && (
          <div className="absolute top-10 -left-20 bg-white shadow-lg rounded-md z-[99]">
            <button className="header-button font-semibold">
              {user.firstName} {user.lastName}
            </button>
            {user.role === "admin" && (
              <Link to="/admin">
                <button className="header-button">Admin Paneli</button>
              </Link>
            )}
            <button onClick={() => logout.mutate()} className="header-button">
              Çıkış Yap
            </button>
          </div>
        )}
      </button>

      <button className="bg-my-yellow text-sm md:text-base xl:text-lg size-[20px] md:size-[24px] xl:size-[32px] rounded-full grid place-items-center">
        0
      </button>
    </div>
  );
};

export default UserInfo;
