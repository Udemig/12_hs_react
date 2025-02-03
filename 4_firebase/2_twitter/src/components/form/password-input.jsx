import { useState } from "react";
import {
  AiOutlineEye as Open,
  AiOutlineEyeInvisible as Closed,
} from "react-icons/ai";

const PasswordInput = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="mt-5">
      <label>Şifre</label>
      <div className="relative w-full">
        <input
          type={isShow ? "text" : "password"}
          name="password"
          className="input"
        />

        <span
          className="absolute end-3 top-[50%] translate-y-[-40%] text-zinc-700 text-xl cursor-pointer"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? <Closed /> : <Open />}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
