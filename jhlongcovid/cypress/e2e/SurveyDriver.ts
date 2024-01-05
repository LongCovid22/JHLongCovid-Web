import { SurveyType } from "./types/surveyType";
import {
  BeingSurveyTest,
  ConsentParseAndNext,
  DemographicsParseAndNext,
  RadioOnlyParseAndNext,
  RadioWithCustomParseAndNext,
  MultiChoiceParseAndNext,
  TextInputandParseAndNext,
  clickRadioButtonsAndNext,
  goNext,
  getDataTestIdAndSelectAndNext,
  getRandomVaccine,
  MultiChoiceClickArrayAndNext,
} from "./helper";

let skipQuestionUntil = 0;

import {
  YESNO,
  YESNODONOTKNOW,
  NUMCOVIDVACCINESHOTS,
  PAINLEVEL,
  EXCELLENTTOPOOR,
  COMPLETELYTONOTATALL,
  NONETOVERYSEVERE,
  NEVERTOALWAYS,
  NOTATALLTOVERYMUCH,
  DIFFICULTYOFPAYING,
  WORKSITUATION,
  NUMOFINFECTIONSTYPE,
  NUMHOSPITALIZATIONS,
  NUMOFHOSPITALIZATIONSTYPE,
  MEDICATIONSTYPE,
  COVIDVACCINETYPE,
  NUMOFINFECTIONS,
  isMedication,
  COVIDVACCINES
} from "./types/answerTypes";
import { DAYS, MONTH, YEARS } from "./types/dateTypes";

function Start() {
  //make this into a matrix\
  //verify that the logic follows the surveylogic.json
  //Test out different (random) variants of the answers -- create fake profiles
  BeingSurveyTest();
  ConsentParseAndNext("leo.hubert3@gmail.com");
  DemographicsParseAndNext("16", "Male", "6", "3", "150", "White", "21218");
}

function End() {
  cy.get('[data-testid="survey-certification"]').scrollIntoView();
  cy.contains(
    "I certify that the answers to the survey were completed by myself and are true and correct.",
    { matchCase: false }
  ).click();

  cy.contains("button", "Next").click();
  cy.contains("button", "Skip").click();
  cy.contains("button", "Finish").click();

  cy.contains("Success", { timeout: 60000 }).should("be.visible");
}

function RadioOnlyParseAndNextWithSkipQuestion(
  answer: string,
  answerConditional: string[],
  newSkipQuestionUntilConditional: number
) {
  RadioOnlyParseAndNext(answer);
  if (answerConditional.includes(answer)) {
    skipQuestionUntil = newSkipQuestionUntilConditional;
  }
}

function handleYesNoYesNoDoNotKnow(answer: YESNO | YESNODONOTKNOW) {
  RadioOnlyParseAndNext(answer);
}

function handleYesNoYesNoDoNotKnowWithSkip(
  answer: YESNO | YESNODONOTKNOW,
  skiparray: YESNO[] | YESNODONOTKNOW[],
  skipuntil: number
) {
  RadioOnlyParseAndNextWithSkipQuestion(answer, skiparray, skipuntil);
}

function parseQuestionTwo(answer: NUMOFINFECTIONSTYPE) {
  if (typeof answer === "number") {
    TextInputandParseAndNext("Enter number of infections", answer.toString());
  } else {
    RadioWithCustomParseAndNext(answer);
  }
}

function handleValidDates(
  placeholder: string,
  year: YEARS,
  month: MONTH,
  day: DAYS
) {
  TextInputandParseAndNext(
    placeholder,
    year.toString() + "-" + month.toString() + "-" + day.toString()
  );
}

