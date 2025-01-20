import c from "../../utils/nullCheck";

const Airport = ({ data }) => {
  console.log(data);
  return (
    <div className="airport">
      <div>
        <h2>{c(data.origin?.code?.iata)}</h2>
        <h3>{c(data.origin?.position?.region?.city)}</h3>
        <span>
          ({c(data.origin?.timezone?.abbr)}) ({c(data.origin?.timezone?.name)})
        </span>
      </div>

      <div className="icon">
        <img src="/plane_icon.png" alt="plane" />
      </div>

      <div>
        <h2>{c(data.destination?.code?.iata)}</h2>
        <h3>{c(data.destination?.position?.region?.city)}</h3>
        <span>
          ({c(data.destination?.timezone?.abbr)}) (
          {c(data.destination?.timezone?.name)})
        </span>
      </div>
    </div>
  );
};

export default Airport;
