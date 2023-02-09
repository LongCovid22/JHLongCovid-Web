import React from "react";
import { Spacer, Flex, VStack, Text, Image } from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";

export const EndInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
}) => {
  return (
    <VStack height={"100%"} width={"100%"} spacing={"50px"}>
      <Image
        src="./bloomberg.logo.vertical.blue.jpg"
        alt="Hopkins Logo"
        w="300px"
      />
      <VStack w={"80%"} spacing="20px" fontSize={"17px"}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Thank you for participating!
        </Text>
        <Text textAlign={"center"} fontSize="lg">
          Your contributions are greatly appreciated and will help us better
          understand the long-term effects of COVID-19. If you have any feedback
          on how to make our dashboard better, please email us at ...
        </Text>
      </VStack>
    </VStack>
  );
};
