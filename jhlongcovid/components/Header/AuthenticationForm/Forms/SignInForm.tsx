import React, { useState, useEffect } from "react";
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
import { Auth } from "aws-amplify";

interface SignInFormProps {
  email: string;
  password: string;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  setQRString: (val: string) => void;
  changeAuthState: (state: AuthState) => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  setQRString,
  changeAuthState,
}) => {
  const [signInError, setSignInError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async () => {
    try {
      const user = await Auth.signIn(email, password);
      setSignInError(false);
      setErrorMessage("");
      if (user.challengeName === "SOFTWARE_TOKEN_MFA") {
        setEmail("");
        setPassword("");
        changeAuthState(AuthState.VerifyCode);
      } else if (user.challengeName === "MFA_SETUP") {
        setEmail("");
        setPassword("");
        const code = await Auth.setupTOTP(user);
        const qr =
          "otpauth://totp/AWSCognito:" +
          user.username +
          "?secret=" +
          code +
          "&issuer=JH%20Long%20COVID";
        setQRString(qr);
        changeAuthState(AuthState.TotpSetup);
      }
    } catch (error: any) {
      setSignInError(true);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    setSignInError(false);
    setErrorMessage("");
  }, []);

  return (
    <VStack width="75%" maxW="450px" minW="325px" spacing="25px">
      <VStack w="100%">
        <Heading size={"md"} mb="5px">
          Sign In
        </Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </FormControl>
        {signInError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </VStack>

      <HStack spacing={3} width="100%">
        <Spacer />
        <Button
          background={"hopkinsBlue.100"}
          color={"hopkinsBlue.500"}
          borderRadius={500}
          onClick={(event) => {
            changeAuthState(AuthState.SignUp);
          }}
        >
          Sign Up
        </Button>

        <Button
          colorScheme="hopkinsBlue"
          borderRadius={500}
          onClick={() => handleSignIn()}
        >
          Sign In
        </Button>
      </HStack>
    </VStack>
  );
};
