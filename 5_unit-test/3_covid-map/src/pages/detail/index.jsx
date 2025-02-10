import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
  const { country } = useParams();

  useEffect(() => {
    dispatch(getDetails(country));
  }, [country]);

  return <div>Detail</div>;
};

export default Detail;
