import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginPage = () => {
  // Google ile giriş
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res.user))
      .catch((err) => console.log("Giriş yaparken hata!", err));
  };

  return (
    <div className="wrapper">
      <div className="box h-[450px] flex flex-col justify-center items-center gap-[50px]">
        <h1 className="text-4xl">Chat Odası</h1>
        <p className="text-gray-400">Devam Etmek İçin Giriş Yapın</p>

        <button
          className="flex gap-7 items-center  p-2 px-4 rounded-md shadow-lg border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
          onClick={handleLogin}
        >
          <img src="/google.png" alt="google" className="w-[30px]" />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
