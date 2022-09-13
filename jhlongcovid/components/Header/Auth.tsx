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

  import AwsAuth  from "./AwsAuth"



export const Auth = () => {
    return (
        <>
         <ModalOverlay />
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
          <AwsAuth />
        </ModalBody>
        </ModalContent> 

        
        
        </>
    )
}