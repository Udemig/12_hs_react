import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const Header: FC = () => {
  return (
    <header className="w-full z-10">
      <div className="max-width flex justify-between items-center padding-x py-4">
        <Link to="/">
          <img src="/bmw.png" alt="bmw logo" width={50} height={50} />
        </Link>

        <Button text="Kaydol" designs="min-w-[130px]" />
      </div>
    </header>
  );
};

export default Header;
