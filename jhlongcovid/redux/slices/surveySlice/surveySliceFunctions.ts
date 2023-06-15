import { parseHeightIntoInches } from "../../../components/Survey/SurveyFunctions";
import { UserInfo } from "../../../components/Survey/SurveyWrapper";
import { SurveyType, VaccinationEntry } from "../../../src/API";
import { User } from "../../../src/API";

export type QuestionInfo = {
  questions: { section: number; question: number }[];
  answers: any[];
  schemas: any[];
  answerFormats: any[];
  options: any[];
};

type SectionInfo = {
  Demographics: QuestionInfo;
  CovidEntry: QuestionInfo;
  RecoveryEntry: QuestionInfo;
  VaccinationEntry: QuestionInfo;
  GlobalHealthEntry: QuestionInfo;
  PatientHealthEntry: QuestionInfo;
  SymptomEntry: QuestionInfo;
  SocialDeterminantsEntry: QuestionInfo;
};

export const processEntries = (
  surveyType: SurveyType,
  questionStack: any[],
  answerStack: any[],
  questions: any,
  user?: User
) => {
  let sectionQuestionInfo: SectionInfo = separatedSectionInfo(
    surveyType,
    questionStack,
    answerStack,
    questions
  );
  const demographics = sectionQuestionInfo.Demographics.answers[0];
  let entries: any = {};
  Object.keys(sectionQuestionInfo).forEach((value: string, index: number) => {
    if (value === "CovidEntry") {
      const sectionInfo = sectionQuestionInfo.CovidEntry;
      if (sectionQuestionInfo.CovidEntry.questions.length > 0) {
        entries[value] = processCovidEntry(sectionInfo, demographics, user);
      }
    } else if (value === "RecoveryEntry") {
      const sectionInfo = sectionQuestionInfo.RecoveryEntry;
      if (sectionQuestionInfo.RecoveryEntry.questions.length > 0) {
        entries[value] = processRecoveryEntry(sectionInfo, demographics, user);
      }
    } else if (value === "VaccinationEntry") {
      const sectionInfo = sectionQuestionInfo.VaccinationEntry;
      if (sectionQuestionInfo.VaccinationEntry.questions.length > 0) {
        entries[value] = processVaccinationEntry(
          sectionInfo,
          demographics,
          user
        );
      }
    } else if (value === "GlobalHealthEntry") {
      const sectionInfo = sectionQuestionInfo.GlobalHealthEntry;
      if (sectionQuestionInfo.GlobalHealthEntry.questions.length > 0) {
        entries[value] = processGlobalHealthEntry(
          sectionInfo,
          demographics,
          user
        );
      }
    } else if (value === "PatientHealthEntry") {
      const sectionInfo = sectionQuestionInfo.PatientHealthEntry;
      if (sectionQuestionInfo.PatientHealthEntry.questions.length > 0) {
        entries[value] = processPatientHealthEntry(
          sectionInfo,
          demographics,
          user
        );
      }
    } else if (value === "SymptomEntry") {
      const sectionInfo = sectionQuestionInfo.SymptomEntry;
      if (sectionQuestionInfo.SymptomEntry.questions.length > 0) {
        entries[value] = processSymptomEntry(sectionInfo, demographics, user);
      }
    } else if (value === "SocialDeterminantsEntry") {
      const sectionInfo = sectionQuestionInfo.SocialDeterminantsEntry;
      if (sectionQuestionInfo.SocialDeterminantsEntry.questions.length > 0) {
        entries[value] = processSocialDeterminantsEntry(
          sectionInfo,
          demographics
        );
      }
    }
  });

  return entries;
};

