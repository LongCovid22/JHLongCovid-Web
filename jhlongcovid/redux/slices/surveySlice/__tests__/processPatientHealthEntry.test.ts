import {
  processPatientHealthEntry,
  QuestionInfo,
} from "../surveySliceFunctions";
import { UserInfo } from "../../../../components/Survey/SurveyWrapper";

describe("Create Patient Health entry from survey answers", () => {
  it("Testing full patient health section", () => {
    const mockQuestionStack = [
      {
        section: 6,
        question: 0,
      },
    ];
    const mockAnswerStack = [["1", "0", "2", "0", "3", "0", "3", "0"]];

    const mockSchemas = [
      {
        tableName: "PatientHealthEntry",
        field: "generalHealthResults",
        type: "AWSJSON",
      },
    ];

    const mockAnswerFormats = ["scale"];
    const mockOptions = [
      [
        "Little interest or pleasure in doing things?",
        "Feeling down, depressed, or hopeless?",
        "Trouble falling or staying asleep, or sleeping too much?",
        "Feeling tired or having little energy?",
        "Poor appetite or overeating?",
        "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
        "Trouble concentrating on things, such as reading the newspaper or watching television?",
        "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?",
      ],
    ];

    const sectionInfo: QuestionInfo = {
      questions: mockQuestionStack,
      answers: mockAnswerStack,
      schemas: mockSchemas,
      answerFormats: mockAnswerFormats,
      options: mockOptions,
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

    const entry = processPatientHealthEntry(sectionInfo, demographics);

    const correctPatientHealthEntry = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      generalHealthResults: {
        littleInterest: "severalDays",
        feelingDepressed: "notAtAll",
        troubleWithSleep: "moreThanHalfTheDays",
        feelingTired: "notAtAll",
        poorEatingHabits: "nearlyEveryDay",
        feelDownOnSelf: "notAtAll",
        troubleConcentrating: "nearlyEveryDay",
        movingDifferent: "notAtAll",
      },
      totalScore: 9,
    };

    expect(entry).toStrictEqual(correctPatientHealthEntry);
  });
});
