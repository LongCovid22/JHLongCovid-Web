import { processVaccinationEntry, QuestionInfo } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";
import { UserInfo } from "../../../../components/Survey/SurveyWrapper";

describe("Create vaccination entry from survey answers", () => {
  it("Testing full vaccination section", () => {
    const mockQuestionStack = [
      {
        section: 3,
        question: 0,
      },
      {
        section: 3,
        question: 1,
      },
      {
        section: 3,
        question: 2,
      },
      {
        section: 3,
        question: 3,
      },
    ];
    const mockAnswerStack = ["Yes", "5", "2022-11-05", "Novavax"];
    const mockSchemas = [
      {
        tableName: "VaccinationEntry",
        field: "vaccinated",
        type: "String",
      },
      {
        tableName: "VaccinationEntry",
        field: "totalVaccineShots",
        type: "Int",
      },
      {
        tableName: "VaccinationEntry",
        field: "dateOfLastVaccine",
        type: "AWSDateTime",
      },
      {
        tableName: "VaccinationEntry",
        field: "vaccineType",
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

    const entry = processVaccinationEntry(sectionInfo, demographics);

    const correctVaccinationEntry = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      vaccinated: "yes",
      totalVaccineShots: 5,
      dateOfLastVaccine: new Date("2022-11-05"),
      vaccineType: "novavax",
    };

    expect(entry).toStrictEqual(correctVaccinationEntry);
  });

  it("Testing branched vaccination section: (not vaccinated)", () => {
    const mockQuestionStack = [
      {
        section: 3,
        question: 0,
      },
    ];
    const mockAnswerStack = ["No"];
    const mockSchemas = [
      {
        tableName: "VaccinationEntry",
        field: "vaccinated",
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
      feet: "6",
      inches: "3",
      race: "white",
      sex: "male",
      email: "leo.hubert3@gmail.com"
    };

    const entry = processVaccinationEntry(sectionInfo, demographics);

    const correctVaccinationEntry = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      vaccinated: false,
    };

    expect(entry).toStrictEqual(correctVaccinationEntry);
  });
});
