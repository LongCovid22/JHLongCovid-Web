import React, { useState, useEffect, useCallback } from "react";
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
  useToast,
  Image,
} from "@chakra-ui/react";

//redux imports
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import {
  finishSurvey,
  initQuestions,
  nextQuestion,
  prevQuestion,
  selectAnswerStack,
  selectCurrentAnswer,
  selectCurrentQuestion,
  selectIsFirstQuestion,
  selectIslastQuestion,
  selectQuestions,
  selectQuestionStack,
  selectTotalQuestions,
} from "../../redux/slices/surveySlice/surveySlice";
import { processEntries } from "../../redux/slices/surveySlice/surveySliceFunctions";
//survey component templates
import { Welcome } from "./SurveyBody/Welcome";
import { Consent } from "./SurveyBody/Consent";
import { Demographics } from "./SurveyBody/Demographics/Demographics";
import { ChoiceQuestion } from "./SurveyBody/ChoiceQuestion";
import { InputQuestion } from "./SurveyBody/InputQuestion";
import { Account } from "./SurveyBody/Account";
import { ThankYou } from "./SurveyBody/ThankYou";
import { ScaleQuestion } from "./SurveyBody/ScaleQuestion";
import { MultiChoiceQuestion } from "./SurveyBody/MultiChoiceQuestion";
import { PreSurvey } from "./SurveyBody/PreSurvey";
import { selectUser } from "../../redux/slices/userSlice";
import {
  aggregateResults,
  checkEmptyDemoFields,
  checkEmptyLocationData,
  createCovidEntry,
  getCountyAndStateWithZip,
  LocationData,
  saveEntries,
  updateUserWithInfoFromSurvey,
  userInfoIsEmpty,
} from "./SurveyFunctions";
import { aggregateSurveyResults } from "../../src/graphql/mutations";

// type for the onClose function to close the modal
interface SurveyWrapperProps {
  onClose: () => void;
}

export type UserInfo = {
  email: string;
  age: string;
  race: string;
  sex: string;
  height: string;
  weight: string;
};

export interface SurveyQuestionProps {
  currentQuestion: any;
  setAnswer: (answer: any) => void;
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

const Body: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  userInfo,
  location,
  setAnswer,
  setErrorPresent,
  setErrorText,
  setLocationData,
  onVerify,
  handleQuestionChange,
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

export const SurveyWrapper: React.FC<SurveyWrapperProps> = ({ onClose }) => {
  const toast = useToast();
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);
  const user = useAppSelector(selectUser);
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const currentAnswer = useAppSelector(selectCurrentAnswer);
  const isFirstQuestion = useAppSelector(selectIsFirstQuestion);
  const isLastQuestion = useAppSelector(selectIslastQuestion);
  const questionStack = useAppSelector(selectQuestionStack);
  const answerStack = useAppSelector(selectAnswerStack);
  const questions = useAppSelector(selectQuestions);
  const totalQuestions = useAppSelector(selectTotalQuestions);
  const dispatch = useAppDispatch();
  const [performingQueries, setPerformingQueries] = useState(false);
  const [answer, setAnswer] = useState<string | string[] | object | null>(
    currentQuestion.answer
  );
  const [location, setLocation] = useState<LocationData>({
    state: "",
    stateAbbrev: "",
    stateLat: 0.0,
    stateLong: 0.0,
    county: "",
    countyLat: 0.0,
    countyLong: 0.0,
  });

