import { IoAirplaneOutline } from "react-icons/io5";
import c from "../../utils/nullCheck";

const Aircraft = ({ data }) => {
  return (
    <div className="aircraft">
      <div className="icon">
        <IoAirplaneOutline />
      </div>

      <div>
        <p>
          <span className="title">Uçak Tipi</span>
          <span>{c(data?.model?.text)}</span>
        </p>

        <div>
          <p>
            <span className="title">Kuyruk Kodu</span>
            <span>{c(data?.registration)}</span>
          </p>
          <p>
            <span className="title">Ülke Id</span>
            <span>{c(data?.countryId)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aircraft;
