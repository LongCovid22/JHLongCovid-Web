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
  Spinner,
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
import { useAppSelector } from "../../../../redux/hooks";
import { selectWidth } from "../../../../redux/slices/viewportSlice";
import {
  createTotalsChartConfig,
  getMostCommonInSummary,
} from "../visualizationFunctions";
import {
  createPHQ8OverTenConfig,
  getAvgPhq8Score,
} from "./phq8VisualizationFunctions";
import { backgroundColors } from "../visualizationFunctions";
import { RealOrMock } from "../../../../pages";
import { SummaryAvgValues } from "../../../../src/API";

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

export const PHQ8TotalVisuals: React.FC<LeftSidePanelBodyProps> = ({
  data,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  const [avgPhq8Score, setAvgPhq8Score] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const [phq8AboveTenConfig, setPhq8AboveTenConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const width = useAppSelector(selectWidth);

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    const createGraphVariables = () => {
      let patientHealthQuestionnaireSummary,
        globalHealthSummary,
        totalFullEntries,
        phq8AboveTen;

      if (data && realOrMock === RealOrMock.REAL) {
        patientHealthQuestionnaireSummary =
          data.patientHealthQuestionnaireSummary;
        globalHealthSummary = data.globalHealthSummary;
        totalFullEntries = data.totalFullEntries;
        phq8AboveTen = data.phq8AboveTen;
      } else {
        patientHealthQuestionnaireSummary =
          mockResult.county.patientHealthQuestionnaireSummary;
        globalHealthSummary = mockResult.county.globalHealthSummary;
        totalFullEntries = mockResult.county.totalFullEntries;
        phq8AboveTen = mockResult.county.phq8AboveTen;
      }

      const colors = [
        backgroundColors.green,
        backgroundColors.yellow,
        backgroundColors.orange,
        backgroundColors.red,
      ];

      if (patientHealthQuestionnaireSummary.avgPHQScore) {
        setAvgPhq8Score(
          getAvgPhq8Score(
            patientHealthQuestionnaireSummary.avgPHQScore
              .race as SummaryAvgValues
          )
        );
      }

      const phq8OverTen =
        phq8AboveTen !== undefined && phq8AboveTen !== null ? phq8AboveTen : 0;
      const phq8Config = createPHQ8OverTenConfig(phq8OverTen, totalEntries);
      setPhq8AboveTenConfig(phq8Config);

      setTotalEntries(totalFullEntries);

      if (setLoading) {
        setLoading(false);
      }
    };

    createGraphVariables();
  }, [data]);

  return (
    <VStack align={"start"} spacing="30px">
      {loading ? (
        <Spinner color="heritageBlue.800" />
      ) : (
        <>
          <Wrap spacing="30px" p={"30px"} shadow="base" borderRadius={"20px"}>
            <WrapItem>
              <Stat>
                <StatLabel>Entries</StatLabel>
                <StatNumber>{totalEntries}</StatNumber>
                <StatHelpText>Total Survey Entries</StatHelpText>
              </Stat>
            </WrapItem>
          </Wrap>
          <Wrap spacing="30px" overflow={"visible"}>
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Doughnut
                options={phq8AboveTenConfig.options}
                data={phq8AboveTenConfig.data}
                height={"300px"}
              />
            </WrapItem>
          </Wrap>
        </>
      )}
    </VStack>
  );
};
