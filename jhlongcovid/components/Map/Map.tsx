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
import { mapStyle } from "../../theme/mapStyle";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectZoom, setByAmount } from "../../redux/slices/zoomSlice";
import {
  selectLeftSidePanelPres,
  setLeftSidePanelPres,
} from "../../redux/slices/presentationSlice";
import { selectWidth } from "../../redux/slices/viewportSlice";
import { calculatePanelOffset } from "./mapFunctions";

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  data: any; // Will have to come up with an interface
}

const Map: React.FC<MapProps> = ({ style, data, ...options }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const dispatch = useAppDispatch();
  const zoomNum = useAppSelector(selectZoom);
  const vpWidth = useAppSelector(selectWidth);

  const getViewportWidth = () => {
    return vpWidth;
  };

  useEffect(() => {
    console.log("Here's the vp width: ", vpWidth);
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 43.1009031, lng: -75.2326641 },
        zoom: zoomNum,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl: false,
        styles: mapStyle,
      });

      newMap.addListener("zoom_changed", () => {
        dispatch(setByAmount(Number(newMap.getZoom())));
      });

      newMap.addListener("bounds_changed", () => {
        const bounds = newMap.getBounds();
        // ** may need this as state in the future **
      });

      data.map((mark: { lat: any; long: any }) => {
        const marker = new google.maps.Marker({
          position: { lat: mark.lat, lng: mark.long },
          map: newMap,
        });

        // Pan to marker on marker click
        google.maps.event.addListener(marker, "click", function () {
          const markerPosition =
            marker.getPosition() ?? new google.maps.LatLng(0.0, 0.0);
          newMap.panTo(markerPosition);
          newMap.panBy(calculatePanelOffset(newMap), 0);

          dispatch(setLeftSidePanelPres(true));
        });
      });

      setMap(newMap);
    }
  }, [mapRef, map, data, vpWidth]);

  return <div id="map" ref={mapRef} style={style} />;
};

export default Map;
