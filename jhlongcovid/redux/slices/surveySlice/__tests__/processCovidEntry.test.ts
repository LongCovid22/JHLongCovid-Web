import { processCovidEntry, QuestionInfo } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";
import { UserInfo } from "../../../../components/Survey/SurveyWrapper";

describe("Create Covid entry from survey answers", () => {
  it("Testing full covid section", () => {
    const mockQuestionStack: { section: number; question: number }[] = [
      {
        section: 1,
        question: 0,
      },
      {
        section: 1,
        question: 1,
      },
      {
        section: 1,
        question: 2,
      },
      {
        section: 1,
        question: 3,
      },
      {
        section: 1,
        question: 4,
      },
      {
        section: 1,
        question: 5,
      },
      {
        section: 1,
        question: 6,
      },
      {
        section: 1,
        question: 7,
      },
      {
        section: 1,
        question: 8,
      },
      {
        section: 1,
        question: 9,
      },
      {
        section: 1,
        question: 10,
      },
    ];
    const mockAnswerStack = [
      "Yes",
      "1 infection (only once)",
      "Yes",
      "1 COVID hospitalization",
      "2022-11-09",
      "Yes",
      "Yes",
      "Yes",
      "Not at all",
      "Yes",
      {
        choices: ["Antiviral pill, such as Paxlovid"],
        other: "dwd",
      },
    ];

    const mockSchemas = [
      {
        tableName: "CovidEntry",
        field: "beenInfected",
        type: "Boolean",
      },
      {
        tableName: "CovidEntry",
        field: "timesPositive",
        type: "Int",
      },
      {
        tableName: "CovidEntry",
        field: "hospitalized",
        type: "Boolean",
      },
      {
        tableName: "CovidEntry",
        field: "timesHospitalized",
        type: "Int",
      },
      {
        tableName: "CovidEntry",
        field: "lastPositive",
        type: "AWSDateTime",
      },
      {
        tableName: "CovidEntry",
        field: "tested",
        type: "Boolean",
      },
      {
        tableName: "CovidEntry",
        field: "positiveTest",
        type: "String",
      },
      {
        tableName: "CovidEntry",
        field: "symptomatic",
        type: "Boolean",
      },
      {
        tableName: "CovidEntry",
        field: "symptomsPreventScale",
        type: "String",
      },
      {
        tableName: "CovidEntry",
        field: "medicationsPrescribed",
        type: "String",
      },
      {
        tableName: "CovidEntry",
        field: "medicationsTaken",
        type: "[String]",
      },
    ];

    const sectionInfo: QuestionInfo = {
      questions: mockQuestionStack,
      answers: mockAnswerStack,
      schemas: mockSchemas,
      answerFormats: [],
      options: [],
    };

    const demographics: UserInfo = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      name: "jeff",
      zip: "123492",
    };

    const entry = processCovidEntry(sectionInfo, demographics);

    const correctCovidEntry = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      beenInfected: true,
      timesPositive: 1,
      hospitalized: true,
      timesHospitalized: 1,
      lastPositive: new Date("2022-11-09"),
      tested: true,
      positiveTest: "yes",
      symptomatic: true,
      symptomsPreventScale: "notAtAll",
      medicationsPrescribed: "yes",
      medicationsTaken: ["antiviral", "other"],
    };

    expect(entry).toStrictEqual(correctCovidEntry);
  });
});
