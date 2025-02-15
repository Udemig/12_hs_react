import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import Header from "./header";
import Content from "./content";

const Detail = () => {
  const dispatch = useDispatch();
  const { country } = useParams();

  useEffect(() => {
    dispatch(getDetails(country));
  }, [country]);

  return (
    <div className="flex-1  text-white grid place-items-center p-6">
      <div className="bg-white border shadow-2xl min-h-[80%] py-6 px-8 rounded-lg max-w-4xl max-md:w-full md:w-[80%]">
        <Header />

        <Content />
      </div>
    </div>
  );
};

export default Detail;
