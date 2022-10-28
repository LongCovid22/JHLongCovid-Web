//username, password, MFA, submit button
import { VStack, Heading, Input, Button } from "@chakra-ui/react";
import { Dispatch } from "@reduxjs/toolkit";

import { SetStateAction, useState } from "react";

import { Auth } from "aws-amplify";

async function signUp(username: string, password: string) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      // attributes: {
      //     email,          // optional
      //     phone_number,   // optional - E.164 number convention
      //     // other custom attributes
      // },
      // autoSignIn: { // optional - enables auto sign in after user is confirmed
      //     enabled: true,
      // }
    });
    // console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

async function confirmSignUp(
  username: string,
  code: string,
  setShowSurvey: (bool: boolean) => void
) {
  try {
    const loggedUser = await Auth.confirmSignUp(username, code);
    setShowSurvey(true);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
}

function sendEmail(
  emailConfirmed: boolean,
  setEmailConfirmed: (b: boolean) => void
) {
  setEmailConfirmed(!emailConfirmed);
}

interface SignUpProps {
  setCurrentPage: (page: string) => void;
  setShowSurvey: (bool: boolean) => void;
}

export const SignUp: React.FC<SignUpProps> = ({
  setCurrentPage,
  setShowSurvey,
}) => {
  const [emailConfirmed, setEmailConfirmed] = useState(false);

  const [username, setUserName] = useState("");
  const changeUserName = (event) => setUserName(event.target.value);

  const [password, setPassword] = useState("");
  const changePassword = (event) => setPassword(event.target.value);

  const [mfa, setmfa] = useState("");
  const changeMfa = (event) => setmfa(event.target.value);

  return (
    <VStack>
      <Heading>Sign Up</Heading>
      <Input placeholder="username" onChange={changeUserName}></Input>
      <Input
        placeholder="password"
        onChange={changePassword}
        type="password"
      ></Input>
      <Button
        onClick={() => {
          signUp(username, password);
          sendEmail(emailConfirmed, setEmailConfirmed);
        }}
      >
        Send Code to Email for Confirmation
      </Button>

      {emailConfirmed && (
        <>
          <Heading>Confirmation Code</Heading>
          <Input placeholder="6 digit pin" onChange={changeMfa}></Input>

          <Button onClick={() => confirmSignUp(username, mfa, setShowSurvey)}>
            Submit
          </Button>
        </>
      )}
    </VStack>
  );
};
