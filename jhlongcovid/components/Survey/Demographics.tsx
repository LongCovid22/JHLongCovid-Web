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
    ModalCloseButton, useDisclosure, Select
} from "@chakra-ui/react";

import {
    useAppDispatch,
  } from '../../redux/hooks';

  import {
    decrementProgress,
    incrementProgress,
    selectProgress
  } from '../../redux/slices/surveySlice';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import { Flex, Spacer, Box } from '@chakra-ui/react'

import React from "react";

export const Demographics = (props) => {
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

            <ModalContent h='700px'>
                <ModalHeader>Demographics</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        {/* Verify with valid Zip Code */}
                        <Box p='1' w='80%'>
                            <FormLabel>Highest Level of Education</FormLabel>
                            <Select>
                                <option>High School or Below</option>
                                <option>Undergraduate</option>
                                <option>Graduate/Masters</option>
                                <option>Doctoral</option>
                            </Select>
                        </Box>

                        <Flex>
                            <Box p='1' w='40%'>
                                <FormLabel>Height</FormLabel>
                                <Input />
                            </Box>
                            <Spacer />
                            <Box p='1' w='40%'>
                                <FormLabel>Weight</FormLabel>
                                <Input />
                            </Box>
                        </Flex>


                        <Box p='1' w='80%'>
                            <FormLabel>Select the race you most identify with</FormLabel>
                            <Select>
                                <option>White</option>
                                <option>Black or African American</option>
                                <option>Asian</option>
                                <option>American Indian and Alaska Native</option>
                                <option>Native Hawaiian and Other Pacific Islander</option>
                                <option>Other</option>
                                <option>Choose to not identify</option>
                            </Select>
                        </Box>

                        <Box p='1' w='80%'>
                            <FormLabel>Are you of Hispanic, Latino, or Spanish origin?</FormLabel>
                            <Select>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Choose to not identify</option>
                            </Select>
                        </Box>

                        <Box p='1' w='80%'>
                            <FormLabel>What year were you born in?</FormLabel>
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