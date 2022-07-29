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

import { Flex, Spacer, Box } from '@chakra-ui/react'

import React from "react";

export const Identifiers = (props) => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
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
                        <Button colorScheme='blue' mr={3}>
                            Next
                        </Button>
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}