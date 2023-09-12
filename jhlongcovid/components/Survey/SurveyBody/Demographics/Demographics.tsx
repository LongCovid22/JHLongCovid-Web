import React, { useState, useEffect } from "react";
import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  RadioGroup,
  Radio,
  NumberInputStepper,
  NumberDecrementStepper,
  Select,
  Grid,
  GridItem,
  HStack,
  FormErrorMessage,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../../SurveyBody";
import { useAppSelector } from "../../../../redux/hooks";
import { selectCurrentAnswer } from "../../../../redux/slices/surveySlice/surveySlice";
import { selectWidth } from "../../../../redux/slices/viewportSlice";
import { ConsoleLogger } from "@aws-amplify/core";
import LocationInput from "./LocationInput";
import { HeightInput } from "./HeightInput";
import { WeightInput } from "./WeightInput";
import { AgeInput } from "./AgeInput";
import { isString } from "cypress/types/lodash";

export const Demographics: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
  location,
  setLocationData,
  setAgeDemoError,
  setHeightDemoError,
  setWeightDemoError,
  setErrorPresent,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const width = useAppSelector(selectWidth);

  const [demos, setDemos] = useState({
    age: "",
    race: "",
    sex: "",
    feet: "",
    inches: "",
    weight: "",
  });

  const [ageErrorText, setAgeErrorText] = useState<string | null>(null);


  function isStringOfIntegers(input: string): boolean {
    // Use a regular expression to check if the string contains only integer digits
    return /^\d+$/.test(input);
  }


  function isValidPositiveInteger(input: string): boolean {
    if (!isStringOfIntegers(input)) {
      return false;
    }
    const parsedNumber = parseInt(input, 10); //Parse base 10
    return !isNaN(parsedNumber) && parsedNumber >= 12 && parsedNumber <= 100;
  }

  const handleAnswerChange = (key: string, value: string) => {
    let demosCopy = { ...demos };
    demosCopy[key as keyof typeof demosCopy] = value;
    
    if (key == "age") {
      setDemos(demosCopy);
      if (isValidPositiveInteger(value) || value === "") {
        if (setAgeDemoError) {setAgeDemoError(false)};
        setAgeErrorText(null);
        setAnswer(demosCopy);
      } else {
        if (setAgeDemoError) {setAgeDemoError(true)};
        setAgeErrorText("Age must be valid number between 12 and 100");
      }
    } 
    
    else if (key === "zip") {
      if (value.length <= 5) {
        setDemos(demosCopy);
      }
    } else {
      setDemos(demosCopy);
      setAnswer(demosCopy);
    }
  };

  useEffect(() => {
    // console.log("current answer", currentAnswer);
    if (currentAnswer !== null) {
      setDemos(
        currentAnswer as {
          email: string;
          age: string;
          race: string;
          sex: string;
          feet: string;
          inches: string;
          weight: string;
        }
      );
    } else {
      setAnswer(currentAnswer);
    }
  }, [currentAnswer]);

  return (
    <VStack spacing={"20px"} fontSize="18px">
      <Text fontSize={"lg"} fontWeight={"regular"} w="100%">
        {currentQuestion.question}
      </Text>
      <Wrap spacing={4} flexDir={"column"} align="flex-start" w="100%">
        <WrapItem>
          <Grid gap={4}>
            <GridItem>
              <LocationInput
                location={location}
                setLocationData={setLocationData}
              />
            </GridItem>
            <GridItem>
              <AgeInput
                    demos={demos}
                    setDemos={setDemos}
                    setAnswer={setAnswer}
                    setAgeDemoError={setAgeDemoError}
                  />
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel fontSize={"18px"}>Sex</FormLabel>
                <Select
                  fontSize={"18px"}
                  value={demos.sex}
                  onChange={(event) => {
                    handleAnswerChange("sex", event.target.value);
                  }}
                  data-testid="sex-input"
                >
                  <option value={""}></option>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem>
              <HStack w="100%" align={"top"} spacing="0px">
                <HeightInput
                  demos={demos}
                  setDemos={setDemos}
                  setAnswer={setAnswer}
                  setErrorPresent={setHeightDemoError}
                />
                <WeightInput
                  demos={demos}
                  setDemos={setDemos}
                  setAnswer={setAnswer}
                  setErrorPresent={setWeightDemoError}
                />
              </HStack>
            </GridItem>
          </Grid>
        </WrapItem>
        <WrapItem>
          <FormControl>
            <FormLabel fontSize={"18px"}>Race</FormLabel>
            <RadioGroup
              value={demos.race}
              onChange={(val) => {
                handleAnswerChange("race", val);
              }}
              size="lg"
              data-testid="race-input"
            >
              <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                <GridItem>
                  <Radio value="white">White</Radio>
                </GridItem>
                <GridItem>
                  <Radio value="black">Black or African American</Radio>
                </GridItem>
                <GridItem>
                  <Radio value="asian">Asian</Radio>
                </GridItem>
                <GridItem>
                  <Radio value="native">
                    Native American, Native Hawaiian or other Pacific Islander
                  </Radio>
                </GridItem>
                <GridItem>
                  <Radio value="hispanic">Hispanic, Latino, or Spanish</Radio>
                </GridItem>
                <GridItem>
                  <Radio value="other">Other</Radio>
                </GridItem>
                <GridItem>
                  <Radio value="none">Choose to not identify</Radio>
                </GridItem>
              </Grid>
            </RadioGroup>
          </FormControl>
        </WrapItem>
      </Wrap>
    </VStack>
  );
};
