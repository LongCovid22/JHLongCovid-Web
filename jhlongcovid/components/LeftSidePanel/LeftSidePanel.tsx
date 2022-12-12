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
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useRef, useState, useLayoutEffect } from "react";
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
import { VaccinationVisualizations } from "./Visualizations/Vaccination/VaccinationVisualization";
import { SymptomsVisualizations } from "./Visualizations/Symptoms/SymptomsVisualization";
import { SocialVisualizations } from "./Visualizations/Social/SocialVisualization";
import { PHQ8Visualizations } from "./Visualizations/PHQ8/PHQ8Visualization";
import { DownloadIcon } from "@chakra-ui/icons";

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
}

export enum SurveySection {
  COVID = "COVID",
  VACCINATION = "Vaccination",
  PHQ8 = "PHQ8",
  Global = "Global",
  SOCIAL = "Social",
  SYMPTOMS = "SYMPTOMS",
}

export type LeftSidePanelBodyProps = {
  section: SurveySection;
  data: MapData;
  panelDimensions: { width: number; height: number };
};

const LeftSidePanelBody: React.FC<LeftSidePanelBodyProps> = ({
  section,
  data,
  panelDimensions,
}) => {
  switch (section) {
    case SurveySection.COVID:
      return (
        <COVIDVisualizations
          section={section}
          data={data}
          panelDimensions={panelDimensions}
        />
      );
    case SurveySection.PHQ8:
      return (
        <PHQ8Visualizations
          section={section}
          data={data}
          panelDimensions={panelDimensions}
        />
      );
    case SurveySection.VACCINATION:
      return (
        <VaccinationVisualizations
          section={section}
          data={data}
          panelDimensions={panelDimensions}
        />
      );
    case SurveySection.SOCIAL:
      return (
        <SocialVisualizations
          section={section}
          data={data}
          panelDimensions={panelDimensions}
        />
      );
    case SurveySection.SYMPTOMS:
      return (
        <SymptomsVisualizations
          section={section}
          data={data}
          panelDimensions={panelDimensions}
        />
      );
    default:
      return <Text>Default</Text>;
  }
};

export const LeftSidePanel: React.FC<LeftSidePanelProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const presentLeftSidePanel = useAppSelector(selectLeftSidePanelPres);
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);
  const [section, setSection] = useState(SurveySection.COVID);
  const [panelDimensions, setPanelDimensions] = useState({
    width: 0,
    height: 0,
  });
  const panelRef = useRef<HTMLDivElement | null>(null);

  const setDimensions = () => {
    if (panelRef.current !== null) {
      setPanelDimensions({
        width: panelRef.current.offsetWidth,
        height: panelRef.current.offsetHeight,
      });
    }
  };

  useLayoutEffect(() => {
    setDimensions();
  }, [width]);

  return (
    <>
      <Slide
        direction="left"
        in={presentLeftSidePanel}
        style={{
          minWidth: "410px",
          width: "65%",
          position: "absolute",
          // maxWidth: 1000,
          top: width < 700 ? "160px" : "90px",
          left: presentLeftSidePanel ? "20px" : "0px",
          height: width < 700 ? height - 300 : height - 130,
        }}
        ref={panelRef}
      >
        <Box
          className={styles.leftSidePanel}
          boxShadow={"xl"}
          height={width < 700 ? height - 200 : height - 130}
        >
          <Flex width={"100%"} paddingTop={2}>
            <Spacer />
            <CloseButton
              size={"md"}
              bgColor="hopkinsBlue.100"
              color={"hopkinsBlue.600"}
              onClick={() => {
                dispatch(setLeftSidePanelPres(false));
              }}
            />
          </Flex>
          <VStack
            width={"100%"}
            height={width < 700 ? height - 290 : height - 220}
            padding={"1rem"}
            spacing={8}
            overflowY={"auto"}
            overflowX="hidden"
          >
            {/* <InfoPanelMetrics
              data={data}
              section={section}
              setSection={setSection}
            /> */}
            <Flex width={"100%"}>
              <Wrap>
                <WrapItem>
                  <HStack spacing="0px">
                    <Heading as="h3" size="lg">
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
                          [JSON.stringify(mockResult.county)],
                          { type: "text/json" }
                        );
                        const a = document.createElement("a");
                        a.download = "data.json";
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
                </WrapItem>
                <WrapItem>
                  <Tabs
                    colorScheme={"hopkinsBlue"}
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
                            COVID
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
                            PHQ8
                          </Tab>
                        </WrapItem>
                        <WrapItem>
                          <Tab
                            onClick={() => setSection(SurveySection.SOCIAL)}
                            fontSize={"13px"}
                          >
                            Social
                          </Tab>
                        </WrapItem>
                      </Wrap>
                    </TabList>
                  </Tabs>
                </WrapItem>
              </Wrap>
            </Flex>
            <VStack w="100%" align={"start"}>
              <LeftSidePanelBody
                section={section}
                data={data}
                panelDimensions={panelDimensions}
              />
            </VStack>
            <Spacer />
          </VStack>
        </Box>
      </Slide>
    </>
  );
};
