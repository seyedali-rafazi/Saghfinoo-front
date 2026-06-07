import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Property } from "../../types/property";
import MapResize from "../Houses/MapResize";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface HouseLocationMapProps {
  property: Property;
}

const HouseLocationMap: React.FC<HouseLocationMapProps> = ({ property }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg text-gray-800">موقعیت ملک روی نقشه</h3>
      <MapContainer
        center={[property.lat, property.lng]}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapResize />
        <Marker position={[property.lat, property.lng]} icon={customIcon} />
      </MapContainer>
      <p className="text-sm text-gray-500 font-medium">{property.city}</p>
    </div>
  );
};

export default HouseLocationMap;
