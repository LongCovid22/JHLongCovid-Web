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
import { selectZoom, setByAmount, setLowLong, setHiLong, setLowLat, setHiLat } from "../../redux/slices/zoomSlice";

// import GoogleMapReact from 'google-map-react';
import { useGoogleMaps } from "react-hook-google-maps";


interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  children: React.ReactNode;
}

const Map: React.FC<MapProps> = ({ style, setMapFunc, children, ...options }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  

  const dispatch = useAppDispatch();
  const zoomNum = useAppSelector(selectZoom);



  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyARLcESSEoAqmN5cM63b_3EQv9Qiqe1OsU",
    // NOTE: even if you change options later
    {
      center: { lat: 39.8283, lng: -98.5795 },
      zoom: 5,
      mapTypeControl: false,
        // mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl: false,
        styles: mapStyle,
        disableDefaultUI: true,
    },
  );

  setMapFunc(map);

  if (map) {
    map.addListener("idle", () => {
      // console.log(map.getBounds());
      if (zoomNum != map.getZoom()) {
        dispatch(setByAmount(Number(map.getZoom())));
      }

      let bounds = map.getBounds();

      dispatch(setLowLong(bounds.Qa.lo));
      dispatch(setHiLong(bounds.Qa.hi));
      dispatch(setLowLat(bounds.yb.lo));
      dispatch(setHiLat(bounds.yb.hi));

    });
  }
  

  // useEffect(() => {
    

  //   if (mapRef.current && !map) {
  //     const newMap = new window.google.maps.Map(mapRef.current, {
  //       center: { lat: latNum, lng: longNum },
  //       zoom: zoomNum,
  //       mapTypeControl: false,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP,
  //       fullscreenControl: false,
  //       styles: mapStyle,
  //       disableDefaultUI: true,
  //     });
  //     // newMap.addListener("bounds_changed", () => {
  //     //   const bounds = newMap.getBounds();
  //     //   console.log(bounds);
  //     //   newMap.panTo(new google.maps.LatLng(39.8283, -98.5795));
  //     //   // dispatch(setLat(39.8283));
  //     //   // dispatch(setLong(-98.5795));
  //     // });

  //     setMapFunc(newMap);

  //     newMap.addListener("idle", () => {
  //       if (zoomNum != map.getZoom()) {
  //         dispatch(setByAmount(Number(map.getZoom())));
  //       }
  //     });
      
      
  //   }

    
  // }, [mapRef, map, latNum, longNum]);


  return (


//     <GoogleMapReact
//       defaultCenter={{lat : 10.9, lng: 77.01}}
//       defaultZoom={5}
//     >
//       {/* {Children.map(children, (child) => {
//   if (isValidElement(child)) {
//     return cloneElement(child, { map });
//   }
// })} */}
//     </GoogleMapReact>

<div id="map" ref={ref} style={style}>
{Children.map(children, (child) => {
  if (isValidElement(child)) {
    return cloneElement(child, { map });
  }
})}
</div>



  );
};

export default Map;

