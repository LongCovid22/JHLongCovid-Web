import React from "react";
import { Spacer, Flex, VStack, Text, Image } from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";

export const IntroInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
}) => {
  return (
    <VStack height={"100%"} width={"100%"} textAlign="center" spacing={"45px"}>
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        Welcome to the Johns Hopkins Long-COVID Dashboard!
      </Text>
      <VStack w={"80%"} spacing="20px" fontSize={"17px"}>
        <Text>
          This dashboard is designed to help understand your long-term COVID-19
          symptoms and how they may be related to your health and lifestyle.
        </Text>
        <Text>
          The following instructions will guide you through how to complete our
          survey and view your results on the map.
        </Text>
      </VStack>
      <Spacer />
      <Image
        src="./bloomberg.logo.horizontal.blue.jpg"
        alt="Hopkins Logo"
        w={"180px"}
        mt="5px"
      />
    </VStack>
  );
};
