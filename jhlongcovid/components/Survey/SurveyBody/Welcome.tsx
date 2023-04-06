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
  Button,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import CovidAnimation from "../../../theme/lottie/CovidAnimation.json";
import LottieInfinite from "../../utils/LottieInfinite";
import { useAppSelector } from "../../../redux/hooks";
import { selectHeight, selectWidth } from "../../../redux/slices/viewportSlice";
import { SP } from "next/dist/shared/lib/utils";

export const Welcome: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  handleQuestionChange,
}) => {
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);
  console.log("Height: ", height);

  return (
    <VStack
      width={"100%"}
      height={"100%"}
      textAlign="center"
      spacing={height < 1000 ? "25px" : "35px"}
    >
      {height < 700 && width > 750 ? (
        <HStack w="65%">
          <Image
            src="./bloomberg.logo.vertical.blue.jpg"
            alt="Hopkins Logo"
            w={height < 1000 ? "200px" : "250px"}
            mt="5px"
          />
          <Text fontSize={height < 1055 ? "3xl" : "4xl"} fontWeight={"bold"}>
            {currentQuestion.question}
          </Text>
        </HStack>
      ) : (
        <>
          <Image
            src="./bloomberg.logo.vertical.blue.jpg"
            alt="Hopkins Logo"
            w={height < 1000 ? "250px" : "300px"}
            mt="5px"
          />
          <Text fontSize={height < 1055 ? "3xl" : "4xl"} fontWeight={"bold"}>
            {currentQuestion.question}
          </Text>
        </>
      )}

      {/* <VStack w={"100%"} spacing="20px" h={"100%"}> */}
      {/* <LottieInfinite animationData={CovidAnimation} loop={false} /> */}

      <VStack
        w={"85%"}
        spacing={height < 1000 ? "10px" : "15px"}
        alignContent="center"
      >
        {currentQuestion.options.map((key: any, value: any) => {
          return (
            <Text
              w={"100%"}
              fontSize={height < 1055 ? "lg" : "xl"}
              key={value}
              lineHeight={height < 1055 ? "7" : "8"}
            >
              {key}
            </Text>
            // <Fade key={value} in={true} delay={1.0 * value}>
            //   {value === Object.keys(currentQuestion.options).length - 1 ? (
            //     <HStack>
            //       <Spacer />
            //       <Text color={"gray"} fontSize="xs" align={"center"} w="65%">
            //         All survey questionnaires were developed in line with the
            //         Collaborative Cohort of Cohorts for COVID-19 Research
            //         (C4R).
            //       </Text>
            //       <Spacer />
            //     </HStack>
            //   ) : (

            //   )}
            // </Fade>
          );
        })}
        <Spacer />
        {height > 852 && (
          <Button
            colorScheme="heritageBlue"
            borderRadius={500}
            onClick={() => {
              if (handleQuestionChange) handleQuestionChange("next");
            }}
            size="lg"
            fontSize={"2xl"}
          >
            Begin Survey
          </Button>
        )}
      </VStack>
      {/* </VStack> */}
    </VStack>
  );
};
