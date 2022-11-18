import { processSymptomEntry } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";

describe("Create Covid entry from survey answers", () => {
  it("Testing full covid section", () => {
    const mockQuestionStack = [
      {
        section: 5,
        question: 0,
      },
      {
        section: 5,
        question: 1,
      },
      {
        section: 5,
        question: 2,
      },
      {
        section: 5,
        question: 3,
      },
      {
        section: 5,
        question: 4,
      },
    ];
    const mockAnswerStack = [
      [
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
      ],
      "Excellent",
      "Excellent",
      "Excellent",
      "Never",
    ];

    const entry = processSymptomEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctSymptomEntry = {
      SymptomEntry: {
        symptoms: [
          "Swelling of your legs",
          "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week",
        ],
        mentalHealthRank: "Excellent",
        socialSatisfactionRank: "Excellent",
        carryOutSocialActivitiesRank: "Excellent",
        anxietyInPastWeekRank: "Never",
      },
    };

    expect(entry).toStrictEqual(correctSymptomEntry);
  });
});
