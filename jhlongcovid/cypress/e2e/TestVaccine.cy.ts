import { BeingSurveyTest, ConsentParseAndNext, DemographicsParseAndNext
  , RadioOnlyParseAndNext, RadioWithCustomParseAndNext, MultiChoiceParseAndNext,
  TextInputandParseAndNext, clickRadioButtonsAndNext, goNext, getDataTestIdAndSelectAndNext, getRandomVaccine, MultiChoiceClickArrayAndNext
  } from "./spec.cy";


describe("Test Vaccine", () => {
  before(() => {
    // Assuming your application is running at http://localhost:3001
    cy.visit("http://localhost:3001");
  });

  it("Should Iterate through the Survey Succesfully", () => {

    //make this into a matrix\
    //verify that the logic follows the surveylogic.json
    //Test out different (random) variants of the answers -- create fake profiles
    BeingSurveyTest(); 
    ConsentParseAndNext("leo.hubert3@gmail.com");
    DemographicsParseAndNext("16", "Male", "6", "3", "150", "White", "10019");

    //Question #3, Are you infected with COVID?
    //Yes/No. If no go to [3][0]. A ["choice", "choice"]
    RadioOnlyParseAndNext("Yes");

    //Question #4, [choice, choice, choice, input, choice]
    //"1 infection (only once)", "2 infections (reinfected once)", "3 infections (reinfected twice)", number between 4 - 10, "Do not know"
    /*
    options": [
              "1 infection (only once)",
              "2 infections (reinfected once)",
              "3 infections (reinfected twice)",
              {
                "title": "More than 3 infections: (please enter number)",
                "type": "text",
                "placeholder": "Enter number of infections",
                "validation": {
                  "type": "number",
                  "min": 4,
                  "max": 10,
                  "regex": "^[0-9]+$",
                  "errorText": "Please enter a valid number. Must be less than 10 infections."
                }
              },
              "Do not know"
    */
              // TextInputandParseAndNext(
              //   "Enter number of infections",
              //   "5"
              // );
    RadioWithCustomParseAndNext("2 infections (reinfected once)");

    //Question 5, Have you every been hospitalized for COVID-19?
    //Yes/No. If no go to [1][4]. A ["choice", "choice"]
    RadioOnlyParseAndNext("No");

    //Question 6, Times Hospitalized for Covid
    //Questoin Type: ["choice", "choice", "choice", "input", "choice"]
    
//  [
//           "1 COVID hospitalization",
//           "2 COVID hospitalizations",
//           "3 COVID hospitalizations",
//           number between 4 - 10,
//           "Do not know"
//         ]
// TextInputandParseAndNext(
//   "Enter number of hospitalizations",
//   "9"
// );
    // RadioWithCustomParseAndNext("2 COVID hospitalizations");
    
    
    //Question Number: 7, Question: Most recent COVID Infection
    //Answer Format: "input"
    //options:  {
    //   "title": "Date:",
    //   "type": "date",
    //   "placeholder": "Enter date"
    // }
    //branching: null
    TextInputandParseAndNext("Enter date", "2023-03-29");
    
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
    RadioOnlyParseAndNext("No");

    //Number: 9
    // "Question": "Did you have a positive test result? “Positive” means the test showed COVID-19.",
    // "Answer Format": ["choice", "choice", "choice"],
    // "Options": ["Yes", "No", "Do not know"],
    // "Branching": null
    // RadioOnlyParseAndNext("Do not know");

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
    RadioOnlyParseAndNext("Quite a bit");

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
    RadioOnlyParseAndNext("Do not know");

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
    // cy.contains("Oral steroids, such a", { matchCase: false }).click();
    // cy.contains("Antibiotics,", { matchCase: false }).click();
    // cy.contains("Do not know", { matchCase: false }).click();
    // cy.get(`input[placeholder="Enter medication"]`) // Locate the input field by placeholder text
    //   .type("test Medicine A");
    // MultiChoiceParseAndNext("Antiviral pill, such as Paxlovid");
    // TextInputandParseAndNext("Enter medication", "test meds");

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
    RadioOnlyParseAndNext("No");

    //Number 15
    // "Question": "How long did it take for you to recover from your most recent infection?",
    // "Answer Format": "input",
    // "Options": {
    //   "type": "text",
    //   "title": "Days: ",
    //   "placeholder": "Enter number of days"
    // },
    // "Branching": null
    // TextInputandParseAndNext("Enter number of days", "85");

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
    RadioOnlyParseAndNext("No");

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

    // getDataTestIdAndSelectAndNext("dropdown-input", "5");
    // RadioWithCustomParseAndNext("Do not know");

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
    // cy.get(`input[placeholder="Enter date of shot"]`) // Locate the input field by placeholder text
    //   .type("08/22/2023");
    //   cy.contains("button", "Next").click();
    // TextInputandParseAndNext("Enter date of shot", "2023-03-29");
    // RadioWithCustomParseAndNext("Decline to answer");

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
    // TextInputandParseAndNext("Enter vaccine type", "Test Vaccines Yay!");
    // RadioWithCustomParseAndNext("Do not know");

    //Number 20
    // "Question": "In general, would you say your health is:",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioWithCustomParseAndNext("Poor");
    
    //Number 21
    // "Question": "In general, how would you rate your physical health?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair","Poor"],
    // "Branching": null
    RadioWithCustomParseAndNext("Poor");

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
    RadioWithCustomParseAndNext("Not at all");

    //Number 23
    // "Question": "In the past 7 days, how would you rate your fatigue (extreme tiredness resulting from mental or physical exertion or illness) on average?",
    // "Timeframe": "past 7 days",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["None", "Mild", "Moderate", "Severe", "Very Severe"],
    // "Branching": null
    RadioWithCustomParseAndNext("Severe");

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
    MultiChoiceClickArrayAndNext([
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
      "Problems with fertility, changes in your menstrual cycle, changes in menopause symptoms"
    ]);
    // MultiChoiceParseAndNext("Feeling faint");

    //Number: 26
    // "Question": "In general, over the last 2 weeks, how would you rate your quality of life?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null

    let choice = "Poor";
    RadioOnlyParseAndNext(choice);

    //Number: 27
    // "Question": "In general, over the last 2 weeks, how would you rate your mental health, including your mood and your ability to think?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext(choice);

    //Number: 28
    // "Question": "In general, over the last 2 weeks, how would you rate your satisfaction with your social activities and relationships?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext(choice);

    //Number: 29
    // "Question": "In general, over the last 2 weeks, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.)",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext(choice);

    //Number: 30
    // Question": "In the past 7 days, how often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Never", "Rarely", "Sometimes", "Often", "Always"],
    // "Branching": null
    RadioOnlyParseAndNext("Always");


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
    const testDataIds = ["0-3", "1-1", "2-2", "3-3", "4-1", "5-2", "6-3", "7-3"];
    clickRadioButtonsAndNext(testDataIds);
    
    //Number: 32 Scale Question
    // MultiChoiceParseAndNext("Heart problems");
    MultiChoiceClickArrayAndNext([
      "Heart problems, such as heart failure or arrhythmia (e.g., “atrial fibrillation”)",
      "Lung problems, such as asthma, COPD, fibrosis or interstitial lung disease",
      "Blood clots in the lung (“pulmonary embolism”), leg or arm (“deep vein thrombosis”)",
      "Sleep apnea or insomnia",
      "Memory or cognitive impairment or dementia",
      "Migraine or other headache disorder",
      "Stroke",
      "Seizure or epilepsy",
      "Kidney problems or kidney disease",
      "Stomach problems or gastrointestinal disease, like stomach ulcer or irritable bowel syndrome",
      "Psychological problems or psychiatric problems, like depression or anxiety or psychosis",
      "Diabetes",
      "Autoimmune diseases (such as systemic lupus, thyroid disease)",
      "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME-CFS), Postural Orthostatic Tachycardia Syndrome (POTS) or dysautonomia, or Ehlers Danlos Syndrome (EDS)",
      
      "Not sure",
      "No new diagnoses since the beginning of 2020"
    ]);

    //Number: 33 
    // "Question": "Do you think that you are experiencing, or have ever experienced, what has been called “long COVID” or symptoms related to COVID-19 at least a month after your infection?",
    // "Answer Format": ["choice", "choice", "choice"],
    // "Options": ["Yes", "No", "Do not know"],
    // "Branching": null
    RadioOnlyParseAndNext("Do not know");

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
    RadioOnlyParseAndNext("Not at all difficult");

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
    RadioOnlyParseAndNext("Student");


    cy.get('[data-testid="survey-certification"]')
  .scrollIntoView();

    cy.contains("I certify that the answers to the survey were completed by myself and are true and correct.", { matchCase: false }).click();


    cy.contains("button", "Next").click();
    cy.contains("button", "Skip").click();
    cy.contains("button", "Finish").click();

    cy.contains('Success', { timeout: 20000 }).should('be.visible');
  });
});