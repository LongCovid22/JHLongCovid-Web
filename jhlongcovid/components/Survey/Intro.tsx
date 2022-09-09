import {
  Box,
  Input,
  Button,
  Flex,
  ButtonGroup,
  Avatar,
  Wrap,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  CloseButton,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";

import React from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  incrementProgress,
  selectProgress,
} from "../../redux/slices/surveySlice";
import { hopkinsBlue } from "../../theme/styles";

// TODO: throw some branding on this page
export const Intro = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  return (
    <>
      <ModalContent borderRadius={20}>
        <ModalHeader />
        <ModalCloseButton marginRight={3} marginTop={2}>
          <CloseButton
            size={"md"}
            bgColor="hopkinsBlue.100"
            color={"hopkinsBlue.600"}
          />
        </ModalCloseButton>
        <ModalBody>
          <VStack spacing={10} padding={3} paddingTop={5}>
            <Heading size={"lg"} textAlign={"center"}>
              Welcome to the Johns Hopkins Bloomberg School of Public Health
              Long-COVID Survey
            </Heading>
            <Text textAlign={"center"}>
              This questionnaire asks you about your exposure to COVID-19 and
              how that has affected your life beyond your infection. Please know
              that participation in this survey is optional, and that while
              responses will be shared on the aggregate, individual responses
              will be free of all personal identifiers. With any questions,
              please email the study administrators at ahassoo1@jhu.edu or call
              (XXX) XXX-XXXX.
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="hopkinsBlue"
            borderRadius={500}
            onClick={() => dispatch(incrementProgress())}
          >
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
