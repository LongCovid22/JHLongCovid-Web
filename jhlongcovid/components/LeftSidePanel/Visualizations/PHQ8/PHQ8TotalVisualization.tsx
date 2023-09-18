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
  VStack, Tooltip as ChakraTooltip,
  Spinner,
} from "@chakra-ui/react";

import { QuestionOutlineIcon } from '@chakra-ui/icons';
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
import {
  PatientHealthQuestionnaireSummary,
  SummaryAvgValues,
} from "../../../../src/API";

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
  let patientHealthQuestionnaireSummary: any,
    globalHealthSummary,
    totalFullEntries: number,
    phq8AboveTen;

  if (data && realOrMock === RealOrMock.REAL) {
    patientHealthQuestionnaireSummary = data.patientHealthQuestionnaireSummary;
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

  const phq8OverTen =
    phq8AboveTen !== undefined && phq8AboveTen !== null ? phq8AboveTen : 0;
  const phq8Config = createPHQ8OverTenConfig(phq8OverTen, totalFullEntries);
  // const [avgPhq8Score, setAvgPhq8Score] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const width = useAppSelector(selectWidth);

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    const createGraphVariables = () => {
      if (setLoading) {
        setLoading(true);
      }

      // if (patientHealthQuestionnaireSummary.avgPHQScore) {
      //   setAvgPhq8Score(
      //     getAvgPhq8Score(
      //       patientHealthQuestionnaireSummary.avgPHQScore
      //         .race as SummaryAvgValues
      //     )
      //   );
      // }

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
              <ChakraTooltip label="PHQ8 is a 8 question survey established as a valid diagnostic and severity measure for depressive disorders. Scores are rated as normal (0-2), mild (3-5), moderate (6-8), and severe (9-12)." maxW="150px" fontSize="sm">
                <QuestionOutlineIcon boxSize={5} ml={1} mr={1} mt={2} />
              </ChakraTooltip>
              <Doughnut
                options={phq8Config.options}
                data={phq8Config.data}
                height={"300px"}
              />
            </WrapItem>
          </Wrap>
        </>
      )}
    </VStack>
  );
};
