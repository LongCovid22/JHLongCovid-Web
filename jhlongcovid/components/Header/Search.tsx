import {
  Box,
  Input,
  IconButton,
  Flex,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  Image,
  Text,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
  Button,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Header.module.css";
import { HamburgerIcon } from "@chakra-ui/icons";

import {
  MdOutlinePrivacyTip,
  MdChecklist,
  MdAirlineSeatIndividualSuite,
} from "react-icons/md";

import { ImNewspaper } from "react-icons/im";

interface SearchProps {
  markerData: any;
}

var axios = require("axios");

import SearchLocationInput from "./SearchLocationInput";

export const Search: React.FC<SearchProps> = ({ markerData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = React.useState("");
  const [places, setPlaces] = React.useState([]);

  return (
    <>
      <Flex
        className={styles.leftHeaderStack}
        align="center"
        gap={3}
        boxShadow={"xl"}
      >
        <Menu closeOnBlur={false} closeOnSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList
            style={{
              minWidth: "300px",
              width: "15%",
              padding: 20,
              borderRadius: 20,
              marginTop: 5,
            }}
          >
            <VStack spacing={4} maxWidth={300}>
              <Image src="/jhu_logo.jpg" alt="" />
              <Text fontSize="sm" color="black">
                <strong>
                  JHU.edu Copyright © 2022 by Johns Hopkins University &
                  Medicine. All rights reserved.
                </strong>
              </Text>
              <Text fontSize="sm" color="black">
                Johns Hopkins experts in global public health, infectious
                disease, and emergency preparedness have been at the forefront
                of the international response to COVID-19. Privacy has been at
                the forefront of our work.
              </Text>
              <VStack width={"100%"}>
                <Button
                  leftIcon={<Icon as={MdOutlinePrivacyTip} />}
                  variant="ghost"
                  justifyContent="flex-start"
                  onClick={onOpen}
                  style={{
                    width: "100%",
                  }}
                >
                  Privacy Statement
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Privacy Stuff</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody></ModalBody>
                  </ModalContent>
                </Modal>

                <Button
                  leftIcon={<Icon as={ImNewspaper} />}
                  variant="ghost"
                  onClick={onOpen}
                  width="100%"
                  justifyContent="start"
                >
                  Legal Statement
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Legal Stuff</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Hey</ModalBody>
                  </ModalContent>
                </Modal>

                <Button
                  leftIcon={<Icon as={MdChecklist} />}
                  variant="ghost"
                  onClick={onOpen}
                  width="100%"
                  justifyContent="start"
                >
                  Terms of Service
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Terms of Service Stuff</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Hey</ModalBody>
                  </ModalContent>
                </Modal>
              </VStack>
            </VStack>
          </MenuList>
        </Menu>
        <SearchLocationInput markerData={markerData} />
      </Flex>

      {input.length > 0 && places.length > 0 && places[0] != null && (
        <Flex
          className={styles.newLeft}
          align="center"
          gap={3}
          boxShadow={"xl"}
        >
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            {places.map((value, index) => (
              <Box key={index} h="30px">
                {value}
              </Box>
            ))}
          </VStack>
        </Flex>
      )}
    </>
  );
};
