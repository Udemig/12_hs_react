import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const RoomPage = ({ setRoom }) => {
  // form göndeirlince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki girdiyi al
    const room = e.target[0].value.toLowerCase();

    // oda state'ini güncelle
    setRoom(room);
  };

  // çıkış yap
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="wrapper">
      <form
        onSubmit={handleSubmit}
        className="box rounded-[10px] flex flex-col gap-10 text-center"
      >
        <h1 className="text-4xl">Chat Odası</h1>
        <p className="text-gray-400">Hangi odaya giriceksiniz?</p>

        <input
          type="text"
          placeholder="ör: haftasonu"
          required
          className="border border-gray-300 rounded-md shadow-lg p-2 px-4"
        />

        <button
          type="submit"
          className="bg-zinc-700 border border-gray-300 rounded-md p-2 text-white hover:bg-zinc-800 transition cursor-pointer"
        >
          Odaya Gir
        </button>

        <button
          type="button"
          onClick={handleLogout}
          className="bg-red-500 border border-gray-300 rounded-md p-2 text-white hover:bg-red-600 transition cursor-pointer"
        >
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default RoomPage;
