import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
<<<<<<< HEAD
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { markers } from "../../data/MapMarker";

// Define your custom icon
const customIcon = new L.Icon({
  iconUrl: "/photos/location-tick.svg",
  iconSize: [32, 32], // size of the icon
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
});

const SaghfinooMap: React.FC = () => {
=======
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { getPropertiesForMap } from "../../services/propertyService";
import { toPersianNumbersWithComma } from "../../utils/FrormatNumber";
import { Property } from "../../types/property";
import MapResize from "./MapResize";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface SaghfinooMapProps {
  houseGroup?: string;
  standalone?: boolean;
}

function FitBounds({ properties }: { properties: Property[] }) {
  const map = useMap();

  useEffect(() => {
    if (properties.length > 0) {
      const bounds = L.latLngBounds(
        properties.map((p) => [p.lat, p.lng] as [number, number])
      );
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
      setTimeout(() => map.invalidateSize(), 200);
    }
  }, [map, properties]);

  return null;
}

const SaghfinooMap: React.FC<SaghfinooMapProps> = ({
  houseGroup,
  standalone = false,
}) => {
  const navigate = useNavigate();
  const properties = getPropertiesForMap(houseGroup);

  if (standalone) {
    return (
      <div className="w-full h-screen">
        <MapContainer center={[35.6892, 51.389]} zoom={11} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapResize />
          <FitBounds properties={properties} />
          {properties.map((property) => (
            <Marker
              key={property._id}
              position={[property.lat, property.lng]}
              icon={customIcon}
              eventHandlers={{
                click: () => navigate(`/house-details/${property._id}`),
              }}
            />
          ))}
        </MapContainer>
      </div>
    );
  }

>>>>>>> b0a58ad (initial refactor project)
  return (
    <div className="w-1/2 hidden md:block z-0">
      <MapContainer center={[35.6892, 51.389]} zoom={11}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapResize />
        <FitBounds properties={properties} />
        {properties.map((property) => (
          <Marker
<<<<<<< HEAD
            position={marker.geocode as [number, number]}
            key={marker.id}
            icon={customIcon}
          ></Marker>
=======
            key={property._id}
            position={[property.lat, property.lng]}
            icon={customIcon}
            eventHandlers={{
              click: () => navigate(`/house-details/${property._id}`),
            }}
          >
            <Popup>
              <div className="text-right min-w-[180px] space-y-2" dir="rtl">
                <img
                  src={property.imageLink}
                  alt={property.title}
                  className="w-full h-24 object-cover rounded"
                />
                <p className="font-bold text-sm">{property.title}</p>
                <p className="text-xs text-gray-500">{property.city}</p>
                <p className="text-sm text-primary font-semibold">
                  {toPersianNumbersWithComma(property.price)} تومان
                </p>
                <button
                  onClick={() => navigate(`/house-details/${property._id}`)}
                  className="w-full bg-primary text-white text-xs py-1.5 rounded font-medium"
                >
                  مشاهده جزئیات
                </button>
              </div>
            </Popup>
          </Marker>
>>>>>>> b0a58ad (initial refactor project)
        ))}
      </MapContainer>
    </div>
  );
};

export default SaghfinooMap;
