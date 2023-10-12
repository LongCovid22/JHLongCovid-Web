let properties = `
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

module.exports = { properties, updateQuery, query, deleteQuery}