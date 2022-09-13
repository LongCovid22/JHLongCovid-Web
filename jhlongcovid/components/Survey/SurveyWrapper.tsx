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
  Input,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import {
  initQuestions,
  nextQuestion,
  prevQuestion,
  selectCurrentQuestion,
  selectIsFirstQuestion,
  selectIslastQuestion,
} from "../../redux/slices/surveySlice";
import { Welcome } from "./SurveyBody/Welcome";
import { Consent } from "./SurveyBody/Consent";
import { Demographics } from "./SurveyBody/Demographics";
import { ChoiceQuestion } from "./SurveyBody/ChoiceQuestion";
import { InputQuestion } from "./SurveyBody/InputQuestion";
import { Password } from "./SurveyBody/Password";
import { ThankYou } from "./SurveyBody/ThankYou";
import { MFA } from "./SurveyBody/MFA";
import { ScaleQuestion } from "./SurveyBody/ScaleQuestion";

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
    return (
      <ChoiceQuestion currentQuestion={currentQuestion} setAnswer={setAnswer} />
    );
  } else if (answerFormat === "consent") {
    return <Consent currentQuestion={currentQuestion} setAnswer={setAnswer} />;
  } else if (answerFormat === "demographics") {
    return (
      <Demographics currentQuestion={currentQuestion} setAnswer={setAnswer} />
    );
  } else if (answerFormat === "welcome") {
    return <Welcome currentQuestion={currentQuestion} setAnswer={setAnswer} />;
  } else if (answerFormat === "choice") {
    return (
      <ChoiceQuestion currentQuestion={currentQuestion} setAnswer={setAnswer} />
    );
  } else if (answerFormat === "input") {
    return (
      <InputQuestion currentQuestion={currentQuestion} setAnswer={setAnswer} />
    );
  } else if (answerFormat === "password") {
    return <Password currentQuestion={currentQuestion} setAnswer={setAnswer} />;
  } else if (answerFormat === "thankYou") {
    return <ThankYou currentQuestion={currentQuestion} setAnswer={setAnswer} />;
  } else if (answerFormat === "mfa") {
    return <MFA currentQuestion={currentQuestion} setAnswer={setAnswer} />;
  } else if (answerFormat === "scale") {
    return (
      <ScaleQuestion currentQuestion={currentQuestion} setAnswer={setAnswer} />
    );
  } else {
    return <Text>Sample Text</Text>;
  }
};

export const SurveyWrapper: React.FC<SurveyWrapperProps> = ({ onClose }) => {
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const isFirstQuestion = useAppSelector(selectIsFirstQuestion);
  const isLastQuestion = useAppSelector(selectIslastQuestion);
  const dispatch = useAppDispatch();
  const [answer, setAnswer] = useState();
  const [isFinalSection, setIsFinalSection] = useState(false);

  const handleNextQuestion = () => {
    dispatch(nextQuestion({ answer: answer }));
  };

  useEffect(() => {
    setIsFinalSection(
      currentQuestion.answerFormat === "mfa" ||
        currentQuestion.answerFormat === "thankYou" ||
        currentQuestion.answerFormat === "password"
    );
  }, [currentQuestion]);

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
          {currentQuestion.answerFormat === "password" && (
            <Button
              background={"hopkinsBlue.100"}
              color={"hopkinsBlue.500"}
              borderRadius={500}
              onClick={() => {
                dispatch(() => handleNextQuestion());
              }}
            >
              Skip
            </Button>
          )}
          {!isFirstQuestion && !isFinalSection && (
            <Button
              colorScheme="hopkinsBlue"
              borderRadius={500}
              onClick={() => {
                dispatch(prevQuestion());
              }}
            >
              Prev
            </Button>
          )}
          <Button
            colorScheme="hopkinsBlue"
            borderRadius={500}
            onClick={() => handleNextQuestion()}
          >
            {isLastQuestion ? "Finish" : "Next"}
          </Button>
        </HStack>
      </ModalFooter>
    </ModalContent>
  );
};
