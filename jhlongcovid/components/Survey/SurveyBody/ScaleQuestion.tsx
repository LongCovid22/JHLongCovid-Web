import React, { useState, useEffect } from "react";
import {
  Flex,
  VStack,
  Text,
  Spacer,
  RadioGroup,
  Radio,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyBody";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice/surveySlice";
import { useAppSelector } from "../../../redux/hooks";
import { QuestionText } from "./QuestionText";

export const ScaleQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [scaleValues, setScaleValues] = useState<string[]>([]);

  const handleScaleChange = (row: number, value: string) => {
    let copy = [...scaleValues];
    copy[row] = value;
    setScaleValues(copy);
    setAnswer(copy);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setScaleValues(currentAnswer as string[]);
  }, [currentQuestion, currentAnswer]);

  const ScaleQuestionGridItems = (currentQuestion: any): any[] => {
    let gridItems: any[] = [];

    currentQuestion.options.map((value: string, i: number) => {
      gridItems.push(
        <GridItem
          colSpan={currentQuestion.scale.length}
          position="sticky"
          key={`${value}-prompt-${i}`}
          textAlign="center"
        >
          <Text fontSize={"xl"}>{value}</Text>
        </GridItem>
      );
      gridItems.push(
        <GridItem
          colSpan={currentQuestion.scale.length}
          key={`${value}-value-${i}`}
        >
          <RadioGroup
            onChange={(val: string) => {
              handleScaleChange(i, val);
            }}
            value={scaleValues[i]}
            size="lg"
          >
            <Grid
              templateColumns={`repeat(${currentQuestion.scale.length}, 1fr)`}
            >
              {currentQuestion.scale.map((sv: string, si: number) => {
                return (
                  <GridItem
                    alignItems={"center"}
                    key={si}
                    pt="8px"
                    data-testid={`${i}-${si}`}
                  >
                    <Flex w="100%" direction={"row"}>
                      <Spacer />
                      <Radio value={`${si}`} />
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
      <VStack
        fontSize={"lg"}
        fontWeight={"regular"}
        width="100%"
        position={"sticky"}
        top={0}
        bgColor={"white"}
        as={"header"}
        zIndex={1}
        mb={"25px"}
      >
        {QuestionText(currentQuestion.question, currentQuestion.timeframe)}
        <Grid
          w="100%"
          templateColumns={`repeat(${currentQuestion.scale.length * 2}, 1fr)`}
          templateRows={`repeat(1, 1fr)`}
          gap={4}
          zIndex={0}
        >
          <GridItem colSpan={currentQuestion.scale.length} />
          {currentQuestion.scale.map((value: string, scaleI: number) => {
            return (
              <GridItem key={scaleI}>
                <Flex h={"100%"} direction={"column"}>
                  <Spacer />
                  <Text fontSize={"lg"} align={"center"}>
                    {value}
                  </Text>
                  <Spacer />
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
      <Grid
        h="100%"
        w="100%"
        templateColumns={`repeat(${currentQuestion.scale.length * 2}, 1fr)`}
        templateRows={`repeat(${currentQuestion.options.length + 1}, 1fr)`}
        gap={4}
        zIndex={0}
        mt="20px"
      >
        {ScaleQuestionGridItems(currentQuestion)}
      </Grid>
    </>
  );
};
