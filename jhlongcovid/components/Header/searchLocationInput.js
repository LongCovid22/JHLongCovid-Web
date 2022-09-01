import React, { useState, useEffect, useRef } from "react";


import {Input } from "@chakra-ui/react";
let autoComplete;

const axios = require('axios');

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
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
    {componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, map, markerData)
  );
}

const searchLocation = async (query) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=`+query+`&key=AIzaSyARLcESSEoAqmN5cM63b_3EQv9Qiqe1OsU`);
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

async function handlePlaceSelect(updateQuery, map, markerData) {
  
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  
  

  // console.log(markerData);
  // console.log(addressObject);

  let res = await searchLocation(query);

  console.log(res);
  if(res.status === 'OK') {
    //find out if a city or state
    const level = res.results[0].types[0];
    if (level === 'administrative_area_level_1') {
      const name = addressObject.address_components[0].long_name;
      if(markerData.hasOwnProperty(name)) {
        google.maps.event.trigger(markerData[name], 'click')
      }
    } else if (level == 'administrative_area_level_2') {
      const name = addressObject.formatted_address;
      if(markerData.hasOwnProperty(name)) {
        google.maps.event.trigger(markerData[name], 'click')
      }
    }
  }

  

  
  

  

  // https://maps.googleapis.com/maps/api/geocode/json?address=New%20York,%20New%20York&key=AIzaSyARLcESSEoAqmN5cM63b_3EQv9Qiqe1OsU

  // if(map) {
  //   // map.panTo(new google.maps.LatLng(39.8283, -98.5795));
  //   console.log('hey');
  // }
  
  
  

  //if specific county, click on that county

  //if specific state, click on that state

  //otherwise, pan to that place
}

function SearchLocationInput({map, markerData}) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const key = 'AIzaSyARLcESSEoAqmN5cM63b_3EQv9Qiqe1OsU';

  useEffect(() => {
    handleScriptLoad(setQuery, autoCompleteRef, map, markerData);
  }, []);

  return (
    <div className="search-location-input" style={{
      "pacContainer": {
      "borer-radius": "50px"
      }
      }}>
      <Input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
}

export default SearchLocationInput;