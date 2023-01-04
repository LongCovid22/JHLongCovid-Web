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
  Link,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Header.module.css";
import { HamburgerIcon } from "@chakra-ui/icons";

import {
  MdOutlinePrivacyTip,
  MdChecklist,
  MdAirlineSeatIndividualSuite,
  MdHome,
} from "react-icons/md";

import { ImNewspaper } from "react-icons/im";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

interface SearchProps {
  markerData: any;
}

var axios = require("axios");

import SearchLocationInput from "./SearchLocationInput";
import { current, getCurrentScope } from "immer/dist/internal";
import { BrandingMenu } from "./BrandingMenu/BrandingMenu";

export const Search: React.FC<SearchProps> = ({ markerData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = React.useState("");
  const [places, setPlaces] = React.useState([]);
  const linkTheme = defineStyleConfig({
    defaultProps: {
      size: "small",
      variant: "brandPrimary",
      colorScheme: "brand",
    },
  });

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isTermOpen,
    onOpen: onTermOpen,
    onClose: onTermClose,
  } = useDisclosure();
  const {
    isOpen: isAboutOpen,
    onOpen: onAboutOpen,
    onClose: onAboutClose,
  } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef();

  const finalRef = React.useRef(null);
  return (
    <>
      <Flex
        className={styles.leftHeaderStack}
        align="center"
        gap={3}
        boxShadow={"xl"}
      >
        <BrandingMenu />
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
