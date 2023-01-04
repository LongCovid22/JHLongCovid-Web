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
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"}>
          {currentQuestion.question}
        </Text>
        <Spacer />
        <Flex direction={"column"} w={"100%"} h="100%">
          {/* <CheckCircleIcon color="green.300" w={"200px"} h={"200px"} /> */}
          <Center w={"100%"} h="75%">
            <Lottie
              animationData={GreenCheck}
              style={{
                width: "65%",
                height: "90%",
              }}
              rendererSettings={{
                imagePreserveAspectRatio: "none",
                preserveAspectRatio: "none",
              }}
              loop={false}
              onComplete={() => {
                console.log("DO nothing");
              }}
            />
          </Center>
        </Flex>
        <Spacer />
      </VStack>
    </>
  );
};
