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
  HStack,
  ListIcon,
  FormHelperText,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const ThankYou: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"}>
          {currentQuestion.question}
        </Text>
        <Spacer />
        <Flex direction={"column"}>
          <CheckCircleIcon color="green.300" w={"200px"} h={"200px"} />
        </Flex>
        <Spacer />
      </VStack>
    </>
  );
};
