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

export const LeftSidePanel: React.FC<LeftSidePanelProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const presentLeftSidePanel = useAppSelector(selectLeftSidePanelPres);
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];

  const options_1 = {
    labels,
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Long covid count by age",
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: Math.round,
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
  };

  const data_1 = {
    labels,
    datasets: [
      {
        label: "Number of cases",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: "rgba(0, 100, 255, 0.5)",
      },
    ],
  };

  const labels1 = ["January", "April", "July", "October"];
  const options_3 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Vaccination count",
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: Math.round,
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
  };

  const data_3 = {
    labels,
    datasets: [
      {
        label: "Pfizer",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Moderna",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "J&J",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(97, 230, 235, 0.5)",
      },
      {
        label: "AZ",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(9, 30, 235, 0.5)",
      },
    ],
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
          maxWidth: 1000,
          top: width < 700 ? "160px" : "90px",
          left: presentLeftSidePanel ? "20px" : "0px",
          height: width < 700 ? height - 300 : height - 130,
        }}
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
            <InfoPanelMetrics data={data} />
            <Bar options={options_1} data={data_1} height={200} />;
            <Bar options={options_3} data={data_3} height={200} />;
            <Spacer />
          </VStack>
        </Box>
      </Slide>
    </>
  );
};
