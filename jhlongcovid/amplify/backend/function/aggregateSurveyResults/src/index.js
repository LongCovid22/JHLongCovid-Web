/* Amplify Params - DO NOT EDIT
	API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIIDOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ const {
  Sha256,
} = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");
const {
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
} = require("./checkTypes");
const { hasLongCovid } = require("./helper");

const GRAPHQL_ENDPOINT = process.env.API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT;

// const GRAPHQL_ENDPOINT = 'http://localhost:20002/graphql';
const AWS_REGION = process.env.AWS_REGION || "us-east-1";

// amplify mock function aggregateSurveyResults --event ./src/event.json

let properties = `
      id
      level
      name
      stateAbbrev
      lat
      long
      covidCount
      longCovid
      phq8AboveTen
      recoveredCount
      longCovidOverFourWeeks
      longCovidOverTwelveWeeks
      topMedicalCondition
      covidSummary {
        beenInfected {
          yes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          no {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        timesPositive {
          one {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          } 
          two {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          } 
          three {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          threePlus {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        hospitalized {
          yes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          no {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        timesHospitalized {
          one {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          two {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          three {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          threePlus {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        tested {
          yes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          no {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        positiveTest {
          yes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          } 
          no {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        symptomatic {
          yes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          no {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        symptomsPreventScale {
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          alittleBit {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          somewhat {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          quiteABit {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          veryMuch {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        medicationsPrescribed {
          yes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          no {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        medicationsTakenCount {
          antiViral {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          oralSteroids {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          antiBiotics {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          other {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
      }
      recoverySummary {
        recovered {
          yes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          no {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        avglengthOfRecovery {
          race {
            ranges
            values {
              count
              average
            }
          }
          age {
            ranges
            values {
              count
              average
            }
          }
          sex {
            ranges
            values {
              count
              average
            }
          }
        }
      }
      vaccinationSummary {
        vaccinated {
          yes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          no {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        totalVaccineShots {
          one {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          two {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          three {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          four {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          five {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          fivePlus {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        vaccineType {
          pfizer {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moderna {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          janssen {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          novavax {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          other {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
      }
      globalHealthSummary {
        healthRank {
          excellent {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          veryGood {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          good {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          fair {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          poor {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        physicalHealthRank {
          excellent {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          veryGood {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          good {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          fair {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          poor {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        carryPhysicalActivities {
          completely {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          mostly {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moderately {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          aLittle {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        fatigueRank {
          none {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          mild {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moderate {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          severe {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          verySevere {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        avgpainLevel {
          race {
            ranges
            values {
              count
              average
            }
          }
          age {
            ranges
            values {
              count
              average
            }
          }
          sex {
            ranges
            values {
              count
              average
            }
          }
        }
      }

      symptomSummary {
        symptomCounts {
          headache {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          bodyMuscleAche {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          feverChillsSweatsFlushing {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          faintDizzyGoofy {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          postExertionalMalaise {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          weaknessInArmsLegs {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          shortnessOfBreath {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          cough {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          palpitations {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          swellingOfLegs {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          indigestionNausea {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          bladderProblem {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          nerveProblems {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          brainFog {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          anxietyDepressionNightmares {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          difficultyFallingAsleep {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          sleepyDuringDaytime {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          loudSnoring {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          uncomfortableFeelingsInLegs {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          skinRash {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          lossOfChangeInSmell {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          excessiveThirst {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          excessiveDryMouth {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          visionProblems {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          hearingProblems {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          fertilityProblemsForWomen {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        qualityOfLife {
          excellent {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          veryGood {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          good {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          fair {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          poor {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        mentalHealthRank {
          excellent {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          veryGood {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          good {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          fair {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          poor {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        socialSatisfactionRank {
          excellent {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          veryGood {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          good {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          fair {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          poor {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        carryOutSocialActivitiesRank {
          excellent {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          veryGood {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          good {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          fair {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          poor {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        anxietyInPastWeekRank {
          never {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          rarely {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          sometimes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          often {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          always {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
      }
      patientHealthQuestionnaireSummary {
        littleInterestThings {
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          severalDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moreThanHalfTheDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          nearlyEveryDay {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        downDepressedHopeless {
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          severalDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moreThanHalfTheDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          nearlyEveryDay {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        sleepProblems {
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          severalDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moreThanHalfTheDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          nearlyEveryDay {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        tiredNoEnergy {
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          severalDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moreThanHalfTheDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          nearlyEveryDay {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        dietProblems {
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          severalDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moreThanHalfTheDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          nearlyEveryDay {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        badAboutSelf {
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          severalDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moreThanHalfTheDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          nearlyEveryDay {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        concentrationProblems {
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          severalDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moreThanHalfTheDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          nearlyEveryDay {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        slowOrRestless {
          notAtAll {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          severalDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          moreThanHalfTheDays {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          nearlyEveryDay {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        avgPHQScore {
          race {
            ranges
            values {
              count
              average
            }
          }
          age {
            ranges
            values {
              count
              average
            }
          }
          sex {
            ranges
            values {
              count
              average
            }
          }
        }
      }

      medicalConditionsSummary {
        longCovid {
          yes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          no {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        newDiagnosisCounts {
          noNewDiagnosis {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          heartProblems {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          lungProblems {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          bloodClotLung {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          sleepApnea {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          memory {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          migraine {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          stroke {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          seizure {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          kidneyProblems {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          stomachProblems {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          psychologicalProblems {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          diabetes {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          autoImmuneDiseases {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          mecfs {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          other {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          notSure {
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
      }
      socialSummary {
        hasMedicalInsurance {
          yes{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          no{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        difficultCoveringExpenses {
          veryDifficult{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          somewhatDifficult{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          notAtAllDifficult{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          preferNotToAnswer{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
        currentWorkSituation {
          atOffice{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          hybrid{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          remote{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          remoteAndParenting{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          onJobLeave{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          unemployed{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          retired{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          disability{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          student{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          doNotKnow{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
          preferNotToAnswer{
            race {
              ranges
              values
            }
            age {
              ranges
              values
            }
            sex {
              ranges
              values
            }
          }
        }
      }
      totalFullEntries
`;

const updateQuery =
  `
  mutation UPDATE_MAP_DATA($input: UpdateMapDataInput!) {
    updateMapData(input: $input) {
      ` +
  properties +
  `
    }
  }
`;

const query =
  `
  mutation CREATE_MAP_DATA($input: CreateMapDataInput!) {
    createMapData(input: $input) {
      ` +
  properties +
  `
    }
  }
`;

const deleteQuery = `
mutation MyMutation {
  deleteMapData(input: {level: "county", lat: 13.5, long: -54.3}) {
    id
  }
}
`;

const mockCredentials = {
  accessKeyId: "ASIAVJKIAM-AuthRole",
  secretAccessKey: "fake",
};
const credentials = defaultProvider();
// const credentials = process.env.AWS_EXECUTION_ENV.endsWith("mock")
// ? mockCredentials
// : defaultProvider();

const NullJSONData = {
  age: {
    ranges: ["1-13", "13-25", "25-60", "60+"],
    values: [0, 0, 0, 0],
  },
  race: {
    ranges: ["White", "Black", "Asian", "Native", "Hispanic", "Other", "None"],
    values: [0, 0, 0, 0, 0, 0, 0],
  },
  sex: {
    ranges: ["Male", "Female", "Other"],
    values: [0, 0, 0],
  },
};

// each value is [count, average]
const avgNULLJSONData = {
  age: {
    ranges: ["1-13", "13-25", "25-60", "60+"],
    values: [
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
    ],
  },
  race: {
    ranges: ["White", "Black", "Asian", "Native", "Hispanic", "Other", "None"],
    values: [
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
    ],
  },
  sex: {
    ranges: ["Male", "Female", "Other"],
    values: [
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
    ],
  },
};

let variables = {
  input: {
    level: "county",
    name: "Orange Fruit County",
    stateAbbrev: "CA",
    lat: 13.54535353533555,
    long: -54.345353535635,
    covidCount: 0,
    longCovid: 0,
    phq8AboveTen: 0,
    recoveredCount: 0,
    longCovidOverFourWeeks: 0,
    longCovidOverTwelveWeeks: 0,
    topMedicalCondition: "",
    covidSummary: {
      beenInfected: {
        yes: NullJSONData,
        no: NullJSONData,
      },
      timesPositive: {
        one: NullJSONData,
        two: NullJSONData,
        three: NullJSONData,
        threePlus: NullJSONData,
        doNotKnow: NullJSONData,
      },
      hospitalized: {
        yes: NullJSONData,
        no: NullJSONData,
      },
      timesHospitalized: {
        one: NullJSONData,
        two: NullJSONData,
        three: NullJSONData,
        threePlus: NullJSONData,
        doNotKnow: NullJSONData,
      },
      tested: {
        yes: NullJSONData,
        no: NullJSONData,
      },
      positiveTest: {
        yes: NullJSONData,
        no: NullJSONData,
        doNotKnow: NullJSONData,
      },
      symptomatic: {
        yes: NullJSONData,
        no: NullJSONData,
      },
      symptomsPreventScale: {
        notAtAll: NullJSONData,
        alittleBit: NullJSONData,
        somewhat: NullJSONData,
        quiteABit: NullJSONData,
        veryMuch: NullJSONData,
      },
      medicationsPrescribed: {
        yes: NullJSONData,
        no: NullJSONData,
        doNotKnow: NullJSONData,
      },
      medicationsTakenCount: {
        antiViral: NullJSONData,
        oralSteroids: NullJSONData,
        antiBiotics: NullJSONData,
        other: NullJSONData,
        doNotKnow: NullJSONData,
      },
    },
    recoverySummary: {
      recovered: {
        yes: NullJSONData,
        no: NullJSONData,
      },
      avglengthOfRecovery: avgNULLJSONData,
    },

    vaccinationSummary: {
      vaccinated: {
        yes: NullJSONData,
        no: NullJSONData,
        doNotKnow: NullJSONData,
      },
      totalVaccineShots: {
        one: NullJSONData,
        two: NullJSONData,
        three: NullJSONData,
        four: NullJSONData,
        five: NullJSONData,
        fivePlus: NullJSONData,
        doNotKnow: NullJSONData,
      },
      vaccineType: {
        pfizer: NullJSONData,
        moderna: NullJSONData,
        janssen: NullJSONData,
        novavax: NullJSONData,
        other: NullJSONData,
        doNotKnow: NullJSONData,
      },
    },

    globalHealthSummary: {
      healthRank: {
        excellent: NullJSONData,
        veryGood: NullJSONData,
        good: NullJSONData,
        fair: NullJSONData,
        poor: NullJSONData,
      },
      physicalHealthRank: {
        excellent: NullJSONData,
        veryGood: NullJSONData,
        good: NullJSONData,
        fair: NullJSONData,
        poor: NullJSONData,
      },
      carryPhysicalActivities: {
        completely: NullJSONData,
        mostly: NullJSONData,
        moderately: NullJSONData,
        aLittle: NullJSONData,
        notAtAll: NullJSONData,
      },
      fatigueRank: {
        none: NullJSONData,
        mild: NullJSONData,
        moderate: NullJSONData,
        severe: NullJSONData,
        verySevere: NullJSONData,
      },
      avgpainLevel: avgNULLJSONData,
    },

    symptomSummary: {
      symptomCounts: {
        headache: NullJSONData,
        bodyMuscleAche: NullJSONData,
        feverChillsSweatsFlushing: NullJSONData,
        faintDizzyGoofy: NullJSONData,
        postExertionalMalaise: NullJSONData,
        weaknessInArmsLegs: NullJSONData,
        shortnessOfBreath: NullJSONData,
        cough: NullJSONData,
        palpitations: NullJSONData,
        swellingOfLegs: NullJSONData,
        indigestionNausea: NullJSONData,
        bladderProblem: NullJSONData,
        nerveProblems: NullJSONData,
        brainFog: NullJSONData,
        anxietyDepressionNightmares: NullJSONData,
        difficultyFallingAsleep: NullJSONData,
        sleepyDuringDaytime: NullJSONData,
        loudSnoring: NullJSONData,
        uncomfortableFeelingsInLegs: NullJSONData,
        skinRash: NullJSONData,
        lossOfChangeInSmell: NullJSONData,
        excessiveThirst: NullJSONData,
        excessiveDryMouth: NullJSONData,
        visionProblems: NullJSONData,
        hearingProblems: NullJSONData,
        fertilityProblemsForWomen: NullJSONData,
      },
      qualityOfLife: {
        excellent: NullJSONData,
        veryGood: NullJSONData,
        good: NullJSONData,
        fair: NullJSONData,
        poor: NullJSONData,
      },
      mentalHealthRank: {
        excellent: NullJSONData,
        veryGood: NullJSONData,
        good: NullJSONData,
        fair: NullJSONData,
        poor: NullJSONData,
      },
      socialSatisfactionRank: {
        excellent: NullJSONData,
        veryGood: NullJSONData,
        good: NullJSONData,
        fair: NullJSONData,
        poor: NullJSONData,
      },
      carryOutSocialActivitiesRank: {
        excellent: NullJSONData,
        veryGood: NullJSONData,
        good: NullJSONData,
        fair: NullJSONData,
        poor: NullJSONData,
      },
      anxietyInPastWeekRank: {
        never: NullJSONData,
        rarely: NullJSONData,
        sometimes: NullJSONData,
        often: NullJSONData,
        always: NullJSONData,
      },
    },

    patientHealthQuestionnaireSummary: {
      littleInterestThings: {
        notAtAll: NullJSONData,
        severalDays: NullJSONData,
        moreThanHalfTheDays: NullJSONData,
        nearlyEveryDay: NullJSONData,
      },
      downDepressedHopeless: {
        notAtAll: NullJSONData,
        severalDays: NullJSONData,
        moreThanHalfTheDays: NullJSONData,
        nearlyEveryDay: NullJSONData,
      },
      sleepProblems: {
        notAtAll: NullJSONData,
        severalDays: NullJSONData,
        moreThanHalfTheDays: NullJSONData,
        nearlyEveryDay: NullJSONData,
      },
      tiredNoEnergy: {
        notAtAll: NullJSONData,
        severalDays: NullJSONData,
        moreThanHalfTheDays: NullJSONData,
        nearlyEveryDay: NullJSONData,
      },
      dietProblems: {
        notAtAll: NullJSONData,
        severalDays: NullJSONData,
        moreThanHalfTheDays: NullJSONData,
        nearlyEveryDay: NullJSONData,
      },
      badAboutSelf: {
        notAtAll: NullJSONData,
        severalDays: NullJSONData,
        moreThanHalfTheDays: NullJSONData,
        nearlyEveryDay: NullJSONData,
      },
      concentrationProblems: {
        notAtAll: NullJSONData,
        severalDays: NullJSONData,
        moreThanHalfTheDays: NullJSONData,
        nearlyEveryDay: NullJSONData,
      },
      slowOrRestless: {
        notAtAll: NullJSONData,
        severalDays: NullJSONData,
        moreThanHalfTheDays: NullJSONData,
        nearlyEveryDay: NullJSONData,
      },
      avgPHQScore: avgNULLJSONData,
    },
    medicalConditionsSummary: {
      longCovid: {
        yes: NullJSONData,
        no: NullJSONData,
        doNotKnow: NullJSONData,
      },
      newDiagnosisCounts: {
        noNewDiagnosis: NullJSONData,
        heartProblems: NullJSONData,
        lungProblems: NullJSONData,
        bloodClotLung: NullJSONData,
        sleepApnea: NullJSONData,
        memory: NullJSONData,
        migraine: NullJSONData,
        stroke: NullJSONData,
        seizure: NullJSONData,
        kidneyProblems: NullJSONData,
        stomachProblems: NullJSONData,
        psychologicalProblems: NullJSONData,
        diabetes: NullJSONData,
        autoImmuneDiseases: NullJSONData,
        mecfs: NullJSONData,
        other: NullJSONData,
        notSure: NullJSONData,
      },
    },
    socialSummary: {
      hasMedicalInsurance: {
        yes: NullJSONData,
        no: NullJSONData,
      },
      difficultCoveringExpenses: {
        veryDifficult: NullJSONData,
        somewhatDifficult: NullJSONData,
        notAtAllDifficult: NullJSONData,
        doNotKnow: NullJSONData,
        preferNotToAnswer: NullJSONData,
      },
      currentWorkSituation: {
        atOffice: NullJSONData,
        hybrid: NullJSONData,
        remote: NullJSONData,
        remoteAndParenting: NullJSONData,
        onJobLeave: NullJSONData,
        unemployed: NullJSONData,
        retired: NullJSONData,
        disability: NullJSONData,
        student: NullJSONData,
        doNotKnow: NullJSONData,
        preferNotToAnswer: NullJSONData,
      },
    },
    totalFullEntries: 0,
  },
};

const makeRequest = async (query, variables) => {
  const endpoint = new URL(GRAPHQL_ENDPOINT);
  const signer = new SignatureV4({
    credentials: credentials,
    region: AWS_REGION,
    service: "appsync",
    sha256: Sha256,
  });

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body:
      variables != null
        ? JSON.stringify({ query, variables })
        : JSON.stringify({ query }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);
  return request;
};

const getMapData = async () => {
  const listMapDataQuery = `
  query MyQuery {
    listMapData {
      items {
        id
        lat
        level
        long
      }
    }
  }
  `;
  let request = await makeRequest(listMapDataQuery);

  try {
    let response = await fetch(request);
    return response.json();
  } catch (error) {
    console.log(error.message);
    return "error";
  }
};

const deleteMapData = async (level, lat, long) => {
  const deleteQuery = `
  mutation DELETEMAPDATA($input : DeleteMapDataInput!) {
    deleteMapData(input: $input) {
      id
    }
  }
  `;
  const deleteVariables = {
    input: { level, lat, long },
  };

  let request = await makeRequest(deleteQuery, deleteVariables);

  try {
    let response = await fetch(request);
    // console.log(await response.json());
  } catch (error) {
    console.log(error.message);
  }
};

const deleteAllMapData = async () => {
  let load = await getMapData();

  while (load.data.listMapData.items.length > 0) {
    for (const mapData of load.data.listMapData.items) {
      await deleteMapData(mapData.level, mapData.lat, mapData.long);
    }

    load = await getMapData();
  }
};

const queryString = properties;

const getID = async (level, name, stateAbbrev) => {
  let query = null;
  if (level === "county") {
    query = `
    query MyQuery {
      mapDataByLevelNameState(
        level: "${level}"
        nameStateAbbrev: {eq: {name: "${name}", stateAbbrev: "${stateAbbrev}"}}
      ) {
        items {
          id
          name
          stateAbbrev
          ${queryString}
        }

      }
    }
    `;
  } else if (level === "state") {
    query = `
  query MyQuery {
    mapDataByStateAbbrev(level: "state", filter: {name: {eq: "${name}"}}) {
      items {
        id
        name
        stateAbbrev
        ${queryString}
      }
    }
  }
  `;
  }
  let request = await makeRequest(query);

  try {
    let response = await fetch(request);
    let load = await response.json();
    console.log(`Fetching MapData for ${level} ${name}...`);
    if (level === "county") {
      return load.data.mapDataByLevelNameState.items;
    } else if (level === "state") {
      // return load.data.mapDataByStateAbbrev.items
      return load.data.mapDataByStateAbbrev.items;
    }
  } catch (error) {
    console.log(`${level} fetch: ` + error.message);
    return null;
  }
};

const updateMapData = async (county, state) => {
  const endpoint = new URL(GRAPHQL_ENDPOINT);
  const signer = new SignatureV4({
    // credentials: defaultProvider(),
    credentials: credentials,
    region: AWS_REGION,
    service: "appsync",
    sha256: Sha256,
  });

  const query = updateQuery;
  let body;
  let response;

  if (county) {
    let variables = { input: county };

    let requestToBeSigned = new HttpRequest({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        host: endpoint.host,
      },
      hostname: endpoint.host,
      body: JSON.stringify({ query, variables }),
      path: endpoint.pathname,
    });

    let signed = await signer.sign(requestToBeSigned);
    let request = new Request(endpoint, signed);

    try {
      response = await fetch(request);
      body = await response.json();
      console.log(`Updating MapData for ${county.level} ${county.name}...`);

      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 500;
      body = {
        errors: [
          {
            message: error.message,
          },
        ],
      };
      console.log(body);
    }
  }

  variables = { input: state };

  requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query, variables }),
    path: endpoint.pathname,
  });

  signed = await signer.sign(requestToBeSigned);
  request = new Request(endpoint, signed);

  try {
    response = await fetch(request);
    body = await response.json();
    console.log(`Updating MapData for ${state.level} ${state.name}...`);
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message,
        },
      ],
    };
    console.log(body);
  }
};

const getStateAndCountyInfo = async (eventInput) => {
  // const { county, state } = eventInput;

  const { location } = eventInput;

  const { county, state, stateAbbrev } = location;

  const stateInfo = await getID("state", state, null);
  const countyInfo = await getID("county", county, stateAbbrev);

  return {
    county: countyInfo ? countyInfo[0] : null,
    state: stateInfo ? stateInfo[0] : null,
  };
};

const isObject = (variable) => {
  //https://bobbyhadz.com/blog/javascript-check-if-value-is-object
  return (
    typeof variable === "object" &&
    variable !== null &&
    !Array.isArray(variable)
  );
};

const parse = (object) => {
  for (let property in object) {
    if (isObject(object[property])) {
      for (prop in object[property]) {
        if (isObject(object[property][prop])) {
          for (p in object[property][prop]) {
            object[property][prop][p] = JSON.parse(object[property][prop][p]);
          }
        } else {
          object[property][prop] = JSON.parse(object[property][prop]);
        }
      }
    }
  }
};

const stringify = (object) => {
  for (let property in object) {
    if (isObject(object[property])) {
      if ("race" in object[property]) {
        object[property] = JSON.stringify(object[property]);
      } else {
        stringify(object[property]);
      }
    }
  }
};

const stringifyAverages = (object) => {};

const findMatchingIndex = (element, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === element.toLowerCase()) {
      return i;
    }
  }
  return -1;
};

const findHardCodedAgeRangeIndex = (age) => {
  if (age <= 13) {
    return 0;
  } else if (age <= 25) {
    return 1;
  } else if (age <= 60) {
    return 2;
  } else {
    return 3;
  }
};

const aggregatePercentageCustomBasedOnCondition = (
  indexes,
  total,
  property,
  condition,
  customAdd
) => {
  let addOne = condition ? customAdd : 0;

  let { raceIndex, ageIndex, sexIndex } = indexes;

  let { raceTotal, ageTotal, sexTotal } = total;

  property.race.values[raceIndex] = parseFloat(
    (property.race.values[raceIndex] * raceTotal + addOne) / (raceTotal + 1)
  );
  property.age.values[ageIndex] = parseFloat(
    (property.age.values[ageIndex] * ageTotal + addOne) / (ageTotal + 1)
  );
  property.sex.values[sexIndex] = parseFloat(
    (property.age.values[sexIndex] * sexTotal + addOne) / (sexTotal + 1)
  );
};

const addCustomToTallyBasedOnCondition = (
  indexes,
  property,
  condition,
  customAdd
) => {
  let { raceIndex, ageIndex, sexIndex } = indexes;
  let addOne = condition ? customAdd : 0;
  property.race.values[raceIndex] += addOne;
  property.age.values[ageIndex] += addOne;
  property.sex.values[sexIndex] += addOne;
};

const updateCovidSummary = (eventInput, county, state, indexes) => {
  let { covidResults } = eventInput;
  let data;
  if (county) {
    data = {
      county: {
        covidSummary: county.covidSummary,
      },
      state: {
        covidSummary: state.covidSummary,
      },
    };
  } else {
    data = {
      state: {
        covidSummary: state.covidSummary,
      },
    };
  }

  for (const dat in data) {
    let {
      beenInfected,
      timesPositive,
      hospitalized,
      timesHospitalized,
      tested,
      positiveTest,
      symptomatic,
      symptomsPreventScale,
      medicationsPrescribed,
      medicationsTakenCount,
    } = data[dat].covidSummary;

    let objectsToUpdate = [];

    if (covidResults !== null) {
      if (checkNotNullAndBoolType(covidResults.beenInfected)) {
        if (dat === "county") {
          county.covidCount += covidResults.beenInfected ? 1 : 0;
        } else {
          state.covidCount += covidResults.beenInfected ? 1 : 0;
        }

        let prop = trueEqualsYes(covidResults.beenInfected);
        objectsToUpdate.push(beenInfected[prop]);
      }

      // If the user has been infected, then we can update the other properties
      if (covidResults.beenInfected === true) {
        if (checkNotNullNumberGreaterThanZero(covidResults.timesPositive)) {
          let prop = resolveOneToThreePlus(covidResults.timesPositive);
          objectsToUpdate.push(timesPositive[prop]);
        }

        if (checkNotNullAndBoolType(covidResults.hospitalized)) {
          let prop = trueEqualsYes(covidResults.hospitalized);
          objectsToUpdate.push(hospitalized[prop]);
        }

        if (checkNotNullNumberGreaterThanZero(covidResults.timesHospitalized)) {
          let prop = resolveOneToThreePlus(covidResults.timesHospitalized);
          objectsToUpdate.push(timesHospitalized[prop]);
        }

        if (checkNotNullAndBoolType(covidResults.tested)) {
          let prop = trueEqualsYes(covidResults.tested);
          objectsToUpdate.push(tested[prop]);
        }

        if (
          checkNotNullAndStringType(covidResults.positiveTest) &&
          checkYesNoDoNotKnowType(covidResults.positiveTest)
        ) {
          objectsToUpdate.push(positiveTest[covidResults.positiveTest]);
        }

        if (checkNotNullAndBoolType(covidResults.symptomatic)) {
          let prop = trueEqualsYes(covidResults.symptomatic);
          objectsToUpdate.push(symptomatic[prop]);
        }

        if (
          checkNotNullAndStringType(covidResults.symptomsPreventScale) &&
          checkNotAtAllToVeryMuchType(covidResults.symptomsPreventScale)
        ) {
          objectsToUpdate.push(
            symptomsPreventScale[covidResults.symptomsPreventScale]
          );
        }

        if (
          checkNotNullAndStringType(covidResults.medicationsPrescribed) &&
          checkYesNoDoNotKnowType(covidResults.medicationsPrescribed)
        ) {
          objectsToUpdate.push(
            medicationsPrescribed[covidResults.medicationsPrescribed]
          );
        }

        if (
          covidResults.medicationsTaken &&
          covidResults.medicationsTaken !== null &&
          checkMedicationsTakenType(covidResults.medicationsTaken)
        ) {
          objectsToUpdate.push(
            medicationsTakenCount[covidResults.medicationsTaken]
          );
        }
      }

      for (const obj of objectsToUpdate) {
        addCustomToTallyBasedOnCondition(indexes, obj, true, 1);
      }
    }
  }
};

const updateRecoverySummary = (eventInput, county, state, indexes) => {
  let { recoveryResults } = eventInput;
  let data;
  if (county) {
    data = {
      county: {
        recoverySummary: county.recoverySummary,
      },
      state: {
        recoverySummary: state.recoverySummary,
      },
    };
  } else {
    data = {
      state: {
        recoverySummary: state.recoverySummary,
      },
    };
  }

  if (recoveryResults === null || !recoveryResults) {
    return;
  }

  for (const dat in data) {
    let { recovered, avglengthOfRecovery } = data[dat].recoverySummary;

    if (checkNotNullAndBoolType(recoveryResults.recovered)) {
      let prop = trueEqualsYes(recoveryResults.recovered);
      if (dat === "county") {
        if (prop === "yes") {
          county.recoveredCount += 1;
        }
      } else {
        if (prop === "yes") {
          state.recoveredCount += 1;
        }
      }
      addCustomToTallyBasedOnCondition(indexes, recovered[prop], true, 1);
    }

    if (checkNotNullNumberGreaterThanZero(recoveryResults.lengthOfRecovery)) {
      addAverage(
        indexes,
        avglengthOfRecovery,
        recoveryResults.lengthOfRecovery
      );
    }
  }
};

const addAverage = (indexes, property, numToAdd) => {
  const { raceIndex, sexIndex, ageIndex } = indexes;
  property.race.values[raceIndex].average = parseFloat(
    (property.race.values[raceIndex].average *
      property.race.values[raceIndex].count +
      numToAdd) /
      (property.race.values[raceIndex].count + 1)
  );
  property.race.values[raceIndex].count += 1;

  property.sex.values[sexIndex].average = parseFloat(
    (property.sex.values[sexIndex].average *
      property.sex.values[sexIndex].count +
      numToAdd) /
      (property.sex.values[sexIndex].count + 1)
  );
  property.sex.values[sexIndex].count += 1;

  property.age.values[ageIndex].average = parseFloat(
    (property.age.values[ageIndex].average *
      property.age.values[ageIndex].count +
      numToAdd) /
      (property.age.values[ageIndex].count + 1)
  );
  property.age.values[ageIndex].count += 1;
};

const updateVaccinationSummary = (eventInput, county, state, indexes) => {
  let { vaccinationResults } = eventInput;
  let data;
  if (county) {
    data = {
      county: {
        vaccinationSummary: county.vaccinationSummary,
      },
      state: {
        vaccinationSummary: state.vaccinationSummary,
      },
    };
  } else {
    data = {
      state: {
        vaccinationSummary: state.vaccinationSummary,
      },
    };
  }

  if (vaccinationResults === null || !vaccinationResults) {
    return;
  }

  for (const dat in data) {
    let { vaccinated, totalVaccineShots, vaccineType } =
      data[dat].vaccinationSummary;

    let objects = [];
    if (
      checkNotNullAndStringType(vaccinationResults.vaccinated) &&
      checkYesNoDoNotKnowType(vaccinationResults.vaccinated)
    ) {
      objects.push(vaccinated[vaccinationResults.vaccinated]);
    }

    // If the person is vaccinated, then we can check the other properties
    if (vaccinationResults.vaccinated) {
      if (
        checkNotNullNumberGreaterThanZero(vaccinationResults.totalVaccineShots)
      ) {
        let prop = resolveOneToFiveType(vaccinationResults.totalVaccineShots);
        objects.push(totalVaccineShots[prop]);
      }
      if (
        checkNotNullAndStringType(vaccinationResults.vaccineType) &&
        checkVaccineType(vaccinationResults.vaccineType)
      ) {
        objects.push(vaccineType[vaccinationResults.vaccineType]);
      }
    }

    for (const obj of objects) {
      addCustomToTallyBasedOnCondition(indexes, obj, true, 1);
    }
  }
};

const updateGlobalHealthSummary = (eventInput, county, state, indexes) => {
  let { globalHealthResults } = eventInput;
  let data;
  if (county) {
    data = {
      county: {
        globalHealthSummary: county.globalHealthSummary,
      },
      state: {
        globalHealthSummary: state.globalHealthSummary,
      },
    };
  } else {
    data = {
      state: {
        globalHealthSummary: state.globalHealthSummary,
      },
    };
  }

  if (!globalHealthResults || globalHealthResults === null) {
    return;
  }

  for (const dat in data) {
    let {
      healthRank,
      physicalHealthRank,
      carryPhysicalActivities,
      fatigueRank,
      avgpainLevel,
    } = data[dat].globalHealthSummary;

    let objects = [];

    if (
      checkNotNullAndStringType(globalHealthResults.healthRank) &&
      checkExcellentToPoor(globalHealthResults.healthRank)
    ) {
      objects.push(healthRank[globalHealthResults.healthRank]);
    }

    if (
      checkNotNullAndStringType(globalHealthResults.physicalHealthRank) &&
      checkExcellentToPoor(globalHealthResults.physicalHealthRank)
    ) {
      objects.push(physicalHealthRank[globalHealthResults.physicalHealthRank]);
    }

    if (
      checkNotNullAndStringType(globalHealthResults.carryPhysicalActivities) &&
      checkCompletelyToNotAtAll(globalHealthResults.carryPhysicalActivities)
    ) {
      objects.push(
        carryPhysicalActivities[globalHealthResults.carryPhysicalActivities]
      );
    }

    if (
      checkNotNullAndStringType(globalHealthResults.fatigueRank) &&
      checkNoneToVerySevere(globalHealthResults.fatigueRank)
    ) {
      objects.push(fatigueRank[globalHealthResults.fatigueRank]);
    }

    if (checkIsNumAndBetweenOneAndTen(globalHealthResults.painLevel)) {
      addAverage(indexes, avgpainLevel, globalHealthResults.painLevel);
    }

    for (const obj of objects) {
      addCustomToTallyBasedOnCondition(indexes, obj, true, 1);
    }
  }
};

const findMostFrequentDiagnosis = (diagnosisCounts) => {
  let mostfreq = "more data needed";
  let num = 0;
  for (const diag in diagnosisCounts) {
    let arr = diagnosisCounts[diag].race.values;
    const sum = arr.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    if (sum > num) {
      num = sum;
      mostfreq = diag;
    }
  }
  return mostfreq;
};

const updateSymptomSummary = (eventInput, county, state, indexes) => {
  let { symptomResults } = eventInput;

  let data;
  if (county) {
    data = {
      county: {
        symptomSummary: county.symptomSummary,
      },
      state: {
        symptomSummary: state.symptomSummary,
      },
    };
  } else {
    data = {
      state: {
        symptomSummary: state.symptomSummary,
      },
    };
  }

  if (symptomResults === null || !symptomResults) {
    return;
  }

  for (const dat in data) {
    let { symptomCounts } = data[dat].symptomSummary;
    if (checkSymptomStringArray(symptomResults.symptoms)) {
      symptomResults.symptoms.forEach((symp) => {
        addCustomToTallyBasedOnCondition(indexes, symptomCounts[symp], true, 1);
      });
    }
    let {
      qualityOfLife,
      mentalHealthRank,
      socialSatisfactionRank,
      carryOutSocialActivitiesRank,
      anxietyInPastWeekRank,
    } = data[dat].symptomSummary;

    let objects = [];
    if (
      checkNotNullAndStringType(symptomResults.qualityOfLifeRank) &&
      checkExcellentToPoor(symptomResults.qualityOfLifeRank)
    ) {
      objects.push(qualityOfLife[symptomResults.qualityOfLifeRank]);
    }

    if (
      checkNotNullAndStringType(symptomResults.mentalHealthRank) &&
      checkExcellentToPoor(symptomResults.mentalHealthRank)
    ) {
      objects.push(mentalHealthRank[symptomResults.mentalHealthRank]);
    }

    if (
      checkNotNullAndStringType(symptomResults.socialSatisfactionRank) &&
      checkExcellentToPoor(symptomResults.socialSatisfactionRank)
    ) {
      objects.push(
        socialSatisfactionRank[symptomResults.socialSatisfactionRank]
      );
    }

    if (
      checkNotNullAndStringType(symptomResults.carryOutSocialActivitiesRank) &&
      checkExcellentToPoor(symptomResults.carryOutSocialActivitiesRank)
    ) {
      objects.push(
        carryOutSocialActivitiesRank[
          symptomResults.carryOutSocialActivitiesRank
        ]
      );
    }

    if (
      checkNotNullAndStringType(symptomResults.anxietyInPastWeekRank) &&
      checkNeverToAlways(symptomResults.anxietyInPastWeekRank)
    ) {
      objects.push(anxietyInPastWeekRank[symptomResults.anxietyInPastWeekRank]);
    }

    for (const obj of objects) {
      addCustomToTallyBasedOnCondition(indexes, obj, true, 1);
    }
  }
};

const updateMedicalConditionsSummary = (eventInput, county, state, indexes) => {
  let { symptomResults, covidResults, recoveryResults } = eventInput;
  let data;
  if (county) {
    data = {
      county: {
        medicalConditionsSummary: county.medicalConditionsSummary,
        lastPositive: county.covidSummary.lastPositive,
      },
      state: {
        medicalConditionsSummary: state.medicalConditionsSummary,
        lastPositive: state.covidSummary.lastPositive,
      },
    };
  } else {
    data = {
      state: {
        medicalConditionsSummary: state.medicalConditionsSummary,
        lastPositive: state.covidSummary.lastPositive,
      },
    };
  }

  if (symptomResults === null || !symptomResults) {
    return;
  }

  const longCovidResults = hasLongCovid(
    symptomResults,
    covidResults,
    recoveryResults
  );

  for (const dat in data) {
    let { longCovid, newDiagnosisCounts } = data[dat].medicalConditionsSummary;

    if (checkMedicalConditionsArray(symptomResults.medicalConditions)) {
      symptomResults.medicalConditions.forEach((cond) => {
        addCustomToTallyBasedOnCondition(
          indexes,
          newDiagnosisCounts[cond],
          true,
          1
        );
      });
    }

    if (dat === "county") {
      county.topMedicalCondition =
        findMostFrequentDiagnosis(newDiagnosisCounts);
    } else {
      state.topMedicalCondition = findMostFrequentDiagnosis(newDiagnosisCounts);
    }

    if (
      checkNotNullAndStringType(symptomResults.hasLongCovid) &&
      checkYesNoDoNotKnowType(symptomResults.hasLongCovid)
    ) {
      if (dat === "county") {
        county.longCovid =
          county.longCovid === null || !county.longCovid
            ? longCovidResults.OverFourWeeks
            : county.longCovid + longCovidResults.OverFourWeeks;
        county.longCovidOverFourWeeks =
          county.longCovidOverFourWeeks === null ||
          !county.longCovidOverFourWeeks
            ? longCovidResults.OverFourWeeks
            : county.longCovidOverFourWeeks + longCovidResults.OverFourWeeks;
        county.longCovidOverTwelveWeeks =
          county.longCovidOverTwelveWeeks === null ||
          !county.longCovidOverTwelveWeeks
            ? longCovidResults.OverTwelveWeeks
            : county.longCovidOverTwelveWeeks +
              longCovidResults.OverTwelveWeeks;
      } else {
        state.longCovid =
          state.longCovid === null || !state.longCovid
            ? longCovidResults.OverFourWeeks
            : state.longCovid + longCovidResults.OverFourWeeks;
        state.longCovidOverFourWeeks =
          state.longCovidOverFourWeeks === null || !state.longCovidOverFourWeeks
            ? longCovidResults.OverFourWeeks
            : state.longCovidOverFourWeeks + longCovidResults.OverFourWeeks;
        state.longCovidOverTwelveWeeks =
          state.longCovidOverTwelveWeeks === null ||
          !state.longCovidOverTwelveWeeks
            ? longCovidResults.OverTwelveWeeks
            : state.longCovidOverTwelveWeeks + longCovidResults.OverTwelveWeeks;
      }

      addCustomToTallyBasedOnCondition(
        indexes,
        longCovid[symptomResults.hasLongCovid],
        true,
        1
      );
    }
  }
};

const updatePatientHealthSummary = (eventInput, county, state, indexes) => {
  let { patientHealthResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;
  let data;
  if (county) {
    data = {
      county: {
        patientHealthQuestionnaireSummary:
          county.patientHealthQuestionnaireSummary,
      },
      state: {
        patientHealthQuestionnaireSummary:
          state.patientHealthQuestionnaireSummary,
      },
    };
  } else {
    data = {
      state: {
        patientHealthQuestionnaireSummary:
          state.patientHealthQuestionnaireSummary,
      },
    };
  }

  if (patientHealthResults === null || !patientHealthResults) {
    return;
  }

  for (const dat in data) {
    let {
      littleInterestThings,
      downDepressedHopeless,
      sleepProblems,
      tiredNoEnergy,
      dietProblems,
      badAboutSelf,
      concentrationProblems,
      slowOrRestless,
      avgPHQScore,
    } = data[dat].patientHealthQuestionnaireSummary;

    let phq8AnswerValues = {
      "Not at all": 0,
      "Several days": 1,
      "More than half the days": 2,
      "Nearly every day": 3,
    };

    let totalScore = 0;
    for (const health in patientHealthResults.generalHealthResults) {
      let curr = patientHealthResults.generalHealthResults[health];
      totalScore += phq8AnswerValues[curr];

      if (
        checkNotNullAndStringType(curr) &&
        checkNotAtAllToNearlyEveryDay(curr)
      ) {
        let healthQuestion;
        switch (health) {
          case "littleInterestThings":
            healthQuestion = littleInterestThings;
            break;
          case "downDepressedHopeless":
            healthQuestion = downDepressedHopeless;
            break;
          case "sleepProblems":
            healthQuestion = sleepProblems;
            break;
          case "tiredNoEnergy":
            healthQuestion = tiredNoEnergy;
            break;
          case "dietProblems":
            healthQuestion = dietProblems;
            break;
          case "badAboutSelf":
            healthQuestion = badAboutSelf;
            break;
          case "concentrationProblems":
            healthQuestion = concentrationProblems;
            break;
          case "slowOrRestless":
            healthQuestion = slowOrRestless;
            break;
        }
        // console.log(healthQuestion[curr]);
        // console.log(generalHealthResults[healthQuestion]);

        addCustomToTallyBasedOnCondition(
          indexes,
          healthQuestion[curr],
          true,
          1
        );
      }
    }

    if (dat == "county") {
      if (totalScore > 10) {
        county.phq8AboveTen += 1;
      }
    } else {
      if (totalScore > 10) {
        state.phq8AboveTen += 1;
      }
    }

    if (checkNotNullNumberGreaterThanZero(patientHealthResults.totalScore)) {
      addAverage(indexes, avgPHQScore, patientHealthResults.totalScore);
    }
  }
};

const updateSocialSummary = (eventInput, county, state, indexes) => {
  let { socialDeterminantsResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;

  let data;
  if (county !== null) {
    data = {
      county: {
        socialSummary: county.socialSummary,
      },
      state: {
        socialSummary: state.socialSummary,
      },
    };
  } else {
    data = {
      state: {
        socialSummary: state.socialSummary,
      },
    };
  }

  if (socialDeterminantsResults === null || !socialDeterminantsResults) {
    return;
  }

  for (const dat in data) {
    let {
      hasMedicalInsurance,
      difficultCoveringExpenses,
      currentWorkSituation,
    } = data[dat].socialSummary;

    if (
      checkNotNullAndBoolType(socialDeterminantsResults.hasMedicalInsurance)
    ) {
      addCustomToTallyBasedOnCondition(
        indexes,
        hasMedicalInsurance[
          trueEqualsYes(socialDeterminantsResults.hasMedicalInsurance)
        ],
        true,
        1
      );
    }

    if (
      checkDifficultCoveringExpensesType(
        socialDeterminantsResults.difficultCoveringExpenses
      )
    ) {
      addCustomToTallyBasedOnCondition(
        indexes,
        difficultCoveringExpenses[
          socialDeterminantsResults.difficultCoveringExpenses
        ],
        true,
        1
      );
    }

    if (
      checkCurrentWorkSituationType(
        socialDeterminantsResults.currentWorkSituation
      )
    ) {
      addCustomToTallyBasedOnCondition(
        indexes,
        currentWorkSituation[socialDeterminantsResults.currentWorkSituation],
        true,
        1
      );
    }
  }
};
const incrementTotalFullEntries = (county, state) => {
  if (county !== null) county.totalFullEntries += 1;
  state.totalFullEntries += 1;
};

const aggregateSurveyResults = async (eventInput) => {
  eventInput.age = parseInt(eventInput.age);
  // await deleteAllMapData();
  let { county, state } = await getStateAndCountyInfo(eventInput);
  let { location } = eventInput;

  if (!county && location.county !== "") {
    variables.input.level = "county";
    variables.input.name = location.county;
    variables.input.stateAbbrev = location.stateAbbrev;
    variables.input.lat = location.countyLat;
    variables.input.long = location.countyLong;
    const endpoint = new URL(GRAPHQL_ENDPOINT);
    const signer = new SignatureV4({
      // credentials: defaultProvider(),
      credentials: credentials,
      region: AWS_REGION,
      service: "appsync",
      sha256: Sha256,
    });

    const requestToBeSigned = new HttpRequest({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        host: endpoint.host,
      },
      hostname: endpoint.host,
      body: JSON.stringify({ query, variables }),
      path: endpoint.pathname,
    });

    const signed = await signer.sign(requestToBeSigned);
    const request = new Request(endpoint, signed);
    let body;
    let response;

    try {
      console.log(`Creating MapData for ${location.county}... `);
      response = await fetch(request);
      body = await response.json();
      if (body.data.createMapData !== null) {
        county = body.data.createMapData;
      }
      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 500;
      body = {
        errors: [
          {
            message: error.message,
          },
        ],
      };
      console.log(`County create: ` + body);
    }
  }

  if (!state) {
    variables.input.level = "state";
    variables.input.name = location.state;
    variables.input.stateAbbrev = location.stateAbbrev;
    variables.input.lat = location.stateLat;
    variables.input.long = location.stateLong;

    const endpoint = new URL(GRAPHQL_ENDPOINT);
    const signer = new SignatureV4({
      // credentials: defaultProvider(),
      credentials: credentials,
      region: AWS_REGION,
      service: "appsync",
      sha256: Sha256,
    });

    const requestToBeSigned = new HttpRequest({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        host: endpoint.host,
      },
      hostname: endpoint.host,
      body: JSON.stringify({ query, variables }),
      path: endpoint.pathname,
    });

    const signed = await signer.sign(requestToBeSigned);
    const request = new Request(endpoint, signed);
    let body;
    let response;

    try {
      console.log(`Creating MapData for ${location.state}... `);
      response = await fetch(request);
      body = await response.json();
      if (body.data.createMapData !== null) {
        state = body.data.createMapData;
      }
      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 500;
      body = {
        errors: [
          {
            message: error.message,
          },
        ],
      };
      console.log(`State create: ` + body);
    }
  }

  if ((!county && eventInput.location.county !== "") || !state) {
    ({ county, state } = await getStateAndCountyInfo(eventInput));
  }

  let raceIndex = findMatchingIndex(
    eventInput.race,
    state.covidSummary.beenInfected.yes.race.ranges
  );
  let ageIndex = findHardCodedAgeRangeIndex(eventInput.age);
  let sexIndex = findMatchingIndex(
    eventInput.sex,
    state.covidSummary.beenInfected.yes.sex.ranges
  );

  let indexes = {
    raceIndex,
    ageIndex,
    sexIndex,
  };

  updateCovidSummary(eventInput, county, state, indexes);
  updateRecoverySummary(eventInput, county, state, indexes);
  updateVaccinationSummary(eventInput, county, state, indexes);
  updateGlobalHealthSummary(eventInput, county, state, indexes);
  updateSymptomSummary(eventInput, county, state, indexes);
  updateMedicalConditionsSummary(eventInput, county, state, indexes);
  updatePatientHealthSummary(eventInput, county, state, indexes);
  updateSocialSummary(eventInput, county, state, indexes);
  //increment at the last. updates require OLD count
  incrementTotalFullEntries(county, state);

  // //upload back to appsync, updated county/state
  await updateMapData(county, state);

  return { county, state };
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  let input = event.arguments.results;
  // let results = JSON.parse(input);
  // console.log("INPUT: ", input);
  const { county, state } = await aggregateSurveyResults(input);

  // console.log("County: ", county);
  // console.log("state: ", state);

  const statusCode = 200;
  const body = {
    message: `Successfully aggregated data for survey submission ${
      input.id ? input.id : "no id"
    }`,
  };

  return {
    statusCode,
    body: body,
  };
  // return null;
};
