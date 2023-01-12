import { Flex, HStack, Spacer, Wrap, Text, Switch } from "@chakra-ui/react";
import { Search } from "./Search";
import React from "react";
import { ProfileCheckin } from "./ProfileCheckin";
import { RealOrMock } from "../../pages";

interface HeaderProps {
  markerData: any;
  realOrMock: RealOrMock;
  setRealOrMock: React.Dispatch<React.SetStateAction<RealOrMock>>;
}

export const Header: React.FC<HeaderProps> = ({
  markerData,
  realOrMock,
  setRealOrMock,
}) => {
  return (
    <Flex>
      <Search markerData={markerData} />
      <ProfileCheckin />
      <HStack
        position={"absolute"}
        top="90px"
        right="20px"
        p="15px"
        background={"white"}
        borderRadius={"500px"}
        shadow="xl"
      >
        <Text>Mock</Text>
        <Switch
          colorScheme={"heritageBlue"}
          isChecked={realOrMock === RealOrMock.REAL}
          onChange={() => {
            if (realOrMock === RealOrMock.REAL) {
              setRealOrMock(RealOrMock.MOCK);
            } else {
              setRealOrMock(RealOrMock.REAL);
            }
          }}
        />
        <Text>Real</Text>
      </HStack>
    </Flex>
  );
};
