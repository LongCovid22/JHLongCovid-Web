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
  FormControl,
  FormLabel,
  Select,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";

import { Intro } from "../Survey/Intro";

import { Demographics } from "../Survey/Demographics";

import { Identifiers } from "../Survey/Identifiers";

import { CovidHistory } from "../Survey/covidHistory";

import { Recovery } from "../Survey/Recovery";

import { PostCovid } from "../Survey/PostCovid";

import { VaccinationHistory } from "../Survey/VaccinationHistory";

import { ThankYou } from "../Survey/ThankYou";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  incrementProgress,
  selectProgress,
} from "../../redux/slices/surveySlice";

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
      gap={3}
      boxShadow={"xl"}
    >
      <Survey />
      <Avatar></Avatar>
    </Flex>
  );
};
