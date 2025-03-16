import { FC } from "react";

interface Props {
  rating: number;
  expanded?: boolean;
}

const Rating: FC<Props> = ({ rating, expanded = false }) => {
  // renk belirle
  const color =
    rating >= 4.7
      ? "bg-blue-500"
      : rating >= 4
      ? "bg-green-500"
      : rating >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  // metin belirle
  const text =
    rating >= 4.7
      ? "Olağanüstü"
      : rating >= 4
      ? "Harika"
      : rating >= 3
      ? "İyi"
      : rating >= 2
      ? "Kötü"
      : "Parana Yazık";

  return (
    <div>
      <span className={`${color} text-white p-2 rounded-lg font-bold w-fit`}>
        {rating}
      </span>

      {expanded && <span className="font-semibold text-lg ms-2">{text}</span>}
    </div>
  );
};

export default Rating;
