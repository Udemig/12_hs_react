import { FC } from "react";
import Form from "../../components/form";
import { ShoeFormValues } from "../../types";
import useShoes from "../../hooks/useShoes";

const Create: FC = () => {
  const { create } = useShoes();

  const onSubmit = (value: ShoeFormValues) => {
    create.mutate(value);
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Ürün Ekle</h1>

      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Create;
