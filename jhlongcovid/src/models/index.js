// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Race = {
  "WHITE": "WHITE",
  "BLACK": "BLACK",
  "ASIAN": "ASIAN",
  "NATIVE": "NATIVE",
  "HISPANIC": "HISPANIC",
  "OTHER": "OTHER",
  "NONE": "NONE"
};

const NotificationFrequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY"
};

const NotificationMethod = {
  "EMAIL": "EMAIL",
  "PUSH": "PUSH"
};

const SurveyType = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "GUEST": "GUEST"
};

const { MapData, User, SurveyEntry, CovidEntry, VaccinationEntry, SocialDeterminantsEntry, RecoveryEntry, GlobalHealthEntry, PatientHealthEntry, SymptomEntry, MonthlyEntry, Response, CovidSummary, YesNo, SummaryResultsByDemo, SummaryValues, OneToThreePlus, YesNoDontKnow, NotAtAllToVeryMuch, MedicationsAvailable, RecoverySummary, SummaryAvgByDemo, SummaryAvgValues, CountAverage, VaccinationSummary, OneToFivePlus, VaccineTypes, GlobalHealthSummary, ExcellentToPoor, CompletelyToNotAtAll, NoneToVerySevere, PatientHealthQuestionnaireSummary, NotAtAllToNearlyEveryDay, SymptomSummary, SymptomsAvailabLe, NeverToAlways, MedicalConditionsSummary, DiagnosisTypes, SocialSummary, DifficultExpenses, WorkingSituation } = initSchema(schema);

export {
  MapData,
  User,
  SurveyEntry,
  CovidEntry,
  VaccinationEntry,
  SocialDeterminantsEntry,
  RecoveryEntry,
  GlobalHealthEntry,
  PatientHealthEntry,
  SymptomEntry,
  MonthlyEntry,
  Race,
  NotificationFrequency,
  NotificationMethod,
  SurveyType,
  Response,
  CovidSummary,
  YesNo,
  SummaryResultsByDemo,
  SummaryValues,
  OneToThreePlus,
  YesNoDontKnow,
  NotAtAllToVeryMuch,
  MedicationsAvailable,
  RecoverySummary,
  SummaryAvgByDemo,
  SummaryAvgValues,
  CountAverage,
  VaccinationSummary,
  OneToFivePlus,
  VaccineTypes,
  GlobalHealthSummary,
  ExcellentToPoor,
  CompletelyToNotAtAll,
  NoneToVerySevere,
  PatientHealthQuestionnaireSummary,
  NotAtAllToNearlyEveryDay,
  SymptomSummary,
  SymptomsAvailabLe,
  NeverToAlways,
  MedicalConditionsSummary,
  DiagnosisTypes,
  SocialSummary,
  DifficultExpenses,
  WorkingSituation
};