import mockResult from "../../../../mockResult.json";
import {
  TabPanels,
  Tab,
  VStack,
  Tabs,
  TabList,
  TabPanel,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import { COVIDTotalVisuals } from "./COVIDTotalVisuals";
import { getSummaries } from "./covidVisualizationFunctions";

export const COVIDVisualizations: React.FC<LeftSidePanelBodyProps> = ({
  section,
  data,
  panelDimensions,
  realOrMock,
}) => {
  const [summaryData, setSummaryData] = useState<any>(null);

  useEffect(() => {
    const getCovidSummaries = async () => {
      try {
        const summaries = await getSummaries(data);
        setSummaryData(summaries);
      } catch (error) {
        console.log(error);
      }
    };
    getCovidSummaries();
  }, [data]);

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
            <COVIDTotalVisuals
              data={summaryData}
              section={section}
              panelDimensions={panelDimensions}
              realOrMock={realOrMock}
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
