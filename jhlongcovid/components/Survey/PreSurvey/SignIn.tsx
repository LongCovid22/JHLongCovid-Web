// username, password, submit button

import { VStack, Input, Heading, Button, Box, Text } from "@chakra-ui/react";

import { useState } from "react";

import { Auth } from "aws-amplify";

interface SignInProps {
  setCurrentPage: (page: string) => void;
  setShowSurvey: (bool: boolean) => void;
}

async function signIn(
  username: string,
  password: string,
  setShowSurvey: (bool: boolean) => void
) {
  try {
    const user = await Auth.signIn(username, password);
    console.log(" User signed in: ", user);
    if (user.challengeName == "MFA_SETUP") {
      const code = await Auth.setupTOTP(user);
      console.log("Code: ", code);
    }

    setShowSurvey(true);
  } catch (error) {
    console.log("error signing in", error);
  }
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

  return (
    <VStack>
      {qrString === "" ? (
        <Box>
          <Heading>Sign In!</Heading>
          <Input placeholder="username" onChange={changeUserName}></Input>
          <Input
            type="password"
            placeholder="password"
            onChange={changePassword}
          ></Input>
          <Button
            onClick={() => {
              signIn(username, password, setShowSurvey);
            }}
          >
            Submit
          </Button>
        </Box>
      ) : (
        <Box>
          <Heading>MFA Setup</Heading>
          <Text fontSize="lg">
            In order to setup MFA, please scan the bar code below with your
            chose of authenticator app
          </Text>
        </Box>
      )}
    </VStack>
  );
};
