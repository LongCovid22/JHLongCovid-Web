import {
  BeingSurveyTest,
  ConsentParseAndNext,
  DemographicsParseAndNext,
  RadioOnlyParseAndNext,
  RadioWithCustomParseAndNext,
  MultiChoiceParseAndNext,
  TextInputandParseAndNext,
  TextInputandParseOnly,
  clickRadioButtonsAndNext,
  DemographicsParseWithLocationAndNext,
  getRandomInt,
  getRandomArbitrary,
  pressButton,
  randomDate,
  goNext,
  getDataTestIdAndSelectAndNext,
  sliderRandomAndNext,
  getRandomVaccine,
} from "./spec.cy";

import surveyLogic from "../../surveyLogic.json";

function makeRandomProfile() {
  // Generate a random integer between 12 and 100 for age and convert it to a string
  const age = (Math.floor(Math.random() * (100 - 12 + 1)) + 12).toString();

  // Generate a random gender ("Male" or "Female")
  const gender = Math.random() < 0.5 ? "Male" : "Female";

  // Generate a random integer between 1 and 7 for heightFeet and convert it to a string
  const heightFeet = (Math.floor(Math.random() * 7) + 1).toString();

  // Generate a random integer between 0 and 11 for heightInches and convert it to a string
  const heightInches = Math.floor(Math.random() * 12).toString();

  // Generate a random integer between 91 and 599 for weightLbs and convert it to a string
  const weightLbs = (
    Math.floor(Math.random() * (599 - 91 + 1)) + 91
  ).toString();

  // Generate a random race from the provided options
  const races = [
    "White",
    "Black or African American",
    "Asian",
    "Native American, Native Hawaiian or other Pacific Islander",
    "Hispanic, Latino, or Spanish",
    "Other",
    "Choose to not identify",
  ];
  const race = races[Math.floor(Math.random() * races.length)];

  // Generate a random ZIP code from the provided options
  const zipCodes = ["77001", "70112", "33101"];
  const zipCode = zipCodes[Math.floor(Math.random() * zipCodes.length)];

  DemographicsParseWithLocationAndNext(
    age,
    gender,
    heightFeet,
    heightInches,
    weightLbs,
    race,
    zipCode
  );
}

//answerFormats are:
// 1) arrays w/ "choice"
// 2) arrays w/ "choice" & "input"
// 3) arrays w/ "multichoice"
// 4) arrays w/ "multichoice" & "inputs"
// 5) single inputs: "input" / "scale"
// 5) pages: "welcome", "consent", "demographics", "account", "thankYou"
// As of 9/8/2023 branching only happens with the 1st Typ
export function goNextRandom(SectionIndex: number, QuestionIndex: number) {
  let currentQuestion: any = surveyLogic.questions[SectionIndex][QuestionIndex];
  let answerFormat = currentQuestion.answerFormat;

  if (Array.isArray(answerFormat)) {
    //choose and select the first that is either a "choice" or "multichoice" that is not in branching logic
    let index = Math.floor(Math.random() * currentQuestion.answerFormat.length);
    if (answerFormat.includes("choice")) {
      let option = currentQuestion.options[index];
      if (currentQuestion.answerFormat[index] === "input") {
        if (option.validation && option.validation.type === "number") {
          TextInputandParseAndNext(
            option.placeholder,
            getRandomArbitrary(
              option.validation.min,
              option.validation.max
            ).toString()
          );
        } else if (option.type === "dropdown") {
          getDataTestIdAndSelectAndNext(
            "dropdown-input",
            getRandomArbitrary(
              option.validation.min,
              option.validation.max
            ).toString()
          );
        } else if (option.type === "date") {
          TextInputandParseAndNext(option.placeholder, randomDate());
        } else if (option.type === "text") {
          getRandomVaccine(option);
        }
      } else {
        RadioOnlyParseAndNext(option);
      }
    } else if (answerFormat.includes("multichoice")) {
      // MultiChoiceParseAndNext(currentQuestion.options[index]);
      //Must change to include multiple options, but ok for now:
      let option = currentQuestion.options[index];
      if (currentQuestion.answerFormat[index] === "input") {
        if (option.validation && option.validation.type === "number") {
          TextInputandParseAndNext(
            option.placeholder,
            getRandomArbitrary(
              option.validation.min,
              option.validation.max
            ).toString()
          );
        } else if (option.type === "dropdown") {
          getDataTestIdAndSelectAndNext(
            "dropdown-input",
            getRandomArbitrary(
              option.validation.min,
              option.validation.max
            ).toString()
          );
        } else if (option.type === "date") {
          TextInputandParseAndNext(option.placeholder, randomDate());
        } else if (option.type === "text") {
          getRandomVaccine(option);
        }
      } else {
        MultiChoiceParseAndNext(option);
      }
    }
  } else if (answerFormat === "input") {
    if (currentQuestion.options.type === "date") {
      TextInputandParseAndNext(
        currentQuestion.options.placeholder,
        randomDate()
      );
    } else if (currentQuestion.options.type === "slider") {
      sliderRandomAndNext(currentQuestion);
    } else if (currentQuestion.options.type === "text") {
      if (currentQuestion.options.validation.type === "number") {
        let max: number = currentQuestion.options.validation.max;
        TextInputandParseAndNext(
          currentQuestion.options.placeholder,
          getRandomInt(max).toString()
        );
      }
    }
  } else if (answerFormat === "scale") {
    // const testDataIds = ["0-0", "1-0", "2-0", "3-0", "4-0", "5-0", "6-0", "7-0"];
    const testDataIds = Array.from(
      { length: 8 },
      (_, i) => `${i}-${getRandomInt(8)}`
    );
    clickRadioButtonsAndNext(testDataIds);
  }
}

function findNextSection(
  SectionIndex: number,
  QuestionIndex: number
): number[] {
  const branching: any =
    surveyLogic.questions[SectionIndex][QuestionIndex].branching;
  if (branching === null) {
    if (surveyLogic.questions[SectionIndex][QuestionIndex + 1]) {
      return [SectionIndex, QuestionIndex + 1];
    } else {
      return [SectionIndex + 1, 0];
    }
  } else {
    return [branching.goto.section, branching.goto.question];
  }
}

export function iterateThroughSurvey() {
  let SectionIndex = 1;
  let QuestionIndex = 0;

  //while not the end of the survey
  while (
    surveyLogic.questions[SectionIndex][QuestionIndex].answerFormat !== "review"
  ) {
    //Iterate through the current section Randomly
    goNextRandom(SectionIndex, QuestionIndex);

    //find the Next Section and Update SectionIndex and QuestionIndex as Such
    [SectionIndex, QuestionIndex] = findNextSection(
      SectionIndex,
      QuestionIndex
    );

    console.log(SectionIndex);
    console.log(QuestionIndex);
  }
}

describe("Iterate through Step 36", () => {
  before(() => {
    // Assuming your application is running at http://localhost:3001
    cy.visit("http://localhost:3001");
  });
  it("Should Iterate through the Survey Succesfully", () => {
    //make this into a matrix\
    //verify that the logic follows the surveylogic.json
    //Test out different (random) variants of the answers -- create fake profiles
    BeingSurveyTest();
    ConsentParseAndNext("edgesummerprograms@gmail.com");
    makeRandomProfile();
    iterateThroughSurvey();
    pressButton("Skip");
    pressButton("Finish");
  });
});
