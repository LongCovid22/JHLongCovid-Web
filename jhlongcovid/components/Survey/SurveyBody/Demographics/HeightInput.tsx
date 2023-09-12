import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  HStack,
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

  const [heightFeet, setHeightFeet] = useState<string>("");
  const [heightInches, setHeightInches] = useState<string>("");

  
  function isStringOfIntegers(input: string): boolean {
    // Use a regular expression to check if the string contains only integer digits
    return /^\d+$/.test(input);
  }


  useEffect(() => {
    if (isStringOfIntegers(heightFeet) && isStringOfIntegers(heightInches)) {
      let inchParse = parseInt(heightInches);
      let feetParse = parseInt(heightFeet);

      if (isNaN(inchParse) || isNaN(feetParse) || inchParse < 0 || feetParse <= 0 
      || inchParse > 11 || feetParse > 7) {
        if (setErrorPresent) setErrorPresent(true);
        setHeightErrorText("Invalid height");
      } else {
        if (setErrorPresent) setErrorPresent(false);
        setHeightErrorText(null);
      }
    } else {
      if (setErrorPresent) setErrorPresent(true);
      setHeightErrorText("Invalid height");
    }

    if (heightFeet === "" || heightInches === "") {
      setHeightErrorText(null);
    }


  }, [heightFeet, heightInches, setErrorPresent]);
  
  const handleNewChange = (payload: string, feature: string) => {
    let demosCopy = { ...demos };
    if (feature === "feet") {
      demosCopy["feet"] = payload;
      setHeightFeet(payload);
    } else if (feature === "inches") {
      demosCopy["inches"] = payload;
      setHeightInches(payload);
    }
    setDemos(demosCopy);
    setAnswer(demosCopy);
  }

 
  return (
    <FormControl isInvalid={heightErrorText !== null}>
      <FormLabel fontSize={"18px"}>Height</FormLabel>
      <HStack>
        <Input
          w="50px"
          value={demos.feet}
          data-testid="height-ft-input"
          onChange={(event) => {
            handleNewChange(event.target.value, "feet");
          }}
        />
          <Text>ft</Text>
        <Input
          w="50px"
          value={demos.inches}
          onChange={(event) => {
            handleNewChange(event.target.value, "inches");
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
