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
import { getAvgPhq8Score } from "./phq8VisualizationFunctions";
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
  const [littleInterestConfig, setLittleInterestConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [downDepressedConfig, setDownDepressedConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [sleepProbConfig, setSleepProbConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [tiredConfig, setTiredConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [dietConfig, setDietConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [badSelfConfig, setBadSelfConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [concentrateConfig, setConcentrateConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [slowConfig, setSlowConfig] = useState<{
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
        totalFullEntries;

      if (data && realOrMock === RealOrMock.REAL) {
        patientHealthQuestionnaireSummary =
          data.patientHealthQuestionnaireSummary;
        globalHealthSummary = data.globalHealthSummary;
        totalFullEntries = data.totalFullEntries;
      } else {
        patientHealthQuestionnaireSummary =
          mockResult.county.patientHealthQuestionnaireSummary;
        globalHealthSummary = mockResult.county.globalHealthSummary;
        totalFullEntries = mockResult.county.totalFullEntries;
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

      if (patientHealthQuestionnaireSummary.littleInterestThings) {
        setLittleInterestConfig(
          createTotalsChartConfig(
            patientHealthQuestionnaireSummary.littleInterestThings,
            "Interest in Things",
            "People",
            colors
          )
        );
      }

      if (patientHealthQuestionnaireSummary.downDepressedHopeless) {
        setDownDepressedConfig(
          createTotalsChartConfig(
            patientHealthQuestionnaireSummary.downDepressedHopeless,
            "Down, Depressed, or Hopeless",
            "People",
            colors
          )
        );
      }

      if (patientHealthQuestionnaireSummary.sleepProblems) {
        setSleepProbConfig(
          createTotalsChartConfig(
            patientHealthQuestionnaireSummary.sleepProblems,
            "Sleep Problems",
            "People",
            colors
          )
        );
      }

      if (patientHealthQuestionnaireSummary.tiredNoEnergy) {
        setTiredConfig(
          createTotalsChartConfig(
            patientHealthQuestionnaireSummary.tiredNoEnergy,
            "Tired or No Energy",
            "People",
            colors
          )
        );
      }

      if (patientHealthQuestionnaireSummary.dietProblems) {
        setDietConfig(
          createTotalsChartConfig(
            patientHealthQuestionnaireSummary.dietProblems,
            "Diet Problems",
            "People",
            colors
          )
        );
      }

      if (patientHealthQuestionnaireSummary.badAboutSelf) {
        setBadSelfConfig(
          createTotalsChartConfig(
            patientHealthQuestionnaireSummary.badAboutSelf,
            "Bad About Self",
            "People",
            colors
          )
        );
      }

      if (patientHealthQuestionnaireSummary.concentrationProblems) {
        setConcentrateConfig(
          createTotalsChartConfig(
            patientHealthQuestionnaireSummary.concentrationProblems,
            "Concentrate",
            "People",
            colors
          )
        );
      }

      if (patientHealthQuestionnaireSummary.slowOrRestless) {
        setSlowConfig(
          createTotalsChartConfig(
            patientHealthQuestionnaireSummary.slowOrRestless,
            "Slow or Restless",
            "People",
            colors
          )
        );
      }

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
            {/* <WrapItem>
              <Stat>
                <StatLabel>Avg. PHQ8 Score</StatLabel>
                <StatNumber>{avgPhq8Score}</StatNumber>
                <StatHelpText>Average PHQ8 score</StatHelpText>
              </Stat>
            </WrapItem> */}
          </Wrap>
          <Wrap spacing="30px">
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={littleInterestConfig.options}
                data={littleInterestConfig.data}
                height={"300px"}
              />
            </WrapItem>
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={downDepressedConfig.options}
                data={downDepressedConfig.data}
                height={"300px"}
              />
            </WrapItem>
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={sleepProbConfig.options}
                data={sleepProbConfig.data}
                height={"300px"}
              />
            </WrapItem>
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={tiredConfig.options}
                data={tiredConfig.data}
                height={"300px"}
              />
            </WrapItem>
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={dietConfig.options}
                data={dietConfig.data}
                height={"300px"}
              />
            </WrapItem>
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={badSelfConfig.options}
                data={badSelfConfig.data}
                height={"300px"}
              />
            </WrapItem>
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={concentrateConfig.options}
                data={concentrateConfig.data}
                height={"300px"}
              />
            </WrapItem>
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={slowConfig.options}
                data={slowConfig.data}
                height={"300px"}
              />
            </WrapItem>
          </Wrap>
        </>
      )}
    </VStack>
  );
};
