import React, { useState } from "react";
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
  Stack,
  HStack,
  ListIcon,
  FormHelperText,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";

export const MFA: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const [verificationCode, setVerificationCode] = useState("");

  // implement confirmSignUp. setAnswer to success on finish

  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
          {currentQuestion.question}
        </Text>
        <Stack direction={"column"} width={"100%"}>
          <Text>{currentQuestion.options.title}</Text>
          <Input
            width={"50%"}
            type={currentQuestion.options.type}
            placeholder={currentQuestion.options.placeholder}
            value={verificationCode}
            onChange={(event) => {
              setVerificationCode(event.target.value);
            }}
          />
        </Stack>
      </VStack>
    </>
  );
};
