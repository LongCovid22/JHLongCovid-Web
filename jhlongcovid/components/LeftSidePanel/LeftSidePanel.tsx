import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Slide,
  Spacer,
  VStack,
  Wrap,
  WrapItem,
  Tabs,
  Tab,
  TabList,
  Heading,
  IconButton,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import {
  selectLeftSidePanelPres,
  setLeftSidePanelPres,
} from "../../redux/slices/presentationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "../../styles/LeftSidePanel.module.css";
import mockResult from "../../mockResult.json";
import { InfoPanelMetrics } from "./InfoPanelMetrics";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
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
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { MapData } from "../../src/API";
import { mapDataByLevelNameState } from "../../src/graphql/queries";
import { COVIDVisualizations } from "./Visualizations/COVID/COVIDVisualizations";
import { MedicationVisualization } from "./Visualizations/Medication/MedicationVisualization";
import { VaccinationVisualizations } from "./Visualizations/Vaccination/VaccinationVisualization";
import { SymptomsVisualizations } from "./Visualizations/Symptoms/SymptomsVisualization";
import { SocialVisualizations } from "./Visualizations/Social/SocialVisualization";
import { PHQ8Visualizations } from "./Visualizations/PHQ8/PHQ8Visualization";
import { DownloadIcon } from "@chakra-ui/icons";
import { RealOrMock } from "../../pages";
import { getSummariesWithType } from "./Visualizations/visualizationFunctions";

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

interface LeftSidePanelProps {
  data: any;
  realOrMock: RealOrMock;
}

export enum SurveySection {
  COVID = "COVID",
  VACCINATION = "Vaccination",
  MEDICATIONS = "Medication and Treatment",
  PHQ8 = "Mental Health",
  Global = "Global",
  SOCIAL = "Social Factors",
  SYMPTOMS = "Symptoms",
}

export type LeftSidePanelBodyProps = {
  section: SurveySection;
  longData?: MapData;
  data: MapData;
  panelDimensions: { width: number; height: number };
  realOrMock: RealOrMock;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  covidDataToggle?: number;
};

const LeftSidePanelBody: React.FC<LeftSidePanelBodyProps> = ({
  section,
  longData,
  data,
  panelDimensions,
  realOrMock,
  loading,
  setLoading,
}) => {
  switch (section) {
    case SurveySection.COVID:
      return (
        <COVIDVisualizations
          section={section}
          data={data}
          panelDimensions={panelDimensions}
          realOrMock={realOrMock}
          loading={loading}
          setLoading={setLoading}
        />
      );
    case SurveySection.MEDICATIONS:
      return (
        <MedicationVisualization
          section={section}
          data={data}
          panelDimensions={panelDimensions}
          realOrMock={realOrMock}
          loading={loading}
          setLoading={setLoading}
        />
      )
    case SurveySection.PHQ8:
      return (
        <PHQ8Visualizations
          
          section={section}
          data={data}
          longData={longData}
          panelDimensions={panelDimensions}
          realOrMock={realOrMock}
          loading={loading}
          setLoading={setLoading}
        />
      );
    case SurveySection.VACCINATION:
      return (
        <VaccinationVisualizations
          
          section={section}
          data={data}
          longData={longData}
          panelDimensions={panelDimensions}
          realOrMock={realOrMock}
          loading={loading}
          setLoading={setLoading}
        />
      );
    case SurveySection.SOCIAL:
      return (
        <SocialVisualizations
          section={section}
          data={data}
          longData={longData}
          panelDimensions={panelDimensions}
          realOrMock={realOrMock}
          loading={loading}
          setLoading={setLoading}
        />
      );
    case SurveySection.SYMPTOMS:
      return (
        <SymptomsVisualizations
          section={section}
          data={data}
          longData={longData}
          panelDimensions={panelDimensions}
          realOrMock={realOrMock}
          loading={loading}
          setLoading={setLoading}
        />
      );
    default:
      return <Text>Default</Text>;
  }
};

