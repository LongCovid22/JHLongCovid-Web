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

      if (data !== null) {
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

  const numberAndPercentage = (num: number, percentage: number, description_num: string, description_percentage: any) => {

    return (
      <>
        <StatNumber>
          <Flex alignItems="flex-start" justifyContent="space-between">
            <span>{`${num}`}</span>
            <ChakraTooltip label={description_num} maxW="150px" fontSize="sm">
              <QuestionOutlineIcon boxSize={2.5} ml={1} mr={1} mt={2} />
            </ChakraTooltip>
            <span>{`(${percentage.toFixed()}%)`}</span>
            <ChakraTooltip label={description_percentage} maxW="150px" fontSize="sm" >
              <QuestionOutlineIcon boxSize={2.5} ml={1} mr={1} mt={2} />
            </ChakraTooltip>
          </Flex>
        </StatNumber>
      </>
    )

  }

  return (
    <VStack align={"start"} spacing="30px">
      {loading ? (
        <Spinner color="heritageBlue.800" />
      ) : (
        <>
          <Wrap spacing="30px" p={"30px"} shadow="base" borderRadius={"20px"}>
            <WrapItem>
              <Stat>
                <StatLabel>COVID Cases</StatLabel>
                {numberAndPercentage(totalCovidCases, percentTotalCovid, "people reported exposure to COVID", "reported exposure to COVID")}
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>{"Long COVID >4 Weeks"}</StatLabel>
                {numberAndPercentage(totalLongCovidFourWeeks, totalLongCovidFourWeeksPerc, "people reported long COVID of more than 4 Weeks", "reported long COVID of more than 4 Weeks")}
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>{"Long COVID >12 Weeks"}</StatLabel>
                {numberAndPercentage(totalLongCovidTwelveWeeks, totalLongCovidTwelveWeeksPerc, "people reported long COVID of more than 12 Weeks", "reported long COVID of more than 12 Weeks")}
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>{"Self Reported Long COVID"}</StatLabel>
                {numberAndPercentage(totalSelfReported, totalSelfReportedPerc, "people self reported having long COVID", "self reported having long COVID")}
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>{"Total Long COVID"}</StatLabel>
                {numberAndPercentage(totalLongCovid, totalLongCovidPerc, "people either self reporting having long COVID or being symptomatic for more than 4 weeks", "self reported having long COVID or being symptomatic for more than 4 weeks")}
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>Hospitalizations</StatLabel>
                {numberAndPercentage(hospitalizations, ((hospitalizations / totalCovidCases) * 100), "people hospitalized due to COVID", "hospitalized due to COVID")}
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>Symptomatic</StatLabel>
                {numberAndPercentage(symptomatic, percentSymptomatic, "people reported COVID related symptoms", "reported COVID related symptoms")}
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>Medications</StatLabel>
                {numberAndPercentage(totalPrescribed, percentMedications, "people prescribed medications", "were prescribed medications")}
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
                    ? "340px"
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
