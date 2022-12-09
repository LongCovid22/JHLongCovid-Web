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
  getMostCommonSymptom,
} from "./symptomsVisualizationFunctions";
import { createTotalsChartConfig } from "../visualizationFunctions";

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
  const [mostCommonSymptom, setMostCommonSymptom] = useState("");
  const [symptomCountConfig, setSymptomCountConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [qualityOfLife, setQOLConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [mentalHealthRank, setMentalHealthConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [socialSatisfactionRank, setSocialSatisConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [carryOutSocial, setCarryOutSocialConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [anxiety, setAnxietyConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const width = useAppSelector(selectWidth);

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    const summary: SymptomSummary = symptomSummary;
    setTotalSymptomsCount(getSymptomsCount(covidSummary.symptomatic));
    setMostCommonSymptom(getMostCommonSymptom(summary.symptomCounts));
    setSymptomCountConfig(createSymptomCountConfig(summary.symptomCounts));
    setQOLConfig(
      createTotalsChartConfig(
        summary.qualityOfLife,
        "Quality of Life",
        "People"
      )
    );
    setMentalHealthConfig(
      createTotalsChartConfig(
        summary.qualityOfLife,
        "Mental Health Rank",
        "People"
      )
    );
    setSocialSatisConfig(
      createTotalsChartConfig(
        summary.socialSatisfactionRank,
        "Social Satisfaction Rank",
        "People"
      )
    );
    setCarryOutSocialConfig(
      createTotalsChartConfig(
        summary.socialSatisfactionRank,
        "Carry Out Social Activities Rank",
        "People"
      )
    );
    setAnxietyConfig(
      createTotalsChartConfig(
        summary.socialSatisfactionRank,
        "Anxiety In Past Week",
        "People"
      )
    );
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
        <WrapItem>
          <Stat>
            <StatLabel>Most Common Symptom</StatLabel>
            <StatNumber>{mostCommonSymptom}</StatNumber>
            <StatHelpText>Most common symptom reported</StatHelpText>
          </Stat>
        </WrapItem>
      </Wrap>
      <Wrap spacing="30px">
        <WrapItem width={panelDimensions.width - 100}>
          <Bar
            options={symptomCountConfig.options}
            data={symptomCountConfig.data}
            height={"300px"}
          />
        </WrapItem>
        <WrapItem width={width < 1500 ? "300px" : "325px"}>
          <Bar
            options={qualityOfLife.options}
            data={qualityOfLife.data}
            height={"300px"}
          />
        </WrapItem>
        <WrapItem width={width < 1500 ? "300px" : "325px"}>
          <Bar
            options={mentalHealthRank.options}
            data={mentalHealthRank.data}
            height={"300px"}
          />
        </WrapItem>
        <WrapItem width={width < 1500 ? "300px" : "325px"}>
          <Bar
            options={socialSatisfactionRank.options}
            data={socialSatisfactionRank.data}
            height={"300px"}
          />
        </WrapItem>
        <WrapItem width={width < 1500 ? "300px" : "325px"}>
          <Bar
            options={carryOutSocial.options}
            data={carryOutSocial.data}
            height={"300px"}
          />
        </WrapItem>
        <WrapItem width={width < 1500 ? "300px" : "325px"}>
          <Bar options={anxiety.options} data={anxiety.data} height={"300px"} />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};
