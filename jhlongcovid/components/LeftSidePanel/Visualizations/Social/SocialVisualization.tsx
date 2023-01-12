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
import { SocialTotalVisuals } from "./SocialTotalVisualization";

export const SocialVisualizations: React.FC<LeftSidePanelBodyProps> = ({
  section,
  data,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  return (
    <VStack>
      <Tabs variant="enclosed" colorScheme={"heritageBlue"}>
        <TabList>
          <Tab fontSize={"14px"}>Total</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SocialTotalVisuals
              section={section}
              data={data}
              panelDimensions={panelDimensions}
              realOrMock={realOrMock}
              loading={loading}
              setLoading={setLoading}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
