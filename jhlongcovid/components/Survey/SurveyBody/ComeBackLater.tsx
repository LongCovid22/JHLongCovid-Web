import React, { useEffect, useState } from "react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import {
  VStack,
  Text,
  Spacer,
  HStack,
  Image,
  Box,
  UnorderedList,
  ListItem,
  Fade,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import { useAppSelector } from "../../../redux/hooks";
import { selectWidth } from "../../../redux/slices/viewportSlice";
import { selectHeight } from "../../../redux/slices/viewportSlice";
import { User } from "../../../src/API";

export const ComeBackLater: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  handleQuestionChange,
  user,
}) => {
  const [checkinDate, setCheckinDate] = useState(new Date());
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);

  useEffect(() => {
    if (user) {
      const lastSubmissionDate = new Date(user.lastSubmission!);
      lastSubmissionDate.setHours(0, 0, 0, 0);
      setCheckinDate(
        new Date(lastSubmissionDate.getTime() + 7 * 24 * 60 * 60 * 1000)
      );
    }
  }, [user]);

  return (
    <VStack
      width={"100%"}
      height={"100%"}
      textAlign="center"
      spacing={height < 1000 ? "25px" : "35px"}
    >
      {height < 700 && width > 750 ? (
        <HStack w="65%">
          <Image
            src="./bloomberg.logo.vertical.blue.jpg"
            alt="Hopkins Logo"
            w={height < 1000 ? "200px" : "250px"}
            mt="5px"
          />
          <VStack>
            <Text fontSize={height < 1055 ? "3xl" : "4xl"} fontWeight={"bold"}>
              Come back Later!
            </Text>
            <Text fontSize={height < 1055 ? "xl" : "2xl"}>
              Please check back on {checkinDate.toDateString()} for your weekly
              check in.
            </Text>
          </VStack>
        </HStack>
      ) : (
        <>
          <Image
            src="./bloomberg.logo.vertical.blue.jpg"
            alt="Hopkins Logo"
            w={height < 1000 ? "250px" : "300px"}
            mt="5px"
          />
          <Text fontSize={height < 1055 ? "4xl" : "5xl"} fontWeight={"bold"}>
            Come back later!
          </Text>
          <Text fontSize={height < 1055 ? "xl" : "2xl"}>
            Please check back on {checkinDate.toDateString()} for your weekly
            check in.
          </Text>
        </>
      )}
    </VStack>
  );
};
