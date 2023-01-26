import React from "react";
import { Spacer, Flex, VStack, Text } from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";

export const VisualizationInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
}) => {
  return (
    <VStack height={"100%"} width={"100%"} spacing={"10px"} textAlign="start">
      <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
        - The circles displayed on the map represent the prevalence of
        Long-COVID in that area.
      </Text>
      <Text width={"100%"}>
        - The map starts by viewing the state level data, but you can zoom in to
        see the county level data.
      </Text>
      <Text width={"100%"}>
        - Once an area is selected, you can view the area's statistics in more
        detail.
      </Text>
      <video autoPlay loop>
        <source src="./DataVisualsExample.mp4" type="video/mp4" />
      </video>
    </VStack>
  );
};
