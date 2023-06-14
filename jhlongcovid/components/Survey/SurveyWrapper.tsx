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

import { API, input } from "aws-amplify";
import * as mutations from "../../src/graphql/mutations";

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
import { Demographics } from "./SurveyBody/Demographics";
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
  createCovidEntry,
  getCountyAndStateWithZip,
  LocationData,
  saveEntries,
  updateUserWithInfoFromSurvey,
  userInfoIsEmpty,
  emailReceiptConfirmation,
} from "./SurveyFunctions";
import { aggregateSurveyResults } from "../../src/graphql/mutations";

// type for the onClose function to close the modal
interface SurveyWrapperProps {
  onClose: () => void;
}

export type UserInfo = {
  email: string;
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
  handleQuestionChange?: (
    direction: "next" | "prev" | "skip" | "finish"
  ) => void;
}

const Body: React.FC<SurveyQuestionProps> = ({
  currentQuestion,
  userInfo,
  setAnswer,
  setErrorPresent,
  setErrorText,
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
      <Demographics currentQuestion={currentQuestion} setAnswer={setAnswer} />
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

  // state to keep track of user info filled out throughout the survey
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
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
            const emptyFields = checkEmptyDemoFields(answer);
            if (emptyFields.length > 0) {
              setErrorText(`Please provide ${emptyFields.join(", ")}`);
              setMissingAnswer(true);
              return;
            }
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
            zip: string;
            age: string;
            race: string;
            sex: string;
            height: string;
            weight: string;
          };
          userInfoUpdate.age = a.age;
          userInfoUpdate.zip = a.zip;
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

      console.log("finish");

      console.log(questionStack);
      console.log(answerStack);
      console.log(questions);
      console.log("test");
      //with a succesful save, email the questions and answers to the users' email. This should be called ONLY during success
      // await emailReceiptConfirmation();


      try {
        const data = {
            questions: [
              [
                {
                  title: "",
                  questionNum: 0,
                  question: "Welcome to the Johns Hopkins Long COVID Dashboard!",
                  options: [
                    "The COVID-19 pandemic has caused unprecedented health and social challenges worldwide. To better understand the long-term consequences of this disease, a team of researchers from Johns Hopkins University and other institutions has developed this dashboard to amplify the voices of Long-COVID sufferers and raise awareness of their challenges and needs.",
                    "Your feedback on COVID-19 is important to us. We want to know how the pandemic has impacted your well-being, lifestyle, work, or social connections. Please fill out our survey questionnaire to share your experiences with us."
                  ],
                  answerFormat: "welcome",
                  answer: null,
                  branching: null
                },
                {
                  title: "Consent",
                  questionNum: 1,
                  question: "The following information will be collected to better understand your experience with COVID-19.",
                  options: [
                    "COVID-19 Experience",
                    "COVID-19 Recovery (if applicable)",
                    "Vaccination History",
                    "General Health",
                    "Medical Conditions",
                    "Symptoms",
                    "Social Determinants"
                  ],
                  answerFormat: "consent",
                  answer: null,
                  branching: null
                },
                {
                  title: "Demographics",
                  questionNum: 2,
                  question: "Please enter the following demographic information:",
                  options: [],
                  answerFormat: "demographics",
                  answer: null,
                  branching: null
                }
              ],
              [
                {
                  title: "COVID",
                  questionNum: 3,
                  question: "Have you ever been infected with COVID-19?",
                  options: ["Yes", "No"],
                  answerFormat: ["choice", "choice"],
                  answer: null,
                  branching: {
                    predicate: "No",
                    goto: {
                      section: 3,
                      question: 0
                    }
                  },
                  schemaInfo: {
                    tableName: "CovidEntry",
                    field: "beenInfected",
                    type: "Boolean"
                  }
                },
                {
                  title: "COVID",
                  questionNum: 4,
                  question: "In total, since the beginning of the COVID-19 pandemic in the US (March 2020), how many times do you think you have been infected with COVID‐19? (please estimate even if you are not sure)",
                  options: [
                    "1 infection (only once)",
                    "2 infections (reinfected once)",
                    "3 infections (reinfected twice)",
                    {
                      title: "More than 3 infections: (please enter number)",
                      type: "text",
                      placeholder: "Enter number of infections",
                      validation: {
                        regex: "^[0-9]+$",
                        errorText: "Please enter a valid number"
                      }
                    },
                    "Do not know"
                  ],
                  answerFormat: ["choice", "choice", "choice", "input", "choice"],
                  answer: null,
                  branching: null,
                  schemaInfo: {
                    tableName: "CovidEntry",
                    field: "timesPositive",
                    type: "Int"
                  }
                },
                {
                  title: "COVID",
                  questionNum: 5,
                  question: "Have you every been hospitalized for COVID-19?",
                  options: ["Yes", "No"],
                  answerFormat: ["choice", "choice"],
                  answer: null,
                  branching: {
                    predicate: "No",
                    goto: {
                      section: 1,
                      question: 4
                    }
                  },
                  schemaInfo: {
                    tableName: "CovidEntry",
                    field: "hospitalized",
                    type: "Boolean"
                  }
                },
                {
                    title: "COVID",
                    questionNum: 6,
                    question: "How many times have you been hospitalized for COVID-19?",
                    options: [
                    "1 COVID hospitalization",
                    "2 COVID hospitalizations",
                    "3 COVID hospitalizations",
                    {
                    title: "More than 3 hospitalizations: (please enter number)",
                    type: "text",
                    placeholder: "Enter number of infections",
                    validation: {
                    regex: "^[0-9]+$",
                    errorText: "Please enter a valid number"
                    }
                    },
                    "Do not know"
                    ],
                    answerFormat: ["choice", "choice", "choice", "input", "choice"],
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "CovidEntry",
                    field: "timesHospitalized",
                    type: "Int"
                    }
                    },
                    {
                    instructions: "The following questions refer to your most recent COVID-19 infection",
                    title: "COVID",
                    questionNum: 7,
                    question: "When do you know or think you had COVID-19?",
                    options: {
                    title: "Date:",
                    type: "date",
                    placeholder: "Enter date"
                    },
                    answerFormat: "input",
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "CovidEntry",
                    field: "lastPositive",
                    type: "AWSDateTime"
                    }
                    },
                    {
                    title: "COVID",
                    questionNum: 8,
                    question: "Did you take a COVID test at that time?",
                    options: ["Yes", "No"],
                    answerFormat: ["choice", "choice"],
                    answer: null,
                    branching: {
                    predicate: "No",
                    goto: {
                    section: 1,
                    question: 7
                    }
                    },
                    schemaInfo: {
                    tableName: "CovidEntry",
                    field: "tested",
                    type: "Boolean"
                    }
                    },
                    {
                    title: "COVID",
                    questionNum: 9,
                    question: "Did you have a positive test result? “Positive” means the test showed COVID-19.",
                    options: ["Yes", "No", "Do not know"],
                    answerFormat: ["choice", "choice", "choice"],
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "CovidEntry",
                    field: "positiveTest",
                    type: "String"
                    }
                    },
                    {
                    title: "COVID",
                    questionNum: 10,
                    question: "Did you have any COVID19 symptoms, such as fever, cough, sore throat, or other symptoms?",
                    options: ["Yes", "No"],
                    answerFormat: ["choice", "choice"],
                    answer: null,
                    branching: {
                    predicate: "No",
                    goto: {
                    section: 1,
                    question: 9
                    }
                    },
                    schemaInfo: {
                    tableName: "CovidEntry",
                    field: "symptomatic",
                    type: "Boolean"
                    }
                    },
                    {
                    title: "COVID",
                    questionNum: 11,
                    question: "When your symptoms were at their worst, did they prevent you from going about your daily activities?",
                    options: [
                    "Not at all",
                    "A little bit",
                    "Somewhat",
                    "Quite a bit",
                    "Very much"
                    ],
                    answerFormat: ["choice", "choice", "choice", "choice", "choice"],
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "CovidEntry",
                    field: "symptomsPreventScale",
                    type: "String"
                    }
                    },
                    {
                    title: "COVID",
                    questionNum: 12,
                    question: "Did a doctor or other health care professional prescribe any medications for you to take when you had COVID-19?",
                    options: ["Yes", "No", "Do not know"],
                    answerFormat: ["choice", "choice", "choice"],
                    answer: null,
                    branching: {
                    predicate: ["No", "Do not know"],
                    goto: {
                    section: 2,
                    question: 0
                    }
                    },
                    schemaInfo: {
                    tableName: "CovidEntry",
                    field: "medicationsPrescribed",
                    type: "String"
                    }
                    },
                    {
                    title: "COVID",
                    questionNum: 13,
                    question: "Did the doctor or other health care professional prescribe any of the following medications for COVID-19? Check all that apply.",
                    options: [
                    "Antiviral pill, such as Paxlovid",
                    "Oral steroids, such as dexamethasone, prednisone, or prednisolone",
                    "Antibiotics, such as a "Z-pak"",
                    {
                    title: "Other",
                    type: "text",
                    placeholder: "Enter medication",
                    validation: {
                    regex: "^[0-9]+$",
                    errorText: "Please enter a valid number"
                    }
                    },
                    "Do not know"
                    ],
                    answerFormat: [
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "input",
                    "multichoice"
                    ],
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "CovidEntry",
                    field: "medicationsTaken",
                    type: "[String]"
                    }
                    }
              ],
              [
                {
                    title: "Recovery",
                    questionNum: 14,
                    question: "Would you say that you are completely recovered from COVID-19 now?",
                    options: ["Yes", "No"],
                    answerFormat: ["choice", "choice"],
                    answer: null,
                    branching: {
                    predicate: "No",
                    goto: {
                    section: 3,
                    question: 0
                    }
                    },
                    schemaInfo: {
                    tableName: "RecoveryEntry",
                    field: "recovered",
                    type: "Boolean"
                    }
                    },
                    {
                    title: "Recovery",
                    questionNum: 15,
                    question: "How long did it take for you to recover from your most recent infection?",
                    options: {
                    type: "text",
                    title: "Days: ",
                    placeholder: "Enter number of days",
                    validation: {
                    regex: "^[0-9]+$",
                    errorText: "Please enter a valid number"
                    }
                    },
                    answerFormat: "input",
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "RecoveryEntry",
                    field: "lengthOfRecovery",
                    type: "Int"
                    }
                    }
              ],
              [
                
{
    title: "Vaccination",
    questionNum: 16,
    question: "Have you ever been vaccinated against COVID-19?",
    options: ["No", "Yes", "Do not know"],
    answerFormat: ["choice", "choice", "choice"],
    answer: null,
    branching: {
    predicate: "No",
    goto: {
    section: 5,
    question: 0
    }
    },
    schemaInfo: {
    tableName: "VaccinationEntry",
    field: "vaccinated",
    type: "String"
    }
    },
    {
    title: "Vaccination",
    questionNum: 17,
    question: "In total, how many COVID-19 vaccine shots have you received?",
    options: [
    {
    type: "dropdown",
    title: "Number of shots: ",
    placeholder: "Enter number of shots",
    validation: {
    regex: "^[0-9]+$",
    errorText: "Please enter a valid number"
    }
    },
    "Do not know"
    ],
    answerFormat: ["input", "choice"],
    answer: null,
    branching: null,
    schemaInfo: {
    tableName: "VaccinationEntry",
    field: "totalVaccineShots",
    type: "Int"
    }
    },
    {
    title: "Vaccination",
    questionNum: 18,
    question: "When was your most recent COVID shot?",
    options: [
    {
    type: "date",
    title: "Date of shot: ",
    placeholder: "Enter date of shot"
    },
    "Unsure",
    "Decline to answer"
    ],
    answerFormat: ["input", "choice", "choice"],
    answer: null,
    branching: null,
    schemaInfo: {
    tableName: "VaccinationEntry",
    field: "dateOfLastVaccine",
    type: "AWSDateTime"
    }
    },
    {
    title: "Vaccination",
    questionNum: 19,
    question: "Which type of COVID vaccine was your last shot?",
    options: [
    "Pfizer",
    "Moderna",
    "Janssen",
    "Novavax",
    {
    type: "text",
    title: "Other",
    placeholder: "Enter vaccine type"
    },
    "Do not know"
    ],
    answerFormat: [
    "choice",
    "choice",
    "choice",
    "choice",
    "input",
    "choice"
    ],
    answer: null,
    branching: null,
    schemaInfo: {
    tableName: "VaccinationEntry",
    field: "vaccineType",
    type: "String"
    }
    }
              ],
              [
                {
                    title: "Your Global Health",
                    questionNum: 20,
                    question: "In general, would you say your health is:",
                    options: ["Excellent", "Very good", "Good", "Fair", "Poor"],
                    answerFormat: ["choice", "choice", "choice", "choice", "choice"],
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "GlobalHealthEntry",
                    field: "healthRank",
                    type: "String"
                    }
                    },
                    {
                    title: "Your Global Health",
                    questionNum: 21,
                    question: "In general, how would you rate your physical health?",
                    options: ["Excellent", "Very good", "Good", "Fair", "Poor"],
                    answerFormat: ["choice", "choice", "choice", "choice", "choice"],
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "GlobalHealthEntry",
                    field: "physicalHealthRank",
                    type: "String"
                    }
                    },
                    {
                    title: "Your Global Health",
                    questionNum: 22,
                    question: "To what extent are you able to carry out your everyday physical activities such as walking, climbing stairs, carrying groceries, or moving a chair?",
                    options: [
                    "Completely",
                    "Mostly",
                    "Moderately",
                    "A little",
                    "Not at all"
                    ],
                    answerFormat: ["choice", "choice", "choice", "choice", "choice"],
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "GlobalHealthEntry",
                    field: "carryPhysicalActivities",
                    type: "String"
                    }
                    },
                    {
                    title: "Your Global Health",
                    questionNum: 23,
                    question: "In the <timeframe>, how would you rate you fatigue (extreme tiredness resulting from mental or physical exertion or illness) on average?",
                    timeframe: "past 7 days",
                    options: ["None", "Mild", "Moderate", "Severe", "Very Severe"],
                    answerFormat: ["choice", "choice", "choice", "choice", "choice"],
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "GlobalHealthEntry",
                    field: "fatigueRank",
                    type: "String"
                    }
                    },
                    {
                    title: "Your Global Health",
                    questionNum: 24,
                    question: "In the <timeframe>, how would you rate your pain on average? Please provide a number from 1 (no pain) to 10 (worst imagineable pain): ",
                    timeframe: "past 7 days",
                    options: {
                    title: "Enter pain level (1-10)",
                    type: "slider",
                    placeholder: "Enter pain level",
                    sliderProps: {
                    min: 1,
                    max: 10,
                    default: 5,
                    step: 1
                    },
                    sliderMarks: [
                    {
                    value: 1,
                    secondaryLabel: "No pain"
                    },
                    {
                    value: 2,
                    secondaryLabel: ""
                    },
                    {
                    value: 3,
                    secondaryLabel: ""
                    },
                    {
                    value: 4,
                    secondaryLabel: ""
                    },
                    {
                    value: 5,
                    secondaryLabel: "Moderate pain"
                    },
                    {
                    value: 6,
                    secondaryLabel: ""
                    },
                    {
                    value: 7,
                    secondaryLabel: ""
                    },
                    {
                    value: 8,
                    secondaryLabel: ""
                    },
                    {
                    value: 9,
                    secondaryLabel: ""
                    },
                    {
                    value: 10,
                    secondaryLabel: "Unimaginable pain"
                    }
                    ]
                    },
                    answerFormat: "input",
                    answer: null,
                    branching: null,
                    schemaInfo: {
                    tableName: "GlobalHealthEntry",
                    field: "painLevel",
                    type: "Int"
                    }
                    }
              ],
              [
                {
                  "title": "Symptoms",
                  "questionNum": 25,
                  "question": "During the <timeframe>, have you had any of the following symptoms? Check all that apply.",
                  "timeframe": "past month",
                  "answerFormat": [
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice"
                  ],
                  "options": [
                    "Headache",
                    "Body or muscle aches",
                    "Fever, chills, sweats or flushing",
                    "Feeling faint, dizzy, “goofy”; difficulty thinking soon after standing up from a sitting or lying position",
                    "Feeling sick after you exert yourself physically or mentally (“post-exertional malaise”)",
                    "Weakness in arms or legs",
                    "Shortness of breath (trouble breathing)",
                    "Cough",
                    "Palpitations, racing heart, arrhythmia, or skipped beats",
                    "Swelling of your legs",
                    "Indigestion, nausea, feeling uncomfortably full or vomiting after eating, diarrhea, or constipation",
                    "Bladder problems including incontinence, trouble passing urine or emptying bladder",
                    "Nerve problems including tremor, shaking, numbness, tingling, or burning",
                    "Problems thinking or concentrating (“brain fog”)",
                    "Problems with anxiety, depression, stress or trauma-related symptoms like nightmares or grief",
                    "Difficulty falling asleep, difficulty staying asleep, or early morning awakenings, 3 or more times per week",
                    "Feeling sleepy, trouble staying awake during the daytime, or falling asleep during the day when you do not intend to, 3 or more times per week",
                    "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week",
                    "Uncomfortable feelings in your legs (creepy, crawling feeling) that make you want to move your legs, that are worse at night and improved with movement",
                    "Skin rash",
                    "Loss of or change in smell or taste",
                    "Excessive thirst",
                    "Excessively dry mouth",
                    "Vision problems (blurry, light sensitivity, difficult reading or focusing, floaters, flashing lights, “snow”)",
                    "Problems with hearing (hearing loss, ringing in ears)",
                    "Problems with fertility, changes in your menstrual cycle, changes in menopause symptoms"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "symptoms",
                    "type": "[String]"
                  }
                },
                {
                  "title": "Symptoms",
                  "questionNum": 26,
                  "question": "In general, over the <timeframe>, how would you rate your mental health, including your mood and your ability to think?",
                  "timeframe": "last 2 weeks",
                  "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "mentalHealthRank",
                    "type": "String"
                  }
                },
                {
                  "title": "Symptoms",
                  "questionNum": 27,
                  "question": "In general, over the <timeframe>, how would you rate your satisfaction with your social activities and relationships?",
                  "timeframe": "last 2 weeks",
                  "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "socialSatisfactionRank",
                    "type": "String"
                  }
                },
                {
                  "title": "Symptoms",
                  "questionNum": 28,
                  "question": "In general, over the <timeframe>, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.)",
                  "timeframe": "last 2 weeks",
                  "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "carryOutSocialActivitiesRank",
                    "type": "String"
                  }
                },
                {
                  "title": "Symptoms",
                  "questionNum": 29,
                  "question": "In the <timeframe>, how often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?",
                  "timeframe": "past 7 days",
                  "options": ["Never", "Rarely", "Sometimes", "Often", "Always"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "anxietyInPastWeekRank",
                    "type": "String"
                  }
                }
              ],
              [
                {
                  "title": "Patient Health",
                  "questionNum": 30,
                  "question": "Over the <timeframe>, how often have you been bothered by the following problems?",
                  "timeframe": "last 2 weeks",
                  "scale": [
                    "Not at all",
                    "Several days",
                    "More than half the days",
                    "Nearly every day"
                  ],
                  "answerFormat": "scale",
                  "options": [
                    "Little interest or pleasure in doing things?",
                    "Feeling down, depressed, or hopeless?",
                    "Trouble falling or staying asleep, or sleeping too much?",
                    "Feeling tired or having little energy?",
                    "Poor appetite or overeating?",
                    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
                    "Trouble concentrating on things, such as reading the newspaper or watching television?",
                    "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "PatientHealthEntry",
                    "field": "generalHealthResults",
                    "type": "AWSJSON"
                  }
                }
              ],
              [
                {
                  "title": "Medical Conditions",
                  "questionNum": 31,
                  "question": "Since the <timeframe>, has a health care provider given you a new diagnosis of any of the following conditions? Check all that apply.",
                  "timeframe": "beginning of 2020",
                  "options": [
                    "Heart problems, such as heart failure or arrhythmia (e.g., “atrial fibrillation”)",
                    "Lung problems, such as asthma, COPD, fibrosis or interstitial lung disease",
                    "Blood clots in the lung (“pulmonary embolism”), leg or arm (“deep vein thrombosis”)",
                    "Sleep apnea or insomnia",
                    "Memory or cognitive impairment or dementia ",
                    "Migraine or other headache disorder",
                    "Stroke",
                    "Seizure or epilepsy",
                    "Kidney problems or kidney disease",
                    "Stomach problems or gastrointestinal disease, like stomach ulcer or irritable bowel syndrome",
                    "Psychological problems or psychiatric problems, like depression or anxiety or psychosis",
                    "Diabetes",
                    "Autoimmune diseases (such as systemic lupus, thyroid disease)",
                    "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME-CFS), Postural Orthostatic Tachycardia Syndrome (POTS) or dysautonomia, or Ehlers Danlos Syndrome (EDS)",
                    {
                      "type": "text",
                      "title": "Other",
                      "placeholder": "Enter condition"
                    },
                    "Not sure",
                    "No new diagnoses since the beginning of 2020"
                  ],
                  "answerFormat": [
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "input",
                    "multichoice",
                    "multichoice"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "medicalConditions",
                    "type": "[String]"
                  }
                },
                {
                  "title": "Medical Conditions",
                  "questionNum": 32,
                  "question": "Do you think that you are experiencing, or have ever experienced, what has been called “long COVID,” or symptoms related to COVID at least a month after your infection?",
                  "options": ["Yes", "No", "Do not know"],
                  "answerFormat": ["choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "hasLongCovid",
                    "type": "String"
                  }
                }
              ],
              [
                {
                  "title": "Your Social Determinants",
                  "questionNum": 33,
                  "question": "Do you currently have some form of health insurance to help pay for medical bills?",
                  "options": ["Yes", "No"],
                  "answerFormat": ["choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SocialDeterminantsEntry",
                    "field": "hasMedicalInsurance",
                    "type": "Boolean"
                  }
                },
                {
                  "title": "Your Social Determinants",
                  "questionNum": 34,
                  "question": "In the <timeframe>, how difficult has it been to pay for the things you need (or you and your family needs)?",
                  "timeframe": "past month",
                  "options": [
                    "Very difficult",
                    "Somewhat difficult",
                    "Not at all difficult",
                    "Do not know",
                    "Prefer not to answer"
                  ],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SocialDeterminantsEntry",
                    "field": "difficultCoveringExpenses",
                    "type": "String"
                  }
                },
                {
                  "title": "Your Social Determinants",
                  "questionNum": 35,
                  "question": "What is your current work situation?",
                  "options": [
                    "Working outside of the home",
                    "Working outside the home as well as working remotely from home (“hybrid” work)",
                    "Working remotely from home",
                    "Working at home to provide childcare, eldercare and/or to maintain the home",
                    "On leave from a job working outside the home (e.g, sick leave, family leave, maternity leave)",
                    "Looking for work, unemployed",
                    "Retired",
                    "Disabled, permanently or temporarily",
                    "Student",
                    "Don't know",
                    "Prefer not to answer"
                  ],
                  "answerFormat": [
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SocialDeterminantsEntry",
                    "field": "currentWorkSituation",
                    "type": "String"
                  }
                }
              ],
              [
                {
                  "title": "Create Account",
                  "questionNum": 36,
                  "question": "In order to better understand Long COVID, we would like to check in to see how your COVID experience changes over time. To participate, enter your desired password to continue creating your account.\n\nIf you would like to skip creating an account and continue submitting your survey response, just click the skip button!",
                  "options": null,
                  "answer": null,
                  "answerFormat": "account",
                  "branching": {
                    "predicate": "skip",
                    "goto": {
                      "section": 9,
                      "question": 1
                    }
                  }
                },
                {
                  "title": "Thank You",
                  "questionNum": 37,
                  "question": "Thank you for participating in our Long COVID survey. You will be emailed with a receipt of your survey entry shortly!",
                  "options": null,
                  "answer": null,
                  "answerFormat": "thankYou",
                  "branching": null
                }
              ]
            ],
            questionStack: [{ "section": 0, "question": 0 }, {"section": 0, "question": 1}, {"section": 0, "question": 2}],
            answerStack: ["true", "2", { "zip": "10019", "age": "19", "race": "asian", "sex": "Male", "height": "100lbs", "weight": "50kg" }]
        };
        const variables = {
            results: JSON.stringify(data),
        };
        
        const emailReceipt = await API.graphql({
            query: mutations.emailReceiptConfirmation,
            variables: variables,
        })

        console.log(emailReceipt);
    } catch (error) {
        console.log(error);
    }

    console.log("done");

    /*
    Note to self: was just reformatting questions, remove double quotes in the keys.
    Is it already imported though?
    */

        /*
      setPerformingQueries(true);
      const entries = processEntries(questionStack, answerStack, questions);
      const locationData: LocationData = await getCountyAndStateWithZip(
        userInfo.zip,
        process.env.GOOGLEMAPS_API_KEY ?? ""
      );

      if (locationData.state === "") {
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
        ids = await saveEntries(locationData, entries, userInfo, user);
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
        await aggregateResults(entries, ids, userInfo, locationData, user);
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
      */
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
            overflowY: "auto",
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
