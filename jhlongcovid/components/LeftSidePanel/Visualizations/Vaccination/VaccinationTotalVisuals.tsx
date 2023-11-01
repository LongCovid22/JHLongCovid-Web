import React, { useEffect, useState } from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import mockResult from "../../../../mockResult.json";
import {
  MedicationsAvailable,
  OneToFivePlus,
  OneToThreePlus,
  SummaryDemos,
  VaccineType,
  YesNo,
  YesNoDontKnow,
} from "../answerTypes";
import {
  Wrap,
  WrapItem,
  Stat,
  Text,
  StatLabel,
  StatNumber,
  StatHelpText,
  VStack,
  Box,
  Center,
} from "@chakra-ui/react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import faker from "faker";
import { useAppSelector } from "../../../../redux/hooks";
import { selectWidth } from "../../../../redux/slices/viewportSlice";
import {
  createTotalVaccineShotsConfig,
  createVaccineTypeConfig,
  getVaccinations,
} from "./vaccinationVisualizationFunctions";
import { RealOrMock } from "../../../../pages";
import { VaccineTypes } from "../../../../src/API";

import { numberAndPercentage } from "../COVID/COVIDTotalVisuals";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

type VaccinationSummary = {
  vaccinated: YesNo;
  totalVaccineShots: OneToFivePlus;
  vaccineType: VaccineType;
};

export const VaccinationTotalVisuals: React.FC<LeftSidePanelBodyProps> = ({
  data,
  longData,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
  covidDataToggle
}) => {
  const [totalVaccinated, setTotalVaccinated] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const [vaccineCountConfig, setVaccineCountConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [vaccineTypeCountConfig, setVaccineTypeCountConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const width = useAppSelector(selectWidth);

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    let summary, totalFullEntries;
    if (data && realOrMock === RealOrMock.REAL) {
      if (covidDataToggle == 0) {
        summary = longData.vaccinationSummary;
        totalFullEntries = data.longCovid;
      } else {
        summary = data.vaccinationSummary;
        totalFullEntries = data.totalFullEntries;
      }
    } else {
      if (covidDataToggle == 0) {
        summary = mockResult.county.vaccinationSummary;
        totalFullEntries = mockResult.county.covidSummary.covidAndLongCovidOrLongCovidOver4Weeks.total;
      } else {
        summary = mockResult.longCOVID.vaccinationSummary;
        totalFullEntries = mockResult.county.totalFullEntries;
      }

    }

    setTotalEntries(totalFullEntries);
    setTotalVaccinated(getVaccinations(summary.vaccinated as YesNo));
    setVaccineCountConfig(
      createTotalVaccineShotsConfig(summary.totalVaccineShots as OneToFivePlus)
    );
    setVaccineTypeCountConfig(
      createVaccineTypeConfig(summary.vaccineType as VaccineTypes)
    );
  }, [data, realOrMock, covidDataToggle, longData]);


  return (
    <VStack align={"start"}>
      <Wrap spacing="30px" p={"30px"} shadow="base" borderRadius={"20px"}>
        <WrapItem>
          <Stat>
            {numberAndPercentage(
              totalVaccinated,
              Math.round((totalVaccinated / totalEntries) * 100),
              "Vaccinated",
              "Number of participants that have received a COVID vaccine. % represents this figure divided by either number of participants with Long COVID or total number of survey participants."
            )}
          </Stat>
        </WrapItem>
      </Wrap>
      {/* Graph Wrap */}
      <Wrap spacing="30px" overflow={"visible"}>
        <Center w="100%">
          <Text fontSize={"md"}>
            The following graphs are about participants that self-reported vaccination.
          </Text>
        </Center>
        <WrapItem
          width={panelDimensions.width * 0.5 - 80}
          p={"30px"}
          shadow="base"
          borderRadius={"20px"}
          minWidth="340px"
        >
          <Bar
            options={vaccineCountConfig.options}
            data={vaccineCountConfig.data}
            height={"350px"}
            width={
              panelDimensions.width * 0.5 - 80 < 420
                ? "340px"
                : panelDimensions.width * 0.5 - 80
            }
          />
        </WrapItem>
        <WrapItem
          width={panelDimensions.width * 0.5 - 80}
          p={"30px"}
          shadow="base"
          borderRadius={"20px"}
          minWidth="340px"
        >
          <Bar
            options={vaccineTypeCountConfig.options}
            data={vaccineTypeCountConfig.data}
            height={"350px"}
            width={
              panelDimensions.width * 0.5 - 80 < 420
                ? "340px"
                : panelDimensions.width * 0.5 - 80
            }
          />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};
