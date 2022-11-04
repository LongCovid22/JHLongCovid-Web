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
  userInfo?: UserInfo;
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
  userInfo,
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
    let attributes: { name: string } = { name: "" };
    if (userInfo) {
      attributes.name = userInfo.name;
    }

    try {
      const { user } = await Auth.signUp({
        username: email,
        password: confirmPass,
        attributes: attributes,
      });
      setVerifType("SignUp");
      changeAuthState(AuthState.VerifyCode);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
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
    <VStack width="75%" maxW="450px" minW="325px" spacing="25px">
      <VStack w="100%">
        <Heading size={"md"} mb="5px">
          Sign Up
        </Heading>
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
            value={password}
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
        {signUpError && (
          <Text color="red" fontSize={"13"}>
            {errorMessage}
          </Text>
        )}
      </VStack>

      <HStack spacing={3} width="100%">
        <Spacer />
        <Button
          background={"hopkinsBlue.100"}
          color={"hopkinsBlue.500"}
          borderRadius={500}
          onClick={() => {
            changeAuthState(AuthState.SignIn);
          }}
        >
          Sign In
        </Button>
        <Button
          colorScheme="hopkinsBlue"
          borderRadius={500}
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
