/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const aggregateSurveyResults = /* GraphQL */ `mutation AggregateSurveyResults($results: AWSJSON!) {
  aggregateSurveyResults(results: $results) {
    statusCode
    body
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AggregateSurveyResultsMutationVariables,
  APITypes.AggregateSurveyResultsMutation
>;
export const emailReceiptConfirmation = /* GraphQL */ `mutation EmailReceiptConfirmation($results: AWSJSON!, $email: String) {
  emailReceiptConfirmation(results: $results, email: $email) {
    statusCode
    body
    __typename
  }
}
` as GeneratedMutation<
  APITypes.EmailReceiptConfirmationMutationVariables,
  APITypes.EmailReceiptConfirmationMutation
>;
export const createMapAggregationNew = /* GraphQL */ `mutation CreateMapAggregationNew(
  $input: CreateMapAggregationNewInput!
  $condition: ModelMapAggregationNewConditionInput
) {
  createMapAggregationNew(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMapAggregationNewMutationVariables,
  APITypes.CreateMapAggregationNewMutation
>;
export const updateMapAggregationNew = /* GraphQL */ `mutation UpdateMapAggregationNew(
  $input: UpdateMapAggregationNewInput!
  $condition: ModelMapAggregationNewConditionInput
) {
  updateMapAggregationNew(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMapAggregationNewMutationVariables,
  APITypes.UpdateMapAggregationNewMutation
>;
export const deleteMapAggregationNew = /* GraphQL */ `mutation DeleteMapAggregationNew(
  $input: DeleteMapAggregationNewInput!
  $condition: ModelMapAggregationNewConditionInput
) {
  deleteMapAggregationNew(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMapAggregationNewMutationVariables,
  APITypes.DeleteMapAggregationNewMutation
>;
export const createMapAggregation = /* GraphQL */ `mutation CreateMapAggregation(
  $input: CreateMapAggregationInput!
  $condition: ModelMapAggregationConditionInput
) {
  createMapAggregation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMapAggregationMutationVariables,
  APITypes.CreateMapAggregationMutation
>;
export const updateMapAggregation = /* GraphQL */ `mutation UpdateMapAggregation(
  $input: UpdateMapAggregationInput!
  $condition: ModelMapAggregationConditionInput
) {
  updateMapAggregation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMapAggregationMutationVariables,
  APITypes.UpdateMapAggregationMutation
>;
export const deleteMapAggregation = /* GraphQL */ `mutation DeleteMapAggregation(
  $input: DeleteMapAggregationInput!
  $condition: ModelMapAggregationConditionInput
) {
  deleteMapAggregation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMapAggregationMutationVariables,
  APITypes.DeleteMapAggregationMutation
>;
export const createMapData = /* GraphQL */ `mutation CreateMapData(
  $input: CreateMapDataInput!
  $condition: ModelMapDataConditionInput
) {
  createMapData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMapDataMutationVariables,
  APITypes.CreateMapDataMutation
>;
export const updateMapData = /* GraphQL */ `mutation UpdateMapData(
  $input: UpdateMapDataInput!
  $condition: ModelMapDataConditionInput
) {
  updateMapData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMapDataMutationVariables,
  APITypes.UpdateMapDataMutation
>;
export const deleteMapData = /* GraphQL */ `mutation DeleteMapData(
  $input: DeleteMapDataInput!
  $condition: ModelMapDataConditionInput
) {
  deleteMapData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMapDataMutationVariables,
  APITypes.DeleteMapDataMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $input: CreateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  createNotification(input: $input, condition: $condition) {
    id
    recipientEmail
    message
    sendStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $input: UpdateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  updateNotification(input: $input, condition: $condition) {
    id
    recipientEmail
    message
    sendStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $input: DeleteNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  deleteNotification(input: $input, condition: $condition) {
    id
    recipientEmail
    message
    sendStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const createSurveyEntry = /* GraphQL */ `mutation CreateSurveyEntry(
  $input: CreateSurveyEntryInput!
  $condition: ModelSurveyEntryConditionInput
) {
  createSurveyEntry(input: $input, condition: $condition) {
    id
    parentSurveyId
    email
    state
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
` as GeneratedMutation<
  APITypes.CreateSurveyEntryMutationVariables,
  APITypes.CreateSurveyEntryMutation
>;
export const updateSurveyEntry = /* GraphQL */ `mutation UpdateSurveyEntry(
  $input: UpdateSurveyEntryInput!
  $condition: ModelSurveyEntryConditionInput
) {
  updateSurveyEntry(input: $input, condition: $condition) {
    id
    parentSurveyId
    email
    state
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
` as GeneratedMutation<
  APITypes.UpdateSurveyEntryMutationVariables,
  APITypes.UpdateSurveyEntryMutation
>;
export const deleteSurveyEntry = /* GraphQL */ `mutation DeleteSurveyEntry(
  $input: DeleteSurveyEntryInput!
  $condition: ModelSurveyEntryConditionInput
) {
  deleteSurveyEntry(input: $input, condition: $condition) {
    id
    parentSurveyId
    email
    state
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
` as GeneratedMutation<
  APITypes.DeleteSurveyEntryMutationVariables,
  APITypes.DeleteSurveyEntryMutation
>;
export const createVaccinationEntry = /* GraphQL */ `mutation CreateVaccinationEntry(
  $input: CreateVaccinationEntryInput!
  $condition: ModelVaccinationEntryConditionInput
) {
  createVaccinationEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateVaccinationEntryMutationVariables,
  APITypes.CreateVaccinationEntryMutation
>;
export const updateVaccinationEntry = /* GraphQL */ `mutation UpdateVaccinationEntry(
  $input: UpdateVaccinationEntryInput!
  $condition: ModelVaccinationEntryConditionInput
) {
  updateVaccinationEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateVaccinationEntryMutationVariables,
  APITypes.UpdateVaccinationEntryMutation
>;
export const deleteVaccinationEntry = /* GraphQL */ `mutation DeleteVaccinationEntry(
  $input: DeleteVaccinationEntryInput!
  $condition: ModelVaccinationEntryConditionInput
) {
  deleteVaccinationEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteVaccinationEntryMutationVariables,
  APITypes.DeleteVaccinationEntryMutation
>;
export const createGlobalHealthEntry = /* GraphQL */ `mutation CreateGlobalHealthEntry(
  $input: CreateGlobalHealthEntryInput!
  $condition: ModelGlobalHealthEntryConditionInput
) {
  createGlobalHealthEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGlobalHealthEntryMutationVariables,
  APITypes.CreateGlobalHealthEntryMutation
>;
export const updateGlobalHealthEntry = /* GraphQL */ `mutation UpdateGlobalHealthEntry(
  $input: UpdateGlobalHealthEntryInput!
  $condition: ModelGlobalHealthEntryConditionInput
) {
  updateGlobalHealthEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGlobalHealthEntryMutationVariables,
  APITypes.UpdateGlobalHealthEntryMutation
>;
export const deleteGlobalHealthEntry = /* GraphQL */ `mutation DeleteGlobalHealthEntry(
  $input: DeleteGlobalHealthEntryInput!
  $condition: ModelGlobalHealthEntryConditionInput
) {
  deleteGlobalHealthEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGlobalHealthEntryMutationVariables,
  APITypes.DeleteGlobalHealthEntryMutation
>;
export const createCovidEntry = /* GraphQL */ `mutation CreateCovidEntry(
  $input: CreateCovidEntryInput!
  $condition: ModelCovidEntryConditionInput
) {
  createCovidEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCovidEntryMutationVariables,
  APITypes.CreateCovidEntryMutation
>;
export const updateCovidEntry = /* GraphQL */ `mutation UpdateCovidEntry(
  $input: UpdateCovidEntryInput!
  $condition: ModelCovidEntryConditionInput
) {
  updateCovidEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCovidEntryMutationVariables,
  APITypes.UpdateCovidEntryMutation
>;
export const deleteCovidEntry = /* GraphQL */ `mutation DeleteCovidEntry(
  $input: DeleteCovidEntryInput!
  $condition: ModelCovidEntryConditionInput
) {
  deleteCovidEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCovidEntryMutationVariables,
  APITypes.DeleteCovidEntryMutation
>;
export const createRecoveryEntry = /* GraphQL */ `mutation CreateRecoveryEntry(
  $input: CreateRecoveryEntryInput!
  $condition: ModelRecoveryEntryConditionInput
) {
  createRecoveryEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRecoveryEntryMutationVariables,
  APITypes.CreateRecoveryEntryMutation
>;
export const updateRecoveryEntry = /* GraphQL */ `mutation UpdateRecoveryEntry(
  $input: UpdateRecoveryEntryInput!
  $condition: ModelRecoveryEntryConditionInput
) {
  updateRecoveryEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRecoveryEntryMutationVariables,
  APITypes.UpdateRecoveryEntryMutation
>;
export const deleteRecoveryEntry = /* GraphQL */ `mutation DeleteRecoveryEntry(
  $input: DeleteRecoveryEntryInput!
  $condition: ModelRecoveryEntryConditionInput
) {
  deleteRecoveryEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRecoveryEntryMutationVariables,
  APITypes.DeleteRecoveryEntryMutation
>;
export const createPatientHealthEntry = /* GraphQL */ `mutation CreatePatientHealthEntry(
  $input: CreatePatientHealthEntryInput!
  $condition: ModelPatientHealthEntryConditionInput
) {
  createPatientHealthEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePatientHealthEntryMutationVariables,
  APITypes.CreatePatientHealthEntryMutation
>;
export const updatePatientHealthEntry = /* GraphQL */ `mutation UpdatePatientHealthEntry(
  $input: UpdatePatientHealthEntryInput!
  $condition: ModelPatientHealthEntryConditionInput
) {
  updatePatientHealthEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePatientHealthEntryMutationVariables,
  APITypes.UpdatePatientHealthEntryMutation
>;
export const deletePatientHealthEntry = /* GraphQL */ `mutation DeletePatientHealthEntry(
  $input: DeletePatientHealthEntryInput!
  $condition: ModelPatientHealthEntryConditionInput
) {
  deletePatientHealthEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePatientHealthEntryMutationVariables,
  APITypes.DeletePatientHealthEntryMutation
>;
export const createSymptomEntry = /* GraphQL */ `mutation CreateSymptomEntry(
  $input: CreateSymptomEntryInput!
  $condition: ModelSymptomEntryConditionInput
) {
  createSymptomEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSymptomEntryMutationVariables,
  APITypes.CreateSymptomEntryMutation
>;
export const updateSymptomEntry = /* GraphQL */ `mutation UpdateSymptomEntry(
  $input: UpdateSymptomEntryInput!
  $condition: ModelSymptomEntryConditionInput
) {
  updateSymptomEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSymptomEntryMutationVariables,
  APITypes.UpdateSymptomEntryMutation
>;
export const deleteSymptomEntry = /* GraphQL */ `mutation DeleteSymptomEntry(
  $input: DeleteSymptomEntryInput!
  $condition: ModelSymptomEntryConditionInput
) {
  deleteSymptomEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSymptomEntryMutationVariables,
  APITypes.DeleteSymptomEntryMutation
>;
export const createSocialDeterminantsEntry = /* GraphQL */ `mutation CreateSocialDeterminantsEntry(
  $input: CreateSocialDeterminantsEntryInput!
  $condition: ModelSocialDeterminantsEntryConditionInput
) {
  createSocialDeterminantsEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSocialDeterminantsEntryMutationVariables,
  APITypes.CreateSocialDeterminantsEntryMutation
>;
export const updateSocialDeterminantsEntry = /* GraphQL */ `mutation UpdateSocialDeterminantsEntry(
  $input: UpdateSocialDeterminantsEntryInput!
  $condition: ModelSocialDeterminantsEntryConditionInput
) {
  updateSocialDeterminantsEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSocialDeterminantsEntryMutationVariables,
  APITypes.UpdateSocialDeterminantsEntryMutation
>;
export const deleteSocialDeterminantsEntry = /* GraphQL */ `mutation DeleteSocialDeterminantsEntry(
  $input: DeleteSocialDeterminantsEntryInput!
  $condition: ModelSocialDeterminantsEntryConditionInput
) {
  deleteSocialDeterminantsEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSocialDeterminantsEntryMutationVariables,
  APITypes.DeleteSocialDeterminantsEntryMutation
>;
export const createMonthlyEntry = /* GraphQL */ `mutation CreateMonthlyEntry(
  $input: CreateMonthlyEntryInput!
  $condition: ModelMonthlyEntryConditionInput
) {
  createMonthlyEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMonthlyEntryMutationVariables,
  APITypes.CreateMonthlyEntryMutation
>;
export const updateMonthlyEntry = /* GraphQL */ `mutation UpdateMonthlyEntry(
  $input: UpdateMonthlyEntryInput!
  $condition: ModelMonthlyEntryConditionInput
) {
  updateMonthlyEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMonthlyEntryMutationVariables,
  APITypes.UpdateMonthlyEntryMutation
>;
export const deleteMonthlyEntry = /* GraphQL */ `mutation DeleteMonthlyEntry(
  $input: DeleteMonthlyEntryInput!
  $condition: ModelMonthlyEntryConditionInput
) {
  deleteMonthlyEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMonthlyEntryMutationVariables,
  APITypes.DeleteMonthlyEntryMutation
>;
export const createFeedbackEntry = /* GraphQL */ `mutation CreateFeedbackEntry(
  $input: CreateFeedbackEntryInput!
  $condition: ModelFeedbackEntryConditionInput
) {
  createFeedbackEntry(input: $input, condition: $condition) {
    id
    name
    feedback
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeedbackEntryMutationVariables,
  APITypes.CreateFeedbackEntryMutation
>;
export const updateFeedbackEntry = /* GraphQL */ `mutation UpdateFeedbackEntry(
  $input: UpdateFeedbackEntryInput!
  $condition: ModelFeedbackEntryConditionInput
) {
  updateFeedbackEntry(input: $input, condition: $condition) {
    id
    name
    feedback
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeedbackEntryMutationVariables,
  APITypes.UpdateFeedbackEntryMutation
>;
export const deleteFeedbackEntry = /* GraphQL */ `mutation DeleteFeedbackEntry(
  $input: DeleteFeedbackEntryInput!
  $condition: ModelFeedbackEntryConditionInput
) {
  deleteFeedbackEntry(input: $input, condition: $condition) {
    id
    name
    feedback
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeedbackEntryMutationVariables,
  APITypes.DeleteFeedbackEntryMutation
>;
