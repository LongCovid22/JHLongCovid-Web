import {
  Box,
  Input,
  Button,
  Flex,
  ButtonGroup,
  Avatar,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Header.module.css";
import { SearchIcon } from "@chakra-ui/icons";

interface ProfileCheckinProps {}

export const ProfileCheckin: React.FC<ProfileCheckinProps> = () => {
  return (
    <Flex
      className={styles.rightHeaderStack}
      align="center"
      gap={3}
      boxShadow={"xl"}
    >
      <Button
        flex={1}
        borderRadius={"500px"}
        textColor="white"
        backgroundColor={"#002D72"}
      >
        Contribute
      </Button>
      <Avatar></Avatar>
    </Flex>
  );
};
