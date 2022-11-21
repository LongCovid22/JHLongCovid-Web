import { processRecoveryEntry } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";

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

    const entry = processRecoveryEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctRecoveryEntry = {
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

    const entry = processRecoveryEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctRecoveryEntry = {
      recovered: false,
    };

    expect(entry).toStrictEqual(correctRecoveryEntry);
  });
});
