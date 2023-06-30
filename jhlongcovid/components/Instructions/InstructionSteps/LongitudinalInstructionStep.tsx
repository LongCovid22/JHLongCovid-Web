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

export const LongitudinalInstructionStep: React.FC<InstructionStepProps> = ({
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
            style={{ flexShrink: 0, flexBasis: "50px" }}
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
            Before finishing your survey,{" "}
            <Text fontWeight={"bold"} as="span">
              create your account
            </Text>{" "}
            at the account creation step.
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
            style={{ flexShrink: 0, flexBasis: "50px" }}
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
            Once your account has been created, a weekly reminder will be
            emailed to you to follow up if you have{" "}
            <Text fontWeight={"bold"} as="span">
              not
            </Text>{" "}
            recovered from COVID yet.
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
            style={{ flexShrink: 0, flexBasis: "50px" }}
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
            On your follow up date, return back to the dashboard and complete
            your weekly check in. This process will repeat until you{" "}
            <Text fontWeight={"bold"} as="span">
              have
            </Text>{" "}
            recovered from COVID.
          </Text>
        </HStack>
      </VStack>
      <HStack w="100%" justifyContent={"center"}>
        <VStack>
          <Text color={"gray.400"}>
            Here is a video walking through the account creation process.
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
