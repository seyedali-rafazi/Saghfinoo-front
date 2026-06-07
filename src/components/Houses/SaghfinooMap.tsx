import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { getPropertiesForMap } from "../../services/propertyService";
import { toPersianNumbersWithComma } from "../../utils/FrormatNumber";
import {
  defaultMarkerIcon,
  OSM_ATTRIBUTION,
  OSM_TILE_URL,
  TEHRAN_CENTER,
} from "../../utils/leaflet";
import { Property } from "../../types/property";
import MapResize from "./MapResize";

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
        <MapContainer
          center={TEHRAN_CENTER}
          zoom={11}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url={OSM_TILE_URL} attribution={OSM_ATTRIBUTION} />
          <MapResize />
          <FitBounds properties={properties} />
          {properties.map((property) => (
            <Marker
              key={property._id}
              position={[property.lat, property.lng]}
              icon={defaultMarkerIcon}
              eventHandlers={{
                click: () => navigate(`/house-details/${property._id}`),
              }}
            />
          ))}
        </MapContainer>
      </div>
    );
  }

  return (
    <div className="w-1/2 hidden md:block z-0">
      <MapContainer center={TEHRAN_CENTER} zoom={11}>
        <TileLayer url={OSM_TILE_URL} attribution={OSM_ATTRIBUTION} />
        <MapResize />
        <FitBounds properties={properties} />
        {properties.map((property) => (
          <Marker
            key={property._id}
            position={[property.lat, property.lng]}
            icon={defaultMarkerIcon}
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
        ))}
      </MapContainer>
    </div>
  );
};

export default SaghfinooMap;
