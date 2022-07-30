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
    ModalCloseButton, useDisclosure, Select, Stack, Checkbox
} from "@chakra-ui/react";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import { Flex, Spacer, Box } from '@chakra-ui/react'

import React from "react";

import {
    useAppDispatch,
} from '../../redux/hooks';

import {
    decrementProgress,
    incrementProgress,
} from '../../redux/slices/surveySlice';

export const PostCovid = (props) => {

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
                <ModalHeader>Post-Covid Symptoms</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <Box p='1' w='80%'>
                            <FormLabel>Did you experience any symptoms relating to your COVID Infection after you tested negative for COVID?
                            </FormLabel>
                            <Select>
                                <option>Yes</option>
                                <option>No</option>
                            </Select>
                        </Box>

                        <FormLabel>
                            Which of the following symptoms did you experinece after you recovery from COVID-19 and as a result of your COVID-19?
                        </FormLabel>


                        {/* <Stack spacing={[1, 5]} direction={['column', 'row']}> */}
                        <Checkbox>
                            General Symptoms
                        </Checkbox>

                        <Checkbox>
                            Respiratory and heart symptoms
                        </Checkbox>

                        <Checkbox>
                            Neurological symptoms
                        </Checkbox>

                        <Checkbox>
                            Digestive symptoms
                        </Checkbox>

                        <Checkbox>
                            Other Post-COVID symptoms
                        </Checkbox>



                        {/* </Stack> */}


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