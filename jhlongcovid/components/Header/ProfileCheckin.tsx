import {
  Box,
  Container,
  Input,
  Button,
  Flex,
  ButtonGroup,
  Avatar,
  Wrap,
  keyframes,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';
import React from "react";
import styles from "../../styles/Header.module.css";
import { SearchIcon } from "@chakra-ui/icons";
import {Spring} from "react-spring";
import { EmailIcon } from "@chakra-ui/icons";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

interface ProfileCheckinProps {}
export const ProfileCheckin: React.FC<ProfileCheckinProps> = () => {
  return (
    <Flex
      className={styles.rightHeaderStack}
      align="center"
      gap={2}
      boxShadow={"xl"}
    >
      <Box
        as={motion.div}
        animation={animation}
        padding="2"
        bgGradient="linear(to-l, #142d4c, #ffffff)"
        width="6"
        height="6"
        display="flex"
        />
      <Button
        flex={2}
        borderRadius={"400px"}
        bgGradient="linear(to-l, blue.300, gray.500)"
        textColor="white"
        colorScheme="hopkinsBlue"
      >
        Contribute
  </Button>
    </Flex>
  );
};


