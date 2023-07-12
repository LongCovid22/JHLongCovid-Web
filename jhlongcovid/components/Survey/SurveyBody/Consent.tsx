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
        <Text>
        Thank you for considering participation in our COVID-19 Long-Term Complications Survey. This project is designed to gather valuable information about the long-term health impacts of COVID-19 and to contribute to public knowledge about the virus and its consequences.
        <br /><br />Participation in this survey is entirely voluntary. You have the right to withdraw your consent and stop participating at any time without any negative consequences.
        <br /><br />The data we will be collecting includes demographic details (such as age, gender, zip code), your experiences with COVID-19 infection (if any), and any long-term health effects you may have experienced post-recovery. This survey does not require any personally identifying information beyond your consent to participate. However, we will ask you to provide an email address to send you a copy of your responses. This survey will take approximately 15-20 minutes of your time.
        <br /><br />There are no known risks associated with this survey. However, some questions may recall potentially distressing experiences related to illness and recovery.
        <br /><br />We are committed to maintaining the confidentiality of your responses. All information collected will be kept strictly confidential and anonymized in accordance with applicable laws and regulations. No personal identifiers will be attached to the survey responses in any publications or presentations of the results.
        <br /><br />The anonymized data from this survey will be used to compile a comprehensive database about the long-term health effects of COVID-19. This data will be used by researchers, policymakers, and healthcare providers to better understand the virus's impact, inform public health strategies, and improve patient care. By participating, you are contributing to the body of knowledge that will ultimately help society manage and mitigate the effects of this and potential future pandemics.
        <br /><br />By proceeding with this survey, you indicate your understanding of the above terms and give your voluntary consent to participate. Your decision to participate, decline, or withdraw from the study at any point will have no adverse consequences.
        <br /><br />Thank you for your time and your contribution to this crucial area of public health research.


        </Text>

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
