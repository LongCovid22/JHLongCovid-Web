import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Spacer, Flex, VStack, Text, Image, Spinner } from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";

export const SurveyInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
  videoUrl,
}) => {
  const [videoLoading, setVideoLoading] = useState(true);

  return (
    <VStack height={"100%"} width={"100%"} spacing={"20px"} fontSize="17px">
      <Text fontWeight={"regular"} width={"100%"}>
        To participate in our survey, just hit the participate button!
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
      {/* <VideoPlayer videoKey={"participationInstructional.mp4"} /> */}
    </VStack>
  );
};
