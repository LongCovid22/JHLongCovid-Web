import {
  Input,
  Button,
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
  Select,
  HStack,
  CloseButton,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { Flex, Spacer, Box } from "@chakra-ui/react";

import React from "react";

export const ThankYou = () => {
  /*
        educ	Please select the highest level of education you have completed.
        height	Please enter your height.
        weight	Please enter your weight.
        race	Please select the race(s) you most identify with.
        hisp	Are you of Hispanic, Latino, or Spanish origin?
        birthday	What year were you born?
    */

  return (
    <>
      <ModalContent>
        <ModalHeader>Thank you for your response!</ModalHeader>
        <ModalCloseButton marginRight={3} marginTop={2}>
          <CloseButton
            size={"md"}
            bgColor="hopkinsBlue.100"
            color={"hopkinsBlue.600"}
          />
        </ModalCloseButton>
        <ModalBody>
          For any questions on this questionnaire, please contact the study team
          at ahassoo1@jhu.edu or (XXX) XXX-XXXX. \n This study also involves
          optional follow-ups regarding your past exposure with COVID-19. If you
          choose to participate in this part of the study, you will be able to
          cancel your participation at any time.
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button colorScheme="hopkinsBlue" borderRadius={500}>
              Prev
            </Button>
            <Button colorScheme="hopkinsBlue" borderRadius={500}>
              Next
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
