import React, { useState } from "react";
import { Spacer, Flex, VStack, Text, Spinner } from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";

export const VisualizationInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
  videoUrl,
}) => {
  const [videoLoading, setVideoLoading] = useState(true);

  return (
    <VStack height={"100%"} width={"100%"} spacing={"10px"} textAlign="start">
      <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
        The circles displayed on the map represent the prevalence of Long-COVID
        in that area.
      </Text>
      <Text width={"100%"}>
        The map starts by viewing the state level data, but you can zoom in to
        see the county level data.
      </Text>
      <Text width={"100%"}>
        Once an area is selected, you can view the area's statistics in more
        detail.
      </Text>
      {videoLoading && <Spinner color="heritageBlue.500" />}
      {videoUrl && (
        <video
          autoPlay
          loop
          onLoadStart={() => setVideoLoading(true)}
          onLoadedData={() => setVideoLoading(false)}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </VStack>
  );
};
