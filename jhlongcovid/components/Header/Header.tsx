import { Flex, HStack, Spacer, Wrap, Text, Switch } from "@chakra-ui/react";
import { Search } from "./Search";
import React from "react";
import { ProfileCheckin } from "./ProfileCheckin";
import { RealOrMock } from "../../pages";

interface HeaderProps {
  markerType: any;
  markerData: any;
  realOrMock: RealOrMock;
  setRealOrMock: React.Dispatch<React.SetStateAction<RealOrMock>>;
  showInstructions: boolean;
  setShowInstructions: React.Dispatch<React.SetStateAction<boolean>>;
  showSurveyOnLaunch?: boolean;
  setShowSurveyOnLaunch?: React.Dispatch<React.SetStateAction<boolean>>;
  setMarkerType?: React.Dispatch<
    React.SetStateAction<"totalLongCovid" | "totalCovid">
  >;
}

export const Header: React.FC<HeaderProps> = ({
  markerType,
  markerData,
  realOrMock,
  setRealOrMock,
  showInstructions,
  setShowInstructions,
  showSurveyOnLaunch,
  setShowSurveyOnLaunch,
  setMarkerType,
}) => {
  return (
    <Flex>
      <Search markerType={markerType} markerData={markerData} />
      <ProfileCheckin
        showInstructions={showInstructions}
        setShowInstructions={setShowInstructions}
        showSurveyOnLaunch={showSurveyOnLaunch}
        setShowSurveyOnLaunch={setShowSurveyOnLaunch}
        setMarkerType={setMarkerType}
      />
      {/* <HStack
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
      </HStack> */}
    </Flex>
  );
};
