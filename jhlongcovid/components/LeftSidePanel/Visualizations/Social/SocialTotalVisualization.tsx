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
  Box,
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
import {
  createTotalsChartConfig,
  createTotalsChartConfigWithXYLabels,
  getMostCommonInSummary,
} from "../visualizationFunctions";
import {
  createhasMedInsurConfig,
  capitalizeFirstLetters,
} from "./socialVisualizationFunctions";
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

export const SocialTotalVisuals: React.FC<LeftSidePanelBodyProps> = ({
  data,
  longData,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
  covidDataToggle
}) => {
  const [mostCommonWorkSituation, setMostCommonWorkSituation] = useState("");
  const [totalEntries, setTotalEntries] = useState(0);
  const [hasMedicalInsuranceConfig, setHasMedicalInsuranceConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [workSituationConfig, setWorkSituationConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const [coveringExpensesConfig, setCoveringExpensesConfig] = useState<{
    labels: string[];
    options: any;
    data: any;
  }>({ labels: [], options: {}, data: { labels: [], datasets: [] } });
  const width = useAppSelector(selectWidth);

  useEffect(() => {
    // Perform all processing on map data and populate visualizations
    const createGraphVariables = () => {
      let socialSummary;

      let totalFullEntries = 0;

      if (data && realOrMock === RealOrMock.REAL) {
        if (covidDataToggle == 1) {
          socialSummary = data.socialSummary;
          totalFullEntries = data.totalFullEntries;
        } else {
          if (longData) {
            socialSummary = longData.socialSummary;
            totalFullEntries = data.longCovid;
          }
        }
      } else {
        if (covidDataToggle == 1) {
          socialSummary = mockResult.longCOVID.socialSummary;
          totalFullEntries = mockResult.longCOVID.totalFullEntries;
        } else {
          socialSummary = mockResult.county.socialSummary;
          totalFullEntries = mockResult.county.totalFullEntries;
        }

      }

      if (socialSummary && socialSummary.currentWorkSituation) {
        setMostCommonWorkSituation(
          capitalizeFirstLetters(
            getMostCommonInSummary(socialSummary.currentWorkSituation)
          )
        );
      }

      if (socialSummary && socialSummary.hasMedicalInsurance) {
        setHasMedicalInsuranceConfig(
          createhasMedInsurConfig(socialSummary.hasMedicalInsurance as YesNo)
        );
      }
      if (socialSummary && socialSummary.currentWorkSituation) {
        setWorkSituationConfig(
          createTotalsChartConfigWithXYLabels(
            "Work Situation Options",
            "Number of Participants",
            socialSummary.currentWorkSituation,
            "Work Situations",
            ""
          )
        );
      }

      if (socialSummary && socialSummary.difficultCoveringExpenses) {
        setCoveringExpensesConfig(
          createTotalsChartConfigWithXYLabels(
            "Difficulty Options",
            "Number of Participants",
            socialSummary.difficultCoveringExpenses,
            "Difficulty Covering Expenses",
            ""
          )
        );
      }

      setTotalEntries(totalFullEntries);
    };

    createGraphVariables();
  }, [data, covidDataToggle, realOrMock]);

  return (

    <VStack align={"start"} spacing="30px">
      {loading ? (
        <Spinner color="heritageBlue.800" />
      ) : (
        <>
          <Wrap spacing="30px" p={"30px"} shadow="base" borderRadius={"20px"}>
            <WrapItem>
              <Stat>
                <StatLabel>Most Common Work Situation</StatLabel>
                <StatNumber>{mostCommonWorkSituation}</StatNumber>
              </Stat>
            </WrapItem>
            {/* Add more WrapItem components for non-graph elements */}
          </Wrap>
          <Wrap spacing="30px" overflow={"visible"}>
            <WrapItem
              width={width < 1500 ? "300px" : "325px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >

              <Doughnut
                options={hasMedicalInsuranceConfig.options}
                data={hasMedicalInsuranceConfig.data}
                height={"350px"}
                width={
                  panelDimensions.width * 0.4 - 80 < 420
                    ? "300px"
                    : panelDimensions.width * 0.4 - 80
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
                options={coveringExpensesConfig.options}
                data={coveringExpensesConfig.data}
                height={"300px"}
              />
            </WrapItem>
            <WrapItem
              width={width < 1500 ? "450px" : "550px"}
              shadow="base"
              borderRadius={"20px"}
              p={"30px"}
              minWidth="340px"
            >
              <Bar
                options={workSituationConfig.options}
                data={workSituationConfig.data}
                height={"300px"}
              />
            </WrapItem>

            {/* Add more WrapItem components for additional graphs */}
          </Wrap>
        </>
      )}
    </VStack>


  );
};
