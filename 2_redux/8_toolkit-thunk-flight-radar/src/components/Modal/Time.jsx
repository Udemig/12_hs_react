import c from "../../utils/nullCheck";
import t from "../../utils/formatDate";

const Time = ({ data }) => {
  return (
    <div className="time">
      <div>
        <span>Planlanan</span>
        <span>{c(t(data.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Planlanan</span>
        <span>{c(t(data.scheduled?.arrival))}</span>
      </div>
      <div>
        <span>Gerçek.</span>
        <span>{c(t(data.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Tahmini</span>
        <span>{c(t(data.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
