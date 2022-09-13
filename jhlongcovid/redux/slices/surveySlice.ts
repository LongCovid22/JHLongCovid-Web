import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import surveyLogic from "../../surveyLogic.json";
import { Auth } from "aws-amplify";
import { setUncaughtExceptionCaptureCallback } from "process";

// this slice can be used for presentation throughout the app. When there is state that
// controls somethings display, it should go in here
export type SurveyState = {
  currentQuestionIndex: number;
  currentQuestion: any;
  questions: any;
  questionStack: any[];
  lastQuestion: boolean;
  firstQuestion: boolean;
};

const initialState: SurveyState = {
  currentQuestionIndex: 0,
  currentQuestion: {},
  questions: surveyLogic.questions,
  questionStack: [],
  lastQuestion: false,
  firstQuestion: true,
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

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    nextQuestion: (state, { payload }) => {
      // Update questionnaire answer
      const currQuestion = state.currentQuestion;
      const { section, question } =
        state.questionStack[state.currentQuestionIndex];
      state.questions[section][question].answer = payload.answer;

      // Check branching logic as to which question to push on the stack next
      const branching = currQuestion.branching;

      // If it's not the last question move to the next question
      if (!state.lastQuestion) {
        // If there is no branching logic or the answer does not meet the predicate, go to
        // next question in the section or to the next section
        if (branching == null || currQuestion.answer !== branching.predicate) {
          const nextQuestionInfo = getNextQuestionInfo(
            state.questionStack[state.currentQuestionIndex + 1],
            state.questions
          );
          state.questionStack.push(nextQuestionInfo);
          state.currentQuestion =
            state.questions[nextQuestionInfo.section][
              nextQuestionInfo.question
            ];
          state.currentQuestionIndex += 1;
          if (checkIfLastQuestion(nextQuestionInfo, state.questions)) {
            state.lastQuestion = true;
          }
        } else {
          // If branching logic hits, branch to the question it says
          state.questionStack.push(branching.goto);
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
      } else {
        // Submit answers
        console.log("Finally finished survey");
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        if (state.lastQuestion) {
          state.lastQuestion = false;
        }

        state.questionStack.pop();
        state.currentQuestion =
          state.questions[
            state.questionStack[state.currentQuestionIndex].section
          ][state.questionStack[state.currentQuestionIndex].question];
        state.currentQuestionIndex = state.currentQuestionIndex - 1;
      }

      if (state.currentQuestionIndex === 0) {
        state.firstQuestion = true;
      }
    },

    // Reset survey and send query to API
    finishSurvey: (state) => {},

    /**
     * Initializes questions on startup. The payload coming in will
     * be the userId of the auth user that is signed in through cognito.
     * That userId will be used to determine the set of questions the
     * user will experience during the survey.
     */
    initQuestions: (state, { payload }) => {
      // let stateCopy = { ...state };

      // User not signed in, give full survey
      if (payload.userId == null) {
        while (state.questionStack.length > 0) {
          state.questionStack.pop();
        }
        state.questionStack.push({ section: 0, question: 0 });
        state.questionStack.push({ section: 0, question: 1 });
        state.questions = surveyLogic.questions;
        state.currentQuestion = surveyLogic.questions[0][0];
        state.currentQuestionIndex = 0;
        state.firstQuestion = true;
        state.lastQuestion = false;
      }
    },
  },
});

export const { nextQuestion, prevQuestion, initQuestions } =
  surveySlice.actions;

export const selectCurrentQuestion = (state: RootState) => {
  return state.survey.currentQuestion;
};
export const selectIsFirstQuestion = (state: RootState) => {
  return state.survey.firstQuestion;
};
export const selectIslastQuestion = (state: RootState) => {
  return state.survey.lastQuestion;
};

export default surveySlice.reducer;
