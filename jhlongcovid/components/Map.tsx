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

import {
  useAppDispatch, 
  useAppSelector
} from '../redux/hooks';

import { selectZoom, setByAmount} from '../features/zoom/zoomSlice';

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  children: React.ReactNode;
}

const Map: React.FC<MapProps> = ({ children, style, ...options }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const dispatch = useAppDispatch();
  const zoomNum = useAppSelector(selectZoom);

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 43.1009031, lng: -75.2326641 },
        zoom: zoomNum,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl: false,
        styles: mapStyle,
      });
      setMap(
        newMap
      );

      newMap.addListener("zoom_changed", () => {
        dispatch(setByAmount(Number(newMap.getZoom())));
        // console.log(zoomNum);
      })
    }
  }, [mapRef, map]);

  return (
    <div id="map" ref={mapRef} style={style}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </div>
  );
};

export default Map;
