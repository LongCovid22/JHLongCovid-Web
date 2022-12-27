import Lottie from "lottie-react";
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
import CovidAnimation from "../../../theme/lottie/CovidAnimation.json";
import LottieInfinite from "../../utils/LottieInfinite";

export const Welcome: React.FC<SurveyQuestionProps> = ({ currentQuestion }) => {
  return (
    <VStack width={"100%"} height={"100%"} textAlign="center" spacing="15px">
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        {currentQuestion.question}
      </Text>
      {/* <VStack w={"100%"} spacing="20px" h={"100%"}> */}
      <LottieInfinite animationData={CovidAnimation} loop={false} />
      <VStack w={"80%"}>
        <UnorderedList w={"100%"} spacing={"15px"}>
          {currentQuestion.options.map((key: any, value: any) => {
            return (
              <Fade key={value} in={true} delay={1.0 * value}>
                <ListItem w={"100%"}>{key}</ListItem>
              </Fade>
            );
          })}
        </UnorderedList>
        {/* </VStack> */}
      </VStack>
    </VStack>
  );
};
