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
  // shadow="xl"
  spacing={"10px"} // This will give the separation between the two bubbles
  maxW="500px"
  zIndex={0}
  align="left"
>
 
  <Button
    w="100%"
    maxW = "200px"
    p="20px"
    borderRadius={"500px"}
    textColor="white"
    colorScheme="heritageBlue"
    onClick={onOpen}
  >
    Send Feedback
  </Button>
  <Text color="red" mt="0px">
        Disclaimer: This website is still a work in progress.
      </Text>
</VStack>



  <FeedbackModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
