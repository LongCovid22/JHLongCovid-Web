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
} from '../../redux/slices/surveySlice';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import { Flex, Spacer, Box } from '@chakra-ui/react'

import React from "react";

export const CovidHistory = (props) => {
    /*
        educ	Please select the highest level of education you have completed.
        height	Please enter your height.
        weight	Please enter your weight.
        race	Please select the race(s) you most identify with.
        hisp	Are you of Hispanic, Latino, or Spanish origin?
        birthday	What year were you born?
    */

    const dispatch = useAppDispatch();

    return (
        <>

            <ModalContent h='1000px'>
                <ModalHeader>History of COVID-19</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>


                        {/* Verify with valid Zip Code */}

                        These questions will ask you about your exposure to COVID-19. Please answer them to the best of your ability.
                        <Box p='1' w='80%'>
                            <FormLabel>Have you tested postive for COVID - 19?</FormLabel>
                            <Select>
                                <option>Yes</option>
                                <option>No</option>
                            </Select>
                        </Box>

                        <Box p='1' w='80%'>
                            <FormLabel>How many time have you tested positive for COVID-19?</FormLabel>
                            <Input />
                        </Box>

                        <Box p='1' w='80%'>
                            <FormLabel>When was the last time you tested positive for COVID-19?</FormLabel>
                            <Input />
                        </Box>

                        <Box p='1' w='80%'>
                            <FormLabel>What symptoms did you have at all exposures?</FormLabel>
                            <Input />
                        </Box>

                        <Box p='1' w='80%'>
                            <FormLabel>Did you ever require any treatment from a doctor to help you breathe, such as supplemental oxygen via a face mask, through your nose, or through a breathing tube?
                            </FormLabel>
                            <Select>
                                <option>Yes</option>
                                <option>No</option>
                            </Select>
                        </Box>

                        <Box p='1' w='80%'>
                            <FormLabel>Did you take any antiviral medicines for COVID-19?
                            </FormLabel>
                            <Select>
                                <option>Yes</option>
                                <option>No</option>
                            </Select>
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
                </ModalFooter>
            </ModalContent>

        </>
    )
}