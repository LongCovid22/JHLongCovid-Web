import mockResult from "../../../../mockResult.json";
import {
  TabPanels,
  Tab,
  VStack,
  Tabs,
  TabList,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import { VaccinationTotalVisuals } from "./VaccinationTotalVisuals";

export const VaccinationVisualizations: React.FC<LeftSidePanelBodyProps> = ({
  section,
  data,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  return (
    <VStack>
      <Tabs variant="enclosed" colorScheme={"hopkinsBlue"}>
        <TabList>
          <Tab fontSize={"14px"}>Total</Tab>
          <Tab fontSize={"14px"}>Age</Tab>
          <Tab fontSize={"14px"}>Race</Tab>
          <Tab fontSize={"14px"}>Sex</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VaccinationTotalVisuals
              section={section}
              data={data}
              panelDimensions={panelDimensions}
              realOrMock={realOrMock}
              loading={loading}
              setLoading={setLoading}
            />
          </TabPanel>
          <TabPanel>Age</TabPanel>
          <TabPanel>race</TabPanel>
          <TabPanel>sex</TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
