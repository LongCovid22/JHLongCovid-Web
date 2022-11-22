import { processRecoveryEntry, QuestionInfo } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";
import { UserInfo } from "../../../../components/Survey/SurveyWrapper";

describe("Create Recovery entry from survey answers", () => {
  it("Testing full recovery section", () => {
    const mockQuestionStack = [
      {
        section: 2,
        question: 0,
      },
      {
        section: 2,
        question: 1,
      },
    ];
    const mockAnswerStack = ["Yes", "12"];
    const mockSchemas = [
      {
        tableName: "RecoveryEntry",
        field: "recovered",
        type: "Boolean",
      },
      {
        tableName: "RecoveryEntry",
        field: "lengthOfRecovery",
        type: "Int",
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

    const entry = processRecoveryEntry(sectionInfo, demographics);

    const correctRecoveryEntry = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      recovered: true,
      lengthOfRecovery: 12,
    };

    expect(entry).toStrictEqual(correctRecoveryEntry);
  });

  it("Testing branched recovery section: (Not completely recovered)", () => {
    const mockQuestionStack = [
      {
        section: 2,
        question: 0,
      },
    ];
    const mockAnswerStack = ["No"];
    const mockSchemas = [
      {
        tableName: "RecoveryEntry",
        field: "recovered",
        type: "Boolean",
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

    const entry = processRecoveryEntry(sectionInfo, demographics);

    const correctRecoveryEntry = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      recovered: false,
    };

    expect(entry).toStrictEqual(correctRecoveryEntry);
  });
});
