import React from "react";
import { User } from "../../src/API";
import { UserInfo } from "./SurveyWrapper";
import { LocationData } from "../../util/locationFunctions";
import { Welcome } from "./SurveyBody/Welcome";
import { Consent } from "./SurveyBody/Consent";
import { Demographics } from "./SurveyBody/Demographics/Demographics";
import { ChoiceQuestion } from "./SurveyBody/ChoiceQuestion";
import { InputQuestion } from "./SurveyBody/InputQuestion";
import { Account } from "./SurveyBody/Account";
import { ThankYou } from "./SurveyBody/ThankYou";
import { ScaleQuestion } from "./SurveyBody/ScaleQuestion";
import { MultiChoiceQuestion } from "./SurveyBody/MultiChoiceQuestion";
import { ComeBackLater } from "./SurveyBody/ComeBackLater";
import { Text } from "@chakra-ui/react";

export interface SurveyQuestionProps {
  currentQuestion: any;
  setAnswer: (answer: any) => void;
  setRecap?: (recap: any) => void;
  user?: User;
  userInfo?: UserInfo;
  location?: LocationData;
  setErrorPresent?: (error: boolean) => void;
  setErrorText?: (text: string) => void;
  setLocationData?: React.Dispatch<React.SetStateAction<LocationData>>;
  onVerify?: () => void;
  handleQuestionChange?: (
    direction: "next" | "prev" | "skip" | "finish"
  ) => void;
}

export const SurveyBody: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  userInfo,
  location,
  setAnswer,
  setRecap,
  setErrorPresent,
  setErrorText,
  setLocationData,
  onVerify,
  handleQuestionChange,
  user,
}) => {
  let answerFormat = currentQuestion.answerFormat;
  if (Array.isArray(answerFormat)) {
    answerFormat = answerFormat as string[];
    if (answerFormat.includes("multichoice")) {
      return (
        <MultiChoiceQuestion
          currentQuestion={currentQuestion}
          setAnswer={setAnswer}
          setErrorPresent={setErrorPresent}
          setErrorText={setErrorText}
        />
      );
    } else {
      return (
        <ChoiceQuestion
          currentQuestion={currentQuestion}
          setAnswer={setAnswer}
          setErrorPresent={setErrorPresent}
          setErrorText={setErrorText}
        />
      );
    }
  } else if (answerFormat === "consent") {
    return (
      <Consent
        currentQuestion={currentQuestion}
        setRecap={setRecap}
        setAnswer={setAnswer}
        setErrorPresent={setErrorPresent}
        setErrorText={setErrorText}
      />
    );
  } else if (answerFormat === "comeBackLater") {
    return (
      <ComeBackLater
        currentQuestion={currentQuestion}
        handleQuestionChange={handleQuestionChange}
        setAnswer={setAnswer}
        user={user}
      />
    );
  } else if (answerFormat === "demographics") {
    return (
      <Demographics
        currentQuestion={currentQuestion}
        setAnswer={setAnswer}
        location={location}
        setLocationData={setLocationData}
        setErrorPresent={setErrorPresent}
      />
    );
  } else if (answerFormat === "welcome") {
    return (
      <Welcome
        currentQuestion={currentQuestion}
        setAnswer={setAnswer}
        handleQuestionChange={handleQuestionChange}
      />
    );
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
  } else if (answerFormat === "scale") {
    return (
      <ScaleQuestion currentQuestion={currentQuestion} setAnswer={setAnswer} />
    );
  } else {
    return <Text>Sample Text</Text>;
  }
};
