import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Text, Input, HStack } from "@chakra-ui/react";
import { selectLocation } from "../../../../redux/slices/locationSlice";

interface LocationInputProps {
  zipError: boolean;
  setZipError: (error: boolean) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({
  zipError,
  setZipError,
}) => {
  const location = useSelector(selectLocation);
  const [verifyingZip, setVerifyingZip] = useState<boolean>(false);
  const [zip, setZip] = useState<string | null>();
  const [stateAndCounty, setStateAndCounty] = useState<{
    state: string;
    county: string;
  } | null>(null);

  const locationText = (location: { state: string; county: string }) => {
    if (location.county == "") {
      return location.state;
    } else {
      return `${location.county}, ${location.state}`;
    }
  };

  const handleZipChange = (value: string) => {
    const isValidZipCode = /^(\d{5}|\d{5}-\d{4})$/.test(value);
    const isPotentialZipCode = /^(\d{0,5}|\d{5}-\d{0,4})$/.test(value);

    if (isValidZipCode || value === "") {
      setZip(value || null);
    } else if (isPotentialZipCode) {
      setZip(value);
    }
  };

  const verifyZip = async () => {
    setVerifyingZip(true);
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=zipcode ${zip}&key=${process.env.GOOGLEMAPS_API_KEY}`
    );
    const data = await response.json();
    const stateAndCountyObj = data.results[0].address_components.reduce(
      (acc: any, curr: any) => {
        if (curr.types.includes("administrative_area_level_1")) {
          acc.state = curr.long_name;
        } else if (curr.types.includes("administrative_area_level_2")) {
          acc.county = curr.long_name;
        }
        return acc;
      },
      { state: "", county: "" }
    );
    setVerifyingZip(false);
    setStateAndCounty(stateAndCountyObj);
    console.log("State and county: ", stateAndCountyObj);
  };

  useEffect(() => {
    const fetchStateAndCounty = async () => {
      if (location.lat !== null && location.lng !== null) {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${process.env.GOOGLEMAPS_API_KEY}`
        );
        const data = await response.json();
        const stateAndCountyObj = data.results[0].address_components.reduce(
          (acc: any, curr: any) => {
            if (curr.types.includes("administrative_area_level_1")) {
              acc.state = curr.long_name;
            } else if (curr.types.includes("administrative_area_level_2")) {
              acc.county = curr.long_name;
            }
            return acc;
          },
          { state: "", county: "" }
        );
        setStateAndCounty(stateAndCountyObj);
      }
    };

    fetchStateAndCounty();
  }, [location]);

  return (
    <>
      {stateAndCounty ? (
        <HStack>
          <Text>{locationText(stateAndCounty)}</Text>
        </HStack>
      ) : (
        <HStack spacing={"15px"}>
          <Input
            placeholder="Enter your zipcode"
            value={zip || ""}
            onChange={(event) => {
              handleZipChange(event.target.value);
            }}
          />
          <Button
            background={"spiritBlue.100"}
            color={"heritageBlue.500"}
            borderRadius={500}
            fontSize="lg"
            isLoading={verifyingZip}
            onClick={() => verifyZip()}
          >
            Verify
          </Button>
        </HStack>
      )}
    </>
  );
};

export default LocationInput;
