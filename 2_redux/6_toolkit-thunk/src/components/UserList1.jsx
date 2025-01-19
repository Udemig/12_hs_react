import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setError, setLoading, setUsers } from "../redux/slices/classicSlice";

const UserList1 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    axios
      .get("https://dummyjson.com/users")
      .then((res) => dispatch(setUsers(res.data.users)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Yükleniyor..</p>
      ) : error ? (
        <p>Hata Oldu!</p>
      ) : (
        users.map((user) => (
          <>
            <div>
              <img src={user.image} width={60} />
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
            </div>

            <hr />
          </>
        ))
      )}
    </div>
  );
};

export default UserList1;
