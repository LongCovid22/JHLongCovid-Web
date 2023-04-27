import React, { useState } from "react";
import { AuthState } from "../AuthenticationForm";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Spacer,
  Button,
  Heading,
  FormErrorMessage,
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { setUser } from "../../../../redux/slices/userSlice";
import { UserInfo } from "../../../Survey/SurveyWrapper";
import { useAppDispatch } from "../../../../redux/hooks";
import { createUser, updateUser, verifyTotp } from "../AuthFormFunctions";

interface TotpProps {
  email: string;
  password: string;
  user: any;
  verifType: "SignUp" | "SignIn" | "VerifyTotp";
  userInfo?: UserInfo;
  showTitle?: boolean;
  midSurvey: boolean;
  qrString: string | null;
  setQRString: (val: string) => void;
  setUserInfo: (val: any) => void;
  changeAuthState: (state: AuthState) => void;
  onVerify: () => void;
}

export const VerificationForm: React.FC<TotpProps> = ({
  email,
  password,
  verifType,
  user,
  userInfo,
  showTitle,
  midSurvey,
  qrString,
  setUserInfo,
  changeAuthState,
  onVerify,
}) => {
  const [verifCode, setVerifCode] = useState("");
  const [codeIncorrect, setCodeIncorrect] = useState(false);
  const [codeErrorMessage, setCodeErrorMessage] = useState("");
  const [performingQueries, setPerformingQueries] = useState(false);
  const dispatch = useAppDispatch();

  const handleCodeSubmit = async () => {
    try {
      if (verifType === "SignUp") {
        setPerformingQueries(true);
        // Confirm Sign up
        await Auth.confirmSignUp(email, verifCode);

        // Sign in user immediately after sign up to start MFA setup
        const returnedUser = await Auth.signIn(email, password);
        setPerformingQueries(false);
        if (returnedUser.challengeName === "MFA_SETUP") {
          setUserInfo(returnedUser);
          changeAuthState(AuthState.TotpSetup);
        }
      } else if (verifType === "VerifyTotp") {
        setPerformingQueries(true);
        // Verify totp
        await verifyTotp(user, verifCode);

        // Create new user after totp code verified
        const newUser = await createUser(user, email, midSurvey, userInfo);
        setPerformingQueries(false);
        if (newUser) {
          dispatch(setUser(newUser));
        }

        // Perform finishing authform tasks on verify
        onVerify();
      } else {
        setPerformingQueries(true);
        // Confirm Sign In
        const returnedUser = await Auth.confirmSignIn(
          user,
          verifCode,
          "SOFTWARE_TOKEN_MFA"
        );

        // Update user
        const updatedUser = await updateUser(midSurvey, returnedUser);
        if (updatedUser) {
          dispatch(setUser(updatedUser));
        }
        setPerformingQueries(false);
        // Perform finishing authform tasks on verify
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

  return (
    <VStack width="75%" maxW="450px" minW="325px" spacing="25px">
      <VStack w="100%">
        {showTitle && (
          <Heading size={"md"} mb="5px">
            {verifType === "SignIn" || verifType === "VerifyTotp"
              ? "One-Time Passcode"
              : "Verification code"}
          </Heading>
        )}
        <FormControl isInvalid={codeIncorrect}>
          <FormLabel fontSize={"lg"}>
            {verifType === "SignIn" || verifType === "VerifyTotp"
              ? "One-Time Passcode"
              : "Verification code"}
            <Text color={"gray.400"} fontSize="sm">
              {verifType === "SignIn" || verifType === "VerifyTotp"
                ? "Located within your third party authenticator app"
                : "Check the email you input in the following step for a verification code"}
            </Text>
          </FormLabel>
          <Input
            fontSize={"lg"}
            value={verifCode}
            placeholder={
              verifType === "SignIn"
                ? "Enter one-time passcode"
                : "Enter sign-up verification code"
            }
            colorScheme="heritageBlue"
            onChange={(event) => setVerifCode(event.target.value)}
          />
          {verifType === "SignIn" ||
            (verifType === "VerifyTotp" && (
              <FormHelperText>
                Please enter the code displayed in your authenticator app
              </FormHelperText>
            ))}
          {codeIncorrect && (
            <FormErrorMessage>{codeErrorMessage}</FormErrorMessage>
          )}
        </FormControl>
      </VStack>

      <HStack spacing={3} width="100%">
        {verifType === "VerifyTotp" && qrString !== null && (
          <Button
            fontSize={"lg"}
            colorScheme="heritageBlue"
            borderRadius={500}
            onClick={() => {
              changeAuthState(AuthState.TotpSetup);
            }}
          >
            Prev
          </Button>
        )}
        <Spacer />
        {verifType === "SignUp" && (
          <Button
            fontSize={"lg"}
            background={"spiritBlue.100"}
            color={"heritageBlue.500"}
            borderRadius={500}
            onClick={() => {
              resendSignUpCode();
            }}
          >
            Resend Code
          </Button>
        )}

        <Button
          fontSize={"lg"}
          colorScheme="heritageBlue"
          borderRadius={500}
          isLoading={performingQueries}
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
