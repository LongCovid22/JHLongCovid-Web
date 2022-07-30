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
    ModalCloseButton, useDisclosure
} from "@chakra-ui/react";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import {
    useAppDispatch,
  } from '../../redux/hooks';

  import {
    decrementProgress,
    incrementProgress,
    selectProgress
  } from '../../redux/slices/surveySlice';


import { Flex, Spacer, Box } from '@chakra-ui/react'

import React from "react";

export const Identifiers = (props) => {

    const dispatch = useAppDispatch();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <ModalContent h='700px'>
                <ModalHeader>Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <Flex>
                            <Box p='1' w='40%'>
                                <FormLabel>First Name</FormLabel>
                                <Input />
                            </Box>
                            <Spacer />
                            <Box p='1' w='40%'>
                                <FormLabel>Last Name</FormLabel>
                                <Input />
                            </Box>

                        </Flex>

                        {/* Verify with valid Zip Code */}
                        <Box p='1' w='40%'>
                            <FormLabel>Zip Code</FormLabel>
                            <Input />
                        </Box>


                    </FormControl>



                </ModalBody>
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={() => dispatch(decrementProgress())}>
                        Prev
                    </Button>
                    <Button colorScheme='blue' mr={3} onClick={() => dispatch(incrementProgress())}>
                        Next
                    </Button>
                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                </ModalFooter>
            </ModalContent>
        </>
    )
}




