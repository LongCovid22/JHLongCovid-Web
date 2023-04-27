import React, { useEffect, useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Spacer,
  Button,
  Text,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import { AuthState } from "../AuthenticationForm";
import { Auth, API } from "aws-amplify";
import { UserInfo } from "../../../Survey/SurveyWrapper";
import * as mutations from "../../../../src/graphql/mutations";

interface SignUpFormProps {
  email: string;
  password: string;
  confirmPass: string;
  midSurvey: boolean;
  userInfo?: UserInfo;
  showTitle?: boolean;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  setVerifType: (val: "SignUp" | "SignIn" | "VerifyTotp") => void;
  setConfirmPassword: (val: string) => void;
  changeAuthState: (state: AuthState) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  email,
  password,
  confirmPass,
  midSurvey,
  userInfo,
  showTitle,
  setEmail,
  setPassword,
  setVerifType,
  setConfirmPassword,
  changeAuthState,
}) => {
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [signUpError, setSignUpError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [performingQueries, setPerformingQueries] = useState(false);

  const handleFirstPassword = (val: string) => {
    checkPassword(val);
    checkPassMatch(val);
    setPassword(val);
  };

  const handleSecondPassword = (val: string) => {
    setConfirmPassword(val);
    checkPassMatch(val);
  };

  const handleEmail = (val: string) => {
    if (val !== "") {
      if (!checkEmail(val)) {
        setValidEmail(false);
      } else {
        setValidEmail(true);
      }
    } else {
      setValidEmail(true);
    }

    setEmail(val);
  };

  const handleSignUp = async () => {
    setPerformingQueries(true);
    try {
      await Auth.signUp({
        username: email,
        password: confirmPass,
      });
      setPerformingQueries(false);
      setVerifType("SignUp");
      changeAuthState(AuthState.VerifyCode);
    } catch (error) {
      setPerformingQueries(false);
      if (error instanceof Error) {
        if (error.message.includes("already exists")) {
          setErrorMessage(error.message + " Please sign in.");
        } else {
          setErrorMessage(error.message);
        }
      }
      setSignUpError(true);
    }
  };

  // Password validation
  const checkPassword = (val: string) => {
    if (val !== "") {
      const passRegex = new RegExp(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ])[A-Za-z0-9^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ]{8,256}$/
      );
      passRegex.test(val) ? setValidPassword(true) : setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };

  // Email validation
  const checkEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  // Confirm pass matching
  const checkPassMatch = (val: string) => {
    if (val === password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  useEffect(() => {
    handleFirstPassword(password);
    handleSecondPassword(confirmPass);
    handleEmail(email);
  }, []);

  return (
    <VStack width="100%" maxW="450px" minW="325px" spacing="25px" p="10px">
      <VStack w="100%">
        {showTitle && (
          <Heading size={"md"} mb="5px">
            Sign Up
          </Heading>
        )}
        <FormControl isInvalid={!validEmail} tabIndex={0}>
          <FormLabel fontSize={"lg"}>Email Address</FormLabel>
          <Input
            fontSize={"lg"}
            value={email}
            type="email"
            placeholder="Enter email "
            colorScheme="heritageBlue"
            onChange={(event) => handleEmail(event.target.value)}
          />
          {!validEmail && (
            <FormErrorMessage>
              Please enter a valid email address.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!validPassword || !passwordsMatch} tabIndex={1}>
          <FormLabel fontSize={"lg"}>Password</FormLabel>
          <Input
            value={password}
            fontSize={"lg"}
            type="password"
            placeholder="Enter password "
            colorScheme="heritageBlue"
            onChange={(event) => handleFirstPassword(event.target.value)}
          />
          {!validPassword && (
            <FormErrorMessage>
              Please enter a valid password. Must be at least 8 characters long
              and include a numerical, special, lower, and uppercase character.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!passwordsMatch} tabIndex={2}>
          <FormLabel fontSize={"lg"}>Confrim Password</FormLabel>
          <Input
            value={confirmPass}
            fontSize={"lg"}
            type="password"
            placeholder="Enter confirm password "
            colorScheme="heritageBlue"
            onChange={(event) => handleSecondPassword(event.target.value)}
          />
          {!passwordsMatch && (
            <FormErrorMessage>Passwords do not match</FormErrorMessage>
          )}
        </FormControl>
        {signUpError && (
          <Text color="red" fontSize={"13"}>
            {errorMessage}
          </Text>
        )}
      </VStack>

      <HStack spacing={3} width="100%">
        <Spacer />
        {!midSurvey && (
          <Button
            fontSize={"lg"}
            background={"spiritBlue.100"}
            color={"heritageBlue.500"}
            borderRadius={500}
            onClick={() => {
              changeAuthState(AuthState.SignIn);
            }}
          >
            Sign In
          </Button>
        )}
        <Button
          colorScheme="heritageBlue"
          borderRadius={500}
          fontSize={"lg"}
          isLoading={performingQueries}
          onClick={(event) => {
            handleSignUp();
          }}
        >
          Sign Up
        </Button>
      </HStack>
    </VStack>
  );
};
