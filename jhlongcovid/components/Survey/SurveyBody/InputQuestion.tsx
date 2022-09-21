import React from "react";
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

interface OptionProps {
  option: any;
  answerType: string;
  index: number;
}

const Option: React.FC<OptionProps> = ({ option, answerType, index }) => {
  return (
    <Stack direction={"column"} width={"100%"}>
      <Text>{option.title}</Text>
      <Input
        width={"50%"}
        type={option.type}
        placeholder={option.placeholder}
      />
    </Stack>
  );
};

const Choices = (answerFormat: any, options: any) => {
  return (
    <FormControl>
      <Option
        key={0}
        option={options}
        answerType={`${answerFormat}`}
        index={0}
      />
    </FormControl>
  );
};

export const InputQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  return (
    <VStack height={"100%"} width={"100%"} spacing={"20px"}>
      <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
        {currentQuestion.question}
      </Text>
      <VStack spacing={"15px"} width={"100%"}>
        {Choices(currentQuestion.answerFormat, currentQuestion.options)}
      </VStack>
    </VStack>
  );
};