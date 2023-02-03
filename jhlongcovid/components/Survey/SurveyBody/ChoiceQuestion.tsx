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
} from "@chakra-ui/react";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice/surveySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { validate } from "graphql";

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
        <VStack align="flex-start" spacing={"15px"} width={"100%"}>
          {answerFormat.map((af: any, key: number) => {
            const option = options[key];
            if (`${af}` === "choice") {
              return (
                <Radio key={key} value={option}>
                  {option}
                </Radio>
              );
            } else {
              return (
                <Stack direction={"column"} width={"100%"} key={key}>
                  <FormControl isInvalid={inputError}>
                    <FormLabel>{option.title}</FormLabel>
                    <Input
                      value={inputValue}
                      width={"50%"}
                      placeholder={option.placeholder}
                      type={option.type}
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
      return reg.test(inputValue);
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
      <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
        {currentQuestion.question}
      </Text>
      <VStack spacing={"15px"} width={"100%"}>
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
