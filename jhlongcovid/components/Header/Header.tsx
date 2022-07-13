import { Flex, Spacer, Wrap } from "@chakra-ui/react";
import { Search } from "./Search";
import React from "react";
import { ProfileCheckin } from "./ProfileCheckin";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex>
      <Search />
      <ProfileCheckin />
    </Flex>
  );
};
