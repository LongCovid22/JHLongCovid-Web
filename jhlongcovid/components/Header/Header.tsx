import { Flex, Spacer, Wrap } from "@chakra-ui/react";
import { Search } from "./Search";
import React from "react";
import { ProfileCheckin } from "./ProfileCheckin";

interface HeaderProps {
  map: google.maps.Map
}

export const Header: React.FC<HeaderProps> = ({map, markerData}) => {
  return (
    <Flex>
      <Search map = {map} markerData = {markerData}/>
      <ProfileCheckin />
    </Flex>
  );
};
