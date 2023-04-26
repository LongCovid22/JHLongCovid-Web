import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Race {
  WHITE = "WHITE",
  BLACK = "BLACK",
  ASIAN = "ASIAN",
  NATIVE = "NATIVE",
  HISPANIC = "HISPANIC",
  OTHER = "OTHER",
  NONE = "NONE"
}

export enum NotificationFrequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY"
}

export enum NotificationMethod {
  EMAIL = "EMAIL",
  PUSH = "PUSH"
}

export enum SurveyType {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  GUEST = "GUEST"
}

type EagerResponse = {
  readonly statusCode?: number | null;
  readonly body?: string | null;
}

type LazyResponse = {
  readonly statusCode?: number | null;
  readonly body?: string | null;
}

export declare type Response = LazyLoading extends LazyLoadingDisabled ? EagerResponse : LazyResponse

export declare const Response: (new (init: ModelInit<Response>) => Response)

type EagerCovidSummary = {
  readonly beenInfected?: YesNo | null;
  readonly timesPositive?: OneToThreePlus | null;
  readonly hospitalized?: YesNo | null;
  readonly timesHospitalized?: OneToThreePlus | null;
  readonly tested?: YesNo | null;
  readonly positiveTest?: YesNoDontKnow | null;
  readonly symptomatic?: YesNo | null;
  readonly symptomsPreventScale?: NotAtAllToVeryMuch | null;
  readonly medicationsPrescribed?: YesNoDontKnow | null;
  readonly medicationsTakenCount?: MedicationsAvailable | null;
}

type LazyCovidSummary = {
  readonly beenInfected?: YesNo | null;
  readonly timesPositive?: OneToThreePlus | null;
  readonly hospitalized?: YesNo | null;
  readonly timesHospitalized?: OneToThreePlus | null;
  readonly tested?: YesNo | null;
  readonly positiveTest?: YesNoDontKnow | null;
  readonly symptomatic?: YesNo | null;
  readonly symptomsPreventScale?: NotAtAllToVeryMuch | null;
  readonly medicationsPrescribed?: YesNoDontKnow | null;
  readonly medicationsTakenCount?: MedicationsAvailable | null;
}

export declare type CovidSummary = LazyLoading extends LazyLoadingDisabled ? EagerCovidSummary : LazyCovidSummary

export declare const CovidSummary: (new (init: ModelInit<CovidSummary>) => CovidSummary)

type EagerYesNo = {
  readonly yes?: SummaryResultsByDemo | null;
  readonly no?: SummaryResultsByDemo | null;
}

type LazyYesNo = {
  readonly yes?: SummaryResultsByDemo | null;
  readonly no?: SummaryResultsByDemo | null;
}

export declare type YesNo = LazyLoading extends LazyLoadingDisabled ? EagerYesNo : LazyYesNo

export declare const YesNo: (new (init: ModelInit<YesNo>) => YesNo)

type EagerSummaryResultsByDemo = {
  readonly race?: SummaryValues | null;
  readonly sex?: SummaryValues | null;
  readonly age?: SummaryValues | null;
}

type LazySummaryResultsByDemo = {
  readonly race?: SummaryValues | null;
  readonly sex?: SummaryValues | null;
  readonly age?: SummaryValues | null;
}

export declare type SummaryResultsByDemo = LazyLoading extends LazyLoadingDisabled ? EagerSummaryResultsByDemo : LazySummaryResultsByDemo

export declare const SummaryResultsByDemo: (new (init: ModelInit<SummaryResultsByDemo>) => SummaryResultsByDemo)

type EagerSummaryValues = {
  readonly ranges?: (string | null)[] | null;
  readonly values?: (number | null)[] | null;
}

type LazySummaryValues = {
  readonly ranges?: (string | null)[] | null;
  readonly values?: (number | null)[] | null;
}

export declare type SummaryValues = LazyLoading extends LazyLoadingDisabled ? EagerSummaryValues : LazySummaryValues

export declare const SummaryValues: (new (init: ModelInit<SummaryValues>) => SummaryValues)

