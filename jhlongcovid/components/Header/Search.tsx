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
                  as="a"
                  leftIcon={<Icon as={MdOutlinePrivacyTip} />}
                  variant="ghost"
                  width="100%"
                  justifyContent="flex-start"
                >
                  <Link
                    href="https://it.johnshopkins.edu/policies-privacystatement/"
                    isExternal
                  >
                    Privacy Statement
                  </Link>
                </Button>

                <Button
                  leftIcon={<Icon as={ImNewspaper} />}
                  variant="ghost"
                  onClick={onEditOpen}
                  width="100%"
                  justifyContent="start"
                >
                  Legal Statement
                </Button>
                <Modal
                  isOpen={isEditOpen}
                  onClose={onEditClose}
                  useInert={true}
                  closeOnOverlayClick={true}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Legal Disclaimer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      This website is provided on an "as is" basis. The Johns
                      Hopkins University disclaims all responsibility for any
                      loss, injury, claim, liability, or damage of any kind
                      resulting from, arising out of, or any way related to any
                      errors in or omissions from this website and the content,
                      including but not limited to technical inaccuracies and
                      typographical errors. The Johns Hopkins University does
                      not warrant or present that the information available on
                      or through the site will be correct, accurate, timely, or
                      otherwise reliable. The Johns Hopkins University may make
                      improvements and/or changes to its features,
                      functionality, or content at any time.
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>

                <Button
                  leftIcon={<Icon as={MdChecklist} />}
                  variant="ghost"
                  onClick={onTermOpen}
                  width="100%"
                  justifyContent="start"
                >
                  Terms of Service
                </Button>

                <Modal
                  isOpen={isTermOpen}
                  onClose={onTermClose}
                  useInert={false}
                  closeOnEsc={true}
                  closeOnOverlayClick={true}
                  finalFocusRef={finalRef}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Terms of agreements</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      Users of this website shall abide by all applicable
                      federal, state, and local laws, including those pertaining
                      to libel, slander, defamation, trade libel, product
                      disparagement, harassment, invasion of privacy, and
                      copyright and trademark infringement.
                      <br />
                      <br />
                      By accessing this site, you agree to be bound by the terms
                      and conditions of this agreement. This agreement shall not
                      be governed by the Uniform Computer Information
                      Transactions Act (UCITA) as adopted in Maryland under
                      Title 21 of the Commercial Law Article of the Maryland
                      Annotated Code, as amended from time to time. This
                      agreement shall be governed by the common law of Maryland
                      relating to written agreements without giving effect to
                      any conflict of laws principles, as well as other
                      statutory provisions, other than UCITA.
                      <br />
                      <br />
                      The Johns Hopkins Bloomberg School of Public Health may
                      update this agreement without notice. Such updating will
                      in no way relieve you of your obligations under earlier
                      versions of this agreement. Use of this constitutes
                      acceptance of the terms and conditions in place at the
                      moment of use.
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <Button
                  leftIcon={<Icon as={MdHome} />}
                  variant="ghost"
                  onClick={onAboutOpen}
                  width="100%"
                  justifyContent="start"
                >
                  About us
                </Button>
                <Modal
                  isOpen={isAboutOpen}
                  onClose={onAboutClose}
                  autoFocus={true}
                  closeOnEsc={true}
                  closeOnOverlayClick={true}
                  useInert={false}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>About us</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      The Johns Hopkins University is committing to creating a
                      crowd-sourcing application that continuously updated
                      sources of COVID-19 data and expert guidance. We collect
                      and analyze the best data available on cases, deaths,
                      tests, hospitalizations, and vaccines to help the public,
                      policymakers, and healthcare professionals worldwide
                      respond to the pandemic and related complications.
                      <br />
                      <br />
                      Leading PI of the team: <br />
                      Ahmed Hasson; Joseph Coresh;
                      <br />
                      Members of the development team: <br />
                      Nathan Farrel; Hubert Leo; Nora Xu;
                      <br />
                      <br />
                      We would like to thank C4R for providing us with NIH
                      approved questions regarding the recovery of COVID-19 and
                      related complications.
                    </ModalBody>
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
