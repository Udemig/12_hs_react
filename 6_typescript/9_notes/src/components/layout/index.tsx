import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";

const Layout: FC = () => {
  // store'a abone ol
  const { notes } = useSelector((store: RootState) => store.notes);

  // url'den id paramtresini al
  const { id } = useParams();

  // id'ye göre notu note'ların içinden bul
  const note = notes.find((note) => note.id === id);

  // not bulunamazsa anasayfaya yönlendir
  if (!note) {
    return <Navigate to="/" />;
  }

  // not bulunursa layout elementine prop olarak note'u gönder
  return <Outlet context={note} />;
};

export default Layout;
