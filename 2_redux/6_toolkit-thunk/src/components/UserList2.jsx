import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions";

export const UserList2 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div>UserList2</div>;
};
