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
  currentAnswer: string | string[] | null;
  questions: any;
  questionStack: any[];
  answerStack: any[];
  lastQuestion: boolean;
  firstQuestion: boolean;
};

const initialState: SurveyState = {
  currentQuestionIndex: 0,
  currentQuestion: {},
  currentAnswer: null,
  questions: surveyLogic.questions,
  questionStack: [],
  answerStack: [],
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

const getNextQuestionAnswerDefault = (
  questionInfo: { section: number; question: number },
  questions: any
): string | string[] => {
  const question = questions[questionInfo.section][questionInfo.question];
  if (Array.isArray(question.answerFormat)) {
    if (question.answerFormat.includes("choice")) {
      return "";
    } else if (question.answerFormat.includes("multichoice")) {
      return [];
    } else {
      return "";
    }
  } else if (question.answerFormat === "scale") {
    return Array.from({ length: question.options.length }, () => "");
  } else {
    return "";
  }
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
        if (branching == null || payload.answer !== branching.predicate) {
          // Gets info for question 2 questions ahead of current question
          const nextQuestionInfo = getNextQuestionInfo(
            state.questionStack[state.currentQuestionIndex],
            state.questions
          );
          state.questionStack.push(nextQuestionInfo);

          if (state.currentQuestionIndex + 1 == state.answerStack.length) {
            state.answerStack.push(
              getNextQuestionAnswerDefault(nextQuestionInfo, state.questions)
            );
          }

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
          state.questionStack.push(branching.goto);
          if (state.currentQuestionIndex + 1 == state.answerStack.length) {
            state.answerStack.push(null);
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
      } else {
        // Submit answers
        console.log("Finally finished survey");
      }
    },
    prevQuestion: (state, { payload }) => {
      if (state.currentQuestionIndex > 0) {
        // Set the answer to the current question
        state.answerStack[state.currentQuestionIndex] = payload.answer;

        // Start moving to the previous question information
        state.currentQuestionIndex -= 1;

        if (state.lastQuestion) {
          state.lastQuestion = false;
        }

        state.questionStack.pop();
        // state.answerStack.pop();
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
    finishSurvey: (state) => {},

    /**
     * Initializes questions on startup. The payload coming in will
     * be the userId of the auth user that is signed in through cognito.
     * That userId will be used to determine the set of questions the
     * user will experience during the survey.
     */
    initQuestions: (state, { payload }) => {
      // let stateCopy = { ...state };
      console.log(surveyLogic);
      // User not signed in, give full survey
      if (payload.userId == null) {
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
export const selectCurrentAnswer = (state: RootState) => {
  return state.survey.currentAnswer;
};

export default surveySlice.reducer;
