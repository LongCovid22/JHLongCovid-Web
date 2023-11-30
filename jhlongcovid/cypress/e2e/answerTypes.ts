//smiilar to answerTypes.ts, for more specific type checking and answer providing for cypress testing purposes

enum YESNO {
  YES = "Yes",
  NO = "No"
}

enum YESNODONOTKNOW {
  YES = "Yes",
  NO = "No",
  DONOTKNOW = "Do not know"
}

enum NUMOFINFECTIONS {
  ONE = "1 infection",
  TWO = "2 infections",
  THREE = "3 infections",
  GREATERTHANTHREE = "More than 3 infections",
  DONOTKNOW = "Do not know"
}

type NUMOFINFECTIONSTYPE = NUMOFINFECTIONS | number;

enum NUMHOSPITALIZATIONS {
  ONE = "1 COVID",
  TWO = "2 COVID",
  THREE = "3 COVID",
  GREATERTHANTHREE = "More than 3",
  DONOTKNOW = "Do not know"
}

type NUMOFHOSPITALIZATIONSTYPE = NUMHOSPITALIZATIONS | number;

enum MEDICATIONS {
  ANTIVIRAL = "Antiviral pill",
  ORALSTEROIDS = "Oral steroids",
  ANTIBIOTICS = "Antibiotics",
  DONOTKNOW = "Do not know"
}

type MEDICATIONSTYPE = MEDICATIONS | string;

enum NUMCOVIDVACCINESHOTS {
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  FIVEPLUS = "More Than 5",
  DONOTKNOW = "Do not know"
}

enum COVIDVACCINES {
  PFIZER = "Pfizer",
  MODERNA = "Moderna",
  JANSSEN = "Janssen",
  NOVAVAX = "novavax",
  DONOTKNOW = "Do not know"
}

type COVIDVACCINETYPE = COVIDVACCINES | string;

enum PAINLEVEL {
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


enum EXCELLENTTOPOOR {
  EXCELLENT = "Excellent",
  VERYGOOD = "Very Good",
  GOOD = "Good",
  FAIR = "Fair",
  POOR = "Poor",
}


enum COMPLETELYTONOTATALL {
  COMPLETELY = "Completely",
  MOSTLY = "Mostly",
  MODERATELY = "Moderately",
  ALITTLE = "A little",
  NOTATALL = "Not at all",
}

enum NONETOVERYSEVERE {
  NONE = "None",
  MILD = "Mild",
  MODERATE = "Moderate",
  SEVERE = "Severe",
  VERYSEVERE = "Very Severe",
}

enum FREQUENCY {
  NEVER = "Never",
  RARELY = "Rarely",
  SOMETIMES = "Sometimes",
  OFTEN = "Often",
  ALWAYS = "Always",
}  

enum NOTATALLTOVERYMUCH {
  NOTATALL = "Not at all",
  ALITTLEBIT = "A little bit",
  SOMEWHAT = "Somewhat",
  QUITEABIT = "Quite a bit",
  VERYMUCH = "Very much",
}

enum DifficultyOfPaying {
  VERYDIFFICULT = "Very difficult",
  SOMEWHATDIFFICULT = "Somewhat difficult",
  NOTATALLDIFFICULT = "Not at all difficult",
  DONOTKNOW = "Do not know",
  PREFERNOTTOANSWER = "Prefer not to answer",
}


enum WorkSituation {
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
