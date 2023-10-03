import mockResult from "../../../../mockResult.json";
import {
  TabPanels,
  Tab,
  VStack,
  Tabs,
  TabList,
  TabPanel,
} from "@chakra-ui/react";
import React, {useState} from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import { VaccinationTotalVisuals } from "./VaccinationTotalVisuals";
import { LongCovidToggle } from "../../LongCovidToggle";

export const VaccinationVisualizations: React.FC<LeftSidePanelBodyProps> = ({
  section,
  data,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  const [covidDataToggle, setCovidDataToggle] = useState(0);
  return (
    <VStack>
      <LongCovidToggle covidDataToggle={covidDataToggle} setCovidDataToggle={setCovidDataToggle}/>
      <VaccinationTotalVisuals
        section={section}
        data={data}
        panelDimensions={panelDimensions}
        realOrMock={realOrMock}
        loading={loading}
        setLoading={setLoading}
        covidDataToggle={covidDataToggle}
      />
    </VStack>
  );
};
