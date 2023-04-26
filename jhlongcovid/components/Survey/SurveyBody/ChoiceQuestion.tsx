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
  Select,
} from "@chakra-ui/react";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice/surveySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { validate } from "graphql";
import { QuestionText } from "./QuestionText";

interface OptionProps {
  option: any;
  answerType: string;
  index: number;
  setValue: (val: string) => void;
}

const Choices = (
  answerFormat: any,
  options: any,
  setValue: (val: string, validation?: any) => void,
  choiceValue: string,
  inputValue: string,
  inputError: boolean
) => {
  if (Array.isArray(answerFormat)) {
    return (
      <RadioGroup
        w={"100%"}
        onChange={setValue}
        value={choiceValue}
        key="choiceGroup"
      >
        <VStack align="flex-start" spacing={"20px"} width={"100%"}>
          {answerFormat.map((af: any, key: number) => {
            const option = options[key];
            if (`${af}` === "choice") {
              return (
                <Radio key={key} value={option} size="lg" fontSize={"3xl"}>
                  {option}
                </Radio>
              );
            } else {
              return (
                <Stack direction={"column"} width={"100%"} key={key}>
                  <FormControl isInvalid={inputError}>
                    <FormLabel fontSize={"lg"}>{option.title}</FormLabel>
                    {option.type === "dropdown" ? (
                      <Select
                        value={inputValue}
                        width={"50%"}
                        fontSize="xl"
                        colorScheme={"heritageBlue"}
                        onChange={(event) => {
                          setValue(event.target.value, option.validation);
                        }}
                      >
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"6"}>6</option>
                      </Select>
                    ) : (
                      <Input
                        value={inputValue}
                        width={"50%"}
                        placeholder={option.placeholder}
                        type={option.type}
                        fontSize={"lg"}
                        min={options.type === "date" ? "2020-01-01" : undefined}
                        max={
                          option.type === "date"
                            ? new Date(
                                new Date().setDate(new Date().getDate() - 1)
                              )
                                .toISOString()
                                .split("T")[0]
                            : undefined
                        }
                        focusBorderColor="clear"
                        onChange={(event) => {
                          setValue(event.target.value, option.validation);
                        }}
                      />
                    )}

                    {inputError && option.validation && (
                      <FormErrorMessage>
                        {option.validation.errorText}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Stack>
              );
            }
          })}
        </VStack>
      </RadioGroup>
    );
  } else {
    return null;
  }
};

export const ChoiceQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [choiceValue, setChoiceValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);

  const handleAnswerChange = (val: string, validation?: any) => {
    if (
      Array.isArray(currentQuestion.options) &&
      currentQuestion.options.includes(val)
    ) {
      setChoiceValue(val);
      setInputValue("");
      setInputError(false);
      setAnswer(val);
    } else {
      if (isValidText(validation, val)) {
        setInputError(false);
        setInputValue(val);
        setChoiceValue("");
        setAnswer(val);
      } else {
        setInputError(true);
      }
    }
  };

  const isValidText = (validation: undefined | any, inputValue: string) => {
    if (inputValue !== "" && validation !== undefined) {
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
    }
    return true;
  };

  // Check if there is an already existing answer to provide as a default value
  useEffect(() => {
    handleAnswerChange(currentAnswer as string);
    // if (currentAnswer !== "") {
    //   handleAnswerChange(currentAnswer as string);
    // } else {
    //   setAnswer(currentAnswer);
    // }
  }, [currentAnswer, currentQuestion]);

  return (
    <VStack height={"100%"} width={"100%"} spacing={"20px"}>
      {QuestionText(currentQuestion.question, currentQuestion.timeframe)}
      <VStack spacing={"20px"} width={"100%"}>
        {Choices(
          currentQuestion.answerFormat,
          currentQuestion.options,
          handleAnswerChange,
          choiceValue,
          inputValue,
          inputError
        )}
      </VStack>
    </VStack>
  );
};
