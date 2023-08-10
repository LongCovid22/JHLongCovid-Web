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
  const [heightErrorText, setWeightErrorText] = useState<string | null>(null);

  const isValidWeight = (weight: string) => {
    if (weight === "") return true;
    const num = parseInt(weight);
    if (isNaN(num) || num < 90 || num > 600) {
      return false;
    }
    return true;
  };

  const handleWeightChange = (value: string) => {
    const demosCopy = { ...demos };
    demosCopy["weight"] = value;
    setDemos(demosCopy);
    if (isValidWeight(value)) {
      if (setErrorPresent) setErrorPresent(false);
      setWeightErrorText(null);
      setAnswer(demosCopy);
    } else {
      if (setErrorPresent) setErrorPresent(true);
      setWeightErrorText("Invalid weight");
    }
  };

  return (
    <FormControl isInvalid={heightErrorText !== null}>
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
      {heightErrorText !== null && (
        <FormErrorMessage>{heightErrorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};
