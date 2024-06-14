import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  Spacer,
  Flex,
  VStack,
  Text,
  Image,
  Spinner,
  HStack,
  Button,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const SurveyInstructionStep: React.FC<InstructionStepProps> = ({
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
            Navigate your cursor to the top right corner and click the{" "}
            <Text fontWeight={"bold"} as="span">
              Participate
            </Text>{" "}
            button.
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
            Click the{" "}
            <Text fontWeight={"bold"} as="span">
              Begin Survey
            </Text>{" "}
            button to start filling out the survey.
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
            Once you are finished completing the survey, click the{" "}
            <Text fontWeight={"bold"} as="span">
              Finish
            </Text>{" "}
            button to submit your results.
          </Text>
        </HStack>
      </VStack>
      <HStack w="100%" justifyContent={"center"}>
        <VStack>
          <Text color={"gray.400"}>
            Here is a video showing a sample run through of a survey.
          </Text>
          <iframe className='sproutvideo-player' src='https://videos.sproutvideo.com/embed/4d90dbbd1216e3c2c4/5fc4b0ca7f1afe8c' width='640' height='360' title='Video Player'></iframe>

          
          {/* {videoUrl && (
            <video
              controls
              width={"750px"}
              style={{
                borderRadius: "20px",
                boxShadow: "4px 6px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <source src="https://videos.sproutvideo.com/embed/4d90dbbd1216e3c2c4/5fc4b0ca7f1afe8c" type="video/mp4" />
            </video>
          )} */}
        </VStack>
      </HStack>

      {/* <VideoPlayer videoKey={"participationInstructional.mp4"} /> */}
    </VStack>
  );
};
