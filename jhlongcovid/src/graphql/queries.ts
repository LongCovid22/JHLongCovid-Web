/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMapAggregation = /* GraphQL */ `query GetMapAggregation($id: ID!) {
  getMapAggregation(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMapAggregationQueryVariables,
  APITypes.GetMapAggregationQuery
>;
export const listMapAggregations = /* GraphQL */ `query ListMapAggregations(
  $filter: ModelMapAggregationFilterInput
  $limit: Int
  $nextToken: String
) {
  listMapAggregations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          __typename
        }
        timesPositive {
          __typename
        }
        tested {
          __typename
        }
        positiveTest {
          __typename
        }
        symptomatic {
          __typename
        }
        symptomsPreventScale {
          __typename
        }
        __typename
      }
      recoverySummary {
        hospitalized {
          __typename
        }
        timesHospitalized {
          __typename
        }
        medicationsPrescribed {
          __typename
        }
        medicationsTakenCount {
          __typename
        }
        recovered {
          __typename
        }
        avglengthOfRecovery {
          __typename
        }
        __typename
      }
      vaccinationSummary {
        vaccinated {
          __typename
        }
        totalVaccineShots {
          __typename
        }
        vaccineType {
          __typename
        }
        __typename
      }
      globalHealthSummary {
        healthRank {
          __typename
        }
        physicalHealthRank {
          __typename
        }
        carryPhysicalActivities {
          __typename
        }
        fatigueRank {
          __typename
        }
        avgpainLevel {
          __typename
        }
        __typename
      }
      patientHealthQuestionnaireSummary {
        littleInterestThings {
          __typename
        }
        downDepressedHopeless {
          __typename
        }
        sleepProblems {
          __typename
        }
        tiredNoEnergy {
          __typename
        }
        dietProblems {
          __typename
        }
        badAboutSelf {
          __typename
        }
        concentrationProblems {
          __typename
        }
        slowOrRestless {
          __typename
        }
        avgPHQScore {
          __typename
        }
        __typename
      }
      symptomSummary {
        symptomCounts {
          __typename
        }
        qualityOfLife {
          __typename
        }
        mentalHealthRank {
          __typename
        }
        socialSatisfactionRank {
          __typename
        }
        carryOutSocialActivitiesRank {
          __typename
        }
        anxietyInPastWeekRank {
          __typename
        }
        __typename
      }
      medicalConditionsSummary {
        longCovid {
          __typename
        }
        newDiagnosisCounts {
          __typename
        }
        __typename
      }
      socialSummary {
        hasMedicalInsurance {
          __typename
        }
        difficultCoveringExpenses {
          __typename
        }
        currentWorkSituation {
          __typename
        }
        __typename
      }
      totalFullEntries
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMapAggregationsQueryVariables,
  APITypes.ListMapAggregationsQuery
>;
export const getMapData = /* GraphQL */ `query GetMapData(
  $level: String!
  $lat: Float!
  $long: Float!
  $aggregationType: AggregationType!
) {
  getMapData(
    level: $level
    lat: $lat
    long: $long
    aggregationType: $aggregationType
  ) {
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
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMapDataQueryVariables,
  APITypes.GetMapDataQuery
>;
export const listMapData = /* GraphQL */ `query ListMapData(
  $level: String
  $latLongAggregationType: ModelMapDataPrimaryCompositeKeyConditionInput
  $filter: ModelMapDataFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMapData(
    level: $level
    latLongAggregationType: $latLongAggregationType
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
          __typename
        }
        timesPositive {
          __typename
        }
        tested {
          __typename
        }
        positiveTest {
          __typename
        }
        symptomatic {
          __typename
        }
        symptomsPreventScale {
          __typename
        }
        __typename
      }
      recoverySummary {
        hospitalized {
          __typename
        }
        timesHospitalized {
          __typename
        }
        medicationsPrescribed {
          __typename
        }
        medicationsTakenCount {
          __typename
        }
        recovered {
          __typename
        }
        avglengthOfRecovery {
          __typename
        }
        __typename
      }
      vaccinationSummary {
        vaccinated {
          __typename
        }
        totalVaccineShots {
          __typename
        }
        vaccineType {
          __typename
        }
        __typename
      }
      globalHealthSummary {
        healthRank {
          __typename
        }
        physicalHealthRank {
          __typename
        }
        carryPhysicalActivities {
          __typename
        }
        fatigueRank {
          __typename
        }
        avgpainLevel {
          __typename
        }
        __typename
      }
      patientHealthQuestionnaireSummary {
        littleInterestThings {
          __typename
        }
        downDepressedHopeless {
          __typename
        }
        sleepProblems {
          __typename
        }
        tiredNoEnergy {
          __typename
        }
        dietProblems {
          __typename
        }
        badAboutSelf {
          __typename
        }
        concentrationProblems {
          __typename
        }
        slowOrRestless {
          __typename
        }
        avgPHQScore {
          __typename
        }
        __typename
      }
      symptomSummary {
        symptomCounts {
          __typename
        }
        qualityOfLife {
          __typename
        }
        mentalHealthRank {
          __typename
        }
        socialSatisfactionRank {
          __typename
        }
        carryOutSocialActivitiesRank {
          __typename
        }
        anxietyInPastWeekRank {
          __typename
        }
        __typename
      }
      medicalConditionsSummary {
        longCovid {
          __typename
        }
        newDiagnosisCounts {
          __typename
        }
        __typename
      }
      socialSummary {
        hasMedicalInsurance {
          __typename
        }
        difficultCoveringExpenses {
          __typename
        }
        currentWorkSituation {
          __typename
        }
        __typename
      }
      totalFullEntries
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMapDataQueryVariables,
  APITypes.ListMapDataQuery
