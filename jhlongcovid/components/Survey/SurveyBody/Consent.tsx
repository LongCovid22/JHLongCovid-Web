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
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice/surveySlice";

const BulletedList = ({ options }: { options: any }) => {
  return (
    <>
      <UnorderedList width={"75%"} spacing={"5px"} fontSize="lg">
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

  const validateEmail = (value: string) => {
    return value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
        <Text fontSize={"lg"} fontWeight={"regular"} w="100%">
          {currentQuestion.question}
        </Text>
        <BulletedList options={currentQuestion.options} />
        <Spacer />
        <FormControl isInvalid={emailError}>
          <FormLabel fontSize={"18px"}>Print your email</FormLabel>
          <Input
            type="text"
            placeholder="Enter Email "
            colorScheme="heritageBlue"
            value={email}
            focusBorderColor={"clear"}
            fontSize={"lg"}
            onChange={(event) => {
              handleAnswerChange(event.target.value);
            }}
          />
          {emailError ? (
            <FormErrorMessage fontSize={"15px"}>
              Please enter valid email
            </FormErrorMessage>
          ) : (
            <FormHelperText fontSize={"15px"}>
              Enter email to give consent. Your survey responses will be sent to
              this address after you submit your survey.
            </FormHelperText>
          )}
        </FormControl>
      </VStack>
    </>
  );
};
