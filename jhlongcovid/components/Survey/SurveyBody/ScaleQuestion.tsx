import React from "react";
import {
  Flex,
  VStack,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
  Input,
  FormControl,
  FormLabel,
  List,
  HStack,
  ListIcon,
  FormHelperText,
  Stack,
  RadioGroup,
  Radio,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";

export const ScaleQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const ScaleQuestionGridItems = (currentQuestion: any): any[] => {
    let gridItems: any[] = [];

    gridItems.push(<GridItem colSpan={currentQuestion.scale.length} />);
    gridItems.push(
      currentQuestion.scale.map((value: string, scaleI: number) => {
        return (
          <GridItem key={scaleI}>
            <Flex h={"100%"} direction={"column"}>
              <Spacer />
              <Text fontSize={"12"} align={"center"}>
                {value}
              </Text>
              <Spacer />
            </Flex>
          </GridItem>
        );
      })
    );

    currentQuestion.options.map((value: string, i: number) => {
      gridItems.push(
        <GridItem colSpan={currentQuestion.scale.length}>
          <Text fontSize={"sm"}>{value}</Text>
        </GridItem>
      );
      gridItems.push(
        <GridItem colSpan={currentQuestion.scale.length}>
          <RadioGroup>
            <Grid
              templateColumns={`repeat(${currentQuestion.scale.length}, 1fr)`}
            >
              {currentQuestion.scale.map((sv: string, si: number) => {
                return (
                  <GridItem alignItems={"center"}>
                    <Flex w="100%" h="100%" direction={"row"}>
                      <Spacer />
                      <Radio value={si} />
                      <Spacer />
                    </Flex>
                  </GridItem>
                );
              })}
            </Grid>
          </RadioGroup>
        </GridItem>
      );
    });

    return gridItems;
  };

  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"} width="100%">
          {currentQuestion.question}
        </Text>
        <VStack height="100%" minWidth="100%">
          <Grid
            h="100%"
            w="100%"
            templateColumns={`repeat(${currentQuestion.scale.length * 2}, 1fr)`}
            templateRows={`repeat(${currentQuestion.options.length + 1}, 1fr)`}
            gap={4}
          >
            {ScaleQuestionGridItems(currentQuestion)}
          </Grid>
        </VStack>
      </VStack>
    </>
  );
};