function driveSurvey(answers: SurveyType) {
  skipQuestionUntil = 0;
  Start();

  //Question #3, Are you infected with COVID?
  if (1 >= skipQuestionUntil) {
    handleYesNoYesNoDoNotKnowWithSkip(
      answers?.CovidEntry?.Infection ?? YESNO.YES,
      [YESNO.NO],
      14
    );
  }

  if (2 >= skipQuestionUntil) {
    if (typeof answers?.CovidEntry?.NumOfInfections === "number") {
      TextInputandParseAndNext(
        "Enter number of infections",
        answers?.CovidEntry?.NumOfInfections.toString()
      );
    } else {
      RadioWithCustomParseAndNext(
        answers?.CovidEntry?.NumOfInfections ?? NUMOFINFECTIONS.DONOTKNOW
      );
    }
  }

  //Question 5, Have you ever been hospitalized for COVID-19?
  //Yes/No. If no go to [1][4]. A ["choice", "choice"]
  if (3 >= skipQuestionUntil) {
    RadioOnlyParseAndNextWithSkipQuestion(
      answers?.CovidEntry?.Hospitalized ?? YESNO.YES,
      ["No"],
      5
    );
  }

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
  if (4 >= skipQuestionUntil) {
    if (typeof answers?.CovidEntry?.TimesHospitalized === "number") {
      TextInputandParseAndNext(
        "Enter number of hospitalizations",
        answers?.CovidEntry?.TimesHospitalized?.toString()
      );
    } else {
      RadioWithCustomParseAndNext(
        answers?.CovidEntry?.TimesHospitalized ?? NUMHOSPITALIZATIONS.ONE
      );
    }
  }

  //Question Number: 7, Question: Most recent COVID Infection
  if (5 >= skipQuestionUntil) {
    handleValidDates(
      "Enter date",
      answers?.CovidEntry?.LastInfected?.year ?? YEARS.twentytwentythree,
      answers?.CovidEntry?.LastInfected?.month ?? MONTH.November,
      answers?.CovidEntry?.LastInfected?.day ?? DAYS.twentyseven
    );
  }
  //Number: 8 "Question": "Did you take a COVID-19 test at that time?",
  if (6 >= skipQuestionUntil) {
    handleYesNoYesNoDoNotKnowWithSkip(
      answers?.CovidEntry?.CovidTest ?? YESNO.YES,
      [YESNO.NO],
      8
    );
  }

  //Number: 9 "Question": "Did you have a positive test result? "Positive" means the test showed COVID-19.",
  if (7 >= skipQuestionUntil) {
    handleYesNoYesNoDoNotKnow(answers?.CovidEntry?.PositiveTest ?? YESNO.YES);
  }

  //Number: 10 "Question": "Did you have any COVID-19 symptoms, such as fever, cough, sore throat, or other symptoms?",
  if (8 >= skipQuestionUntil) {
    handleYesNoYesNoDoNotKnowWithSkip(
      answers?.CovidEntry?.CovidSymptomatic ?? YESNO.YES,
      [YESNO.NO],
      10
    );
  }

  if (9 >= skipQuestionUntil) {
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
    RadioOnlyParseAndNext(answers?.CovidEntry?.PreventDailyActivities ?? NOTATALLTOVERYMUCH.ALITTLEBIT);
  }

  if (10 >= skipQuestionUntil) {
    //Number: 12
    // "Question": "Did a doctor or other health care professional prescribe any medications for you to take when you had COVID-19?",
    handleYesNoYesNoDoNotKnowWithSkip(
      answers?.CovidEntry?.MedicationsPrescribed ?? YESNODONOTKNOW.YES,
      [YESNODONOTKNOW.NO, YESNODONOTKNOW.DONOTKNOW],
      12
    );
  }

  if (11 >= skipQuestionUntil) {
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
    //   "Antibiotics, such as a "Z-pak"",
    //   {
    //     "type": "text",
    //     "title": "Other",
    //     "placeholder": "Enter medication"
    //   },
    //   "Do not know"
    // ],
    // "Branching": null

    let medications = [];

    let MedicationsSpecified = answers?.CovidEntry?.MedicationsSpecified ?? [];

    let otherMedCount = 0;
    let otherMed = "";

    for (let i = 0; i < MedicationsSpecified.length; i++) {
      if (isMedication(MedicationsSpecified[i])) {
        medications.push(MedicationsSpecified[i]);
      } else {
        otherMed = MedicationsSpecified[i];
        otherMedCount++;
        if (otherMedCount === 2) {
          throw new Error("Incorrect input in medications prescribed array, more than one other medicine!");
        }
      }
    }
    if (otherMed !== "") {
      cy.get(`input[placeholder="Enter medication"]`) // Locate the input field by placeholder text
      .type(otherMed);
    }

    if (medications.length > 0) {
      medications.forEach((value) => {
        cy.contains(value, { matchCase: false }).click();
      })
    }
    cy.contains("button", "Next").click();
  }

  if (12 >= skipQuestionUntil) {
    //Number 14
    // "Question": "Would you say that you are completely recovered from COVID-19 now?",
    handleYesNoYesNoDoNotKnowWithSkip(
      answers?.RecoveryEntry?.CompleteRecovery ?? YESNO.YES,
      [YESNO.NO],
      14
    );
  }
  if (13 >= skipQuestionUntil) {
    //Number 15 "Question": "How long did it take for you to recover from your most recent infection?",
    TextInputandParseAndNext(
      "Enter number of days",
      answers?.RecoveryEntry?.LastPositive?.toString() ?? "22"
    );
  }

  if (14 >= skipQuestionUntil) {
    //Number 16 "Question": "Have you ever been vaccinated against COVID-19?",
    handleYesNoYesNoDoNotKnowWithSkip(
      answers?.VaccinationEntry?.VaccinationStatus ?? YESNODONOTKNOW.YES,
      [YESNODONOTKNOW.NO],
      18
    );
  }

  if (15 >= skipQuestionUntil) {
    //Number 17
    // "Question": "In total, how many COVID-19 vaccine shots have you received?",
    // "Answer Format": [
    //   "input",
    //   "choice"
    // ],

    if (answers?.VaccinationEntry?.NumVaccinationShots === "Do not know") {
      RadioWithCustomParseAndNext(answers.VaccinationEntry.NumVaccinationShots);
    } else {
      getDataTestIdAndSelectAndNext("dropdown-input", answers?.VaccinationEntry?.NumVaccinationShots ?? NUMCOVIDVACCINESHOTS.ONE);
    }
    
  }
  if (16 >= skipQuestionUntil) {
    //Number 18
    // "Question": "When was your most recent COVID-19 shot?",
    // "Answer Format": [
    //   "input",
    //   "choice",
    //   "choice"
    // ],
    if (answers?.VaccinationEntry?.VaccinationDate === "Unsure" || answers?.VaccinationEntry?.VaccinationDate === "Decline to answer") {
      RadioWithCustomParseAndNext(answers?.VaccinationEntry?.VaccinationDate);
    } else {
      let date = answers?.VaccinationEntry?.VaccinationDate;
      handleValidDates("Enter date of shot", date?.year ?? YEARS.twentytwentythree,
      date?.month ?? MONTH.November,
      date?.day ?? DAYS.twentyseven );
    }    
  }
  if (17 >= skipQuestionUntil) {
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

    let vaccineType = answers?.VaccinationEntry?.VaccineType;
    if (vaccineType === COVIDVACCINES.PFIZER || vaccineType === COVIDVACCINES.MODERNA || vaccineType === COVIDVACCINES.JANSSEN || vaccineType === COVIDVACCINES.NOVAVAX || vaccineType === COVIDVACCINES.MODERNA) {
      RadioWithCustomParseAndNext(vaccineType);
    } else {
      TextInputandParseAndNext("Enter vaccine type", vaccineType ?? COVIDVACCINES.PFIZER);
    }    
  }


  if (18 >= skipQuestionUntil) {
    //Number 20
    // "Question": "In general, would you say your health is:",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioWithCustomParseAndNext(answers?.GlobalHealthEntry?.GeneralHealth ?? EXCELLENTTOPOOR.EXCELLENT);
  }

  if (19 >= skipQuestionUntil) {
    //Number 21
    // "Question": "In general, how would you rate your physical health?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair","Poor"],
    // "Branching": null
    RadioWithCustomParseAndNext(answers?.GlobalHealthEntry?.PhysicalHealth ?? EXCELLENTTOPOOR.EXCELLENT);
  }
  if (20 >= skipQuestionUntil) {
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
    RadioWithCustomParseAndNext(answers?.GlobalHealthEntry?.CarryOutPhysicalActivities ?? COMPLETELYTONOTATALL.COMPLETELY);
  }
  if (21 >= skipQuestionUntil) {
    //Number 23
    // "Question": "In the past 7 days, how would you rate your fatigue (extreme tiredness resulting from mental or physical exertion or illness) on average?",
    // "Timeframe": "past 7 days",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["None", "Mild", "Moderate", "Severe", "Very Severe"],
    // "Branching": null
    RadioWithCustomParseAndNext(answers?.GlobalHealthEntry?.Fatigue ?? NONETOVERYSEVERE.NONE);
  }
  if (22 >= skipQuestionUntil) {
    //Number 24 //how to slide teh pain level
    cy.contains("button", "Next").click();
  }

  if (24 >= skipQuestionUntil) {
    //Number: 26
    // "Question": "In general, over the last 2 weeks, how would you rate your quality of life?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext(
      answers?.SymptomEntry?.QualityOfLife ?? EXCELLENTTOPOOR.EXCELLENT
    );
  }
  if (25 >= skipQuestionUntil) {
    //Number: 27
    // "Question": "In general, over the last 2 weeks, how would you rate your mental health, including your mood and your ability to think?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext(
      answers?.SymptomEntry?.MentalHealth ?? EXCELLENTTOPOOR.EXCELLENT
    );
  }
  if (26 >= skipQuestionUntil) {
    //Number: 28
    // "Question": "In general, over the last 2 weeks, how would you rate your satisfaction with your social activities and relationships?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext(
      answers?.SymptomEntry?.SocialActivitiesAndRelationships ??
        EXCELLENTTOPOOR.EXCELLENT
    );
  }
  if (27 >= skipQuestionUntil) {
    //Number: 29
    // "Question": "In general, over the last 2 weeks, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.)",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
    // "Branching": null
    RadioOnlyParseAndNext(
      answers?.SymptomEntry?.SocialActivitiesAndRoles ??
        EXCELLENTTOPOOR.EXCELLENT
    );
  }

  if (28 >= skipQuestionUntil) {
    //Number: 30
    // Question": "In the past 7 days, how often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?",
    // "Answer Format": ["choice", "choice", "choice", "choice", "choice"],
    // "Options": ["Never", "Rarely", "Sometimes", "Often", "Always"],
    // "Branching": null
    RadioOnlyParseAndNext(
      answers?.SymptomEntry?.EmotionalProblems ?? NEVERTOALWAYS.NEVER
    );
  }

  

  if (31 >= skipQuestionUntil) {
    //Number: 33
    // "Question": "Do you think that you are experiencing, or have ever experienced, what has been called “long COVID” or symptoms related to COVID-19 at least a month after your infection?",
    // "Answer Format": ["choice", "choice", "choice"],
    // "Options": ["Yes", "No", "Do not know"],
    // "Branching": null
    RadioOnlyParseAndNext(
      answers?.SymptomEntry?.LongCovid ?? YESNODONOTKNOW.YES
    );
  }

  if (32 >= skipQuestionUntil) {
    //Number: 34
    // "Question": "Do you currently have some form of health insurance to help pay for medical bills?",
    // "Answer Format": ["choice", "choice"],
    // "Options": ["Yes", "No"],
    // "Branching": null
    RadioOnlyParseAndNext(
      answers?.SocialDeterminantsEntry?.HealthInsurance ?? YESNO.YES
    );
  }
  if (33 >= skipQuestionUntil) {
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
    RadioOnlyParseAndNext(
      answers?.SocialDeterminantsEntry?.PaymentDifficulty ??
        DIFFICULTYOFPAYING.DONOTKNOW
    );
  }
  if (34 >= skipQuestionUntil) {
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
    //   "Working remotely from home",//   "Working at home to provide childcare, eldercare and/or to maintain the home",
    //   "On leave from a job working outside the home (e.g, sick leave, family leave, maternity leave)",
    //   "Looking for work, unemployed",
    //   "Retired",
    //   "Disabled, permanently or temporarily",
    //   "Student",
    //   "Don't know",
    //   "Prefer not to answer"
    // ],
    // "Branching": null
    RadioOnlyParseAndNext(
      answers.SocialDeterminantsEntry?.WorkSituation ?? WORKSITUATION.DISABLED
    );
  }

  End();
}
