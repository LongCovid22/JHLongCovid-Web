import {
  processSocialDeterminantsEntry,
  QuestionInfo,
} from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";
import { UserInfo } from "../../../../components/Survey/SurveyWrapper";

describe("Create Social Determinants entry from survey answers", () => {
  it("Testing Social Determinants section", () => {
    const mockQuestionStack = [
      {
        section: 8,
        question: 0,
      },
      {
        section: 8,
        question: 1,
      },
      {
        section: 8,
        question: 2,
      },
    ];
    const mockAnswerStack = [
      "Yes",
      "Not at all difficult",
      "Working remotely from home",
    ];

    const mockSchemas = [
      {
        tableName: "SocialDeterminantsEntry",
        field: "hasMedicalInsurance",
        type: "Boolean",
      },
      {
        tableName: "SocialDeterminantsEntry",
        field: "difficultCoveringExpenses",
        type: "String",
      },
      {
        tableName: "SocialDeterminantsEntry",
        field: "currentWorkSituation",
        type: "String",
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

    const entry = processSocialDeterminantsEntry(sectionInfo, demographics);

    const correctSocialDeterminantsEntry = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      hasMedicalInsurance: true,
      difficultCoveringExpenses: "notAtAllDifficult",
      currentWorkSituation: "remote",
    };

    expect(entry).toStrictEqual(correctSocialDeterminantsEntry);
  });
});
