import { processSocialDeterminantsEntry } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";

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
      "Working inside the home",
    ];

    const entry = processSocialDeterminantsEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctSocialDeterminantsEntry = {
      hasMedicalInsurance: true,
      difficultCoveringExpenses: "Not at all difficult",
      currentWorkSituation: "Working inside the home",
    };

    expect(entry).toStrictEqual(correctSocialDeterminantsEntry);
  });
});
