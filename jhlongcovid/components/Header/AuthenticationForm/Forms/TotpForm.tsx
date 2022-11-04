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
import QRCode from "qrcode.react";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";

interface TotpProps {
  user: any;
  setVerifType: (val: "SignUp" | "SignIn" | "VerifyTotp") => void;
  changeAuthState: (state: AuthState) => void;
}

export const TotpForm: React.FC<TotpProps> = ({
  user,
  setVerifType,
  changeAuthState,
}) => {
  const [qrString, setQRString] = useState("");

  const handleNext = () => {
    setVerifType("VerifyTotp");
    changeAuthState(AuthState.VerifyCode);
  };

  useEffect(() => {
    const setupTotp = async () => {
      if (user && qrString === "") {
        const code = await Auth.setupTOTP(user);
        const qr =
          "otpauth://totp/AWSCognito:" +
          user.username +
          "?secret=" +
          code +
          "&issuer=JH%20Long%20COVID";
        setQRString(qr);
      }
    };

    setupTotp();
  }, [user]);

  return (
    <VStack width="75%" maxW="450px" minW="325px" spacing="25px">
      <VStack w="100%">
        <Heading size={"md"} mb="5px">
          Setup MFA
        </Heading>
        <Text>
          Scan the below bar code using your authenticator app of choice (e.g.
          Google Authenticator)
        </Text>
      </VStack>
      <QRCode value={qrString} />
      <HStack spacing={3} width="100%">
        <Spacer />
        <Button
          colorScheme="hopkinsBlue"
          borderRadius={500}
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
};
