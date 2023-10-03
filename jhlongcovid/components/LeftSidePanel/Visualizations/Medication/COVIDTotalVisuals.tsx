import React, { useEffect, useState } from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import mockResult from "../../../../mockResult.json";
import {
  createMedicationsTakenConfig,
  getPercentMedications,
  getPercentSymptomatic,
  getTotalCovidCases,
  getTotalHospitalizations,
  getTotalSymptomatic,
  percentOfTotalCovid,
  createRecoveryConfig,
  getTotalPrescribed,
} from "./covidVisualizationFunctions";
import {
  MedicationsAvailable,
  OneToThreePlus,
  SummaryDemos,
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
  Tooltip as ChakraTooltip,
  HStack,
  Flex,
} from "@chakra-ui/react";

import { QuestionOutlineIcon } from "@chakra-ui/icons";
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
import { RealOrMock } from "../../../../pages";

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

type CovidSummary = {
  beenInfected: YesNo;
  timesPositive: OneToThreePlus;
  hospitalized: YesNo;
  timesHospitalized: OneToThreePlus;
  tested: YesNo;
  positiveTest: YesNoDontKnow;
  symptomatic: YesNo;
  medicationsPrescribed: YesNoDontKnow;
  medicationsTakenCount: MedicationsAvailable;
};

type RecoverySummary = {
  recovered: YesNo;
  avglengthOfRecovery: SummaryDemos;
};

export const numberAndPercentage = (
  num: number,
  percentage: number,
  title: string,
  description: string
) => {
  return (
    <>
      <StatLabel>
        {title}{" "}
        <ChakraTooltip label={description} maxW="150px" fontSize="sm">
          <QuestionOutlineIcon boxSize={2.5} ml={1} mr={1} />
        </ChakraTooltip>
      </StatLabel>
      <StatNumber>
        <Flex alignItems="flex-start">
          <span style={{ marginRight: "8px" }}>{`${num}`}</span>
          <span>{`(${percentage.toFixed()}%)`}</span>
        </Flex>
      </StatNumber>
    </>
  );
};

