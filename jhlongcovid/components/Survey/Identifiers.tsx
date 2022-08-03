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
  CloseButton,
  HStack,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { useAppDispatch } from "../../redux/hooks";

import {
  decrementProgress,
  incrementProgress,
  selectProgress,
} from "../../redux/slices/surveySlice";

import { Flex, Spacer, Box } from "@chakra-ui/react";

import React from "react";

export const Identifiers = () => {
  const dispatch = useAppDispatch();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalContent>
        <ModalHeader>Profile</ModalHeader>
        <ModalCloseButton marginRight={3} marginTop={2}>
          <CloseButton
            size={"md"}
            bgColor="hopkinsBlue.100"
            color={"hopkinsBlue.600"}
          />
        </ModalCloseButton>
        <ModalBody>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="First Name" />
            <FormHelperText />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last Name" />
            <FormHelperText />
          </FormControl>
          <FormControl>
            <FormLabel>Zip Code</FormLabel>
            <Input placeholder="Zip Code" />
            <FormHelperText>
              Zip code will be used to populate aggregate data according to your
              area. It will not be stored
            </FormHelperText>
          </FormControl>
          {/* <Flex>
              <Box p="1" w="40%">
                <FormLabel>First Name</FormLabel>
                <Input />
              </Box>
              <Spacer />
              <Box p="1" w="40%">
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" />
              </Box>
            </Flex>

            
            <Box p="1" w="40%">
              <FormLabel>Zip Code</FormLabel>
              <Input />
              <FormHelperText>
                Zip code will not be stored. It will be used to populate
                aggregate data according to your area
              </FormHelperText>
            </Box> */}
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
              onClick={() => dispatch(incrementProgress())}
            >
              Next
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
