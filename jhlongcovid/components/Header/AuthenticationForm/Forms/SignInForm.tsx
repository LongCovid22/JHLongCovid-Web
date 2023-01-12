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
} from "@chakra-ui/react";
import { AuthState } from "../AuthenticationForm";
import { Auth } from "aws-amplify";

interface SignInFormProps {
  email: string;
  password: string;
  showTitle?: boolean;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  setVerifType: (val: "SignUp" | "SignIn" | "VerifyTotp") => void;
  setUser: (val: any) => void;
  changeAuthState: (state: AuthState) => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  email,
  password,
  showTitle,
  setEmail,
  setPassword,
  setUser,
  setVerifType,
  changeAuthState,
}) => {
  const [signInError, setSignInError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [performingQueries, setPerformingQueries] = useState(false);

  const handleSignIn = async () => {
    setPerformingQueries(true);
    try {
      const user = await Auth.signIn(email, password);
      setPerformingQueries(false);
      setSignInError(false);
      setErrorMessage("");
      setUser(user);
      if (user.challengeName === "SOFTWARE_TOKEN_MFA") {
        changeAuthState(AuthState.VerifyCode);
      } else if (user.challengeName === "MFA_SETUP") {
        changeAuthState(AuthState.TotpSetup);
      }
      // setEmail("");
      // setPassword("");
    } catch (error) {
      setPerformingQueries(false);
      if (error instanceof Error) {
        if (error.message === "User is not confirmed.") {
          console.log("User not yet confirmed");
          try {
            await Auth.resendSignUp(email);
            setVerifType("SignUp");
            changeAuthState(AuthState.VerifyCode);
            return;
          } catch (resendCodeError) {
            console.log("Error resending sing up code: ", resendCodeError);
          }
        }
        setErrorMessage(error.message);
      }
      setSignInError(true);
    }
  };

  useEffect(() => {
    setSignInError(false);
    setErrorMessage("");
  }, []);

  return (
    <VStack width="75%" maxW="450px" minW="325px" spacing="25px">
      <VStack w="100%">
        {showTitle && (
          <Heading size={"md"} mb="5px">
            Sign In
          </Heading>
        )}
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
        {signInError && (
          <Text color="red" fontSize={"13"}>
            {errorMessage}
          </Text>
        )}
      </VStack>

      <HStack spacing={3} width="100%">
        <Spacer />
        <Button
          background={"spiritBlue.100"}
          color={"heritageBlue.500"}
          borderRadius={500}
          onClick={(event) => {
            changeAuthState(AuthState.SignUp);
          }}
        >
          Sign Up
        </Button>

        <Button
          colorScheme="heritageBlue"
          isLoading={performingQueries}
          borderRadius={500}
          onClick={() => handleSignIn()}
        >
          Sign In
        </Button>
      </HStack>
    </VStack>
  );
};
