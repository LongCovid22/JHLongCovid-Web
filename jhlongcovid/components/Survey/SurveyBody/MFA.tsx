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
  FormErrorMessage,
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyBody";

export const MFA: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
  setErrorPresent,
}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isNum, setIsNum] = useState(true);

  const handleVerificationCode = (code: string) => {
    const regex = new RegExp(/^\d+$/);
    if (!regex.test(code)) {
      setIsNum(false);
      setErrorPresent && setErrorPresent(true);
    } else {
      setIsNum(true);
      setErrorPresent && setErrorPresent(false);
    }

    setAnswer(code);
    setVerificationCode(code);
  };

  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"} width={"100%"}>
          {currentQuestion.question}
        </Text>
        <Stack direction={"column"} width={"100%"}>
          <FormControl isInvalid={!isNum}>
            <FormLabel>{currentQuestion.options.title}</FormLabel>
            <Input
              width={"50%"}
              type={currentQuestion.options.type}
              placeholder={currentQuestion.options.placeholder}
              value={verificationCode}
              onChange={(event) => {
                handleVerificationCode(event.target.value);
              }}
            />
            {!isNum && (
              <FormErrorMessage>Please enter a number</FormErrorMessage>
            )}
          </FormControl>
        </Stack>
      </VStack>
    </>
  );
};
