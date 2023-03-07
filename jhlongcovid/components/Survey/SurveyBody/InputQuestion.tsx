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
  FormLabel,
  FormErrorMessage,
  Slider,
  SliderMark,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
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
  const getTextAlignment = (index: number, total: number) => {
    // if (index === 0) {
    //   return "start";
    // } else if (index === total - 1) {
    //   return "end";
    // } else {
    //   return "center";
    // }
    return "center";
  };

  return (
    <FormControl isInvalid={inputError}>
      <FormLabel fontSize={"lg"}>{options.title}</FormLabel>
      {options.type === "text" || options.type === "date" ? (
        <>
          <Input
            value={inputValue}
            width={"50%"}
            type={options.type}
            placeholder={options.placeholder}
            focusBorderColor="clear"
            fontSize={"lg"}
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
        <Slider
          aria-label="survey-slider"
          onChange={(value) => {
            setValue(`${value}`);
          }}
          min={options.sliderProps.min}
          max={options.sliderProps.max}
          value={parseInt(inputValue) || options.sliderProps.default}
          step={options.sliderProps.step}
          width={"75%"}
          minW="325px"
        >
          {options.sliderMarks.map((mark: any, key: number) => {
            return (
              <SliderMark
                value={key + 1}
                mt="10px"
                // ml={key === 0 ? "-2px" : "-4.5px"}
                key={key}
              >
                <VStack>
                  <Text>{mark.value}</Text>
                  <Text
                    color={"gray.400"}
                    position="absolute"
                    top={"15px"}
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
          <SliderThumb />
        </Slider>
      )}
    </FormControl>
  );
};

export const InputQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
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
      let reg = new RegExp(validation.regex);
      return reg.test(inputValue);
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
