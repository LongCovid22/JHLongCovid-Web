import {SYMPTOMS, DEPRESSIONRESPONSES, DEPRESSIONQUESTIONS,  NEWDIAGNOSISTYPE} from "./multiChoiceTypes";
import {VALIDDATE} from "./dateTypes";
import {YESNO,
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
  NUMOFHOSPITALIZATIONSTYPE,
  MEDICATIONSTYPE,
  COVIDVACCINETYPE,
} from "./answerTypes";

export type SurveyType = {
  CovidEntry?: {
    Infection?: YESNO,
    NumOfInfections?: NUMOFINFECTIONSTYPE,
    Hospitalized?: YESNO,
    TimesHospitalized?: NUMOFHOSPITALIZATIONSTYPE
    LastInfected?: VALIDDATE,
    CovidTest?: YESNO,
    PositiveTest?: YESNODONOTKNOW,
    CovidSymptomatic?: YESNO,
    PreventDailyActivities?: NOTATALLTOVERYMUCH,
    MedicationsPrescribed?: YESNODONOTKNOW,
    MedicationsSpecified?: MEDICATIONSTYPE[],
  },
  RecoveryEntry?: {
    CompleteRecovery?: YESNO,
    LastPositive?: number,
  },
  VaccinationEntry?: {
    VaccinationStatus?: YESNODONOTKNOW,
    NumVaccinationShots?: NUMCOVIDVACCINESHOTS,
    VaccinationDate?: VALIDDATE | "Unsure" | "Decline to answer",
    VaccineType?: COVIDVACCINETYPE,
  },
  GlobalHealthEntry?: {
    GeneralHealth?: EXCELLENTTOPOOR,
    PhysicalHealth?: EXCELLENTTOPOOR,
    CarryOutPhysicalActivities?: COMPLETELYTONOTATALL,
    Fatigue?: NONETOVERYSEVERE,
    Pain?: PAINLEVEL
  }, 
  SymptomEntry?: {
    Symptoms?: SYMPTOMS[],
    QualityOfLife?: EXCELLENTTOPOOR,
    MentalHealth?: EXCELLENTTOPOOR,
    SocialActivitiesAndRelationships?: EXCELLENTTOPOOR,
    SocialActivitiesAndRoles?: EXCELLENTTOPOOR,
    EmotionalProblems?: NEVERTOALWAYS,
    NewDiagnosis?: NEWDIAGNOSISTYPE[],
    LongCovid?: YESNODONOTKNOW
  },
  PatientHealthEntry?: Record<DEPRESSIONQUESTIONS, DEPRESSIONRESPONSES>,
  SocialDeterminantsEntry?: {
    HealthInsurance?: YESNO,
    PaymentDifficulty?: DIFFICULTYOFPAYING,
    WorkSituation?: WORKSITUATION
  }
}