import React from "react";
import { VStack, Text, Button, useDisclosure } from "@chakra-ui/react";
import { FeedbackModal } from "./FeedbackModal";

export const FeedbackPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack
        position={"absolute"}
        bottom="20px"
        left="20px"
        background="white"
        borderRadius="40px"
        padding="20px"
        shadow="xl"
        spacing={"10px"}
        maxW="300px"
        zIndex={0}
        align="center"
      >
        <Text fontSize={"xl"} color="red" textAlign={"center"}>
          Development in Progress
        </Text>
        <Text textAlign={"center"}>
          Please share your feedback if you see room for improvement!
        </Text>
        <Button
          w="100%"
          p="5px"
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
