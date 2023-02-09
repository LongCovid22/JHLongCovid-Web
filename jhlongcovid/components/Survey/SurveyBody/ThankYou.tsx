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
  Center,
  Image,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Lottie from "lottie-react";
import GreenCheck from "../../../theme/lottie/GreenCheck.json";

export const ThankYou: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  return (
    <>
      <VStack
        height={"100%"}
        width={"100%"}
        textAlign="center"
        spacing={"45px"}
      >
        <Image
          src="./bloomberg.logo.vertical.blue.jpg"
          alt="Hopkins Logo"
          w={"300px"}
          mt="5px"
        />
        <CheckCircleIcon
          boxSize={"75"}
          color="green.300"
          animation={"ease-in"}
        />

        <VStack w={"70%"} spacing="20px" fontSize={"xl"}>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Thank You!
          </Text>
          <Text>{currentQuestion.question}</Text>
        </VStack>
        <Spacer />
      </VStack>
    </>
  );
};
