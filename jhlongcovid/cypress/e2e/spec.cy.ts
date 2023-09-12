
import { current } from "@reduxjs/toolkit";
import surveyLogic from "../../surveyLogic.json";

const fs = require("fs");

function logToTxtFile(data: any) {
  fs.appendFileSync("cypress-logs.txt", data + "\n");
}


//have SurveyLogic.json side by side to
const targetInputWithTestIdAndFillWithValue = (target: string, value: any) => {
  cy.get(`[data-testid="${target}"]`).type(value);
};

const BeingSurveyTest = () => {
  cy.contains(surveyLogic.questions[0][0].question).should(
    "be.visible"
  );
  const obj : any = surveyLogic.questions[0][0];
  cy.contains(obj.options[0]).should(
      "be.visible"
    );
  cy.contains(obj.options[1]).scrollIntoView().should(
     "be.visible"
  );
  
  cy.contains("button", "Begin Survey").click();
};

const ConsentParseAndNext = (email: string) => {
  cy.get('input[placeholder="Enter Email"]').type(email);
  cy.contains("button", "Next").click();
};

const DemographicsParseAndNext = (
  age: string,
  sex: string,
  height_ft: string,
  height_in: string,
  weight_lbs: string,
  race: string
) => {
  cy.contains("Find My Location").click();
  cy.wait(1000);
  cy.contains("Change location").scrollIntoView();
  
  cy.get('[data-testid="age-input"]').find("input").type(age);
  cy.get('[data-testid="sex-input"]').select(sex);
  targetInputWithTestIdAndFillWithValue("height-ft-input", height_ft);
  targetInputWithTestIdAndFillWithValue("height-in-input", height_in);
  targetInputWithTestIdAndFillWithValue("weight-input", weight_lbs);
  if (race) {
    cy.get('[data-testid="race-input"]').contains(race).click();
  }
  cy.contains("button", "Next").click();
};

const RadioOnlyParseAndNext = (answer: string) => {
  cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains(answer)
      .click();
    cy.contains("button", "Next").click();
}

const RadioWithCustomParseAndNext = (answer : string) => {
  RadioOnlyParseAndNext(answer);
}

const TextInputandParseAndNext = (placeholder: string, answer: string) => {
  cy.get(`input[placeholder="${placeholder}"]`) // Locate the input field by placeholder text
      .type(answer); // Type the date value
    cy.contains("button", "Next").click();
}

const MultiChoiceParseAndNext = (answer : string) => {
  cy.contains(answer, { matchCase: false }).click();
  cy.contains("button", "Next").click();
}

const MultiChoiceWithInputParseAndNext = (answer : (string | {placeholder: string, answer: string})[]) => {
  answer.forEach((element) => {
    if(typeof element === "string") {
      cy.contains(element, { matchCase: false }).click();
    } else if (typeof element === "object") {
      let { placeholder, answer } = element;
      cy.get(`input[placeholder="${placeholder}"]`) // Locate the input field by placeholder text
      .type(answer);
    }
  })
  pressButton("Next");
}

function clickRadioButtonsAndNext(testIds: string[]) {
  testIds.forEach((testId) => {
    cy.get(`div[data-testid="${testId}"] input[type="radio"]`).click({ force: true });
  });

  cy.contains("button", "Next").click();
}

function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}

function getRandomArbitrary(min: number, max: number) : number {
  // min <= output < max
  return Math.floor(Math.random() * (max - min) + min);
}

let validDate =  "2023-11-08";

