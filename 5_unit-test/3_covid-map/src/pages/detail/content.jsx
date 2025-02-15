import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "../../components/loader/content-loader";
import Error from "../../components/error";
import Card from "./card";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Content = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  // store'a abone ol
  const { isLoading, error, data } = useSelector((store) => store);

  // data nesnesini diziye çevirdik
  const arr = Object.entries(data || {}).filter(([key]) => key !== "flag");

  // api isteğini atmaya yarayan aksiyonu tetikler
  const refetch = () => dispatch(getDetails(country));

  return (
    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} refetch={refetch} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />) //
      )}
    </div>
  );
};

export default Content;
