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
  StatLabel,
  StatNumber,
  StatHelpText,
  VStack,
  Box,
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
  panelDimensions,
}) => {
  const { vaccinationSummary } = mockResult.county;
  const [totalVaccinated, setTotalVaccinated] = useState(0);
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
    const summary: VaccinationSummary = vaccinationSummary;
    setTotalVaccinated(getVaccinations(summary.vaccinated));
    setVaccineCountConfig(
      createTotalVaccineShotsConfig(summary.totalVaccineShots)
    );
    setVaccineTypeCountConfig(createVaccineTypeConfig(summary.vaccineType));
  }, [data]);

  return (
    <VStack align={"start"}>
      <Wrap spacing="30px">
        <WrapItem>
          <Stat>
            <StatLabel>Vaccinated</StatLabel>
            <StatNumber>{totalVaccinated}</StatNumber>
            <StatHelpText>Total people vaccinated</StatHelpText>
          </Stat>
        </WrapItem>
      </Wrap>
      {/* Graph Wrap */}
      <Wrap spacing="30px">
        <WrapItem width={width < 1500 ? "300px" : "400px"}>
          <Bar
            options={vaccineCountConfig.options}
            data={vaccineCountConfig.data}
            height={"400px"}
          />
        </WrapItem>
        <WrapItem width={width < 1500 ? "300px" : "400px"}>
          <Bar
            options={vaccineTypeCountConfig.options}
            data={vaccineTypeCountConfig.data}
            height={"400px"}
          />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};
