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
import { PHQ8TotalVisuals } from "./PHQ8TotalVisualization";
import { LongCovidToggle } from "../../LongCovidToggle";

export const PHQ8Visualizations: React.FC<LeftSidePanelBodyProps> = ({
  section,
  data,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  const [covidDataToggle, setCovidDataToggle] = useState(0);
  return (
    <>
      <LongCovidToggle rOM={realOrMock} covidDataToggle={covidDataToggle} setCovidDataToggle={setCovidDataToggle} />

      <VStack>
        <PHQ8TotalVisuals
          section={section}
          data={data}
          realOrMock={realOrMock}
          panelDimensions={panelDimensions}
          loading={loading}
          setLoading={setLoading}
          covidDataToggle={covidDataToggle}
        />
      </VStack>
    </>

  );
};
