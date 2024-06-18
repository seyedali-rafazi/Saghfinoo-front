import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const SaghfinooMap: React.FC = () => {
  const markers = [
    {
      id: 1,
      geocode: [35.6892, 51.389],
    },
    {
      id: 2,
      geocode: [35.6961, 51.4231],
    },
    {
      id: 3,
      geocode: [35.7219, 51.3347],
    },
    {
      id: 4,
      geocode: [35.7325, 51.4226],
    },
    {
      id: 5,
      geocode: [35.7448, 51.3758],
    },
    {
      id: 6,
      geocode: [35.7699, 51.4094],
    },
    {
      id: 7,
      geocode: [35.6895, 51.3916],
    },
    {
      id: 8,
      geocode: [35.7153, 51.4323],
    },
    {
      id: 9,
      geocode: [35.7028, 51.3709],
    },
    {
      id: 10,
      geocode: [35.6965, 51.3728],
    },
    {
      id: 11,
      geocode: [35.7436, 51.3981],
    },
    {
      id: 12,
      geocode: [35.7489, 51.4054],
    },
    {
      id: 13,
      geocode: [35.6894, 51.4101],
    },
    {
      id: 14,
      geocode: [35.7098, 51.4217],
    },
    {
      id: 15,
      geocode: [35.7311, 51.3879],
    },
    {
      id: 16,
      geocode: [35.7154, 51.4425],
    },
    {
      id: 17,
      geocode: [35.6915, 51.4259],
    },
    {
      id: 18,
      geocode: [35.7416, 51.4285],
    },
    {
      id: 19,
      geocode: [35.7382, 51.3833],
    },
    {
      id: 20,
      geocode: [35.7225, 51.3872],
    },
  ];

  return (
    <div className="w-1/2 hidden md:block">
      <MapContainer center={[35.6892, 51.389]} zoom={11}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
          <Marker position={marker.geocode} key={marker.id}></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SaghfinooMap;
