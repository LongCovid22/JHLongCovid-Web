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
  setValue: (val: string) => void,
  inputValue: string
) => {
  return (
    <FormControl>
      <Stack direction={"column"} width={"100%"}>
        <Text>{options.title}</Text>
        <Input
          width={"50%"}
          value={inputValue}
          type={options.type}
          placeholder={options.placeholder}
          onChange={(event) => setValue(event.target.value)}
        />
      </Stack>
    </FormControl>
  );
};

export const InputQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAnswerChange = (val: string) => {
    setInputValue(val);
    setAnswer(val);
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
          inputValue
        )}
      </VStack>
    </VStack>
  );
};
