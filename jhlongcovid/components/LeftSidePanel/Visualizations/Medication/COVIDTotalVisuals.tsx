import React from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";

import {
  MedicationsAvailable,
  OneToThreePlus,
  YesNo,
  YesNoDontKnow,
} from "../answerTypes";
import {
  Wrap,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  Spinner,
  Tooltip as ChakraTooltip,
  Flex,
  Text,
  Grid,
  GridItem
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
import useGetRecoverySummary from "./useGetRecoverySummary";

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

  timesHospitalized: OneToThreePlus;
  tested: YesNo;
  positiveTest: YesNoDontKnow;
  symptomatic: YesNo;

};

type RecoverySummary = {
  recovered: YesNo;
  medicationsPrescribed: YesNoDontKnow;
  medicationsTakenCount: MedicationsAvailable;
  hospitalized: YesNo;
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
  const { recovery_data, error } = useGetRecoverySummary();

  return (
    <VStack align={"start"} spacing="30px">
      {(loading || !recovery_data) ? (
        <Spinner color="heritageBlue.800" />
      ) : (
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
                  recovery_data.hospitalization,
                  recovery_data.hospitalizationPercentage,
                  "Hospitalizations",
                  "Number of participants that reported hospitalization due to COVID. % represents this figure divided by number of participants with a COVID history. "
                )}
              </Stat>
            </GridItem>

            <GridItem>
              <Stat>
                {numberAndPercentage(
                  recovery_data.medications,
                  recovery_data.medicationsPercentage,
                  "Medications",
                  "Number of participants that reported getting medicated due to COVID. % represents this figure divided by number of participants with a COVID history."
                )}
              </Stat>
            </GridItem>


            <GridItem colSpan={{ base: "auto", md: 3 }}>
              <Text fontSize="sm" as="i">
                The percentages here are out of <u>total number of participants with a COVID history</u>
              </Text>
            </GridItem>

          </Grid>

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
                options={recovery_data.medicationsTakenAmongstParticpantsGraph.options}
                data={recovery_data.medicationsTakenAmongstParticpantsGraph.data}
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
                options={recovery_data.fullyRecoveredVsNotRecoveredGraph.options}
                data={recovery_data.fullyRecoveredVsNotRecoveredGraph.data}
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
