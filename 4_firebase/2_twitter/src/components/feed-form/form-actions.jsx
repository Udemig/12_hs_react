import { CiImageOn as Image } from "react-icons/ci";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Smile } from "react-icons/fa";

const FormActions = ({ isLoading, fileInputRef, onImageChange }) => {
  return (
    <div className="flex justify-between">
      <div className="text-tw-blue text-xl flex gap-4">
        <label htmlFor="image" type="button" className="form-icon">
          <input
            id="image"
            name="image"
            type="file"
            className="hidden"
            onChange={onImageChange}
            ref={fileInputRef}
          />
          <Image />
        </label>

        <button type="button" className="form-icon">
          <Gif />
        </button>
        <button type="button" className="form-icon">
          <Smile />
        </button>
      </div>

      {/* todo yükleniyor'u component yap */}
      <button
        disabled={isLoading}
        type="submit"
        className="bg-secondary font-bold px-5 py-[6px] rounded-full text-primary tracking-wide hover:brightness-70 min-w-[100px] transition cursor-pointer"
      >
        {isLoading ? "Yükleniyor" : "  Gönder"}
      </button>
    </div>
  );
};

export default FormActions;
