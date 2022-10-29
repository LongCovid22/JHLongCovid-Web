import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Center,
  Image,
  Avatar,
  Modal,
  ModalCloseButton,
  ModalContent,
  CloseButton,
  ModalFooter,
  HStack,
  useDisclosure,
  IconButton,
  Checkbox,
  Box,
  ModalBody,
  ModalHeader,
  Text,
  Spacer,
  VStack,
  Link,
  Input,
} from "@chakra-ui/react";
import { AuthenticationForm } from "../../Header/AuthenticationForm/AuthenticationForm";

export const PreSurvey: React.FC = () => {
  return (
    <VStack height={"100%"} width={"100%"}>
      <VStack spacing={"25px"}>
        <Image src="/jhu_logo.jpg" maxW="45%" />
        <AuthenticationForm />
      </VStack>
    </VStack>
  );
};
