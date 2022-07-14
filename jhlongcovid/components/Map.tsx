import styles from "./layout.module.css";
import {
  ReactElement,
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
  cloneElement,
} from "react";
import { mapStyle } from "../theme/mapStyle";

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  children: React.ReactNode;
}

const Map: React.FC<MapProps> = ({ children, style, ...options }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (mapRef.current && !map) {
      setMap(
        new window.google.maps.Map(mapRef.current, {
          center: { lat: 43.1009031, lng: -75.2326641 },
          zoom: 10,
          mapTypeControl: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          fullscreenControl: false,
          styles: mapStyle,
        })
      );
    }
  }, [mapRef, map]);

  return (
    <div id="map" ref={mapRef} style={style}>
      {Children.map(children, (child) => {
        console.log("cloning children");
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </div>
  );
};

export default Map;
