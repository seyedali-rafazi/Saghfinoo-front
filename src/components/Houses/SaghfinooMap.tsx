import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { markers } from "../../data/MapMarker";

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
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SaghfinooMap;