export const LeftSidePanel: React.FC<LeftSidePanelProps> = ({
  data,
  realOrMock,
}) => {
  const dispatch = useAppDispatch();
  const presentLeftSidePanel = useAppSelector(selectLeftSidePanelPres);
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);
  const [section, setSection] = useState(SurveySection.COVID);
  const [panelDimensions, setPanelDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [loading, setLoading] = useState(true);
  const [summaryData, setSummaryData] = useState<any>(null);
  const [longSummaryData, setLongSummaryData] = useState<any>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [totalEntries, setTotalEntries] = useState(0);



  useEffect(() => {
    if (data && realOrMock === RealOrMock.REAL) {
      setTotalEntries(data.totalFullEntries);
    } else {
      setTotalEntries(mockResult.county.totalFullEntries);
    }
  }, [data, mockResult, realOrMock]);

  const setDimensions = () => {
    if (panelRef.current !== null) {
      setPanelDimensions({
        width: panelRef.current.offsetWidth,
        height: panelRef.current.offsetHeight,
      });
    }
  };

  const joinWordsByDash = (str: string): string => {
    const words = str.split(" ");
    const lowercasedWords = words.map((word) => word.toLowerCase());
    const joinedWords = lowercasedWords.join("-");
    return joinedWords;
  };

  useLayoutEffect(() => {
    setDimensions();
  }, [width]);

  useEffect(() => {
    const fetchSummaryData = async () => {
      setLoading(true);
      if (data && Object.keys(data).length > 0) {
        const returnedData = await getSummariesWithType(data, "TOTAL");
        const returnLongData = await getSummariesWithType(data, "LONG");
        setSummaryData(returnedData);
        setLongSummaryData(returnLongData);
      }
      setLoading(false);
    };

    fetchSummaryData();
  }, [data, setLongSummaryData]);


  return (
    <>
      <Slide
        direction="left"
        in={presentLeftSidePanel}
        style={{
          minWidth: "440px",
          width: "55%",
          position: "absolute",
          maxWidth: 1100,
          top: width < 700 ? "160px" : "90px",
          left: presentLeftSidePanel ? "20px" : "0px",
          height: width < 700 ? height - 300 : height - 130,
          zIndex: 1,
        }}
        ref={panelRef}
      >
        <Box
          className={styles.leftSidePanel}
          boxShadow={"xl"}
          height={width < 700 ? height - 200 : height - 130}
          overflow="hidden"
        >
          <Flex width={"100%"} paddingTop={2} paddingBottom={2} paddingLeft={"1rem"}>
            <Spacer />
            <CloseButton
              size={"md"}
              bgColor="spiritBlue.100"
              color={"heritageBlue.600"}
              onClick={() => {
                dispatch(setLeftSidePanelPres(false));
              }}
            />
          </Flex>
          <VStack
            width={"100%"}
            height={width < 700 ? height - 290 : height - 220}
            padding={"1rem"}
            spacing={5}
            overflowY={"auto"}
            overflowX="hidden"
          >
            <Flex width={"100%"}>
              <Wrap>
                <WrapItem>
                  <Box display="flex" flexDirection="column">
                    <HStack spacing="0px" align={"top"}>
                      <Heading as="h3" size="lg" mb="2">
                        {data.level === "state"
                          ? data.name
                          : data.name + ", " + data.stateAbbrev}
                      </Heading>
                      <IconButton
                        aria-label="downloadButton"
                        variant={"none"}
                        icon={<DownloadIcon color="gray" />}
                        onClick={() => {
                          const blob = new Blob(
                            [
                              JSON.stringify(
                                realOrMock === RealOrMock.REAL
                                  ? summaryData
                                  : mockResult.county
                              ),
                            ],
                            { type: "text/json" }
                          );
                          const a = document.createElement("a");
                          a.download =
                            realOrMock === RealOrMock.REAL
                              ? `${joinWordsByDash(data.name)}-${data.level
                              }-jhlongcovid-data.json`
                              : "data.json";
                          a.href = window.URL.createObjectURL(blob);
                          const clickEvent = new MouseEvent("click", {
                            view: window,
                            bubbles: true,
                            cancelable: true,
                          });
                          a.dispatchEvent(clickEvent);
                          a.remove();
                        }}
                      />
                    </HStack>
                    <HStack spacing="0px" align={"top"}>
                      <Text as="span" fontSize="lg" color="gray.600">
                        {totalEntries} total participants
                      </Text>
                    </HStack>
                  </Box>

                </WrapItem>
                <WrapItem>
                  <Flex alignContent={"center"} justifyContent={"center"}>
                    <Tabs
                      ringColor={"spiritBlue.100"}
                      color={"heritageBlue.500"}
                      variant={"soft-rounded"}
                      w="100%"
                      h="100%"
                    >
                      <TabList>
                        <Wrap>
                          <WrapItem>
                            <Tab
                              onClick={() => setSection(SurveySection.COVID)}
                              fontSize={"13px"}
                            >
                              Summary
                            </Tab>
                          </WrapItem>
                          <WrapItem>
                            <Tab
                              onClick={() => setSection(SurveySection.MEDICATIONS)}
                              fontSize={"13px"}
                            >
                              Medications & <br></br>
                              Treatment
                            </Tab>
                          </WrapItem>
                          <WrapItem>
                            <Tab
                              onClick={() =>
                                setSection(SurveySection.VACCINATION)
                              }
                              fontSize={"13px"}
                            >
                              Vaccination
                            </Tab>
                          </WrapItem>
                          <WrapItem>
                            <Tab
                              onClick={() => setSection(SurveySection.SYMPTOMS)}
                              fontSize={"13px"}
                            >
                              Symptoms
                            </Tab>
                          </WrapItem>
                          <WrapItem>
                            <Tab
                              onClick={() => setSection(SurveySection.PHQ8)}
                              fontSize={"13px"}
                            >
                              Mental Health
                            </Tab>
                          </WrapItem>
                          <WrapItem>
                            <Tab
                              onClick={() => setSection(SurveySection.SOCIAL)}
                              fontSize={"13px"}
                            >
                              Social Factors
                            </Tab>
                          </WrapItem>
                        </Wrap>
                      </TabList>
                    </Tabs>
                  </Flex>

                </WrapItem>
              </Wrap>
            </Flex>
            <VStack w="100%" align={"start"}>
              <LeftSidePanelBody
                section={section}
                longData={longSummaryData}
                data={summaryData}
                panelDimensions={panelDimensions}
                realOrMock={realOrMock}
                loading={loading}
                setLoading={setLoading}
              />
            </VStack>
            <Spacer />
          </VStack>
        </Box>
      </Slide>
    </>
  );
};
