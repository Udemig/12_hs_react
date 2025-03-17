import { FC } from "react";
import { useRemovePlace } from "../../utils/service";

interface Props {
  id: number;
}

const Button: FC<Props> = ({ id }) => {
  const { mutate, isPending } = useRemovePlace();

  return (
    <div className="flex justify-end my-5">
      <button
        onClick={() => mutate(id)}
        disabled={isPending}
        className="border border-zinc-300 py-1 px-4 rounded-md transition hover:bg-zinc-100 cursor-pointer"
      >
        Kaldır
      </button>
    </div>
  );
};

export default Button;
