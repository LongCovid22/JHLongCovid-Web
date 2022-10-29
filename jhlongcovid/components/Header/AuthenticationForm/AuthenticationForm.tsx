import React, { useCallback, useState } from "react";
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
import { SignInForm } from "./Forms/SignInForm";
import { SignUpForm } from "./Forms/SignUpForm";

export enum AuthState {
  SignIn,
  SignUp,
  TotpSetup,
  VerifyCode,
}

export const AuthenticationForm = () => {
  const [authState, setAuthState] = useState<AuthState>(AuthState.SignIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verifCode, setVerifCode] = useState("");
  const [qrString, setQRString] = useState("");

  const renderFormBasedOnAuthState = useCallback(() => {
    switch (authState) {
      case AuthState.SignIn:
        return (
          <SignInForm
            email={email}
            password={password}
            setEmail={setEmail}
            setQRString={setQRString}
            setPassword={setPassword}
            changeAuthState={setAuthState}
          />
        );
      case AuthState.SignUp:
        return (
          <SignUpForm
            email={email}
            password={password}
            confirmPass={confirmPassword}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            changeAuthState={setAuthState}
          />
        );
      case AuthState.TotpSetup:
        return <Text>Sample TOTP setup</Text>;
      case AuthState.VerifyCode:
        return <Text>Sample Verify Code</Text>;
    }
  }, [authState, email, password, confirmPassword, verifCode, qrString]);

  return <>{renderFormBasedOnAuthState()}</>;
};
