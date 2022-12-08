import React, { useEffect, useState } from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import mockResult from "../../../../mockResult.json";
import {
  MedicationsAvailable,
  NeverToAlways,
  OneToFivePlus,
  OneToThreePlus,
  PoorToExcellent,
  SummaryDemos,
  SymptomsAvailable,
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
  createSymptomCountConfig,
  getSymptomsCount,
} from "./symptomsVisualizationFunctions";

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

type SymptomSummary = {
  symptomCounts: SymptomsAvailable;
  qualityOfLife: PoorToExcellent;
  mentalHealthRank: PoorToExcellent;
  socialSatisfactionRank: PoorToExcellent;
  carryOutSocialActivitiesRank: PoorToExcellent;
  anxietyInPastWeekRank: NeverToAlways;
};

export const SymptomsTotalVisuals: React.FC<LeftSidePanelBodyProps> = ({
  data,
  panelDimensions,
}) => {
  const { symptomSummary, covidSummary } = mockResult.county;
  const [totalSymptomsCount, setTotalSymptomsCount] = useState(0);
  const [symptomCountConfig, setSymptomCountConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const width = useAppSelector(selectWidth);

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    const summary: SymptomSummary = symptomSummary;
    setTotalSymptomsCount(getSymptomsCount(covidSummary.symptomatic));
    setSymptomCountConfig(createSymptomCountConfig(summary.symptomCounts));
  }, [data]);

  return (
    <VStack align={"start"}>
      <Wrap spacing="30px">
        <WrapItem>
          <Stat>
            <StatLabel>Symptoms Count</StatLabel>
            <StatNumber>{totalSymptomsCount}</StatNumber>
            <StatHelpText>Total people w/ symptoms</StatHelpText>
          </Stat>
        </WrapItem>
      </Wrap>
      {/* Graph Wrap */}
      <Wrap spacing="30px">
        <WrapItem width={panelDimensions.width - 100}>
          <Bar
            options={symptomCountConfig.options}
            data={symptomCountConfig.data}
            height={"300px"}
          />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};
