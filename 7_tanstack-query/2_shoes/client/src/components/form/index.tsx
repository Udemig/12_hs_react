import { Field, Formik, Form as FormikForm } from "formik";
import { FC } from "react";
import { Shoe, ShoeFormValues } from "../../types";
import Input from "./input";

interface Props {
  onSubmit: (value: ShoeFormValues) => void;
  data?: Shoe;
}

const Form: FC<Props> = ({ onSubmit, data }) => {
  const initialValues = {
    name: data?.name || "",
    price: String(data?.price) || "",
    discount: String(data?.discount) || "",
    color: data?.color || "",
    size: data?.size || "",
    description: data?.description || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "",
  };

  const handleSubmit = (value: ShoeFormValues) => {
    onSubmit(value);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm className="flex flex-col gap-5">
        <Input label="İsim" name="name" type="text" />
        <Input label="Fiyat" name="price" type="number" />
        <Input label="İndirim" name="discount" type="number" />
        <Input label="Renk" name="color" type="text" />
        <Input label="Beden" name="size" type="text" />
        <Input label="Açıklama" name="description" type="textarea" />
        <Input label="Yeni" name="isNew" type="checkbox" />

        <div className="flex items-center gap-2">
          <Field type="radio" name="gender" id="men" value="men" />
          <label htmlFor="men">Erkek</label>
          <Field type="radio" name="gender" id="women" value="women" />
          <label htmlFor="women">Kadın</label>
        </div>

        <button
          type="submit"
          className="bg-my-blue py-1 px-4 rounded-md text-white transition hover:bg-my-blue/80 cursor-pointer"
        >
          Gönder
        </button>
      </FormikForm>
    </Formik>
  );
};

export default Form;
