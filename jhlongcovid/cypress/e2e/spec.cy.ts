
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

function clickRadioButtonsAndNext(testIds: string[]) {
  testIds.forEach((testId) => {
    cy.get(`div[data-testid="${testId}"] input[type="radio"]`).click({ force: true });
  });

  cy.contains("button", "Next").click();
}


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

    RadioOnlyParseAndNext("Yes");
    RadioWithCustomParseAndNext("1 infection (only once)");
    RadioOnlyParseAndNext("Yes");
    RadioWithCustomParseAndNext("1 COVID hospitalization");
    TextInputandParseAndNext("Enter date", "2023-11-08");
    RadioOnlyParseAndNext("Yes");
    RadioOnlyParseAndNext("Yes");
    RadioOnlyParseAndNext("Yes");
    RadioOnlyParseAndNext("Not at all");
    RadioOnlyParseAndNext("Yes");
    MultiChoiceParseAndNext("Antiviral");
    RadioOnlyParseAndNext("Yes");
    TextInputandParseAndNext("Enter number of days", "3");
    RadioOnlyParseAndNext("No");
    MultiChoiceParseAndNext("Feeling faint");
    RadioOnlyParseAndNext("Excellent");
    RadioOnlyParseAndNext("Excellent");
    RadioOnlyParseAndNext("Excellent");
    RadioOnlyParseAndNext("Excellent");
    RadioOnlyParseAndNext("Never");
    const testDataIds = ["0-0", "1-0", "2-0", "3-0", "4-0", "5-0", "6-0", "7-0"];
    clickRadioButtonsAndNext(testDataIds);
    MultiChoiceParseAndNext("Heart problems");
    RadioOnlyParseAndNext("Yes");
    RadioOnlyParseAndNext("Yes");
    RadioOnlyParseAndNext("Very difficult");
    RadioOnlyParseAndNext("Working outside of the home");
    cy.contains("button", "Skip").click();
    cy.contains("button", "Finish").click();
  });
});


const testCases = [
  {
    name: "Invalid Sex - Blank value",
    execute: () => {
      DemographicsParseAndNext("22", "", "6", "3", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  {
    name: "Invalid Age - Non-numeric value",
    execute: () => {
      DemographicsParseAndNext("Twenty-Two", "Male", "6", "3", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  {
    name: "Invalid Age - Negative value",
    execute: () => {
      DemographicsParseAndNext("-5", "Male", "6", "3", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  {
    name: "Invalid Age - Age above a reasonable limit",
    execute: () => {
      DemographicsParseAndNext("150", "Male", "6", "3", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  
  {
    name: "Invalid Height_feet - Non-numeric value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "Six", "3", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  {
    name: "Invalid Height_feet - Negative value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "-6", "3", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  {
    name: "Invalid Height_feet - Too high value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "15", "3", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  {
    name: "Invalid Height_inches - Non-numeric value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "Three", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  
  {
    name: "Invalid Height_inches - Negative value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "-3", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  {
    name: "Invalid Height_inches - Too high value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "20", "150", "Asian");
      cy.contains("Please provide").should("be.visible")
    }
  },
  
  {
    name: "Invalid Race - Blank value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "3", "150", "");
      cy.contains("Please provide").should("be.visible");
    }
  },
  {
    name: "Invalid Weight_lbs - Non-numeric value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "3", "One Fifty", "Asian");
      cy.contains("Please correct invalid").should("be.visible");
    }
  },
  {
    name: "Invalid Weight_lbs - Negative value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "3", "-150", "Asian");
      cy.contains("Please correct invalid").should("be.visible");
    }
  },
  {
    name: "Invalid Weight_lbs - Large value",
    execute: () => {
      DemographicsParseAndNext("22", "Male", "6", "3", "500", "Asian");
      cy.contains("Please correct invalid").should("be.visible");
    }
  },
  
];

testCases.forEach(testCase => {
  
  describe(testCase.name, () => {
    before(() => {
      cy.visit("http://localhost:3001");
      BeingSurveyTest();
      ConsentParseAndNext("edgesummerprograms@gmail.com");
      cy.contains("Demographics").should("be.visible");
    });

    it(testCase.name, () => {
      testCase.execute();
    });
  });
})


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
