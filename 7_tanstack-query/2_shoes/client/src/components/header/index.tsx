import { FC } from "react";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";

const Header: FC = () => {
  // oturumu açık olan kullanıcı verisine eriş
  const { user, isLoading, error } = useUser();
  const { logout } = useAuth();

  return (
    <div>
      <h1>Header</h1>
      <button onClick={() => logout.mutate()}>Logout</button>
    </div>
  );
};

export default Header;
