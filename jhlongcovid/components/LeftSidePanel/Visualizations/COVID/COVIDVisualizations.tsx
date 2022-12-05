import {
  VStack,
  Wrap,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import React from "react";
import { LeftSidePanelBodyProps } from "../../LeftSidePanel";
import faker from "faker";
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

const options_3 = {
  options: {
    responsive: true,
    maintainsAspectRation: false,
  },
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

export const COVIDVisualizations: React.FC<LeftSidePanelBodyProps> = ({
  data,
}) => {
  return (
    <VStack>
      <Wrap spacing="30px">
        <WrapItem>
          <Stat>
            <StatLabel>Sample Stat</StatLabel>
            <StatNumber>100%</StatNumber>
            <StatHelpText>percentage of stat</StatHelpText>
          </Stat>
        </WrapItem>
        <WrapItem>
          <Stat>
            <StatLabel>Sample Stat</StatLabel>
            <StatNumber>100%</StatNumber>
            <StatHelpText>percentage of stat</StatHelpText>
          </Stat>
        </WrapItem>
        <WrapItem>
          <Stat>
            <StatLabel>Sample Stat</StatLabel>
            <StatNumber>100%</StatNumber>
            <StatHelpText>percentage of stat</StatHelpText>
          </Stat>
        </WrapItem>
        <WrapItem>
          <Stat>
            <StatLabel>Sample Stat</StatLabel>
            <StatNumber>100%</StatNumber>
            <StatHelpText>percentage of stat</StatHelpText>
          </Stat>
        </WrapItem>
        <WrapItem height="350px" width="350px">
          <Bar
            options={options_3}
            data={data_3}
            height={"300px"}
            width={"450px"}
          />
        </WrapItem>
        <WrapItem height="350px" width="350px">
          <Bar
            options={options_3}
            data={data_3}
            height={"300px"}
            width={"300px"}
          />
        </WrapItem>
        <WrapItem height="350px" width="350px">
          <Bar
            options={options_3}
            data={data_3}
            height={"300px"}
            width={"300px"}
          />
        </WrapItem>
      </Wrap>
      {/* <Wrap spacing="30px">
        
      </Wrap> */}
    </VStack>
  );
};
