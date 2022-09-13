import { Flex, Spacer, Wrap } from "@chakra-ui/react";
import { Search } from "./Search";
import React from "react";
import { ProfileCheckin } from "./ProfileCheckin";

interface HeaderProps {
  markerData: any;
}

export const Header: React.FC<HeaderProps> = ({ markerData }) => {
  return (
    <Flex>
      <Search markerData={markerData} />
      <ProfileCheckin />
    </Flex>
  );
};
