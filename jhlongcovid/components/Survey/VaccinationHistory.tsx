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

import { useAppDispatch } from "../../redux/hooks";

import {
  decrementProgress,
  nextQuestion,
} from "../../redux/slices/surveySlice";

import React from "react";

export const VaccinationHistory = () => {
  const dispatch = useAppDispatch();
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
      <ModalContent borderRadius={20}>
        <ModalHeader>Vaccination</ModalHeader>
        <ModalCloseButton marginRight={3} marginTop={2}>
          <CloseButton
            size={"md"}
            bgColor="hopkinsBlue.100"
            color={"hopkinsBlue.600"}
          />
        </ModalCloseButton>
        <ModalBody>
          <FormControl>
            {/* Verify with valid Zip Code */}
            <Box p="1" w="80%">
              <FormLabel>Have you been vaccinated against COVID-19?</FormLabel>
              <Select>
                <option>Yes</option>
                <option>No</option>
              </Select>
            </Box>

            <Box p="1" w="80%">
              <FormLabel>Which vaccine did you receive?</FormLabel>
              <Select>
                <option>Pfizer</option>
                <option>Johnson and Johnson</option>
                <option>Moderna</option>
                <option>Sinovax</option>
                <option>Other</option>
              </Select>
            </Box>

            <Box p="1" w="80%">
              <FormLabel>
                Are you up to date with your COVID-19 booster?
              </FormLabel>
              <Select>
                <option>Yes</option>
                <option>No</option>
              </Select>
            </Box>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button
              colorScheme="hopkinsBlue"
              borderRadius={500}
              onClick={() => dispatch(decrementProgress())}
            >
              Prev
            </Button>
            <Button
              colorScheme="hopkinsBlue"
              borderRadius={500}
              onClick={() => dispatch(nextQuestion({ answer: "" }))}
            >
              Next
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
