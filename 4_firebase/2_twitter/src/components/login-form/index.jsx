import EmailInput from "./email-input";
import PasswordInput from "./password-input";
import ForgotPassword from "./forgot-password";
import AuthToggle from "./auth-toggle";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  // kaydolma modunda mıyız?
  const [isSignUp, setIsSignUp] = useState(false);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      if (isSignUp) {
        // kaydolma modundaysak: hesap oluştur
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // mail doğrulama epostası gönder
        await sendEmailVerification(res.user);

        // bildirim gönder
        toast.info("Mailinize doğrulama epostası gönderildi");

        // giriş yapma moduna geç
        setIsSignUp(false);
      } else {
        // giriş modundaysak: oturum aç
        const res = await signInWithEmailAndPassword(auth, email, password);

        // mailini doğrulamamış ise bildiirm gönder
        if (!res.user.emailVerified) {
          return toast.info("Lütfen mailinizi doğrulayın");
        }

        // mailini doğrulamış ise anasayfaya yönlendir ve bildirim
        navigate("/feed");
        toast.success("Oturumunuz açıldı");
      }

      // formu temizle
      e.target.reset();
    } catch (error) {
      // hatayı bildirim olarak gönder
      toast.error("Hata: " + error.code);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <EmailInput />

      <PasswordInput />

      {!isSignUp ? <ForgotPassword /> : <div className="h-[28px] w-1" />}

      <button
        type="submit"
        className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300 cursor-pointer"
      >
        {isSignUp ? "Kaydol" : "Giriş Yap"}
      </button>

      <AuthToggle isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
    </form>
  );
};

export default Form;