function questionToRandomAnswer(currentQuestion: any) {
  let answerFormat = currentQuestion.answerFormat;
  if (Array.isArray(answerFormat)) {
    answerFormat = answerFormat as string[];
    let randomIndex = getRandomInt(answerFormat.length);
    let answerFormatAtIndex = currentQuestion.answerFormat(randomIndex);
    if (answerFormat.include("multichoice")) {
      //TODO : WHAT IF MULTICHOICE LANDS ON INPUT?
      MultiChoiceParseAndNext(currentQuestion.options(randomIndex));
    } else {
      if (answerFormatAtIndex === "input") {
        let settings = currentQuestion.options(randomIndex);
        let value : number;
        if (settings.validation.type === "number") {
          value = getRandomArbitrary(settings.min, settings.max);
          
          TextInputandParseAndNext(settings.placeholder, value.toString());
        } else if (settings.validation.type === "dropdown") {
          TextInputandParseAndNext(settings.placeholder, "6");
        } else if (settings.validation.type === "date") {
          TextInputandParseAndNext(settings.placeholder, validDate);
        } else if (settings.validation.type === "text") {
          let value;
          if (settings.placeholder === "Enter vaccine type") {
            let vaccines = ["vaccineA", "vaccineB", "vaccineC", "vaccineD"];
            value = vaccines[getRandomInt(vaccines.length)];
          }
          TextInputandParseAndNext(settings.placeholder, "vaccine A");
        }
      } else {
        RadioOnlyParseAndNext(currentQuestion.options(randomIndex));
      }
      
    }
  } else if (answerFormat === "consent") {
    ConsentParseAndNext("edgesummerprograms@gmail.com");
  } else if (answerFormat === "comeBackLater") {
    
  } else if (answerFormat === "demographics") {
    DemographicsParseAndNext("22", "Male", "6", "3", "150", "Asian");
  } else if (answerFormat === "welcome") {
    BeingSurveyTest(); 
  } else if (answerFormat === "choice") {
   
  } else if (answerFormat === "input") {

    if (currentQuestion.options.type === "date") {
      TextInputandParseAndNext(currentQuestion.options.placeholder, "2023-11-08");
    } else if (currentQuestion.options.type === "slider") {
      //TODO: Experiment with slider so it's not stuck to default
      cy.contains("button", "Next").click();
    }
    
  } else if (answerFormat === "account") {
    cy.contains("button", "Skip").click();
  } else if (answerFormat === "thankYou") {
    cy.contains("button", "Finish").click();
  } else if (answerFormat === "scale") {
    //its the 2d matrix
    const testDataIds = ["0-0", "1-0", "2-0", "3-0", "4-0", "5-0", "6-0", "7-0"];
    clickRadioButtonsAndNext(testDataIds);
  } else {
    
  }


}

function pressButton(name: string) {
  cy.contains("button", name).click()
}

function isQuestionShowingUp(SectionIndex: number, QuestionIndex: number) {
  
  if (surveyLogic.questions[SectionIndex][QuestionIndex].question.includes("<timeframe>")) {
    let replace : string =  surveyLogic.questions[SectionIndex][QuestionIndex].question;
    // let replaceTo : string = surveyLogic.questions[SectionIndex][QuestionIndex].timeframe;
    const result = replace.replace("<timeframe>", surveyLogic.questions[SectionIndex][QuestionIndex].timeframe);
    cy.contains(result);
  } else {
    cy.contains(surveyLogic.questions[SectionIndex][QuestionIndex].question);
  }

  
}

//answerFormats are: 
// 1) arrays w/ "choice" 
// 2) arrays w/ "choice" & "input" 
// 3) arrays w/ "multichoice" 
// 4) arrays w/ "multichoice" & "inputs"
// 5) single inputs: "input" / "scale"
// 5) pages: "welcome", "consent", "demographics", "account", "thankYou"
// As of 9/8/2023 branching only happens with the 1st Type
 
