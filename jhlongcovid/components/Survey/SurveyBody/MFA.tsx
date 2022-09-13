import React from "react";
import {
  VStack,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
  Input,
  FormControl,
  FormLabel,
  List,
  Stack,
  HStack,
  ListIcon,
  FormHelperText,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";

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

export const MFA: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
          {currentQuestion.question}
        </Text>
        <Option
          option={currentQuestion.options}
          answerType={currentQuestion.answerFormat}
          index={0}
        />
      </VStack>
    </>
  );
};
