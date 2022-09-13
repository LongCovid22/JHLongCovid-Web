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
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";

export const ScaleQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"}>
          {currentQuestion.question}
        </Text>
        <VStack height="100%" minWidth="100%">
          <Stack direction={"row"} width="100%">
            <Spacer />
            <Stack direction={"row"} minWidth="50%" spacing={"30px"}>
              {currentQuestion.scale.map((value: string) => {
                return <Text fontSize={"12px"}>{value}</Text>;
              })}
            </Stack>
          </Stack>
          {currentQuestion.options.map((value: string, key: number) => {
            return (
              <Stack direction={"row"} minWidth="100%" spacing={"30px"}>
                <Text minWidth={"40%"}>{value}</Text>
                <Spacer />
                <Stack
                  direction={"row"}
                  minWidth="60%"
                  spacing={"30px"}
                  align={"center"}
                >
                  <RadioGroup>
                    <Stack direction="row" spacing={"50px"}>
                      {currentQuestion.scale.map(
                        (value: string, key: string) => {
                          return <Radio value={key} />;
                        }
                      )}
                    </Stack>
                  </RadioGroup>
                </Stack>
              </Stack>
            );
          })}
          <VStack height="100%" width="100%" background={"blue"}></VStack>
        </VStack>
      </VStack>
    </>
  );
};