  // state to keep track of user info filled out throughout the survey
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    age: "",
    race: "",
    sex: "",
    height: "",
    weight: "",
  });
  const [isFinalSection, setIsFinalSection] = useState(false);
  const [missingAnswer, setMissingAnswer] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [errorPresent, setErrorPresent] = useState(false);
  const [preSurvey, setPreSurvey] = useState(false);

  const handleQuestionChange = async (
    direction: "next" | "prev" | "skip" | "finish"
  ) => {
    if (direction === "next") {
      if (currentQuestion.answerFormat !== "welcome") {
        // User hit continue as guest and needs to move in to
        // the guest survey
        if (preSurvey) {
          setPreSurvey(false);
          return;
        }

        // Update the info of the user signed in when on the account
        // stage at the end of the survey
        if (currentQuestion.answerFormat === "account" && user) {
          if (!userInfoIsEmpty) {
            await updateUserWithInfoFromSurvey(userInfo, user);
          }
          dispatch(nextQuestion({ answer: answer }));
          return;
        }

        if (currentQuestion.answerFormat === "thankYou") {
          // Finish the survey
          onClose();
          dispatch(initQuestions({ authId: null }));
        }

        // Check for empty fields during the demographics stage
        if (currentQuestion.answerFormat === "demographics") {
          if (answer !== null) {
            const emptyLocation = checkEmptyLocationData(location);
            const emptyFields = checkEmptyDemoFields(answer);
            if (emptyLocation) {
              emptyFields.push("location");
            }
            if (emptyFields.length > 0) {
              setErrorText(`Please provide ${emptyFields.join(", ")}`);
              setMissingAnswer(true);
              return;
            }
          }
          if (errorPresent) {
            setErrorText(`Please correct invalid responses`);
            return;
          }
        }

        // Check for empty fields in any stage of the survey
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
        } else if (
          Array.isArray(currentQuestion.answerFormat) &&
          currentQuestion.answerFormat.includes("multichoice")
        ) {
          let multiChoiceAnswer = answer as {
            choices: string[];
            other: string;
          };

          if (
            multiChoiceAnswer.choices.length === 0 &&
            multiChoiceAnswer.other === ""
          ) {
            setErrorText("Please provide an answer to the missing fields");
            setMissingAnswer(true);
            return;
          }
        } else {
          setMissingAnswer(false);
        }
      }

      if (!errorPresent && direction === "next") {
        // Perform action on next button
        // Update user info depending on the page
        const userInfoUpdate = { ...userInfo };

        if (currentQuestion.answerFormat === "consent") {
          userInfoUpdate.email = answer as string;
          setUserInfo(userInfoUpdate);
        } else if (currentQuestion.answerFormat === "demographics") {
          const a = answer as {
            location: LocationData;
            age: string;
            race: string;
            sex: string;
            height: string;
            weight: string;
          };
          userInfoUpdate.age = a.age;
          // userInfoUpdate.location = a.location;
          userInfoUpdate.race = a.race;
          userInfoUpdate.sex = a.sex;
          userInfoUpdate.weight = a.weight;
          userInfoUpdate.height = a.height;
          setUserInfo(userInfoUpdate);
        }

        dispatch(nextQuestion({ answer: answer }));
      }
    } else if (direction === "skip") {
      dispatch(nextQuestion({ answer: "skip" }));
    } else if (direction === "finish") {
      setPerformingQueries(true);
      const entries = processEntries(questionStack, answerStack, questions);
      // const locationData: LocationData = await getCountyAndStateWithZip(
      //   // userInfo.location,
      //   "13492",
      //   process.env.GOOGLEMAPS_API_KEY ?? ""
      // );

      if (location.state === "") {
        toast({
          title: "Survey submission",
          description:
            "Unable to find location. Please enter a valid zip code at the begininng of the survey.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }

      let ids;
      console.log("Survey Entries:", entries);
      // Save survey entries
      try {
        ids = await saveEntries(location, entries, userInfo, user);
      } catch (error) {
        console.log("Error saving survey entries", error);
        toast({
          title: "Survey submission",
          description: "Failed to submit survey",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }

      // Aggregate survey results
      try {
        await aggregateResults(entries, ids, userInfo, location, user);
        toast({
          title: "Survey submission",
          description: "Successfully submitted survey",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      } catch (error) {
        console.log("Error aggregating survey results", error);
        toast({
          title: "Error aggregating results",
          description: `${error}`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }

      setPerformingQueries(false);
      dispatch(initQuestions({ authId: null }));
      onClose();
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
    setIsFinalSection(currentQuestion.answerFormat === "thankYou");
  }, [currentQuestion]);

  // Reset wrapper values for next question
  useEffect(() => {
    setErrorText("");
    setMissingAnswer(false);
    setErrorPresent!(false);
    setAnswer(currentAnswer);
  }, [currentAnswer, currentQuestion]);

  // useEffect(() => {
  //   // If a user is already signed in do not display the pre survey
  //   // login screen. Instead create the survey depending on whether they
  //   // are DAILY, WEEKLY, or MONTHLY
  //   if (user !== undefined) {
  //     setPreSurvey(false);
  //   } else {
  //     setPreSurvey(true);
  //   }
  // }, [user]);

  const renderNextButton = (
    currentQuestion: any,
    preSurvey: boolean,
    performingQueries: boolean,
    isLastQuestion: boolean
  ) => {
    if (
      currentQuestion.answerFormat !== "account" &&
      currentQuestion.answerFormat !== "welcome"
    ) {
      if (!preSurvey) {
        return (
          <Button
            colorScheme="heritageBlue"
            borderRadius={500}
            isLoading={performingQueries}
            onClick={() =>
              isLastQuestion
                ? handleQuestionChange("finish")
                : handleQuestionChange("next")
            }
            fontSize="lg"
          >
            {isLastQuestion ? "Finish" : "Next"}
          </Button>
        );
      } else {
        return (
          <Button
            background={"spiritBlue.100"}
            color={"heritageBlue.500"}
            borderRadius={500}
            onClick={() => {
              dispatch(initQuestions({ authId: null }));
              setPreSurvey(false);
            }}
            fontSize="lg"
          >
            Continue as guest
          </Button>
        );
      }
    }

    if (currentQuestion.answerFormat === "welcome" && height < 852) {
      return (
        <Button
          colorScheme="heritageBlue"
          borderRadius={500}
          isLoading={performingQueries}
          onClick={() =>
            isLastQuestion
              ? handleQuestionChange("finish")
              : handleQuestionChange("next")
          }
          fontSize="md"
        >
          Begin Survey
        </Button>
      );
    }
  };

  return (
    <>
      <ModalContent
        style={{
          background: "white",
          width: width < 700 ? 410 : width * 0.7,
          minWidth: 410,
          maxWidth: 1000,
          minHeight: height * 0.8,
          height: height < 720 ? height * 0.85 : "650px",
          borderRadius: "35px",
          padding: "15px",
        }}
        containerProps={{
          overflow: "hidden",
        }}
      >
        <ModalHeader>
          <Flex>
            <Text fontSize={"3xl"}>
              {!preSurvey && currentQuestion.answerFormat !== "thankYou"
                ? currentQuestion.title
                : ""}
            </Text>
            <Spacer />
            <CloseButton
              size={"md"}
              bgColor="spiritBlue.100"
              color={"heritageBlue.600"}
              onClick={() => {
                onClose();
                dispatch(initQuestions({ authId: null }));
              }}
            />
          </Flex>
        </ModalHeader>
        <ModalBody
          style={{
            overflowY:
              currentQuestion.answerFormat === "demographics"
                ? width > 1400
                  ? "hidden"
                  : "auto"
                : "auto",
            paddingTop: "0px",
          }}
        >
          {!preSurvey ? (
            <Body
              currentQuestion={currentQuestion}
              userInfo={userInfo}
              setAnswer={setAnswer}
              setErrorPresent={setErrorPresent}
              setErrorText={setErrorText}
              location={location}
              setLocationData={setLocation}
              onVerify={() => handleQuestionChange("next")}
              handleQuestionChange={handleQuestionChange}
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
        <ModalFooter w="100%">
          {currentQuestion.questionNum === 0 && (
            <>
              <HStack spacing="15px">
                <Image src="./crHorizontal.png" w="200px" alt="Hopkins Logo" />
                {width > 700 && (
                  <Text color={"gray.400"} fontSize="xs" align={"left"} w="45%">
                    All survey questionnaires were developed in line with the
                    Collaborative Cohort of Cohorts for COVID-19 Research (C4R).
                  </Text>
                )}
              </HStack>

              <Spacer />
            </>
          )}
          {currentQuestion.questionNum !== 0 &&
            currentQuestion.questionNum <= totalQuestions && (
              <Text
                color={"gray.400"}
              >{`Step ${currentQuestion.questionNum} of ${totalQuestions}`}</Text>
            )}
          <>
            <Spacer />
            <HStack>
              {(missingAnswer || errorPresent) && !preSurvey && (
                <Text fontSize={"lg"} color={"red"}>
                  {errorText}
                </Text>
              )}
              {currentQuestion.answerFormat === "account" && !preSurvey && (
                <Button
                  background={"spiritBlue.100"}
                  color={"heritageBlue.500"}
                  borderRadius={500}
                  onClick={() => {
                    handleQuestionChange("skip");
                  }}
                  fontSize="lg"
                >
                  Skip
                </Button>
              )}
              {!isFirstQuestion &&
                !isFinalSection &&
                !preSurvey &&
                currentQuestion.answerFormat !== "account" && (
                  <Button
                    colorScheme="heritageBlue"
                    borderRadius={500}
                    onClick={() => {
                      handleQuestionChange("prev");
                    }}
                    fontSize="lg"
                  >
                    Prev
                  </Button>
                )}
              {renderNextButton(
                currentQuestion,
                preSurvey,
                performingQueries,
                isLastQuestion
              )}
            </HStack>
          </>
        </ModalFooter>
      </ModalContent>
    </>
  );
};