>;
export const mapDataByLevelNameState = /* GraphQL */ `query MapDataByLevelNameState(
  $level: String!
  $nameStateAbbrevAggregationType: ModelMapDataByLevelAndNameAndStateCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMapDataFilterInput
  $limit: Int
  $nextToken: String
) {
  mapDataByLevelNameState(
    level: $level
    nameStateAbbrevAggregationType: $nameStateAbbrevAggregationType
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
          __typename
        }
        timesPositive {
          __typename
        }
        tested {
          __typename
        }
        positiveTest {
          __typename
        }
        symptomatic {
          __typename
        }
        symptomsPreventScale {
          __typename
        }
        __typename
      }
      recoverySummary {
        hospitalized {
          __typename
        }
        timesHospitalized {
          __typename
        }
        medicationsPrescribed {
          __typename
        }
        medicationsTakenCount {
          __typename
        }
        recovered {
          __typename
        }
        avglengthOfRecovery {
          __typename
        }
        __typename
      }
      vaccinationSummary {
        vaccinated {
          __typename
        }
        totalVaccineShots {
          __typename
        }
        vaccineType {
          __typename
        }
        __typename
      }
      globalHealthSummary {
        healthRank {
          __typename
        }
        physicalHealthRank {
          __typename
        }
        carryPhysicalActivities {
          __typename
        }
        fatigueRank {
          __typename
        }
        avgpainLevel {
          __typename
        }
        __typename
      }
      patientHealthQuestionnaireSummary {
        littleInterestThings {
          __typename
        }
        downDepressedHopeless {
          __typename
        }
        sleepProblems {
          __typename
        }
        tiredNoEnergy {
          __typename
        }
        dietProblems {
          __typename
        }
        badAboutSelf {
          __typename
        }
        concentrationProblems {
          __typename
        }
        slowOrRestless {
          __typename
        }
        avgPHQScore {
          __typename
        }
        __typename
      }
      symptomSummary {
        symptomCounts {
          __typename
        }
        qualityOfLife {
          __typename
        }
        mentalHealthRank {
          __typename
        }
        socialSatisfactionRank {
          __typename
        }
        carryOutSocialActivitiesRank {
          __typename
        }
        anxietyInPastWeekRank {
          __typename
        }
        __typename
      }
      medicalConditionsSummary {
        longCovid {
          __typename
        }
        newDiagnosisCounts {
          __typename
        }
        __typename
      }
      socialSummary {
        hasMedicalInsurance {
          __typename
        }
        difficultCoveringExpenses {
          __typename
        }
        currentWorkSituation {
          __typename
        }
        __typename
      }
      totalFullEntries
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MapDataByLevelNameStateQueryVariables,
  APITypes.MapDataByLevelNameStateQuery
>;
export const mapDataByStateAbbrev = /* GraphQL */ `query MapDataByStateAbbrev(
  $level: String!
  $stateAbbrevAggregationType: ModelMapDataByStateCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMapDataFilterInput
  $limit: Int
  $nextToken: String
) {
  mapDataByStateAbbrev(
    level: $level
    stateAbbrevAggregationType: $stateAbbrevAggregationType
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
          __typename
        }
        timesPositive {
          __typename
        }
        tested {
          __typename
        }
        positiveTest {
          __typename
        }
        symptomatic {
          __typename
        }
        symptomsPreventScale {
          __typename
        }
        __typename
      }
      recoverySummary {
        hospitalized {
          __typename
        }
        timesHospitalized {
          __typename
        }
        medicationsPrescribed {
          __typename
        }
        medicationsTakenCount {
          __typename
        }
        recovered {
          __typename
        }
        avglengthOfRecovery {
          __typename
        }
        __typename
      }
      vaccinationSummary {
        vaccinated {
          __typename
        }
        totalVaccineShots {
          __typename
        }
        vaccineType {
          __typename
        }
        __typename
      }
      globalHealthSummary {
        healthRank {
          __typename
        }
        physicalHealthRank {
          __typename
        }
        carryPhysicalActivities {
          __typename
        }
        fatigueRank {
          __typename
        }
        avgpainLevel {
          __typename
        }
        __typename
      }
      patientHealthQuestionnaireSummary {
        littleInterestThings {
          __typename
        }
        downDepressedHopeless {
          __typename
        }
        sleepProblems {
          __typename
        }
        tiredNoEnergy {
          __typename
        }
        dietProblems {
          __typename
        }
        badAboutSelf {
          __typename
        }
        concentrationProblems {
          __typename
        }
        slowOrRestless {
          __typename
        }
        avgPHQScore {
          __typename
        }
        __typename
      }
      symptomSummary {
        symptomCounts {
          __typename
        }
        qualityOfLife {
          __typename
        }
        mentalHealthRank {
          __typename
        }
        socialSatisfactionRank {
          __typename
        }
        carryOutSocialActivitiesRank {
          __typename
        }
        anxietyInPastWeekRank {
          __typename
        }
        __typename
      }
      medicalConditionsSummary {
        longCovid {
          __typename
        }
        newDiagnosisCounts {
          __typename
        }
        __typename
      }
      socialSummary {
        hasMedicalInsurance {
          __typename
        }
        difficultCoveringExpenses {
          __typename
        }
        currentWorkSituation {
          __typename
        }
        __typename
      }
      totalFullEntries
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MapDataByStateAbbrevQueryVariables,
  APITypes.MapDataByStateAbbrevQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      lastSignIn
      notificationFreq
      notificationMethod
      createdAt
      updatedAt
      userLastSubmissionEntryId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const usersByEmail = /* GraphQL */ `query UsersByEmail(
  $email: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByEmail(
    email: $email
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      lastSignIn
      notificationFreq
      notificationMethod
      createdAt
      updatedAt
      userLastSubmissionEntryId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByEmailQueryVariables,
  APITypes.UsersByEmailQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    recipientEmail
    message
    sendStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      recipientEmail
      message
      sendStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const notificationsByEmail = /* GraphQL */ `query NotificationsByEmail(
  $recipientEmail: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByEmail(
    recipientEmail: $recipientEmail
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      recipientEmail
      message
      sendStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByEmailQueryVariables,
  APITypes.NotificationsByEmailQuery
>;
export const notificationsByStatus = /* GraphQL */ `query NotificationsByStatus(
  $sendStatus: SendStatus!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByStatus(
    sendStatus: $sendStatus
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      recipientEmail
      message
      sendStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByStatusQueryVariables,
  APITypes.NotificationsByStatusQuery
>;
export const getSurveyEntry = /* GraphQL */ `query GetSurveyEntry($id: ID!) {
  getSurveyEntry(id: $id) {
    id
    parentSurveyId
    email
    state
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
` as GeneratedQuery<
  APITypes.GetSurveyEntryQueryVariables,
  APITypes.GetSurveyEntryQuery
>;
export const listSurveyEntries = /* GraphQL */ `query ListSurveyEntries(
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listSurveyEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSurveyEntriesQueryVariables,
  APITypes.ListSurveyEntriesQuery
>;
export const surveysByParentId = /* GraphQL */ `query SurveysByParentId(
  $parentSurveyId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  surveysByParentId(
    parentSurveyId: $parentSurveyId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SurveysByParentIdQueryVariables,
  APITypes.SurveysByParentIdQuery
>;
export const surveysByEmail = /* GraphQL */ `query SurveysByEmail(
  $email: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  surveysByEmail(
    email: $email
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SurveysByEmailQueryVariables,
  APITypes.SurveysByEmailQuery
>;
export const stateSurveyEntryByDate = /* GraphQL */ `query StateSurveyEntryByDate(
  $state: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSurveyEntryByDate(
    state: $state
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSurveyEntryByDateQueryVariables,
  APITypes.StateSurveyEntryByDateQuery
>;
export const stateSurveyEntryByAge = /* GraphQL */ `query StateSurveyEntryByAge(
  $state: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSurveyEntryByAge(
    state: $state
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSurveyEntryByAgeQueryVariables,
  APITypes.StateSurveyEntryByAgeQuery
>;
export const stateSurveyEntryByRace = /* GraphQL */ `query StateSurveyEntryByRace(
  $state: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSurveyEntryByRace(
    state: $state
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSurveyEntryByRaceQueryVariables,
  APITypes.StateSurveyEntryByRaceQuery
>;
export const stateSurveyEntryBySex = /* GraphQL */ `query StateSurveyEntryBySex(
  $state: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSurveyEntryBySex(
    state: $state
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSurveyEntryBySexQueryVariables,
  APITypes.StateSurveyEntryBySexQuery
>;
export const countySurveyEntryByDate = /* GraphQL */ `query CountySurveyEntryByDate(
  $countyState: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySurveyEntryByDate(
    countyState: $countyState
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySurveyEntryByDateQueryVariables,
  APITypes.CountySurveyEntryByDateQuery
>;
export const countySurveyEntryByAge = /* GraphQL */ `query CountySurveyEntryByAge(
  $countyState: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySurveyEntryByAge(
    countyState: $countyState
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySurveyEntryByAgeQueryVariables,
  APITypes.CountySurveyEntryByAgeQuery
>;
export const countySurveyEntryByRace = /* GraphQL */ `query CountySurveyEntryByRace(
  $countyState: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySurveyEntryByRace(
    countyState: $countyState
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySurveyEntryByRaceQueryVariables,
  APITypes.CountySurveyEntryByRaceQuery
>;
export const countySurveyEntryBySex = /* GraphQL */ `query CountySurveyEntryBySex(
  $countyState: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySurveyEntryBySex(
    countyState: $countyState
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySurveyEntryBySexQueryVariables,
  APITypes.CountySurveyEntryBySexQuery
>;
export const surveysByType = /* GraphQL */ `query SurveysByType(
  $surveyType: SurveyType!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSurveyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  surveysByType(
    surveyType: $surveyType
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentSurveyId
      email
      state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SurveysByTypeQueryVariables,
  APITypes.SurveysByTypeQuery
>;
export const getVaccinationEntry = /* GraphQL */ `query GetVaccinationEntry($id: ID!) {
  getVaccinationEntry(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetVaccinationEntryQueryVariables,
  APITypes.GetVaccinationEntryQuery
>;
export const listVaccinationEntries = /* GraphQL */ `query ListVaccinationEntries(
  $filter: ModelVaccinationEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationEntries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationEntriesQueryVariables,
  APITypes.ListVaccinationEntriesQuery
>;
export const stateVaccEntryByDate = /* GraphQL */ `query StateVaccEntryByDate(
  $state: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateVaccEntryByDate(
    state: $state
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateVaccEntryByDateQueryVariables,
  APITypes.StateVaccEntryByDateQuery
>;
export const stateVaccEntryByAge = /* GraphQL */ `query StateVaccEntryByAge(
  $state: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateVaccEntryByAge(
    state: $state
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateVaccEntryByAgeQueryVariables,
  APITypes.StateVaccEntryByAgeQuery
>;
export const stateVaccEntryByRace = /* GraphQL */ `query StateVaccEntryByRace(
  $state: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateVaccEntryByRace(
    state: $state
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateVaccEntryByRaceQueryVariables,
  APITypes.StateVaccEntryByRaceQuery
>;
export const stateVaccEntryBySex = /* GraphQL */ `query StateVaccEntryBySex(
  $state: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateVaccEntryBySex(
    state: $state
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateVaccEntryBySexQueryVariables,
  APITypes.StateVaccEntryBySexQuery
>;
export const countyVaccEntryByDate = /* GraphQL */ `query CountyVaccEntryByDate(
  $countyState: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyVaccEntryByDate(
    countyState: $countyState
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyVaccEntryByDateQueryVariables,
  APITypes.CountyVaccEntryByDateQuery
>;
export const countyVaccEntryByAge = /* GraphQL */ `query CountyVaccEntryByAge(
  $countyState: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyVaccEntryByAge(
    countyState: $countyState
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyVaccEntryByAgeQueryVariables,
  APITypes.CountyVaccEntryByAgeQuery
>;
export const countyVaccEntryByRace = /* GraphQL */ `query CountyVaccEntryByRace(
  $countyState: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyVaccEntryByRace(
    countyState: $countyState
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyVaccEntryByRaceQueryVariables,
  APITypes.CountyVaccEntryByRaceQuery
>;
export const countyVaccEntryBySex = /* GraphQL */ `query CountyVaccEntryBySex(
  $countyState: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyVaccEntryBySex(
    countyState: $countyState
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyVaccEntryBySexQueryVariables,
  APITypes.CountyVaccEntryBySexQuery
>;
export const getGlobalHealthEntry = /* GraphQL */ `query GetGlobalHealthEntry($id: ID!) {
  getGlobalHealthEntry(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGlobalHealthEntryQueryVariables,
  APITypes.GetGlobalHealthEntryQuery
>;
export const listGlobalHealthEntries = /* GraphQL */ `query ListGlobalHealthEntries(
  $filter: ModelGlobalHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listGlobalHealthEntries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGlobalHealthEntriesQueryVariables,
  APITypes.ListGlobalHealthEntriesQuery
>;
export const stateGHEntryByDate = /* GraphQL */ `query StateGHEntryByDate(
  $state: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlobalHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateGHEntryByDate(
    state: $state
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateGHEntryByDateQueryVariables,
  APITypes.StateGHEntryByDateQuery
>;
export const stateGHEntryByAge = /* GraphQL */ `query StateGHEntryByAge(
  $state: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlobalHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateGHEntryByAge(
    state: $state
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateGHEntryByAgeQueryVariables,
  APITypes.StateGHEntryByAgeQuery
>;
export const stateGHEntryByRace = /* GraphQL */ `query StateGHEntryByRace(
  $state: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlobalHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateGHEntryByRace(
    state: $state
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateGHEntryByRaceQueryVariables,
  APITypes.StateGHEntryByRaceQuery
>;
export const stateGHEntryBySex = /* GraphQL */ `query StateGHEntryBySex(
  $state: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlobalHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateGHEntryBySex(
    state: $state
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateGHEntryBySexQueryVariables,
  APITypes.StateGHEntryBySexQuery
>;
export const countyGHEntryByDate = /* GraphQL */ `query CountyGHEntryByDate(
  $countyState: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlobalHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyGHEntryByDate(
    countyState: $countyState
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyGHEntryByDateQueryVariables,
  APITypes.CountyGHEntryByDateQuery
>;
export const countyGHEntryByAge = /* GraphQL */ `query CountyGHEntryByAge(
  $countyState: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlobalHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyGHEntryByAge(
    countyState: $countyState
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyGHEntryByAgeQueryVariables,
  APITypes.CountyGHEntryByAgeQuery
>;
export const countyGHEntryByRace = /* GraphQL */ `query CountyGHEntryByRace(
  $countyState: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlobalHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyGHEntryByRace(
    countyState: $countyState
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyGHEntryByRaceQueryVariables,
  APITypes.CountyGHEntryByRaceQuery
>;
export const countyGHEntryBySex = /* GraphQL */ `query CountyGHEntryBySex(
  $countyState: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGlobalHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyGHEntryBySex(
    countyState: $countyState
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyGHEntryBySexQueryVariables,
  APITypes.CountyGHEntryBySexQuery
>;
export const getCovidEntry = /* GraphQL */ `query GetCovidEntry($id: ID!) {
  getCovidEntry(id: $id) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
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
` as GeneratedQuery<
  APITypes.GetCovidEntryQueryVariables,
  APITypes.GetCovidEntryQuery
>;
export const listCovidEntries = /* GraphQL */ `query ListCovidEntries(
  $filter: ModelCovidEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCovidEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCovidEntriesQueryVariables,
  APITypes.ListCovidEntriesQuery
>;
export const stateCovidEntryByDate = /* GraphQL */ `query StateCovidEntryByDate(
  $state: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovidEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateCovidEntryByDate(
    state: $state
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateCovidEntryByDateQueryVariables,
  APITypes.StateCovidEntryByDateQuery
>;
export const stateCovidEntryByAge = /* GraphQL */ `query StateCovidEntryByAge(
  $state: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovidEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateCovidEntryByAge(
    state: $state
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateCovidEntryByAgeQueryVariables,
  APITypes.StateCovidEntryByAgeQuery
>;
export const stateCovidEntryByRace = /* GraphQL */ `query StateCovidEntryByRace(
  $state: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovidEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateCovidEntryByRace(
    state: $state
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateCovidEntryByRaceQueryVariables,
  APITypes.StateCovidEntryByRaceQuery
>;
export const stateCovidEntryBySex = /* GraphQL */ `query StateCovidEntryBySex(
  $state: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovidEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateCovidEntryBySex(
    state: $state
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateCovidEntryBySexQueryVariables,
  APITypes.StateCovidEntryBySexQuery
>;
export const countyCovidEntryByDate = /* GraphQL */ `query CountyCovidEntryByDate(
  $countyState: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovidEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyCovidEntryByDate(
    countyState: $countyState
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyCovidEntryByDateQueryVariables,
  APITypes.CountyCovidEntryByDateQuery
>;
export const countyCovidEntryByAge = /* GraphQL */ `query CountyCovidEntryByAge(
  $countyState: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovidEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyCovidEntryByAge(
    countyState: $countyState
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyCovidEntryByAgeQueryVariables,
  APITypes.CountyCovidEntryByAgeQuery
>;
export const countyCovidEntryByRace = /* GraphQL */ `query CountyCovidEntryByRace(
  $countyState: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovidEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyCovidEntryByRace(
    countyState: $countyState
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyCovidEntryByRaceQueryVariables,
  APITypes.CountyCovidEntryByRaceQuery
>;
export const countyCovidEntryBySex = /* GraphQL */ `query CountyCovidEntryBySex(
  $countyState: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovidEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyCovidEntryBySex(
    countyState: $countyState
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyCovidEntryBySexQueryVariables,
  APITypes.CountyCovidEntryBySexQuery
>;
export const getRecoveryEntry = /* GraphQL */ `query GetRecoveryEntry($id: ID!) {
  getRecoveryEntry(id: $id) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
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
` as GeneratedQuery<
  APITypes.GetRecoveryEntryQueryVariables,
  APITypes.GetRecoveryEntryQuery
>;
export const listRecoveryEntries = /* GraphQL */ `query ListRecoveryEntries(
  $filter: ModelRecoveryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecoveryEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecoveryEntriesQueryVariables,
  APITypes.ListRecoveryEntriesQuery
>;
export const stateRecovEntryByDate = /* GraphQL */ `query StateRecovEntryByDate(
  $state: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecoveryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateRecovEntryByDate(
    state: $state
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateRecovEntryByDateQueryVariables,
  APITypes.StateRecovEntryByDateQuery
>;
export const stateRecovEntryByAge = /* GraphQL */ `query StateRecovEntryByAge(
  $state: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecoveryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateRecovEntryByAge(
    state: $state
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateRecovEntryByAgeQueryVariables,
  APITypes.StateRecovEntryByAgeQuery
>;
export const stateRecovEntryByRace = /* GraphQL */ `query StateRecovEntryByRace(
  $state: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecoveryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateRecovEntryByRace(
    state: $state
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateRecovEntryByRaceQueryVariables,
  APITypes.StateRecovEntryByRaceQuery
>;
export const stateRecovEntryBySex = /* GraphQL */ `query StateRecovEntryBySex(
  $state: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecoveryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateRecovEntryBySex(
    state: $state
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateRecovEntryBySexQueryVariables,
  APITypes.StateRecovEntryBySexQuery
>;
export const countyRecovEntryByDate = /* GraphQL */ `query CountyRecovEntryByDate(
  $countyState: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecoveryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyRecovEntryByDate(
    countyState: $countyState
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyRecovEntryByDateQueryVariables,
  APITypes.CountyRecovEntryByDateQuery
>;
export const countyRecovEntryByAge = /* GraphQL */ `query CountyRecovEntryByAge(
  $countyState: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecoveryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyRecovEntryByAge(
    countyState: $countyState
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyRecovEntryByAgeQueryVariables,
  APITypes.CountyRecovEntryByAgeQuery
>;
export const countyRecovEntryByRace = /* GraphQL */ `query CountyRecovEntryByRace(
  $countyState: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecoveryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyRecovEntryByRace(
    countyState: $countyState
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyRecovEntryByRaceQueryVariables,
  APITypes.CountyRecovEntryByRaceQuery
>;
export const countyRecovEntryBySex = /* GraphQL */ `query CountyRecovEntryBySex(
  $countyState: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRecoveryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyRecovEntryBySex(
    countyState: $countyState
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyRecovEntryBySexQueryVariables,
  APITypes.CountyRecovEntryBySexQuery
>;
export const getPatientHealthEntry = /* GraphQL */ `query GetPatientHealthEntry($id: ID!) {
  getPatientHealthEntry(id: $id) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
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
` as GeneratedQuery<
  APITypes.GetPatientHealthEntryQueryVariables,
  APITypes.GetPatientHealthEntryQuery
>;
export const listPatientHealthEntries = /* GraphQL */ `query ListPatientHealthEntries(
  $filter: ModelPatientHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listPatientHealthEntries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPatientHealthEntriesQueryVariables,
  APITypes.ListPatientHealthEntriesQuery
>;
export const statePatientHealthEntryByDate = /* GraphQL */ `query StatePatientHealthEntryByDate(
  $state: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPatientHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  statePatientHealthEntryByDate(
    state: $state
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StatePatientHealthEntryByDateQueryVariables,
  APITypes.StatePatientHealthEntryByDateQuery
>;
export const statePatientHealthEntryByAge = /* GraphQL */ `query StatePatientHealthEntryByAge(
  $state: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPatientHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  statePatientHealthEntryByAge(
    state: $state
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StatePatientHealthEntryByAgeQueryVariables,
  APITypes.StatePatientHealthEntryByAgeQuery
>;
export const statePatientHealthEntryByRace = /* GraphQL */ `query StatePatientHealthEntryByRace(
  $state: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPatientHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  statePatientHealthEntryByRace(
    state: $state
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StatePatientHealthEntryByRaceQueryVariables,
  APITypes.StatePatientHealthEntryByRaceQuery
>;
export const statePatientHealthEntryBySex = /* GraphQL */ `query StatePatientHealthEntryBySex(
  $state: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPatientHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  statePatientHealthEntryBySex(
    state: $state
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StatePatientHealthEntryBySexQueryVariables,
  APITypes.StatePatientHealthEntryBySexQuery
>;
export const countyPatientHealthEntryByDate = /* GraphQL */ `query CountyPatientHealthEntryByDate(
  $countyState: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPatientHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyPatientHealthEntryByDate(
    countyState: $countyState
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyPatientHealthEntryByDateQueryVariables,
  APITypes.CountyPatientHealthEntryByDateQuery
>;
export const countyPatientHealthEntryByAge = /* GraphQL */ `query CountyPatientHealthEntryByAge(
  $countyState: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPatientHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyPatientHealthEntryByAge(
    countyState: $countyState
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyPatientHealthEntryByAgeQueryVariables,
  APITypes.CountyPatientHealthEntryByAgeQuery
>;
export const countyPatientHealthEntryByRace = /* GraphQL */ `query CountyPatientHealthEntryByRace(
  $countyState: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPatientHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyPatientHealthEntryByRace(
    countyState: $countyState
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyPatientHealthEntryByRaceQueryVariables,
  APITypes.CountyPatientHealthEntryByRaceQuery
>;
export const countyPatientHealthEntryBySex = /* GraphQL */ `query CountyPatientHealthEntryBySex(
  $countyState: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPatientHealthEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyPatientHealthEntryBySex(
    countyState: $countyState
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyPatientHealthEntryBySexQueryVariables,
  APITypes.CountyPatientHealthEntryBySexQuery
>;
export const getSymptomEntry = /* GraphQL */ `query GetSymptomEntry($id: ID!) {
  getSymptomEntry(id: $id) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
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
` as GeneratedQuery<
  APITypes.GetSymptomEntryQueryVariables,
  APITypes.GetSymptomEntryQuery
>;
export const listSymptomEntries = /* GraphQL */ `query ListSymptomEntries(
  $filter: ModelSymptomEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listSymptomEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSymptomEntriesQueryVariables,
  APITypes.ListSymptomEntriesQuery
>;
export const stateSymptomEntryByDate = /* GraphQL */ `query StateSymptomEntryByDate(
  $state: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSymptomEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSymptomEntryByDate(
    state: $state
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSymptomEntryByDateQueryVariables,
  APITypes.StateSymptomEntryByDateQuery
>;
export const stateSymptomEntryByAge = /* GraphQL */ `query StateSymptomEntryByAge(
  $state: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSymptomEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSymptomEntryByAge(
    state: $state
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSymptomEntryByAgeQueryVariables,
  APITypes.StateSymptomEntryByAgeQuery
>;
export const stateSymptomEntryByRace = /* GraphQL */ `query StateSymptomEntryByRace(
  $state: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSymptomEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSymptomEntryByRace(
    state: $state
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSymptomEntryByRaceQueryVariables,
  APITypes.StateSymptomEntryByRaceQuery
>;
export const stateSymptomEntryBySex = /* GraphQL */ `query StateSymptomEntryBySex(
  $state: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSymptomEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSymptomEntryBySex(
    state: $state
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSymptomEntryBySexQueryVariables,
  APITypes.StateSymptomEntryBySexQuery
>;
export const countySymptomEntryByDate = /* GraphQL */ `query CountySymptomEntryByDate(
  $countyState: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSymptomEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySymptomEntryByDate(
    countyState: $countyState
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySymptomEntryByDateQueryVariables,
  APITypes.CountySymptomEntryByDateQuery
>;
export const countySymptomEntryByAge = /* GraphQL */ `query CountySymptomEntryByAge(
  $countyState: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSymptomEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySymptomEntryByAge(
    countyState: $countyState
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySymptomEntryByAgeQueryVariables,
  APITypes.CountySymptomEntryByAgeQuery
>;
export const countySymptomEntryByRace = /* GraphQL */ `query CountySymptomEntryByRace(
  $countyState: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSymptomEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySymptomEntryByRace(
    countyState: $countyState
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySymptomEntryByRaceQueryVariables,
  APITypes.CountySymptomEntryByRaceQuery
>;
export const countySymptomEntryBySex = /* GraphQL */ `query CountySymptomEntryBySex(
  $countyState: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSymptomEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySymptomEntryBySex(
    countyState: $countyState
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySymptomEntryBySexQueryVariables,
  APITypes.CountySymptomEntryBySexQuery
>;
export const getSocialDeterminantsEntry = /* GraphQL */ `query GetSocialDeterminantsEntry($id: ID!) {
  getSocialDeterminantsEntry(id: $id) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
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
` as GeneratedQuery<
  APITypes.GetSocialDeterminantsEntryQueryVariables,
  APITypes.GetSocialDeterminantsEntryQuery
>;
export const listSocialDeterminantsEntries = /* GraphQL */ `query ListSocialDeterminantsEntries(
  $filter: ModelSocialDeterminantsEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listSocialDeterminantsEntries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSocialDeterminantsEntriesQueryVariables,
  APITypes.ListSocialDeterminantsEntriesQuery
>;
export const stateSocialDetEntryByDate = /* GraphQL */ `query StateSocialDetEntryByDate(
  $state: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSocialDeterminantsEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSocialDetEntryByDate(
    state: $state
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSocialDetEntryByDateQueryVariables,
  APITypes.StateSocialDetEntryByDateQuery
>;
export const stateSocialDetEntryByAge = /* GraphQL */ `query StateSocialDetEntryByAge(
  $state: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSocialDeterminantsEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSocialDetEntryByAge(
    state: $state
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSocialDetEntryByAgeQueryVariables,
  APITypes.StateSocialDetEntryByAgeQuery
>;
export const stateSocialDetEntryByRace = /* GraphQL */ `query StateSocialDetEntryByRace(
  $state: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSocialDeterminantsEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSocialDetEntryByRace(
    state: $state
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSocialDetEntryByRaceQueryVariables,
  APITypes.StateSocialDetEntryByRaceQuery
>;
export const stateSocialDetEntryBySex = /* GraphQL */ `query StateSocialDetEntryBySex(
  $state: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSocialDeterminantsEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateSocialDetEntryBySex(
    state: $state
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateSocialDetEntryBySexQueryVariables,
  APITypes.StateSocialDetEntryBySexQuery
>;
export const countySocialDetEntryByDate = /* GraphQL */ `query CountySocialDetEntryByDate(
  $countyState: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSocialDeterminantsEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySocialDetEntryByDate(
    countyState: $countyState
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySocialDetEntryByDateQueryVariables,
  APITypes.CountySocialDetEntryByDateQuery
>;
export const countySocialDetEntryByAge = /* GraphQL */ `query CountySocialDetEntryByAge(
  $countyState: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSocialDeterminantsEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySocialDetEntryByAge(
    countyState: $countyState
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySocialDetEntryByAgeQueryVariables,
  APITypes.CountySocialDetEntryByAgeQuery
>;
export const countySocialDetEntryByRace = /* GraphQL */ `query CountySocialDetEntryByRace(
  $countyState: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSocialDeterminantsEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySocialDetEntryByRace(
    countyState: $countyState
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySocialDetEntryByRaceQueryVariables,
  APITypes.CountySocialDetEntryByRaceQuery
>;
export const countySocialDetEntryBySex = /* GraphQL */ `query CountySocialDetEntryBySex(
  $countyState: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSocialDeterminantsEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countySocialDetEntryBySex(
    countyState: $countyState
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountySocialDetEntryBySexQueryVariables,
  APITypes.CountySocialDetEntryBySexQuery
>;
export const getMonthlyEntry = /* GraphQL */ `query GetMonthlyEntry($id: ID!) {
  getMonthlyEntry(id: $id) {
    id
    state
    countyState
    surveyEntry {
      id
      parentSurveyId
      email
      state
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
` as GeneratedQuery<
  APITypes.GetMonthlyEntryQueryVariables,
  APITypes.GetMonthlyEntryQuery
>;
export const listMonthlyEntries = /* GraphQL */ `query ListMonthlyEntries(
  $filter: ModelMonthlyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listMonthlyEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMonthlyEntriesQueryVariables,
  APITypes.ListMonthlyEntriesQuery
>;
export const stateMonthlyEntryByDate = /* GraphQL */ `query StateMonthlyEntryByDate(
  $state: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateMonthlyEntryByDate(
    state: $state
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateMonthlyEntryByDateQueryVariables,
  APITypes.StateMonthlyEntryByDateQuery
>;
export const stateMonthlyEntryByAge = /* GraphQL */ `query StateMonthlyEntryByAge(
  $state: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateMonthlyEntryByAge(
    state: $state
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateMonthlyEntryByAgeQueryVariables,
  APITypes.StateMonthlyEntryByAgeQuery
>;
export const stateMonthlyEntryByRace = /* GraphQL */ `query StateMonthlyEntryByRace(
  $state: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateMonthlyEntryByRace(
    state: $state
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateMonthlyEntryByRaceQueryVariables,
  APITypes.StateMonthlyEntryByRaceQuery
>;
export const stateMonthlyEntryBySex = /* GraphQL */ `query StateMonthlyEntryBySex(
  $state: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  stateMonthlyEntryBySex(
    state: $state
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StateMonthlyEntryBySexQueryVariables,
  APITypes.StateMonthlyEntryBySexQuery
>;
export const countyMonthlyEntryByDate = /* GraphQL */ `query CountyMonthlyEntryByDate(
  $countyState: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyMonthlyEntryByDate(
    countyState: $countyState
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyMonthlyEntryByDateQueryVariables,
  APITypes.CountyMonthlyEntryByDateQuery
>;
export const countyMonthlyEntryByAge = /* GraphQL */ `query CountyMonthlyEntryByAge(
  $countyState: String!
  $age: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyMonthlyEntryByAge(
    countyState: $countyState
    age: $age
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyMonthlyEntryByAgeQueryVariables,
  APITypes.CountyMonthlyEntryByAgeQuery
>;
export const countyMonthlyEntryByRace = /* GraphQL */ `query CountyMonthlyEntryByRace(
  $countyState: String!
  $race: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyMonthlyEntryByRace(
    countyState: $countyState
    race: $race
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyMonthlyEntryByRaceQueryVariables,
  APITypes.CountyMonthlyEntryByRaceQuery
>;
export const countyMonthlyEntryBySex = /* GraphQL */ `query CountyMonthlyEntryBySex(
  $countyState: String!
  $sex: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  countyMonthlyEntryBySex(
    countyState: $countyState
    sex: $sex
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      countyState
      surveyEntry {
        id
        parentSurveyId
        email
        state
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CountyMonthlyEntryBySexQueryVariables,
  APITypes.CountyMonthlyEntryBySexQuery
>;
export const getFeedbackEntry = /* GraphQL */ `query GetFeedbackEntry($id: ID!) {
  getFeedbackEntry(id: $id) {
    id
    name
    feedback
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFeedbackEntryQueryVariables,
  APITypes.GetFeedbackEntryQuery
>;
export const listFeedbackEntries = /* GraphQL */ `query ListFeedbackEntries(
  $filter: ModelFeedbackEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbackEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      feedback
      completed
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeedbackEntriesQueryVariables,
  APITypes.ListFeedbackEntriesQuery
>;
export const feedbackByID = /* GraphQL */ `query FeedbackByID(
  $id: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFeedbackEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  feedbackByID(
    id: $id
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      feedback
      completed
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FeedbackByIDQueryVariables,
  APITypes.FeedbackByIDQuery
>;
