import React, { useState, useEffect, useRef } from "react";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
} from "@chakra-ui/react";

import { useMapContext } from "../context/MapContext";
let autoComplete;

const axios = require("axios");

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

async function handlePlaceSelect(updateQuery, map, markerData) {
  const addressObject = autoComplete.getPlace();

  console.log(addressObject);

  if (addressObject) {
    const query = addressObject.formatted_address;
    updateQuery(query);

    let res = await searchLocation(query);

    if (res.status == "OK" && map) {
      let ne = res.results[0].geometry.viewport.northeast;
      let sw = res.results[0].geometry.viewport.southwest;

      let northeast = new google.maps.LatLng(ne.lat, ne.lng);
      let southwest = new google.maps.LatLng(sw.lat, sw.lng);
      let bounds = new google.maps.LatLngBounds(southwest, northeast);

      if (res.results[0].types[0] == "administrative_area_level_1") {
        const name = addressObject.address_components[0].long_name;

        if (markerData.hasOwnProperty(name)) {
          google.maps.event.trigger(markerData[name].marker, "click");
        }
      } else {
        //output only at the COUNTY level
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
          if (closest_marker) {
            google.maps.event.trigger(closest_marker.marker, "click");
          }
        }, 1000);
      }
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (event.key === "Enter") {
    console.log("hey");
  }
}

function SearchLocationInput({ map, markerData }) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const key = "AIzaSyARLcESSEoAqmN5cM63b_3EQv9Qiqe1OsU";
  const mapContext = useMapContext();

  const [value, setValue] = React.useState("");

  useEffect(() => {
    handleScriptLoad(setValue, autoCompleteRef, mapContext.map, markerData);
  }, [mapContext]);

  const search = (input) => {
    console.log("Searching for " + input);
  }

  return (

    
    <>
    <Box flex={1}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(value);
      }}
    >
      <Input
        ref={autoCompleteRef}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Enter a City"
        value={value}
      />
    </form>
          

        </Box>
        <Box>

        <IconButton
            aria-label="Search address"
            icon={<Search2Icon />}
            borderRadius={"50%"}
            bg="hopkinsBlue.100"
            color="hopkinsBlue.600"
            onClick={() => search(value)}
          />
        </Box>
    </>
    
  );
}

export default SearchLocationInput;
