import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  ModalContent,
  CloseButton,
  ModalFooter,
  HStack,
  ModalBody,
  ModalHeader,
  Text,
  Spacer
} from "@chakra-ui/react";

//redux imports
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import {
  initQuestions,
  nextQuestion,
  prevQuestion,
  selectCurrentAnswer,
  selectCurrentQuestion,
  selectIsFirstQuestion,
  selectIslastQuestion,
} from "../../redux/slices/surveySlice";

//survey component templates
import { Welcome } from "./SurveyBody/Welcome";
import { Consent } from "./SurveyBody/Consent";
import { Demographics } from "./SurveyBody/Demographics";
import { ChoiceQuestion } from "./SurveyBody/ChoiceQuestion";
import { InputQuestion } from "./SurveyBody/InputQuestion";
import { Account } from "./SurveyBody/Account";
import { ThankYou } from "./SurveyBody/ThankYou";
import { MFA } from "./SurveyBody/MFA";
import { ScaleQuestion } from "./SurveyBody/ScaleQuestion";
import { MultiChoiceQuestion } from "./SurveyBody/MultiChoiceQuestion";
import { confirmSignUp, signUp } from "../../authFunctions";
import { AuthErrorTypes } from "@aws-amplify/auth/lib-esm/types";

// type for the onClose function to close the modal
interface SurveyWrapperProps {
  onClose: () => void;
}

export type UserInfo = {
  email: string;
  password: string;
  name: string;
  age: string;
  zip: string;
  race: string;
};

export interface SurveyQuestionProps {
  currentQuestion: any;
  setAnswer: (answer: any) => void;
  setErrorPresent?: (error: boolean) => void;
  setErrorText?: (text: string) => void;
}

const Body: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  setAnswer,
  setErrorPresent,
  setErrorText,
}) => {
  let answerFormat = currentQuestion.answerFormat;
  if (Array.isArray(answerFormat)) {
    answerFormat = answerFormat as string[];
    if (answerFormat.includes("multichoice")) {
      return (
        <MultiChoiceQuestion
          currentQuestion={currentQuestion}
          setAnswer={setAnswer}
        />
      );
    } else {
      return (
        <ChoiceQuestion
          currentQuestion={currentQuestion}
          setAnswer={setAnswer}
        />
      );
    }
  } else if (answerFormat === "consent") {
    return (
      <Consent
        currentQuestion={currentQuestion}
        setAnswer={setAnswer}
        setErrorPresent={setErrorPresent}
        setErrorText={setErrorText}
      />
    );
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
  } else if (answerFormat === "account") {
    return (
      <Account
        currentQuestion={currentQuestion}
        setAnswer={setAnswer}
        setErrorPresent={setErrorPresent}
      />
    );
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
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const isFirstQuestion = useAppSelector(selectIsFirstQuestion);
  const isLastQuestion = useAppSelector(selectIslastQuestion);
  const dispatch = useAppDispatch();
  const [answer, setAnswer] = useState<string | string[] | object | null>(
    currentQuestion.answer
  );

  // state to keep track of user info filled out throughout the survey
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
    name: "",
    age: "",
    zip: "",
    race: "",
  });

  const [isFinalSection, setIsFinalSection] = useState(false);
  const [missingAnswer, setMissingAnswer] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [errorPresent, setErrorPresent] = useState(false);


  const handleQuestionChange = async (direction: "next" | "prev" | "skip") => {
    if (direction === "next") {
      if (currentQuestion.answerFormat !== "welcome") {
        if (currentQuestion.answerFormat === "thankYou") {
          // Finish the survey
          onClose();
          dispatch(initQuestions({ authId: null }));
        }

        if (currentQuestion.answerFormat === "demographics") {
          let emptyFields = [];
          if (answer !== null) {
            let demographics = answer as {
              zip: string;
              age: string;
              race: string;
            };
            if (demographics.zip === "") {
              emptyFields.push("zip code");
            }
            if (demographics.age === "") {
              emptyFields.push("age");
            }
            if (demographics.race === "") {
              emptyFields.push("race");
            }

            if (emptyFields.length > 0) {
              setErrorText(`Please provide ${emptyFields.join(", ")}`);
              setMissingAnswer(true);
              return;
            }
          }
        }

        if (
          answer === "" ||
          answer === null ||
          (Array.isArray(answer) && answer.length === 0) ||
          (Array.isArray(answer) &&
            answer.filter((element) => element === "").length > 0)
        ) {
          setErrorText("Please provide an answer to the missing fields");
          setMissingAnswer(true);
          return;
        } else {
          setMissingAnswer(false);
        }
      }

      if (!errorPresent && direction === "next") {
        // perform action on next button
        // TODO: abstract out in to different function

        // Update user info depending on the page
        const userInfoUpdate = { ...userInfo };

        if (currentQuestion.answerFormat === "consent") {
          // TODO: get name from Hubert's changes
        } else if (currentQuestion.answerFormat === "demographics") {
          const a = answer as { zip: string; age: string; race: string };
          userInfoUpdate.age = a.age;
          userInfoUpdate.zip = a.zip;
          userInfoUpdate.race = a.race;
          setUserInfo(userInfoUpdate);
        } else if (currentQuestion.answerFormat === "account") {
          const a = answer as { email: string; password: string };
          userInfoUpdate.email = a.email;
          userInfoUpdate.password = a.password;
          setUserInfo(userInfoUpdate);
        }

        try {
          if (currentQuestion.answerFormat === "account") {
            await signUp(userInfoUpdate);
          } else if (currentQuestion.answerFormat === "mfa") {
            await confirmSignUp(userInfoUpdate, answer as string);
          }
        } catch (error) {
          const e = error as { __type: string; message: string };
          setErrorPresent(true);
          setErrorText(e.message);
          return;
        }

        dispatch(nextQuestion({ answer: answer }));
      }
    } else if (direction === "skip") {
      dispatch(nextQuestion({ answer: "skip" }));
    } else {
      dispatch(prevQuestion({ answer: answer }));
    }
    setAnswer("");
  };

  // Mark final section
  useEffect(() => {
    setIsFinalSection(
      currentQuestion.answerFormat === "mfa" ||
        currentQuestion.answerFormat === "thankYou" ||
        currentQuestion.answerFormat === "account"
    );
  }, [currentQuestion]);

  // Reset wrapper values for next question
  useEffect(() => {
    setErrorText("");
    setMissingAnswer(false);
    setErrorPresent!(false);
    setAnswer(currentAnswer);
  }, [currentAnswer, currentQuestion]);

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
        <Body
          currentQuestion={currentQuestion}
          setAnswer={setAnswer}
          setErrorPresent={setErrorPresent}
          setErrorText={setErrorText}
        />
      </ModalBody>
      <ModalFooter>
        <HStack>
          {(missingAnswer || errorPresent) && (
            <Text fontSize={"14px"} color={"red"}>
              {errorText}
            </Text>
          )}
          {currentQuestion.answerFormat === "account" && (
            <Button
              background={"hopkinsBlue.100"}
              color={"hopkinsBlue.500"}
              borderRadius={500}
              onClick={() => {
                handleQuestionChange("skip");
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
                handleQuestionChange("prev");
              }}
            >
              Prev
            </Button>
          )}
          <Button
            colorScheme="hopkinsBlue"
            borderRadius={500}
            onClick={() => handleQuestionChange("next")}
          >
            {isLastQuestion ? "Finish" : "Next"}
          </Button>
        </HStack>
      </ModalFooter>
    </ModalContent>
  );
};
