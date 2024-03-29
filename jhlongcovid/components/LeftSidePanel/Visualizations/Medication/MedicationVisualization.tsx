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

export const MedicationVisualization: React.FC<LeftSidePanelBodyProps> = ({
  section,
  data,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  // const [summaryData, setSummaryData] = useState<any>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getCovidSummaries = async () => {
  //     try {
  //       const summaries = await getSummaries(data);
  //       setSummaryData(summaries);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   setLoading(true);
  //   getCovidSummaries();
  // }, [data]);

  return (
    <VStack>
      <COVIDTotalVisuals
        data={data}
        section={section}
        panelDimensions={panelDimensions}
        realOrMock={realOrMock}
        loading={loading}
        setLoading={setLoading}
      />
    </VStack>
  );
};