function testBranchingLogicForCurrentSection(SectionIndex: number, QuestionIndex: number) {
    let answerFormat = surveyLogic.questions[SectionIndex][QuestionIndex].answerFormat;
    let currQuestion : any = surveyLogic.questions[SectionIndex][QuestionIndex];
    if (Array.isArray(answerFormat)) {
      //if answerFormat only has "choice"
      if (answerFormat.includes("choice")) {
        let {options, branching } : {options: any, branching: any} = surveyLogic.questions[SectionIndex][QuestionIndex];
        if(Array.isArray(options)) {
          //see if each option has a corresponding branching logic
          options.forEach(option => {
            console.log(option)
            isQuestionShowingUp(SectionIndex, QuestionIndex);

            if (typeof option === "string") {
              RadioOnlyParseAndNext(option);
            } 
            
            else if (typeof option === "object") {
                let settings : any = option.validation;
                let value : number;
                if (settings && settings.type === "number") {
                  value = getRandomArbitrary(settings.min, settings.max);
                  TextInputandParseAndNext(option.placeholder, value.toString());
                } else if (option.type === "dropdown") {
                  cy.get('[data-testid="dropdown-input"]').select("6");
                  pressButton("Next");
                } else if (option.type === "date") {
                  TextInputandParseAndNext(option.placeholder, validDate);
                } else if (option.type === "text") {
                  let value;
                  if (option.placeholder === "Enter vaccine type") {
                    let vaccines = ["vaccineA", "vaccineB", "vaccineC", "vaccineD"];
                    value = vaccines[getRandomInt(vaccines.length)];
                    TextInputandParseAndNext(option.placeholder, value);
                  }
                }
            }
            
            if (branching && (option === branching.predicate || branching.predicate.includes(option))) {
               isQuestionShowingUp(branching.goto.section, branching.goto.question);
            } else {
              if (surveyLogic.questions[SectionIndex][QuestionIndex + 1]) {
                isQuestionShowingUp(SectionIndex, QuestionIndex + 1);
              } else {
                isQuestionShowingUp(SectionIndex + 1, 0);
              }
            }
            pressButton("Prev");
          });
        }
      } else if (answerFormat.includes("multichoice")) {
        let answer : (string | {placeholder: string, answer: string})[] = [];
        currQuestion.options.forEach((element : any) => {
          if (typeof element === "string") {
            answer.push(element);
          } else if (typeof element === "object") {
            answer.push({placeholder: element.placeholder, answer: "reasonable input"});
          }
        });
        MultiChoiceWithInputParseAndNext(answer);
        pressButton("Prev");
        //no need to check for branching because multichoice has no branching 


      }
    } else if (answerFormat === "input") {
      if (currQuestion.options.type === "date") {
        TextInputandParseAndNext(currQuestion.options.placeholder, "2023-11-08");
        pressButton("Prev");
      } else if (currQuestion.options.type === "slider") {
        //TODO: Experiment with slider so it's not stuck to default
        pressButton("Next");
        pressButton("Prev");
      } else if (currQuestion.options.type === "text") {
        //TODO: Experiment with slider so it's not stuck to default
        if(currQuestion.options.validation.type === "number") {
          let max : number = currQuestion.options.validation.max;
          TextInputandParseAndNext(currQuestion.options.placeholder, getRandomInt(max).toString());
        }
        pressButton("Next");
        pressButton("Prev");
      }
    } else if (answerFormat === "scale") {
      const testDataIds = ["0-0", "1-0", "2-0", "3-0", "4-0", "5-0", "6-0", "7-0"];
      clickRadioButtonsAndNext(testDataIds);
      pressButton("Prev");
    }
   

}

//answerFormats are: 
// 1) arrays w/ "choice" 
// 2) arrays w/ "choice" & "input" 
// 3) arrays w/ "multichoice" 
// 4) arrays w/ "multichoice" & "inputs"
// 5) single inputs: "input" / "scale"
// 5) pages: "welcome", "consent", "demographics", "account", "thankYou"
// As of 9/8/2023 branching only happens with the 1st Type

