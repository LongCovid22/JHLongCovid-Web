/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMapData = /* GraphQL */ `
  query GetMapData($level: String!, $lat: Float!, $long: Float!) {
    getMapData(level: $level, lat: $lat, long: $long) {
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
      recoverySummary {
        avglengthOfRecovery {
          race {
            ranges
          }
          sex {
            ranges
          }
          age {
            ranges
          }
        }
      }
      globalHealthSummary {
        avgpainLevel {
          race {
            ranges
          }
          sex {
            ranges
          }
          age {
            ranges
          }
        }
      }
      patientHealthQuestionnaireSummary {
        avgPHQScore {
          race {
            ranges
          }
          sex {
            ranges
          }
          age {
            ranges
          }
        }
      }
      totalFullEntries
      createdAt
      updatedAt
    }
  }
`;
export const listMapData = /* GraphQL */ `
  query ListMapData(
    $level: String
    $latLong: ModelMapDataPrimaryCompositeKeyConditionInput
    $filter: ModelMapDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMapData(
      level: $level
      latLong: $latLong
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
        phq8AboveTen
        recoveredCount
        longCovidOverFourWeeks
        longCovidOverTwelveWeeks
        topMedicalCondition
        totalFullEntries
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const mapDataByLevelNameState = /* GraphQL */ `
  query MapDataByLevelNameState(
    $level: String!
    $nameStateAbbrev: ModelMapDataByLevelAndNameAndStateCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMapDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mapDataByLevelNameState(
      level: $level
      nameStateAbbrev: $nameStateAbbrev
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
        phq8AboveTen
        recoveredCount
        longCovidOverFourWeeks
        longCovidOverTwelveWeeks
        topMedicalCondition
        totalFullEntries
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const mapDataByStateAbbrev = /* GraphQL */ `
  query MapDataByStateAbbrev(
    $level: String!
    $stateAbbrev: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMapDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mapDataByStateAbbrev(
      level: $level
      stateAbbrev: $stateAbbrev
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
        phq8AboveTen
        recoveredCount
        longCovidOverFourWeeks
        longCovidOverTwelveWeeks
        topMedicalCondition
        totalFullEntries
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      age
      race
      sex
      height
      weight
      lastSubmission
      lastSignIn
      notificationFreq
      notificaitonMethod
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
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
        lastSubmission
        lastSignIn
        notificationFreq
        notificaitonMethod
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
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
        lastSubmission
        lastSignIn
        notificationFreq
        notificaitonMethod
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSurveyEntry = /* GraphQL */ `
  query GetSurveyEntry($id: ID!) {
    getSurveyEntry(id: $id) {
      id
      email
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
          email
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      socialDeterminantsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          email
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
      }
      recoveryEntry {
        id
        state
        countyState
        surveyEntry {
          id
          email
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      PatientHealthEntry {
        id
        state
        countyState
        surveyEntry {
          id
          email
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
      }
      symptomsEntry {
        id
        state
        countyState
        surveyEntry {
          id
          email
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
      }
      monthlyEntry {
        id
        state
        countyState
        surveyEntry {
          id
          email
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
    }
  }
`;
export const listSurveyEntries = /* GraphQL */ `
  query ListSurveyEntries(
    $filter: ModelSurveyEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveyEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
      }
      nextToken
    }
  }
`;
export const surveysByEmail = /* GraphQL */ `
  query SurveysByEmail(
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
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
      }
      nextToken
    }
  }
`;
export const surveysByType = /* GraphQL */ `
  query SurveysByType(
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
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
      }
      nextToken
    }
  }
`;
export const getVaccinationEntry = /* GraphQL */ `
  query GetVaccinationEntry($id: ID!) {
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
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
      }
      totalVaccineShots
      vaccinated
      vaccineType
      dateOfLastVaccine
      createdAt
      updatedAt
      vaccinationEntrySurveyEntryId
    }
  }
