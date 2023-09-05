const clickRadioWithTextAndClickNext = (answer: any) => {
  cy.get('input[type="radio"]').contains(answer).click();
  cy.contains("Next").click();
};

const targetInputWithTestIdAndFillWithValue = (target: string, value: any) => {
  cy.get(`[data-testid="${target}"]`).type(value);
};

describe("Close Panel and Click Buttons Test", () => {
  before(() => {
    // Assuming your application is running at http://localhost:3001
    cy.visit("http://localhost:3001");
  });

  it("Should Iterate through the Survey Succesfully", () => {
    cy.contains("Welcome to the Johns Hopkins Long COVID Dashboard!").should(
      "be.visible"
    );
    cy.contains("button", "Begin Survey").click();
    cy.get('input[placeholder="Enter Email"]').type("hleo1@jhu.edu");
    // Click the button with the text "close"
    cy.contains("button", "Next").click();
    cy.contains("Find My Location").click();

    // Set the age to 22
    cy.get('[data-testid="age-input"]').find("input").type("22");

    // Select "Male" in the sex input
    cy.get('[data-testid="sex-input"]').select("Male");

    targetInputWithTestIdAndFillWithValue("sex-input", "Male");
    targetInputWithTestIdAndFillWithValue("height-ft-input", "5");
    targetInputWithTestIdAndFillWithValue("height-in-input", "10");
    targetInputWithTestIdAndFillWithValue("weight-input", "150");
    // Select "White" in the Race RadioGroup
    cy.get('[data-testid="race-input"]').contains("White").click();

    cy.contains("button", "Next").click();

    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("Yes") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();

    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("1 infection (only once)") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();

    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("Yes") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();

    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("1 COVID hospitalization") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();

    cy.get('input[placeholder="Enter date"]') // Locate the input field by placeholder text
    .type('2023-11-08'); // Type the date value
    cy.contains("button", "Next").click();

    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("Yes") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();

    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("Yes") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();

    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("Yes") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();


    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("Not at all") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();

    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("Yes") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();

    cy.contains('Antiviral', { matchCase: false }).click();
    cy.contains("button", "Next").click();

    cy.get('div[role="radiogroup"]') // Locate the div with role="radiogroup"
      .contains("Yes") // Find the label with the text "Yes"
      .click();
    cy.contains("button", "Next").click();


    cy.get('input[placeholder="Enter number of days"]') // Locate the input field by placeholder text
    .type('3'); // Type the date value
    cy.contains("button", "Next").click();


    
  });
});
