import { processVaccinationEntry } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";

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

    const entry = processVaccinationEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctVaccinationEntry = {
      VaccinationEntry: {
        vaccinated: true,
        totalVaccineShots: 5,
        dateOfLastVaccine: new Date("2022-11-05"),
        vaccineType: "Novavax",
      },
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

    const entry = processVaccinationEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctVaccinationEntry = {
      VaccinationEntry: {
        vaccinated: false,
      },
    };

    expect(entry).toStrictEqual(correctVaccinationEntry);
  });
});
