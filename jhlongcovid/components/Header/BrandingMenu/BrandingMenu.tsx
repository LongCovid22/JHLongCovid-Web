import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  VStack,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { PrivacyStatement } from "./PrivacyStatement";
import { LegalStatement } from "./LegalStatement";
import { TermsOfService } from "./TermsOfService";
import { AboutUs } from "./AboutUs";

export const BrandingMenu = () => {
  return (
    <Menu isLazy closeOnBlur={false} closeOnSelect={false}>
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
        <VStack spacing={3} maxWidth={300}>
          {/* <Image
            src="/bloomberg.logo.horizontal.blue.jpg"
            alt="BSPH Logo Vertical"
            height={"60px"}
          /> */}
          <Text fontSize="sm" color="black">
            <strong>
              JHU.edu Copyright © {new Date().getFullYear()} by Johns Hopkins University & Medicine.
              All rights reserved.
            </strong>
          </Text>
          <PrivacyStatement />
          <LegalStatement />
          <TermsOfService />
          <AboutUs />
        </VStack>
      </MenuList>
    </Menu>
  );
};
