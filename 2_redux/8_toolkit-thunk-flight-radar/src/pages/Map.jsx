import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "../utils/constants";
import { clearRoute, open } from "../redux/slices/detailSlice";
import { useEffect } from "react";
import { getFlights } from "../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);
  const { route } = useSelector((store) => store.detail);

  useEffect(() => {
    dispatch(getFlights());

    // her 5 saniyede bir api'dan güncel verileri al
    // const id = setInterval(() => dispatch(getFlights()), 10000);

    // // componentWillUnmount anında interval'ı durdur
    // return () => clearInterval(id);
  }, []);

  return (
    <MapContainer center={[38.908216, 35.424321]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => {
        return (
          <Marker position={[flight.lat, flight.lng]} icon={getIcon(flight.deg)}>
            <Popup>
              <div className="popup">
                <span>Kod: {flight.code}</span>
                <button onClick={() => dispatch(open(flight.id))}>Detay</button>
                {route.length > 0 && <button onClick={() => dispatch(clearRoute())}>Rotayı Temzile</button>}
              </div>
            </Popup>
          </Marker>
        );
      })}

      {route && <Polyline positions={route} />}
    </MapContainer>
  );
};

export default Map;
