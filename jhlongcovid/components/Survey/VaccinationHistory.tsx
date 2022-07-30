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
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import { Flex, Spacer, Box } from '@chakra-ui/react';

import {
    useAppDispatch,
} from '../../redux/hooks';

import {
    decrementProgress,
    incrementProgress,
} from '../../redux/slices/surveySlice';

import React from "react";

export const VaccinationHistory = (props) => {

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
            
                <ModalContent>
                    <ModalHeader>Vaccination</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            {/* Verify with valid Zip Code */}
                            <Box p='1' w='80%'>
                                <FormLabel>Have you been vaccinated against COVID-19?</FormLabel>
                                <Select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Select>
                            </Box>

                            <Box p='1' w='80%'>
                                <FormLabel>Which vaccine did you receive?</FormLabel>
                                <Select>
                                    <option>Pfizer</option>
                                    <option>Johnson and Johnson</option>
                                    <option>Moderna</option>
                                    <option>Sinovax</option>
                                    <option>Other</option>
                                </Select>
                            </Box>

                            <Box p='1' w='80%'>
                                <FormLabel>Are you up to date with your COVID-19 booster?</FormLabel>
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