`;
export const listVaccinationEntries = /* GraphQL */ `
  query ListVaccinationEntries(
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const stateVaccEntryByDate = /* GraphQL */ `
  query StateVaccEntryByDate(
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const stateVaccEntryByAge = /* GraphQL */ `
  query StateVaccEntryByAge(
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const stateVaccEntryByRace = /* GraphQL */ `
  query StateVaccEntryByRace(
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const stateVaccEntryBySex = /* GraphQL */ `
  query StateVaccEntryBySex(
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const countyVaccEntryByDate = /* GraphQL */ `
  query CountyVaccEntryByDate(
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const countyVaccEntryByAge = /* GraphQL */ `
  query CountyVaccEntryByAge(
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const countyVaccEntryByRace = /* GraphQL */ `
  query CountyVaccEntryByRace(
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const countyVaccEntryBySex = /* GraphQL */ `
  query CountyVaccEntryBySex(
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
          email
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
        }
        totalVaccineShots
        vaccinated
        vaccineType
        dateOfLastVaccine
        createdAt
        updatedAt
        vaccinationEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const getGlobalHealthEntry = /* GraphQL */ `
  query GetGlobalHealthEntry($id: ID!) {
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
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
      }
      healthRank
      physicalHealthRank
      carryPhysicalActivities
      fatigueRank
      painLevel
      createdAt
      updatedAt
      globalHealthEntrySurveyEntryId
    }
  }
`;
export const listGlobalHealthEntries = /* GraphQL */ `
  query ListGlobalHealthEntries(
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const stateGHEntryByDate = /* GraphQL */ `
  query StateGHEntryByDate(
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const stateGHEntryByAge = /* GraphQL */ `
  query StateGHEntryByAge(
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const stateGHEntryByRace = /* GraphQL */ `
  query StateGHEntryByRace(
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const stateGHEntryBySex = /* GraphQL */ `
  query StateGHEntryBySex(
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const countyGHEntryByDate = /* GraphQL */ `
  query CountyGHEntryByDate(
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const countyGHEntryByAge = /* GraphQL */ `
  query CountyGHEntryByAge(
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const countyGHEntryByRace = /* GraphQL */ `
  query CountyGHEntryByRace(
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const countyGHEntryBySex = /* GraphQL */ `
  query CountyGHEntryBySex(
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
          email
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
        }
        healthRank
        physicalHealthRank
        carryPhysicalActivities
        fatigueRank
        painLevel
        createdAt
        updatedAt
        globalHealthEntrySurveyEntryId
      }
      nextToken
    }
  }
`;
export const getCovidEntry = /* GraphQL */ `
  query GetCovidEntry($id: ID!) {
    getCovidEntry(id: $id) {
      id
      state
      countyState
      surveyEntry {
        id
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
    }
  }
`;
export const listCovidEntries = /* GraphQL */ `
  query ListCovidEntries(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateCovidEntryByDate = /* GraphQL */ `
  query StateCovidEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateCovidEntryByAge = /* GraphQL */ `
  query StateCovidEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateCovidEntryByRace = /* GraphQL */ `
  query StateCovidEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateCovidEntryBySex = /* GraphQL */ `
  query StateCovidEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyCovidEntryByDate = /* GraphQL */ `
  query CountyCovidEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyCovidEntryByAge = /* GraphQL */ `
  query CountyCovidEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyCovidEntryByRace = /* GraphQL */ `
  query CountyCovidEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyCovidEntryBySex = /* GraphQL */ `
  query CountyCovidEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const getRecoveryEntry = /* GraphQL */ `
  query GetRecoveryEntry($id: ID!) {
    getRecoveryEntry(id: $id) {
      id
      state
      countyState
      surveyEntry {
        id
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
    }
  }
`;
export const listRecoveryEntries = /* GraphQL */ `
  query ListRecoveryEntries(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateRecovEntryByDate = /* GraphQL */ `
  query StateRecovEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateRecovEntryByAge = /* GraphQL */ `
  query StateRecovEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateRecovEntryByRace = /* GraphQL */ `
  query StateRecovEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateRecovEntryBySex = /* GraphQL */ `
  query StateRecovEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyRecovEntryByDate = /* GraphQL */ `
  query CountyRecovEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyRecovEntryByAge = /* GraphQL */ `
  query CountyRecovEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyRecovEntryByRace = /* GraphQL */ `
  query CountyRecovEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyRecovEntryBySex = /* GraphQL */ `
  query CountyRecovEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const getPatientHealthEntry = /* GraphQL */ `
  query GetPatientHealthEntry($id: ID!) {
    getPatientHealthEntry(id: $id) {
      id
      state
      countyState
      surveyEntry {
        id
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
    }
  }
`;
export const listPatientHealthEntries = /* GraphQL */ `
  query ListPatientHealthEntries(
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
          email
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
      }
      nextToken
    }
  }
`;
export const statePatientHealthEntryByDate = /* GraphQL */ `
  query StatePatientHealthEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const statePatientHealthEntryByAge = /* GraphQL */ `
  query StatePatientHealthEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const statePatientHealthEntryByRace = /* GraphQL */ `
  query StatePatientHealthEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const statePatientHealthEntryBySex = /* GraphQL */ `
  query StatePatientHealthEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyPatientHealthEntryByDate = /* GraphQL */ `
  query CountyPatientHealthEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyPatientHealthEntryByAge = /* GraphQL */ `
  query CountyPatientHealthEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyPatientHealthEntryByRace = /* GraphQL */ `
  query CountyPatientHealthEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyPatientHealthEntryBySex = /* GraphQL */ `
  query CountyPatientHealthEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const getSymptomEntry = /* GraphQL */ `
  query GetSymptomEntry($id: ID!) {
    getSymptomEntry(id: $id) {
      id
      state
      countyState
      surveyEntry {
        id
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
    }
  }
`;
export const listSymptomEntries = /* GraphQL */ `
  query ListSymptomEntries(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateSymptomEntryByDate = /* GraphQL */ `
  query StateSymptomEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateSymptomEntryByAge = /* GraphQL */ `
  query StateSymptomEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateSymptomEntryByRace = /* GraphQL */ `
  query StateSymptomEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateSymptomEntryBySex = /* GraphQL */ `
  query StateSymptomEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countySymptomEntryByDate = /* GraphQL */ `
  query CountySymptomEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countySymptomEntryByAge = /* GraphQL */ `
  query CountySymptomEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countySymptomEntryByRace = /* GraphQL */ `
  query CountySymptomEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countySymptomEntryBySex = /* GraphQL */ `
  query CountySymptomEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const getSocialDeterminantsEntry = /* GraphQL */ `
  query GetSocialDeterminantsEntry($id: ID!) {
    getSocialDeterminantsEntry(id: $id) {
      id
      state
      countyState
      surveyEntry {
        id
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
    }
  }
`;
export const listSocialDeterminantsEntries = /* GraphQL */ `
  query ListSocialDeterminantsEntries(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateSocialDetEntryByDate = /* GraphQL */ `
  query StateSocialDetEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateSocialDetEntryByAge = /* GraphQL */ `
  query StateSocialDetEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateSocialDetEntryByRace = /* GraphQL */ `
  query StateSocialDetEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateSocialDetEntryBySex = /* GraphQL */ `
  query StateSocialDetEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countySocialDetEntryByDate = /* GraphQL */ `
  query CountySocialDetEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countySocialDetEntryByAge = /* GraphQL */ `
  query CountySocialDetEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countySocialDetEntryByRace = /* GraphQL */ `
  query CountySocialDetEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countySocialDetEntryBySex = /* GraphQL */ `
  query CountySocialDetEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const getMonthlyEntry = /* GraphQL */ `
  query GetMonthlyEntry($id: ID!) {
    getMonthlyEntry(id: $id) {
      id
      state
      countyState
      surveyEntry {
        id
        email
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          totalVaccineShots
          vaccinated
          vaccineType
          dateOfLastVaccine
          createdAt
          updatedAt
          vaccinationEntrySurveyEntryId
        }
        socialDeterminantsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        recoveryEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
          }
          healthRank
          physicalHealthRank
          carryPhysicalActivities
          fatigueRank
          painLevel
          createdAt
          updatedAt
          globalHealthEntrySurveyEntryId
        }
        PatientHealthEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        symptomsEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
        }
        monthlyEntry {
          id
          state
          countyState
          surveyEntry {
            id
            email
            createdAt
            surveyVersion
            surveyType
            age
            race
            sex
            height
            weight
            updatedAt
            surveyEntryCovidEntryId
            surveyEntryVaccinationEntryId
            surveyEntrySocialDeterminantsEntryId
            surveyEntryRecoveryEntryId
            surveyEntryGlobalHealthEntryId
            surveyEntryPatientHealthEntryId
            surveyEntrySymptomsEntryId
            surveyEntryMonthlyEntryId
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
    }
  }
`;
export const listMonthlyEntries = /* GraphQL */ `
  query ListMonthlyEntries(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateMonthlyEntryByDate = /* GraphQL */ `
  query StateMonthlyEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateMonthlyEntryByAge = /* GraphQL */ `
  query StateMonthlyEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateMonthlyEntryByRace = /* GraphQL */ `
  query StateMonthlyEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const stateMonthlyEntryBySex = /* GraphQL */ `
  query StateMonthlyEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyMonthlyEntryByDate = /* GraphQL */ `
  query CountyMonthlyEntryByDate(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyMonthlyEntryByAge = /* GraphQL */ `
  query CountyMonthlyEntryByAge(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyMonthlyEntryByRace = /* GraphQL */ `
  query CountyMonthlyEntryByRace(
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
          email
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
      }
      nextToken
    }
  }
`;
export const countyMonthlyEntryBySex = /* GraphQL */ `
  query CountyMonthlyEntryBySex(
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
          email
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
      }
      nextToken
    }
  }
`;
