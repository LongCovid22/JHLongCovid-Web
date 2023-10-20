import {
  VStack,
} from "@chakra-ui/react";
import React, {useState} from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import { VaccinationTotalVisuals } from "./VaccinationTotalVisuals";
import { LongCovidToggle } from "../../LongCovidToggle";

export const VaccinationVisualizations: React.FC<LeftSidePanelBodyProps> = ({
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
    <LongCovidToggle rOM={realOrMock} covidDataToggle={covidDataToggle} setCovidDataToggle={setCovidDataToggle} realData={data}/>

    <VStack>
      
      <VaccinationTotalVisuals
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
