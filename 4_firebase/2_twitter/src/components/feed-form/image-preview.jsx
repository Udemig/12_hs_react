import { IoMdClose } from "react-icons/io";

const ImagePreview = ({ image, clearImage }) => {
  return (
    image && (
      <div className="relative mb-5">
        <button
          onClick={clearImage}
          type="button"
          className="absolute top-3 end-3 p-3 bg-primary/90 rounded-full transition hover:bg-zinc-800 cursor-pointer text-xl"
        >
          <IoMdClose />
        </button>

        <img src={image} alt="ön izleme" className="rounded-md" />
      </div>
    )
  );
};

export default ImagePreview;
