import React from "react";
import { Spacer, Flex, VStack, Text, Image } from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";
import { VideoPlayer } from "../VideoPlayer";

export const SurveyInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
}) => {
  return (
    <VStack height={"100%"} width={"100%"} spacing={"20px"} fontSize="17px">
      <Text fontWeight={"regular"} width={"100%"}>
        - To participate in our survey, just hit the participate button!
      </Text>
      {/* <video autoPlay loop>
        <source src="./participationInstructional.mp4" type="video/mp4" />
      </video> */}
      <VideoPlayer videoKey={"participationInstructional.mp4"} />
    </VStack>
  );
};
