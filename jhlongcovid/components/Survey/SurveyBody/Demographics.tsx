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
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice";

export const Demographics: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
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
    setDemos(demosCopy);
    setAnswer(demosCopy);
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
    <VStack width={"100%"} height={"100%"} spacing={"20px"}>
      <Text fontSize={"md"} fontWeight={"regular"}>
        {currentQuestion.question}
      </Text>
      <FormControl>
        <FormLabel>Zip code</FormLabel>
        <Input
          type={"text"}
          placeholder={"Enter zip code"}
          focusBorderColor={"clear"}
          value={demos["zip"]}
          onChange={(event) => {
            handleAnswerChange("zip", event.target.value);
          }}
        />
        <FormHelperText>
          Your zip code will not be stored. It will only be used to locate your
          county and state
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Age</FormLabel>
        <NumberInput
          defaultValue={18}
          min={1}
          max={110}
          value={demos.age}
          onChange={(val) => {
            handleAnswerChange("age", val);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Sex</FormLabel>
        <Select
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
      <FormControl>
        <FormLabel>Race</FormLabel>
        <RadioGroup
          value={demos.race}
          onChange={(val) => {
            handleAnswerChange("race", val);
          }}
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={3}>
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
      <Spacer />
    </VStack>
  );
};
