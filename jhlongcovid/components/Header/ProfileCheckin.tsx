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
