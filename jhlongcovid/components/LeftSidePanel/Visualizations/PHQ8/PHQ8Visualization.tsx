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
import { PHQ8TotalVisuals } from "./PHQ8TotalVisualization";

export const PHQ8Visualizations: React.FC<LeftSidePanelBodyProps> = ({
  section,
  data,
  panelDimensions,
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
            <PHQ8TotalVisuals
              section={section}
              data={data}
              panelDimensions={panelDimensions}
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
