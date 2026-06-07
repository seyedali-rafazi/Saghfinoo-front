import { Circle, MapContainer, Marker, TileLayer } from "react-leaflet";
import {
  defaultMarkerIcon,
  OSM_ATTRIBUTION,
  OSM_TILE_URL,
} from "../../utils/leaflet";
import { Property } from "../../types/property";
import MapResize from "../Houses/MapResize";

interface HouseLocationMapProps {
  property: Property;
}

const HouseLocationMap: React.FC<HouseLocationMapProps> = ({ property }) => {
  const position: [number, number] = [property.lat, property.lng];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg text-gray-800">موقعیت ملک روی نقشه</h3>
      <div className="house-location-map rounded-lg overflow-hidden border border-gray-200">
        <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
          <TileLayer url={OSM_TILE_URL} attribution={OSM_ATTRIBUTION} />
          <MapResize />
          <Circle
            center={position}
            radius={400}
            pathOptions={{ color: "#2563eb", fillColor: "#2563eb", fillOpacity: 0.1 }}
          />
          <Marker position={position} icon={defaultMarkerIcon} />
        </MapContainer>
      </div>
      <p className="text-sm text-gray-500 font-medium">{property.city}</p>
    </div>
  );
};

export default HouseLocationMap;
