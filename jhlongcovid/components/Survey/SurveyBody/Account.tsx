import React, { useState, useEffect } from "react";
import { VStack, Text } from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyBody";
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
      <VStack height={"100%"} spacing={"25px"}>
        <Text fontSize={"lg"} fontWeight={"regular"}>
          {currentQuestion.question}
        </Text>
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
