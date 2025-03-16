import { FC } from "react";

import { CgUnavailable as Fail } from "react-icons/cg";
import { MdEventAvailable as Ok } from "react-icons/md";

interface Props {
  availability: boolean;
  expanded?: boolean;
}

const Status: FC<Props> = ({ availability, expanded = false }) => {
  return (
    <div
      className={`flex items-center gap-4 border border-zinc-200 p-2 rounded-md ${
        availability ? "bg-green-100" : "bg-red-100"
      }`}
    >
      {availability ? (
        <Ok className="text-xl text-green-700" />
      ) : (
        <Fail className="text-xl text-red-700" />
      )}

      {expanded && (
        <p className="font-bold">
          {availability ? "Şuan konaklanabilir" : "Konaklama için müsait değil"}
        </p>
      )}
    </div>
  );
};

export default Status;