function goNext(SectionIndex: number, QuestionIndex: number) {
  let currentQuestion : any = surveyLogic.questions[SectionIndex][QuestionIndex];
  let answerFormat = currentQuestion.answerFormat;
  if (Array.isArray(answerFormat)) {
    //choose and select the first that is either a "choice" or "multichoice" that is not in branching logic
    // const index = answerFormat.findIndex((element) => element === "choice" || element === "multichoice");
    const index = answerFormat.findIndex((element, index) => {
      const option = currentQuestion.options[index];
      const hasBranching = currentQuestion.branching
      ? option === currentQuestion.branching.predicate || currentQuestion.branching.predicate.includes(option)
      : false;
      return (element === "choice" || element === "multichoice") && !hasBranching;
    })
    if (index !== -1) {
      if (answerFormat[index] === "choice") {
        RadioOnlyParseAndNext(currentQuestion.options[index]);
      } else {
        //multichoice
        MultiChoiceParseAndNext(currentQuestion.options[index]);
      }
    }
  } else if (answerFormat === "input") {
    if (currentQuestion.options.type === "date") {
      TextInputandParseAndNext(currentQuestion.options.placeholder, "2023-11-08");
    } else if (currentQuestion.options.type === "slider") {
      //TODO: Experiment with slider so it's not stuck to default
      pressButton("Next");
    } else if (currentQuestion.options.type === "text") {
      //TODO: Experiment with slider so it's not stuck to default
      if(currentQuestion.options.validation.type === "number") {
        let max : number = currentQuestion.options.validation.max;
        TextInputandParseAndNext(currentQuestion.options.placeholder, getRandomInt(max).toString());
      }
      pressButton("Next");
    }
  } else if (answerFormat === "scale") {
    const testDataIds = ["0-0", "1-0", "2-0", "3-0", "4-0", "5-0", "6-0", "7-0"];
    clickRadioButtonsAndNext(testDataIds);
  }
}
/*
describe("Testing Branching Logic", () => {
  before(() => {
    // Assuming your application is running at http://localhost:3001
    cy.visit("http://localhost:3001");
    cy.wait(500);
  });
  it("Testing Branching Logic", () => {
    BeingSurveyTest(); 
    ConsentParseAndNext("edgesummerprograms@gmail.com");
    DemographicsParseAndNext("22", "Male", "6", "3", "150", "Asian");

    let currentSectionIndex = 1;
    let currentQuestionIndex = 0;

  while (surveyLogic.questions[currentSectionIndex]) {
    currentQuestionIndex = 0;
    while (surveyLogic.questions[currentSectionIndex][currentQuestionIndex]) {
      if (currentSectionIndex === 8 && currentQuestionIndex === 2) {
        return;
      }
      testBranchingLogicForCurrentSection(currentSectionIndex, currentQuestionIndex);
      goNext(currentSectionIndex, currentQuestionIndex);
      currentQuestionIndex++;
    }
    currentSectionIndex++;
  }
  });
})
*/

