import React from "react";
import { VStack, Text, Button, useDisclosure, Icon, Tooltip, Box } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { FeedbackModal } from "./FeedbackModal";

export const FeedbackPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack
  position={"absolute"}
  bottom="20px"
  left="20px"
  background="transparent" // Removing the background
  borderRadius="40px"
  padding="0px"
  shadow="xl"
  spacing={"10px"} // This will give the separation between the two bubbles
  maxW="300px"
  zIndex={0}
  align="center"
>
  {/* Tooltip with Text Bubble */}
  <Box
    borderRadius="40px"
    padding="10px"
    background="white"
    boxShadow="md"
    display="flex"
    alignItems="center"
  >
    
    <Text>Why isn't my entry showing up?</Text>
    <Tooltip label="The region or state you reside in must have at least 1 case of COVID/Long COVID" fontSize="md" placement="top" marginBottom="5px"  maxWidth="150px" >
      <Icon as={InfoOutlineIcon} w={7} h={7} color="gray.500" marginRight="5px" marginLeft="5px" />
    </Tooltip>
  </Box>

  {/* Send Feedback Button Bubble */}
  <Button
    w="100%"
    p="20px"
    borderRadius={"500px"}
    textColor="white"
    colorScheme="heritageBlue"
    onClick={onOpen}
  >
    Send Feedback
  </Button>
</VStack>


  <FeedbackModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
