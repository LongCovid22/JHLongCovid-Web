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
  const [inputValue, setInputValue] = useState("");
  // const [inputValue, setInputValue] = useState<string>("");

  const handleAnswerInit = (val: { choices: string[]; other: string }) => {
    setChecked(val.choices);
    setInputValue(val.other);
    setAnswer(val);
  };

  const handleChoiceInput = (checkedChoices: string[]) => {
    setChecked(checkedChoices);
    setAnswer({ choices: checked, other: inputValue });
  };

  const handleInputOther = (input: string) => {
    setInputValue(input);
    setAnswer({ choices: checked, other: input });
  };

  // Check if there is an already existing answer to provide as a default value
  useEffect(() => {
    handleAnswerInit(currentAnswer as { choices: string[]; other: string });
  }, [currentAnswer, currentQuestion]);

  return (
    <VStack height={"100%"} width={"100%"} spacing={"20px"}>
      <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
        {currentQuestion.question}
      </Text>
      <VStack spacing={"15px"} width={"100%"} align="start">
        <CheckboxGroup
          colorScheme="hopkinsBlue"
          onChange={handleChoiceInput}
          value={checked}
        >
          {Array.isArray(currentQuestion.options) &&
            currentQuestion.options.map((option: any, key: number) => {
              if (option instanceof Object) {
                return (
                  <FormControl key={key}>
                    <FormLabel>{option.title}</FormLabel>
                    <Input
                      value={inputValue}
                      width={"50%"}
                      type={option.type}
                      placeholder={option.placeholder}
                      focusBorderColor="clear"
                      onChange={(event) => handleInputOther(event.target.value)}
                    />
                  </FormControl>
                );
              } else {
                return (
                  <Checkbox key={key} value={option}>
                    {option}
                  </Checkbox>
                );
              }
            })}
        </CheckboxGroup>
      </VStack>
    </VStack>
  );
};
