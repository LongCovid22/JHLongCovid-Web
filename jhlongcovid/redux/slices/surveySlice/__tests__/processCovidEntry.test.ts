import { processCovidEntry } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";

describe("Create Covid entry from survey answers", () => {
  it("Testing full covid section", () => {
    const mockQuestionStack = [
      {
        section: 1,
        question: 0,
      },
      {
        section: 1,
        question: 1,
      },
      {
        section: 1,
        question: 2,
      },
      {
        section: 1,
        question: 3,
      },
      {
        section: 1,
        question: 4,
      },
      {
        section: 1,
        question: 5,
      },
      {
        section: 1,
        question: 6,
      },
      {
        section: 1,
        question: 7,
      },
      {
        section: 1,
        question: 8,
      },
      {
        section: 1,
        question: 9,
      },
      {
        section: 1,
        question: 10,
      },
    ];
    const mockAnswerStack = [
      "Yes",
      "1 infection (only once)",
      "Yes",
      "1 COVID hospitalization",
      "2022-11-09",
      "Yes",
      "Yes",
      "Yes",
      "Not at all",
      "Yes",
      {
        choices: ["Antiviral pill, such as Paxlovid"],
        other: "dwd",
      },
    ];

    const entry = processCovidEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctCovidEntry = {
      CovidEntry: {
        beenInfected: true,
        timesPositive: 1,
        hospitalized: true,
        timesHospitalized: 1,
        lastPositive: new Date("2022-11-09"),
        tested: true,
        positiveTest: true,
        symptomatic: true,
        symptomsPreventScale: "Not at all",
        medicationsPrescribed: true,
        medicationsTaken: ["Antiviral pill, such as Paxlovid", "dwd"],
      },
    };

    expect(entry).toStrictEqual(correctCovidEntry);
  });

  it("Testing branched covid section: (Did not take covid test)", () => {
    const mockQuestionStack = [
      {
        section: 1,
        question: 0,
      },
      {
        section: 1,
        question: 1,
      },
      {
        section: 1,
        question: 2,
      },
      {
        section: 1,
        question: 3,
      },
      {
        section: 1,
        question: 4,
      },
      {
        section: 1,
        question: 5,
      },
      {
        section: 1,
        question: 7,
      },
      {
        section: 1,
        question: 8,
      },
      {
        section: 1,
        question: 9,
      },
      {
        section: 1,
        question: 10,
      },
    ];
    const mockAnswerStack = [
      "Yes",
      "1 infection (only once)",
      "Yes",
      "1 COVID hospitalization",
      "2022-11-09",
      "No",
      "Yes",
      "Not at all",
      "Yes",
      {
        choices: ["Antiviral pill, such as Paxlovid"],
        other: "dwd",
      },
    ];

    const entry = processCovidEntry(
      mockQuestionStack,
      mockAnswerStack,
      surveyLogic.questions
    );

    const correctCovidEntry = {
      CovidEntry: {
        beenInfected: true,
        timesPositive: 1,
        hospitalized: true,
        timesHospitalized: 1,
        lastPositive: new Date("2022-11-09"),
        tested: false,
        symptomatic: true,
        symptomsPreventScale: "Not at all",
        medicationsPrescribed: true,
        medicationsTaken: ["Antiviral pill, such as Paxlovid", "dwd"],
      },
    };

    expect(entry).toStrictEqual(correctCovidEntry);
  });
});
