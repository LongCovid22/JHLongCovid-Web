const checkNotNullNumberGreaterThanZero = (num) => {
  return num != null && typeof num === "number" && num >= 0;
};
const checkNotNullAndBoolType = (num) => {
  return num != null && typeof num === "boolean";
};

const checkNotNullAndStringType = (num) => {
  return num != null && typeof num === "string";
};

const checkNotAtAllToVeryMuchType = (num) => {
  return (
    num === "notAtAll" ||
    num === "alittleBit" ||
    num === "somewhat" ||
    num === "quiteABit" ||
    num === "veryMuch"
  );
};

const checkYesNoDoNotKnowType = (num) => {
  return num === "yes" || num === "no" || num === "doNotKnow";
};

const checkMedicationsTakenType = (arr) => {
  let allowed = [
    "antiViral",
    "oralSteroids",
    "antiBiotics",
    "other",
    "doNotKnow",
  ];
  return arr.some((item) => allowed.includes(item));
};

const checkVaccineType = (str) => {
  let allowed = [
    "pfizer",
    "moderna",
    "janssen",
    "novavax",
    "doNotKnow",
  ];
  return allowed.includes(str);
};

const checkExcellentToPoor = (str) => {
  let allowed = ["excellent", "veryGood", "good", "fair", "poor"];
  return allowed.includes(str);
};

const checkNeverToAlways = (str) => {
  let allowed = ["never", "rarely", "sometimes", "often", "always"];
  return allowed.includes(str);
};

const checkNotAtAllToNearlyEveryDay = (str) => {
  let allowed = [
    "notAtAll",
    "severalDays",
    "moreThanHalfTheDays",
    "nearlyEveryDay",
  ];
  return allowed.includes(str);
};

const checkCompletelyToNotAtAll = (str) => {
  let allowed = ["completely", "mostly", "moderately", "aLittle", "notAtAll"];
  return allowed.includes(str);
};

const checkNoneToVerySevere = (str) => {
  let allowed = ["none", "mild", "moderate", "severe", "verySevere"];
  return allowed.includes(str);
};

const checkIsNumAndBetweenOneAndTen = (num) => {
  return typeof num === "number" && num >= 1 && num <= 10;
};

const checkSymptomStringArray = (array) => {
  let allowed = [
    "headache",
    "bodyMuscleAche",
    "feverChillsSweatsFlushing",
    "faintDizzyGoofy",
    "postExertionalMalaise",
    "weaknessInArmsLegs",
    "shortnessOfBreath",
    "cough",
    "palpitations",
    "swellingOfLegs",
    "indigestionNausea",
    "bladderProblem",
    "nerveProblems",
    "brainFog",
    "anxietyDepressionNightmares",
    "difficultyFallingAsleep",
    "sleepyDuringDaytime",
    "loudSnoring",
    "uncomfortableFeelingsInLegs",
    "skinRash",
    "lossOfChangeInSmell",
    "excessiveThirst",
    "excessiveDryMouth",
    "visionProblems",
    "hearingProblems",
    "fertilityProblemsForWomen",
  ];
  if (Array.isArray(array) === false) {
    return false;
  }
  for (const obj of array) {
    if (typeof obj !== "string" || allowed.includes(obj) === false) {
      return false;
    }
  }
  return true;
};

const checkMedicalConditionsArray = (array) => {
  let allowed = [
    "noNewDiagnosis",
    "heartProblems",
    "lungProblems",
    "bloodClotLung",
    "sleepApnea",
    "memory",
    "migraine",
    "stroke",
    "seizure",
    "kidneyProblems",
    "stomachProblems",
    "psychologicalProblems",
    "diabetes",
    "autoImmuneDiseases",
    "mecfs",
    "other",
    "notSure",
  ];
  if (Array.isArray(array) === false) {
    return false;
  }
  for (const obj of array) {
    if (typeof obj !== "string" || allowed.includes(obj) === false) {
      return false;
    }
  }
  return true;
};

const checkDifficultCoveringExpensesType = (str) => {
  let allowed = [
    "veryDifficult",
    "somewhatDifficult",
    "notAtAllDifficult",
    "doNotKnow",
    "preferNotToAnswer",
  ];
  return allowed.includes(str);
};

const checkCurrentWorkSituationType = (str) => {
  let allowed = [
    "atOffice",
    "hybrid",
    "remote",
    "remoteAndParenting",
    "onJobLeave",
    "unemployed",
    "retired",
    "disability",
    "student",
    "doNotKnow",
    "preferNotToAnswer",
  ];
  return allowed.includes(str);
};

const trueEqualsYes = (bool) => {
  return bool ? "yes" : "no";
};

const resolveOneToFiveType = (num) => {
  let property;
  switch (num) {
    case 0:
      property = "doNotKnow";
      break;
    case 1:
      property = "one";
      break;
    case 2:
      property = "two";
      break;
    case 3:
      property = "three";
      break;
    case 4:
      property = "four";
      break;
    case 5:
      property = "five";
      break;
    default:
      property = "fivePlus";
  }
  return property;
};

const resolveOneToThreePlus = (num) => {
  let property;
  switch (num) {
    case 0:
      property = "doNotKnow";
      break;
    case 1:
      property = "one";
      break;
    case 2:
      property = "two";
      break;
    case 3:
      property = "three";
      break;
    default:
      property = "threePlus";
  }

  return property;
};

module.exports = {
  checkIsNumAndBetweenOneAndTen,
  checkNeverToAlways,
  checkNotAtAllToNearlyEveryDay,
  checkCompletelyToNotAtAll,
  checkNoneToVerySevere,
  checkExcellentToPoor,
  checkSymptomStringArray,
  checkMedicalConditionsArray,
  checkDifficultCoveringExpensesType,
  checkCurrentWorkSituationType,
  checkVaccineType,
  trueEqualsYes,
  resolveOneToFiveType,
  resolveOneToThreePlus,
  checkMedicationsTakenType,
  checkYesNoDoNotKnowType,
  checkNotAtAllToVeryMuchType,
  checkNotNullAndStringType,
  checkNotNullAndBoolType,
  checkNotNullNumberGreaterThanZero,
};
