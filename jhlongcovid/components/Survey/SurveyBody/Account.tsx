import React, { useState, useEffect } from "react";
import {
  VStack,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
  Input,
  FormControl,
  FormLabel,
  List,
  HStack,
  ListIcon,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentAnswer } from "../../../redux/slices/surveySlice";
import {
  AuthenticationForm,
  AuthState,
} from "../../Header/AuthenticationForm/AuthenticationForm";

export const Account: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  userInfo,
  setAnswer,
  onVerify,
}) => {
  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"}>
          {currentQuestion.question}
        </Text>
        {/* <FormControl isInvalid={!validEmail}>
          <FormLabel>Email Address</FormLabel>
          <Input
            value={email}
            type="email"
            placeholder="Enter email "
            colorScheme="hopkinsBlue"
            onChange={(event) => handleEmail(event.target.value)}
          />
          {!validEmail && (
            <FormErrorMessage>
              Please enter a valid email address.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!validPassword || !passwordsMatch}>
          <FormLabel>Password</FormLabel>
          <Input
            value={pass}
            type="password"
            placeholder="Enter password "
            colorScheme="hopkinsBlue"
            onChange={(event) => handleFirstPassword(event.target.value)}
          />
          {!validPassword && (
            <FormErrorMessage>
              Please enter a valid password. Must be at least 8 characters long
              and include a numerical, special, lower, and uppercase character.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!passwordsMatch}>
          <FormLabel>Confrim Password</FormLabel>
          <Input
            value={confirmPass}
            type="password"
            placeholder="Enter confirm password "
            colorScheme="hopkinsBlue"
            onChange={(event) => handleSecondPassword(event.target.value)}
          />
          {!passwordsMatch && (
            <FormErrorMessage>Passwords do not match</FormErrorMessage>
          )}
        </FormControl> */}
        <AuthenticationForm
          initialAuthState={AuthState.SignUp}
          userInfo={userInfo}
          midSurvey={true}
          onVerify={() => {
            if (onVerify) {
              onVerify();
            }
          }}
        />
      </VStack>
    </>
  );
};
