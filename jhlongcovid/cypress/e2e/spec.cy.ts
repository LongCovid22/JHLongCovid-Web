
import { current } from "@reduxjs/toolkit";
import surveyLogic from "../../surveyLogic.json";

const fs = require("fs");

//have SurveyLogic.json side by side to
export const targetInputWithTestIdAndFillWithValue = (target: string, value: any) => {
  cy.get(`[data-testid="${target}"]`).type(value);
};

export const BeingSurveyTest = () => {
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

export const ConsentParseAndNext = (email: string) => {
  cy.get('input[placeholder="Enter Email"]').type(email);
  cy.contains("button", "Next").click();
};

export const DemographicsParseAndNext = (
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

export const RadioOnlyParseAndNext = (answer: string) => {
  cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains(answer)
      .click();
    cy.contains("button", "Next").click();
}

export const RadioWithCustomParseAndNext = (answer : string) => {
  RadioOnlyParseAndNext(answer);
}

export const TextInputandParseAndNext = (placeholder: string, answer: string) => {
  cy.get(`input[placeholder="${placeholder}"]`) // Locate the input field by placeholder text
      .type(answer); // Type the date value
    cy.contains("button", "Next").click();
}

export const MultiChoiceParseAndNext = (answer : string) => {
  cy.contains(answer, { matchCase: false }).click();
  cy.contains("button", "Next").click();
}

export const MultiChoiceWithInputParseAndNext = (answer : (string | {placeholder: string, answer: string})[]) => {
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

export function clickRadioButtonsAndNext(testIds: string[]) {
  testIds.forEach((testId) => {
    cy.get(`div[data-testid="${testId}"] input[type="radio"]`).click({ force: true });
  });

  cy.contains("button", "Next").click();
}

export function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}

export function getRandomArbitrary(min: number, max: number) : number {
  // min <= output < max
  return Math.floor(Math.random() * (max - min) + min);
}

let validDate =  "2023-11-08";

export function questionToRandomAnswer(currentQuestion: any) {
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

export function goNext(SectionIndex: number, QuestionIndex: number) {
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
});

const testCases = [
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
    name: "Invalid Race - Blank value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "3", "150", "");
    }
  },
  
  
];

testCases.forEach(testCase => {
  
  describe(testCase.name, () => {
    before(() => {
      cy.visit("http://localhost:3001", { retryOnStatusCodeFailure: true }); 
      cy.wait(1000);
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
*/