import {
  Box, Input,
  IconButton, Flex,
  useDisclosure, Menu,
  MenuButton, MenuList, MenuItem, Image, Text, Icon,
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter, Button
} from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Header.module.css";
import { Search2Icon } from "@chakra-ui/icons";
import { hopkinsBlue } from "../../theme/styles";

import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { MdOutlinePrivacyTip, MdChecklist } from 'react-icons/md';

import { ImNewspaper } from "react-icons/im";

interface SearchProps { }

export const Search: React.FC<SearchProps> = () => {
  const height = useAppSelector(selectHeight);

  const { isOpen, onOpen, onClose } = useDisclosure();

  // let isOpen = false;
  return (
    <Flex
      className={styles.leftHeaderStack}
      align="center"
      gap={3}
      boxShadow={"xl"}
    >

      <Menu closeOnBlur = {false}>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList style={{
          minWidth: "250px",
          width: "15%",
        }}>

          <Box className={styles.Image}>

            <Image src='/jhu_logo.jpg'/>

            <Text fontSize='sm' color="black" >
              <strong>
                JHU.edu Copyright © 2022 by Johns Hopkins University & Medicine. All rights reserved.
              </strong>
              <br></br>
              Johns Hopkins experts in global public health, infectious disease, and emergency preparedness have been at the forefront of the international response to COVID-19. Privacy has been at the forefront
              of our work.
            </Text>


            <Button leftIcon={<Icon as={MdOutlinePrivacyTip} />} variant="ghost" justifyContent="flex-start" onClick={onOpen} style={{
              width: "100%",
            }}>
              Privacy Statement</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Privacy Stuff</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  
                </ModalBody>
              </ModalContent>
            </Modal>

            <Button leftIcon={<Icon as={ImNewspaper} />} variant="ghost" justifyContent="flex-start" onClick={onOpen} style={{
              width: "100%",
            }}>
              

               Legal Statement
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Legal Stuff</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  "Hey"
                </ModalBody>

                
              </ModalContent>
            </Modal>

            <Button leftIcon={<Icon as={MdChecklist} />} variant="ghost" justifyContent="flex-start" onClick={onOpen} style={{
              width: "100%",
            }}>
              
              Terms of Service</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Terms of Service Stuff</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  "Hey"
                </ModalBody>

             
              </ModalContent>
            </Modal>



          </Box>







        </MenuList>
      </Menu>


      <Box flex={1}>
        <Input
          variant="unstyled"
          placeholder="Search for an address"
          className={styles.search}
        />
      </Box>
      <Box>
        <IconButton
          aria-label="Search address"
          icon={<Search2Icon />}
          borderRadius={"50%"}
          bg="hopkinsBlue.100"
          color="hopkinsBlue.600"
        />
      </Box>
    </Flex>
  );
};
