import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  VStack,
  Button,
  Text,
  Input,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { selectLocation } from "../../../../redux/slices/locationSlice";
import {
  checkEmptyLocationData,
  getCountyAndStateWithLatLng,
  getCountyAndStateWithZip,
  LocationData,
  NotInUSError,
} from "../../SurveyFunctions";
import { useAppDispatch } from "../../../../redux/hooks";
import { setLocation } from "../../../../redux/slices/locationSlice";

interface LocationInputProps {
  location?: LocationData;
  setLocationData?: React.Dispatch<React.SetStateAction<LocationData>>;
}

const LocationInput: React.FC<LocationInputProps> = ({
  location,
  setLocationData,
}) => {
  const dispatch = useAppDispatch();
  const locationLatLng = useSelector(selectLocation);
  const [verifyingZip, setVerifyingZip] = useState<boolean>(false);
  const [zip, setZip] = useState<string | null>();
  const [stateAndCounty, setStateAndCounty] = useState<{
    state: string;
    county: string;
  } | null>(null);
  const [zipError, setZipError] = useState<boolean>(false);
  const [zipErrorText, setZipErrorText] = useState<string>("");

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
    if (zip) {
      try {
        const ld = await getCountyAndStateWithZip(
          zip,
          process.env.GOOGLEMAPS_API_KEY!
        );
        if (checkEmptyLocationData(ld)) {
          setZipError(true);
          setZipErrorText(
            "Unable to find your loaction. Please try another zip code."
          );
        } else {
          setZipError(false);
          setStateAndCounty({ state: ld.state, county: ld.county });
          if (setLocationData) setLocationData(ld);
        }
      } catch (error) {
        if (error instanceof NotInUSError) {
          setZipErrorText(`${error.message}. Please try another zip code.`);
        } else {
          setZipErrorText(
            "Unable to find your loaction. Please try another zip code."
          );
        }
        setZipError(true);
      }
    }
    setVerifyingZip(false);
  };

  useEffect(() => {
    const fetchStateAndCounty = async () => {
      if (location && !checkEmptyLocationData(location)) {
        setStateAndCounty({ state: location.state, county: location.county });
      } else {
        if (locationLatLng.lat !== null && locationLatLng.lng !== null) {
          try {
            const ld = await getCountyAndStateWithLatLng(
              locationLatLng,
              process.env.GOOGLEMAPS_API_KEY!
            );
            setZipError(false);
            setZipErrorText("");
            if (!checkEmptyLocationData(ld)) {
              setStateAndCounty({ state: ld.state, county: ld.county });
              if (setLocationData) setLocationData(ld);
            }
          } catch (error) {
            console.error("Error fetching location data with lat long", error);
          }
        }
      }
    };

    fetchStateAndCounty();
  }, [locationLatLng]);

  return (
    <>
      <FormControl isInvalid={zipError}>
        <FormLabel fontSize={"18px"}>Location</FormLabel>
        {/* <Input
              fontSize={"18px"}
              type={"text"}
              placeholder={"Enter zip code"}
              focusBorderColor={"clear"}
              value={demos["zip"]}
              onChange={(event) => {
                handleAnswerChange("zip", event.target.value);
              }}
            /> */}
        {stateAndCounty ? (
          <VStack align={"start"} spacing="5px">
            <HStack>
              <Text>{locationText(stateAndCounty)}</Text>
            </HStack>
            <Button
              color={"spiritBlue.500"}
              fontSize="md"
              variant="link"
              onClick={() => {
                setStateAndCounty(null);
                if (setLocationData) {
                  setLocationData({
                    state: "",
                    stateAbbrev: "",
                    stateLat: 0.0,
                    stateLong: 0.0,
                    county: "",
                    countyLat: 0.0,
                    countyLong: 0.0,
                  });
                }
              }}
            >
              Change location
            </Button>
          </VStack>
        ) : (
          <VStack align="start" w="100%" spacing="5px">
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
            <Button
              color={"spiritBlue.500"}
              fontSize="md"
              variant="link"
              onClick={() => {
                setVerifyingZip(true);
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    (position) => {
                      setVerifyingZip(false);
                      dispatch(
                        setLocation({
                          lat: position.coords.latitude,
                          lng: position.coords.longitude,
                        })
                      );
                    },
                    (error) => {
                      setVerifyingZip(false);
                      console.log("ERROR GETTING LOCATION: ", error);
                    }
                  );
                }
              }}
            >
              Find My Location
            </Button>
          </VStack>
        )}
        {/* <FormHelperText>
              Your zip code will not be stored. It will only be used to locate
              your county and state
            </FormHelperText> */}
        {zipError && <FormErrorMessage>{zipErrorText}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export default LocationInput;
