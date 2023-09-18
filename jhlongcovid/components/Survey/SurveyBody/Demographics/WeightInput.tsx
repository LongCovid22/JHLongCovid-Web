import React, { useState } from "react";
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
import { isString } from "cypress/types/lodash";

export type WeightInputProps = {
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

export const WeightInput: React.FC<WeightInputProps> = ({
  demos,
  setDemos,
  setAnswer,
  setErrorPresent,
}) => {
  const [weightErrorText, setWeightErrorText] = useState<string | null>(null);


  function isStringOfIntegers(input: string): boolean {
    // Use a regular expression to check if the string contains only integer digits
    return /^\d+$/.test(input);
  }

  const handleWeightChange = (value: string) => {
    let num = value;    
    if (isStringOfIntegers(value)) {
      let checkNum = parseInt(value);
      if (isNaN(checkNum) || checkNum <= 90 || checkNum > 600) {
        if (setErrorPresent) setErrorPresent(true);
        setWeightErrorText("Invalid weight");
      } else {
        if (setErrorPresent) setErrorPresent(false);
        setWeightErrorText(null);
      }
    } else {
      if (setErrorPresent) setErrorPresent(true);
      setWeightErrorText("Invalid weight");
    }
    let demosCopy = { ...demos };
    demosCopy["weight"] = num;
    setDemos(demosCopy);
    setAnswer(demosCopy);
  };

  return (
    <FormControl isInvalid={weightErrorText !== null}>
      <FormLabel fontSize={"18px"}>Weight</FormLabel>
      <HStack>
        <Input
          fontSize={"18px"}
          placeholder="Enter weight"
          value={demos.weight}
          onChange={(event) => {
            handleWeightChange(event.target.value);
          }}
          data-testid="weight-input"
        />
        <Text>lbs</Text>
      </HStack>
      {weightErrorText !== null && (
        <FormErrorMessage>{weightErrorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};
