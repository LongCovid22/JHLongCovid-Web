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
  showTitle?: boolean;
  setVerifType: (val: "SignUp" | "SignIn" | "VerifyTotp") => void;
  changeAuthState: (state: AuthState) => void;
  qrString: string | null;
  setQRString: React.Dispatch<React.SetStateAction<string | null>>;
}

export const TotpForm: React.FC<TotpProps> = ({
  user,
  showTitle,
  setVerifType,
  changeAuthState,
  qrString,
  setQRString,
}) => {
  // const [qrString, setQRString] = useState("");

  const handleNext = () => {
    setVerifType("VerifyTotp");
    changeAuthState(AuthState.VerifyCode);
  };

  useEffect(() => {
    const setupTotp = async () => {
      if (user && qrString === null) {
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
  }, [user, qrString]);

  return (
    <VStack width="75%" maxW="450px" minW="325px" spacing="25px">
      <VStack w="100%">
        {showTitle && (
          <Heading size={"md"} mb="5px">
            Setup MFA
          </Heading>
        )}
        <Text fontSize={"lg"}>
          To register your one time passcodes, you'll need to download a
          third-party authenticator app like Google Authenticator or Microsoft
          Authenticator and then scan the QR code provided.
        </Text>
      </VStack>
      <QRCode value={qrString === null ? "" : qrString} />
      <HStack spacing={3} width="100%">
        <Spacer />
        <Button
          fontSize={"lg"}
          colorScheme="heritageBlue"
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