/*

describe("Survey Test", () => {
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
    DemographicsParseAndNext("22", "Male", "6", "3", "150", "Asian");

    //Question #3, Are you infected with COVID?
    //Yes/No. If no go to [3][0]. A ["choice", "choice"]
    RadioOnlyParseAndNext("Yes");

    //Question #4, [choice, choice, choice, input, choice]
    //"1 infection (only once)", "2 infections (reinfected once)", "3 infections (reinfected twice)", number between 4 - 10, "Do not know"
    RadioWithCustomParseAndNext("1 infection (only once)");

    //Question 5, Have you every been hospitalized for COVID-19?
    //Yes/No. If no go to [1][4]. A ["choice", "choice"]
    RadioOnlyParseAndNext("Yes");

    //Question 6, Times Hospitalized for Covid
    //Questoin Type: ["choice", "choice", "choice", "input", "choice"]
    
//  [
//           "1 COVID hospitalization",
//           "2 COVID hospitalizations",
//           "3 COVID hospitalizations",
//           number between 4 - 10,
//           "Do not know"
//         ]
    
    RadioWithCustomParseAndNext("1 COVID hospitalization");
    
    
    //Question Number: 7, Question: Most recent COVID Infection
    //Answer Format: "input"
    //options:  {
    //   "title": "Date:",
    //   "type": "date",
    //   "placeholder": "Enter date"
    // }
    //branching: null
    TextInputandParseAndNext("Enter date", "2023-11-08");
    
    //Number: 8
    // "Question": "Did you take a COVID-19 test at that time?",
    // "Answer Format": ["choice", "choice"],
    // "Options": ["Yes", "No"],
    // "Branching": {
    //   "predicate": "No",
    //   "goto": {
    //     "section": 1,
    //     "question": 7
    //   }
    // }
    RadioOnlyParseAndNext("Yes");

    //Number: 9
    // "Question": "Did you have a positive test result? “Positive” means the test showed COVID-19.",
    // "Answer Format": ["choice", "choice", "choice"],
    // "Options": ["Yes", "No", "Do not know"],
    // "Branching": null
    RadioOnlyParseAndNext("Yes");

    //Number: 10 
    // "Question": "Did you have any COVID-19 symptoms, such as fever, cough, sore throat, or other symptoms?",
    // "Answer Format": ["choice", "choice"],
    // "Options": ["Yes", "No"],
    // "Branching": {
    //   "predicate": "No",
    //   "goto": {
    //     "section": 1,
    //     "question": 9
    //   }
    // }
    RadioOnlyParseAndNext("Yes");

    //Number: 11
    // "Question": "When your symptoms were at their worst, did they prevent you from going about your daily activities?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": [
    //   "Not at all",
    //   "A little bit",
    //   "Somewhat",
    //   "Quite a bit",
    //   "Very much"
    // ],
    // "Branching": null
    RadioOnlyParseAndNext("Not at all");

    //Number: 12
    // "Question": "Did a doctor or other health care professional prescribe any medications for you to take when you had COVID-19?",
    // "Answer Format": ["choice", "choice", "choice"],
    // "Options": ["Yes", "No", "Do not know"],
    // "Branching": {
    //   "predicate": ["No", "Do not know"],
    //   "goto": {
    //     "section": 2,
    //     "question": 0
    //   }
    // }
    RadioOnlyParseAndNext("Yes");

    //Number 13
    // "Question": "Did the doctor or other health care professional prescribe any of the following medications for COVID-19? Check all that apply.",
    // "Answer Format": [
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "input",
    //   "multichoice"
    // ],
    // "Options": [
    //   "Antiviral pill, such as Paxlovid",
    //   "Oral steroids, such as dexamethasone, prednisone, or prednisolone",
    //   "Antibiotics, such as a \"Z-pak\"",
    //   {
    //     "type": "text",
    //     "title": "Other",
    //     "placeholder": "Enter medication"
    //   },
    //   "Do not know"
    // ],
    // "Branching": null
    MultiChoiceParseAndNext("Antiviral");

    //Number 14
    // "Question": "Would you say that you are completely recovered from COVID-19 now?",
    // "Answer Format": ["choice", "choice"],
    // "Options": ["Yes", "No"],
    // "Branching": {
    //   "predicate": "No",
    //   "goto": {
    //     "section": 3,
    //     "question": 0
    //   }
    // }
    RadioOnlyParseAndNext("Yes");

    //Number 15
    // "Question": "How long did it take for you to recover from your most recent infection?",
    // "Answer Format": "input",
    // "Options": {
    //   "type": "text",
    //   "title": "Days: ",
    //   "placeholder": "Enter number of days"
    // },
    // "Branching": null
    TextInputandParseAndNext("Enter number of days", "3");

    //Number 16
    // "Question": "Have you ever been vaccinated against COVID-19?",
    // "Answer Format": ["choice", "choice", "choice"],
    // "Options": ["No", "Yes", "Do not know"],
    // "Branching": {
    //   "predicate": "No",
    //   "goto": {
    //     "section": 5,
    //     "question": 0
    //   }
    // }
    RadioOnlyParseAndNext("Yes");

    //Number 17
    // "Question": "In total, how many COVID-19 vaccine shots have you received?",
    // "Answer Format": [
    //   "input",
    //   "choice"
    // ],
    // "Options": [
    //   {
    //     "type": "dropdown",
    //     "title": "Number of shots: ",
    //     "placeholder": "Enter number of shots",
    //     "validation": {
    //       "regex": "^[0-9]+$",
    //       "errorText": "Please enter a valid number"
    //     }
    //   },
    //   "Do not know"
    RadioWithCustomParseAndNext("Do not know");

    //Number 18
    // "Question": "When was your most recent COVID-19 shot?",
    // "Answer Format": [
    //   "input",
    //   "choice",
    //   "choice"
    // ],
    // "Options": [
    //   {
    //     "type": "date",
    //     "title": "Date of shot: ",
    //     "placeholder": "Enter date of shot"
    //   },
    //   "Unsure",
    //   "Decline to answer"
    // ],
    // "Branching": null
    RadioWithCustomParseAndNext("Decline to answer");

    //Number 19
    // "Question": "Which type of COVID-19 vaccine was your last shot?",
    // "Answer Format": [
    //   "choice",
    //   "choice",
    //   "choice",
    //   "choice",
    //   "input",
    //   "choice"
    // ],
    // "Options": [
    //   "Pfizer",
    //   "Moderna",
    //   "Janssen",
    //   "Novavax",
    //   {
    //     "type": "text",
    //     "title": "Other",
    //     "placeholder": "Enter vaccine type"
    //   },
    //   "Do not know"
    // ],
    // "Branching": null
    RadioWithCustomParseAndNext("Pfizer");

    //Number 20
    // "Question": "In general, would you say your health is:",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioWithCustomParseAndNext("Excellent");
    
    //Number 21
    // "Question": "In general, how would you rate your physical health?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioWithCustomParseAndNext("Excellent");

    //Number 22
    // "Question": "To what extent are you able to carry out your everyday physical activities such as walking, climbing stairs, carrying groceries, or moving a chair?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": [
    //   "Completely",
    //   "Mostly",
    //   "Moderately",
    //   "A little",
    //   "Not at all"
    // ],
    // "Branching": null
    RadioWithCustomParseAndNext("Completely");

    //Number 23
    // "Question": "In the past 7 days, how would you rate your fatigue (extreme tiredness resulting from mental or physical exertion or illness) on average?",
    // "Timeframe": "past 7 days",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["None", "Mild", "Moderate", "Severe", "Very Severe"],
    // "Branching": null
    RadioWithCustomParseAndNext("None");

    //Number 24
    cy.contains("button", "Next").click();

    //Number 25
    // "Question": "During the past month, have you had any of the following symptoms? Check all that apply.",
    // "Answer Format": [
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice",
    //   "multichoice"
    // ],
    // "Options": [
    //   "Headache",
    //   "Body or muscle aches",
    //   "Fever, chills, sweats or flushing",
    //   "Feeling faint, dizzy, “goofy”; difficulty thinking soon after standing up from a sitting or lying position",
    //   "Feeling sick after you exert yourself physically or mentally (“post-exertional malaise”)",
    //   "Weakness in arms or legs",
    //   "Shortness of breath (trouble breathing)",
    //   "Cough",
    //   "Palpitations, racing heart, arrhythmia, or skipped beats",
    //   "Swelling of your legs",
    //   "Indigestion, nausea, feeling uncomfortably full or vomiting after eating, diarrhea, or constipation",
    //   "Bladder problems including incontinence, trouble passing urine or emptying bladder",
    //   "Nerve problems including tremor, shaking, numbness, tingling, or burning",
    //   "Problems thinking or concentrating (“brain fog”)",
    //   "Problems with anxiety, depression, stress or trauma-related symptoms like nightmares or grief",
    //   "Difficulty falling asleep, difficulty staying asleep, or early morning awakenings, 3 or more times per week",
    //   "Feeling sleepy, trouble staying awake during the daytime, or falling asleep during the day when you do not intend to, 3 or more times per week",
    //   "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week",
    //   "Uncomfortable feelings in your legs (creepy, crawling feeling) that make you want to move your legs, that are worse at night and improved with movement",
    //   "Skin rash",
    //   "Loss of or change in smell or taste",
    //   "Excessive thirst",
    //   "Excessively dry mouth",
    //   "Vision problems (blurry, light sensitivity, difficult reading or focusing, floaters, flashing lights, “snow”)",
    //   "Problems with hearing (hearing loss, ringing in ears)",
    //   "Problems with fertility, changes in your menstrual cycle, changes in menopause symptoms"
    // ],
    // "Branching": null
    MultiChoiceParseAndNext("Feeling faint");

    //Number: 26
    // "Question": "In general, over the last 2 weeks, how would you rate your quality of life?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext("Excellent");

    //Number: 27
    // "Question": "In general, over the last 2 weeks, how would you rate your mental health, including your mood and your ability to think?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext("Excellent");

    //Number: 28
    // "Question": "In general, over the last 2 weeks, how would you rate your satisfaction with your social activities and relationships?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext("Excellent");

    //Number: 29
    // "Question": "In general, over the last 2 weeks, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.)",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext("Excellent");

    //Number: 30
    // Question": "In the past 7 days, how often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Never", "Rarely", "Sometimes", "Often", "Always"],
    // "Branching": null
    RadioOnlyParseAndNext("Never");


    //Number: 31
    // "Question": "Over the last 2 weeks, how often have you been bothered by the following problems?",
    // "Answer Format": "scale",
    // "Options": [
    //   "Little interest or pleasure in doing things?",
    //   "Feeling down, depressed, or hopeless?",
    //   "Trouble falling or staying asleep, or sleeping too much?",
    //   "Feeling tired or having little energy?",
    //   "Poor appetite or overeating?",
    //   "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    //   "Trouble concentrating on things, such as reading the newspaper or watching television?",
    //   "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?"
    // ],
    // "Scale": [
    //   "Not at all",
    //   "Several days",
    //   "More than half the days",
    //   "Nearly every day"
    // ],
    // "Branching": null
    const testDataIds = ["0-0", "1-0", "2-0", "3-0", "4-0", "5-0", "6-0", "7-0"];
    clickRadioButtonsAndNext(testDataIds);
    
    //Number: 32 Scale Question
    MultiChoiceParseAndNext("Heart problems");

    //Number: 33 
    // "Question": "Do you think that you are experiencing, or have ever experienced, what has been called “long COVID” or symptoms related to COVID-19 at least a month after your infection?",
    // "Answer Format": ["choice", "choice", "choice"],
    // "Options": ["Yes", "No", "Do not know"],
    // "Branching": null
    RadioOnlyParseAndNext("Yes");

    //Number: 34
    // "Question": "Do you currently have some form of health insurance to help pay for medical bills?",
    // "Answer Format": ["choice", "choice"],
    // "Options": ["Yes", "No"],
    // "Branching": null
    RadioOnlyParseAndNext("Yes");

    //Number: 35
    // "Question": "In the past month, how difficult has it been to pay for the things you need (or you and your family needs)?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": [
    //   "Very difficult",
    //   "Somewhat difficult",
    //   "Not at all difficult",
    //   "Do not know",
    //   "Prefer not to answer"
    // ],
    // "Branching": null
    RadioOnlyParseAndNext("Very difficult");

    //Number: 36
    // "Question": "What is your current work situation?",
    // "Answer Format": [
    //   "choice",
    //   "choice",
    //   "choice",
    //   "choice",
    //   "choice",
    //   "choice",
    //   "choice",
    //   "choice",
    //   "choice",
    //   "choice",
    //   "choice"
    // ],
    // "Options": [
    //   "Working outside of the home",
    //   "Working outside the home as well as working remotely from home (“hybrid” work)",
    //   "Working remotely from home",
    //   "Working at home to provide childcare, eldercare and/or to maintain the home",
    //   "On leave from a job working outside the home (e.g, sick leave, family leave, maternity leave)",
    //   "Looking for work, unemployed",
    //   "Retired",
    //   "Disabled, permanently or temporarily",
    //   "Student",
    //   "Don't know",
    //   "Prefer not to answer"
    // ],
    // "Branching": null
    RadioOnlyParseAndNext("Working outside of the home");


    cy.contains("button", "Skip").click();
    cy.contains("button", "Finish").click();
  });
});
*/