export const separatedSectionInfo = (
  surveyType: SurveyType,
  questionStack: any[],
  answerStack: any[],
  questions: any
) => {
  let sectionQuestionInfo: SectionInfo = {
    Demographics: {
      questions: [],
      answers: [],
      schemas: [],
      answerFormats: [],
      options: [],
    },
    CovidEntry: {
      questions: [],
      answers: [],
      schemas: [],
      answerFormats: [],
      options: [],
    },
    RecoveryEntry: {
      questions: [],
      answers: [],
      schemas: [],
      answerFormats: [],
      options: [],
    },
    VaccinationEntry: {
      questions: [],
      answers: [],
      schemas: [],
      answerFormats: [],
      options: [],
    },
    GlobalHealthEntry: {
      questions: [],
      answers: [],
      schemas: [],
      answerFormats: [],
      options: [],
    },
    PatientHealthEntry: {
      questions: [],
      answers: [],
      schemas: [],
      answerFormats: [],
      options: [],
    },
    SymptomEntry: {
      questions: [],
      answers: [],
      schemas: [],
      answerFormats: [],
      options: [],
    },
    SocialDeterminantsEntry: {
      questions: [],
      answers: [],
      schemas: [],
      answerFormats: [],
      options: [],
    },
  };
  for (var i = 0; i < questionStack.length; i++) {
    const questionInfo: { section: number; question: number } =
      questionStack[i];
    const answer = answerStack[i];
    let key = "";
    if (surveyType == SurveyType.GUEST) {
      if (questionInfo.section === 0 && questionInfo.question === 2) {
        sectionQuestionInfo.Demographics.questions.push(questionInfo);
        sectionQuestionInfo.Demographics.answers.push(answer);
      } else if (questionInfo.section === 1) {
        sectionQuestionInfo.CovidEntry.questions.push(questionInfo);
        sectionQuestionInfo.CovidEntry.answers.push(answer);
        sectionQuestionInfo.CovidEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.CovidEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.CovidEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      } else if (questionInfo.section === 2) {
        sectionQuestionInfo.RecoveryEntry.questions.push(questionInfo);
        sectionQuestionInfo.RecoveryEntry.answers.push(answer);
        sectionQuestionInfo.RecoveryEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.RecoveryEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.RecoveryEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      } else if (questionInfo.section === 3) {
        sectionQuestionInfo.VaccinationEntry.questions.push(questionInfo);
        sectionQuestionInfo.VaccinationEntry.answers.push(answer);
        sectionQuestionInfo.VaccinationEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.VaccinationEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.VaccinationEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      } else if (questionInfo.section === 4) {
        sectionQuestionInfo.GlobalHealthEntry.questions.push(questionInfo);
        sectionQuestionInfo.GlobalHealthEntry.answers.push(answer);
        sectionQuestionInfo.GlobalHealthEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.GlobalHealthEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.GlobalHealthEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      } else if (questionInfo.section === 5) {
        sectionQuestionInfo.SymptomEntry.questions.push(questionInfo);
        sectionQuestionInfo.SymptomEntry.answers.push(answer);
        sectionQuestionInfo.SymptomEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.SymptomEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.SymptomEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      } else if (questionInfo.section === 6) {
        sectionQuestionInfo.PatientHealthEntry.questions.push(questionInfo);
        sectionQuestionInfo.PatientHealthEntry.answers.push(answer);
        sectionQuestionInfo.PatientHealthEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.PatientHealthEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.PatientHealthEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      } else if (questionInfo.section === 7) {
        sectionQuestionInfo.SymptomEntry.questions.push(questionInfo);
        sectionQuestionInfo.SymptomEntry.answers.push(answer);
        sectionQuestionInfo.SymptomEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.SymptomEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.SymptomEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      } else if (questionInfo.section === 8) {
        sectionQuestionInfo.SocialDeterminantsEntry.questions.push(
          questionInfo
        );
        sectionQuestionInfo.SocialDeterminantsEntry.answers.push(answer);
        sectionQuestionInfo.SocialDeterminantsEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.SocialDeterminantsEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.SocialDeterminantsEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      }
    } else {
      if (questionInfo.section === 1) {
        sectionQuestionInfo.RecoveryEntry.questions.push(questionInfo);
        sectionQuestionInfo.RecoveryEntry.answers.push(answer);
        sectionQuestionInfo.RecoveryEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.RecoveryEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.RecoveryEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      } else if (questionInfo.section === 2) {
        sectionQuestionInfo.SymptomEntry.questions.push(questionInfo);
        sectionQuestionInfo.SymptomEntry.answers.push(answer);
        sectionQuestionInfo.SymptomEntry.schemas.push(
          questions[questionInfo.section][questionInfo.question].schemaInfo
        );
        sectionQuestionInfo.SymptomEntry.answerFormats.push(
          questions[questionInfo.section][questionInfo.question].answerFormat
        );
        sectionQuestionInfo.SymptomEntry.options.push(
          questions[questionInfo.section][questionInfo.question].options
        );
      }
    }
  }

  console.log("Section question info: ", sectionQuestionInfo);
  return sectionQuestionInfo;
};

export const processCovidEntry = (
  info: QuestionInfo,
  demographics?: UserInfo,
  user?: User
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics,
    user
  );
};

export const processRecoveryEntry = (
  info: QuestionInfo,
  demographics?: UserInfo,
  user?: User
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics,
    user
  );
};

export const processVaccinationEntry = (
  info: QuestionInfo,
  demographics?: UserInfo,
  user?: User
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics,
    user
  );
};

export const processGlobalHealthEntry = (
  info: QuestionInfo,
  demographics?: UserInfo,
  user?: User
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics,
    user
  );
};

export const processSymptomEntry = (
  info: QuestionInfo,
  demographics?: UserInfo,
  user?: User
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics,
    user,
    info.answerFormats
  );
};

