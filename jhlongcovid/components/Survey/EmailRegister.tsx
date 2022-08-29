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
  ModalCloseButton,
  useDisclosure,
  CloseButton,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";

import React from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { setUser } from "../../redux/slices/userSlice";

import {
  incrementProgress,
  selectProgress,
} from "../../redux/slices/surveySlice";
import { hopkinsBlue } from "../../theme/styles";

import { Auth } from 'aws-amplify';
import { MdAirlineSeatIndividualSuite } from "react-icons/md";
import { useDispatch } from "react-redux";

async function signUp(email : string, dispatch: Function) {
  
  try {

    const { user } = await Auth.signUp({
      username : email,
      password : 'DefaultPassword'
    });

    const userEmail = {
      email : email
    }

    dispatch(setUser(userEmail));

    dispatch(incrementProgress())
  } catch(error) {
    console.log('error signing up: ', error)
  }
}


// TODO: throw some branding on this page
export const EmailRegister = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState('');

  const handleChange = (event) => setEmail(event.target.value);


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
              Please provide your email to participate in our survey.
            </Heading>
            <Input 
            value = {email}
            onChange = {handleChange}
            placeholder='Provide Email' />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="hopkinsBlue"
            borderRadius={500}
            onClick={() => signUp(email, dispatch)}
          >
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
