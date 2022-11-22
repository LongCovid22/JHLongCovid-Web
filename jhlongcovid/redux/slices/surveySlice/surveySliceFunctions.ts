import { UserInfo } from "../../../components/Survey/SurveyWrapper";
import { VaccinationEntry } from "../../../src/API";

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
  SymptomsEntry: QuestionInfo;
  SocialDeterminantsEntry: QuestionInfo;
};

export const processEntries = (
  questionStack: any[],
  answerStack: any[],
  questions: any
) => {
  let sectionQuestionInfo: SectionInfo = separatedSectionInfo(
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
        entries[value] = processCovidEntry(sectionInfo, demographics);
      }
    } else if (value === "RecoveryEntry") {
      const sectionInfo = sectionQuestionInfo.RecoveryEntry;
      if (sectionQuestionInfo.RecoveryEntry.questions.length > 0) {
        entries[value] = processRecoveryEntry(sectionInfo, demographics);
      }
    } else if (value === "VaccinationEntry") {
      const sectionInfo = sectionQuestionInfo.VaccinationEntry;
      if (sectionQuestionInfo.VaccinationEntry.questions.length > 0) {
        entries[value] = processVaccinationEntry(sectionInfo, demographics);
      }
    } else if (value === "GlobalHealthEntry") {
      const sectionInfo = sectionQuestionInfo.GlobalHealthEntry;
      if (sectionQuestionInfo.GlobalHealthEntry.questions.length > 0) {
        entries[value] = processGlobalHealthEntry(sectionInfo, demographics);
      }
    } else if (value === "PatientHealthEntry") {
      const sectionInfo = sectionQuestionInfo.PatientHealthEntry;
      if (sectionQuestionInfo.PatientHealthEntry.questions.length > 0) {
        entries[value] = processPatientHealthEntry(sectionInfo, demographics);
      }
    } else if (value === "SymptomsEntry") {
      const sectionInfo = sectionQuestionInfo.SymptomsEntry;
      if (sectionQuestionInfo.SymptomsEntry.questions.length > 0) {
        entries[value] = processSymptomEntry(sectionInfo, demographics);
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
    SymptomsEntry: {
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
      sectionQuestionInfo.SymptomsEntry.questions.push(questionInfo);
      sectionQuestionInfo.SymptomsEntry.answers.push(answer);
      sectionQuestionInfo.SymptomsEntry.schemas.push(
        questions[questionInfo.section][questionInfo.question].schemaInfo
      );
      sectionQuestionInfo.SymptomsEntry.answerFormats.push(
        questions[questionInfo.section][questionInfo.question].answerFormat
      );
      sectionQuestionInfo.SymptomsEntry.options.push(
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
      sectionQuestionInfo.SymptomsEntry.questions.push(questionInfo);
      sectionQuestionInfo.SymptomsEntry.answers.push(answer);
      sectionQuestionInfo.SymptomsEntry.schemas.push(
        questions[questionInfo.section][questionInfo.question].schemaInfo
      );
      sectionQuestionInfo.SymptomsEntry.answerFormats.push(
        questions[questionInfo.section][questionInfo.question].answerFormat
      );
      sectionQuestionInfo.SymptomsEntry.options.push(
        questions[questionInfo.section][questionInfo.question].options
      );
    } else if (questionInfo.section === 8) {
      sectionQuestionInfo.SocialDeterminantsEntry.questions.push(questionInfo);
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
  }

  return sectionQuestionInfo;
};

export const processCovidEntry = (
  info: QuestionInfo,
  demographics: UserInfo
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics
  );
};

export const processRecoveryEntry = (
  info: QuestionInfo,
  demographics: UserInfo
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics
  );
};

export const processVaccinationEntry = (
  info: QuestionInfo,
  demographics: UserInfo
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics
  );
};

export const processGlobalHealthEntry = (
  info: QuestionInfo,
  demographics: UserInfo
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics
  );
};

export const processSymptomEntry = (
  info: QuestionInfo,
  demographics: UserInfo
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics,
    info.answerFormats
  );
};

export const processPatientHealthEntry = (
  info: QuestionInfo,
  demographics: UserInfo
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics,
    info.answerFormats,
    info.options
  );
};

export const processSocialDeterminantsEntry = (
  info: QuestionInfo,
  demographics: UserInfo
) => {
  return createEntries(
    info.questions,
    info.schemas,
    info.answers,
    demographics
  );
};

const createEntries = (
  questionStack: { section: number; question: number }[],
  schema: any[],
  answers: any,
  demographics: UserInfo,
  answerFormats?: any[],
  options?: any[]
) => {
  let entries: any = {
    age: demographics.age,
    race: demographics.race,
    sex: demographics.sex,
    height: demographics.height,
    weight: demographics.weight,
  };
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

    if (af && af === "scale") {
      if (s.field === "generalHealthResults") {
        let genHealthResults: any = {};
        let totalScore = 0;
        for (var j = 0; j < option.length; j++) {
          let currOption = option[j];
          genHealthResults[currOption] = phq8Options[parseInt(a[j])];
          totalScore += parseInt(a[j]);
        }

        entries[s.field] = genHealthResults;
        entries["totalScore"] = totalScore;
      } else {
        let reportedSymptoms = [];
        for (var j = 0; j < a.length; j++) {
          if (a[j] === "1") {
            reportedSymptoms.push(symptoms[j]);
          }
        }

        entries[s.field] = reportedSymptoms;
      }
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
        if (a.other !== "") {
          // a.choices.push(a.other);
          entries[s.field] = [...a.choices, a.other];
        } else {
          entries[s.field] = a.choices;
        }
      } else if (s.field === "medicationsTaken") {
        if (a.other !== "") {
          // a.choices.push(a.other);
          entries[s.field] = [...a.choices, a.other];
        } else {
          entries[s.field] = a.choices;
        }
      } else {
        entries[s.field] = a;
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

const symptoms = [
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
];