export const processPatientHealthEntry = (
  info: QuestionInfo,
  demographics?: UserInfo,
  user?: User
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics,
    user,
    info.answerFormats,
    info.options
  );
};

export const processSocialDeterminantsEntry = (
  info: QuestionInfo,
  demographics?: UserInfo,
  user?: User
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics,
    user
  );
};

const createEntries = (
  questionStack: { section: number; question: number }[],
  schema: any[],
  answers: any,
  demographics?: UserInfo,
  user?: User,
  answerFormats?: any[],
  options?: any[]
) => {
  let entries: any;
  if (demographics) {
    entries = {
      age: demographics.age,
      race: demographics.race,
      sex: demographics.sex,
      height: parseHeightIntoInches(demographics.height),
      weight: demographics.weight,
    };
  } else if (user) {
    entries = {
      age: user.age,
      race: user.race,
      sex: user.sex,
      height: parseHeightIntoInches(user.height),
      weight: user.weight,
    };
  }
  for (var i = 0; i < questionStack.length; i++) {
    const s = schema[i];
    const a = answers[i];
    let af;
    let option;
    if (answerFormats) {
      af = answerFormats[i];
    }
    if (options) {
      option = options[i];
    }

    if (s) {
      if (af && af === "scale") {
        if (s.field === "generalHealthResults") {
          let genHealthResults: any = {};
          let totalScore = 0;
          for (var j = 0; j < option.length; j++) {
            let currOption = option[j];
            let phOption = patientHealthOptionsMap[currOption];
            genHealthResults[phOption] = toCamelCase(
              phq8Options[parseInt(a[j])]
            );
            totalScore += parseInt(a[j]);
          }

          entries[s.field] = genHealthResults;
          entries["totalScore"] = totalScore;
        }
        //   else {
        //     let reportedSymptoms = [];
        //     for (var j = 0; j < a.length; j++) {
        //       if (a[j] === "1") {
        //         const key: string = Object.keys(symptomsMap)[j];
        //         reportedSymptoms.push(symptomsMap[key] as string);
        //       }
        //     }
        //     entries[s.field] = reportedSymptoms;
        //   }
      } else if (s.type === "Int") {
        const splitAnswer = a.split(" ")[0];
        entries[s.field] = parseInt(splitAnswer);
      } else if (s.type === "Boolean") {
        if (a === "Yes") {
          entries[s.field] = true;
        } else if (a === "No") {
          entries[s.field] = false;
        } else {
          entries[s.field] = null;
        }
      } else if (s.type === "AWSDateTime") {
        entries[s.field] = new Date(a);
      } else {
        if (s.field === "medicalConditions") {
          const choices = a.choices.map((value: string) => {
            return medicalConditionsMap[value];
          });
          if (a.other !== "") {
            // a.choices.push(a.other);
            entries[s.field] = [...choices, "other"];
          } else {
            entries[s.field] = choices;
          }
        } else if (s.field === "medicationsTaken") {
          const choices = a.choices.map((value: string) => {
            return medicationsMap[value];
          });
          if (a.other !== "") {
            // a.choices.push(a.other);
            // TODO: MAKE SURE AHMED IS OKAY WITH USING OTHER
            entries[s.field] = [...choices, "other"];
          } else {
            entries[s.field] = choices;
          }
        } else if (s.field === "symptoms") {
          const choices = a.choices.map((value: string) => {
            return symptomsMap[value];
          });
          entries[s.field] = choices;
        } else if (s.field === "currentWorkSituation") {
          entries[s.field] = socialDeterminantsMap[a];
        } else {
          entries[s.field] = toCamelCase(a);
        }
      }
    }
  }
  return entries;
};

const phq8Options = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day",
];

const patientHealthOptionsMap: any = {
  "Little interest or pleasure in doing things?": "littleInterestThings",
  "Feeling down, depressed, or hopeless?": "downDepressedHopeless",
  "Trouble falling or staying asleep, or sleeping too much?": "sleepProblems",
  "Feeling tired or having little energy?": "tiredNoEnergy",
  "Poor appetite or overeating?": "dietProblems",
  "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?":
    "badAboutSelf",
  "Trouble concentrating on things, such as reading the newspaper or watching television?":
    "concentrationProblems",
  "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?":
    "slowOrRestless",
};

const socialDeterminantsMap: any = {
  "Working outside of the home": "atOffice",
  "Working outside the home as well as working remotely from home (“hybrid” work)":
    "hybrid",
  "Working remotely from home": "remote",
  "Working at home to provide childcare, eldercare and/or to maintain the home":
    "remoteAndParenting",
  "On leave from a job working outside the home (e.g, sick leave, family leave, maternity leave)":
    "onJobLeave",
  "Looking for work, unemployed": "unemployed",
  Retired: "retired",
  "Disabled, permanently or temporarily": "disability",
  Student: "student",
  "Do not know": "doNotKnow",
  "Prefer not to answer": "preferNotToAnswer",
};

