import React, { useEffect, useState } from "react";
import { UserInfo } from "../../SurveyWrapper";
import {
  PinInput,
  FormControl,
  FormLabel,
  HStack,
  PinInputField,
  Text,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export type HeightInputProps = {
  demos: {
    age: string;
    race: string;
    sex: string;
    feet: string;
    inches: string;
    weight: string;
  };
  setDemos: React.Dispatch<
    React.SetStateAction<{
      age: string;
      race: string;
      sex: string;
      feet: string;
      inches: string;
      weight: string;
    }>
  >;
  setAnswer: (answer: any) => void;
  setErrorPresent?: (error: boolean) => void;
};

export const HeightInput: React.FC<HeightInputProps> = ({
  demos,
  setDemos,
  setAnswer,
  setErrorPresent,
}) => {
  const [heightErrorText, setHeightErrorText] = useState<string | null>(null);
  const [feet, setFeet] = useState<string>("");
  const [inches, setInches] = useState<string>("");
  const [totalInches, setTotalInches] = useState<number>(0);
  const [initialRender, setInitialRender] = useState(true);

  const formatFeet = (height: string) => {
    if (height.length > 0) {
      const splitheight = height.split("");
      if (splitheight.length >= 1) {
        return splitheight[0];
      }
    }

    return "";
  };

  const formatInches = (height: string) => {
    if (height.length > 0) {
      const splitheight = height.split("");
      if (splitheight.length == 1) {
        return "0";
      } else if (splitheight.length > 1) {
        return splitheight.splice(1).join("");
      }
    }

    return null;
  };

  const handleFeetChange = (value: string) => {
    const num = parseInt(value);
    if (isNaN(num) || num <= 0 || num > 7) {
      if (setErrorPresent) setErrorPresent(true);
      setHeightErrorText("Invalid height");
    } else {
      if (setErrorPresent) setErrorPresent(false);
      setHeightErrorText(null);
    }
    // setFeet(value);
    let demosCopy = { ...demos };
    demosCopy["feet"] = value;
    setDemos(demosCopy);
  };

  const handleInchesChange = (value: string) => {
    if (value !== "") {
      const num = parseInt(value);
      if (isNaN(num) || num <= 0 || num > 11) {
        if (setErrorPresent) setErrorPresent(true);
        setHeightErrorText("Invalid height");
      } else {
        if (setErrorPresent) setErrorPresent(false);
        setHeightErrorText(null);
      }
    } else {
      if (setErrorPresent) setErrorPresent(false);
      setHeightErrorText(null);
    }

    let demosCopy = { ...demos };
    demosCopy["inches"] = value;
    setDemos(demosCopy);
  };

  // useEffect(() => {
  //   if (initialRender) {
  //     const demosCopy = { ...demos };
  //     if (demosCopy.height !== "") {
  //       const splitHeight = demosCopy.height.split("");
  //       if (splitHeight.length === 1) {
  //         handleFeetChange(splitHeight[0]);
  //       } else {
  //         handleFeetChange(splitHeight[0]);
  //         handleInchesChange(splitHeight.slice(1).join(""));
  //       }
  //     }
  //     setInitialRender(false);
  //   }
  // }, [demos]);

  // // When it gets loaded and when feet and inches change
  // useEffect(() => {
  //   const handleHeightChange = (feet: string, inches: string) => {
  //     const demosCopy = { ...demos };
  //     demosCopy["height"] = feet + inches;
  //     setDemos(demosCopy);
  //   };

  //   handleHeightChange(feet, inches);
  // }, [feet, inches]);

  return (
    <FormControl isInvalid={heightErrorText !== null}>
      <FormLabel fontSize={"18px"}>Height</FormLabel>
      <HStack>
        <Input
          w="50px"
          value={demos.feet}
          data-testid="height-ft-input"
          onChange={(event) => {
            handleFeetChange(event.target.value);
            // handleHeightChange(value);
          }}
        />
          {/* <PinInputField /> */}
          <Text>ft</Text>
        {/* </PinInput> */}
        <Input
          w="50px"
          value={demos.inches}
          onChange={(event) => {
            handleInchesChange(event.target.value);
          }}
          data-testid="height-in-input"
        />
        <Text>in</Text>
      </HStack>
      {heightErrorText !== null && (
        <FormErrorMessage>{heightErrorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};
