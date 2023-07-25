import { getCountyAndStateWithZip } from "../surveyFunctions";

describe("Testing retrieving county and state information with zip code", () => {
  it("Retrieving location data for zip with state and county", async () => {
    const zipCode = "13492";
    const expectedResult = {
      county: "Oneida County",
      state: "New York",
      stateAbbrev: "NY",
      countyLat: 43.23718,
      countyLong: -75.434473,
      stateLat: 40.712775,
      stateLong: -74.005973,
    };

    const apiKey = process.env.GOOGLEMAPS_API_KEY || "test_api_key";

    const locationData = await getCountyAndStateWithZip(zipCode, apiKey);
    expect(locationData).toStrictEqual(expectedResult);
  });

  it("Retrieving location data for zip with just state", async () => {
    const zipCode = "21231";
    const expectedResult = {
      county: "",
      state: "Maryland",
      stateAbbrev: "MD",
      countyLat: 0.0,
      countyLong: 0.0,
      stateLat: 39.045755,
      stateLong: -76.641271,
    };

    const apiKey = process.env.GOOGLEMAPS_API_KEY || "test_api_key";

    const locationData = await getCountyAndStateWithZip(zipCode, apiKey);
    expect(locationData).toStrictEqual(expectedResult);
  });
});
