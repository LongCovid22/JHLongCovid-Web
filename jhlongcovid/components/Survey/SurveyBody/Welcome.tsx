import React from "react";
import { VStack, Text, Spacer } from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";

export const Welcome: React.FC<SurveyQuestionProps> = ({ currentQuestion }) => {
  return (
    <VStack width={"100%"} height={"100%"} textAlign="center">
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        {currentQuestion.question}
      </Text>
      <Spacer />
      <Text fontSize={"sm"} fontWeight={"light"}>
        {currentQuestion.options[0]}
      </Text>
      <Spacer />
    </VStack>
  );
};
