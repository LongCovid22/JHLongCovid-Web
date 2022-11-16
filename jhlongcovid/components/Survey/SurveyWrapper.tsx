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
  Spacer,
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
import { PreSurvey } from "./SurveyBody/PreSurvey";
import { selectUser } from "../../redux/slices/userSlice";
import * as mutations from "../../src/graphql/mutations";
import { API } from "aws-amplify";
import { checkEmptyDemoFields } from "./SurveyFunctions";

// type for the onClose function to close the modal
interface SurveyWrapperProps {
  onClose: () => void;
}

export type UserInfo = {
  name: string;
  age: string;
  zip: string;
  race: string;
  sex: string;
  height: string;
  weight: string;
};

export interface SurveyQuestionProps {
  currentQuestion: any;
  setAnswer: (answer: any) => void;
  userInfo?: UserInfo;
  setErrorPresent?: (error: boolean) => void;
  setErrorText?: (text: string) => void;
  onVerify?: () => void;
}

const Body: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  userInfo,
  setAnswer,
  setErrorPresent,
  setErrorText,
  onVerify,
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
        userInfo={userInfo}
        setAnswer={setAnswer}
        onVerify={onVerify}
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
  const user = useAppSelector(selectUser);
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
    name: "",
    age: "",
    zip: "",
    race: "",
    sex: "",
    height: "",
    weight: "",
  });

  const [isFinalSection, setIsFinalSection] = useState(false);
  const [missingAnswer, setMissingAnswer] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [errorPresent, setErrorPresent] = useState(false);
  const [preSurvey, setPreSurvey] = useState(true);

  const handleQuestionChange = async (direction: "next" | "prev" | "skip") => {
    if (direction === "next") {
      if (currentQuestion.answerFormat !== "welcome") {
        // User hit continue as guest and needs to move in to
        // the guest survey
        if (preSurvey) {
          setPreSurvey(false);
          return;
        }

        if (currentQuestion.answerFormat === "account" && user) {
          // Update user with new info
          let userDetails = {};
          if (userInfo) {
            userDetails = {
              id: user.id,
              age: userInfo.age,
              race: userInfo.race.toUpperCase(),
              sex: userInfo.sex,
              lastSubmission: new Date(),
            };

            try {
              API.graphql({
                query: mutations.updateUser,
                variables: { input: userDetails },
                authMode: "AMAZON_COGNITO_USER_POOLS",
              });
            } catch (error) {
              console.log("Error: ", error);
            }
          }
          dispatch(nextQuestion({ answer: answer }));
          return;
        }

        if (currentQuestion.answerFormat === "thankYou") {
          // Finish the survey
          onClose();
          dispatch(initQuestions({ authId: null }));
        }

        if (currentQuestion.answerFormat === "demographics") {
          if (answer !== null) {
            const emptyFields = checkEmptyDemoFields(answer);
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
        // Perform action on next button
        // Update user info depending on the page
        const userInfoUpdate = { ...userInfo };

        if (currentQuestion.answerFormat === "consent") {
          userInfoUpdate.name = answer as string;
          setUserInfo(userInfoUpdate);
        } else if (currentQuestion.answerFormat === "demographics") {
          const a = answer as {
            zip: string;
            age: string;
            race: string;
            sex: string;
          };
          userInfoUpdate.age = a.age;
          userInfoUpdate.zip = a.zip;
          userInfoUpdate.race = a.race;
          userInfoUpdate.sex = a.sex;
          setUserInfo(userInfoUpdate);
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
    if (currentQuestion.answerFormat === "account" && user) {
      handleQuestionChange("next");
    }
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

  useEffect(() => {
    // If a user is already signed in do not display the pre survey
    // login screen. Instead create the survey depending on whether they
    // are DAILY, WEEKLY, or MONTHLY
    if (user !== undefined) {
      setPreSurvey(false);
    } else {
      setPreSurvey(true);
    }
  }, [user]);

  return (
    <ModalContent
      style={{
        background: "white",
        width: width < 700 ? 410 : width * 0.45,
        minWidth: 410,
        maxWidth: 750,
        minHeight: height * 0.35,
        height: height < 720 ? height * 0.75 : "600px",
        borderRadius: "35px",
      }}
    >
      <ModalHeader>
        <Flex>
          <Text fontSize={"2xl"}>
            {!preSurvey ? currentQuestion.title : ""}
          </Text>
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
        {!preSurvey ? (
          <Body
            currentQuestion={currentQuestion}
            userInfo={userInfo}
            setAnswer={setAnswer}
            setErrorPresent={setErrorPresent}
            setErrorText={setErrorText}
            onVerify={() => handleQuestionChange("next")}
          />
        ) : (
          <PreSurvey
            dismissPreSurvey={() => {
              setPreSurvey(false);
              dispatch(initQuestions({ authId: null }));
            }}
          />
        )}
      </ModalBody>
      <ModalFooter>
        <HStack>
          {(missingAnswer || errorPresent) && !preSurvey && (
            <Text fontSize={"14px"} color={"red"}>
              {errorText}
            </Text>
          )}
          {currentQuestion.answerFormat === "account" && !preSurvey && (
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
          {!isFirstQuestion && !isFinalSection && !preSurvey && (
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
          {!preSurvey ? (
            <Button
              colorScheme="hopkinsBlue"
              borderRadius={500}
              onClick={() => handleQuestionChange("next")}
            >
              {isLastQuestion ? "Finish" : "Next"}
            </Button>
          ) : (
            <Button
              background={"hopkinsBlue.100"}
              color={"hopkinsBlue.500"}
              borderRadius={500}
              onClick={() => {
                dispatch(initQuestions({ authId: null }));
                setPreSurvey(false);
              }}
            >
              Continue as guest
            </Button>
          )}
        </HStack>
      </ModalFooter>
    </ModalContent>
  );
};
