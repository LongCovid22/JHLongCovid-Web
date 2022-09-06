import React, { useState, useEffect, useRef } from "react";
import { Input } from "@chakra-ui/react";

import { useMapContext } from "../context/MapContext";
import { useGoogleMaps } from "react-hook-google-maps";
let autoComplete;

import {
  selectZoom,
  selectLoLat,
  selectHighLat,
  selectLoLong,
  selectHighLong,
} from "../../redux/slices/zoomSlice";

const axios = require("axios");

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef, map, markerData) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, map, markerData)
  );
}

const searchLocation = async (query) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=` +
        query +
        `&key=AIzaSyARLcESSEoAqmN5cM63b_3EQv9Qiqe1OsU`
    );
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

function getDistance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

async function handlePlaceSelect(updateQuery, map, markerData) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);

  let res = await searchLocation(query);

  if (res.status == "OK" && map) {
    if (res.results[0].types[0] == "administrative_area_level_2") {
      const name = addressObject.formatted_address;
      if (markerData.hasOwnProperty(name)) {
        google.maps.event.trigger(markerData[name], "click");
      }
    } else {
      //output only at the COUNTY level
      let ne = res.results[0].geometry.viewport.northeast;
      let sw = res.results[0].geometry.viewport.southwest;

      let northeast = new google.maps.LatLng(ne.lat, ne.lng);
      let southwest = new google.maps.LatLng(sw.lat, sw.lng);
      let bounds = new google.maps.LatLngBounds(southwest, northeast);

      // let distance = new google.maps.geometry.spherical;

      map.fitBounds(bounds);
      if (map.getZoom() > 12) {
        map.setZoom(12);
      }

      const new_bnd = map.getBounds();
      const latLow = new_bnd.yb.lo;
      const latHigh = new_bnd.yb.hi;
      const longLow = new_bnd.Qa.lo;
      const longHigh = new_bnd.Qa.hi;

      //wait for 1 second for marker to load (is there a better way?)
      setTimeout(() => {
        let closest_distance = 100000000;
        let closest_marker;
        for (const c in markerData) {
          const county = markerData[c].data;

          if (
            markerData[c].data.level === "county" &&
            latLow <= county.lat &&
            county.lat <= latHigh &&
            longLow <= county.long &&
            county.long <= longHigh
          ) {
            const first = new google.maps.LatLng(county.lat, county.long);
            const second = new google.maps.LatLng(
              map.getCenter().lat(),
              map.getCenter().lng()
            );
            if (
              google.maps.geometry.spherical.computeDistanceBetween(
                first,
                second
              ) < closest_distance
            ) {
              closest_marker = markerData[c];
              closest_distance =
                google.maps.geometry.spherical.computeDistanceBetween(
                  first,
                  second
                );
            }
          }
        }
        google.maps.event.trigger(closest_marker.marker, "click");
      }, 1000);
    }
  }

  // if(map.getZoom() > 1)

  // if(res.status === 'OK') {
  //   //find out if a city or state
  //   const level = res.results[0].types[0];
  //   if (level === 'administrative_area_level_1') {
  //     const name = addressObject.address_components[0].long_name;
  //     if(markerData.hasOwnProperty(name)) {
  //       google.maps.event.trigger(markerData[name], 'click')
  //     }
  //   } else
  //   }
  // }
}

function SearchLocationInput({ map, markerData }) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const key = "AIzaSyARLcESSEoAqmN5cM63b_3EQv9Qiqe1OsU";
  const mapContext = useMapContext();

  // console.log(mapContext.map);

  // const latLow = useAppSelector(selectLoLat);
  // const latHigh = useAppSelector(selectHighLat);
  // const longLow = useAppSelector(selectLoLong);
  // const longHigh = useAppSelector(selectHighLong);

  useEffect(() => {
    handleScriptLoad(setQuery, autoCompleteRef, mapContext.map, markerData);
  }, [mapContext]);

  return (
    <div
      className="search-location-input"
      style={{
        pacContainer: {
          "borer-radius": "50px",
        },
      }}
    >
      <Input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
}

export default SearchLocationInput;
