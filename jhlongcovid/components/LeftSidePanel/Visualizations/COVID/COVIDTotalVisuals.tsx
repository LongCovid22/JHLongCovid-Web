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
}) => {
  const { covidSummary, totalFullEntries, recoverySummary } = mockResult.county;
  const [totalCovidCases, setTotalCovidCases] = useState(0);
  const [percentTotalCovid, setPercentTotalCovid] = useState(0);
  const [hospitalizations, setHospitalizations] = useState(0);
  const [percentSymptomatic, setPercentSymptomatic] = useState(0);
  const [percentMedications, setPercentMedications] = useState(0);
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

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    const totalCases = getTotalCovidCases(covidSummary.beenInfected);
    const percentOfCovidReported = percentOfTotalCovid(
      totalCases,
      totalFullEntries
    );
    const totalHospitalizations = getTotalHospitalizations(
      covidSummary.hospitalized
    );
    const percOfSymptomatic = getPercentSymptomatic(
      getTotalSymptomatic(covidSummary.symptomatic),
      totalCases
    );
    const percOfMedications = getPercentMedications(
      covidSummary.medicationsPrescribed,
      totalCases
    );
    const medTakenConfig = createMedicationsTakenConfig(
      covidSummary.medicationsTakenCount
    );

    const recoveryConfig = createRecoveryConfig(recoverySummary.recovered);

    setTotalCovidCases(totalCases);
    setPercentTotalCovid(percentOfCovidReported);
    setHospitalizations(totalHospitalizations);
    setPercentSymptomatic(percOfSymptomatic);
    setPercentMedications(percOfMedications);
    setMedicationsTakenConfig(medTakenConfig);
    setRecoveryConfig(recoveryConfig);
  }, [data]);

  return (
    <VStack align={"start"}>
      <Wrap spacing="30px">
        <WrapItem>
          <Stat>
            <StatLabel>COVID Cases</StatLabel>
            <StatNumber>{totalCovidCases}</StatNumber>
            <StatHelpText>Total COVID cases</StatHelpText>
          </Stat>
        </WrapItem>
        <WrapItem>
          <Stat>
            <StatLabel>Reported COVID %</StatLabel>
            <StatNumber>{percentTotalCovid}%</StatNumber>
            <StatHelpText>% of entries with COVID</StatHelpText>
          </Stat>
        </WrapItem>
        <WrapItem>
          <Stat>
            <StatLabel>Hospitalizations</StatLabel>
            <StatNumber>{hospitalizations}</StatNumber>
            <StatHelpText>Hospitalizations due to COVID</StatHelpText>
          </Stat>
        </WrapItem>
        <WrapItem>
          <Stat>
            <StatLabel>Symptomatic %</StatLabel>
            <StatNumber>{percentSymptomatic}%</StatNumber>
            <StatHelpText>% of cases with symptoms</StatHelpText>
          </Stat>
        </WrapItem>
        <WrapItem>
          <Stat>
            <StatLabel>Medications %</StatLabel>
            <StatNumber>{percentMedications}%</StatNumber>
            <StatHelpText>% of cases medication prescribed</StatHelpText>
          </Stat>
        </WrapItem>
      </Wrap>
      <Wrap spacing="30px">
        <WrapItem width={width < 1500 ? "300px" : "325px"}>
          <Bar
            options={medicationsTakenConfig.options}
            data={medicationsTakenConfig.data}
            height={"300px"}
          />
        </WrapItem>
        <WrapItem width={width < 1500 ? "300px" : "325px"}>
          <Doughnut
            options={recoveryTakenConfig.options}
            data={recoveryTakenConfig.data}
            height={"300px"}
          />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};
