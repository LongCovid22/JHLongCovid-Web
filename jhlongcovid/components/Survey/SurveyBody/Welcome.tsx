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

export const Welcome: React.FC<SurveyQuestionProps> = ({ currentQuestion }) => {
  const width = useAppSelector(selectWidth);

  return (
    <VStack width={"100%"} height={"100%"} textAlign="center" spacing="35px">
      <Wrap w="100%" justify={"center"} spacing="25px">
        <WrapItem>
          <Image src="./crVertical.png" w="275px" alt="Hopkins Logo" mt="5px" />
        </WrapItem>
        <WrapItem>
          <Image
            src="./bloomberg.logo.vertical.blue.jpg"
            alt="Hopkins Logo"
            w={"300px"}
            mt="5px"
          />
        </WrapItem>
      </Wrap>
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        {currentQuestion.question}
      </Text>
      {/* <VStack w={"100%"} spacing="20px" h={"100%"}> */}
      {/* <LottieInfinite animationData={CovidAnimation} loop={false} /> */}

      <VStack w={"80%"}>
        <VStack w={"100%"} spacing={"15px"}>
          {currentQuestion.options.map((key: any, value: any) => {
            return (
              <Fade key={value} in={true} delay={1.0 * value}>
                <Text w={"100%"} fontSize="xl">
                  {key}
                </Text>
              </Fade>
            );
          })}
        </VStack>
        {/* </VStack> */}
      </VStack>
    </VStack>
  );
};
