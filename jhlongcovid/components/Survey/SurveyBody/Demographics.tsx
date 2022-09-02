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

export const Demographics: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  return (
    <VStack width={"100%"} height={"100%"} spacing={"20px"}>
      <Text fontSize={"md"} fontWeight={"regular"}>
        {currentQuestion.question}
      </Text>
      <FormControl>
        <FormLabel>Zip code</FormLabel>
        <Input type={"number"} placeholder={"Enter zip code"} />
        <FormHelperText>
          Your zip code will not be stored. It will only be used to locate your
          county and state
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Age</FormLabel>
        <NumberInput defaultValue={18} min={1} max={110}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Race</FormLabel>
        <RadioGroup defaultValue="other">
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
              <Radio value="spanish">Hispanic, Latino, or Spanish</Radio>
            </GridItem>
            <GridItem>
              <Radio value="other">Other</Radio>
            </GridItem>
            <GridItem>
              <Radio value="noIdentify">Choose to not identify</Radio>
            </GridItem>
          </Grid>
        </RadioGroup>
      </FormControl>
      <Spacer />
    </VStack>
  );
};
