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
import { createReadStream } from "fs";

export const Account: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
  setErrorPresent,
}) => {
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");

  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleFirstPassword = (val: string) => {
    checkPassword(val);
    setPass(val);
  };

  const handleSecondPassword = (val: string) => {
    setConfirmPass(val);
    checkPassMatch(val);
  };

  const handleEmail = (val: string) => {
    if (!checkEmail(val)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
    setEmail(val);
  };

  // Password validation
  const checkPassword = (val: string) => {
    const passRegex = new RegExp(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ])[A-Za-z0-9^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ]{8,256}$/
    );
    passRegex.test(val) ? setValidPassword(true) : setValidPassword(false);
  };

  // Email validation
  const checkEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  // Confirm pass matching
  const checkPassMatch = (val: string) => {
    if (val === pass) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  // Check whether there is an error present to prevent the survey from moving forward
  useEffect(() => {
    setErrorPresent &&
      setErrorPresent(!validPassword || !passwordsMatch || !validEmail);
  }, [validPassword, passwordsMatch, validEmail]);

  // Update the answer within the survey
  useEffect(() => {
    setAnswer({ email: email, password: pass });
  }, [pass, confirmPass, email]);

  // Populate email field with current answer values
  useEffect(() => {
    if (
      typeof currentAnswer === "object" &&
      !Array.isArray(currentAnswer) &&
      currentAnswer !== null
    ) {
      const currAns = currentAnswer as { email: string; password: string };
      setEmail(currAns.email);
      // Could set password here but not necessary
    }
  }, [currentAnswer]);

  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"}>
          {currentQuestion.question}
        </Text>
        <FormControl isInvalid={!validEmail}>
          <FormLabel>Email Address</FormLabel>
          <Input
            value={email}
            type="email"
            placeholder="Enter email "
            colorScheme="hopkinsBlue"
            onChange={(event) => handleEmail(event.target.value)}
          />
          {!validEmail && (
            <FormErrorMessage>
              Please enter a valid email address.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!validPassword || !passwordsMatch}>
          <FormLabel>Password</FormLabel>
          <Input
            value={pass}
            type="password"
            placeholder="Enter password "
            colorScheme="hopkinsBlue"
            onChange={(event) => handleFirstPassword(event.target.value)}
          />
          {!validPassword && (
            <FormErrorMessage>
              Please enter a valid password. Must be at least 8 characters long
              and include a numerical, special, lower, and uppercase character.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!passwordsMatch}>
          <FormLabel>Confrim Password</FormLabel>
          <Input
            value={confirmPass}
            type="password"
            placeholder="Enter confirm password "
            colorScheme="hopkinsBlue"
            onChange={(event) => handleSecondPassword(event.target.value)}
          />
          {!passwordsMatch && (
            <FormErrorMessage>Passwords do not match</FormErrorMessage>
          )}
        </FormControl>
      </VStack>
    </>
  );
};
