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
  HStack,
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
        const longCovidOverFourWeeks =
          data.longCovidOverFourWeeks !== null && data.longCovidOverFourWeeks
            ? data.longCovidOverFourWeeks
            : 0;
        const longCovidOverFourWeeksPerc = Math.round(
          (longCovidOverFourWeeks / totalCases) * 100
        );

        const longCovidOverTwelveWeeks =
          data.longCovidOverTwelveWeeks !== null &&
          data.longCovidOverTwelveWeeks
            ? data.longCovidOverTwelveWeeks
            : 0;
        const longCovidOverTwelveWeeksPerc = Math.round(
          (longCovidOverTwelveWeeks / totalCases) * 100
        );
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
                <StatLabel>Entries</StatLabel>
                <StatNumber>{totalEntries}</StatNumber>
                <StatHelpText>Total Survey Entries</StatHelpText>
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>COVID Cases</StatLabel>
                <StatNumber>
                  {`${totalCovidCases} (${percentTotalCovid}%)`}
                </StatNumber>
                <StatHelpText>{`Total COVID Cases`}</StatHelpText>
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>{"Long COVID >4 Weeks"}</StatLabel>
                <StatNumber>
                  {`${totalLongCovidFourWeeks} (${totalLongCovidFourWeeksPerc}%)`}
                </StatNumber>
                <StatHelpText>{`Not recovered >4 weeks`}</StatHelpText>
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>{"Long COVID >12 Weeks"}</StatLabel>
                <StatNumber>
                  {`${totalLongCovidTwelveWeeks} (${totalLongCovidTwelveWeeksPerc}%)`}
                </StatNumber>
                <StatHelpText>{`Not recovered >12 weeks`}</StatHelpText>
              </Stat>
            </WrapItem>
            {/* <WrapItem>
              <Stat>
                <StatLabel>Reported COVID %</StatLabel>
                <StatNumber>{percentTotalCovid}%</StatNumber>
                <StatHelpText>% of entries with COVID</StatHelpText>
              </Stat>
            </WrapItem> */}
            <WrapItem>
              <Stat>
                <StatLabel>Hospitalizations</StatLabel>
                <StatNumber>{`${hospitalizations} (${Math.round(
                  (hospitalizations / totalCovidCases) * 100
                )}%)`}</StatNumber>
                <StatHelpText>Caused by COVID</StatHelpText>
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>Symptomatic</StatLabel>
                <StatNumber>{`${symptomatic} (${percentSymptomatic}%)`}</StatNumber>
                <StatHelpText>Cases with symptoms</StatHelpText>
              </Stat>
            </WrapItem>
            <WrapItem>
              <Stat>
                <StatLabel>Medications</StatLabel>
                <StatNumber>{`${totalPrescribed} (${percentMedications}%)`}</StatNumber>
                <StatHelpText>People prescribed medications</StatHelpText>
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
