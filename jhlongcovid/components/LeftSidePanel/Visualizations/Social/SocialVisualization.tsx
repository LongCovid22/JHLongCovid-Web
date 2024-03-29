import mockResult from "../../../../mockResult.json";
import {
  TabPanels,
  Tab,
  VStack,
  Tabs,
  TabList,
  TabPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import { SocialTotalVisuals } from "./SocialTotalVisualization";
import { LongCovidToggle } from "../../LongCovidToggle";


export const SocialVisualizations: React.FC<LeftSidePanelBodyProps> = ({
  section,
  data,
  longData,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  const [covidDataToggle, setCovidDataToggle] = useState(0);
  return (
    <>
    <LongCovidToggle realData={data} rOM={realOrMock} covidDataToggle={covidDataToggle} setCovidDataToggle={setCovidDataToggle}/>
    <VStack>
      
      <SocialTotalVisuals
        section={section}
        data={data}
        longData={longData}
        panelDimensions={panelDimensions}
        realOrMock={realOrMock}
        loading={loading}
        setLoading={setLoading}
        covidDataToggle={covidDataToggle}
      />
    </VStack>
    </>
    
  );
};
