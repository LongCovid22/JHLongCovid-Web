import {
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
  cloneElement,
} from "react";
import { mapStyle } from "../../theme/mapStyle";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectZoom, setByAmount } from "../../redux/slices/zoomSlice";
import { useMapUpdateContext } from "../context/MapContext";

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  children: React.ReactNode;
}

const Map: React.FC<MapProps> = ({ style, children, ...options }) => {
  const [map, setMap] = useState<google.maps.Map>();
<<<<<<< HEAD
  const mapRef = useRef<HTMLDivElement>(null);
=======
  const mapUpdateContext = useMapUpdateContext();
>>>>>>> dev

  const dispatch = useAppDispatch();
  const zoomNum = useAppSelector(selectZoom);

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 39.8283, lng: -98.5795 },
        zoom: zoomNum,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl: false,
        styles: mapStyle,
        disableDefaultUI: true,
      });

      newMap.addListener("zoom_changed", () => {
        dispatch(setByAmount(Number(newMap.getZoom())));
      });

      newMap.addListener("bounds_changed", () => {
        const bounds = newMap.getBounds();
        // ** may need this as state in the future **
      });
      setMap(newMap);

      if (mapUpdateContext) {
        mapUpdateContext.setMapContext(newMap);
      }
    }
  }, [mapRef, map]);

  return (
    <div id="map" ref={mapRef} style={style}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { map });
        }
      })}
    </div>
  );
};

export default Map;
