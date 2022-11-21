import { processGlobalHealthEntry } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";

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

    const entry = processGlobalHealthEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctGlobalHealthEntry = {
      healthRank: "Excellent",
      physicalHealthRank: "Excellent",
      carryPhysicalActivities: "Completely",
      fatigueRank: "Moderate",
      painLevel: 7,
    };

    expect(entry).toStrictEqual(correctGlobalHealthEntry);
  });
});
