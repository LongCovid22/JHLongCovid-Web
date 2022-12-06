import { processSymptomEntry, QuestionInfo } from "../surveySliceFunctions";
import surveyLogic from "../../../../surveyLogic.json";
import { UserInfo } from "../../../../components/Survey/SurveyWrapper";

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

    const mockSchemas = [
      {
        tableName: "SymptomsEntry",
        field: "symptoms",
        type: "[String]",
      },
      {
        tableName: "SymptomsEntry",
        field: "mentalHealthRank",
        type: "String",
      },
      {
        tableName: "SymptomsEntry",
        field: "socialSatisfactionRank",
        type: "String",
      },
      {
        tableName: "SymptomsEntry",
        field: "carryOutSocialActivitiesRank",
        type: "String",
      },
      {
        tableName: "SymptomsEntry",
        field: "anxietyInPastWeekRank",
        type: "String",
      },
      {
        tableName: "SymptomsEntry",
        field: "medicalConditions",
        type: "[String]",
      },
      {
        tableName: "SymptomsEntry",
        field: "hasLongCovid",
        type: "Boolean",
      },
    ];

    const mockAnswerFormats = [
      "scale",
      ["choice", "choice", "choice", "choice", "choice"],
      ["choice", "choice", "choice", "choice", "choice"],
      ["choice", "choice", "choice", "choice", "choice"],
      ["choice", "choice", "choice", "choice", "choice"],
      [
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "multichoice",
        "input",
        "multichoice",
      ],
      ["choice", "choice", "choice"],
    ];

    const mockOptions = [
      [
        "Headache",
        "Body or muscle aches",
        "Fever, chills, sweats or flushing",
        "Feeling faint, dizzy, “goofy”; difficulty thinking soon after standing up from a sitting or lying position",
        "Feeling sick after you exert yourself physically or mentally (“post-exertional malaise”)",
        "Weakness in arms or legs",
        "Shortness of breath (trouble breathing)",
        "Cough",
        "Palpitations, racing heart, arrhythmia, or skipped beats",
        "Swelling of your legs",
        "Indigestion, nausea, feeling uncomfortably full or vomiting after eating, diarrhea, or constipation",
        "Bladder problems including incontinence, trouble passing urine or emptying bladder",
        "Nerve problems including tremor, shaking, numbness, tingling, or burning",
        "Problems thinking or concentrating (“brain fog”)",
        "Problems with anxiety, depression, stress or trauma-related symptoms like nightmares or grief",
        "Nerve problems including tremor, shaking, numbness, tingling, or burning sensation",
        "Difficulty falling asleep, difficulty staying asleep, or early morning awakenings, 3 or more times per week",
        "Feeling sleepy, trouble staying awake during the daytime, or falling asleep during the day when you do not intend to, 3 or more times per week",
        "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week",
        "Uncomfortable feelings in your legs (creepy, crawling feeling) that make you want to move your legs, that are worse at night and improved with movement",
        "Skin rash",
        "Loss of or change in smell or taste",
        "Excessive thirst",
        "Excessively dry mouth",
        "Vision problems (blurry, light sensitivity, difficult reading or focusing, floaters, flashing lights, “snow”)",
        "Problems with hearing (hearing loss, ringing in ears)",
        "Problems with fertility, changes in your menstrual cycle, changes in menopause symptoms",
      ],
      ["Excellent", "Very good", "Good", "Fair", "Poor"],
      ["Excellent", "Very good", "Good", "Fair", "Poor"],
      ["Excellent", "Very good", "Good", "Fair", "Poor"],
      ["Never", "Rarely", "Sometimes", "Often", "Always"],
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

    const entry = processSymptomEntry(sectionInfo, demographics);

    const correctSymptomEntry = {
      age: "23",
      weight: "123",
      height: "55",
      race: "white",
      sex: "male",
      symptoms: ["swellingOfLegs", "loudSnoring"],
      mentalHealthRank: "excellent",
      socialSatisfactionRank: "excellent",
      carryOutSocialActivitiesRank: "excellent",
      anxietyInPastWeekRank: "never",
      hasLongCovid: true,
      medicalConditions: ["stroke", "seizure", "kidneyProblems", "other"],
    };

    expect(entry).toStrictEqual(correctSymptomEntry);
  });
});
