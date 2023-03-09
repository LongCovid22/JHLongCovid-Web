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
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
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
  createSymptomCountConfig,
  getSymptomsCount,
  getMostCommonSymptom,
} from "./symptomsVisualizationFunctions";
import {
  backgroundColors,
  createTotalsChartConfig,
} from "../visualizationFunctions";
import { capitalizeFirstLetters } from "../Social/socialVisualizationFunctions";
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

type SymptomSummary = {
  symptomCounts: SymptomsAvailable;
  qualityOfLife: PoorToExcellent;
  mentalHealthRank: PoorToExcellent;
  socialSatisfactionRank: PoorToExcellent;
  carryOutSocialActivitiesRank: PoorToExcellent;
  anxietyInPastWeekRank: NeverToAlways;
};

export const SymptomsTotalVisuals: React.FC<LeftSidePanelBodyProps> = ({
  data,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  const [totalSymptomsCount, setTotalSymptomsCount] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const [mostCommonSymptom, setMostCommonSymptom] = useState("");
  const [symptomCountConfig, setSymptomCountConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [qualityOfLife, setQOLConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [mentalHealthRank, setMentalHealthConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [socialSatisfactionRank, setSocialSatisConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [carryOutSocial, setCarryOutSocialConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [anxiety, setAnxietyConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const width = useAppSelector(selectWidth);

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    const colors = [
      backgroundColors.green,
      backgroundColors.blue,
      backgroundColors.yellow,
      backgroundColors.orange,
      backgroundColors.red,
    ];
    let symptomSummary, covidSummary, totalFullEntries;

    if (data && realOrMock === RealOrMock.REAL) {
      symptomSummary = data.symptomSummary;
      covidSummary = data.covidSummary;
      totalFullEntries = data.totalFullEntries;
    } else {
      symptomSummary = mockResult.county.symptomSummary;
      covidSummary = mockResult.county.covidSummary;
      totalFullEntries = mockResult.county.totalFullEntries;
    }

    if (covidSummary.symptomatic) {
      setTotalSymptomsCount(
        getSymptomsCount(covidSummary.symptomatic as YesNo)
      );
    }

    const summary = symptomSummary as SymptomSummary;
    setMostCommonSymptom(
      capitalizeFirstLetters(getMostCommonSymptom(summary.symptomCounts))
    );
    setSymptomCountConfig(createSymptomCountConfig(summary.symptomCounts));
    setQOLConfig(
      createTotalsChartConfig(
        summary.qualityOfLife,
        "Quality of Life",
        "People",
        colors
      )
    );
    setMentalHealthConfig(
      createTotalsChartConfig(
        summary.mentalHealthRank,
        "Mental Health",
        "People",
        colors
      )
    );
    setSocialSatisConfig(
      createTotalsChartConfig(
        summary.socialSatisfactionRank,
        "Social Satisfaction",
        "People",
        colors
      )
    );
    setCarryOutSocialConfig(
      createTotalsChartConfig(
        summary.carryOutSocialActivitiesRank,
        "Carry Out Social Activities",
        "People",
        colors
      )
    );
    setAnxietyConfig(
      createTotalsChartConfig(
        summary.anxietyInPastWeekRank,
        "Anxiety In Past Week",
        "People",
        colors
      )
    );
    setTotalEntries(totalFullEntries);
  }, [data]);

  return (
    <VStack align={"start"}>
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
            <StatLabel>Symptoms Count</StatLabel>
            <StatNumber>{totalSymptomsCount}</StatNumber>
            <StatHelpText>Total people w/ symptoms</StatHelpText>
          </Stat>
        </WrapItem>
        <WrapItem>
          <Stat>
            <StatLabel>Most Common Symptom</StatLabel>
            <StatNumber>{mostCommonSymptom}</StatNumber>
            {/* <StatHelpText>Most common symptom reported</StatHelpText> */}
          </Stat>
        </WrapItem>
      </Wrap>
      <Wrap spacing="30px" overflow={"visible"}>
        <WrapItem
          // width={width < 1500 ? "300px" : "325px"}
          width={panelDimensions.width - 80}
          shadow="base"
          borderRadius={"20px"}
          p={"30px"}
          minWidth="340px"
        >
          <Bar
            options={symptomCountConfig.options}
            data={symptomCountConfig.data}
            height="375px"
            width={
              panelDimensions.width - 80 < 420
                ? "340px"
                : panelDimensions.width - 80
            }
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
            options={qualityOfLife.options}
            data={qualityOfLife.data}
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
            options={mentalHealthRank.options}
            data={mentalHealthRank.data}
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
            options={socialSatisfactionRank.options}
            data={socialSatisfactionRank.data}
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
            options={carryOutSocial.options}
            data={carryOutSocial.data}
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
          <Bar options={anxiety.options} data={anxiety.data} height={"300px"} />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};
