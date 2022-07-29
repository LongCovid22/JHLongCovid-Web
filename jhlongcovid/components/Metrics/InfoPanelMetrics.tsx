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
} from "@chakra-ui/react";
import React from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export const InfoPanelMetrics = () => {
  return (
    <VStack width={"100%"} spacing={8}>
      <Flex width={"100%"}>
        <Heading as="h3" size="lg">
          Montana
        </Heading>
        <Spacer />
      </Flex>
      <StatGroup width={"100%"}>
        <Stat>
          <StatLabel>Long COVID Cases</StatLabel>
          <StatNumber>456</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Long COVID Recovery Rate</StatLabel>
          <StatNumber>95%</StatNumber>
        </Stat>
      </StatGroup>
      <StatGroup width={"100%"}>
        <Stat>
          <StatLabel>
            % of Reported Long Cases{" "}
            <Tooltip label="Percentage of people with COVID who also suffered from Long COVID">
              <InfoOutlineIcon />
            </Tooltip>
          </StatLabel>
          <StatNumber>34%</StatNumber>
        </Stat>
      </StatGroup>
    </VStack>
  );
};
