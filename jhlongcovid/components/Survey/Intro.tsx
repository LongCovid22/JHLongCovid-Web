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
  ModalCloseButton, useDisclosure
} from "@chakra-ui/react";

import React from "react";

import {
  useAppDispatch,
  useAppSelector,
} from '../../redux/hooks';

import {
  incrementProgress,
  selectProgress
} from '../../redux/slices/surveySlice';

export const Intro = (props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  return (
    <>
      <ModalContent h='700px'>
        <ModalHeader>Johns Hopkins Long Covid Study</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Welcome to the Johns Hopkins Bloomberg School of Public Health Long-COVID questionnaire. This questionnaire asks you about your exposure to COVID-19 and how that has affected your life beyond your infection. Please know that participation in this survey is optional, and that while responses will be shared on the aggregate, individual responses will be free of all personal identifiers. With any questions, please email the study administrators at ahassoo1@jhu.edu or call (XXX) XXX-XXXX.
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={() => dispatch(incrementProgress())} >
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}