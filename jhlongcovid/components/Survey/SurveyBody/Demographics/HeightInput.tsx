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
  const [feet, setFeet] = useState<string>("");
  const [inches, setInches] = useState<string>("");
  const [totalInches, setTotalInches] = useState<number>(0);

  const isValidWeight = (height: string) => {
    if (height === "") return true;
    const num = parseInt(height);
    if (isNaN(num) || num <= 0 || num > 80) {
      return false;
    }
    return true;
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
    setFeet(value);
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

    setInches(value);
  };

  useEffect(() => {
    const handleHeightChange = (feet: string, inches: string) => {
      const demosCopy = { ...demos };
      demosCopy["height"] = feet + inches;
      setDemos(demosCopy);
      // if (isValidWeight(value)) {
      //   if (setErrorPresent) setErrorPresent(false);
      //   setHeightErrorText(null);
      //   setAnswer(demosCopy);
      // } else {
      //   if (setErrorPresent) setErrorPresent(true);
      //   setHeightErrorText("Invalid height");
      // }
    };

    handleHeightChange(feet, inches);
  }, [feet, inches]);

  return (
    <FormControl isInvalid={heightErrorText !== null}>
      <FormLabel fontSize={"18px"}>Height</FormLabel>
      <HStack>
        <PinInput
          value={feet}
          onChange={(value) => {
            handleFeetChange(value);
            // handleHeightChange(value);
          }}
        >
          <PinInputField />
          <Text>ft</Text>
        </PinInput>
        <Input
          w="50px"
          value={inches}
          onChange={(event) => {
            handleInchesChange(event.target.value);
          }}
        />
        <Text>in</Text>
      </HStack>
      {heightErrorText !== null && (
        <FormErrorMessage>{heightErrorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};
