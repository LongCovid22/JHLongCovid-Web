import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import surveyLogic from "../../../surveyLogic.json";
import { Auth } from "aws-amplify";
import { setUncaughtExceptionCaptureCallback } from "process";
import { processEntries } from "./surveySliceFunctions";

// this slice can be used for presentation throughout the app. When there is state that
// controls somethings display, it should go in here
export type SurveyState = {
  currentQuestionIndex: number;
  currentQuestion: any;
  currentAnswer: string | string[] | object | null;
  questions: any;
  questionStack: any[];
  answerStack: any[];
  lastQuestion: boolean;
  firstQuestion: boolean;
  totalQuestions: number;
};

const initialState: SurveyState = {
  currentQuestionIndex: 0,
  currentQuestion: {},
  currentAnswer: null,
  questions: surveyLogic.questions,
  questionStack: [], // [{ section: 0, question: 0 }, {section: 0, question: 1}]
  answerStack: [], // ["true", "2"]
  lastQuestion: false,
  firstQuestion: true,
  totalQuestions: surveyLogic.totalQuestions,
};

const checkIfLastQuestion = (
  questionInfo: { section: number; question: number },
  questions: any
) => {
  const nextSection = questions[questionInfo.section + 1];
  const nextQuestion =
    questions[questionInfo.section][questionInfo.question + 1];
  return nextSection === undefined && nextQuestion === undefined;
};

const getNextQuestionInfo = (
  questionInfo: { section: number; question: number },
  questions: any
) => {
  const nextQuestion =
    questions[questionInfo.section][questionInfo.question + 1];
  if (nextQuestion === undefined) {
    return { section: questionInfo.section + 1, question: 0 };
  } else {
    return {
      section: questionInfo.section,
      question: questionInfo.question + 1,
    };
  }
};

const getNextQuestionAnswerDefault = (
  questionInfo: { section: number; question: number },
  questions: any
): string | string[] | object => {
  const question = questions[questionInfo.section][questionInfo.question];
  if (Array.isArray(question.answerFormat)) {
    if (question.answerFormat.includes("choice")) {
      return "";
    } else if (question.answerFormat.includes("multichoice")) {
      return { choices: [], other: "" };
    } else {
      return "";
    }
  } else if (question.answerFormat === "scale") {
    return Array.from({ length: question.options.length }, () => "");
  } else if (question.answerFormat === "demographics") {
    return { zip: "", age: "", race: "", sex: "", height: "", weight: "" };
  } else if (question.answerFormat === "account") {
    return { email: "", password: "" };
  } else {
    if (
      question &&
      question.options !== null &&
      question.options.type === "slider"
    ) {
      return "0";
    } else {
      return "";
    }
  }
};

