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

export const Recovery = (props) => {

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
            
                <ModalContent height = '1400px'>
                    <ModalHeader>COVID or Post-COVID Recovery</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        These questions will ask you about your recovery from COVID-19 or the residual effects of your infection.
                        <FormControl>


                            {/* Verify with valid Zip Code */}
                            <Box p='1' w='80%'>
                                <FormLabel>Since you were infected with COVID - 19, do you think you have returned to your usual state of health?</FormLabel>
                                <Select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Select>
                            </Box>

                            <Box p='1' w='80%'>
                                <FormLabel>At this time, do you think you are still having symptoms that are related to your infection with COVID-19?
                                </FormLabel>
                                <Select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Select>
                            </Box>

                            <ModalHeader>Work and Social Adjustment Scale</ModalHeader>



                            <Box p='1' w='80%'>
                                <FormLabel>Because of my COVID infection, my ability to work is impaired.</FormLabel>

                                <Input />
                            </Box>

                            <Box p='1' w='80%'>
                                <FormLabel>Because of my COVID infection, my home management (cleaning, tidying, shopping, cooking, looking after home or children, paying bills) is impaired.
                                </FormLabel>
                                <Input />
                            </Box>

                            <Box p='1' w='80%'>
                                <FormLabel>
                                    Because of my COVID infection, my social leisure activities (with other people, such as parties, bars, clubs, outings, visits, dating, home entertainment) are impaired.
                                </FormLabel>
                                <Input />
                            </Box>

                            <Box p='1' w='80%'>
                                <FormLabel>
                                    Because of my COVID infection, my private leisure activities (done alone, such as reading, gardening, collecting, sewing, walking alone) are impaired.
                                </FormLabel>
                                <Input />
                            </Box>

                            <Box p='1' w='80%'>
                                <FormLabel>
                                    Because of my COVID infection, my ability to form and maintain close relationships with others, including those I live with, is impaired.
                                </FormLabel>
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
                    </ModalFooter>
                </ModalContent>
            
        </>
    )
}