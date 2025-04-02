import { FC } from "react";

interface Props {
  pictures: string[];
}

const Images: FC<Props> = ({ pictures }) => {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-[48px] h-fit">
      {pictures.map((url, key) => (
        <img src={url} key={key} />
      ))}
    </div>
  );
};

export default Images;