export const COVIDTotalVisuals: React.FC<LeftSidePanelBodyProps> = ({
  data,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  const [totalCovidCases, setTotalCovidCases] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const [percentTotalCovid, setPercentTotalCovid] = useState(0);
  const [hospitalizations, setHospitalizations] = useState(0);
  const [percentSymptomatic, setPercentSymptomatic] = useState(0);
  const [symptomatic, setSymptomatic] = useState(0);
  const [totalPrescribed, setTotalPrescribed] = useState(0);
  const [percentMedications, setPercentMedications] = useState(0);
  const [totalLongCovidFourWeeks, setTotalLongCovidFourWeeks] = useState(0);
  const [totalLongCovidFourWeeksPerc, setTotalLongCovidFourWeeksPerc] =
    useState(0);
  const [totalLongCovidTwelveWeeks, setTotalLongCovidTwelveWeeks] = useState(0);
  const [totalLongCovidTwelveWeeksPerc, setTotalLongCovidTwelveWeeksPerc] =
    useState(0);
  const [totalSelfReported, setTotalSelfReported] = useState<number>(0);
  const [totalSelfReportedPerc, setTotalSelfReportedPerc] = useState<number>(0);
  const [totalLongCovid, setTotalLongCovid] = useState<number>(0);
  const [totalLongCovidPerc, setTotalLongCovidPerc] = useState<number>(0);
  const [medicationsTakenConfig, setMedicationsTakenConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [recoveryTakenConfig, setRecoveryConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const width = useAppSelector(selectWidth);
  const [height, setHeight] = useState(350);

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    const createGraphVariables = async () => {
      let covidSummary,
        recoverySummary,
        totalFullEntries = undefined;
      if (realOrMock === RealOrMock.REAL && data) {
        covidSummary = data.covidSummary;
        recoverySummary = data.recoverySummary;
        totalFullEntries = data.totalFullEntries;
      } else {
        covidSummary = mockResult.county.covidSummary;
        recoverySummary = mockResult.county.recoverySummary;
        totalFullEntries = mockResult.county.totalFullEntries;
      }

      const totalCases = getTotalCovidCases(covidSummary.beenInfected);
      const percentOfCovidReported = percentOfTotalCovid(
        totalCases,
        totalFullEntries
      );
      
      const totalHospitalizations = getTotalHospitalizations(
        covidSummary.hospitalized as YesNo
      );
      const totalSymptomatic = getTotalSymptomatic(
        covidSummary.symptomatic as YesNo
      );
      const percOfSymptomatic = getPercentSymptomatic(
        totalSymptomatic,
        totalCases
      );

      const totalPrescribed = getTotalPrescribed(
        covidSummary.medicationsPrescribed as YesNoDontKnow
      );
      const percOfMedications = getPercentMedications(
        covidSummary.medicationsPrescribed as YesNoDontKnow,
        totalCases
      );

      const medTakenConfig = createMedicationsTakenConfig(
        covidSummary.medicationsTakenCount as MedicationsAvailable
      );

      const recoveryConfig = createRecoveryConfig(
        recoverySummary.recovered as YesNo
      );
      if (data) {
        const longCovidOverFourWeeks = data.longCovidOverFourWeeks
          ? data.longCovidOverFourWeeks
          : 0;
        const longCovidOverFourWeeksPerc =
          (longCovidOverFourWeeks / totalCases) * 100;
        const longCovidOverTwelveWeeks = data.longCovidOverTwelveWeeks
          ? data.longCovidOverTwelveWeeks
          : 0;
        const longCovidOverTwelveWeeksPerc =
          (longCovidOverTwelveWeeks / totalCases) * 100;
        const selfReported = data.selfReportedLongCovid
          ? data.selfReportedLongCovid
          : 0;
        const selfReportedPerc = data.longCovid
          ? (selfReported / data.longCovid) * 100
          : 0;
        const longCovid = data.longCovid ? data.longCovid : 0;
        const longCovidPerc = (longCovid / totalFullEntries) * 100;

        setTotalLongCovid(longCovid);
        setTotalLongCovidPerc(longCovidPerc);
        setTotalSelfReported(selfReported);
        setTotalSelfReportedPerc(selfReportedPerc);
        setTotalLongCovidFourWeeks(longCovidOverFourWeeks);
        setTotalLongCovidFourWeeksPerc(longCovidOverFourWeeksPerc);
        setTotalLongCovidTwelveWeeks(longCovidOverTwelveWeeks);
        setTotalLongCovidTwelveWeeksPerc(longCovidOverTwelveWeeksPerc);
      }

      setTotalPrescribed(totalPrescribed);
      setSymptomatic(totalSymptomatic);
      setTotalEntries(totalFullEntries);
      setTotalCovidCases(totalCases);
      setPercentTotalCovid(percentOfCovidReported);
      setHospitalizations(totalHospitalizations);
      setPercentSymptomatic(percOfSymptomatic);
      setPercentMedications(percOfMedications);
      setHeight(350);
      setMedicationsTakenConfig(medTakenConfig);
      setRecoveryConfig(recoveryConfig);
    };

    createGraphVariables();
  }, [data, realOrMock]);

  return (
    <VStack align={"start"} spacing="30px">
      {loading ? (
        <Spinner color="heritageBlue.800" />
      ) : (
        <>
          <Wrap spacing="30px" p={"30px"} shadow="base" borderRadius={"20px"}>
            <WrapItem>
              <Stat>
                {numberAndPercentage(
                  hospitalizations,
                  (hospitalizations / totalCovidCases) * 100,
                  "Hospitalizations",
                  "Number of participants that reported that they were hospitalized due to COVID complications (% of total survey participants who reported a COVID experience)"
                )}
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                {numberAndPercentage(
                  totalPrescribed,
                  percentMedications,
                  "Medications",
                  "Number of people who were prescribed medications (% of total people who reported a COVID experience)"
                )}
              </Stat>
            </WrapItem>
          </Wrap>
          <Wrap spacing="30px" overflow={"visible"}>
            <WrapItem
              // width={width < 1500 ? "300px" : "325px"}
              width={panelDimensions.width * 0.6 - 80}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={medicationsTakenConfig.options}
                data={medicationsTakenConfig.data}
                height="350px"
                width={
                  panelDimensions.width * 0.6 - 80 < 420
                    ? "340px"
                    : panelDimensions.width * 0.6 - 80
                }
              />
            </WrapItem>
            <WrapItem
              width={panelDimensions.width * 0.4 - 80}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Doughnut
                options={recoveryTakenConfig.options}
                data={recoveryTakenConfig.data}
                height={"350px"}
                width={
                  panelDimensions.width * 0.4 - 80 < 420
                    ? "300px"
                    : panelDimensions.width * 0.4 - 80
                }
              />
            </WrapItem>
          </Wrap>
        </>
      )}
    </VStack>
  );
};