const testCases = [
  {
    name: "Invalid Height_inches - Non-numeric value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "Three", "150", "Asian");
    }
  },
  
  {
    name: "Invalid Height_inches - Negative value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "-3", "150", "Asian");
    }
  },
  {
    name: "Invalid Height_inches - Too high value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "20", "150", "Asian");
    }
  },
  {
    name: "Invalid Height_feet - Non-numeric value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "Six", "3", "150", "Asian");
    }
  },
  {
    name: "Invalid Height_feet - Negative value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "-6", "3", "150", "Asian");
    }
  },
  {
    name: "Invalid Height_feet - Too high value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "15", "3", "150", "Asian");
    }
  },
  {
    name: "Invalid Weight_lbs - Non-numeric value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "3", "One Fifty", "Asian");
    }
  },
  {
    name: "Invalid Weight_lbs - Negative value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "3", "-150", "Asian");
    }
  },
  {
    name: "Invalid Weight_lbs - Large value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "3", "1200", "Asian");
    }
  },
  {
    name: "Invalid Sex - Blank value",
    execute: () => {
      DemographicsParseAndNext("22", "", "6", "3", "150", "Asian");
    }
  },
  {
    name: "Invalid Age - Non-numeric value",
    execute: () => {
      DemographicsParseAndNext("Twenty-Two", "Male", "6", "3", "150", "Asian");
    }
  },
  {
    name: "Invalid Age - Negative value",
    execute: () => {
      DemographicsParseAndNext("1", "Male", "6", "3", "150", "Asian");
    }
  },
  {
    name: "Invalid Age - Age above a reasonable limit",
    execute: () => {
      DemographicsParseAndNext("150", "Male", "6", "3", "150", "Asian");
    }
  },
  
  {
    name: "Invalid Race - Blank value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "3", "150", "");
    }
  },
  
  
];

