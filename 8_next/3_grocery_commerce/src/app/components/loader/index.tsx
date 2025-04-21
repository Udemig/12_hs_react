import { FaSpinner } from "react-icons/fa";

type Props = {
  designs?: string;
};

const Loader = ({ designs }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <FaSpinner className={`animate-spin ${designs}`} />
    </div>
  );
};

export default Loader;
