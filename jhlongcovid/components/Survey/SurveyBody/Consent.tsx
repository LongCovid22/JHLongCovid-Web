import React, { useState, useEffect } from "react";
import {
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
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice";

const BulletedList = ({ options }: { options: any }) => {
  return (
    <>
      <UnorderedList width={"75%"} spacing={"5px"}>
        {options.map((value: string, key: number) => {
          return (
            <ListItem key={key} fontSize={"sm"}>
              {value}
            </ListItem>
          );
        })}
      </UnorderedList>
    </>
  );
};

export const Consent: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [email, setEmail] = useState("");

  const handleAnswerChange = (value: string) => {
    setEmail(value);
    setAnswer(value);
  };

  useEffect(() => {
    if (currentAnswer !== null) {
      setEmail(currentAnswer as string);
    } else {
      setAnswer(currentAnswer);
    }
  }, [currentAnswer]);

  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"}>
          {currentQuestion.question}
        </Text>
        <BulletedList options={currentQuestion.options} />
        <Spacer />
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter email "
            colorScheme="hopkinsBlue"
            value={email}
            onChange={(event) => {
              handleAnswerChange(event.target.value);
            }}
          />
          <FormHelperText>Enter email address to give consent</FormHelperText>
        </FormControl>
      </VStack>
    </>
  );
};
