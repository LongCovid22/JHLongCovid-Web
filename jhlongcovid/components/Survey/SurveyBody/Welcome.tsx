import Lottie from "lottie-react";
import React, { useEffect } from "react";
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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import CovidAnimation from "../../../theme/lottie/CovidAnimation.json";
import LottieInfinite from "../../utils/LottieInfinite";
import { useAppSelector } from "../../../redux/hooks";
import { selectWidth } from "../../../redux/slices/viewportSlice";
import { SP } from "next/dist/shared/lib/utils";

export const Welcome: React.FC<SurveyQuestionProps> = ({ currentQuestion }) => {
  const width = useAppSelector(selectWidth);

  return (
    <VStack width={"100%"} height={"100%"} textAlign="center" spacing="35px">
      <Image
        src="./bloomberg.logo.vertical.blue.jpg"
        alt="Hopkins Logo"
        w={"300px"}
        mt="5px"
      />
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        {currentQuestion.question}
      </Text>
      {/* <VStack w={"100%"} spacing="20px" h={"100%"}> */}
      {/* <LottieInfinite animationData={CovidAnimation} loop={false} /> */}

      <VStack w={"65%"} spacing={"15px"} alignContent="center">
        {currentQuestion.options.map((key: any, value: any) => {
          return (
            <Fade key={value} in={true} delay={1.0 * value}>
              {value === Object.keys(currentQuestion.options).length - 1 ? (
                <HStack>
                  <Spacer />
                  <Text color={"gray"} fontSize="xs" align={"center"} w="65%">
                    All survey questionnaires were developed in line with the
                    Collaborative Cohort of Cohorts for COVID-19 Research
                    (C4R). 
                  </Text>
                  <Spacer />
                </HStack>
              ) : (
                <Text w={"100%"} fontSize="lg">
                  {key}
                </Text>
              )}
            </Fade>
          );
        })}
      </VStack>
      {/* </VStack> */}
    </VStack>
  );
};
