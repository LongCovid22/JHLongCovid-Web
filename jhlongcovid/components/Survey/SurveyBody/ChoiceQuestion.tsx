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
import { ConsoleLogger } from "@aws-amplify/core";

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
  value: string
) => {
  if (Array.isArray(answerFormat)) {
    return (
      <RadioGroup w={"100%"} onChange={setValue} value={value}>
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
                <Stack direction={"column"} width={"100%"}>
                  <Text>{option.title}</Text>
                  <Input
                    key={key}
                    width={"50%"}
                    type={option.type}
                    placeholder={option.placeholder}
                    onChange={(event) => {
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
  defaultValue,
}) => {
  const [value, setValue] = useState<string>("");
  const handleAnswerChange = (val: string) => {
    console.log("Setting answer to: ", val);
    setValue(val);
    setAnswer(val);
  };

  useEffect(() => {
    if (
      Array.isArray(currentQuestion.options) &&
      currentQuestion.options.includes(currentQuestion.answer)
    ) {
      setValue(currentQuestion.answer);
    }
  }, []);

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
          value
        )}
        {/* {Array.isArray(currentQuestion.answerFormat) &&
          currentQuestion.answerFormat.map((af: any, key: number) => {
            if (`${af}` === "input") {
              const option = currentQuestion.options[key];
              return (
                // <Stack direction={"column"} width={"100%"}>
                //   <Text>{option.title}</Text>

                // </Stack>
                <Input
                  key={8}
                  width={"50%"}
                  type={option.type}
                  placeholder={option.placeholder}
                  onClick={() => console.log("Hey I was clicked")}
                  onChange={(event) => {
                    console.log("chagnin");
                    handleAnswerChange(event.target.value);
                  }}
                />
              );
            } else {
              return null;
            }
          })} */}
      </VStack>
    </VStack>
  );
};
