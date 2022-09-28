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
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

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
  console.log("Options: ", options);
  return (
    <FormControl isInvalid={inputError}>
      <FormLabel>{options.title}</FormLabel>
      <Input
        value={inputValue}
        width={"50%"}
        type={options.type}
        placeholder={options.placeholder}
        focusBorderColor="clear"
        onChange={(event) => {
          setValue(event.target.value, options.validation);
        }}
      />
      {inputError && options.validation && (
        <FormErrorMessage>{options.validation.errorText}</FormErrorMessage>
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

  useEffect(() => {
    if (currentAnswer !== null) {
      handleAnswerChange(currentAnswer as string);
    } else {
      setAnswer(null);
    }
  }, [currentAnswer]);

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
          inputValue,
          inputError
        )}
      </VStack>
    </VStack>
  );
};
