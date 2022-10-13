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
  setErrorPresent,
  setErrorText,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleAnswerChange = (value: string) => {
    setEmail(value);
    setAnswer(value);
    if (validateEmail(value)) {
      setEmailError(false);
      setErrorText!("");
      setErrorPresent!(false);
    } else {
      if (value !== "") {
        setEmailError(true);
        setErrorPresent!(true);
        setErrorText!("Please enter valid email");
      }
    }
  };

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
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
        <FormControl isInvalid={emailError}>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter email "
            colorScheme="hopkinsBlue"
            value={email}
            focusBorderColor={"clear"}
            onChange={(event) => {
              handleAnswerChange(event.target.value);
            }}
          />
          {emailError ? (
            <FormErrorMessage>
              Please enter valid email address
            </FormErrorMessage>
          ) : (
            <FormHelperText>Enter email address to give consent</FormHelperText>
          )}
        </FormControl>
      </VStack>
    </>
  );
};