testCases.forEach(testCase => {
  
  describe(testCase.name, () => {
    before(() => {
      cy.visit("http://localhost:3001", { timeout: 10000, retryOnStatusCodeFailure: true }); 
      BeingSurveyTest();
      ConsentParseAndNext("edgesummerprograms@gmail.com");
      cy.contains("Demographics").should("be.visible");
    });

    it(testCase.name, () => {
      testCase.execute();
    });

    after(() => {
      //because they are all errors, should still be in Demographics page!
      cy.contains("Demographics").should("be.visible");
    })
  });
})

/*
describe("Demographics Positive Test Cases", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
    BeingSurveyTest(); 
    ConsentParseAndNext("edgesummerprograms@gmail.com");
    cy.contains("Demographics").should(
"be.visible"
    );
  });
  
  afterEach(() => {
    //should proceed through to next page following Demographics page
    cy.contains("Demographics").should("not.exist");
  })
  it("Profile 3: Hispanic Female", () => {
    DemographicsParseAndNext("45", "Female", "5", "2", "130", "Hispanic, Latino, or Spanish");
  });
  it("Profile 1: White Male", () => {
    DemographicsParseAndNext("28", "Male", "5", "6", "140", "White");
  });
  it("Profile 2: African American Male", () => {
    DemographicsParseAndNext("32", "Male", "5", "10", "175", "Black or African American");
  });
  it("Profile 4: Asian Male", () => {
    DemographicsParseAndNext("19", "Male", "6", "1", "180", "Asian");
  });
  it("Profile 5: Pacific Islander Female", () => {
    DemographicsParseAndNext("37", "Female", "5", "8", "160", "Native Hawaiian or other Pacific Islander");
  });
  it("Profile 6: White Male", () => {
    DemographicsParseAndNext("50", "Male", "5", "11", "200", "White");
  });
  it("Profile 7: Hispanic Female", () => {
    DemographicsParseAndNext("29", "Female", "5", "4", "120", "Hispanic, Latino, or Spanish");
  });
  it("Profile 8: African American Male", () => {
    DemographicsParseAndNext("24", "Male", "6", "0", "170", "Black or African American");
  });
  it("Profile 9: Other Female", () => {
    DemographicsParseAndNext("42", "Female", "5", "7", "150", "Other");
  });
  it("Profile 10: Native American Male", () => {
    DemographicsParseAndNext("18", "Male", "6", "2", "190", "Native American");
  });
  it("Profile 11: Asian Female", () => {
    DemographicsParseAndNext("55", "Female", "5", "5", "140", "Asian");
  });
  it("Profile 12: Pacific Islander Male", () => {
    DemographicsParseAndNext("30", "Male", "5", "9", "175", "Native Hawaiian or other Pacific Islander");
  });
  it("Profile 13: White Female", () => {
    DemographicsParseAndNext("38", "Female", "5", "3", "135", "White");
  });
  it("Profile 14: African American Male", () => {
    DemographicsParseAndNext("27", "Male", "6", "4", "200", "Black or African American");
  });
  it("Profile 15: Choose Not to Identify Female", () => {
    DemographicsParseAndNext("48", "Female", "5", "10", "160", "Choose to not identify");
  });
})

*/