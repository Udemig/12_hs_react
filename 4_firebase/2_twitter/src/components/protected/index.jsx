// Outlet
// Kapsayıcı route içierisnde alt route'un elementini ekrana basar

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import PageLoader from "../loader/page-loader";

const Protected = () => {
  // oturumu açık olan kullanıncın state'i
  const [user, setUser] = useState(undefined);

  // kullanıcının oturum verilerini al
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));

    return () => unsub();
  }, []);

  // oturum verileri gelene kadar yükleniyor bas
  if (user === undefined) return <PageLoader />;

  //kullanıcının oturumu kapalı veya epostası doğrulanmamışsa
  if (user === null || user?.emailVerified === false) {
    // email doğrulanmamışsa bildirim gönder
    if (user?.emailVerified === false) toast.info("Mailinizi doğrulayın");
    // logine yönlendir
    return <Navigate to="/" replace />;
  }

  // oturumu açık ve epostası doğrulandıysa sayfayı ekrana bas
  return <Outlet context={user} />;
};

export default Protected;
