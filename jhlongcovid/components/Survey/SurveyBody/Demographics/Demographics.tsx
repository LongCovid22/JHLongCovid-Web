import React, { useState, useEffect } from "react";
import {
  VStack,
  Text,
  Spacer,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
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
  PinInput,
  PinInputField,
  FormErrorMessage,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../../SurveyWrapper";
import { useAppSelector } from "../../../../redux/hooks";
import { selectCurrentAnswer } from "../../../../redux/slices/surveySlice/surveySlice";
import { selectWidth } from "../../../../redux/slices/viewportSlice";
import { ConsoleLogger } from "@aws-amplify/core";
import LocationInput from "./LocationInput";

export const Demographics: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const width = useAppSelector(selectWidth);

  const [demos, setDemos] = useState({
    zip: "",
    age: "",
    race: "",
    sex: "",
    height: "",
    weight: "",
  });

  const handleAnswerChange = (key: string, value: string) => {
    let demosCopy = { ...demos };
    demosCopy[key as keyof typeof demosCopy] = value;
    if (key === "zip") {
      if (value.length <= 5) {
        setDemos(demosCopy);
      }
    } else {
      setDemos(demosCopy);
      setAnswer(demosCopy);
    }
  };

  useEffect(() => {
    if (currentAnswer !== null) {
      setDemos(
        currentAnswer as {
          zip: string;
          age: string;
          race: string;
          sex: string;
          height: string;
          weight: string;
        }
      );
    } else {
      setAnswer(currentAnswer);
    }
  }, [currentAnswer]);

  return (
    <VStack width={"100%"} height={"100%"} spacing={"20px"} fontSize="18px">
      <Text fontSize={"lg"} fontWeight={"regular"} w="100%">
        {currentQuestion.question}
      </Text>
      {/* {width < 1000 ? ( */}
      {/* <VStack align={"start"} w="100%"> */}
      <Wrap spacing={4} flexDir={["column", "row"]} align="flex-start">
        <WrapItem>
          <Grid gap={4}>
            <GridItem>
              <LocationInput />
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel fontSize={"18px"}>Age</FormLabel>
                <NumberInput
                  fontSize={"18px"}
                  defaultValue={18}
                  min={1}
                  max={110}
                  value={demos.age}
                  onChange={(val) => {
                    handleAnswerChange("age", val);
                  }}
                >
                  <NumberInputField fontSize={"18px"} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
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
                >
                  <option value={""}></option>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem>
              <HStack w="100%">
                <FormControl>
                  <FormLabel fontSize={"18px"}>Height</FormLabel>
                  <HStack>
                    <PinInput
                      value={demos.height}
                      onChange={(value) => {
                        handleAnswerChange("height", value);
                      }}
                    >
                      <PinInputField />
                      <Text>ft</Text>
                      <PinInputField />
                      <Text>in</Text>
                    </PinInput>
                  </HStack>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={"18px"}>Weight</FormLabel>
                  <HStack>
                    <Input
                      fontSize={"18px"}
                      placeholder="Enter weight"
                      value={demos.weight}
                      onChange={(event) => {
                        handleAnswerChange("weight", event.target.value);
                      }}
                    />
                    <Text>lbs</Text>
                  </HStack>
                </FormControl>
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
