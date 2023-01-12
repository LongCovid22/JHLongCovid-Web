import React, { useState, useEffect, useRef } from "react";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { useMapContext } from "../context/MapContext";
let autoComplete;

const axios = require("axios");

function enableEnterKey(input) {
  /* Store original event listener */
  const _addEventListener = input.addEventListener;

  const addEventListenerWrapper = (type, listener) => {
    if (type === "keydown") {
      /* Store existing listener function */
      const _listener = listener;
      listener = (event) => {
        /* Simulate a 'down arrow' keypress if no address has been selected */
        const suggestionSelected =
          document.getElementsByClassName("pac-item-selected").length;
        if (event.key === "Enter" && !suggestionSelected) {
          const e = new KeyboardEvent("keydown", {
            key: "ArrowDown",
            code: "ArrowDown",
            keyCode: 40,
          });
          _listener.apply(input, [e]);
        }
        _listener.apply(input, [event]);
      };
    }
    _addEventListener.apply(input, [type, listener]);
  };

  input.addEventListener = addEventListenerWrapper;
}

function handleScriptLoad(updateQuery, autoCompleteRef, map, markerData, key) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields([
    "address_components",
    "formatted_address",
    "geometry",
  ]);

  enableEnterKey(autoCompleteRef.current);

  autoComplete.addListener("place_changed", () => {
    handlePlaceSelect(updateQuery, map, markerData, key);
  });
}

const searchLocation = async (query, apiKey) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=` +
        query +
        `&key=${apiKey}`
    );
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

async function handlePlaceSelect(updateQuery, map, markerData, apiKey) {
  const addressObject = autoComplete.getPlace();

  // console.log(addressObject);

  if (
    addressObject &&
    (!addressObject.geometry || !addressObject.geometry.location)
  ) {
    console.log("No results found");
  } else if (addressObject && addressObject.geometry) {
    const query = addressObject.formatted_address;
    updateQuery(query);

    let res = await searchLocation(query, apiKey);

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
        const latLow = new_bnd?.getSouthWest().lat();
        const latHigh = new_bnd?.getNorthEast().lat();
        const longLow = new_bnd?.getSouthWest().lng();
        const longHigh = new_bnd?.getNorthEast().lng();

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

function SearchLocationInput({ markerData }) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const key = process.env.GOOGLEMAPS_API_KEY;
  const mapContext = useMapContext();

  const [value, setValue] = React.useState("");

  useEffect(() => {
    handleScriptLoad(
      setValue,
      autoCompleteRef,
      mapContext.map,
      markerData,
      key
    );
  }, [mapContext]);

  return (
    <>
      <Box flex={1}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            id="address-field"
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
          bg="#68ACE5"
          color="#002D72"
          onClick={() =>
            // Enter
            autoCompleteRef.current.dispatchEvent(
              new KeyboardEvent("keydown", {
                code: "Enter",
                key: "Enter",
                charCode: 13,
                keyCode: 13,
                view: window,
                bubbles: true,
              })
            )
          }
        />
      </Box>
    </>
  );
}

export default SearchLocationInput;
