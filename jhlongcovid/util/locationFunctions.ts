import axios from "axios";
import { LocationState } from "../redux/slices/locationSlice";

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export class NotInUSError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotInUSError";
  }
}

export type LocationData = {
  county: string;
  state: string;
  stateAbbrev: string;
  countyLat: number;
  countyLong: number;
  stateLat: number;
  stateLong: number;
};

export const checkEmptyLocationData = (location: LocationData) => {
  let isEmpty = true;
  for (const key in location) {
    const value = location[key as keyof object];
    if (typeof value === "string") {
      if (value !== "") {
        isEmpty = false;
      }
    } else {
      if (value !== 0.0) {
        isEmpty = false;
      }
    }
  }
  return isEmpty;
};

export const getCountyAndStateWithZip = async (
  zipCode: string,
  apiKey: string
) => {
  let locationData: LocationData = {
    county: "",
    state: "",
    stateAbbrev: "",
    countyLat: 0.0,
    countyLong: 0.0,
    stateLat: 0.0,
    stateLong: 0.0,
  };
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=` + 'zipcode+'+
      zipCode +
      `&key=${apiKey}`
  );
  if (response.data.results.length > 0) {
    let address_components = response.data.results[0].address_components;
    let index = address_components.findIndex((component: any) => component.types.includes("administrative_area_level_1"));
    let indexBefore = index !== -1 && index !== 0 ? index - 1 : null;
    await Promise.all(
      address_components.map(async (value: any, idx: any) => {
        let ac = value as {
          long_name: string;
          short_name: string;
          types: string[];
        };

        if (ac.types.includes("country") && ac.short_name !== "US") {
          throw new NotInUSError("Location not in United States");
        }
        if (ac.types.includes("administrative_area_level_1")) {
          locationData.state = ac.long_name;
          locationData.stateAbbrev = ac.short_name;
          const stateResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=` + 'state+'+
              `${ac.long_name}` +
              `&key=${apiKey}`
          );

          const west =
            stateResponse.data.results[0].geometry.bounds.southwest.lng;
          const east =
            stateResponse.data.results[0].geometry.bounds.northeast.lng;
          const lng = (west + east) / 2;

          const north =
            stateResponse.data.results[0].geometry.bounds.northeast.lat;
          const south =
            stateResponse.data.results[0].geometry.bounds.southwest.lat;
          const lat = (north + south) / 2;

          locationData.stateLat = Math.round(lat * 1000000) / 1000000;
          locationData.stateLong = Math.round(lng * 1000000) / 1000000;
        }

        if (ac.types.includes("administrative_area_level_2") || idx == indexBefore) {
          const countyResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=` +
              ac.long_name + "+" + locationData.state +
              `&key=${apiKey}`
          );
          locationData.countyLat =
            Math.round(
              countyResponse.data.results[0].geometry.location.lat * 1000000
            ) / 1000000;
          locationData.countyLong =
            Math.round(
              countyResponse.data.results[0].geometry.location.lng * 1000000
            ) / 1000000;
          locationData.county = ac.long_name;
        }
      })
    );
  }

  return locationData;
};

export const getCountyAndStateWithLatLng = async (
  latLng: LocationState,
  apiKey: string
) => {
  let locationData: LocationData = {
    county: "",
    state: "",
    stateAbbrev: "",
    countyLat: 0.0,
    countyLong: 0.0,
    stateLat: 0.0,
    stateLong: 0.0,
  };
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat},${latLng.lng}` +
      `&key=${apiKey}`
  );
  if (response.data.results.length > 0) {
    await Promise.all(
      response.data.results[0].address_components.map(async (value: any) => {
        let ac = value as {
          long_name: string;
          short_name: string;
          types: string[];
        };
        if (ac.types.includes("country") && ac.short_name !== "US") {
          throw new NotInUSError("Location not in United States");
        }

        if (ac.types.includes("administrative_area_level_1")) {
          locationData.state = ac.long_name;
          locationData.stateAbbrev = ac.short_name;
          const stateResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=` +
              `state ${ac.long_name}` +
              `&key=${apiKey}`
          );

          const west =
            stateResponse.data.results[0].geometry.bounds.southwest.lng;
          const east =
            stateResponse.data.results[0].geometry.bounds.northeast.lng;
          const lng = (west + east) / 2;

          const north =
            stateResponse.data.results[0].geometry.bounds.northeast.lat;
          const south =
            stateResponse.data.results[0].geometry.bounds.southwest.lat;
          const lat = (north + south) / 2;

          locationData.stateLat = Math.round(lat * 1000000) / 1000000;
          locationData.stateLong = Math.round(lng * 1000000) / 1000000;
        }

        if (ac.types.includes("administrative_area_level_2")) {
          const countyResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=` +
              ac.long_name +
              `&key=${apiKey}`
          );
          locationData.countyLat =
            Math.round(
              countyResponse.data.results[0].geometry.location.lat * 1000000
            ) / 1000000;
          locationData.countyLong =
            Math.round(
              countyResponse.data.results[0].geometry.location.lng * 1000000
            ) / 1000000;
          locationData.county = ac.long_name;
        }
      })
    );
  }

  return locationData;
};

export const getCountyAndStateCoords = async (
  state: string,
  county: string,
  apiKey: string
) => {
  let locationData: LocationData = {
    county: county,
    state: state,
    stateAbbrev: "",
    countyLat: 0.0,
    countyLong: 0.0,
    stateLat: 0.0,
    stateLong: 0.0,
  };

  const stateResponse = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=` +
      `state ${state}` +
      `&key=${apiKey}`
  );

  const west = stateResponse.data.results[0].geometry.bounds.southwest.lng;
  const east = stateResponse.data.results[0].geometry.bounds.northeast.lng;
  const lng = (west + east) / 2;

  const north = stateResponse.data.results[0].geometry.bounds.northeast.lat;
  const south = stateResponse.data.results[0].geometry.bounds.southwest.lat;
  const lat = (north + south) / 2;

  locationData.stateLat = Math.round(lat * 1000000) / 1000000;
  locationData.stateLong = Math.round(lng * 1000000) / 1000000;
  const addresComponents: AddressComponent[] =
    stateResponse.data.results[0].address_components;

  addresComponents.forEach((ac) => {
    if (ac.types.includes("administrative_area_level_1")) {
      locationData.stateAbbrev = ac.short_name;
    }
  });

  const countyResponse = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=` +
      county +
      `&key=${apiKey}`
  );
  locationData.countyLat =
    Math.round(countyResponse.data.results[0].geometry.location.lat * 1000000) /
    1000000;
  locationData.countyLong =
    Math.round(countyResponse.data.results[0].geometry.location.lng * 1000000) /
    1000000;

  return locationData;
};
