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

import { read } from '../util/mockDataTwo';

// import { getRiverInformation } from "../mockDataTwo.js";

// import mockData2 from '../mockData2';

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  children: React.ReactNode;
}

interface City {
  center: google.maps.LatLngLiteral;
  population: number;
}

const readXlsxFile = require('read-excel-file/node');



const Map: React.FC<MapProps> = ({ children, style, ...options }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const [markers, setMarkers] = useState<{
    covidSummary: {
      perPeopleRecoveredLongCovid : number,
      perReportedLongCovidCase: number,
      totalLongCovidCases: number
    },
    lat : number,
    long : number,
    level : string,
    name: string,
    stateAbbrev: string,
    stateName: string

  }[]>([]);

  const dispatch = useAppDispatch();
  const zoomNum = useAppSelector(selectZoom);

  

  const citymap: Record<string, City> = {
    chicago: {
      center: { lat: 41.878, lng: -87.629 },
      population: 2714856,
    },
    newyork: {
      center: { lat: 40.714, lng: -74.005 },
      population: 8405837,
    },
    losangeles: {
      center: { lat: 34.052, lng: -118.243 },
      population: 3857799,
    },
    vancouver: {
      center: { lat: 49.25, lng: -123.1 },
      population: 603502,
    },
  };


  useEffect(() => {

    // console.log(read());
    let county_data, state_data;
    [county_data, state_data] = read();
    setMarkers(county_data);
  
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
        setMap(
          newMap
        );


        const uluru = { lat: -25.363, lng: 131.044 };
        const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,

      //6 -> 210, 7 -> 250
      pixelOffset: new google.maps.Size(210, 150),
      maxWidth: 300
    });

    const marker = new google.maps.Circle({
      center: uluru,
      map : newMap,
      radius : 100000
      // title: "Uluru (Ayers Rock)",
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.setPosition(marker.getCenter());
      infowindow.open({
        anchor: marker,
        map: newMap,
        shouldFocus: false,
      });
    })

    google.maps.event.addListener(marker, 'mouseout', function() {
      infowindow.close();
    })




        newMap.addListener("center_changed", () => {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          // console.log(newMap.getCenter()?.lat());
          // console.log(newMap.getCenter()?.lng());
        });
  
        newMap.addListener("zoom_changed", () => {
          dispatch(setByAmount(Number(newMap.getZoom())));
          // console.log(zoomNum);
        });
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
