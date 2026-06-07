import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet";
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

interface AdLocationPickerProps {
  lat: number;
  lng: number;
  onChange: (lat: number, lng: number) => void;
}

function MapCenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
  }, [map, lat, lng]);
  return null;
}

function ClickHandler({
  onChange,
}: {
  onChange: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      onChange(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

const AdLocationPicker: React.FC<AdLocationPickerProps> = ({
  lat,
  lng,
  onChange,
}) => {
  return (
    <div className="w-full space-y-2">
      <p className="font-medium text-sm text-gray-600">
        موقعیت ملک را روی نقشه انتخاب کنید
      </p>
      <div className="ad-location-map rounded-lg overflow-hidden border border-gray-200">
        <MapContainer center={[lat, lng]} zoom={12} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapResize />
          <MapCenter lat={lat} lng={lng} />
          <ClickHandler onChange={onChange} />
          <Marker position={[lat, lng]} icon={customIcon} />
        </MapContainer>
      </div>
      <p className="text-xs text-gray-400 font-medium">
        عرض: {lat.toFixed(4)} | طول: {lng.toFixed(4)}
      </p>
    </div>
  );
};

export default AdLocationPicker;
