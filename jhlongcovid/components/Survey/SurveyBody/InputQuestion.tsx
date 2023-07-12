import React, { useState, useEffect } from "react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import {
  VStack,
  Text,
  FormControl,
  Radio,
  Input,
  RadioGroup,
  Stack,
  Spacer,
  HStack,
  FormLabel,
  FormErrorMessage,
  Slider,
  SliderMark,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Center,
} from "@chakra-ui/react";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice/surveySlice";
import { useAppSelector } from "../../../redux/hooks";
import { QuestionText } from "./QuestionText";

interface OptionProps {
  option: any;
  answerType: string;
  index: number;
}

const Choices = (
  answerFormat: any,
  options: any,
  setValue: (val: string, validation?: any) => void,
  inputValue: string,
  inputError: boolean
) => {
  return (
    <FormControl isInvalid={inputError}>
      {/* <FormLabel fontSize={"lg"}>{options.title}</FormLabel> */}
      {options.type === "text" ||
      options.type === "date" ||
      options.type === "number" ? (
        <>
          <FormLabel fontSize={"lg"}>{options.title}</FormLabel>
          <Input
            value={inputValue}
            width={"50%"}
            type={options.type}
            placeholder={options.placeholder}
            focusBorderColor="clear"
            fontSize={"xl"}
            min={
              options.type === "date"
                ? new Date("2020-01-01").toISOString().split("T")[0]
                : undefined
            }
            max={
              options.type === "date"
                ? new Date(new Date().setDate(new Date().getDate() - 1))
                    .toISOString()
                    .split("T")[0]
                : undefined
            }
            onChange={(event) => {
              setValue(event.target.value, options.validation);
            }}
          />
          {inputError && options.validation && (
            <FormErrorMessage>{options.validation.errorText}</FormErrorMessage>
          )}
        </>
      ) : (
        <VStack w="75%" align={"start"}>
          <FormLabel fontSize={"xl"}>{options.title}</FormLabel>
          <Slider
            aria-label="survey-slider"
            onChange={(value) => {
              setValue(`${value}`);
            }}
            min={options.sliderProps.min}
            max={options.sliderProps.max}
            value={parseInt(inputValue) || options.sliderProps.default}
            step={options.sliderProps.step}
            width={"100%"}
            colorScheme="spiritBlue"
            // minW="325px"
          >
            {options.sliderMarks.map((mark: any, key: number) => {
              return (
                <SliderMark
                  value={key + 1}
                  mt="10px"
                  // ml={key === 0 ? "-2px" : "-4.5px"}
                  key={key}
                  fontSize="xl"
                >
                  <VStack>
                    <Text>{mark.value}</Text>
                    <Text
                      color={"gray.400"}
                      position="absolute"
                      top={"20px"}
                      fontSize="lg"
                      // alignSelf={getTextAlignment(
                      //   key,
                      //   options.sliderMarks.length
                      // )}
                      align="center"
                    >
                      {mark.secondaryLabel}
                    </Text>
                  </VStack>
                </SliderMark>
              );
            })}
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb bgColor={"heritageBlue.600"} />
          </Slider>
        </VStack>
      )}
    </FormControl>
  );
};

export const InputQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
  setErrorPresent,
  setErrorText
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);

  const handleAnswerChange = (val: string, validation?: any) => {
    if (isValidText(validation, val)) {
      setInputError(false);
      setInputValue(val);
      setAnswer(val);
    } else {
      setInputError(true);
    }
  };

  const isValidText = (validation: undefined | any, inputValue: string) => {
    if (inputValue !== "" && validation !== undefined) {
      // const regexString = validation.regex.replace(
      //   /[.*+\-?^${}()|[\]\\]/g,
      //   "\\$&"
      // );
      let reg = new RegExp(validation.regex);
      let passesRegex = reg.test(inputValue);

      if (validation.type && validation.type === "number") {
        const num = parseInt(inputValue);
        if (validation.max && validation.min) {
          if (isNaN(num) || num > validation.max || num < validation.min) {
            return false;
          } else {
            return true && passesRegex;
          }
        } else if (validation.min) {
          if (isNaN(num) || num < validation.min) {
            return false;
          } else {
            return true && passesRegex;
          }
        } else if (validation.max) {
          if (isNaN(num) || num > validation.max) {
            return false;
          } else {
            return true && passesRegex;
          }
        }
      }

      return passesRegex;
    }
    return true;
  };

  // Check if there is an already existing answer to provide as a default value
  useEffect(() => {
    if (currentAnswer !== "") {
      handleAnswerChange(currentAnswer as string);
    } else {
      setAnswer(currentAnswer);
    }
  }, [currentAnswer, currentQuestion]);

  return (
    <VStack height={"100%"} width={"100%"} spacing={"20px"}>
      {QuestionText(currentQuestion.question, currentQuestion.timeframe)}
      <VStack spacing={"15px"} width={"100%"}>
        {Choices(
          currentQuestion.answerFormat,
          currentQuestion.options,
          handleAnswerChange,
          inputValue,
          inputError
        )}
      </VStack>
    </VStack>
  );
};
