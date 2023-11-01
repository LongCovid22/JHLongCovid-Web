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
  Tooltip as ChakraTooltip,
  Text,
  HStack,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
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
  getKMostCommonSymptoms,
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
  longData,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
  covidDataToggle
}) => {
  const [totalSymptomsCount, setTotalSymptomsCount] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);

  const [mostCommonSymptoms, setMostCommonSymptoms] = useState([]);
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

  const explanation = 'Participants are queried on potential COVID-19 symptoms like fever and cough, then separately asked about experiencing any of 26 general symptoms, including headaches and brain fogs, in the survey\'s Global Health Symptom Check section.'

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
      if (covidDataToggle == 1) {
        symptomSummary = data.symptomSummary;
        covidSummary = data.covidSummary;
        totalFullEntries = data.totalFullEntries;
      } else {
        symptomSummary = longData.symptomSummary;
        covidSummary = longData.covidSummary;
        totalFullEntries = longData.totalFullEntries;
      }
    } else {
      if (covidDataToggle == 1) {
        symptomSummary = mockResult.county.symptomSummary;
        covidSummary = mockResult.county.covidSummary;
        totalFullEntries = mockResult.county.totalFullEntries;
      } else {
        symptomSummary = mockResult.longCOVID.symptomSummary;
        covidSummary = mockResult.longCOVID.covidSummary;
        totalFullEntries = mockResult.longCOVID.totalFullEntries;
      }
    }

    if (covidSummary && covidSummary.symptomatic) {
      setTotalSymptomsCount(
        getSymptomsCount(covidSummary.symptomatic as YesNo)
      );
    }

    const summary = symptomSummary as SymptomSummary;

    setMostCommonSymptom(
      capitalizeFirstLetters(getMostCommonSymptom(summary.symptomCounts))
    );

    const symptoms = getKMostCommonSymptoms(summary.symptomCounts, 3);

    setMostCommonSymptoms(symptoms);
    setSymptomCountConfig(createSymptomCountConfig(summary.symptomCounts));


    setTotalEntries(totalFullEntries);
  }, [data, covidDataToggle, realOrMock, longData]);

  return (
    <VStack align={"start"}>
      <Wrap spacing="30px" p={"30px"} shadow="base" borderRadius={"20px"}>
        <WrapItem>
          <Stat>
            <StatLabel>COVID related Symptoms Count</StatLabel>
            <StatNumber>{totalSymptomsCount}</StatNumber>
            <StatHelpText>Total Symptomatic People</StatHelpText>
          </Stat>
        </WrapItem>
        { //Removed 9/26/2023
          //   <WrapItem>
          //   <Stat>
          //     <StatLabel>Most Common Symptom</StatLabel>
          //     <StatNumber>{mostCommonSymptom}</StatNumber>
          //     {/* <StatHelpText>Most common symptom reported</StatHelpText> */}
          //   </Stat>
          // </WrapItem>
        }

        <WrapItem>
          <Stat>
            <StatLabel>Most General Health Symptoms Over the Past Month</StatLabel>
            {mostCommonSymptoms.map((mostCommonSymptom, index) => (
              <StatNumber key={index}>{mostCommonSymptom}</StatNumber>
            ))}



          </Stat>
        </WrapItem>

        <WrapItem>
          <Stat>
            <StatLabel>
              <ChakraTooltip label={explanation} maxW="500px" fontSize="sm">
                <QuestionOutlineIcon boxSize={7} ml={1} mr={1} />
              </ChakraTooltip>
              These two statistics are independent of one another
            </StatLabel>
          </Stat>

        </WrapItem>
      </Wrap>
      {
        // <Wrap spacing="30px" overflow={"visible"}>
        //   <WrapItem
        //     // width={width < 1500 ? "300px" : "325px"}
        //     width={panelDimensions.width - 80}
        //     shadow="base"
        //     borderRadius={"20px"}
        //     p={"30px"}
        //     minWidth="340px"
        //   >
        //     <Bar
        //       options={symptomCountConfig.options}
        //       data={symptomCountConfig.data}
        //       height="375px"
        //       width={
        //         panelDimensions.width - 80 < 420
        //           ? "340px"
        //           : panelDimensions.width - 80
        //       }
        //     />
        //   </WrapItem>

        // </Wrap>
      }
    </VStack>
  );
};
