import { Box, Input, CloseButton, IconButton, Flex, Slide, Image, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Header.module.css";
import { Search2Icon } from "@chakra-ui/icons";
import { hopkinsBlue } from "../../theme/styles";

import { HamburgerIcon } from '@chakra-ui/icons';
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface SearchProps { }

export const Search: React.FC<SearchProps> = () => {
  const height = useAppSelector(selectHeight);

  const {isOpen, onToggle} = useDisclosure();

  return (
    <Flex
      className={styles.leftHeaderStack}
      align="center"
      gap={3}
      boxShadow={"xl"}
    >


      <IconButton
        // colorScheme='blue'
        aria-label='Search database'

        bg="hopkinsBlue.100"
        color="hopkinsBlue.600"


        icon={<HamburgerIcon



        />}

        onClick = {onToggle}
      />

      <Slide direction="left" in={isOpen}

        style={{
          minWidth: "410px",
          width: "35%",
          position: "absolute",
          top: "100px",
          left: "0px",
          height: height - 200
        }}

      >

        <Box bg='white'
            rounded='md'
            shadow='md'>

          <CloseButton
            size={"md"}
            bgColor="hopkinsBlue.100"
            color={"hopkinsBlue.600"}
            onClick = {onToggle}
          />

          <Box

            overflowY="auto"
            p='40px'
            color='white'
            mt='4'
            bg='white'
            rounded='md'
            shadow='md'

            height={height - 200}
          >

            <Image src='/jhu_logo.jpg' alt='Dan Abramov' />
            <Text fontSize='sm' color="black" fontWeight="bold">
              Johns Hopkins experts in global public health, infectious disease, and emergency preparedness have been at the forefront of the international response to COVID-19.
            </Text>
            <br></br>
            <Text fontSize='sm' color="black" >
              This website is a resource to help advance the understanding of the virus, inform the public, and brief policymakers in order to guide a response, improve care, and save lives.

            </Text>



            <br></br>

            <Text fontSize='sm' color="black" >
              We value your privacy for any and all information you chose to share through this website. Please see our Terms of Use, and to know how we use your personal data, please see our Privacy Policy
            </Text>

            <br></br>

            <Text fontSize='sm' color="black" >
              Privacy Statement <br></br>
              JHU.edu Copyright © 2022 by Johns Hopkins University & Medicine. All rights reserved.
            </Text>


          </Box>
        </Box>

      </Slide>
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
