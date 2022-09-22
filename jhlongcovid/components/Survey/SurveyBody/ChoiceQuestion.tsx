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
  setValue: (val: string) => void;
}

const Choices = (
  answerFormat: any,
  options: any,
  setValue: (val: string) => void,
  choiceValue: string,
  inputValue: string
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
                  <Text>{option.title}</Text>
                  <Input
                    value={inputValue}
                    width={"50%"}
                    type={option.type}
                    placeholder={option.placeholder}
                    onChange={(event) => {
                      console.log("On change");
                      setValue(event.target.value);
                    }}
                  />
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
  const handleAnswerChange = (val: string) => {
    if (
      Array.isArray(currentQuestion.options) &&
      currentQuestion.options.includes(val)
    ) {
      setChoiceValue(val);
      setInputValue("");
    } else {
      setInputValue(val);
      setChoiceValue("");
    }
    setAnswer(val);
  };

  useEffect(() => {
    if (currentAnswer !== null) {
      handleAnswerChange(currentAnswer as string);
    } else {
      setAnswer(currentAnswer);
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
          choiceValue,
          inputValue
        )}
      </VStack>
    </VStack>
  );
};
