import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Avatar,
  Modal,
  ModalCloseButton,
  ModalContent,
  CloseButton,
  ModalFooter,
  HStack,
  useDisclosure,
  IconButton,
  Checkbox,
  Box,
  ModalBody,
  ModalHeader,
  Text,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import {
  initQuestions,
  nextQuestion,
  selectCurrentQuestion,
} from "../../redux/slices/surveySlice";
import { Welcome } from "./SurveyBody/Welcome";
import { Consent } from "./SurveyBody/Consent";
import { Demographics } from "./SurveyBody/Demographics";
import { Choice } from "./SurveyBody/Choice";

interface SurveyWrapperProps {
  onClose: () => void;
}

export interface SurveyQuestionProps {
  currentQuestion: any;
  setAnswer: (answer: any) => void;
}

const Body: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
}) => {
  const answerFormat = currentQuestion.answerFormat;
  if (Array.isArray(answerFormat)) {
    return <Choice currentQuestion={currentQuestion} setAnswer={setAnswer} />;
  } else if (answerFormat === "consent") {
    return <Consent currentQuestion={currentQuestion} setAnswer={setAnswer} />;
  } else if (answerFormat === "demographics") {
    return (
      <Demographics currentQuestion={currentQuestion} setAnswer={setAnswer} />
    );
  } else if (answerFormat === "welcome") {
    return <Welcome currentQuestion={currentQuestion} setAnswer={setAnswer} />;
  } else if (answerFormat === "choice") {
    return <Choice currentQuestion={currentQuestion} setAnswer={setAnswer} />;
  } else {
    return <Text>Sample</Text>;
  }
};

export const SurveyWrapper: React.FC<SurveyWrapperProps> = ({ onClose }) => {
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const dispatch = useAppDispatch();
  const [answer, setAnswer] = useState();
  const mockChoice = {};

  const handleNextQuestion = () => {
    dispatch(nextQuestion({ answer: answer }));
  };

  return (
    <ModalContent
      style={{
        background: "white",
        width: width < 700 ? 410 : width * 0.45,
        minWidth: 410,
        maxWidth: width * 0.45,
        minHeight: height * 0.35,
        height: height < 720 ? height * 0.75 : "600px",
        borderRadius: "35px",
      }}
    >
      <ModalHeader>
        <Flex>
          <Text fontSize={"2xl"}>{currentQuestion.title}</Text>
          <Spacer />
          <CloseButton
            size={"md"}
            bgColor="hopkinsBlue.100"
            color={"hopkinsBlue.600"}
            onClick={() => {
              onClose();
              dispatch(initQuestions({ authId: null }));
            }}
          />
        </Flex>
      </ModalHeader>
      <ModalBody
        style={{
          overflowY: "auto",
        }}
      >
        <Body currentQuestion={currentQuestion} setAnswer={setAnswer} />
      </ModalBody>
      <ModalFooter>
        <HStack>
          <Button
            colorScheme="hopkinsBlue"
            borderRadius={500}
            onClick={() => handleNextQuestion()}
          >
            {currentQuestion.lastQuestion ? "Finish" : "Next"}
          </Button>
        </HStack>
      </ModalFooter>
    </ModalContent>
  );
};
