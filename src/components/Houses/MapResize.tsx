import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapResize: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    const resize = () => map.invalidateSize();
    resize();
    const timer = setTimeout(resize, 100);
    window.addEventListener("resize", resize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  }, [map]);

  return null;
};

export default MapResize;
