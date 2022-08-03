import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Slide,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  selectLeftSidePanelPres,
  setLeftSidePanelPres,
} from "../../redux/slices/presentationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "../../styles/LeftSidePanel.module.css";
import { InfoPanelMetrics } from "../Metrics/InfoPanelMetrics";
import dynamic from "next/dynamic";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface LeftSidePanelProps {
  data: any;
}

export const LeftSidePanel: React.FC<LeftSidePanelProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const presentLeftSidePanel = useAppSelector(selectLeftSidePanelPres);
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);

  const series = [
    {
      data: [135, 25, 75],
    },
  ];
  const options = {
    xaxis: {
      categories: ["20-40", "41-60", "61-80"],
      title: {
        text: "Age Range (Years)",
      },
    },
    yaxis: {
      title: {
        text: "Long COVID Cases",
      },
    },
    title: {
      text: "Long COVID Count by Age",
    },
  };

  const series2 = [35, 22, 21, 10, 12];
  const options2 = {
    labels: [
      "General",
      "Neurologic",
      "Digestive",
      "Respiratory/Heart",
      "Other",
    ],
    title: {
      text: "% of Symptoms in Body System",
    },
  };

  return (
    <>
      <Slide
        direction="left"
        in={presentLeftSidePanel}
        style={{
          minWidth: "410px",
          width: "35%",
          position: "absolute",
          top: "90px",
          left: presentLeftSidePanel ? "20px" : "0px",
          borderRadius: "40px",
          height: height - 130,
        }}
      >
        <Box
          className={styles.leftSidePanel}
          boxShadow={"xl"}
          height={height - 130}
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
            height={height - 240}
            padding={"1rem"}
            spacing={8}
            overflowY={"auto"}
            overflowX="hidden"
          >
            <InfoPanelMetrics data={data} />
            <Chart
              options={options}
              series={series}
              type="bar"
              width={width * 0.35 < 420 ? 350 : width * 0.35 - 70}
              height={300}
            />
            <Chart
              options={options2}
              series={series2}
              type="donut"
              width={width * 0.35 < 420 ? 350 : width * 0.35 - 70}
              height={300}
            />
            <Spacer />
          </VStack>
        </Box>
      </Slide>
    </>
  );
};
