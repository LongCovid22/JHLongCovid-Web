import React, { useState, useEffect } from "react";
import { SurveyQuestionProps } from "../SurveyBody";
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
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice/surveySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { QuestionText } from "./QuestionText";

export const MultiChoiceQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
  setErrorPresent,
  setErrorText,
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
    setAnswer({ choices: checkedChoices, other: inputValue });
  };

  const handleInputOther = (input: string) => {
    if (input.length < 50) {
      setInputValue(input);
      setAnswer({ choices: checked, other: input });
      setErrorPresent!(false);
      setErrorText!("");
    } else {
      setErrorPresent!(true);
      setErrorText!("Please enter a valid input less than 50 characters");
    }
  };

  // Check if there is an already existing answer to provide as a default value
  useEffect(() => {
    handleAnswerInit(currentAnswer as { choices: string[]; other: string });
  }, [currentAnswer, currentQuestion]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <VStack height={"100%"} width={"100%"} spacing={"20px"}>
      {/* <Text fontSize={"lg"} fontWeight={"regular"} width={"100%"}>
        {currentQuestion.question}
      </Text> */}
      {QuestionText(currentQuestion.question, currentQuestion.timeframe)}
      <VStack spacing={"20px"} width={"100%"} align="start">
        <CheckboxGroup
          colorScheme="heritageBlue"
          onChange={handleChoiceInput}
          value={checked}
          size="lg"
        >
          {Array.isArray(currentQuestion.options) &&
            currentQuestion.options.map((option: any, key: number) => {
              if (option instanceof Object) {
                return (
                  <FormControl key={key}>
                    <FormLabel fontSize="lg">{option.title}</FormLabel>
                    <Input
                      value={inputValue}
                      width={"50%"}
                      type={option.type}
                      fontSize="xl"
                      max={
                        option.type === "date"
                          ? new Date(
                              new Date().setDate(new Date().getDate() - 1)
                            )
                              .toISOString()
                              .split("T")[0]
                          : undefined
                      }
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
