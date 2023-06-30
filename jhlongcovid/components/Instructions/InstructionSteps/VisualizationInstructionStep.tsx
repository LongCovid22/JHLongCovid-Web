import React, { useState } from "react";
import {
  Spacer,
  Flex,
  VStack,
  Text,
  Spinner,
  HStack,
  Box,
} from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";

export const VisualizationInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
  videoUrl,
}) => {
  const [videoLoading, setVideoLoading] = useState(true);

  return (
    <VStack
      height={"100%"}
      width={"100%"}
      spacing={"15px"}
      fontSize="17px"
      align={"left"}
    >
      <VStack align={"left"} w="100%" spacing="8px">
        <HStack spacing="15px" w="100%">
          <Box
            width="50px"
            height="50px"
            borderRadius="50%"
            bg="spiritBlue.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="heritageBlue"
              mb="3px"
            >
              1
            </Text>
          </Box>
          <Text>
            <Text fontWeight={"bold"} as="span">
              Hover
            </Text>{" "}
            over a bubble to view the state's quick summary.
          </Text>
        </HStack>
        <HStack spacing="15px" w="100%">
          <Box
            width="50px"
            height="50px"
            borderRadius="50%"
            bg="spiritBlue.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="heritageBlue"
              mb="3px"
            >
              2
            </Text>
          </Box>
          <Text>
            <Text fontWeight={"bold"} as="span">
              Click
            </Text>{" "}
            on the state's bubble to view the states detailed summary panel.
          </Text>
        </HStack>
        <HStack spacing="15px" w="100%">
          <Box
            width="50px"
            height="50px"
            borderRadius="50%"
            bg="spiritBlue.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="heritageBlue"
              mb="3px"
            >
              3
            </Text>
          </Box>
          <Text>
            <Text fontWeight={"bold"} as="span">
              Zoom
            </Text>{" "}
            in to view county level data.
          </Text>
        </HStack>
      </VStack>
      <HStack w="100%" justifyContent={"center"}>
        <VStack>
          <Text color={"gray.400"}>
            Here is a video showing how use the bubbles to view data about a
            state and county.
          </Text>
          {videoUrl && (
            <video
              controls
              width={"750px"}
              style={{
                borderRadius: "20px",
                boxShadow: "4px 6px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
        </VStack>
      </HStack>

      {/* <VideoPlayer videoKey={"participationInstructional.mp4"} /> */}
    </VStack>
  );
};
