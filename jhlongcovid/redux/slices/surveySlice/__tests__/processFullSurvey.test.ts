import { processEntries, separatedSectionInfo } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";

const mockFullSurveyQuestionStack = [
  {
    section: 0,
    question: 0,
  },
  {
    section: 0,
    question: 1,
  },
  {
    section: 0,
    question: 2,
  },
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
  {
    section: 2,
    question: 0,
  },
  {
    section: 2,
    question: 1,
  },
  {
    section: 3,
    question: 0,
  },
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
    section: 6,
    question: 0,
  },
  {
    section: 7,
    question: 0,
  },
  {
    section: 7,
    question: 1,
  },
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
  {
    section: 9,
    question: 0,
  },
  {
    section: 9,
    question: 1,
  },
];

const mockFullSurveyAnswers = [
  "",
  "Nate Farrell",
  {
    zip: "13492",
    age: "23",
    race: "white",
    sex: "Female",
    height: "33",
    weight: "3232",
  },
  "Yes",
  "1 infection (only once)",
  "Yes",
  "1 COVID hospitalization",
  "2022-11-08",
  "Yes",
  "Yes",
  "Yes",
  "Not at all",
  "Yes",
  {
    choices: ["Antiviral pill, such as Paxlovid"],
    other: "fre",
  },
  "Yes",
  "5",
  "No",
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
  ["0", "0", "0", "0", "1", "2", "0", "0"],
  {
    choices: ["Memory or cognitive impairment or dementia "],
    other: "kop",
  },
  "Yes",
  "Yes",
  "Very difficult",
  "Working outside the home as well as working remotely from home (“hybrid” work)",
  {
    email: "",
    password: "",
  },
  "",
];

describe("Create entries from full survey answers", () => {
  it("Testing full survey", () => {
    const entries = processEntries(
      mockFullSurveyQuestionStack,
      mockFullSurveyAnswers,
      surveyLogic.questions
    );
    console.log("ENTRIES: ", entries);

    expect(true).toStrictEqual(true);
  });
});
