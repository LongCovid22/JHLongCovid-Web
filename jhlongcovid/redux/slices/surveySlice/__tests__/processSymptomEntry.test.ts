import { processSymptomEntry } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";

describe("Create Symptom entry from survey answers", () => {
  it("Testing full symptom section", () => {
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
      {
        section: 7,
        question: 0,
      },
      {
        section: 7,
        question: 1,
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
      {
        choices: [
          "Stroke",
          "Seizure or epilepsy",
          "Kidney problems or kidney disease",
        ],
        other: "Test disease",
      },
      "Yes",
    ];

    const entry = processSymptomEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctSymptomEntry = {
      symptoms: [
        "Swelling of your legs",
        "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week",
      ],
      mentalHealthRank: "Excellent",
      socialSatisfactionRank: "Excellent",
      carryOutSocialActivitiesRank: "Excellent",
      anxietyInPastWeekRank: "Never",
      hasLongCovid: true,
      medicalConditions: [
        "Stroke",
        "Seizure or epilepsy",
        "Kidney problems or kidney disease",
        "Test disease",
      ],
    };

    expect(entry).toStrictEqual(correctSymptomEntry);
  });
});
