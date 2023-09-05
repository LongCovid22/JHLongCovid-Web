import { GraphQLQuery } from "@aws-amplify/api";
import {
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Input,
  ModalCloseButton,
  ModalContent,
  Textarea,
  ModalFooter,
  Button,
  useDisclosure,
  Spacer,
  CloseButton,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import React, { useState } from "react";
import { CreateFeedbackEntryInput } from "../../src/API";
import * as mutations from "../../src/graphql/mutations";

type FeedbackModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
}) => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const submitFeedback = async () => {
    const feedbackDetails: CreateFeedbackEntryInput = {
      name: name,
      feedback: feedback,
      completed: false,
    };

    try {
      setLoading(true);
      await API.graphql<GraphQLQuery<CreateFeedbackEntryInput>>({
        query: mutations.createFeedbackEntry,
        variables: { input: feedbackDetails },
      });

      toast({
        title: "Survey submission",
        description: "Successfully sent feedback!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: "Survey submission",
        description: "Feedback submission failed!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      console.log("Error creating new feedback: ", error);
    }

    setLoading(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={"35px"}>
        <ModalHeader>
          <HStack>
            <Text>Feedback Form</Text>
            <Spacer />
            <CloseButton
              size={"md"}
              bgColor="spiritBlue.100"
              color={"heritageBlue.600"}
              onClick={onClose}
            />
          </HStack>
        </ModalHeader>
        <ModalBody>
          <Input
            placeholder="Name"
            my={2}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Input
            placeholder="Email"
            my={2}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Textarea
            placeholder="Your feedback..."
            my={2}
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <HStack>
            <Button
              variant="ghost"
              onClick={onClose}
              background={"spiritBlue.100"}
              color={"heritageBlue.500"}
              borderRadius={500}
              fontSize="lg"
            >
              Cancel
            </Button>
            <Button
              mr={3}
              onClick={submitFeedback}
              colorScheme="heritageBlue"
              borderRadius={500}
              fontSize="md"
              isLoading={loading}
            >
              Submit
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
