import {
  Button,
  Flex,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  IconButton,
  Checkbox,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";

import { Intro } from "../Survey/Intro";

import { Identifiers } from "../Survey/Identifiers";

import { CovidHistory } from "../Survey/covidHistory";

import { VaccinationHistory } from "../Survey/VaccinationHistory";

import { ThankYou } from "../Survey/ThankYou";

import { EmailRegister } from "../Survey/EmailRegister";

import { MultiFactor } from "../Survey/MultiFactor";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { selectWidth } from "../../redux/slices/viewportSlice";
import { SurveyWrapper } from "../Survey/SurveyWrapper";

interface ProfileCheckinProps {}

function Survey() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalOverlay />
        <SurveyWrapper onClose={onClose} />
        {/* provide email */}
        {/* <div style={{ display: number === -2 ? "inline" : "none" }}>
          <EmailRegister />
        </div>
        <div style={{ display: number === -1 ? "inline" : "none" }}>
          <MultiFactor />
        </div>

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
        </div> */}
      </Modal>
    </>
  );
}

export const ProfileCheckin: React.FC<ProfileCheckinProps> = () => {
  // return(<BasicUsage />)
  const width = useAppSelector(selectWidth);

  return (
    <Flex
      className={styles.rightHeaderStack}
      align="center"
      gap={3}
      boxShadow={"xl"}
      style={{
        minWidth: width < 700 ? "410px" : "250px",
        top: width < 700 ? "70px" : "0px",
      }}
    >
      <Survey />
      <Avatar></Avatar>
    </Flex>
  );
};
