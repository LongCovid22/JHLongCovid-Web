const clickRadioWithTextAndClickNext = (answer: any) => {
  cy.get('input[type="radio"]').contains(answer).click();
  cy.contains("Next").click();
};

const targetInputWithTestIdAndFillWithValue = (target: string, value: any) => {
  cy.get(`[data-testid="${target}"]`).type(value);
};

const clickScaleRadioButton = (question: string, value: number) => {
  // Find the label element containing the question text
  cy.contains(new RegExp(question, "i"))
    .parent() // Find the parent div
    .next() // Find the next sibling div
    .find(`input[value="${value}"]`) // Find the input with the specified value
    .click(); // Click on the input element
};

const BeingSurveyTest = () => {
  cy.contains("Welcome to the Johns Hopkins Long COVID Dashboard!").should(
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
  cy.get('[data-testid="race-input"]').contains(race).click();
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

describe("Close Panel and Click Buttons Test", () => {
  before(() => {
    // Assuming your application is running at http://localhost:3001
    cy.visit("http://localhost:3001");
  });

  it("Should Iterate through the Survey Succesfully", () => {

    //make this into a matrix
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
