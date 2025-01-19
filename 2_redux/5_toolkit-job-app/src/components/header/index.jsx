import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h2>Başvuru Takip</h2>
      </div>

      <nav>
        <NavLink to="/">Başvurular</NavLink>

        <NavLink to="/job/create">Yeni Başvuru</NavLink>
      </nav>
    </header>
  );
};

export default Header;
