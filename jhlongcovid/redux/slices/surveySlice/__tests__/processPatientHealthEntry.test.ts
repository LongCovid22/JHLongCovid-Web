import { processPatientHealthEntry } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";

describe("Create Patient Health entry from survey answers", () => {
  it("Testing full patient health section", () => {
    const mockQuestionStack = [
      {
        section: 6,
        question: 0,
      },
    ];
    const mockAnswerStack = [["1", "0", "2", "0", "3", "0", "3", "0"]];

    const entry = processPatientHealthEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctPatientHealthEntry = {
      generalHealthResults: {
        "Little interest or pleasure in doing things?": "Several days",
        "Feeling down, depressed, or hopeless?": "Not at all",
        "Trouble falling or staying asleep, or sleeping too much?":
          "More than half the days",
        "Feeling tired or having little energy?": "Not at all",
        "Poor appetite or overeating?": "Nearly every day",
        "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?":
          "Not at all",
        "Trouble concentrating on things, such as reading the newspaper or watching television?":
          "Nearly every day",
        "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?":
          "Not at all",
      },
      totalScore: 9,
    };

    expect(entry).toStrictEqual(correctPatientHealthEntry);
  });
});
