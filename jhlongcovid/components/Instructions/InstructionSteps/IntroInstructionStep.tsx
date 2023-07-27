import React from "react";
import {
  Spacer,
  Flex,
  VStack,
  Text,
  Image,
  HStack,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import { InstructionStep, InstructionStepProps } from "../Instructions";

export const IntroInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
}) => {
  return (
    <VStack height={"100%"} width={"100%"} textAlign="center" spacing={"35px"}>
      {/* <Image
        src="./bloomberg.logo.vertical.blue.jpg"
        alt="Hopkins Logo"
        w={"300px"}
        mt="5px"
      /> */}

      <Text fontSize={"4xl"} fontWeight={"bold"}>
        Welcome to the Johns Hopkins Long COVID Dashboard!
      </Text>

      <VStack w={"85%"} spacing="20px" fontSize={"xl"}>
        {/* <Text>
          The COVID-19 pandemic has caused unprecedented health and social
          challenges worldwide. To better understand the long-term consequences
          of this disease, a team of researchers from Johns Hopkins University
          and other institutions has developed this dashboard to amplify the
          voices of Long-COVID sufferers and raise awareness of their challenges
          and needs.
        </Text> */}
        <Text>
          Your feedback on COVID-19 is important to us. We want to know how the
          pandemic has impacted your well-being, lifestyle, work, or social
          connections. Please fill out our survey questionnaire to share your
          experiences with us.
        </Text>
        <Text>
          Select an instructional guide to learn more about how to use the
          dashboard:
        </Text>
        <VStack w="100%" spacing={"15px"}>
          <Button
            w="100%"
            p="30px"
            borderRadius={"20px"}
            background={"spiritBlue.100"}
            color={"heritageBlue.500"}
            fontSize="xl"
            size="lg"
            onClick={() => {
              setInstructionStep("survey");
            }}
          >
            How to contribute by filling out a survey
          </Button>
          <Button
            w="100%"
            p="30px"
            borderRadius={"20px"}
            background={"spiritBlue.100"}
            color={"heritageBlue.500"}
            fontSize="xl"
            size="lg"
            onClick={() => {
              setInstructionStep("longitudinal");
            }}
          >
            How to participate in longitudinal study
          </Button>
          <Button
            w="100%"
            p="30px"
            borderRadius={"20px"}
            background={"spiritBlue.100"}
            color={"heritageBlue.500"}
            fontSize="xl"
            size="lg"
            onClick={() => {
              setInstructionStep("visualization");
            }}
          >
            How to analyze data on the map
          </Button>
        </VStack>
      </VStack>
      <Spacer />
    </VStack>
  );
};
