import React, { useState, useEffect } from "react";
import { AuthState } from "../AuthenticationForm";
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
  FormHelperText,
} from "@chakra-ui/react";
import { API, Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { setUser } from "../../../../redux/slices/userSlice";
import { UserInfo } from "../../../Survey/SurveyWrapper";
import * as mutations from "../../../../src/graphql/mutations";

interface TotpProps {
  email: string;
  password: string;
  user: any;
  verifType: "SignUp" | "SignIn" | "VerifyTotp";
  userInfo?: UserInfo;
  setQRString: (val: string) => void;
  setUser: (val: any) => void;
  changeAuthState: (state: AuthState) => void;
  onVerify: () => void;
}

export const VerificationForm: React.FC<TotpProps> = ({
  email,
  password,
  verifType,
  user,
  userInfo,
  setUser,
  changeAuthState,
  onVerify,
}) => {
  const [verifCode, setVerifCode] = useState("");
  const [codeIncorrect, setCodeIncorrect] = useState(false);
  const [codeErrorMessage, setCodeErrorMessage] = useState("");
  const handleCodeSubmit = async () => {
    try {
      if (verifType === "SignUp") {
        // Confirm Sign up
        const { user } = await Auth.confirmSignUp(email, verifCode);
        console.log("USER JUST SIGNED UP: ", user);
        const currentUser = await Auth.currentUserPoolUser();
        console.log("USER POOL SER: ", currentUser);
        let userDetails = {};
        if (userInfo) {
          userDetails = {
            id: user.userSub,
            email: email,
            age: userInfo.age,
            race: userInfo.race,
            // sex: userInfo.sex,
          };
        } else {
          userDetails = {
            id: user.username,
            email: email,
          };
        }
        console.log("Abount to create user");
        const createdUser = await API.graphql({
          query: mutations.createUser,
          variables: userDetails,
        });
        console.log("Successfully created user: ", createdUser);
        // Sign in user immediately after sign up to start MFA setup
        const returnedUser = await Auth.signIn(email, password);
        const userUpdateDetails = {
          id: returnedUser.username,
          lastSignIn: Date.now(),
        };
        const updatedUser = await API.graphql({
          query: mutations.updateUser,
          variables: userUpdateDetails,
        });
        console.log("Successfully updated user: ", updatedUser);
        if (returnedUser.challengeName === "MFA_SETUP") {
          setUser(returnedUser);
          changeAuthState(AuthState.TotpSetup);
        }

        console.log("userInfo in sign up verification view: ", userInfo);
      } else if (verifType === "VerifyTotp") {
        // Verify Totp token setup for next sign in
        await Auth.verifyTotpToken(user, verifCode);

        // Set as preffered MFA method
        await Auth.setPreferredMFA(user, "TOTP");

        const userUpdateDetails = {
          id: user.username,
          lastSignIn: Date(),
        };
        const updatedUser = await API.graphql({
          query: mutations.updateUser,
          variables: userUpdateDetails,
        });
        console.log("Successfully updated user: ", updatedUser);
        // Perform finishing authform tasks on verify
        onVerify();
      } else {
        // Confirm Sign In
        const { returnedUser } = await Auth.confirmSignIn(
          user,
          verifCode,
          "SOFTWARE_TOKEN_MFA"
        );
        const userUpdateDetails = {
          id: user.username,
          lastSignIn: Date.now(),
        };
        const updatedUser = await API.graphql({
          query: mutations.updateUser,
          variables: userUpdateDetails,
        });
        console.log("Successfully updated user: ", updatedUser);
        // TODO: Dispatch initQuestions with new user
        // TODO: Dispatch new user to userSlice in redux
        onVerify();
      }
    } catch (error) {
      console.log("Error signing up: ", error);
      if (error instanceof Error) {
        setCodeErrorMessage(error.message);
      }
      setCodeIncorrect(true);
    }
  };

  const resendSignUpCode = async () => {
    try {
      await Auth.resendSignUp(email);
      console.log("Resent sign up code");
    } catch (error) {
      console.log("Error resending code", error);
    }
  };

  useEffect(() => {
    console.log("USERINFO IN VERIFICATION FORM: ", userInfo);
  }, [userInfo]);

  return (
    <VStack width="75%" maxW="450px" minW="325px" spacing="25px">
      <VStack w="100%">
        <Heading size={"md"} mb="5px">
          {verifType === "SignIn" ? "One-Time Passcode" : "Verification code"}
        </Heading>
        <FormControl isInvalid={codeIncorrect}>
          <FormLabel>
            {verifType === "SignIn" ? "One-Time Passcode" : "Verification code"}
          </FormLabel>
          <Input
            value={verifCode}
            placeholder={
              verifType === "SignIn"
                ? "Enter one-time passcode"
                : "Enter sign-up verification code"
            }
            colorScheme="hopkinsBlue"
            onChange={(event) => setVerifCode(event.target.value)}
          />
          {verifType === "SignIn" && (
            <FormHelperText>
              Please enter the code displayed in your authenticator app
            </FormHelperText>
          )}
          {codeIncorrect && (
            <FormErrorMessage>{codeErrorMessage}</FormErrorMessage>
          )}
        </FormControl>
      </VStack>

      <HStack spacing={3} width="100%">
        <Spacer />
        {verifType === "SignUp" && (
          <Button
            background={"hopkinsBlue.100"}
            color={"hopkinsBlue.500"}
            borderRadius={500}
            onClick={() => {
              resendSignUpCode();
            }}
          >
            Resend Code
          </Button>
        )}

        <Button
          colorScheme="hopkinsBlue"
          borderRadius={500}
          onClick={() => {
            handleCodeSubmit();
          }}
        >
          Verify
        </Button>
      </HStack>
    </VStack>
  );
};