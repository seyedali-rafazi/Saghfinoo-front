import React from "react";
import "leaflet/dist/leaflet.css";
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
  return (
    <div className="w-1/2 hidden md:block z-0">
      <MapContainer center={[35.6892, 51.389]} zoom={11}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
          <Marker
            position={marker.geocode as [number, number]}
            key={marker.id}
            icon={customIcon}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SaghfinooMap;
