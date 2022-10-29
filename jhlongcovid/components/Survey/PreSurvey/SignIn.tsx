// username, password, submit button

import {
  VStack,
  Input,
  Heading,
  Button,
  Box,
  Text,
  Center,
  FormControl,
  FormLabel,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import QRCode from "qrcode.react";
import { useState } from "react";

import { Auth } from "aws-amplify";

interface SignInProps {
  setCurrentPage: (page: string) => void;
  setShowSurvey: (bool: boolean) => void;
}

export const SignIn: React.FC<SignInProps> = ({
  setCurrentPage,
  setShowSurvey,
}) => {
  const [username, setUserName] = useState("");
  const changeUserName = (event) => setUserName(event.target.value);

  const [password, setPassword] = useState("");
  const changePassword = (event) => setPassword(event.target.value);

  const [qrString, setQRString] = useState("");

  const signIn = async (username: string, password: string) => {
    try {
      const user = await Auth.signIn(username, password);
      console.log(" User signed in: ", user);
      if (user.challengeName == "MFA_SETUP") {
        const code = await Auth.setupTOTP(user);
        const qr =
          "otpauth://totp/AWSCognito:" +
          user.username +
          "?secret=" +
          code +
          "&issuer=JH%20Long%20COVID";

        setQRString(qr);
      }
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  return (
    <VStack>
      {qrString === "" ? (
        <VStack>
          <Heading>Sign In!</Heading>

          {/* <Input placeholder="username" onChange={changeUserName}></Input>
          <Input
            type="password"
            placeholder="password"
            onChange={changePassword}
          ></Input>
          <Button
            onClick={() => {
              signIn(username, password);
            }}
          >
            Submit
          </Button> */}
        </VStack>
      ) : (
        <VStack>
          <Heading>MFA Setup</Heading>
          <Text fontSize="lg" align="center">
            In order to setup MFA, please scan the bar code below with your
            choice of authenticator app
          </Text>
          <QRCode value={qrString} />
        </VStack>
      )}
    </VStack>
  );
};
