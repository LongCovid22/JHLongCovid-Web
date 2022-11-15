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
  setUserInfo,
  changeAuthState,
  onVerify,
}) => {
  const [verifCode, setVerifCode] = useState("");
  const [codeIncorrect, setCodeIncorrect] = useState(false);
  const [codeErrorMessage, setCodeErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  const handleCodeSubmit = async () => {
    try {
      if (verifType === "SignUp") {
        // Confirm Sign up
        await Auth.confirmSignUp(email, verifCode);

        // Sign in user immediately after sign up to start MFA setup
        const returnedUser = await Auth.signIn(email, password);
        if (returnedUser.challengeName === "MFA_SETUP") {
          setUserInfo(returnedUser);
          changeAuthState(AuthState.TotpSetup);
        }

        console.log("userInfo in sign up verification view: ", userInfo);
      } else if (verifType === "VerifyTotp") {
        // Verify totp
        await verifyTotp(user, verifCode);

        // Create new user after totp code verified
        const newUser = await createUser(user, email, midSurvey, userInfo);
        if (newUser) {
          dispatch(setUser(newUser));
        }

        // Perform finishing authform tasks on verify
        onVerify();
      } else {
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
          <FormLabel>
            {verifType === "SignIn" || verifType === "VerifyTotp"
              ? "One-Time Passcode"
              : "Verification code"}
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
