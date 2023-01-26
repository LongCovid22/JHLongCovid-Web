import React from "react";
import { Spacer, Flex, VStack, Text } from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";

export const VisualizationInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
}) => {
  return (
    <VStack height={"100%"} width={"100%"} spacing={"20px"}>
      <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
        Visualization Instruction Step
      </Text>
    </VStack>
  );
};