type EagerOneToThreePlus = {
  readonly one?: SummaryResultsByDemo | null;
  readonly two?: SummaryResultsByDemo | null;
  readonly three?: SummaryResultsByDemo | null;
  readonly threePlus?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

type LazyOneToThreePlus = {
  readonly one?: SummaryResultsByDemo | null;
  readonly two?: SummaryResultsByDemo | null;
  readonly three?: SummaryResultsByDemo | null;
  readonly threePlus?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

export declare type OneToThreePlus = LazyLoading extends LazyLoadingDisabled ? EagerOneToThreePlus : LazyOneToThreePlus

export declare const OneToThreePlus: (new (init: ModelInit<OneToThreePlus>) => OneToThreePlus)

type EagerYesNoDontKnow = {
  readonly yes?: SummaryResultsByDemo | null;
  readonly no?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

type LazyYesNoDontKnow = {
  readonly yes?: SummaryResultsByDemo | null;
  readonly no?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

export declare type YesNoDontKnow = LazyLoading extends LazyLoadingDisabled ? EagerYesNoDontKnow : LazyYesNoDontKnow

export declare const YesNoDontKnow: (new (init: ModelInit<YesNoDontKnow>) => YesNoDontKnow)

type EagerNotAtAllToVeryMuch = {
  readonly notAtAll?: SummaryResultsByDemo | null;
  readonly alittleBit?: SummaryResultsByDemo | null;
  readonly somewhat?: SummaryResultsByDemo | null;
  readonly quiteABit?: SummaryResultsByDemo | null;
  readonly veryMuch?: SummaryResultsByDemo | null;
}

type LazyNotAtAllToVeryMuch = {
  readonly notAtAll?: SummaryResultsByDemo | null;
  readonly alittleBit?: SummaryResultsByDemo | null;
  readonly somewhat?: SummaryResultsByDemo | null;
  readonly quiteABit?: SummaryResultsByDemo | null;
  readonly veryMuch?: SummaryResultsByDemo | null;
}

export declare type NotAtAllToVeryMuch = LazyLoading extends LazyLoadingDisabled ? EagerNotAtAllToVeryMuch : LazyNotAtAllToVeryMuch

export declare const NotAtAllToVeryMuch: (new (init: ModelInit<NotAtAllToVeryMuch>) => NotAtAllToVeryMuch)

type EagerMedicationsAvailable = {
  readonly antiViral?: SummaryResultsByDemo | null;
  readonly oralSteroids?: SummaryResultsByDemo | null;
  readonly antiBiotics?: SummaryResultsByDemo | null;
  readonly other?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

type LazyMedicationsAvailable = {
  readonly antiViral?: SummaryResultsByDemo | null;
  readonly oralSteroids?: SummaryResultsByDemo | null;
  readonly antiBiotics?: SummaryResultsByDemo | null;
  readonly other?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

export declare type MedicationsAvailable = LazyLoading extends LazyLoadingDisabled ? EagerMedicationsAvailable : LazyMedicationsAvailable

export declare const MedicationsAvailable: (new (init: ModelInit<MedicationsAvailable>) => MedicationsAvailable)

type EagerRecoverySummary = {
  readonly recovered?: YesNo | null;
  readonly avglengthOfRecovery?: SummaryAvgByDemo | null;
}

type LazyRecoverySummary = {
  readonly recovered?: YesNo | null;
  readonly avglengthOfRecovery?: SummaryAvgByDemo | null;
}

export declare type RecoverySummary = LazyLoading extends LazyLoadingDisabled ? EagerRecoverySummary : LazyRecoverySummary

export declare const RecoverySummary: (new (init: ModelInit<RecoverySummary>) => RecoverySummary)

type EagerSummaryAvgByDemo = {
  readonly race?: SummaryAvgValues | null;
  readonly sex?: SummaryAvgValues | null;
  readonly age?: SummaryAvgValues | null;
}

type LazySummaryAvgByDemo = {
  readonly race?: SummaryAvgValues | null;
  readonly sex?: SummaryAvgValues | null;
  readonly age?: SummaryAvgValues | null;
}

export declare type SummaryAvgByDemo = LazyLoading extends LazyLoadingDisabled ? EagerSummaryAvgByDemo : LazySummaryAvgByDemo

export declare const SummaryAvgByDemo: (new (init: ModelInit<SummaryAvgByDemo>) => SummaryAvgByDemo)

type EagerSummaryAvgValues = {
  readonly ranges?: (string | null)[] | null;
  readonly values?: (CountAverage | null)[] | null;
}

type LazySummaryAvgValues = {
  readonly ranges?: (string | null)[] | null;
  readonly values?: (CountAverage | null)[] | null;
}

export declare type SummaryAvgValues = LazyLoading extends LazyLoadingDisabled ? EagerSummaryAvgValues : LazySummaryAvgValues

export declare const SummaryAvgValues: (new (init: ModelInit<SummaryAvgValues>) => SummaryAvgValues)

type EagerCountAverage = {
  readonly count?: number | null;
  readonly average?: number | null;
}

type LazyCountAverage = {
  readonly count?: number | null;
  readonly average?: number | null;
}

export declare type CountAverage = LazyLoading extends LazyLoadingDisabled ? EagerCountAverage : LazyCountAverage

export declare const CountAverage: (new (init: ModelInit<CountAverage>) => CountAverage)

type EagerVaccinationSummary = {
  readonly vaccinated?: YesNoDontKnow | null;
  readonly totalVaccineShots?: OneToFivePlus | null;
  readonly vaccineType?: VaccineTypes | null;
}

type LazyVaccinationSummary = {
  readonly vaccinated?: YesNoDontKnow | null;
  readonly totalVaccineShots?: OneToFivePlus | null;
  readonly vaccineType?: VaccineTypes | null;
}

export declare type VaccinationSummary = LazyLoading extends LazyLoadingDisabled ? EagerVaccinationSummary : LazyVaccinationSummary

export declare const VaccinationSummary: (new (init: ModelInit<VaccinationSummary>) => VaccinationSummary)

type EagerOneToFivePlus = {
  readonly one?: SummaryResultsByDemo | null;
  readonly two?: SummaryResultsByDemo | null;
  readonly three?: SummaryResultsByDemo | null;
  readonly four?: SummaryResultsByDemo | null;
  readonly five?: SummaryResultsByDemo | null;
  readonly fivePlus?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

type LazyOneToFivePlus = {
  readonly one?: SummaryResultsByDemo | null;
  readonly two?: SummaryResultsByDemo | null;
  readonly three?: SummaryResultsByDemo | null;
  readonly four?: SummaryResultsByDemo | null;
  readonly five?: SummaryResultsByDemo | null;
  readonly fivePlus?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

export declare type OneToFivePlus = LazyLoading extends LazyLoadingDisabled ? EagerOneToFivePlus : LazyOneToFivePlus

export declare const OneToFivePlus: (new (init: ModelInit<OneToFivePlus>) => OneToFivePlus)

type EagerVaccineTypes = {
  readonly pfizer?: SummaryResultsByDemo | null;
  readonly moderna?: SummaryResultsByDemo | null;
  readonly janssen?: SummaryResultsByDemo | null;
  readonly novavax?: SummaryResultsByDemo | null;
  readonly other?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

type LazyVaccineTypes = {
  readonly pfizer?: SummaryResultsByDemo | null;
  readonly moderna?: SummaryResultsByDemo | null;
  readonly janssen?: SummaryResultsByDemo | null;
  readonly novavax?: SummaryResultsByDemo | null;
  readonly other?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
}

export declare type VaccineTypes = LazyLoading extends LazyLoadingDisabled ? EagerVaccineTypes : LazyVaccineTypes

export declare const VaccineTypes: (new (init: ModelInit<VaccineTypes>) => VaccineTypes)

type EagerGlobalHealthSummary = {
  readonly healthRank?: ExcellentToPoor | null;
  readonly physicalHealthRank?: ExcellentToPoor | null;
  readonly carryPhysicalActivities?: CompletelyToNotAtAll | null;
  readonly fatigueRank?: NoneToVerySevere | null;
  readonly avgpainLevel?: SummaryAvgByDemo | null;
}

type LazyGlobalHealthSummary = {
  readonly healthRank?: ExcellentToPoor | null;
  readonly physicalHealthRank?: ExcellentToPoor | null;
  readonly carryPhysicalActivities?: CompletelyToNotAtAll | null;
  readonly fatigueRank?: NoneToVerySevere | null;
  readonly avgpainLevel?: SummaryAvgByDemo | null;
}

export declare type GlobalHealthSummary = LazyLoading extends LazyLoadingDisabled ? EagerGlobalHealthSummary : LazyGlobalHealthSummary

export declare const GlobalHealthSummary: (new (init: ModelInit<GlobalHealthSummary>) => GlobalHealthSummary)

type EagerExcellentToPoor = {
  readonly excellent?: SummaryResultsByDemo | null;
  readonly veryGood?: SummaryResultsByDemo | null;
  readonly good?: SummaryResultsByDemo | null;
  readonly fair?: SummaryResultsByDemo | null;
  readonly poor?: SummaryResultsByDemo | null;
}

type LazyExcellentToPoor = {
  readonly excellent?: SummaryResultsByDemo | null;
  readonly veryGood?: SummaryResultsByDemo | null;
  readonly good?: SummaryResultsByDemo | null;
  readonly fair?: SummaryResultsByDemo | null;
  readonly poor?: SummaryResultsByDemo | null;
}

export declare type ExcellentToPoor = LazyLoading extends LazyLoadingDisabled ? EagerExcellentToPoor : LazyExcellentToPoor

export declare const ExcellentToPoor: (new (init: ModelInit<ExcellentToPoor>) => ExcellentToPoor)

type EagerCompletelyToNotAtAll = {
  readonly completely?: SummaryResultsByDemo | null;
  readonly mostly?: SummaryResultsByDemo | null;
  readonly moderately?: SummaryResultsByDemo | null;
  readonly aLittle?: SummaryResultsByDemo | null;
  readonly notAtAll?: SummaryResultsByDemo | null;
}

type LazyCompletelyToNotAtAll = {
  readonly completely?: SummaryResultsByDemo | null;
  readonly mostly?: SummaryResultsByDemo | null;
  readonly moderately?: SummaryResultsByDemo | null;
  readonly aLittle?: SummaryResultsByDemo | null;
  readonly notAtAll?: SummaryResultsByDemo | null;
}

export declare type CompletelyToNotAtAll = LazyLoading extends LazyLoadingDisabled ? EagerCompletelyToNotAtAll : LazyCompletelyToNotAtAll

export declare const CompletelyToNotAtAll: (new (init: ModelInit<CompletelyToNotAtAll>) => CompletelyToNotAtAll)

type EagerNoneToVerySevere = {
  readonly none?: SummaryResultsByDemo | null;
  readonly mild?: SummaryResultsByDemo | null;
  readonly moderate?: SummaryResultsByDemo | null;
  readonly severe?: SummaryResultsByDemo | null;
  readonly verySevere?: SummaryResultsByDemo | null;
}

type LazyNoneToVerySevere = {
  readonly none?: SummaryResultsByDemo | null;
  readonly mild?: SummaryResultsByDemo | null;
  readonly moderate?: SummaryResultsByDemo | null;
  readonly severe?: SummaryResultsByDemo | null;
  readonly verySevere?: SummaryResultsByDemo | null;
}

export declare type NoneToVerySevere = LazyLoading extends LazyLoadingDisabled ? EagerNoneToVerySevere : LazyNoneToVerySevere

export declare const NoneToVerySevere: (new (init: ModelInit<NoneToVerySevere>) => NoneToVerySevere)

type EagerPatientHealthQuestionnaireSummary = {
  readonly littleInterestThings?: NotAtAllToNearlyEveryDay | null;
  readonly downDepressedHopeless?: NotAtAllToNearlyEveryDay | null;
  readonly sleepProblems?: NotAtAllToNearlyEveryDay | null;
  readonly tiredNoEnergy?: NotAtAllToNearlyEveryDay | null;
  readonly dietProblems?: NotAtAllToNearlyEveryDay | null;
  readonly badAboutSelf?: NotAtAllToNearlyEveryDay | null;
  readonly concentrationProblems?: NotAtAllToNearlyEveryDay | null;
  readonly slowOrRestless?: NotAtAllToNearlyEveryDay | null;
  readonly avgPHQScore?: SummaryAvgByDemo | null;
}

type LazyPatientHealthQuestionnaireSummary = {
  readonly littleInterestThings?: NotAtAllToNearlyEveryDay | null;
  readonly downDepressedHopeless?: NotAtAllToNearlyEveryDay | null;
  readonly sleepProblems?: NotAtAllToNearlyEveryDay | null;
  readonly tiredNoEnergy?: NotAtAllToNearlyEveryDay | null;
  readonly dietProblems?: NotAtAllToNearlyEveryDay | null;
  readonly badAboutSelf?: NotAtAllToNearlyEveryDay | null;
  readonly concentrationProblems?: NotAtAllToNearlyEveryDay | null;
  readonly slowOrRestless?: NotAtAllToNearlyEveryDay | null;
  readonly avgPHQScore?: SummaryAvgByDemo | null;
}

export declare type PatientHealthQuestionnaireSummary = LazyLoading extends LazyLoadingDisabled ? EagerPatientHealthQuestionnaireSummary : LazyPatientHealthQuestionnaireSummary

export declare const PatientHealthQuestionnaireSummary: (new (init: ModelInit<PatientHealthQuestionnaireSummary>) => PatientHealthQuestionnaireSummary)

type EagerNotAtAllToNearlyEveryDay = {
  readonly notAtAll?: SummaryResultsByDemo | null;
  readonly severalDays?: SummaryResultsByDemo | null;
  readonly moreThanHalfTheDays?: SummaryResultsByDemo | null;
  readonly nearlyEveryDay?: SummaryResultsByDemo | null;
}

type LazyNotAtAllToNearlyEveryDay = {
  readonly notAtAll?: SummaryResultsByDemo | null;
  readonly severalDays?: SummaryResultsByDemo | null;
  readonly moreThanHalfTheDays?: SummaryResultsByDemo | null;
  readonly nearlyEveryDay?: SummaryResultsByDemo | null;
}

export declare type NotAtAllToNearlyEveryDay = LazyLoading extends LazyLoadingDisabled ? EagerNotAtAllToNearlyEveryDay : LazyNotAtAllToNearlyEveryDay

export declare const NotAtAllToNearlyEveryDay: (new (init: ModelInit<NotAtAllToNearlyEveryDay>) => NotAtAllToNearlyEveryDay)

type EagerSymptomSummary = {
  readonly symptomCounts?: SymptomsAvailabLe | null;
  readonly qualityOfLife?: ExcellentToPoor | null;
  readonly mentalHealthRank?: ExcellentToPoor | null;
  readonly socialSatisfactionRank?: ExcellentToPoor | null;
  readonly carryOutSocialActivitiesRank?: ExcellentToPoor | null;
  readonly anxietyInPastWeekRank?: NeverToAlways | null;
}

type LazySymptomSummary = {
  readonly symptomCounts?: SymptomsAvailabLe | null;
  readonly qualityOfLife?: ExcellentToPoor | null;
  readonly mentalHealthRank?: ExcellentToPoor | null;
  readonly socialSatisfactionRank?: ExcellentToPoor | null;
  readonly carryOutSocialActivitiesRank?: ExcellentToPoor | null;
  readonly anxietyInPastWeekRank?: NeverToAlways | null;
}

export declare type SymptomSummary = LazyLoading extends LazyLoadingDisabled ? EagerSymptomSummary : LazySymptomSummary

export declare const SymptomSummary: (new (init: ModelInit<SymptomSummary>) => SymptomSummary)

type EagerSymptomsAvailabLe = {
  readonly headache?: SummaryResultsByDemo | null;
  readonly bodyMuscleAche?: SummaryResultsByDemo | null;
  readonly feverChillsSweatsFlushing?: SummaryResultsByDemo | null;
  readonly faintDizzyGoofy?: SummaryResultsByDemo | null;
  readonly postExertionalMalaise?: SummaryResultsByDemo | null;
  readonly weaknessInArmsLegs?: SummaryResultsByDemo | null;
  readonly shortnessOfBreath?: SummaryResultsByDemo | null;
  readonly cough?: SummaryResultsByDemo | null;
  readonly palpitations?: SummaryResultsByDemo | null;
  readonly swellingOfLegs?: SummaryResultsByDemo | null;
  readonly indigestionNausea?: SummaryResultsByDemo | null;
  readonly bladderProblem?: SummaryResultsByDemo | null;
  readonly nerveProblems?: SummaryResultsByDemo | null;
  readonly brainFog?: SummaryResultsByDemo | null;
  readonly anxietyDepressionNightmares?: SummaryResultsByDemo | null;
  readonly difficultyFallingAsleep?: SummaryResultsByDemo | null;
  readonly sleepyDuringDaytime?: SummaryResultsByDemo | null;
  readonly loudSnoring?: SummaryResultsByDemo | null;
  readonly uncomfortableFeelingsInLegs?: SummaryResultsByDemo | null;
  readonly skinRash?: SummaryResultsByDemo | null;
  readonly lossOfChangeInSmell?: SummaryResultsByDemo | null;
  readonly excessiveThirst?: SummaryResultsByDemo | null;
  readonly excessiveDryMouth?: SummaryResultsByDemo | null;
  readonly visionProblems?: SummaryResultsByDemo | null;
  readonly hearingProblems?: SummaryResultsByDemo | null;
  readonly fertilityProblemsForWomen?: SummaryResultsByDemo | null;
}

type LazySymptomsAvailabLe = {
  readonly headache?: SummaryResultsByDemo | null;
  readonly bodyMuscleAche?: SummaryResultsByDemo | null;
  readonly feverChillsSweatsFlushing?: SummaryResultsByDemo | null;
  readonly faintDizzyGoofy?: SummaryResultsByDemo | null;
  readonly postExertionalMalaise?: SummaryResultsByDemo | null;
  readonly weaknessInArmsLegs?: SummaryResultsByDemo | null;
  readonly shortnessOfBreath?: SummaryResultsByDemo | null;
  readonly cough?: SummaryResultsByDemo | null;
  readonly palpitations?: SummaryResultsByDemo | null;
  readonly swellingOfLegs?: SummaryResultsByDemo | null;
  readonly indigestionNausea?: SummaryResultsByDemo | null;
  readonly bladderProblem?: SummaryResultsByDemo | null;
  readonly nerveProblems?: SummaryResultsByDemo | null;
  readonly brainFog?: SummaryResultsByDemo | null;
  readonly anxietyDepressionNightmares?: SummaryResultsByDemo | null;
  readonly difficultyFallingAsleep?: SummaryResultsByDemo | null;
  readonly sleepyDuringDaytime?: SummaryResultsByDemo | null;
  readonly loudSnoring?: SummaryResultsByDemo | null;
  readonly uncomfortableFeelingsInLegs?: SummaryResultsByDemo | null;
  readonly skinRash?: SummaryResultsByDemo | null;
  readonly lossOfChangeInSmell?: SummaryResultsByDemo | null;
  readonly excessiveThirst?: SummaryResultsByDemo | null;
  readonly excessiveDryMouth?: SummaryResultsByDemo | null;
  readonly visionProblems?: SummaryResultsByDemo | null;
  readonly hearingProblems?: SummaryResultsByDemo | null;
  readonly fertilityProblemsForWomen?: SummaryResultsByDemo | null;
}

export declare type SymptomsAvailabLe = LazyLoading extends LazyLoadingDisabled ? EagerSymptomsAvailabLe : LazySymptomsAvailabLe

export declare const SymptomsAvailabLe: (new (init: ModelInit<SymptomsAvailabLe>) => SymptomsAvailabLe)

type EagerNeverToAlways = {
  readonly never?: SummaryResultsByDemo | null;
  readonly rarely?: SummaryResultsByDemo | null;
  readonly sometimes?: SummaryResultsByDemo | null;
  readonly often?: SummaryResultsByDemo | null;
  readonly always?: SummaryResultsByDemo | null;
}

type LazyNeverToAlways = {
  readonly never?: SummaryResultsByDemo | null;
  readonly rarely?: SummaryResultsByDemo | null;
  readonly sometimes?: SummaryResultsByDemo | null;
  readonly often?: SummaryResultsByDemo | null;
  readonly always?: SummaryResultsByDemo | null;
}

export declare type NeverToAlways = LazyLoading extends LazyLoadingDisabled ? EagerNeverToAlways : LazyNeverToAlways

export declare const NeverToAlways: (new (init: ModelInit<NeverToAlways>) => NeverToAlways)

type EagerMedicalConditionsSummary = {
  readonly longCovid?: YesNoDontKnow | null;
  readonly newDiagnosisCounts?: DiagnosisTypes | null;
}

type LazyMedicalConditionsSummary = {
  readonly longCovid?: YesNoDontKnow | null;
  readonly newDiagnosisCounts?: DiagnosisTypes | null;
}

export declare type MedicalConditionsSummary = LazyLoading extends LazyLoadingDisabled ? EagerMedicalConditionsSummary : LazyMedicalConditionsSummary

export declare const MedicalConditionsSummary: (new (init: ModelInit<MedicalConditionsSummary>) => MedicalConditionsSummary)

type EagerDiagnosisTypes = {
  readonly noNewDiagnosis?: SummaryResultsByDemo | null;
  readonly heartProblems?: SummaryResultsByDemo | null;
  readonly lungProblems?: SummaryResultsByDemo | null;
  readonly bloodClotLung?: SummaryResultsByDemo | null;
  readonly sleepApnea?: SummaryResultsByDemo | null;
  readonly memory?: SummaryResultsByDemo | null;
  readonly migraine?: SummaryResultsByDemo | null;
  readonly stroke?: SummaryResultsByDemo | null;
  readonly seizure?: SummaryResultsByDemo | null;
  readonly kidneyProblems?: SummaryResultsByDemo | null;
  readonly stomachProblems?: SummaryResultsByDemo | null;
  readonly psychologicalProblems?: SummaryResultsByDemo | null;
  readonly diabetes?: SummaryResultsByDemo | null;
  readonly autoImmuneDiseases?: SummaryResultsByDemo | null;
  readonly mecfs?: SummaryResultsByDemo | null;
  readonly other?: SummaryResultsByDemo | null;
  readonly notSure?: SummaryResultsByDemo | null;
}

type LazyDiagnosisTypes = {
  readonly noNewDiagnosis?: SummaryResultsByDemo | null;
  readonly heartProblems?: SummaryResultsByDemo | null;
  readonly lungProblems?: SummaryResultsByDemo | null;
  readonly bloodClotLung?: SummaryResultsByDemo | null;
  readonly sleepApnea?: SummaryResultsByDemo | null;
  readonly memory?: SummaryResultsByDemo | null;
  readonly migraine?: SummaryResultsByDemo | null;
  readonly stroke?: SummaryResultsByDemo | null;
  readonly seizure?: SummaryResultsByDemo | null;
  readonly kidneyProblems?: SummaryResultsByDemo | null;
  readonly stomachProblems?: SummaryResultsByDemo | null;
  readonly psychologicalProblems?: SummaryResultsByDemo | null;
  readonly diabetes?: SummaryResultsByDemo | null;
  readonly autoImmuneDiseases?: SummaryResultsByDemo | null;
  readonly mecfs?: SummaryResultsByDemo | null;
  readonly other?: SummaryResultsByDemo | null;
  readonly notSure?: SummaryResultsByDemo | null;
}

export declare type DiagnosisTypes = LazyLoading extends LazyLoadingDisabled ? EagerDiagnosisTypes : LazyDiagnosisTypes

export declare const DiagnosisTypes: (new (init: ModelInit<DiagnosisTypes>) => DiagnosisTypes)

type EagerSocialSummary = {
  readonly hasMedicalInsurance?: YesNo | null;
  readonly difficultCoveringExpenses?: DifficultExpenses | null;
  readonly currentWorkSituation?: WorkingSituation | null;
}

type LazySocialSummary = {
  readonly hasMedicalInsurance?: YesNo | null;
  readonly difficultCoveringExpenses?: DifficultExpenses | null;
  readonly currentWorkSituation?: WorkingSituation | null;
}

export declare type SocialSummary = LazyLoading extends LazyLoadingDisabled ? EagerSocialSummary : LazySocialSummary

export declare const SocialSummary: (new (init: ModelInit<SocialSummary>) => SocialSummary)

type EagerDifficultExpenses = {
  readonly veryDifficult?: SummaryResultsByDemo | null;
  readonly somewhatDifficult?: SummaryResultsByDemo | null;
  readonly notAtAllDifficult?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
  readonly preferNotToAnswer?: SummaryResultsByDemo | null;
}

type LazyDifficultExpenses = {
  readonly veryDifficult?: SummaryResultsByDemo | null;
  readonly somewhatDifficult?: SummaryResultsByDemo | null;
  readonly notAtAllDifficult?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
  readonly preferNotToAnswer?: SummaryResultsByDemo | null;
}

export declare type DifficultExpenses = LazyLoading extends LazyLoadingDisabled ? EagerDifficultExpenses : LazyDifficultExpenses

export declare const DifficultExpenses: (new (init: ModelInit<DifficultExpenses>) => DifficultExpenses)

type EagerWorkingSituation = {
  readonly atOffice?: SummaryResultsByDemo | null;
  readonly hybrid?: SummaryResultsByDemo | null;
  readonly remote?: SummaryResultsByDemo | null;
  readonly remoteAndParenting?: SummaryResultsByDemo | null;
  readonly onJobLeave?: SummaryResultsByDemo | null;
  readonly unemployed?: SummaryResultsByDemo | null;
  readonly retired?: SummaryResultsByDemo | null;
  readonly disability?: SummaryResultsByDemo | null;
  readonly student?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
  readonly preferNotToAnswer?: SummaryResultsByDemo | null;
}

type LazyWorkingSituation = {
  readonly atOffice?: SummaryResultsByDemo | null;
  readonly hybrid?: SummaryResultsByDemo | null;
  readonly remote?: SummaryResultsByDemo | null;
  readonly remoteAndParenting?: SummaryResultsByDemo | null;
  readonly onJobLeave?: SummaryResultsByDemo | null;
  readonly unemployed?: SummaryResultsByDemo | null;
  readonly retired?: SummaryResultsByDemo | null;
  readonly disability?: SummaryResultsByDemo | null;
  readonly student?: SummaryResultsByDemo | null;
  readonly doNotKnow?: SummaryResultsByDemo | null;
  readonly preferNotToAnswer?: SummaryResultsByDemo | null;
}

export declare type WorkingSituation = LazyLoading extends LazyLoadingDisabled ? EagerWorkingSituation : LazyWorkingSituation

export declare const WorkingSituation: (new (init: ModelInit<WorkingSituation>) => WorkingSituation)

type MapDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'updatedAt';
}

type SurveyEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type CovidEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type VaccinationEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type SocialDeterminantsEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type RecoveryEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type GlobalHealthEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type PatientHealthEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type SymptomEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type MonthlyEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type EagerMapData = {
  readonly id: string;
  readonly level: string;
  readonly name: string;
  readonly stateAbbrev: string;
  readonly lat: number;
  readonly long: number;
  readonly covidCount: number;
  readonly longCovid: number;
  readonly phq8AboveTen?: number | null;
  readonly recoveredCount?: number | null;
  readonly longCovidOverFourWeeks?: number | null;
  readonly longCovidOverTwelveWeeks?: number | null;
  readonly topMedicalCondition: string;
  readonly covidSummary: CovidSummary;
  readonly recoverySummary: RecoverySummary;
  readonly vaccinationSummary: VaccinationSummary;
  readonly globalHealthSummary: GlobalHealthSummary;
  readonly patientHealthQuestionnaireSummary: PatientHealthQuestionnaireSummary;
  readonly symptomSummary: SymptomSummary;
  readonly medicalConditionsSummary: MedicalConditionsSummary;
  readonly socialSummary: SocialSummary;
  readonly totalFullEntries: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMapData = {
  readonly id: string;
  readonly level: string;
  readonly name: string;
  readonly stateAbbrev: string;
  readonly lat: number;
  readonly long: number;
  readonly covidCount: number;
  readonly longCovid: number;
  readonly phq8AboveTen?: number | null;
  readonly recoveredCount?: number | null;
  readonly longCovidOverFourWeeks?: number | null;
  readonly longCovidOverTwelveWeeks?: number | null;
  readonly topMedicalCondition: string;
  readonly covidSummary: CovidSummary;
  readonly recoverySummary: RecoverySummary;
  readonly vaccinationSummary: VaccinationSummary;
  readonly globalHealthSummary: GlobalHealthSummary;
  readonly patientHealthQuestionnaireSummary: PatientHealthQuestionnaireSummary;
  readonly symptomSummary: SymptomSummary;
  readonly medicalConditionsSummary: MedicalConditionsSummary;
  readonly socialSummary: SocialSummary;
  readonly totalFullEntries: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MapData = LazyLoading extends LazyLoadingDisabled ? EagerMapData : LazyMapData

export declare const MapData: (new (init: ModelInit<MapData, MapDataMetaData>) => MapData) & {
  copyOf(source: MapData, mutator: (draft: MutableModel<MapData, MapDataMetaData>) => MutableModel<MapData, MapDataMetaData> | void): MapData;
}

type EagerUser = {
  readonly id: string;
  readonly email: string;
  readonly age?: number | null;
  readonly race?: Race | keyof typeof Race | null;
  readonly sex?: string | null;
  readonly height?: string | null;
  readonly weight?: string | null;
  readonly lastSubmission?: string | null;
  readonly lastSignIn?: string | null;
  readonly notificationFreq?: NotificationFrequency | keyof typeof NotificationFrequency | null;
  readonly notificaitonMethod?: NotificationMethod | keyof typeof NotificationMethod | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly email: string;
  readonly age?: number | null;
  readonly race?: Race | keyof typeof Race | null;
  readonly sex?: string | null;
  readonly height?: string | null;
  readonly weight?: string | null;
  readonly lastSubmission?: string | null;
  readonly lastSignIn?: string | null;
  readonly notificationFreq?: NotificationFrequency | keyof typeof NotificationFrequency | null;
  readonly notificaitonMethod?: NotificationMethod | keyof typeof NotificationMethod | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerSurveyEntry = {
  readonly id: string;
  readonly email?: string | null;
  readonly state?: string | null;
  readonly countyState?: string | null;
  readonly createdAt: string;
  readonly surveyVersion: number;
  readonly surveyType: SurveyType | keyof typeof SurveyType;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly covidEntry?: CovidEntry | null;
  readonly vaccinationEntry?: VaccinationEntry | null;
  readonly socialDeterminantsEntry?: SocialDeterminantsEntry | null;
  readonly recoveryEntry?: RecoveryEntry | null;
  readonly globalHealthEntry?: GlobalHealthEntry | null;
  readonly PatientHealthEntry?: PatientHealthEntry | null;
  readonly symptomsEntry?: SymptomEntry | null;
  readonly monthlyEntry?: MonthlyEntry | null;
  readonly updatedAt?: string | null;
  readonly surveyEntryCovidEntryId?: string | null;
  readonly surveyEntryVaccinationEntryId?: string | null;
  readonly surveyEntrySocialDeterminantsEntryId?: string | null;
  readonly surveyEntryRecoveryEntryId?: string | null;
  readonly surveyEntryGlobalHealthEntryId?: string | null;
  readonly surveyEntryPatientHealthEntryId?: string | null;
  readonly surveyEntrySymptomsEntryId?: string | null;
  readonly surveyEntryMonthlyEntryId?: string | null;
}

type LazySurveyEntry = {
  readonly id: string;
  readonly email?: string | null;
  readonly state?: string | null;
  readonly countyState?: string | null;
  readonly createdAt: string;
  readonly surveyVersion: number;
  readonly surveyType: SurveyType | keyof typeof SurveyType;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly covidEntry: AsyncItem<CovidEntry | undefined>;
  readonly vaccinationEntry: AsyncItem<VaccinationEntry | undefined>;
  readonly socialDeterminantsEntry: AsyncItem<SocialDeterminantsEntry | undefined>;
  readonly recoveryEntry: AsyncItem<RecoveryEntry | undefined>;
  readonly globalHealthEntry: AsyncItem<GlobalHealthEntry | undefined>;
  readonly PatientHealthEntry: AsyncItem<PatientHealthEntry | undefined>;
  readonly symptomsEntry: AsyncItem<SymptomEntry | undefined>;
  readonly monthlyEntry: AsyncItem<MonthlyEntry | undefined>;
  readonly updatedAt?: string | null;
  readonly surveyEntryCovidEntryId?: string | null;
  readonly surveyEntryVaccinationEntryId?: string | null;
  readonly surveyEntrySocialDeterminantsEntryId?: string | null;
  readonly surveyEntryRecoveryEntryId?: string | null;
  readonly surveyEntryGlobalHealthEntryId?: string | null;
  readonly surveyEntryPatientHealthEntryId?: string | null;
  readonly surveyEntrySymptomsEntryId?: string | null;
  readonly surveyEntryMonthlyEntryId?: string | null;
}

export declare type SurveyEntry = LazyLoading extends LazyLoadingDisabled ? EagerSurveyEntry : LazySurveyEntry

export declare const SurveyEntry: (new (init: ModelInit<SurveyEntry, SurveyEntryMetaData>) => SurveyEntry) & {
  copyOf(source: SurveyEntry, mutator: (draft: MutableModel<SurveyEntry, SurveyEntryMetaData>) => MutableModel<SurveyEntry, SurveyEntryMetaData> | void): SurveyEntry;
}

type EagerCovidEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry?: SurveyEntry | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly beenInfected?: boolean | null;
  readonly timesPositive?: number | null;
  readonly lastPositive?: string | null;
  readonly tested?: boolean | null;
  readonly positiveTest?: string | null;
  readonly testMethod?: string | null;
  readonly hospitalized?: boolean | null;
  readonly timesHospitalized?: number | null;
  readonly symptomatic?: boolean | null;
  readonly symptomsPreventScale?: string | null;
  readonly medicationsPrescribed?: string | null;
  readonly medicationsTaken?: (string | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyCovidEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry: AsyncItem<SurveyEntry | undefined>;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly beenInfected?: boolean | null;
  readonly timesPositive?: number | null;
  readonly lastPositive?: string | null;
  readonly tested?: boolean | null;
  readonly positiveTest?: string | null;
  readonly testMethod?: string | null;
  readonly hospitalized?: boolean | null;
  readonly timesHospitalized?: number | null;
  readonly symptomatic?: boolean | null;
  readonly symptomsPreventScale?: string | null;
  readonly medicationsPrescribed?: string | null;
  readonly medicationsTaken?: (string | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type CovidEntry = LazyLoading extends LazyLoadingDisabled ? EagerCovidEntry : LazyCovidEntry

export declare const CovidEntry: (new (init: ModelInit<CovidEntry, CovidEntryMetaData>) => CovidEntry) & {
  copyOf(source: CovidEntry, mutator: (draft: MutableModel<CovidEntry, CovidEntryMetaData>) => MutableModel<CovidEntry, CovidEntryMetaData> | void): CovidEntry;
}

type EagerVaccinationEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly surveyEntry?: SurveyEntry | null;
  readonly totalVaccineShots?: number | null;
  readonly vaccinated?: string | null;
  readonly vaccineType?: string | null;
  readonly dateOfLastVaccine?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyVaccinationEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly surveyEntry: AsyncItem<SurveyEntry | undefined>;
  readonly totalVaccineShots?: number | null;
  readonly vaccinated?: string | null;
  readonly vaccineType?: string | null;
  readonly dateOfLastVaccine?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type VaccinationEntry = LazyLoading extends LazyLoadingDisabled ? EagerVaccinationEntry : LazyVaccinationEntry

export declare const VaccinationEntry: (new (init: ModelInit<VaccinationEntry, VaccinationEntryMetaData>) => VaccinationEntry) & {
  copyOf(source: VaccinationEntry, mutator: (draft: MutableModel<VaccinationEntry, VaccinationEntryMetaData>) => MutableModel<VaccinationEntry, VaccinationEntryMetaData> | void): VaccinationEntry;
}

type EagerSocialDeterminantsEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry?: SurveyEntry | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly hasMedicalInsurance?: boolean | null;
  readonly difficultCoveringExpenses?: string | null;
  readonly currentWorkSituation?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazySocialDeterminantsEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry: AsyncItem<SurveyEntry | undefined>;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly hasMedicalInsurance?: boolean | null;
  readonly difficultCoveringExpenses?: string | null;
  readonly currentWorkSituation?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type SocialDeterminantsEntry = LazyLoading extends LazyLoadingDisabled ? EagerSocialDeterminantsEntry : LazySocialDeterminantsEntry

export declare const SocialDeterminantsEntry: (new (init: ModelInit<SocialDeterminantsEntry, SocialDeterminantsEntryMetaData>) => SocialDeterminantsEntry) & {
  copyOf(source: SocialDeterminantsEntry, mutator: (draft: MutableModel<SocialDeterminantsEntry, SocialDeterminantsEntryMetaData>) => MutableModel<SocialDeterminantsEntry, SocialDeterminantsEntryMetaData> | void): SocialDeterminantsEntry;
}

type EagerRecoveryEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry?: SurveyEntry | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly recovered?: boolean | null;
  readonly lengthOfRecovery?: number | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyRecoveryEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry: AsyncItem<SurveyEntry | undefined>;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly recovered?: boolean | null;
  readonly lengthOfRecovery?: number | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type RecoveryEntry = LazyLoading extends LazyLoadingDisabled ? EagerRecoveryEntry : LazyRecoveryEntry

export declare const RecoveryEntry: (new (init: ModelInit<RecoveryEntry, RecoveryEntryMetaData>) => RecoveryEntry) & {
  copyOf(source: RecoveryEntry, mutator: (draft: MutableModel<RecoveryEntry, RecoveryEntryMetaData>) => MutableModel<RecoveryEntry, RecoveryEntryMetaData> | void): RecoveryEntry;
}

type EagerGlobalHealthEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly surveyEntry?: SurveyEntry | null;
  readonly healthRank?: string | null;
  readonly physicalHealthRank?: string | null;
  readonly carryPhysicalActivities?: string | null;
  readonly fatigueRank?: string | null;
  readonly painLevel?: number | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyGlobalHealthEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly surveyEntry: AsyncItem<SurveyEntry | undefined>;
  readonly healthRank?: string | null;
  readonly physicalHealthRank?: string | null;
  readonly carryPhysicalActivities?: string | null;
  readonly fatigueRank?: string | null;
  readonly painLevel?: number | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type GlobalHealthEntry = LazyLoading extends LazyLoadingDisabled ? EagerGlobalHealthEntry : LazyGlobalHealthEntry

export declare const GlobalHealthEntry: (new (init: ModelInit<GlobalHealthEntry, GlobalHealthEntryMetaData>) => GlobalHealthEntry) & {
  copyOf(source: GlobalHealthEntry, mutator: (draft: MutableModel<GlobalHealthEntry, GlobalHealthEntryMetaData>) => MutableModel<GlobalHealthEntry, GlobalHealthEntryMetaData> | void): GlobalHealthEntry;
}

type EagerPatientHealthEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry?: SurveyEntry | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly generalHealthResults: string;
  readonly totalScore: number;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyPatientHealthEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry: AsyncItem<SurveyEntry | undefined>;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly generalHealthResults: string;
  readonly totalScore: number;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type PatientHealthEntry = LazyLoading extends LazyLoadingDisabled ? EagerPatientHealthEntry : LazyPatientHealthEntry

export declare const PatientHealthEntry: (new (init: ModelInit<PatientHealthEntry, PatientHealthEntryMetaData>) => PatientHealthEntry) & {
  copyOf(source: PatientHealthEntry, mutator: (draft: MutableModel<PatientHealthEntry, PatientHealthEntryMetaData>) => MutableModel<PatientHealthEntry, PatientHealthEntryMetaData> | void): PatientHealthEntry;
}

type EagerSymptomEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry?: SurveyEntry | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly createdAt: string;
  readonly symptoms?: (string | null)[] | null;
  readonly qualityOfLifeRank?: string | null;
  readonly mentalHealthRank?: string | null;
  readonly socialSatisfactionRank?: string | null;
  readonly carryOutSocialActivitiesRank?: string | null;
  readonly anxietyInPastWeekRank?: string | null;
  readonly medicalConditions?: (string | null)[] | null;
  readonly hasLongCovid?: string | null;
  readonly updatedAt?: string | null;
}

type LazySymptomEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry: AsyncItem<SurveyEntry | undefined>;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly createdAt: string;
  readonly symptoms?: (string | null)[] | null;
  readonly qualityOfLifeRank?: string | null;
  readonly mentalHealthRank?: string | null;
  readonly socialSatisfactionRank?: string | null;
  readonly carryOutSocialActivitiesRank?: string | null;
  readonly anxietyInPastWeekRank?: string | null;
  readonly medicalConditions?: (string | null)[] | null;
  readonly hasLongCovid?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SymptomEntry = LazyLoading extends LazyLoadingDisabled ? EagerSymptomEntry : LazySymptomEntry

export declare const SymptomEntry: (new (init: ModelInit<SymptomEntry, SymptomEntryMetaData>) => SymptomEntry) & {
  copyOf(source: SymptomEntry, mutator: (draft: MutableModel<SymptomEntry, SymptomEntryMetaData>) => MutableModel<SymptomEntry, SymptomEntryMetaData> | void): SymptomEntry;
}

type EagerMonthlyEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry?: SurveyEntry | null;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly results?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyMonthlyEntry = {
  readonly id: string;
  readonly state: string;
  readonly countyState?: string | null;
  readonly surveyEntry: AsyncItem<SurveyEntry | undefined>;
  readonly age: number;
  readonly race: Race | keyof typeof Race;
  readonly sex: string;
  readonly height: string;
  readonly weight: string;
  readonly results?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type MonthlyEntry = LazyLoading extends LazyLoadingDisabled ? EagerMonthlyEntry : LazyMonthlyEntry

export declare const MonthlyEntry: (new (init: ModelInit<MonthlyEntry, MonthlyEntryMetaData>) => MonthlyEntry) & {
  copyOf(source: MonthlyEntry, mutator: (draft: MutableModel<MonthlyEntry, MonthlyEntryMetaData>) => MutableModel<MonthlyEntry, MonthlyEntryMetaData> | void): MonthlyEntry;
}