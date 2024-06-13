import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

interface MapProps {
  width: number;
}

const Map: React.FC<MapProps> = ({ width }) => {
  const defaultCenter = [51.505, -0.09]; // Set your desired default center coordinates

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      style={{ width: `${width}px`, height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
