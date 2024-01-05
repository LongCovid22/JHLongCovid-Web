//smiilar to answerTypes.ts, for more specific type checking and answer providing for cypress testing purposes

export enum YESNO {
  YES = "Yes",
  NO = "No"
}

export enum YESNODONOTKNOW {
  YES = "Yes",
  NO = "No",
  DONOTKNOW = "Do not know"
}

export enum NUMOFINFECTIONS {
  ONE = "1 infection",
  TWO = "2 infections",
  THREE = "3 infections",
  GREATERTHANTHREE = "More than 3 infections",
  DONOTKNOW = "Do not know"
}

export type NUMOFINFECTIONSTYPE = NUMOFINFECTIONS | number;

export enum NUMHOSPITALIZATIONS {
  ONE = "1 COVID",
  TWO = "2 COVID",
  THREE = "3 COVID",
  GREATERTHANTHREE = "More than 3",
  DONOTKNOW = "Do not know"
}

export type NUMOFHOSPITALIZATIONSTYPE = NUMHOSPITALIZATIONS | number;

export enum MEDICATIONS {
  ANTIVIRAL = "Antiviral pill",
  ORALSTEROIDS = "Oral steroids",
  ANTIBIOTICS = "Antibiotics",
  DONOTKNOW = "Do not know"
}

export function isMedication(value: string): value is MEDICATIONS {
  return Object.values(MEDICATIONS).includes(value as MEDICATIONS);
}

export type MEDICATIONSTYPE = MEDICATIONS | string;

export enum NUMCOVIDVACCINESHOTS {
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  FIVEPLUS = "More Than 5",
  DONOTKNOW = "Do not know"
}

export enum COVIDVACCINES {
  PFIZER = "Pfizer",
  MODERNA = "Moderna",
  JANSSEN = "Janssen",
  NOVAVAX = "novavax",
  DONOTKNOW = "Do not know"
}

export type COVIDVACCINETYPE = COVIDVACCINES | string;

export enum PAINLEVEL {
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  TEN = "10",
}


export enum EXCELLENTTOPOOR {
  EXCELLENT = "Excellent",
  VERYGOOD = "Very Good",
  GOOD = "Good",
  FAIR = "Fair",
  POOR = "Poor",
}


export enum COMPLETELYTONOTATALL {
  COMPLETELY = "Completely",
  MOSTLY = "Mostly",
  MODERATELY = "Moderately",
  ALITTLE = "A little",
  NOTATALL = "Not at all",
}

export enum NONETOVERYSEVERE {
  NONE = "None",
  MILD = "Mild",
  MODERATE = "Moderate",
  SEVERE = "Severe",
  VERYSEVERE = "Very Severe",
}

export enum NEVERTOALWAYS {
  NEVER = "Never",
  RARELY = "Rarely",
  SOMETIMES = "Sometimes",
  OFTEN = "Often",
  ALWAYS = "Always",
}  

export enum NOTATALLTOVERYMUCH {
  NOTATALL = "Not at all",
  ALITTLEBIT = "A little bit",
  SOMEWHAT = "Somewhat",
  QUITEABIT = "Quite a bit",
  VERYMUCH = "Very much",
}

export enum DIFFICULTYOFPAYING {
  VERYDIFFICULT = "Very difficult",
  SOMEWHATDIFFICULT = "Somewhat difficult",
  NOTATALLDIFFICULT = "Not at all difficult",
  DONOTKNOW = "Do not know",
  PREFERNOTTOANSWER = "Prefer not to answer",
}


export enum WORKSITUATION {
  WORKINGOUTSIDEHOME = "Working outside of the home",
  HYBRIDWORK = "Working outside the home as well as working remotely from home (“hybrid” work)",
  REMOTEWORK = "Working remotely from home",
  HOMEFORCARE = "Working at home to provide childcare, eldercare and/or to maintain the home",
  ONLEAVE = "On leave from a job working outside the home (e.g., sick leave, family leave, maternity leave)",
  LOOKINGFORWORK = "Looking for work, unemployed",
  RETIRED = "Retired",
  DISABLED = "Disabled, permanently or temporarily",
  STUDENT = "Student",
  DONTKNOW = "Don't know",
  PREFERNOTTOANSWER = "Prefer not to answer",
}
