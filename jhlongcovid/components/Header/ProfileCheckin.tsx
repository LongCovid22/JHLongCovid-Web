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
  ModalCloseButton, useDisclosure,
  FormControl,FormLabel, Select, Stack, Checkbox
} from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Header.module.css";

import { Intro} from "../Survey/Intro";

import { Demographics } from "../Survey/Demographics";

import { Identifiers } from "../Survey/Identifiers";

import { Recovery } from "../Survey/Recovery";

import { PostCovid } from "../Survey/postCovid";


interface ProfileCheckinProps {}


function Survey() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button 
      
      flex={1}
      borderRadius={"500px"}
      textColor="white"
      colorScheme="hopkinsBlue"
      
      
      onClick={onOpen}>Contribute</Button>

      {/* <Intro isOpen = {isOpen} onClose = {onClose}/> */}
      

      {/* <Identifiers isOpen = {isOpen} onClose = {onClose}/> */}

      {/* <Demographics isOpen = {isOpen} onClose = {onClose}/> */}
      {/* <Recovery isOpen = {isOpen} onClose = {onClose}/> */}
      <PostCovid isOpen = {isOpen} onClose = {onClose}/>

      
    </>
  )
}


export const ProfileCheckin: React.FC<ProfileCheckinProps> = () => {

  // return(<BasicUsage />)



  return (
    <Flex
      className={styles.rightHeaderStack}
      align="center"
      gap={3}
      boxShadow={"xl"}
    >
      <Survey />
      <Avatar></Avatar>
    </Flex>
  );
};