const shouldBranch = (answer: any, predicate: string | string[]) => {
  if (Array.isArray(predicate)) {
    if (predicate.includes(answer)) {
      return true;
    }
  }

  if (typeof answer === "string") {
    return predicate === answer;
  }

  return false;
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    nextQuestion: (state, { payload }) => {
      // Update questionnaire answer
      const currQuestion = state.currentQuestion;
      // const { section, question } =
      //   state.questionStack[state.currentQuestionIndex];
      // state.questions[section][question] = {
      //   ...state.questions[section][question],
      //   ...payload,
      // };
      state.answerStack[state.currentQuestionIndex] = payload.answer;

      // Check branching logic as to which question to push on the stack next
      const branching = currQuestion.branching;

      // If it's not the last question move to the next question
      if (!state.lastQuestion) {
        // If there is no branching logic or the answer does not meet the predicate, go to
        // next question in the section or to the next section
        if (
          branching == null ||
          !shouldBranch(payload.answer, branching.predicate)
        ) {
          // Get next question info and push it on to question stack
          const nextQuestionInfo = getNextQuestionInfo(
            state.questionStack[state.currentQuestionIndex],
            state.questions
          );
          // { section: 0, question: 2}
          state.questionStack.push(nextQuestionInfo);

          // Push default values for answers
          if (state.currentQuestionIndex + 1 == state.answerStack.length) {
            state.answerStack.push(
              getNextQuestionAnswerDefault(nextQuestionInfo, state.questions)
            );
          }

          // Set the next current question and current answer
          state.currentQuestion =
            state.questions[nextQuestionInfo.section][
              nextQuestionInfo.question
            ];
          state.currentAnswer =
            state.answerStack[state.currentQuestionIndex + 1];
          state.currentQuestionIndex += 1;
          if (checkIfLastQuestion(nextQuestionInfo, state.questions)) {
            state.lastQuestion = true;
          }
        } else {
          // If branching logic hits, branch to the question it says
          state.questionStack.push(branching.goto); // { section: 1, question; 3}
          if (state.currentQuestionIndex + 1 == state.answerStack.length) {
            state.answerStack.push(
              getNextQuestionAnswerDefault(branching.goto, state.questions)
            );
          }
          state.currentAnswer =
            state.answerStack[state.currentQuestionIndex + 1];
          state.currentQuestion =
            state.questions[branching.goto.section][branching.goto.question];
          state.currentQuestionIndex += 1;
          if (checkIfLastQuestion(branching.goto, state.questions)) {
            state.lastQuestion = true;
          }
        }

        if (state.firstQuestion) {
          state.firstQuestion = false;
        }
      }
    },
    prevQuestion: (state, { payload }) => {
      // If we are past the first question
      if (state.currentQuestionIndex > 0) {
        // Set the answer to the current question
        state.answerStack[state.currentQuestionIndex] = payload.answer;

        // Start moving to the previous question information
        state.currentQuestionIndex -= 1;

        if (state.lastQuestion) {
          state.lastQuestion = false;
        }

        state.questionStack.pop();
        state.currentQuestion =
          state.questions[
            state.questionStack[state.currentQuestionIndex].section
          ][state.questionStack[state.currentQuestionIndex].question];

        state.currentAnswer = state.answerStack[state.currentQuestionIndex];
      }

      if (state.currentQuestionIndex === 0) {
        state.firstQuestion = true;
      }
    },

    // Reset survey and send query to API
    finishSurvey: (state) => {
      const stateCopy = { ...state };
      const entries = processEntries(
        stateCopy.questionStack,
        stateCopy.answerStack,
        stateCopy.questions
      );
    },

    /**
     * Initializes questions on startup. The payload coming in will
     * be the userId of the auth user that is signed in through cognito.
     * That userId will be used to determine the set of questions the
     * user will experience during the survey.
     */
    initQuestions: (state, { payload }) => {
      // User not signed in, give full survey
      if (payload.authId == null) {
        while (state.questionStack.length > 0) {
          state.questionStack.pop();
        }
        while (state.answerStack.length > 0) {
          state.answerStack.pop();
        }
        state.questionStack.push({ section: 0, question: 0 });
        state.answerStack.push("");

        state.questions = surveyLogic.questions;
        state.currentQuestion = surveyLogic.questions[0][0];
        state.currentAnswer = state.answerStack[0];
        state.currentQuestionIndex = 0;
        state.firstQuestion = true;
        state.lastQuestion = false;
      }
    },
  },
});

export const { nextQuestion, prevQuestion, initQuestions, finishSurvey } =
  surveySlice.actions;

export const selectCurrentQuestion = (state: RootState) => {
  const survey: SurveyState = state.survey as SurveyState;
  return survey.currentQuestion;
};
export const selectIsFirstQuestion = (state: RootState) => {
  const survey: SurveyState = state.survey as SurveyState;
  return survey.firstQuestion;
};
export const selectIslastQuestion = (state: RootState) => {
  const survey: SurveyState = state.survey as SurveyState;
  return survey.lastQuestion;
};
export const selectCurrentAnswer = (state: RootState) => {
  const survey: SurveyState = state.survey as SurveyState;
  return survey.currentAnswer;
};
export const selectQuestionStack = (state: RootState) => {
  const survey: SurveyState = state.survey as SurveyState;
  return survey.questionStack;
};
export const selectAnswerStack = (state: RootState) => {
  const survey: SurveyState = state.survey as SurveyState;
  return survey.answerStack;
};
export const selectQuestions = (state: RootState) => {
  const survey: SurveyState = state.survey as SurveyState;
  return survey.questions;
};
export const selectTotalQuestions = (state: RootState) => {
  const survey: SurveyState = state.survey as SurveyState;
  return survey.totalQuestions;
};

export default surveySlice.reducer;
