import {
  Button,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading, 
  Input,
  VStack,
  CloseButton,
  HStack,
  Text
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import {
  decrementProgress,
  incrementProgress,
  selectProgress,
} from "../../redux/slices/surveySlice";

import React from "react";

import { Auth } from 'aws-amplify';

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUserEmail } from "../../redux/slices/userSlice";

async function confirmSignUp(email : string, code: string, dispatch: Function) {
  try {
    await Auth.confirmSignUp(email, code);
    dispatch(incrementProgress())
  } catch (error) {
      console.log('error confirming sign up', error);
  }
}

export const MultiFactor = () => {
  const [code, setCode] = React.useState('');

  const email = useAppSelector(selectUserEmail);

  const handleChange = (event) => setCode(event.target.value);

  const dispatch = useAppDispatch();
  
  return (
    <>
      <ModalContent borderRadius={20}>
        <ModalHeader />
        <ModalCloseButton marginRight={3} marginTop={2}>
          <CloseButton
            size={"md"}
            bgColor="hopkinsBlue.100"
            color={"hopkinsBlue.600"}
          />
        </ModalCloseButton>
        <ModalBody>
          <VStack spacing={10} padding={3} paddingTop={5}>
          <Heading size={"lg"} textAlign={"center"}>
              We sent a code to your email, please enter the code:
            </Heading>
            <Input 
            value = {code}
            onChange = {handleChange}
            placeholder='Provide Code' />
          </VStack>
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
              onClick={() => confirmSignUp(email, code, dispatch) }
            >
              Next
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
