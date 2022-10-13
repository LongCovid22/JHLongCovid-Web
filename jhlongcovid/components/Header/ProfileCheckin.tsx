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
  ModalContent,
  useDisclosure,
  IconButton,
  Checkbox,
} from "@chakra-ui/react";
import styles from "../../styles/Header.module.css";

import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { selectWidth } from "../../redux/slices/viewportSlice";
import { SurveyWrapper } from "../Survey/SurveyWrapper";

interface ProfileCheckinProps {}

const animationKeyframes = keyframes`
0% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 rgba(0, 101, 255, 0.7);
}

70% {
  transform: scale(1);
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
}

100% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
`;

const animation = `${animationKeyframes} 1.5s infinite`;

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
        onClick={onOpen}
        animation={!isOpen ? animation : undefined}
      >
        Contribute
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalOverlay />
        <SurveyWrapper onClose={onClose} />
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
      gap={2}
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
