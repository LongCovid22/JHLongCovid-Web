import {
  Box,
  Container,
  Input,
  Button,
  Flex,
  Avatar,
  Wrap,
  keyframes,
  Modal,
  ModalOverlay,
  useDisclosure,
  IconButton,
  Checkbox,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';
import styles from "../../styles/Header.module.css";
import { SearchIcon } from "@chakra-ui/icons";
import {Spring} from "react-spring";
import { EmailIcon } from "@chakra-ui/icons";

import React, { useEffect, useState } from "react";

import { Intro } from "../Survey/Intro";

import { Demographics } from "../Survey/Demographics";

import { Identifiers } from "../Survey/Identifiers";

import { CovidHistory } from "../Survey/covidHistory";

import { Recovery } from "../Survey/Recovery";

import { PostCovid } from "../Survey/postCovid";

import { VaccinationHistory } from "../Survey/VaccinationHistory";

import { ThankYou } from "../Survey/ThankYou";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  incrementProgress,
  selectProgress,
} from "../../redux/slices/surveySlice";


interface ProfileCheckinProps {}


const animationKeyframes = keyframes`
0% {
  opacity: 0.7;
  transform: scale(1);
}
35%,80% {
  opacity: 1;
  transform: scale(1.05,1.05);
}
100% {
  opacity: 0.5;
  transform: scale(1);
}
0% {
  -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  box-shadow: 0 0 00 rgba(204,169,44, 0.4);
}
70% {
    -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    box-shadow: 0 0 0 10px rgba(204,169,44, 0);
}
100% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0);
}
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

interface ProfileCheckinProps {}

function Survey() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const number = useAppSelector(selectProgress);
  return (
    <>
      <Button
        flex={1}
        borderRadius={"500px"}
        textColor="white"
        colorScheme="hopkinsBlue"
        onClick={onOpen}
        animation={animation}
      >
        Contribute
      </Button>
      {/* <Recovery isOpen = {isOpen} onClose = {onClose}/> */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalOverlay />
        <div style={{ display: number === 0 ? "inline" : "none" }}>
          <Intro />
        </div>
        <div style={{ display: number === 1 ? "inline" : "none" }}>
          <Identifiers />
        </div>

        <div style={{ display: number === 2 ? "inline" : "none" }}>
          <Demographics />
        </div>

        <div style={{ display: number === 3 ? "inline" : "none" }}>
          <CovidHistory />
        </div>

        <div style={{ display: number === 4 ? "inline" : "none" }}>
          <PostCovid />
        </div>
        <div style={{ display: number === 5 ? "inline" : "none" }}>
          <Recovery />
        </div>

        <div style={{ display: number === 6 ? "inline" : "none" }}>
          <VaccinationHistory />
        </div>

        <div style={{ display: number === 7 ? "inline" : "none" }}>
          <ThankYou />
        </div>
      </Modal>
    </>
  );
}


export const ProfileCheckin: React.FC<ProfileCheckinProps> = () => {
  // return(<BasicUsage />)

  return (
    <Flex
      className={styles.rightHeaderStack}
      align="center"
      gap={2}
      boxShadow={"xl"}
      style={{
        zIndex: 0,
      }}
    >

      {/* <Box
        as={motion.div}
        animation={animation}
        padding="2"
        bgGradient="linear(to-l, #142d4c, #ffffff)"
        width="6"
        height="6"
        display="flex"
        /> */}
      {/* <Button
        flex={2}
        borderRadius={"400px"}
        bgGradient="linear(to-l, blue.300, gray.500)"
        textColor="white"
        colorScheme="hopkinsBlue"
      >
        Contribute
  </Button> */}


      <Survey />
      <Avatar></Avatar>

    </Flex>
  );
};


