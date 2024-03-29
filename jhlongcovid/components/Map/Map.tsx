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
import {
  selectZoom,
  setByAmount,
  setLowLong,
  setHiLong,
  setLowLat,
  setHiLat,
} from "../../redux/slices/zoomSlice";

// import GoogleMapReact from 'google-map-react';
import { useMapUpdateContext } from "../context/MapContext";

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  children: React.ReactNode;
}
const Map: React.FC<MapProps> = ({ style, children, ...options }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const mapUpdateContext = useMapUpdateContext();

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
        restriction: {
          latLngBounds: {
            east: 181, // 181 to ignore horiz boudns
            north: 85,
            south: -85,
            west: -181, // -181 to ignore horiz boudns
          },
          strictBounds: true,
        },
      });

      newMap.addListener("idle", () => {
        // console.log(map.getBounds());
        if (zoomNum != newMap.getZoom()) {
          dispatch(setByAmount(Number(newMap.getZoom())));
        }

        let bounds = newMap.getBounds();
        if (bounds !== undefined) {
          dispatch(setLowLong(bounds.getSouthWest().lng()));
          dispatch(setHiLong(bounds.getNorthEast().lng()));
          dispatch(setLowLat(bounds.getSouthWest().lat()));
          dispatch(setHiLat(bounds.getNorthEast().lat()));
        }
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
