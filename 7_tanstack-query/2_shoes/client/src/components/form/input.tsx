import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface Props {
  label: string;
  name: string;
  type: string;
}

const Input: FC<Props> = ({ label, name, type }) => {
  return (
    <div
      className={`relative ${
        type === "checkbox" ? "flex items-center gap-2" : ""
      }`}
    >
      <label
        htmlFor={name}
        className="block text-sm/6 font-semibold text-gray-900"
      >
        {label}
      </label>
      <div className={type !== "checkbox" ? "mt-2" : ""}>
        <Field
          id={name}
          name={name}
          type={type}
          autoComplete={name}
          as={type === "textarea" ? "textarea" : "input"}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />

        <ErrorMessage
          name={name}
          component="div"
          className="text-sm text-red-500 absolute bottom-[-22px]"
        />
      </div>
    </div>
  );
};

export default Input;
