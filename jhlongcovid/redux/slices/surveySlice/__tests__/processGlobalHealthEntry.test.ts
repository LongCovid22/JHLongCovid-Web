import {
  processGlobalHealthEntry,
  QuestionInfo,
} from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";
import { UserInfo } from "../../../../components/Survey/SurveyWrapper";

describe("Create global health entry from survey answers", () => {
  it("Testing full global health section", () => {
    const mockQuestionStack = [
      {
        section: 4,
        question: 0,
      },
      {
        section: 4,
        question: 1,
      },
      {
        section: 4,
        question: 2,
      },
      {
        section: 4,
        question: 3,
      },
      {
        section: 4,
        question: 4,
      },
    ];
    const mockAnswerStack = [
      "Excellent",
      "Excellent",
      "Completely",
      "Moderate",
      "7",
    ];

    const mockSchemas = [
      {
        tableName: "GlobalHealthEntry",
        field: "healthRank",
        type: "String",
      },
      {
        tableName: "GlobalHealthEntry",
        field: "physicalHealthRank",
        type: "String",
      },
      {
        tableName: "GlobalHealthEntry",
        field: "carryPhysicalActivities",
        type: "String",
      },
      {
        tableName: "GlobalHealthEntry",
        field: "fatigueRank",
        type: "String",
      },
      {
        tableName: "GlobalHealthEntry",
        field: "painLevel",
        type: "Int",
      },
    ];

    const demographics: UserInfo = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      name: "jeff",
      zip: "123492",
    };

    const sectionInfo: QuestionInfo = {
      questions: mockQuestionStack,
      answers: mockAnswerStack,
      schemas: mockSchemas,
      answerFormats: [],
      options: [],
    };

    const entry = processGlobalHealthEntry(sectionInfo, demographics);

    const correctGlobalHealthEntry = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      healthRank: "Excellent",
      physicalHealthRank: "Excellent",
      carryPhysicalActivities: "Completely",
      fatigueRank: "Moderate",
      painLevel: 7,
    };

    expect(entry).toStrictEqual(correctGlobalHealthEntry);
  });
});
