import { auth } from "../firebase";

const Header = ({ room, setRoom }) => {
  return (
    <header className="flex justify-between items-center p-5 border border-gray-200 shadow-lg">
      <p>{auth.currentUser.displayName}</p>

      <p className="font-semibold">{room}</p>

      <button onClick={() => setRoom(null)} className="btn">
        Farklı Oda
      </button>
    </header>
  );
};

export default Header;