const medicalConditionsMap: any = {
  "No new diagnoses since the beginning of 2020": "noNewDiagnosis",
  "Heart problems, such as heart failure or arrhythmia (e.g., “atrial fibrillation”)":
    "heartProblems",
  "Lung problems, such as asthma, COPD, fibrosis or interstitial lung disease":
    "lungProblems",
  "Blood clots in the lung (“pulmonary embolism”), leg or arm (“deep vein thrombosis”)":
    "bloodClotLung",
  "Sleep apnea or insomnia": "sleepApnea",
  "Memory or cognitive impairment or dementia": "memory",
  "Migraine or other headache disorder": "migraine",
  Stroke: "stroke",
  "Seizure or epilepsy": "seizure",
  "Kidney problems or kidney disease": "kidneyProblems",
  "Stomach problems or gastrointestinal disease, like stomach ulcer or irritable bowel syndrome":
    "stomachProblems",
  "Psychological problems or psychiatric problems, like depression or anxiety or psychosis":
    "psychologicalProblems",
  Diabetes: "diabetes",
  "Autoimmune diseases (such as systemic lupus, thyroid disease)":
    "autoImmuneDiseases",
  "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME-CFS), Postural Orthostatic Tachycardia Syndrome (POTS) or dysautonomia, or Ehlers Danlos Syndrome (EDS)":
    "mecfs",
  "Not sure": "notSure",
};

const symptomsMap: any = {
  Headache: "headache",
  "Body or muscle aches": "bodyMuscleAche",
  "Fever, chills, sweats or flushing": "feverChillsSweatsFlushing",
  "Feeling faint, dizzy, “goofy”; difficulty thinking soon after standing up from a sitting or lying position":
    "faintDizzyGoofy",
  "Feeling sick after you exert yourself physically or mentally (“post-exertional malaise”)":
    "postExertionalMalaise",
  "Weakness in arms or legs": "weaknessInArmsLegs",
  "Shortness of breath (trouble breathing)": "shortnessOfBreath",
  Cough: "cough",
  "Palpitations, racing heart, arrhythmia, or skipped beats": "palpitations",
  "Swelling of your legs": "swellingOfLegs",
  "Indigestion, nausea, feeling uncomfortably full or vomiting after eating, diarrhea, or constipation":
    "indigestionNausea",
  "Bladder problems including incontinence, trouble passing urine or emptying bladder":
    "bladderProblem",
  "Nerve problems including tremor, shaking, numbness, tingling, or burning":
    "nerveProblems",
  "Problems thinking or concentrating (“brain fog”)": "brainFog",
  "Problems with anxiety, depression, stress or trauma-related symptoms like nightmares or grief":
    "anxietyDepressionNightmares",
  "Difficulty falling asleep, difficulty staying asleep, or early morning awakenings, 3 or more times per week":
    "difficultyFallingAsleep",
  "Feeling sleepy, trouble staying awake during the daytime, or falling asleep during the day when you do not intend to, 3 or more times per week":
    "sleepyDuringDaytime",
  "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week":
    "loudSnoring",
  "Uncomfortable feelings in your legs (creepy, crawling feeling) that make you want to move your legs, that are worse at night and improved with movement":
    "uncomfortableFeelingsInLegs",
  "Skin rash": "skinRash",
  "Loss of or change in smell or taste": "lossOfChangeInSmell",
  "Excessive thirst": "excessiveThirst",
  "Excessively dry mouth": "excessiveDryMouth",
  "Vision problems (blurry, light sensitivity, difficult reading or focusing, floaters, flashing lights, “snow”)":
    "visionProblems",
  "Problems with hearing (hearing loss, ringing in ears)": "hearingProblems",
  "Problems with fertility, changes in your menstrual cycle, changes in menopause symptoms":
    "fertilityProblemsForWomen",
};

const medicationsMap: any = {
  "Antiviral pill, such as Paxlovid": "antiviral",
  "Oral steroids, such as dexamethasone, prednisone, or prednisolone":
    "oralSteroids",
  'Antibiotics, such as a "Z-pak"': "antibiotics",
  "Do not know": "doNotKnow",
};

const toCamelCase = (str: string) => {
  // Remove any punctuation from the string
  const cleanString = str.replace(/[^\w\s]/gi, "");

  // Split the string into words
  const words = cleanString.split(" ");

  // Loop through the words and convert them to camel case
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      // If it's the first word, just return it as-is
      return word.toLowerCase();
    } else {
      // For all other words, capitalize the first letter and lowercase the rest
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  // Join the words back together into a single string
  return camelCaseWords.join("");
};
