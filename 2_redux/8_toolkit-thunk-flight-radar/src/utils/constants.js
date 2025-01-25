import { divIcon } from "leaflet";

export const getIcon = (deg) => {
  return divIcon({
    html: `<div style="transform: rotate(${deg - 45}deg)">
    <img src="/plane_icon.png" style="width:40px;height:40px"/>
    </div>`,
    className:"",
    iconSize: [30, 30],
  });
};
