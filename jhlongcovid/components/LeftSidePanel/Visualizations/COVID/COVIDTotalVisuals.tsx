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
  createRecoveryConfig,
  getTotalPrescribed,
} from "./covidVisualizationFunctions";

import useGetCovidSummary from "./useGetCovidSummary";
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
  Text,
  HStack,
  Grid,
  GridItem,
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
  if (!percentage) {
    percentage = 0;
  }
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
          <span>{`(${percentage.toFixed(1)}%)`}</span>
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
  // const [totalCovidCases, setTotalCovidCases] = useState(0);
  // const [percentTotalCovid, setPercentTotalCovid] = useState(0);
  // const [totalPrescribed, setTotalPrescribed] = useState(0);

  // const [totalLongCovidFourWeeks, setTotalLongCovidFourWeeks] = useState(0);
  // const [totalLongCovidFourWeeksPerc, setTotalLongCovidFourWeeksPerc] =
  //   useState(0);
  // const [totalLongCovidTwelveWeeks, setTotalLongCovidTwelveWeeks] = useState(0);
  // const [totalLongCovidTwelveWeeksPerc, setTotalLongCovidTwelveWeeksPerc] =
  //   useState(0);


  // const [totalSelfReported, setTotalSelfReported] = useState<number>(0);
  // const [totalSelfReportedPerc, setTotalSelfReportedPerc] = useState<number>(0);

  // const [totalLongCovid, setTotalLongCovid] = useState<number>(0);
  // const [totalLongCovidPerc, setTotalLongCovidPerc] = useState<number>(0);


  // useEffect(() => {
  //   // Perform all processing on map data and populate visualizations
  //   const createGraphVariables = async () => {
  //     let covidSummary,
  //       recoverySummary,
  //       totalFullEntries = undefined;



  //     let data: any = data;


  //     if (realOrMock === RealOrMock.REAL && data) {
  //       covidSummary = data.covidSummary;
  //       recoverySummary = data.recoverySummary;
  //       totalFullEntries = data.totalFullEntries;
  //     } else {
  //       covidSummary = mockResult.county.covidSummary;
  //       recoverySummary = mockResult.county.recoverySummary;
  //       totalFullEntries = mockResult.county.totalFullEntries;
  //       data = mockResult.county;
  //     }


  //     const totalCases = getTotalCovidCases(covidSummary.beenInfected);

  //     const percentOfCovidReported = percentOfTotalCovid(
  //       totalCases,
  //       totalFullEntries
  //     );

  //     const longCovidOverFourWeeks = data.longCovidOverFourWeeks
  //       ? data.longCovidOverFourWeeks
  //       : 0;
  //     const longCovidOverFourWeeksPerc =
  //       (longCovidOverFourWeeks / totalCases) * 100;
  //     const longCovidOverTwelveWeeks = data.longCovidOverTwelveWeeks
  //       ? data.longCovidOverTwelveWeeks
  //       : 0;
  //     const longCovidOverTwelveWeeksPerc =
  //       (longCovidOverTwelveWeeks / totalCases) * 100;
  //     const selfReported = data.selfReportedLongCovid
  //       ? data.selfReportedLongCovid
  //       : 0;
  //     const selfReportedPerc = data.longCovid
  //       ? (selfReported / data.longCovid) * 100
  //       : 0;
  //     const longCovid = data.longCovid ? data.longCovid : 0;
  //     const longCovidPerc = (longCovid / totalFullEntries) * 100;

  //     setTotalLongCovid(longCovid);
  //     setTotalLongCovidPerc(longCovidPerc);
  //     setTotalSelfReported(selfReported);
  //     setTotalSelfReportedPerc(selfReportedPerc);
  //     setTotalLongCovidFourWeeks(longCovidOverFourWeeks);
  //     setTotalLongCovidFourWeeksPerc(longCovidOverFourWeeksPerc);
  //     setTotalLongCovidTwelveWeeks(longCovidOverTwelveWeeks);
  //     setTotalLongCovidTwelveWeeksPerc(longCovidOverTwelveWeeksPerc);


  //     setTotalPrescribed(totalPrescribed);
  //     setTotalEntries(totalFullEntries);
  //     setTotalCovidCases(totalCases);
  //     setPercentTotalCovid(percentOfCovidReported);
  //     setHeight(350);
  //   };

  //   createGraphVariables();
  // }, [data, realOrMock]);
  let { covid_data, error } = useGetCovidSummary(data, realOrMock);


  return (
    <VStack align={"start"} spacing="0px">
      {loading ? (
        <Spinner color="heritageBlue.800" />
      ) : (
        covid_data ? (
          <>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
              gap={{ base: "10px", md: "15px" }}
              p={"30px"}
              shadow="base"
              borderRadius={"20px"}
              marginBottom="20px"
            >
              <GridItem>
                <Stat>
                  {numberAndPercentage(
                    covid_data.totalCovid,
                    covid_data.covidPercentage,
                    "Self Reported COVID History",
                    "Number of participants that have a history of COVID. % represents this figure divided by total number of all survey participants."
                  )}
                </Stat>
              </GridItem>

              <GridItem>
                <Stat>
                  {numberAndPercentage(
                    covid_data.covidAndLongCovid,
                    covid_data.covidAndLongCovidPercentage,
                    "Self Reported Long COVID and COVID History",
                    "Number of participants that self reported a history of Long COVID and COVID. % represents this figure divided by total number of all survey participants."
                  )}
                </Stat>
              </GridItem>

              <GridItem>
                <Stat>
                  {numberAndPercentage(
                    covid_data.noCovidButLongCovid,
                    covid_data.noCovidButLongCovidPercentage,
                    "Self Reported Long COVID History and No Self Reported COVID History",
                    "Number of participants that self reported a history of Long COVID but not COVID. % represents this figure divided by total number of all survey participants."
                  )}
                </Stat>
              </GridItem>

              <GridItem>
                <Stat>
                  {numberAndPercentage(
                    covid_data.covidAndLongCovidOrLongCovidOver4Weeks,
                    covid_data.covidAndLongCovidOrLongCovidOver4WeeksPercentage,
                    "Total Long COVID (self reported Long COVID or >4 weeks symptomatic) ",
                    "Total number of participants who reported Long COVID symptoms for over 4 weeks or self reported that they have a history of Long COVID. % represents this figure divided by total number of all survey participants."
                  )}
                </Stat>
              </GridItem>
              <GridItem colSpan={{ base: "auto", md: 3 }}>
                <Text fontSize="sm" as="i">
                  The percentages here are out of <u>total survey participants</u>
                </Text>
              </GridItem>

            </Grid>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
              gap={{ base: "10px", md: "15px" }}
              p={"30px"}
              shadow="base"
              borderRadius={"20px"}
            >
              <GridItem>
                <Stat>
                  {numberAndPercentage(
                    covid_data.longCovidOverFourWeeks,
                    covid_data.longCovidOverFourWeeksPercentage,
                    "Participants with Long COVID >4 Weeks",
                    "Participants with a history of Long COVID Symptoms for over 4 weeks. % represents this figure divided by total number of participants with a history of COVID."
                  )}
                </Stat>
              </GridItem>
              <GridItem>
                <Stat>
                  {numberAndPercentage(
                    covid_data.longCovidOverTwelveWeeks,
                    covid_data.longCovidOverTwelveWeeksPercentage,
                    "Participants with Long COVID >12 Weeks",
                    "Participants with a history of Long COVID Symptoms for over 12 weeks. % represents this figure divided by total number of participants with a history of COVID."
                  )}
                </Stat>
              </GridItem>

              <GridItem colSpan={{ base: "auto", md: 3 }}>
                <Text fontSize="sm" as="i">
                  The percentages here are out of <u>participants with a COVID history</u>
                </Text>
              </GridItem>

              <Stat>
                <StatLabel>
                  <ChakraTooltip label={"For recovered participants, use the time to recovery from last positive. For those not recovered, use time from last positive date to survey submission."} maxW="500px" fontSize="sm">
                    <QuestionOutlineIcon boxSize={7} ml={1} mr={1} />
                  </ChakraTooltip>
                  How is length of COVID exposure estimated?
                </StatLabel>
              </Stat>
            </Grid>
          </>) : (<></>)
      )}
    </VStack>
  );
};
