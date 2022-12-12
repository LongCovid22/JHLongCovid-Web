import {
  VStack,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Heading,
  Tooltip,
  Spacer,
  Flex,
  HStack,
  Button,
  Tab,
  TabList,
  Tabs,
  Wrap,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { SurveySection } from "./LeftSidePanel";

interface InfoPanelProps {
  data: any;
  section: SurveySection;
  setSection: (val: SurveySection) => void;
}

export const InfoPanelMetrics: React.FC<InfoPanelProps> = ({
  data,
  section,
  setSection,
}) => {
  return (
    <VStack width={"100%"} spacing={5}>
      <StatGroup width={"100%"}>
        <Stat>
          <StatLabel>Long COVID Cases</StatLabel>
          <StatNumber>
            {data.covidSummary !== undefined
              ? data.covidSummary.totalLongCovidCases
              : 0}
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Long COVID Recovery Rate</StatLabel>
          <StatNumber>
            {Math.ceil(
              (data.covidSummary !== undefined
                ? data.covidSummary.perPeopleRecoveredLongCovid
                : 0.0) * 100
            )}
            {"%"}
          </StatNumber>
        </Stat>
      </StatGroup>
      <StatGroup width={"100%"}>
        <Stat>
          <StatLabel>
            % of Reported Long Cases{" "}
            <Tooltip
              label="Percentage of people with COVID who also suffered from Long COVID"
              borderRadius={10}
              padding={3}
            >
              <InfoOutlineIcon />
            </Tooltip>
          </StatLabel>
          <StatNumber>
            {Math.ceil(
              (data.covidSummary !== undefined
                ? data.covidSummary.perReportedLongCovidCase
                : 0.0) * 100
            )}
            {"%"}
          </StatNumber>
        </Stat>
      </StatGroup>
    </VStack>
  );
};
