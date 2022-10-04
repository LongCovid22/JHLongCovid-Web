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

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { selectWidth } from "../../redux/slices/viewportSlice";
import { SurveyWrapper } from "../Survey/SurveyWrapper";

import { FirstPage } from "../Survey/FirstPage";

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
          {/* <SurveyWrapper onClose={onClose} /> */}
          <FirstPage onClose = {onClose} />

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
