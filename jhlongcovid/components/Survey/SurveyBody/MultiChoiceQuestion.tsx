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
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export const MultiChoiceQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [checked, setChecked] = useState<string[]>([]);
  // const [inputValue, setInputValue] = useState<string>("");

  const handleAnswerChange = (val: string[]) => {
    setChecked(val);
    setAnswer(val);
  };

  useEffect(() => {
    if (currentAnswer !== null) {
      handleAnswerChange(currentAnswer as string[]);
    } else {
      setAnswer(currentAnswer);
    }
  }, [currentAnswer]);

  return (
    <VStack height={"100%"} width={"100%"} spacing={"20px"}>
      <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
        {currentQuestion.question}
      </Text>
      <VStack spacing={"15px"} width={"100%"} align="start">
        <CheckboxGroup
          colorScheme="hopkinsBlue"
          onChange={handleAnswerChange}
          value={checked}
        >
          {Array.isArray(currentQuestion.options) &&
            currentQuestion.options.map((option: any, key: number) => {
              return (
                <Checkbox key={key} value={option}>
                  {option}
                </Checkbox>
              );
            })}
        </CheckboxGroup>
      </VStack>
    </VStack>
  );
};
