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
  useToast,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
} from "@chakra-ui/react";
//redux imports
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import {
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
  selectSurveyType,
  selectTotalQuestions,
} from "../../redux/slices/surveySlice/surveySlice";
import { processEntries } from "../../redux/slices/surveySlice/surveySliceFunctions";
//survey component templates

import { selectUser, setUser } from "../../redux/slices/userSlice";
import {
  aggregateResults,
  checkEmptyDemoFields,
  saveEntries,
  updateUserWithInfoFromSurvey,
  userInfoIsEmpty,
  sendEmailResult,
} from "./SurveyFunctions";
import { aggregateSurveyResults } from "../../src/graphql/mutations";
import { SurveyType } from "../../src/API";
import {
  checkEmptyLocationData,
  getCountyAndStateCoords,
  LocationData,
} from "../../util/locationFunctions";
import { SurveyBody } from "./SurveyBody";

// type for the onClose function to close the modal
interface SurveyWrapperProps {
  onClose: () => void;
}

export type UserInfo = {
  email: string;
  age: string;
  race: string;
  sex: string;
  feet: string;
  inches: string;
  weight: string;
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
  const surveyType = useAppSelector(selectSurveyType);
  const dispatch = useAppDispatch();
  const [performingQueries, setPerformingQueries] = useState(false);
  const [recap, setRecap] = useState(false);
  const [answer, setAnswer] = useState<string | string[] | boolean | object | null>(
    currentQuestion.answer
  );

  const [recovered, setRecovered] = useState<boolean | null>(null);
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
    feet: "",
    inches: "",
    weight: "",
  });
  const [isFinalSection, setIsFinalSection] = useState(false);
  const [missingAnswer, setMissingAnswer] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [errorPresent, setErrorPresent] = useState(false);

  const [ageDemoError, setAgeDemoError] = useState(false);

  const [heightDemoError, setHeightDemoError] = useState(false);

  const [weightDemoError, setWeightDemoError] = useState(false);

  const {
    isOpen: isConfirmOpen,
    onOpen: onConfirmOpen,
    onClose: onConfirmClose,
  } = useDisclosure();

  const handleNextQuestion = async () => {
    if (currentQuestion.answerFormat !== "welcome") {
      if (currentQuestion.answerFormat === "consent") {
        if (recap == false) {
          setErrorText("Please complete the ReCaptcha!");
          setMissingAnswer(true);
          return;
        }
      }
      // Update the info of the user signed in when on the account
      // stage at the end of the survey
      if (currentQuestion.answerFormat === "account" && user) {
        // if (!userInfoIsEmpty) {
        //   await updateUserWithInfoFromSurvey(userInfo, user, recovered);
        // }
        dispatch(nextQuestion({ answer: answer }));
        return;
      }

      if (currentQuestion.answerFormat === "thankYou") {
        // Finish the survey
        onClose();
        dispatch(initQuestions(user));
      }

      // Check for empty fields during the demographics stage
      if (currentQuestion.answerFormat === "demographics") {
        console.log(ageDemoError);
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

        if (ageDemoError || heightDemoError || weightDemoError) {
          setErrorText(`Please correct invalid responses`);
          setMissingAnswer(true);
          return;
        }



      }

      
      if (currentQuestion.answerFormat === "review") {
          if (answer === "" || answer === null || answer === false) {
            setErrorText("Please scroll down, read through your answers, and click the checkbox.");
            setMissingAnswer(true);
            return;
          } else {
            setMissingAnswer(false);
          }
      } else if (currentQuestion.answerFormat === "input") {
        if (answer === "" || answer === null || answer === "0") {
          setErrorText("Please provide a number using the slider");
          setMissingAnswer(true);
          return;
        } else {
          setMissingAnswer(false);
        }
      }
      // Check for empty fields in any stage of the survey
      else if (
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
      } 
      
      
      else {
        setMissingAnswer(false);
      }
    }

    if (!errorPresent) {
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
          feet: string;
          inches: string;
          weight: string;
        };
        userInfoUpdate.age = a.age;
        // userInfoUpdate.location = a.location;
        userInfoUpdate.race = a.race;
        userInfoUpdate.sex = a.sex;
        userInfoUpdate.weight = a.weight;
        userInfoUpdate.feet = a.feet;
        userInfoUpdate.inches = a.inches;
        setUserInfo(userInfoUpdate);
      }

      // Check if the recovered flag can be set
      if (currentQuestion.schemaInfo) {
        if (currentQuestion.schemaInfo.field === "recovered") {
          if (answer === "Yes") {
            setRecovered(true);
          } else if (answer === "No") {
            setRecovered(false);
          }
        }
      }
      console.log(answer);
      dispatch(nextQuestion({ answer: answer }));
    }
    setAnswer("");
  };

  const handlePrevQuestion = () => {
    dispatch(prevQuestion({ answer: answer }));
    setRecap(false);
    setAnswer("");
  };

  const handleSkipQuestion = () => {
    dispatch(nextQuestion({ answer: "skip" }));
    setAnswer("");
  };

  const handleFinishQuestion = async () => {
    // Handling the case where there isn't a survey being administered because
    // the user tried to fill one out before their weekly check in
    if (surveyType !== null) {
      setPerformingQueries(true);

      // NOTE: the user passed in to this function to get the demographics
      // if the survey type is not GUEST (since the weekly survey doesn't include the
      // demographics section).

      // TODO: Check function for height parsing
      const entries = processEntries(
        surveyType,
        questionStack,
        answerStack,
        questions,
        user
      );

      let locationData;
      if (surveyType == SurveyType.WEEKLY) {
        locationData = await getCountyAndStateCoords(
          location.state,
          location.county,
          process.env.GOOGLEMAPS_API_KEY!
        );
      } else {
        locationData = location;
      }

      if (locationData.state === "") {
        setPerformingQueries(false);
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
      // Save survey entries
      try {
        // TODO: Check function for height parsing
        ids = await saveEntries(
          locationData,
          entries,
          userInfo,
          surveyType,
          user
        );
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

      if (user) {
        // TODO: Check function for height parsing
        const updatedUser = await updateUserWithInfoFromSurvey(
          userInfo,
          user,
          ids["SurveyEntry"],
          recovered
        );
        if (updatedUser) {
          dispatch(setUser(updatedUser));
        }
      }

      // Aggregate survey results
      // TODO: Add aggregateion for weekly surveys..
      if (surveyType === SurveyType.GUEST) {
        try {
          await aggregateResults(
            entries,
            ids,
            userInfo,
            location,
            surveyType,
            user
          );
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
      }
      try {
        // TODO: Check email lambda for height parsing
        await sendEmailResult(
          questions,
          questionStack,
          answerStack,
          userInfo.email
        );
      } catch (error) {
        console.log("Error sending email receipt: ", error);
      }
    }

    onClose();
    setPerformingQueries(false);
    setAnswer("");
    dispatch(initQuestions(user));
  };

  const handleQuestionChange = async (
    direction: "next" | "prev" | "skip" | "finish"
  ) => {
    switch (direction) {
      case "next":
        handleNextQuestion();
        break;
      case "prev":
        handlePrevQuestion();
        break;
      case "finish":
        handleFinishQuestion();
        break;
      case "skip":
        handleSkipQuestion();
        break;
    }
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

  // If the survey is a weekly survey, initialize location data
  // for later retrival from Google Geocoding API
  useEffect(() => {
    if (surveyType != SurveyType.GUEST) {
      if (user && user.lastSubmissionEntry) {
        let entry = user.lastSubmissionEntry;
        let state = entry.state;
        let countyState = entry.countyState;
        if (state && state !== null && countyState && countyState !== null) {
          setLocation({
            state: state,
            stateAbbrev: "",
            stateLat: 0.0,
            stateLong: 0.0,
            county: countyState.split("#")[0],
            countyLong: 0.0,
            countyLat: 0.0,
          });
        }
      }
    }
  }, [surveyType, user]);

  const renderNextButton = (
    currentQuestion: any,
    performingQueries: boolean,
    isLastQuestion: boolean
  ) => {
    if (
      currentQuestion.answerFormat !== "account" &&
      currentQuestion.answerFormat !== "welcome"
    ) {
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
          width: width < 700 ? 410 : width * 0.85,
          minWidth: 410,
          maxWidth: 1050,
          minHeight: height * 0.75,
          height: height < 720 ? height * 0.75 : "650px",
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
              {currentQuestion.answerFormat !== "thankYou"
                ? currentQuestion.title
                : ""}
            </Text>
            <Spacer />
            <CloseButton
              size={"md"}
              bgColor="spiritBlue.100"
              color={"heritageBlue.600"}
              onClick={onConfirmOpen}
            />

            <Modal isOpen={isConfirmOpen} onClose={onConfirmClose}>
              <ModalOverlay />
              <ModalContent
                style={{
                  borderRadius: "20px",
                }}
              >
                <ModalHeader>
                  <Flex w="100%">
                    <Text fontSize={"3xl"}>Confirm</Text>
                    <Spacer />
                    <CloseButton
                      size={"md"}
                      bgColor="spiritBlue.100"
                      color={"heritageBlue.600"}
                      onClick={onConfirmClose}
                    />
                  </Flex>
                </ModalHeader>
                <ModalBody>
                  Are you sure you want to close the survey? You will lose all
                  progress.
                </ModalBody>

                <ModalFooter>
                  {/*onClose is the original function, so we close BOTH modals */}
                  <Button
                    colorScheme="heritageBlue"
                    borderRadius={500}
                    isLoading={performingQueries}
                    fontSize="lg"
                    onClick={() => {
                      onConfirmClose();
                      onClose();
                      dispatch(initQuestions(user));
                    }}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </ModalHeader>
        <ModalBody
          style={{
            overflowY: "auto",
            // currentQuestion.answerFormat === "demographics"
            //   ? width > 1400
            //     ? "hidden"
            //     : "auto"
            //   : "auto",
            paddingTop: "0px",
          }}
        >
          <SurveyBody
            currentQuestion={currentQuestion}
            userInfo={userInfo}
            setRecap={setRecap}
            setAnswer={setAnswer}
            setErrorPresent={setErrorPresent}
            setErrorText={setErrorText}
            setAgeDemoError={setAgeDemoError}
            setHeightDemoError={setHeightDemoError}
            setWeightDemoError={setWeightDemoError}
            location={location}
            setLocationData={setLocation}
            onVerify={() => handleQuestionChange("next")}
            handleQuestionChange={handleQuestionChange}
            user={user}
          />
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
              {(missingAnswer || errorPresent) && (
                <Text fontSize={"lg"} color={"red"}>
                  {errorText}
                </Text>
              )}
              {currentQuestion.answerFormat === "account" && (
                <>
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
                </>

              )}
              {!isFirstQuestion &&
                !isFinalSection &&
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
