import React from "react";
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
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyWrapper";

export const Password: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  return (
    <>
      <VStack height={"100%"} spacing={"15px"}>
        <Text fontSize={"md"} fontWeight={"regular"}>
          {currentQuestion.question}
        </Text>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter password "
            colorScheme="hopkinsBlue"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confrim Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter confirm password "
            colorScheme="hopkinsBlue"
          />
        </FormControl>
      </VStack>
    </>
  );
};
