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
  createTotalsChartConfig,
  getMostCommonInSummary,
} from "../visualizationFunctions";
import {
  createhasMedInsurConfig,
  capitalizeFirstLetters,
} from "./socialVisualizationFunctions";

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

export const SocialTotalVisuals: React.FC<LeftSidePanelBodyProps> = ({
  data,
  panelDimensions,
}) => {
  const { socialSummary } = mockResult.county;
  const [mostCommonWorkSituation, setMostCommonWorkSituation] = useState("");
  const [hasMedicalInsuranceConfig, setHasMedicalInsuranceConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [workSituationConfig, setWorkSituationConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [coveringExpensesConfig, setCoveringExpensesConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const width = useAppSelector(selectWidth);

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    const createGraphVariables = () => {
      setMostCommonWorkSituation(
        capitalizeFirstLetters(
          getMostCommonInSummary(socialSummary.currentWorkSituation)
        )
      );
      setHasMedicalInsuranceConfig(
        createhasMedInsurConfig(socialSummary.hasMedicalInsurance)
      );
      setWorkSituationConfig(
        createTotalsChartConfig(
          socialSummary.currentWorkSituation,
          "Work Situations",
          "People"
        )
      );
      setCoveringExpensesConfig(
        createTotalsChartConfig(
          socialSummary.difficultCoveringExpenses,
          "Difficulty Covering Expenses",
          "People"
        )
      );
    };

    createGraphVariables();
  }, [data]);

  return (
    <VStack align={"start"}>
      <Wrap spacing="30px">
        <WrapItem>
          <Stat>
            <StatLabel>Most Common Work Situation</StatLabel>
            <StatNumber>{mostCommonWorkSituation}</StatNumber>
            <StatHelpText>Most common work situation</StatHelpText>
          </Stat>
        </WrapItem>
      </Wrap>
      <Wrap spacing="30px">
        <WrapItem width={width < 1500 ? "300px" : "375px"}>
          <Bar
            options={hasMedicalInsuranceConfig.options}
            data={hasMedicalInsuranceConfig.data}
            height={"300px"}
          />
        </WrapItem>
        <WrapItem width={width < 1500 ? "300px" : "375px"}>
          <Bar
            options={workSituationConfig.options}
            data={workSituationConfig.data}
            height={"300px"}
          />
        </WrapItem>
        <WrapItem width={width < 1500 ? "300px" : "375px"}>
          <Bar
            options={coveringExpensesConfig.options}
            data={coveringExpensesConfig.data}
            height={"300px"}
          />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};
