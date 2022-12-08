export type SummaryValues = {
  ranges: string[];
  values: number[];
};

export type SummaryDemos = {
  race: SummaryValues;
  sex: SummaryValues;
  age: SummaryValues;
};

export type YesNo = {
  yes: SummaryDemos;
  no: SummaryDemos;
};

export type YesNoDontKnow = {
  yes: SummaryDemos;
  no: SummaryDemos;
  doNotKnow: SummaryDemos;
};

export type OneToThreePlus = {
  one: SummaryDemos;
  two: SummaryDemos;
  three: SummaryDemos;
  threePlus: SummaryDemos;
  dontKnow: SummaryDemos;
};

export type OneToFivePlus = {
  one: SummaryDemos;
  two: SummaryDemos;
  three: SummaryDemos;
  four: SummaryDemos;
  five: SummaryDemos;
  fivePlus: SummaryDemos;
  dontKnow: SummaryDemos;
};

export type PoorToExcellent = {
  poor: SummaryDemos;
  fair: SummaryDemos;
  good: SummaryDemos;
  veryGood: SummaryDemos;
  excellent: SummaryDemos;
};

export type MedicationsAvailable = {
  antiViral: SummaryDemos;
  oralSteroids: SummaryDemos;
  antiBiotics: SummaryDemos;
  other: SummaryDemos;
  doNotKnow: SummaryDemos;
};

export type NeverToAlways = {
  never: SummaryDemos;
  rarely: SummaryDemos;
  sometimes: SummaryDemos;
  often: SummaryDemos;
  always: SummaryDemos;
};

export type VaccineType = {
  pfizer: SummaryDemos;
  moderna: SummaryDemos;
  janssen: SummaryDemos;
  novavax: SummaryDemos;
  other: SummaryDemos;
  doNotKnow: SummaryDemos;
};

export type SymptomsAvailable = {
  headache: SummaryDemos;
  bodyMuscleAche: SummaryDemos;
  feverChillsSweatsFlushing: SummaryDemos;
  faintDizzyGoofy: SummaryDemos;
  postExertionalMalaise: SummaryDemos;
  weaknessInArmsLegs: SummaryDemos;
  shortnessOfBreath: SummaryDemos;
  cough: SummaryDemos;
  palpitations: SummaryDemos;
  swellingOfLegs: SummaryDemos;
  indigestionNausea: SummaryDemos;
  bladderProblem: SummaryDemos;
  nerveProblems: SummaryDemos;
  brainFog: SummaryDemos;
  anxietyDepressionNightmares: SummaryDemos;
  difficultyFallingAsleep: SummaryDemos;
  sleepyDuringDaytime: SummaryDemos;
  loudSnoring: SummaryDemos;
  uncomfortableFeelingsInLegs: SummaryDemos;
  skinRash: SummaryDemos;
  lossOfChangeInSmell: SummaryDemos;
  excessiveThirst: SummaryDemos;
  excessiveDryMouth: SummaryDemos;
  visionProblems: SummaryDemos;
  hearingProblems: SummaryDemos;
  fertilityProblemsForWomen: SummaryDemos;
};
