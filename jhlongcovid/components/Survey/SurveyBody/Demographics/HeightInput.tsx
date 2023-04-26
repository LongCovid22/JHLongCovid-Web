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
} from "@chakra-ui/react";

export type HeightInputProps = {
  demos: {
    age: string;
    race: string;
    sex: string;
    height: string;
    weight: string;
  };
  setDemos: React.Dispatch<
    React.SetStateAction<{
      age: string;
      race: string;
      sex: string;
      height: string;
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

  const isValidWeight = (height: string) => {
    if (height === "") return true;
    const num = parseInt(height);
    if (isNaN(num) || num <= 0 || num > 80) {
      return false;
    }
    return true;
  };

  const handleHeightChange = (value: string) => {
    const demosCopy = { ...demos };
    demosCopy["height"] = value;
    setDemos(demosCopy);
    if (isValidWeight(value)) {
      if (setErrorPresent) setErrorPresent(false);
      setHeightErrorText(null);
      setAnswer(demosCopy);
    } else {
      if (setErrorPresent) setErrorPresent(true);
      setHeightErrorText("Invalid height");
    }
  };

  return (
    <FormControl isInvalid={heightErrorText !== null}>
      <FormLabel fontSize={"18px"}>Height</FormLabel>
      <HStack>
        <PinInput
          value={demos.height}
          onChange={(value) => {
            handleHeightChange(value);
          }}
        >
          <PinInputField />
          <Text>ft</Text>
          <PinInputField />
          <Text>in</Text>
        </PinInput>
      </HStack>
      {heightErrorText !== null && (
        <FormErrorMessage>{heightErrorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};
