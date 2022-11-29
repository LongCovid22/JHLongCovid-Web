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
  FormErrorMessage,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice/surveySlice";

const BulletedList = ({ options }: { options: any }) => {
  return (
    <>
      <UnorderedList width={"75%"} spacing={"5px"}>
        {options.map((value: string, key: number) => {
          return <ListItem key={key}>{value}</ListItem>;
        })}
      </UnorderedList>
    </>
  );
};

export const Consent: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
  setErrorPresent,
  setErrorText,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);

  const handleAnswerChange = (value: string) => {
    setFullName(value);
    setAnswer(value);
    if (validateFullName(value)) {
      setFullNameError(false);
      setErrorText!("");
      setErrorPresent!(false);
    } else {
      if (value !== "") {
        setFullNameError(true);
        setErrorPresent!(true);
        setErrorText!("Please enter valid full name");
      }
    }
  };

  const validateFullName = (fullName: string) => {
    return fullName.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
  };

  useEffect(() => {
    if (currentAnswer !== null) {
      handleAnswerChange(currentAnswer as string);
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
        <FormControl isInvalid={fullNameError}>
          <FormLabel>Print your full name</FormLabel>
          <Input
            type="text"
            placeholder="Enter full name "
            colorScheme="hopkinsBlue"
            value={fullName}
            focusBorderColor={"clear"}
            onChange={(event) => {
              handleAnswerChange(event.target.value);
            }}
          />
          {fullNameError ? (
            <FormErrorMessage>Please enter valid full name</FormErrorMessage>
          ) : (
            <FormHelperText>Enter full name to give consent</FormHelperText>
          )}
        </FormControl>
      </VStack>
    </>
  );
};
