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
  realOrMock,
  loading,
  setLoading,
}) => {
  return (
    <VStack>
      {/* <Tabs variant="enclosed" colorScheme={"heritageBlue"}>
        <TabList>
          <Tab fontSize={"14px"}>Total</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            
          </TabPanel>
        </TabPanels>
      </Tabs> */}
      <PHQ8TotalVisuals
        section={section}
        data={data}
        realOrMock={realOrMock}
        panelDimensions={panelDimensions}
        loading={loading}
        setLoading={setLoading}
      />
    </VStack>
  );
};
