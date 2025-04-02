import { FC } from "react";
import { useParams } from "react-router-dom";
import useShoes from "../../hooks/useShoes";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Images from "./images";
import Head from "./head";
import Color from "./color";
import Foot from "./foot";
import Size from "./size";

const Detail: FC = () => {
  const { id } = useParams();
  const { shoe } = useShoes();
  const { isLoading, error, data } = shoe(id as string);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} />;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
      <div className="xl:col-span-2">
        <Images pictures={data?.picture!} />
      </div>

      <div className="flex flex-col gap-8">
        <Head item={data!} />
        <Color colors={data?.color!} />
        <Size sizes={data?.size!} />
        <Foot description={data?.description!} />
      </div>
    </div>
  );
};

export default Detail;
