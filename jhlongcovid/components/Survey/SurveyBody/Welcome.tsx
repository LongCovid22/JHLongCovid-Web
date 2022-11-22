import React from "react";
import {
  VStack,
  Text,
  Spacer,
  HStack,
  Image,
  Box,
  UnorderedList,
  ListItem,
  Fade,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";

export const Welcome: React.FC<SurveyQuestionProps> = ({ currentQuestion }) => {
  return (
    <VStack width={"100%"} height={"100%"} textAlign="center" spacing="15px">
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        {currentQuestion.question}
      </Text>
      <HStack w={"100%"} spacing="20px">
        <Image
          src="mobile_health.jpg"
          w={"45%"}
          borderRadius={"15px"}
          align="end"
        />
        <VStack w={"45%"}>
          <UnorderedList w={"100%"} spacing={"15px"}>
            {currentQuestion.options.map((key: any, value: any) => {
              return (
                <Fade key={value} in={true} delay={1.0 * value}>
                  <ListItem w={"100%"}>{key}</ListItem>
                </Fade>
              );
            })}
          </UnorderedList>
        </VStack>
      </HStack>
    </VStack>
  );
};
