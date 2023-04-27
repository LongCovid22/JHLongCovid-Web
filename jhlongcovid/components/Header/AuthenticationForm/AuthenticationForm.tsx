import React, { useCallback, useEffect, useState } from "react";
import { SignInForm } from "./Forms/SignInForm";
import { SignUpForm } from "./Forms/SignUpForm";
import { TotpForm } from "./Forms/TotpForm";
import { VerificationForm } from "./Forms/VerificationForm";
import { CognitoUser } from "@aws-amplify/auth";
import { UserInfo } from "../../Survey/SurveyWrapper";

export enum AuthState {
  SignIn,
  SignUp,
  TotpSetup,
  VerifyCode,
}

export const AuthenticationForm: React.FC<{
  initialAuthState: AuthState;
  userInfo?: UserInfo;
  showTitle?: boolean;
  midSurvey: boolean;
  onVerify: () => void;
}> = ({
  initialAuthState,
  userInfo,
  midSurvey,
  onVerify,
  showTitle = false,
}) => {
  const [authState, setAuthState] = useState<AuthState>(initialAuthState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verifType, setVerifType] = useState<
    "SignUp" | "SignIn" | "VerifyTotp"
  >("SignIn");
  const [qrString, setQRString] = useState<string | null>(null);
  const [user, setUser] = useState<undefined | CognitoUser>(undefined);

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email);
    }
  }, []);

  const renderFormBasedOnAuthState = useCallback(() => {
    switch (authState) {
      case AuthState.SignIn:
        return (
          <SignInForm
            email={email}
            password={password}
            setUser={setUser}
            setEmail={setEmail}
            setPassword={setPassword}
            setVerifType={setVerifType}
            changeAuthState={setAuthState}
          />
        );
      case AuthState.SignUp:
        return (
          <SignUpForm
            email={email}
            password={password}
            confirmPass={confirmPassword}
            midSurvey={midSurvey}
            userInfo={userInfo}
            setEmail={setEmail}
            setPassword={setPassword}
            setVerifType={setVerifType}
            setConfirmPassword={setConfirmPassword}
            changeAuthState={setAuthState}
          />
        );
      case AuthState.TotpSetup:
        return (
          <TotpForm
            user={user}
            setVerifType={setVerifType}
            changeAuthState={setAuthState}
            qrString={qrString}
            setQRString={setQRString}
          />
        );
      case AuthState.VerifyCode:
        return (
          <VerificationForm
            email={email}
            password={password}
            user={user}
            verifType={verifType}
            midSurvey={midSurvey}
            userInfo={userInfo}
            qrString={qrString}
            onVerify={onVerify}
            setUserInfo={setUser}
            setQRString={setQRString}
            changeAuthState={setAuthState}
          />
        );
    }
  }, [authState, email, password, confirmPassword, qrString]);

  return <>{renderFormBasedOnAuthState()}</>;
};
