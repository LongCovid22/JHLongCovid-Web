import React, { useState, useEffect, useRef } from "react";
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
import ReCAPTCHA from "react-google-recaptcha";

import { SurveyQuestionProps } from "../SurveyWrapper";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice/surveySlice";

const BulletedList = ({ options }: { options: any }) => {
  return (
    <>
      <UnorderedList width={"75%"} spacing={"5px"} fontSize="xl">
        {options.map((value: string, key: number) => {
          return <ListItem key={key}>{value}</ListItem>;
        })}
      </UnorderedList>
    </>
  );
};

export const Consent: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setRecap,
  setAnswer,
  setErrorPresent,
  setErrorText,
}) => {
  
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);


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

  function onChange(value: string) {
    
    if  (value !== null && setRecap) {
      setErrorPresent!(false);
      setRecap(true);
    }
  }

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
        <Text fontSize={"xl"} fontWeight={"regular"} w="100%">
          {currentQuestion.question}
        </Text>
        <BulletedList options={currentQuestion.options} />
        <Spacer />
        <FormControl isInvalid={emailError}>
          <FormLabel fontSize={"xl"}>Print your email</FormLabel>
          <Input
            type="text"
            placeholder="Enter Email "
            colorScheme="heritageBlue"
            value={email}
            focusBorderColor={"clear"}
            fontSize={"xl"}
            onChange={(event) => {
              handleAnswerChange(event.target.value);
            }}
          />
          {emailError ? (
            <FormErrorMessage fontSize={"lg"}>
              Please enter valid email
            </FormErrorMessage>
          ) : (
            <FormHelperText fontSize={"lg"}>
              Enter email to give consent. Your survey responses will be sent to
              this address after you submit your survey.
            </FormHelperText>
          )}
        </FormControl>
        <form >
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfrfhEnAAAAAL4WpQIxHKCqUH03WWVQVWL_-I9j"
            onChange={onChange}
          />
        </form>
      </VStack>
    </>
  );
};
