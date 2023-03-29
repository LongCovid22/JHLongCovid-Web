import React from "react";
import {
  Spacer,
  Flex,
  VStack,
  Text,
  Image,
  HStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { InstructionStepProps } from "../Instructions";

export const IntroInstructionStep: React.FC<InstructionStepProps> = ({
  setInstructionStep,
}) => {
  return (
    <VStack height={"100%"} width={"100%"} textAlign="center" spacing={"45px"}>
      <Wrap w="100%" justify={"center"} spacing="25px">
        <WrapItem>
          <Image src="./crVertical.png" w="275px" alt="Hopkins Logo" mt="5px" />
        </WrapItem>
        <WrapItem>
          <Image
            src="./bloomberg.logo.vertical.blue.jpg"
            alt="Hopkins Logo"
            w={"300px"}
            mt="5px"
          />
        </WrapItem>
      </Wrap>

      <Text fontSize={"4xl"} fontWeight={"bold"}>
        Welcome to the Johns Hopkins Long-COVID Dashboard!
      </Text>

      <VStack w={"70%"} spacing="20px" fontSize={"lg"}>
        <Text>
          Some people who have been infected with the virus that causes COVID-19
          can experience long-term effects from their infection, known as
          post-COVID conditions (PCC) or long-COVID.
        </Text>
        <Text>
          Long-COVID conditions can include a wide range of ongoing health
          problems; these conditions can last weeks, months, or years.
        </Text>
        <Text>
          Johns Hopkins and partners are working to understand more about who
          experiences Long-COVID conditions, their symptoms, and risk, including
          whether groups disproportionately impacted by COVID-19 are at higher
          risk.
        </Text>
        <Text>
          This dashboard was designed to give voice to people who are suffering
          from Long-COVID by reporting their experiences with Long-COVID using
          survey questionnaires
        </Text>
        <Text>
          The following instructions will guide you through how to complete our
          survey and view your results on the map
        </Text>
      </VStack>
      <Spacer />
    </VStack>
  );
};
