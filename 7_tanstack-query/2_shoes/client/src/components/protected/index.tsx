import { FC } from "react";
import Header from "../header";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Loader from "../loader";

interface ProtectedProps {
  allowedRoles?: string[];
}

const Protected: FC<ProtectedProps> = ({ allowedRoles }) => {
  // oturumu açık olan kullanıcı verisine eriş
  const { user, isLoading, error } = useUser();

  // kullanıcı verisi yüklenirken loader göster
  if (isLoading) return <Loader />;

  // eğer rolü yetersize login sayfasına yönlendir
  if (allowedRoles && !allowedRoles.includes(user?.role))
    return <Navigate to="/login" />;

  // kullanıcı verisi yüklendiyse sayfa içeriği göster
  if (user)
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );

  // kullanıcı verisi yüklenemediğinde logine yönlendir
  if (error) return <Navigate to="/login" />;
};

export default Protected;
