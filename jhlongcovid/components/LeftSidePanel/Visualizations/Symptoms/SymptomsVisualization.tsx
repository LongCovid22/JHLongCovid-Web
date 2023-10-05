import mockResult from "../../../../mockResult.json";
import {
  VStack,
  Center,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import { SymptomsTotalVisuals } from "./SymptomsTotalVisualization";
import { LongCovidToggle } from "../../LongCovidToggle";

export const SymptomsVisualizations: React.FC<LeftSidePanelBodyProps> = ({
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
    
    
    <LongCovidToggle rOM={realOrMock}  covidDataToggle={covidDataToggle} setCovidDataToggle={setCovidDataToggle}/>
    
    <VStack>
      
      <SymptomsTotalVisuals
        section={section}
        data={data}
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
