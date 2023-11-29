/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMapAggregationNew = /* GraphQL */ `subscription OnCreateMapAggregationNew(
  $filter: ModelSubscriptionMapAggregationNewFilterInput
) {
  onCreateMapAggregationNew(filter: $filter) {
    id
    level
    name
    stateAbbrev
    lat
    long
    covidCount
    longCovid
    aggregationType
    phq8AboveTen
    recoveredCount
    selfReportedLongCovid
    longCovidOverFourWeeks
    longCovidOverTwelveWeeks
    selfReportedPlusCovidLongCovid
    topMedicalCondition
    covidSummary {
      beenInfected {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesPositive {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      tested {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      positiveTest {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      symptomatic {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      symptomsPreventScale {
        notAtAll {
          total
          __typename
        }
        alittleBit {
          total
          __typename
        }
        somewhat {
          total
          __typename
        }
        quiteABit {
          total
          __typename
        }
        veryMuch {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    recoverySummary {
      hospitalized {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesHospitalized {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsPrescribed {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsTakenCount {
        antiViral {
          total
          __typename
        }
        oralSteroids {
          total
          __typename
        }
        antiBiotics {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      recovered {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      avglengthOfRecovery {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    vaccinationSummary {
      vaccinated {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      totalVaccineShots {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        four {
          total
          __typename
        }
        five {
          total
          __typename
        }
        fivePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      vaccineType {
        pfizer {
          total
          __typename
        }
        moderna {
          total
          __typename
        }
        janssen {
          total
          __typename
        }
        novavax {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    globalHealthSummary {
      healthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      physicalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryPhysicalActivities {
        completely {
          total
          __typename
        }
        mostly {
          total
          __typename
        }
        moderately {
          total
          __typename
        }
        aLittle {
          total
          __typename
        }
        notAtAll {
          total
          __typename
        }
        __typename
      }
      fatigueRank {
        none {
          total
          __typename
        }
        mild {
          total
          __typename
        }
        moderate {
          total
          __typename
        }
        severe {
          total
          __typename
        }
        verySevere {
          total
          __typename
        }
        __typename
      }
      avgpainLevel {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    patientHealthQuestionnaireSummary {
      littleInterestThings {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      downDepressedHopeless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      sleepProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      tiredNoEnergy {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      dietProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      badAboutSelf {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      concentrationProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      slowOrRestless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      avgPHQScore {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    symptomSummary {
      symptomCounts {
        headache {
          total
          __typename
        }
        bodyMuscleAche {
          total
          __typename
        }
        feverChillsSweatsFlushing {
          total
          __typename
        }
        faintDizzyGoofy {
          total
          __typename
        }
        postExertionalMalaise {
          total
          __typename
        }
        weaknessInArmsLegs {
          total
          __typename
        }
        shortnessOfBreath {
          total
          __typename
        }
        cough {
          total
          __typename
        }
        palpitations {
          total
          __typename
        }
        swellingOfLegs {
          total
          __typename
        }
        indigestionNausea {
          total
          __typename
        }
        bladderProblem {
          total
          __typename
        }
        nerveProblems {
          total
          __typename
        }
        brainFog {
          total
          __typename
        }
        anxietyDepressionNightmares {
          total
          __typename
        }
        difficultyFallingAsleep {
          total
          __typename
        }
        sleepyDuringDaytime {
          total
          __typename
        }
        loudSnoring {
          total
          __typename
        }
        uncomfortableFeelingsInLegs {
          total
          __typename
        }
        skinRash {
          total
          __typename
        }
        lossOfChangeInSmell {
          total
          __typename
        }
        excessiveThirst {
          total
          __typename
        }
        excessiveDryMouth {
          total
          __typename
        }
        visionProblems {
          total
          __typename
        }
        hearingProblems {
          total
          __typename
        }
        fertilityProblemsForWomen {
          total
          __typename
        }
        __typename
      }
      qualityOfLife {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      mentalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      socialSatisfactionRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryOutSocialActivitiesRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      anxietyInPastWeekRank {
        never {
          total
          __typename
        }
        rarely {
          total
          __typename
        }
        sometimes {
          total
          __typename
        }
        often {
          total
          __typename
        }
        always {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    medicalConditionsSummary {
      longCovid {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      newDiagnosisCounts {
        noNewDiagnosis {
          total
          __typename
        }
        heartProblems {
          total
          __typename
        }
        lungProblems {
          total
          __typename
        }
        bloodClotLung {
          total
          __typename
        }
        sleepApnea {
          total
          __typename
        }
        memory {
          total
          __typename
        }
        migraine {
          total
          __typename
        }
        stroke {
          total
          __typename
        }
        seizure {
          total
          __typename
        }
        kidneyProblems {
          total
          __typename
        }
        stomachProblems {
          total
          __typename
        }
        psychologicalProblems {
          total
          __typename
        }
        diabetes {
          total
          __typename
        }
        autoImmuneDiseases {
          total
          __typename
        }
        mecfs {
          total
          __typename
        }
        other {
          total
          __typename
        }
        notSure {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    socialSummary {
      hasMedicalInsurance {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      difficultCoveringExpenses {
        veryDifficult {
          total
          __typename
        }
        somewhatDifficult {
          total
          __typename
        }
        notAtAllDifficult {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      currentWorkSituation {
        atOffice {
          total
          __typename
        }
        hybrid {
          total
          __typename
        }
        remote {
          total
          __typename
        }
        remoteAndParenting {
          total
          __typename
        }
        onJobLeave {
          total
          __typename
        }
        unemployed {
          total
          __typename
        }
        retired {
          total
          __typename
        }
        disability {
          total
          __typename
        }
        student {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    totalFullEntries
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMapAggregationNewSubscriptionVariables,
  APITypes.OnCreateMapAggregationNewSubscription
>;
export const onUpdateMapAggregationNew = /* GraphQL */ `subscription OnUpdateMapAggregationNew(
  $filter: ModelSubscriptionMapAggregationNewFilterInput
) {
  onUpdateMapAggregationNew(filter: $filter) {
    id
    level
    name
    stateAbbrev
    lat
    long
    covidCount
    longCovid
    aggregationType
    phq8AboveTen
    recoveredCount
    selfReportedLongCovid
    longCovidOverFourWeeks
    longCovidOverTwelveWeeks
    selfReportedPlusCovidLongCovid
    topMedicalCondition
    covidSummary {
      beenInfected {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesPositive {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      tested {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      positiveTest {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      symptomatic {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      symptomsPreventScale {
        notAtAll {
          total
          __typename
        }
        alittleBit {
          total
          __typename
        }
        somewhat {
          total
          __typename
        }
        quiteABit {
          total
          __typename
        }
        veryMuch {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    recoverySummary {
      hospitalized {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesHospitalized {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsPrescribed {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsTakenCount {
        antiViral {
          total
          __typename
        }
        oralSteroids {
          total
          __typename
        }
        antiBiotics {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      recovered {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      avglengthOfRecovery {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    vaccinationSummary {
      vaccinated {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      totalVaccineShots {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        four {
          total
          __typename
        }
        five {
          total
          __typename
        }
        fivePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      vaccineType {
        pfizer {
          total
          __typename
        }
        moderna {
          total
          __typename
        }
        janssen {
          total
          __typename
        }
        novavax {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    globalHealthSummary {
      healthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      physicalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryPhysicalActivities {
        completely {
          total
          __typename
        }
        mostly {
          total
          __typename
        }
        moderately {
          total
          __typename
        }
        aLittle {
          total
          __typename
        }
        notAtAll {
          total
          __typename
        }
        __typename
      }
      fatigueRank {
        none {
          total
          __typename
        }
        mild {
          total
          __typename
        }
        moderate {
          total
          __typename
        }
        severe {
          total
          __typename
        }
        verySevere {
          total
          __typename
        }
        __typename
      }
      avgpainLevel {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    patientHealthQuestionnaireSummary {
      littleInterestThings {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      downDepressedHopeless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      sleepProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      tiredNoEnergy {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      dietProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      badAboutSelf {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      concentrationProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      slowOrRestless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      avgPHQScore {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    symptomSummary {
      symptomCounts {
        headache {
          total
          __typename
        }
        bodyMuscleAche {
          total
          __typename
        }
        feverChillsSweatsFlushing {
          total
          __typename
        }
        faintDizzyGoofy {
          total
          __typename
        }
        postExertionalMalaise {
          total
          __typename
        }
        weaknessInArmsLegs {
          total
          __typename
        }
        shortnessOfBreath {
          total
          __typename
        }
        cough {
          total
          __typename
        }
        palpitations {
          total
          __typename
        }
        swellingOfLegs {
          total
          __typename
        }
        indigestionNausea {
          total
          __typename
        }
        bladderProblem {
          total
          __typename
        }
        nerveProblems {
          total
          __typename
        }
        brainFog {
          total
          __typename
        }
        anxietyDepressionNightmares {
          total
          __typename
        }
        difficultyFallingAsleep {
          total
          __typename
        }
        sleepyDuringDaytime {
          total
          __typename
        }
        loudSnoring {
          total
          __typename
        }
        uncomfortableFeelingsInLegs {
          total
          __typename
        }
        skinRash {
          total
          __typename
        }
        lossOfChangeInSmell {
          total
          __typename
        }
        excessiveThirst {
          total
          __typename
        }
        excessiveDryMouth {
          total
          __typename
        }
        visionProblems {
          total
          __typename
        }
        hearingProblems {
          total
          __typename
        }
        fertilityProblemsForWomen {
          total
          __typename
        }
        __typename
      }
      qualityOfLife {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      mentalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      socialSatisfactionRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryOutSocialActivitiesRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      anxietyInPastWeekRank {
        never {
          total
          __typename
        }
        rarely {
          total
          __typename
        }
        sometimes {
          total
          __typename
        }
        often {
          total
          __typename
        }
        always {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    medicalConditionsSummary {
      longCovid {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      newDiagnosisCounts {
        noNewDiagnosis {
          total
          __typename
        }
        heartProblems {
          total
          __typename
        }
        lungProblems {
          total
          __typename
        }
        bloodClotLung {
          total
          __typename
        }
        sleepApnea {
          total
          __typename
        }
        memory {
          total
          __typename
        }
        migraine {
          total
          __typename
        }
        stroke {
          total
          __typename
        }
        seizure {
          total
          __typename
        }
        kidneyProblems {
          total
          __typename
        }
        stomachProblems {
          total
          __typename
        }
        psychologicalProblems {
          total
          __typename
        }
        diabetes {
          total
          __typename
        }
        autoImmuneDiseases {
          total
          __typename
        }
        mecfs {
          total
          __typename
        }
        other {
          total
          __typename
        }
        notSure {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    socialSummary {
      hasMedicalInsurance {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      difficultCoveringExpenses {
        veryDifficult {
          total
          __typename
        }
        somewhatDifficult {
          total
          __typename
        }
        notAtAllDifficult {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      currentWorkSituation {
        atOffice {
          total
          __typename
        }
        hybrid {
          total
          __typename
        }
        remote {
          total
          __typename
        }
        remoteAndParenting {
          total
          __typename
        }
        onJobLeave {
          total
          __typename
        }
        unemployed {
          total
          __typename
        }
        retired {
          total
          __typename
        }
        disability {
          total
          __typename
        }
        student {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    totalFullEntries
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMapAggregationNewSubscriptionVariables,
  APITypes.OnUpdateMapAggregationNewSubscription
>;
export const onDeleteMapAggregationNew = /* GraphQL */ `subscription OnDeleteMapAggregationNew(
  $filter: ModelSubscriptionMapAggregationNewFilterInput
) {
  onDeleteMapAggregationNew(filter: $filter) {
    id
    level
    name
    stateAbbrev
    lat
    long
    covidCount
    longCovid
    aggregationType
    phq8AboveTen
    recoveredCount
    selfReportedLongCovid
    longCovidOverFourWeeks
    longCovidOverTwelveWeeks
    selfReportedPlusCovidLongCovid
    topMedicalCondition
    covidSummary {
      beenInfected {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesPositive {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      tested {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      positiveTest {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      symptomatic {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      symptomsPreventScale {
        notAtAll {
          total
          __typename
        }
        alittleBit {
          total
          __typename
        }
        somewhat {
          total
          __typename
        }
        quiteABit {
          total
          __typename
        }
        veryMuch {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    recoverySummary {
      hospitalized {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesHospitalized {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsPrescribed {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsTakenCount {
        antiViral {
          total
          __typename
        }
        oralSteroids {
          total
          __typename
        }
        antiBiotics {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      recovered {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      avglengthOfRecovery {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    vaccinationSummary {
      vaccinated {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      totalVaccineShots {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        four {
          total
          __typename
        }
        five {
          total
          __typename
        }
        fivePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      vaccineType {
        pfizer {
          total
          __typename
        }
        moderna {
          total
          __typename
        }
        janssen {
          total
          __typename
        }
        novavax {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    globalHealthSummary {
      healthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      physicalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryPhysicalActivities {
        completely {
          total
          __typename
        }
        mostly {
          total
          __typename
        }
        moderately {
          total
          __typename
        }
        aLittle {
          total
          __typename
        }
        notAtAll {
          total
          __typename
        }
        __typename
      }
      fatigueRank {
        none {
          total
          __typename
        }
        mild {
          total
          __typename
        }
        moderate {
          total
          __typename
        }
        severe {
          total
          __typename
        }
        verySevere {
          total
          __typename
        }
        __typename
      }
      avgpainLevel {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    patientHealthQuestionnaireSummary {
      littleInterestThings {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      downDepressedHopeless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      sleepProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      tiredNoEnergy {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      dietProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      badAboutSelf {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      concentrationProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      slowOrRestless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      avgPHQScore {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    symptomSummary {
      symptomCounts {
        headache {
          total
          __typename
        }
        bodyMuscleAche {
          total
          __typename
        }
        feverChillsSweatsFlushing {
          total
          __typename
        }
        faintDizzyGoofy {
          total
          __typename
        }
        postExertionalMalaise {
          total
          __typename
        }
        weaknessInArmsLegs {
          total
          __typename
        }
        shortnessOfBreath {
          total
          __typename
        }
        cough {
          total
          __typename
        }
        palpitations {
          total
          __typename
        }
        swellingOfLegs {
          total
          __typename
        }
        indigestionNausea {
          total
          __typename
        }
        bladderProblem {
          total
          __typename
        }
        nerveProblems {
          total
          __typename
        }
        brainFog {
          total
          __typename
        }
        anxietyDepressionNightmares {
          total
          __typename
        }
        difficultyFallingAsleep {
          total
          __typename
        }
        sleepyDuringDaytime {
          total
          __typename
        }
        loudSnoring {
          total
          __typename
        }
        uncomfortableFeelingsInLegs {
          total
          __typename
        }
        skinRash {
          total
          __typename
        }
        lossOfChangeInSmell {
          total
          __typename
        }
        excessiveThirst {
          total
          __typename
        }
        excessiveDryMouth {
          total
          __typename
        }
        visionProblems {
          total
          __typename
        }
        hearingProblems {
          total
          __typename
        }
        fertilityProblemsForWomen {
          total
          __typename
        }
        __typename
      }
      qualityOfLife {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      mentalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      socialSatisfactionRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryOutSocialActivitiesRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      anxietyInPastWeekRank {
        never {
          total
          __typename
        }
        rarely {
          total
          __typename
        }
        sometimes {
          total
          __typename
        }
        often {
          total
          __typename
        }
        always {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    medicalConditionsSummary {
      longCovid {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      newDiagnosisCounts {
        noNewDiagnosis {
          total
          __typename
        }
        heartProblems {
          total
          __typename
        }
        lungProblems {
          total
          __typename
        }
        bloodClotLung {
          total
          __typename
        }
        sleepApnea {
          total
          __typename
        }
        memory {
          total
          __typename
        }
        migraine {
          total
          __typename
        }
        stroke {
          total
          __typename
        }
        seizure {
          total
          __typename
        }
        kidneyProblems {
          total
          __typename
        }
        stomachProblems {
          total
          __typename
        }
        psychologicalProblems {
          total
          __typename
        }
        diabetes {
          total
          __typename
        }
        autoImmuneDiseases {
          total
          __typename
        }
        mecfs {
          total
          __typename
        }
        other {
          total
          __typename
        }
        notSure {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    socialSummary {
      hasMedicalInsurance {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      difficultCoveringExpenses {
        veryDifficult {
          total
          __typename
        }
        somewhatDifficult {
          total
          __typename
        }
        notAtAllDifficult {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      currentWorkSituation {
        atOffice {
          total
          __typename
        }
        hybrid {
          total
          __typename
        }
        remote {
          total
          __typename
        }
        remoteAndParenting {
          total
          __typename
        }
        onJobLeave {
          total
          __typename
        }
        unemployed {
          total
          __typename
        }
        retired {
          total
          __typename
        }
        disability {
          total
          __typename
        }
        student {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    totalFullEntries
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMapAggregationNewSubscriptionVariables,
  APITypes.OnDeleteMapAggregationNewSubscription
>;
export const onCreateMapAggregation = /* GraphQL */ `subscription OnCreateMapAggregation(
  $filter: ModelSubscriptionMapAggregationFilterInput
) {
  onCreateMapAggregation(filter: $filter) {
    id
    level
    name
    stateAbbrev
    lat
    long
    covidCount
    longCovid
    aggregationType
    phq8AboveTen
    recoveredCount
    selfReportedLongCovid
    longCovidOverFourWeeks
    longCovidOverTwelveWeeks
    selfReportedPlusCovidLongCovid
    topMedicalCondition
    covidSummary {
      beenInfected {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesPositive {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      tested {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      positiveTest {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      symptomatic {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      symptomsPreventScale {
        notAtAll {
          total
          __typename
        }
        alittleBit {
          total
          __typename
        }
        somewhat {
          total
          __typename
        }
        quiteABit {
          total
          __typename
        }
        veryMuch {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    recoverySummary {
      hospitalized {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesHospitalized {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsPrescribed {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsTakenCount {
        antiViral {
          total
          __typename
        }
        oralSteroids {
          total
          __typename
        }
        antiBiotics {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      recovered {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      avglengthOfRecovery {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    vaccinationSummary {
      vaccinated {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      totalVaccineShots {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        four {
          total
          __typename
        }
        five {
          total
          __typename
        }
        fivePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      vaccineType {
        pfizer {
          total
          __typename
        }
        moderna {
          total
          __typename
        }
        janssen {
          total
          __typename
        }
        novavax {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    globalHealthSummary {
      healthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      physicalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryPhysicalActivities {
        completely {
          total
          __typename
        }
        mostly {
          total
          __typename
        }
        moderately {
          total
          __typename
        }
        aLittle {
          total
          __typename
        }
        notAtAll {
          total
          __typename
        }
        __typename
      }
      fatigueRank {
        none {
          total
          __typename
        }
        mild {
          total
          __typename
        }
        moderate {
          total
          __typename
        }
        severe {
          total
          __typename
        }
        verySevere {
          total
          __typename
        }
        __typename
      }
      avgpainLevel {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    patientHealthQuestionnaireSummary {
      littleInterestThings {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      downDepressedHopeless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      sleepProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      tiredNoEnergy {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      dietProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      badAboutSelf {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      concentrationProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      slowOrRestless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      avgPHQScore {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    symptomSummary {
      symptomCounts {
        headache {
          total
          __typename
        }
        bodyMuscleAche {
          total
          __typename
        }
        feverChillsSweatsFlushing {
          total
          __typename
        }
        faintDizzyGoofy {
          total
          __typename
        }
        postExertionalMalaise {
          total
          __typename
        }
        weaknessInArmsLegs {
          total
          __typename
        }
        shortnessOfBreath {
          total
          __typename
        }
        cough {
          total
          __typename
        }
        palpitations {
          total
          __typename
        }
        swellingOfLegs {
          total
          __typename
        }
        indigestionNausea {
          total
          __typename
        }
        bladderProblem {
          total
          __typename
        }
        nerveProblems {
          total
          __typename
        }
        brainFog {
          total
          __typename
        }
        anxietyDepressionNightmares {
          total
          __typename
        }
        difficultyFallingAsleep {
          total
          __typename
        }
        sleepyDuringDaytime {
          total
          __typename
        }
        loudSnoring {
          total
          __typename
        }
        uncomfortableFeelingsInLegs {
          total
          __typename
        }
        skinRash {
          total
          __typename
        }
        lossOfChangeInSmell {
          total
          __typename
        }
        excessiveThirst {
          total
          __typename
        }
        excessiveDryMouth {
          total
          __typename
        }
        visionProblems {
          total
          __typename
        }
        hearingProblems {
          total
          __typename
        }
        fertilityProblemsForWomen {
          total
          __typename
        }
        __typename
      }
      qualityOfLife {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      mentalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      socialSatisfactionRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryOutSocialActivitiesRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      anxietyInPastWeekRank {
        never {
          total
          __typename
        }
        rarely {
          total
          __typename
        }
        sometimes {
          total
          __typename
        }
        often {
          total
          __typename
        }
        always {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    medicalConditionsSummary {
      longCovid {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      newDiagnosisCounts {
        noNewDiagnosis {
          total
          __typename
        }
        heartProblems {
          total
          __typename
        }
        lungProblems {
          total
          __typename
        }
        bloodClotLung {
          total
          __typename
        }
        sleepApnea {
          total
          __typename
        }
        memory {
          total
          __typename
        }
        migraine {
          total
          __typename
        }
        stroke {
          total
          __typename
        }
        seizure {
          total
          __typename
        }
        kidneyProblems {
          total
          __typename
        }
        stomachProblems {
          total
          __typename
        }
        psychologicalProblems {
          total
          __typename
        }
        diabetes {
          total
          __typename
        }
        autoImmuneDiseases {
          total
          __typename
        }
        mecfs {
          total
          __typename
        }
        other {
          total
          __typename
        }
        notSure {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    socialSummary {
      hasMedicalInsurance {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      difficultCoveringExpenses {
        veryDifficult {
          total
          __typename
        }
        somewhatDifficult {
          total
          __typename
        }
        notAtAllDifficult {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      currentWorkSituation {
        atOffice {
          total
          __typename
        }
        hybrid {
          total
          __typename
        }
        remote {
          total
          __typename
        }
        remoteAndParenting {
          total
          __typename
        }
        onJobLeave {
          total
          __typename
        }
        unemployed {
          total
          __typename
        }
        retired {
          total
          __typename
        }
        disability {
          total
          __typename
        }
        student {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    totalFullEntries
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMapAggregationSubscriptionVariables,
  APITypes.OnCreateMapAggregationSubscription
>;
export const onUpdateMapAggregation = /* GraphQL */ `subscription OnUpdateMapAggregation(
  $filter: ModelSubscriptionMapAggregationFilterInput
) {
  onUpdateMapAggregation(filter: $filter) {
    id
    level
    name
    stateAbbrev
    lat
    long
    covidCount
    longCovid
    aggregationType
    phq8AboveTen
    recoveredCount
    selfReportedLongCovid
    longCovidOverFourWeeks
    longCovidOverTwelveWeeks
    selfReportedPlusCovidLongCovid
    topMedicalCondition
    covidSummary {
      beenInfected {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesPositive {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      tested {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      positiveTest {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      symptomatic {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      symptomsPreventScale {
        notAtAll {
          total
          __typename
        }
        alittleBit {
          total
          __typename
        }
        somewhat {
          total
          __typename
        }
        quiteABit {
          total
          __typename
        }
        veryMuch {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    recoverySummary {
      hospitalized {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesHospitalized {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsPrescribed {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsTakenCount {
        antiViral {
          total
          __typename
        }
        oralSteroids {
          total
          __typename
        }
        antiBiotics {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      recovered {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      avglengthOfRecovery {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    vaccinationSummary {
      vaccinated {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      totalVaccineShots {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        four {
          total
          __typename
        }
        five {
          total
          __typename
        }
        fivePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      vaccineType {
        pfizer {
          total
          __typename
        }
        moderna {
          total
          __typename
        }
        janssen {
          total
          __typename
        }
        novavax {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    globalHealthSummary {
      healthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      physicalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryPhysicalActivities {
        completely {
          total
          __typename
        }
        mostly {
          total
          __typename
        }
        moderately {
          total
          __typename
        }
        aLittle {
          total
          __typename
        }
        notAtAll {
          total
          __typename
        }
        __typename
      }
      fatigueRank {
        none {
          total
          __typename
        }
        mild {
          total
          __typename
        }
        moderate {
          total
          __typename
        }
        severe {
          total
          __typename
        }
        verySevere {
          total
          __typename
        }
        __typename
      }
      avgpainLevel {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    patientHealthQuestionnaireSummary {
      littleInterestThings {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      downDepressedHopeless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      sleepProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      tiredNoEnergy {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      dietProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      badAboutSelf {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      concentrationProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      slowOrRestless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      avgPHQScore {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    symptomSummary {
      symptomCounts {
        headache {
          total
          __typename
        }
        bodyMuscleAche {
          total
          __typename
        }
        feverChillsSweatsFlushing {
          total
          __typename
        }
        faintDizzyGoofy {
          total
          __typename
        }
        postExertionalMalaise {
          total
          __typename
        }
        weaknessInArmsLegs {
          total
          __typename
        }
        shortnessOfBreath {
          total
          __typename
        }
        cough {
          total
          __typename
        }
        palpitations {
          total
          __typename
        }
        swellingOfLegs {
          total
          __typename
        }
        indigestionNausea {
          total
          __typename
        }
        bladderProblem {
          total
          __typename
        }
        nerveProblems {
          total
          __typename
        }
        brainFog {
          total
          __typename
        }
        anxietyDepressionNightmares {
          total
          __typename
        }
        difficultyFallingAsleep {
          total
          __typename
        }
        sleepyDuringDaytime {
          total
          __typename
        }
        loudSnoring {
          total
          __typename
        }
        uncomfortableFeelingsInLegs {
          total
          __typename
        }
        skinRash {
          total
          __typename
        }
        lossOfChangeInSmell {
          total
          __typename
        }
        excessiveThirst {
          total
          __typename
        }
        excessiveDryMouth {
          total
          __typename
        }
        visionProblems {
          total
          __typename
        }
        hearingProblems {
          total
          __typename
        }
        fertilityProblemsForWomen {
          total
          __typename
        }
        __typename
      }
      qualityOfLife {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      mentalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      socialSatisfactionRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryOutSocialActivitiesRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      anxietyInPastWeekRank {
        never {
          total
          __typename
        }
        rarely {
          total
          __typename
        }
        sometimes {
          total
          __typename
        }
        often {
          total
          __typename
        }
        always {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    medicalConditionsSummary {
      longCovid {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      newDiagnosisCounts {
        noNewDiagnosis {
          total
          __typename
        }
        heartProblems {
          total
          __typename
        }
        lungProblems {
          total
          __typename
        }
        bloodClotLung {
          total
          __typename
        }
        sleepApnea {
          total
          __typename
        }
        memory {
          total
          __typename
        }
        migraine {
          total
          __typename
        }
        stroke {
          total
          __typename
        }
        seizure {
          total
          __typename
        }
        kidneyProblems {
          total
          __typename
        }
        stomachProblems {
          total
          __typename
        }
        psychologicalProblems {
          total
          __typename
        }
        diabetes {
          total
          __typename
        }
        autoImmuneDiseases {
          total
          __typename
        }
        mecfs {
          total
          __typename
        }
        other {
          total
          __typename
        }
        notSure {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    socialSummary {
      hasMedicalInsurance {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      difficultCoveringExpenses {
        veryDifficult {
          total
          __typename
        }
        somewhatDifficult {
          total
          __typename
        }
        notAtAllDifficult {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      currentWorkSituation {
        atOffice {
          total
          __typename
        }
        hybrid {
          total
          __typename
        }
        remote {
          total
          __typename
        }
        remoteAndParenting {
          total
          __typename
        }
        onJobLeave {
          total
          __typename
        }
        unemployed {
          total
          __typename
        }
        retired {
          total
          __typename
        }
        disability {
          total
          __typename
        }
        student {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    totalFullEntries
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMapAggregationSubscriptionVariables,
  APITypes.OnUpdateMapAggregationSubscription
>;
export const onDeleteMapAggregation = /* GraphQL */ `subscription OnDeleteMapAggregation(
  $filter: ModelSubscriptionMapAggregationFilterInput
) {
  onDeleteMapAggregation(filter: $filter) {
    id
    level
    name
    stateAbbrev
    lat
    long
    covidCount
    longCovid
    aggregationType
    phq8AboveTen
    recoveredCount
    selfReportedLongCovid
    longCovidOverFourWeeks
    longCovidOverTwelveWeeks
    selfReportedPlusCovidLongCovid
    topMedicalCondition
    covidSummary {
      beenInfected {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesPositive {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      tested {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      positiveTest {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      symptomatic {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      symptomsPreventScale {
        notAtAll {
          total
          __typename
        }
        alittleBit {
          total
          __typename
        }
        somewhat {
          total
          __typename
        }
        quiteABit {
          total
          __typename
        }
        veryMuch {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    recoverySummary {
      hospitalized {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesHospitalized {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsPrescribed {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsTakenCount {
        antiViral {
          total
          __typename
        }
        oralSteroids {
          total
          __typename
        }
        antiBiotics {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      recovered {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      avglengthOfRecovery {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    vaccinationSummary {
      vaccinated {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      totalVaccineShots {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        four {
          total
          __typename
        }
        five {
          total
          __typename
        }
        fivePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      vaccineType {
        pfizer {
          total
          __typename
        }
        moderna {
          total
          __typename
        }
        janssen {
          total
          __typename
        }
        novavax {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    globalHealthSummary {
      healthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      physicalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryPhysicalActivities {
        completely {
          total
          __typename
        }
        mostly {
          total
          __typename
        }
        moderately {
          total
          __typename
        }
        aLittle {
          total
          __typename
        }
        notAtAll {
          total
          __typename
        }
        __typename
      }
      fatigueRank {
        none {
          total
          __typename
        }
        mild {
          total
          __typename
        }
        moderate {
          total
          __typename
        }
        severe {
          total
          __typename
        }
        verySevere {
          total
          __typename
        }
        __typename
      }
      avgpainLevel {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    patientHealthQuestionnaireSummary {
      littleInterestThings {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      downDepressedHopeless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      sleepProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      tiredNoEnergy {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      dietProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      badAboutSelf {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      concentrationProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      slowOrRestless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      avgPHQScore {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    symptomSummary {
      symptomCounts {
        headache {
          total
          __typename
        }
        bodyMuscleAche {
          total
          __typename
        }
        feverChillsSweatsFlushing {
          total
          __typename
        }
        faintDizzyGoofy {
          total
          __typename
        }
        postExertionalMalaise {
          total
          __typename
        }
        weaknessInArmsLegs {
          total
          __typename
        }
        shortnessOfBreath {
          total
          __typename
        }
        cough {
          total
          __typename
        }
        palpitations {
          total
          __typename
        }
        swellingOfLegs {
          total
          __typename
        }
        indigestionNausea {
          total
          __typename
        }
        bladderProblem {
          total
          __typename
        }
        nerveProblems {
          total
          __typename
        }
        brainFog {
          total
          __typename
        }
        anxietyDepressionNightmares {
          total
          __typename
        }
        difficultyFallingAsleep {
          total
          __typename
        }
        sleepyDuringDaytime {
          total
          __typename
        }
        loudSnoring {
          total
          __typename
        }
        uncomfortableFeelingsInLegs {
          total
          __typename
        }
        skinRash {
          total
          __typename
        }
        lossOfChangeInSmell {
          total
          __typename
        }
        excessiveThirst {
          total
          __typename
        }
        excessiveDryMouth {
          total
          __typename
        }
        visionProblems {
          total
          __typename
        }
        hearingProblems {
          total
          __typename
        }
        fertilityProblemsForWomen {
          total
          __typename
        }
        __typename
      }
      qualityOfLife {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      mentalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      socialSatisfactionRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryOutSocialActivitiesRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      anxietyInPastWeekRank {
        never {
          total
          __typename
        }
        rarely {
          total
          __typename
        }
        sometimes {
          total
          __typename
        }
        often {
          total
          __typename
        }
        always {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    medicalConditionsSummary {
      longCovid {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      newDiagnosisCounts {
        noNewDiagnosis {
          total
          __typename
        }
        heartProblems {
          total
          __typename
        }
        lungProblems {
          total
          __typename
        }
        bloodClotLung {
          total
          __typename
        }
        sleepApnea {
          total
          __typename
        }
        memory {
          total
          __typename
        }
        migraine {
          total
          __typename
        }
        stroke {
          total
          __typename
        }
        seizure {
          total
          __typename
        }
        kidneyProblems {
          total
          __typename
        }
        stomachProblems {
          total
          __typename
        }
        psychologicalProblems {
          total
          __typename
        }
        diabetes {
          total
          __typename
        }
        autoImmuneDiseases {
          total
          __typename
        }
        mecfs {
          total
          __typename
        }
        other {
          total
          __typename
        }
        notSure {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    socialSummary {
      hasMedicalInsurance {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      difficultCoveringExpenses {
        veryDifficult {
          total
          __typename
        }
        somewhatDifficult {
          total
          __typename
        }
        notAtAllDifficult {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      currentWorkSituation {
        atOffice {
          total
          __typename
        }
        hybrid {
          total
          __typename
        }
        remote {
          total
          __typename
        }
        remoteAndParenting {
          total
          __typename
        }
        onJobLeave {
          total
          __typename
        }
        unemployed {
          total
          __typename
        }
        retired {
          total
          __typename
        }
        disability {
          total
          __typename
        }
        student {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    totalFullEntries
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMapAggregationSubscriptionVariables,
  APITypes.OnDeleteMapAggregationSubscription
>;
export const onCreateMapData = /* GraphQL */ `subscription OnCreateMapData($filter: ModelSubscriptionMapDataFilterInput) {
  onCreateMapData(filter: $filter) {
    id
    level
    name
    stateAbbrev
    lat
    long
    covidCount
    longCovid
    aggregationType
    phq8AboveTen
    recoveredCount
    selfReportedLongCovid
    longCovidOverFourWeeks
    longCovidOverTwelveWeeks
    selfReportedPlusCovidLongCovid
    topMedicalCondition
    covidSummary {
      beenInfected {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesPositive {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      tested {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      positiveTest {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      symptomatic {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      symptomsPreventScale {
        notAtAll {
          total
          __typename
        }
        alittleBit {
          total
          __typename
        }
        somewhat {
          total
          __typename
        }
        quiteABit {
          total
          __typename
        }
        veryMuch {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    recoverySummary {
      hospitalized {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesHospitalized {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsPrescribed {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsTakenCount {
        antiViral {
          total
          __typename
        }
        oralSteroids {
          total
          __typename
        }
        antiBiotics {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      recovered {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      avglengthOfRecovery {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    vaccinationSummary {
      vaccinated {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      totalVaccineShots {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        four {
          total
          __typename
        }
        five {
          total
          __typename
        }
        fivePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      vaccineType {
        pfizer {
          total
          __typename
        }
        moderna {
          total
          __typename
        }
        janssen {
          total
          __typename
        }
        novavax {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    globalHealthSummary {
      healthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      physicalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryPhysicalActivities {
        completely {
          total
          __typename
        }
        mostly {
          total
          __typename
        }
        moderately {
          total
          __typename
        }
        aLittle {
          total
          __typename
        }
        notAtAll {
          total
          __typename
        }
        __typename
      }
      fatigueRank {
        none {
          total
          __typename
        }
        mild {
          total
          __typename
        }
        moderate {
          total
          __typename
        }
        severe {
          total
          __typename
        }
        verySevere {
          total
          __typename
        }
        __typename
      }
      avgpainLevel {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    patientHealthQuestionnaireSummary {
      littleInterestThings {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      downDepressedHopeless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      sleepProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      tiredNoEnergy {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      dietProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      badAboutSelf {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      concentrationProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      slowOrRestless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      avgPHQScore {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    symptomSummary {
      symptomCounts {
        headache {
          total
          __typename
        }
        bodyMuscleAche {
          total
          __typename
        }
        feverChillsSweatsFlushing {
          total
          __typename
        }
        faintDizzyGoofy {
          total
          __typename
        }
        postExertionalMalaise {
          total
          __typename
        }
        weaknessInArmsLegs {
          total
          __typename
        }
        shortnessOfBreath {
          total
          __typename
        }
        cough {
          total
          __typename
        }
        palpitations {
          total
          __typename
        }
        swellingOfLegs {
          total
          __typename
        }
        indigestionNausea {
          total
          __typename
        }
        bladderProblem {
          total
          __typename
        }
        nerveProblems {
          total
          __typename
        }
        brainFog {
          total
          __typename
        }
        anxietyDepressionNightmares {
          total
          __typename
        }
        difficultyFallingAsleep {
          total
          __typename
        }
        sleepyDuringDaytime {
          total
          __typename
        }
        loudSnoring {
          total
          __typename
        }
        uncomfortableFeelingsInLegs {
          total
          __typename
        }
        skinRash {
          total
          __typename
        }
        lossOfChangeInSmell {
          total
          __typename
        }
        excessiveThirst {
          total
          __typename
        }
        excessiveDryMouth {
          total
          __typename
        }
        visionProblems {
          total
          __typename
        }
        hearingProblems {
          total
          __typename
        }
        fertilityProblemsForWomen {
          total
          __typename
        }
        __typename
      }
      qualityOfLife {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      mentalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      socialSatisfactionRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryOutSocialActivitiesRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      anxietyInPastWeekRank {
        never {
          total
          __typename
        }
        rarely {
          total
          __typename
        }
        sometimes {
          total
          __typename
        }
        often {
          total
          __typename
        }
        always {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    medicalConditionsSummary {
      longCovid {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      newDiagnosisCounts {
        noNewDiagnosis {
          total
          __typename
        }
        heartProblems {
          total
          __typename
        }
        lungProblems {
          total
          __typename
        }
        bloodClotLung {
          total
          __typename
        }
        sleepApnea {
          total
          __typename
        }
        memory {
          total
          __typename
        }
        migraine {
          total
          __typename
        }
        stroke {
          total
          __typename
        }
        seizure {
          total
          __typename
        }
        kidneyProblems {
          total
          __typename
        }
        stomachProblems {
          total
          __typename
        }
        psychologicalProblems {
          total
          __typename
        }
        diabetes {
          total
          __typename
        }
        autoImmuneDiseases {
          total
          __typename
        }
        mecfs {
          total
          __typename
        }
        other {
          total
          __typename
        }
        notSure {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    socialSummary {
      hasMedicalInsurance {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      difficultCoveringExpenses {
        veryDifficult {
          total
          __typename
        }
        somewhatDifficult {
          total
          __typename
        }
        notAtAllDifficult {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      currentWorkSituation {
        atOffice {
          total
          __typename
        }
        hybrid {
          total
          __typename
        }
        remote {
          total
          __typename
        }
        remoteAndParenting {
          total
          __typename
        }
        onJobLeave {
          total
          __typename
        }
        unemployed {
          total
          __typename
        }
        retired {
          total
          __typename
        }
        disability {
          total
          __typename
        }
        student {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    totalFullEntries
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMapDataSubscriptionVariables,
  APITypes.OnCreateMapDataSubscription
>;
export const onUpdateMapData = /* GraphQL */ `subscription OnUpdateMapData($filter: ModelSubscriptionMapDataFilterInput) {
  onUpdateMapData(filter: $filter) {
    id
    level
    name
    stateAbbrev
    lat
    long
    covidCount
    longCovid
    aggregationType
    phq8AboveTen
    recoveredCount
    selfReportedLongCovid
    longCovidOverFourWeeks
    longCovidOverTwelveWeeks
    selfReportedPlusCovidLongCovid
    topMedicalCondition
    covidSummary {
      beenInfected {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesPositive {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      tested {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      positiveTest {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      symptomatic {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      symptomsPreventScale {
        notAtAll {
          total
          __typename
        }
        alittleBit {
          total
          __typename
        }
        somewhat {
          total
          __typename
        }
        quiteABit {
          total
          __typename
        }
        veryMuch {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    recoverySummary {
      hospitalized {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesHospitalized {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsPrescribed {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsTakenCount {
        antiViral {
          total
          __typename
        }
        oralSteroids {
          total
          __typename
        }
        antiBiotics {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      recovered {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      avglengthOfRecovery {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    vaccinationSummary {
      vaccinated {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      totalVaccineShots {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        four {
          total
          __typename
        }
        five {
          total
          __typename
        }
        fivePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      vaccineType {
        pfizer {
          total
          __typename
        }
        moderna {
          total
          __typename
        }
        janssen {
          total
          __typename
        }
        novavax {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    globalHealthSummary {
      healthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      physicalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryPhysicalActivities {
        completely {
          total
          __typename
        }
        mostly {
          total
          __typename
        }
        moderately {
          total
          __typename
        }
        aLittle {
          total
          __typename
        }
        notAtAll {
          total
          __typename
        }
        __typename
      }
      fatigueRank {
        none {
          total
          __typename
        }
        mild {
          total
          __typename
        }
        moderate {
          total
          __typename
        }
        severe {
          total
          __typename
        }
        verySevere {
          total
          __typename
        }
        __typename
      }
      avgpainLevel {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    patientHealthQuestionnaireSummary {
      littleInterestThings {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      downDepressedHopeless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      sleepProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      tiredNoEnergy {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      dietProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      badAboutSelf {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      concentrationProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      slowOrRestless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      avgPHQScore {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    symptomSummary {
      symptomCounts {
        headache {
          total
          __typename
        }
        bodyMuscleAche {
          total
          __typename
        }
        feverChillsSweatsFlushing {
          total
          __typename
        }
        faintDizzyGoofy {
          total
          __typename
        }
        postExertionalMalaise {
          total
          __typename
        }
        weaknessInArmsLegs {
          total
          __typename
        }
        shortnessOfBreath {
          total
          __typename
        }
        cough {
          total
          __typename
        }
        palpitations {
          total
          __typename
        }
        swellingOfLegs {
          total
          __typename
        }
        indigestionNausea {
          total
          __typename
        }
        bladderProblem {
          total
          __typename
        }
        nerveProblems {
          total
          __typename
        }
        brainFog {
          total
          __typename
        }
        anxietyDepressionNightmares {
          total
          __typename
        }
        difficultyFallingAsleep {
          total
          __typename
        }
        sleepyDuringDaytime {
          total
          __typename
        }
        loudSnoring {
          total
          __typename
        }
        uncomfortableFeelingsInLegs {
          total
          __typename
        }
        skinRash {
          total
          __typename
        }
        lossOfChangeInSmell {
          total
          __typename
        }
        excessiveThirst {
          total
          __typename
        }
        excessiveDryMouth {
          total
          __typename
        }
        visionProblems {
          total
          __typename
        }
        hearingProblems {
          total
          __typename
        }
        fertilityProblemsForWomen {
          total
          __typename
        }
        __typename
      }
      qualityOfLife {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      mentalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      socialSatisfactionRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryOutSocialActivitiesRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      anxietyInPastWeekRank {
        never {
          total
          __typename
        }
        rarely {
          total
          __typename
        }
        sometimes {
          total
          __typename
        }
        often {
          total
          __typename
        }
        always {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    medicalConditionsSummary {
      longCovid {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      newDiagnosisCounts {
        noNewDiagnosis {
          total
          __typename
        }
        heartProblems {
          total
          __typename
        }
        lungProblems {
          total
          __typename
        }
        bloodClotLung {
          total
          __typename
        }
        sleepApnea {
          total
          __typename
        }
        memory {
          total
          __typename
        }
        migraine {
          total
          __typename
        }
        stroke {
          total
          __typename
        }
        seizure {
          total
          __typename
        }
        kidneyProblems {
          total
          __typename
        }
        stomachProblems {
          total
          __typename
        }
        psychologicalProblems {
          total
          __typename
        }
        diabetes {
          total
          __typename
        }
        autoImmuneDiseases {
          total
          __typename
        }
        mecfs {
          total
          __typename
        }
        other {
          total
          __typename
        }
        notSure {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    socialSummary {
      hasMedicalInsurance {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      difficultCoveringExpenses {
        veryDifficult {
          total
          __typename
        }
        somewhatDifficult {
          total
          __typename
        }
        notAtAllDifficult {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      currentWorkSituation {
        atOffice {
          total
          __typename
        }
        hybrid {
          total
          __typename
        }
        remote {
          total
          __typename
        }
        remoteAndParenting {
          total
          __typename
        }
        onJobLeave {
          total
          __typename
        }
        unemployed {
          total
          __typename
        }
        retired {
          total
          __typename
        }
        disability {
          total
          __typename
        }
        student {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    totalFullEntries
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMapDataSubscriptionVariables,
  APITypes.OnUpdateMapDataSubscription
>;
export const onDeleteMapData = /* GraphQL */ `subscription OnDeleteMapData($filter: ModelSubscriptionMapDataFilterInput) {
  onDeleteMapData(filter: $filter) {
    id
    level
    name
    stateAbbrev
    lat
    long
    covidCount
    longCovid
    aggregationType
    phq8AboveTen
    recoveredCount
    selfReportedLongCovid
    longCovidOverFourWeeks
    longCovidOverTwelveWeeks
    selfReportedPlusCovidLongCovid
    topMedicalCondition
    covidSummary {
      beenInfected {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesPositive {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      tested {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      positiveTest {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      symptomatic {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      symptomsPreventScale {
        notAtAll {
          total
          __typename
        }
        alittleBit {
          total
          __typename
        }
        somewhat {
          total
          __typename
        }
        quiteABit {
          total
          __typename
        }
        veryMuch {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    recoverySummary {
      hospitalized {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      timesHospitalized {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        threePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsPrescribed {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      medicationsTakenCount {
        antiViral {
          total
          __typename
        }
        oralSteroids {
          total
          __typename
        }
        antiBiotics {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      recovered {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      avglengthOfRecovery {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    vaccinationSummary {
      vaccinated {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      totalVaccineShots {
        one {
          total
          __typename
        }
        two {
          total
          __typename
        }
        three {
          total
          __typename
        }
        four {
          total
          __typename
        }
        five {
          total
          __typename
        }
        fivePlus {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      vaccineType {
        pfizer {
          total
          __typename
        }
        moderna {
          total
          __typename
        }
        janssen {
          total
          __typename
        }
        novavax {
          total
          __typename
        }
        other {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    globalHealthSummary {
      healthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      physicalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryPhysicalActivities {
        completely {
          total
          __typename
        }
        mostly {
          total
          __typename
        }
        moderately {
          total
          __typename
        }
        aLittle {
          total
          __typename
        }
        notAtAll {
          total
          __typename
        }
        __typename
      }
      fatigueRank {
        none {
          total
          __typename
        }
        mild {
          total
          __typename
        }
        moderate {
          total
          __typename
        }
        severe {
          total
          __typename
        }
        verySevere {
          total
          __typename
        }
        __typename
      }
      avgpainLevel {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    patientHealthQuestionnaireSummary {
      littleInterestThings {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      downDepressedHopeless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      sleepProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      tiredNoEnergy {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      dietProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      badAboutSelf {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      concentrationProblems {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      slowOrRestless {
        notAtAll {
          total
          __typename
        }
        severalDays {
          total
          __typename
        }
        moreThanHalfTheDays {
          total
          __typename
        }
        nearlyEveryDay {
          total
          __typename
        }
        __typename
      }
      avgPHQScore {
        race {
          ranges
          __typename
        }
        sex {
          ranges
          __typename
        }
        age {
          ranges
          __typename
        }
        __typename
      }
      __typename
    }
    symptomSummary {
      symptomCounts {
        headache {
          total
          __typename
        }
        bodyMuscleAche {
          total
          __typename
        }
        feverChillsSweatsFlushing {
          total
          __typename
        }
        faintDizzyGoofy {
          total
          __typename
        }
        postExertionalMalaise {
          total
          __typename
        }
        weaknessInArmsLegs {
          total
          __typename
        }
        shortnessOfBreath {
          total
          __typename
        }
        cough {
          total
          __typename
        }
        palpitations {
          total
          __typename
        }
        swellingOfLegs {
          total
          __typename
        }
        indigestionNausea {
          total
          __typename
        }
        bladderProblem {
          total
          __typename
        }
        nerveProblems {
          total
          __typename
        }
        brainFog {
          total
          __typename
        }
        anxietyDepressionNightmares {
          total
          __typename
        }
        difficultyFallingAsleep {
          total
          __typename
        }
        sleepyDuringDaytime {
          total
          __typename
        }
        loudSnoring {
          total
          __typename
        }
        uncomfortableFeelingsInLegs {
          total
          __typename
        }
        skinRash {
          total
          __typename
        }
        lossOfChangeInSmell {
          total
          __typename
        }
        excessiveThirst {
          total
          __typename
        }
        excessiveDryMouth {
          total
          __typename
        }
        visionProblems {
          total
          __typename
        }
        hearingProblems {
          total
          __typename
        }
        fertilityProblemsForWomen {
          total
          __typename
        }
        __typename
      }
      qualityOfLife {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      mentalHealthRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      socialSatisfactionRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      carryOutSocialActivitiesRank {
        excellent {
          total
          __typename
        }
        veryGood {
          total
          __typename
        }
        good {
          total
          __typename
        }
        fair {
          total
          __typename
        }
        poor {
          total
          __typename
        }
        __typename
      }
      anxietyInPastWeekRank {
        never {
          total
          __typename
        }
        rarely {
          total
          __typename
        }
        sometimes {
          total
          __typename
        }
        often {
          total
          __typename
        }
        always {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    medicalConditionsSummary {
      longCovid {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        __typename
      }
      newDiagnosisCounts {
        noNewDiagnosis {
          total
          __typename
        }
        heartProblems {
          total
          __typename
        }
        lungProblems {
          total
          __typename
        }
        bloodClotLung {
          total
          __typename
        }
        sleepApnea {
          total
          __typename
        }
        memory {
          total
          __typename
        }
        migraine {
          total
          __typename
        }
        stroke {
          total
          __typename
        }
        seizure {
          total
          __typename
        }
        kidneyProblems {
          total
          __typename
        }
        stomachProblems {
          total
          __typename
        }
        psychologicalProblems {
          total
          __typename
        }
        diabetes {
          total
          __typename
        }
        autoImmuneDiseases {
          total
          __typename
        }
        mecfs {
          total
          __typename
        }
        other {
          total
          __typename
        }
        notSure {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    socialSummary {
      hasMedicalInsurance {
        yes {
          total
          __typename
        }
        no {
          total
          __typename
        }
        __typename
      }
      difficultCoveringExpenses {
        veryDifficult {
          total
          __typename
        }
        somewhatDifficult {
          total
          __typename
        }
        notAtAllDifficult {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      currentWorkSituation {
        atOffice {
          total
          __typename
        }
        hybrid {
          total
          __typename
        }
        remote {
          total
          __typename
        }
        remoteAndParenting {
          total
          __typename
        }
        onJobLeave {
          total
          __typename
        }
        unemployed {
          total
          __typename
        }
        retired {
          total
          __typename
        }
        disability {
          total
          __typename
        }
        student {
          total
          __typename
        }
        doNotKnow {
          total
          __typename
        }
        preferNotToAnswer {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    totalFullEntries
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMapDataSubscriptionVariables,
  APITypes.OnDeleteMapDataSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
    id
    email
    age
    race
    sex
    height
    weight
    covidStatus
    lastSubmission
    lastSubmissionEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    lastSignIn
    notificationFreq
    notificationMethod
    createdAt
    updatedAt
    userLastSubmissionEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
    id
    email
    age
    race
    sex
    height
    weight
    covidStatus
    lastSubmission
    lastSubmissionEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    lastSignIn
    notificationFreq
    notificationMethod
    createdAt
    updatedAt
    userLastSubmissionEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
    id
    email
    age
    race
    sex
    height
    weight
    covidStatus
    lastSubmission
    lastSubmissionEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    lastSignIn
    notificationFreq
    notificationMethod
    createdAt
    updatedAt
    userLastSubmissionEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
    id
    recipientEmail
    message
    sendStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
    id
    recipientEmail
    message
    sendStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
    id
    recipientEmail
    message
    sendStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateSurveyEntry = /* GraphQL */ `subscription OnCreateSurveyEntry(
  $filter: ModelSubscriptionSurveyEntryFilterInput
  $owner: String
) {
  onCreateSurveyEntry(filter: $filter, owner: $owner) {
    id
    parentSurveyId
    email
    state
    countyState
    createdAt
    surveyVersion
    surveyType
    age
    race
    sex
    height
    weight
    covidEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      beenInfected
      timesPositive
      lastPositive
      tested
      positiveTest
      testMethod
      hospitalized
      timesHospitalized
      symptomatic
      symptomsPreventScale
      medicationsPrescribed
      medicationsTaken
      createdAt
      updatedAt
      covidEntrySurveyEntryId
      owner
      __typename
    }
    vaccinationEntry {
      id
      state
      countyState
      age
      race
      sex
      height
      weight
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      totalVaccineShots
      vaccinated
      vaccineType
      dateOfLastVaccine
      createdAt
      updatedAt
      vaccinationEntrySurveyEntryId
      owner
      __typename
    }
    socialDeterminantsEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      hasMedicalInsurance
      difficultCoveringExpenses
      currentWorkSituation
      createdAt
      updatedAt
      socialDeterminantsEntrySurveyEntryId
      owner
      __typename
    }
    recoveryEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      recovered
      lengthOfRecovery
      createdAt
      updatedAt
      recoveryEntrySurveyEntryId
      owner
      __typename
    }
    globalHealthEntry {
      id
      state
      countyState
      age
      race
      sex
      height
      weight
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      healthRank
      physicalHealthRank
      carryPhysicalActivities
      fatigueRank
      painLevel
      createdAt
      updatedAt
      globalHealthEntrySurveyEntryId
      owner
      __typename
    }
    PatientHealthEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      generalHealthResults
      totalScore
      createdAt
      updatedAt
      patientHealthEntrySurveyEntryId
      owner
      __typename
    }
    symptomsEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      createdAt
      symptoms
      qualityOfLifeRank
      mentalHealthRank
      socialSatisfactionRank
      carryOutSocialActivitiesRank
      anxietyInPastWeekRank
      medicalConditions
      hasLongCovid
      updatedAt
      symptomEntrySurveyEntryId
      owner
      __typename
    }
    monthlyEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      results
      createdAt
      updatedAt
      monthlyEntrySurveyEntryId
      owner
      __typename
    }
    updatedAt
    surveyEntryCovidEntryId
    surveyEntryVaccinationEntryId
    surveyEntrySocialDeterminantsEntryId
    surveyEntryRecoveryEntryId
    surveyEntryGlobalHealthEntryId
    surveyEntryPatientHealthEntryId
    surveyEntrySymptomsEntryId
    surveyEntryMonthlyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSurveyEntrySubscriptionVariables,
  APITypes.OnCreateSurveyEntrySubscription
>;
export const onUpdateSurveyEntry = /* GraphQL */ `subscription OnUpdateSurveyEntry(
  $filter: ModelSubscriptionSurveyEntryFilterInput
  $owner: String
) {
  onUpdateSurveyEntry(filter: $filter, owner: $owner) {
    id
    parentSurveyId
    email
    state
    countyState
    createdAt
    surveyVersion
    surveyType
    age
    race
    sex
    height
    weight
    covidEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      beenInfected
      timesPositive
      lastPositive
      tested
      positiveTest
      testMethod
      hospitalized
      timesHospitalized
      symptomatic
      symptomsPreventScale
      medicationsPrescribed
      medicationsTaken
      createdAt
      updatedAt
      covidEntrySurveyEntryId
      owner
      __typename
    }
    vaccinationEntry {
      id
      state
      countyState
      age
      race
      sex
      height
      weight
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      totalVaccineShots
      vaccinated
      vaccineType
      dateOfLastVaccine
      createdAt
      updatedAt
      vaccinationEntrySurveyEntryId
      owner
      __typename
    }
    socialDeterminantsEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      hasMedicalInsurance
      difficultCoveringExpenses
      currentWorkSituation
      createdAt
      updatedAt
      socialDeterminantsEntrySurveyEntryId
      owner
      __typename
    }
    recoveryEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      recovered
      lengthOfRecovery
      createdAt
      updatedAt
      recoveryEntrySurveyEntryId
      owner
      __typename
    }
    globalHealthEntry {
      id
      state
      countyState
      age
      race
      sex
      height
      weight
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      healthRank
      physicalHealthRank
      carryPhysicalActivities
      fatigueRank
      painLevel
      createdAt
      updatedAt
      globalHealthEntrySurveyEntryId
      owner
      __typename
    }
    PatientHealthEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      generalHealthResults
      totalScore
      createdAt
      updatedAt
      patientHealthEntrySurveyEntryId
      owner
      __typename
    }
    symptomsEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      createdAt
      symptoms
      qualityOfLifeRank
      mentalHealthRank
      socialSatisfactionRank
      carryOutSocialActivitiesRank
      anxietyInPastWeekRank
      medicalConditions
      hasLongCovid
      updatedAt
      symptomEntrySurveyEntryId
      owner
      __typename
    }
    monthlyEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      results
      createdAt
      updatedAt
      monthlyEntrySurveyEntryId
      owner
      __typename
    }
    updatedAt
    surveyEntryCovidEntryId
    surveyEntryVaccinationEntryId
    surveyEntrySocialDeterminantsEntryId
    surveyEntryRecoveryEntryId
    surveyEntryGlobalHealthEntryId
    surveyEntryPatientHealthEntryId
    surveyEntrySymptomsEntryId
    surveyEntryMonthlyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSurveyEntrySubscriptionVariables,
  APITypes.OnUpdateSurveyEntrySubscription
>;
export const onDeleteSurveyEntry = /* GraphQL */ `subscription OnDeleteSurveyEntry(
  $filter: ModelSubscriptionSurveyEntryFilterInput
  $owner: String
) {
  onDeleteSurveyEntry(filter: $filter, owner: $owner) {
    id
    parentSurveyId
    email
    state
    countyState
    createdAt
    surveyVersion
    surveyType
    age
    race
    sex
    height
    weight
    covidEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      beenInfected
      timesPositive
      lastPositive
      tested
      positiveTest
      testMethod
      hospitalized
      timesHospitalized
      symptomatic
      symptomsPreventScale
      medicationsPrescribed
      medicationsTaken
      createdAt
      updatedAt
      covidEntrySurveyEntryId
      owner
      __typename
    }
    vaccinationEntry {
      id
      state
      countyState
      age
      race
      sex
      height
      weight
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      totalVaccineShots
      vaccinated
      vaccineType
      dateOfLastVaccine
      createdAt
      updatedAt
      vaccinationEntrySurveyEntryId
      owner
      __typename
    }
    socialDeterminantsEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      hasMedicalInsurance
      difficultCoveringExpenses
      currentWorkSituation
      createdAt
      updatedAt
      socialDeterminantsEntrySurveyEntryId
      owner
      __typename
    }
    recoveryEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      recovered
      lengthOfRecovery
      createdAt
      updatedAt
      recoveryEntrySurveyEntryId
      owner
      __typename
    }
    globalHealthEntry {
      id
      state
      countyState
      age
      race
      sex
      height
      weight
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      healthRank
      physicalHealthRank
      carryPhysicalActivities
      fatigueRank
      painLevel
      createdAt
      updatedAt
      globalHealthEntrySurveyEntryId
      owner
      __typename
    }
    PatientHealthEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      generalHealthResults
      totalScore
      createdAt
      updatedAt
      patientHealthEntrySurveyEntryId
      owner
      __typename
    }
    symptomsEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      createdAt
      symptoms
      qualityOfLifeRank
      mentalHealthRank
      socialSatisfactionRank
      carryOutSocialActivitiesRank
      anxietyInPastWeekRank
      medicalConditions
      hasLongCovid
      updatedAt
      symptomEntrySurveyEntryId
      owner
      __typename
    }
    monthlyEntry {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
        countyState
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        height
        weight
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          beenInfected
          timesPositive
          lastPositive
          tested
          positiveTest
          testMethod
          hospitalized
          timesHospitalized
          symptomatic
          symptomsPreventScale
          medicationsPrescribed
          medicationsTaken
          createdAt
          updatedAt
          covidEntrySurveyEntryId
          owner
          __typename
        }
        vaccinationEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
          owner
          __typename
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          hasMedicalInsurance
          difficultCoveringExpenses
          currentWorkSituation
          createdAt
          updatedAt
          socialDeterminantsEntrySurveyEntryId
          owner
          __typename
        }
        recoveryEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          recovered
          lengthOfRecovery
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
          owner
          __typename
        }
        globalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
          owner
          __typename
        }
        PatientHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          patientHealthEntrySurveyEntryId
          owner
          __typename
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          createdAt
          symptoms
          qualityOfLifeRank
          mentalHealthRank
          socialSatisfactionRank
          carryOutSocialActivitiesRank
          anxietyInPastWeekRank
          medicalConditions
          hasLongCovid
          updatedAt
          symptomEntrySurveyEntryId
          owner
          __typename
        }
        monthlyEntry {
          id
          state
          countyState
          age
          race
          sex
          height
          weight
          results
          createdAt
          updatedAt
          monthlyEntrySurveyEntryId
          owner
          __typename
        }
        updatedAt
        surveyEntryCovidEntryId
        surveyEntryVaccinationEntryId
        surveyEntrySocialDeterminantsEntryId
        surveyEntryRecoveryEntryId
        surveyEntryGlobalHealthEntryId
        surveyEntryPatientHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
        owner
        __typename
      }
      age
      race
      sex
      height
      weight
      results
      createdAt
      updatedAt
      monthlyEntrySurveyEntryId
      owner
      __typename
    }
    updatedAt
    surveyEntryCovidEntryId
    surveyEntryVaccinationEntryId
    surveyEntrySocialDeterminantsEntryId
    surveyEntryRecoveryEntryId
    surveyEntryGlobalHealthEntryId
    surveyEntryPatientHealthEntryId
    surveyEntrySymptomsEntryId
    surveyEntryMonthlyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSurveyEntrySubscriptionVariables,
  APITypes.OnDeleteSurveyEntrySubscription
>;
export const onCreateVaccinationEntry = /* GraphQL */ `subscription OnCreateVaccinationEntry(
  $filter: ModelSubscriptionVaccinationEntryFilterInput
  $owner: String
) {
  onCreateVaccinationEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    age
    race
    sex
    height
    weight
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    totalVaccineShots
    vaccinated
    vaccineType
    dateOfLastVaccine
    createdAt
    updatedAt
    vaccinationEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVaccinationEntrySubscriptionVariables,
  APITypes.OnCreateVaccinationEntrySubscription
>;
export const onUpdateVaccinationEntry = /* GraphQL */ `subscription OnUpdateVaccinationEntry(
  $filter: ModelSubscriptionVaccinationEntryFilterInput
  $owner: String
) {
  onUpdateVaccinationEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    age
    race
    sex
    height
    weight
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    totalVaccineShots
    vaccinated
    vaccineType
    dateOfLastVaccine
    createdAt
    updatedAt
    vaccinationEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVaccinationEntrySubscriptionVariables,
  APITypes.OnUpdateVaccinationEntrySubscription
>;
export const onDeleteVaccinationEntry = /* GraphQL */ `subscription OnDeleteVaccinationEntry(
  $filter: ModelSubscriptionVaccinationEntryFilterInput
  $owner: String
) {
  onDeleteVaccinationEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    age
    race
    sex
    height
    weight
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    totalVaccineShots
    vaccinated
    vaccineType
    dateOfLastVaccine
    createdAt
    updatedAt
    vaccinationEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVaccinationEntrySubscriptionVariables,
  APITypes.OnDeleteVaccinationEntrySubscription
>;
export const onCreateGlobalHealthEntry = /* GraphQL */ `subscription OnCreateGlobalHealthEntry(
  $filter: ModelSubscriptionGlobalHealthEntryFilterInput
  $owner: String
) {
  onCreateGlobalHealthEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    age
    race
    sex
    height
    weight
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    healthRank
    physicalHealthRank
    carryPhysicalActivities
    fatigueRank
    painLevel
    createdAt
    updatedAt
    globalHealthEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGlobalHealthEntrySubscriptionVariables,
  APITypes.OnCreateGlobalHealthEntrySubscription
>;
export const onUpdateGlobalHealthEntry = /* GraphQL */ `subscription OnUpdateGlobalHealthEntry(
  $filter: ModelSubscriptionGlobalHealthEntryFilterInput
  $owner: String
) {
  onUpdateGlobalHealthEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    age
    race
    sex
    height
    weight
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    healthRank
    physicalHealthRank
    carryPhysicalActivities
    fatigueRank
    painLevel
    createdAt
    updatedAt
    globalHealthEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGlobalHealthEntrySubscriptionVariables,
  APITypes.OnUpdateGlobalHealthEntrySubscription
>;
export const onDeleteGlobalHealthEntry = /* GraphQL */ `subscription OnDeleteGlobalHealthEntry(
  $filter: ModelSubscriptionGlobalHealthEntryFilterInput
  $owner: String
) {
  onDeleteGlobalHealthEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    age
    race
    sex
    height
    weight
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    healthRank
    physicalHealthRank
    carryPhysicalActivities
    fatigueRank
    painLevel
    createdAt
    updatedAt
    globalHealthEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGlobalHealthEntrySubscriptionVariables,
  APITypes.OnDeleteGlobalHealthEntrySubscription
>;
export const onCreateCovidEntry = /* GraphQL */ `subscription OnCreateCovidEntry(
  $filter: ModelSubscriptionCovidEntryFilterInput
  $owner: String
) {
  onCreateCovidEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    beenInfected
    timesPositive
    lastPositive
    tested
    positiveTest
    testMethod
    hospitalized
    timesHospitalized
    symptomatic
    symptomsPreventScale
    medicationsPrescribed
    medicationsTaken
    createdAt
    updatedAt
    covidEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCovidEntrySubscriptionVariables,
  APITypes.OnCreateCovidEntrySubscription
>;
export const onUpdateCovidEntry = /* GraphQL */ `subscription OnUpdateCovidEntry(
  $filter: ModelSubscriptionCovidEntryFilterInput
  $owner: String
) {
  onUpdateCovidEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    beenInfected
    timesPositive
    lastPositive
    tested
    positiveTest
    testMethod
    hospitalized
    timesHospitalized
    symptomatic
    symptomsPreventScale
    medicationsPrescribed
    medicationsTaken
    createdAt
    updatedAt
    covidEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCovidEntrySubscriptionVariables,
  APITypes.OnUpdateCovidEntrySubscription
>;
export const onDeleteCovidEntry = /* GraphQL */ `subscription OnDeleteCovidEntry(
  $filter: ModelSubscriptionCovidEntryFilterInput
  $owner: String
) {
  onDeleteCovidEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    beenInfected
    timesPositive
    lastPositive
    tested
    positiveTest
    testMethod
    hospitalized
    timesHospitalized
    symptomatic
    symptomsPreventScale
    medicationsPrescribed
    medicationsTaken
    createdAt
    updatedAt
    covidEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCovidEntrySubscriptionVariables,
  APITypes.OnDeleteCovidEntrySubscription
>;
export const onCreateRecoveryEntry = /* GraphQL */ `subscription OnCreateRecoveryEntry(
  $filter: ModelSubscriptionRecoveryEntryFilterInput
  $owner: String
) {
  onCreateRecoveryEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    recovered
    lengthOfRecovery
    createdAt
    updatedAt
    recoveryEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRecoveryEntrySubscriptionVariables,
  APITypes.OnCreateRecoveryEntrySubscription
>;
export const onUpdateRecoveryEntry = /* GraphQL */ `subscription OnUpdateRecoveryEntry(
  $filter: ModelSubscriptionRecoveryEntryFilterInput
  $owner: String
) {
  onUpdateRecoveryEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    recovered
    lengthOfRecovery
    createdAt
    updatedAt
    recoveryEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRecoveryEntrySubscriptionVariables,
  APITypes.OnUpdateRecoveryEntrySubscription
>;
export const onDeleteRecoveryEntry = /* GraphQL */ `subscription OnDeleteRecoveryEntry(
  $filter: ModelSubscriptionRecoveryEntryFilterInput
  $owner: String
) {
  onDeleteRecoveryEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    recovered
    lengthOfRecovery
    createdAt
    updatedAt
    recoveryEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRecoveryEntrySubscriptionVariables,
  APITypes.OnDeleteRecoveryEntrySubscription
>;
export const onCreatePatientHealthEntry = /* GraphQL */ `subscription OnCreatePatientHealthEntry(
  $filter: ModelSubscriptionPatientHealthEntryFilterInput
  $owner: String
) {
  onCreatePatientHealthEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    generalHealthResults
    totalScore
    createdAt
    updatedAt
    patientHealthEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePatientHealthEntrySubscriptionVariables,
  APITypes.OnCreatePatientHealthEntrySubscription
>;
export const onUpdatePatientHealthEntry = /* GraphQL */ `subscription OnUpdatePatientHealthEntry(
  $filter: ModelSubscriptionPatientHealthEntryFilterInput
  $owner: String
) {
  onUpdatePatientHealthEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    generalHealthResults
    totalScore
    createdAt
    updatedAt
    patientHealthEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePatientHealthEntrySubscriptionVariables,
  APITypes.OnUpdatePatientHealthEntrySubscription
>;
export const onDeletePatientHealthEntry = /* GraphQL */ `subscription OnDeletePatientHealthEntry(
  $filter: ModelSubscriptionPatientHealthEntryFilterInput
  $owner: String
) {
  onDeletePatientHealthEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    generalHealthResults
    totalScore
    createdAt
    updatedAt
    patientHealthEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePatientHealthEntrySubscriptionVariables,
  APITypes.OnDeletePatientHealthEntrySubscription
>;
export const onCreateSymptomEntry = /* GraphQL */ `subscription OnCreateSymptomEntry(
  $filter: ModelSubscriptionSymptomEntryFilterInput
  $owner: String
) {
  onCreateSymptomEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    createdAt
    symptoms
    qualityOfLifeRank
    mentalHealthRank
    socialSatisfactionRank
    carryOutSocialActivitiesRank
    anxietyInPastWeekRank
    medicalConditions
    hasLongCovid
    updatedAt
    symptomEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSymptomEntrySubscriptionVariables,
  APITypes.OnCreateSymptomEntrySubscription
>;
export const onUpdateSymptomEntry = /* GraphQL */ `subscription OnUpdateSymptomEntry(
  $filter: ModelSubscriptionSymptomEntryFilterInput
  $owner: String
) {
  onUpdateSymptomEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    createdAt
    symptoms
    qualityOfLifeRank
    mentalHealthRank
    socialSatisfactionRank
    carryOutSocialActivitiesRank
    anxietyInPastWeekRank
    medicalConditions
    hasLongCovid
    updatedAt
    symptomEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSymptomEntrySubscriptionVariables,
  APITypes.OnUpdateSymptomEntrySubscription
>;
export const onDeleteSymptomEntry = /* GraphQL */ `subscription OnDeleteSymptomEntry(
  $filter: ModelSubscriptionSymptomEntryFilterInput
  $owner: String
) {
  onDeleteSymptomEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    createdAt
    symptoms
    qualityOfLifeRank
    mentalHealthRank
    socialSatisfactionRank
    carryOutSocialActivitiesRank
    anxietyInPastWeekRank
    medicalConditions
    hasLongCovid
    updatedAt
    symptomEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSymptomEntrySubscriptionVariables,
  APITypes.OnDeleteSymptomEntrySubscription
>;
export const onCreateSocialDeterminantsEntry = /* GraphQL */ `subscription OnCreateSocialDeterminantsEntry(
  $filter: ModelSubscriptionSocialDeterminantsEntryFilterInput
  $owner: String
) {
  onCreateSocialDeterminantsEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    hasMedicalInsurance
    difficultCoveringExpenses
    currentWorkSituation
    createdAt
    updatedAt
    socialDeterminantsEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSocialDeterminantsEntrySubscriptionVariables,
  APITypes.OnCreateSocialDeterminantsEntrySubscription
>;
export const onUpdateSocialDeterminantsEntry = /* GraphQL */ `subscription OnUpdateSocialDeterminantsEntry(
  $filter: ModelSubscriptionSocialDeterminantsEntryFilterInput
  $owner: String
) {
  onUpdateSocialDeterminantsEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    hasMedicalInsurance
    difficultCoveringExpenses
    currentWorkSituation
    createdAt
    updatedAt
    socialDeterminantsEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSocialDeterminantsEntrySubscriptionVariables,
  APITypes.OnUpdateSocialDeterminantsEntrySubscription
>;
export const onDeleteSocialDeterminantsEntry = /* GraphQL */ `subscription OnDeleteSocialDeterminantsEntry(
  $filter: ModelSubscriptionSocialDeterminantsEntryFilterInput
  $owner: String
) {
  onDeleteSocialDeterminantsEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    hasMedicalInsurance
    difficultCoveringExpenses
    currentWorkSituation
    createdAt
    updatedAt
    socialDeterminantsEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSocialDeterminantsEntrySubscriptionVariables,
  APITypes.OnDeleteSocialDeterminantsEntrySubscription
>;
export const onCreateMonthlyEntry = /* GraphQL */ `subscription OnCreateMonthlyEntry(
  $filter: ModelSubscriptionMonthlyEntryFilterInput
  $owner: String
) {
  onCreateMonthlyEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    results
    createdAt
    updatedAt
    monthlyEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMonthlyEntrySubscriptionVariables,
  APITypes.OnCreateMonthlyEntrySubscription
>;
export const onUpdateMonthlyEntry = /* GraphQL */ `subscription OnUpdateMonthlyEntry(
  $filter: ModelSubscriptionMonthlyEntryFilterInput
  $owner: String
) {
  onUpdateMonthlyEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    results
    createdAt
    updatedAt
    monthlyEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMonthlyEntrySubscriptionVariables,
  APITypes.OnUpdateMonthlyEntrySubscription
>;
export const onDeleteMonthlyEntry = /* GraphQL */ `subscription OnDeleteMonthlyEntry(
  $filter: ModelSubscriptionMonthlyEntryFilterInput
  $owner: String
) {
  onDeleteMonthlyEntry(filter: $filter, owner: $owner) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
      countyState
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      height
      weight
      covidEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        beenInfected
        timesPositive
        lastPositive
        tested
        positiveTest
        testMethod
        hospitalized
        timesHospitalized
        symptomatic
        symptomsPreventScale
        medicationsPrescribed
        medicationsTaken
        createdAt
        updatedAt
        covidEntrySurveyEntryId
        owner
        __typename
      }
      vaccinationEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
        owner
        __typename
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        hasMedicalInsurance
        difficultCoveringExpenses
        currentWorkSituation
        createdAt
        updatedAt
        socialDeterminantsEntrySurveyEntryId
        owner
        __typename
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        recovered
        lengthOfRecovery
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
        owner
        __typename
      }
      globalHealthEntry {
        id
        state
        countyState
        age
        race
        sex
        height
        weight
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
        owner
        __typename
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        patientHealthEntrySurveyEntryId
        owner
        __typename
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        createdAt
        symptoms
        qualityOfLifeRank
        mentalHealthRank
        socialSatisfactionRank
        carryOutSocialActivitiesRank
        anxietyInPastWeekRank
        medicalConditions
        hasLongCovid
        updatedAt
        symptomEntrySurveyEntryId
        owner
        __typename
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          parentSurveyId
          email
          state
          countyState
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          height
          weight
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGlobalHealthEntryId
          surveyEntryPatientHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
          owner
          __typename
        }
        age
        race
        sex
        height
        weight
        results
        createdAt
        updatedAt
        monthlyEntrySurveyEntryId
        owner
        __typename
      }
      updatedAt
      surveyEntryCovidEntryId
      surveyEntryVaccinationEntryId
      surveyEntrySocialDeterminantsEntryId
      surveyEntryRecoveryEntryId
      surveyEntryGlobalHealthEntryId
      surveyEntryPatientHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
      owner
      __typename
    }
    age
    race
    sex
    height
    weight
    results
    createdAt
    updatedAt
    monthlyEntrySurveyEntryId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMonthlyEntrySubscriptionVariables,
  APITypes.OnDeleteMonthlyEntrySubscription
>;
export const onCreateFeedbackEntry = /* GraphQL */ `subscription OnCreateFeedbackEntry(
  $filter: ModelSubscriptionFeedbackEntryFilterInput
) {
  onCreateFeedbackEntry(filter: $filter) {
    id
    name
    feedback
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackEntrySubscriptionVariables,
  APITypes.OnCreateFeedbackEntrySubscription
>;
export const onUpdateFeedbackEntry = /* GraphQL */ `subscription OnUpdateFeedbackEntry(
  $filter: ModelSubscriptionFeedbackEntryFilterInput
) {
  onUpdateFeedbackEntry(filter: $filter) {
    id
    name
    feedback
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackEntrySubscriptionVariables,
  APITypes.OnUpdateFeedbackEntrySubscription
>;
export const onDeleteFeedbackEntry = /* GraphQL */ `subscription OnDeleteFeedbackEntry(
  $filter: ModelSubscriptionFeedbackEntryFilterInput
) {
  onDeleteFeedbackEntry(filter: $filter) {
    id
    name
    feedback
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackEntrySubscriptionVariables,
  APITypes.OnDeleteFeedbackEntrySubscription
>;
