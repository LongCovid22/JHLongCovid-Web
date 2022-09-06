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
import { Search2Icon } from "@chakra-ui/icons";
import { hopkinsBlue } from "../../theme/styles";

import { HamburgerIcon } from "@chakra-ui/icons";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { MdOutlinePrivacyTip, MdChecklist, MdAirlineSeatIndividualSuite } from "react-icons/md";

import { ImNewspaper } from "react-icons/im";
import { ComponentPropsToStylePropsMap } from "@aws-amplify/ui-react";

interface SearchProps { }


var axios = require('axios');

import SearchLocationInput from './searchLocationInput';


export const Search: React.FC<SearchProps> = ({map, markerData}) => {
  const height = useAppSelector(selectHeight);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = React.useState('');

  const [places, setPlaces] = React.useState([]);


  const handleChange = async (event) => {
    setInput(event.target.value);

    if (event.target.value) {
      var config = {
        method: 'get',
        url: 'http://localhost:3000/?string=' + event.target.value
      }

      try {
        let res = await axios(config);
        setPlaces(res.data.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setPlaces([]);
    }

    console.log(places);

  }

  

  // let isOpen = false;
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
              marginTop: 10,
            }}
          >
            <VStack spacing={4} maxWidth={300}>
              <Image src="/jhu_logo.jpg" />
              <Text fontSize="sm" color="black">
                <strong>
                  JHU.edu Copyright © 2022 by Johns Hopkins University & Medicine.
                  All rights reserved.
                </strong>
              </Text>
              <Text fontSize="sm" color="black">
                Johns Hopkins experts in global public health, infectious disease,
                and emergency preparedness have been at the forefront of the
                international response to COVID-19. Privacy has been at the
                forefront of our work.
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
                    <ModalBody>"Hey"</ModalBody>
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
                    <ModalBody>"Hey"</ModalBody>
                  </ModalContent>
                </Modal>
              </VStack>
            </VStack>
          </MenuList>
        </Menu>
        <SearchLocationInput map = {map} markerData = {markerData}/>
      </Flex>


      {
        (input.length > 0 && places.length > 0 && places[0] != null) &&
        <Flex
          className={styles.newLeft}
          align="center"
          gap={3}
          boxShadow={"xl"}
        >

          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
          >
            {
              places.map((value, index) =>
                <Box key={index} h='30px'>
                  {value}
                </Box>

              )
            }
          </VStack>
        </Flex>
      }
    </>





  );
};
