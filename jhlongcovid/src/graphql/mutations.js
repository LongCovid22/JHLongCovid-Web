/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const aggregateSurveyResults = /* GraphQL */ `
  mutation AggregateSurveyResults($results: SurveyResults!) {
    aggregateSurveyResults(results: $results) {
      statusCode
      body
    }
  }
`;
export const createMapData = /* GraphQL */ `
  mutation CreateMapData(
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
      covidSummary {
        covidCount
        percentHospitalizedDueToCovid
        avgPositiveCasesPerPerson
        percentSymptomatic
        percentTookMedication
        medicationCounts
        percentRecovered
      }
      symptomSummary {
        mostCommonSymptom
        symptomCounts
      }
      vaccinationSummary {
        percentVaccinated
        avgNumOfVaccPerPerson
        pfizerCount
        modernaCount
        jjCount
        azCount
      }
      generealHealthSummary {
        avgTotalScore
        avgHealthCounts
      }
      recoverySummary {
        longCovidCount
        percentLongCovid
        avgRecoveryLength
      }
      socialSummary {
        percentHaveMedicalInsurance
        percentDifficultyCoveringExpenses
        averageWorkingSituation
        workingSituationCounts
      }
      totalFullEntries
      createdAt
      updatedAt
    }
  }
`;
export const updateMapData = /* GraphQL */ `
  mutation UpdateMapData(
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
      covidSummary {
        covidCount
        percentHospitalizedDueToCovid
        avgPositiveCasesPerPerson
        percentSymptomatic
        percentTookMedication
        medicationCounts
        percentRecovered
      }
      symptomSummary {
        mostCommonSymptom
        symptomCounts
      }
      vaccinationSummary {
        percentVaccinated
        avgNumOfVaccPerPerson
        pfizerCount
        modernaCount
        jjCount
        azCount
      }
      generealHealthSummary {
        avgTotalScore
        avgHealthCounts
      }
      recoverySummary {
        longCovidCount
        percentLongCovid
        avgRecoveryLength
      }
      socialSummary {
        percentHaveMedicalInsurance
        percentDifficultyCoveringExpenses
        averageWorkingSituation
        workingSituationCounts
      }
      totalFullEntries
      createdAt
      updatedAt
    }
  }
`;
export const deleteMapData = /* GraphQL */ `
  mutation DeleteMapData(
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
      covidSummary {
        covidCount
        percentHospitalizedDueToCovid
        avgPositiveCasesPerPerson
        percentSymptomatic
        percentTookMedication
        medicationCounts
        percentRecovered
      }
      symptomSummary {
        mostCommonSymptom
        symptomCounts
      }
      vaccinationSummary {
        percentVaccinated
        avgNumOfVaccPerPerson
        pfizerCount
        modernaCount
        jjCount
        azCount
      }
      generealHealthSummary {
        avgTotalScore
        avgHealthCounts
      }
      recoverySummary {
        longCovidCount
        percentLongCovid
        avgRecoveryLength
      }
      socialSummary {
        percentHaveMedicalInsurance
        percentDifficultyCoveringExpenses
        averageWorkingSituation
        workingSituationCounts
      }
      totalFullEntries
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      age
      race
      sex
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      age
      race
      sex
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      age
      race
      sex
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
export const createSurveyEntry = /* GraphQL */ `
  mutation CreateSurveyEntry(
    $input: CreateSurveyEntryInput!
    $condition: ModelSurveyEntryConditionInput
  ) {
    createSurveyEntry(input: $input, condition: $condition) {
      id
      email
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      timeElapsed
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        timesPositive
        lastPositive
        tested
        testMethod
        hospitalized
        symptomatic
        symptomsPreventScale
        medicationsTaken
        returnedToHealth
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
        surveyEntry {
          id
          email
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        recovered
        lengthOfRecovery {
          months
          days
        }
        hasLongCovid
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
      }
      generalHealthEntry {
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        health
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        generalHealthEntrySurveyEntryId
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        createdAt
        symptoms
        medicalConditions
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
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
      surveyEntryGeneralHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
    }
  }
`;
export const updateSurveyEntry = /* GraphQL */ `
  mutation UpdateSurveyEntry(
    $input: UpdateSurveyEntryInput!
    $condition: ModelSurveyEntryConditionInput
  ) {
    updateSurveyEntry(input: $input, condition: $condition) {
      id
      email
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      timeElapsed
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        timesPositive
        lastPositive
        tested
        testMethod
        hospitalized
        symptomatic
        symptomsPreventScale
        medicationsTaken
        returnedToHealth
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
        surveyEntry {
          id
          email
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        recovered
        lengthOfRecovery {
          months
          days
        }
        hasLongCovid
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
      }
      generalHealthEntry {
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        health
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        generalHealthEntrySurveyEntryId
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        createdAt
        symptoms
        medicalConditions
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
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
      surveyEntryGeneralHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
    }
  }
`;
export const deleteSurveyEntry = /* GraphQL */ `
  mutation DeleteSurveyEntry(
    $input: DeleteSurveyEntryInput!
    $condition: ModelSurveyEntryConditionInput
  ) {
    deleteSurveyEntry(input: $input, condition: $condition) {
      id
      email
      createdAt
      surveyVersion
      surveyType
      age
      race
      sex
      timeElapsed
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        timesPositive
        lastPositive
        tested
        testMethod
        hospitalized
        symptomatic
        symptomsPreventScale
        medicationsTaken
        returnedToHealth
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
        surveyEntry {
          id
          email
          createdAt
          surveyVersion
          surveyType
          age
          race
          sex
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        recovered
        lengthOfRecovery {
          months
          days
        }
        hasLongCovid
        createdAt
        updatedAt
        recoveryEntrySurveyEntryId
      }
      generalHealthEntry {
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        health
        generalHealthResults
        totalScore
        createdAt
        updatedAt
        generalHealthEntrySurveyEntryId
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
        createdAt
        symptoms
        medicalConditions
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
          timeElapsed
          updatedAt
          surveyEntryCovidEntryId
          surveyEntryVaccinationEntryId
          surveyEntrySocialDeterminantsEntryId
          surveyEntryRecoveryEntryId
          surveyEntryGeneralHealthEntryId
          surveyEntrySymptomsEntryId
          surveyEntryMonthlyEntryId
        }
        age
        race
        sex
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
      surveyEntryGeneralHealthEntryId
      surveyEntrySymptomsEntryId
      surveyEntryMonthlyEntryId
    }
  }
`;
export const createVaccinationEntry = /* GraphQL */ `
  mutation CreateVaccinationEntry(
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
      surveyEntry {
        id
        email
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
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
export const updateVaccinationEntry = /* GraphQL */ `
  mutation UpdateVaccinationEntry(
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
      surveyEntry {
        id
        email
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
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
export const deleteVaccinationEntry = /* GraphQL */ `
  mutation DeleteVaccinationEntry(
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
      surveyEntry {
        id
        email
        createdAt
        surveyVersion
        surveyType
        age
        race
        sex
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
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
export const createCovidEntry = /* GraphQL */ `
  mutation CreateCovidEntry(
    $input: CreateCovidEntryInput!
    $condition: ModelCovidEntryConditionInput
  ) {
    createCovidEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      timesPositive
      lastPositive
      tested
      testMethod
      hospitalized
      symptomatic
      symptomsPreventScale
      medicationsTaken
      returnedToHealth
      createdAt
      updatedAt
      covidEntrySurveyEntryId
    }
  }
`;
export const updateCovidEntry = /* GraphQL */ `
  mutation UpdateCovidEntry(
    $input: UpdateCovidEntryInput!
    $condition: ModelCovidEntryConditionInput
  ) {
    updateCovidEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      timesPositive
      lastPositive
      tested
      testMethod
      hospitalized
      symptomatic
      symptomsPreventScale
      medicationsTaken
      returnedToHealth
      createdAt
      updatedAt
      covidEntrySurveyEntryId
    }
  }
`;
export const deleteCovidEntry = /* GraphQL */ `
  mutation DeleteCovidEntry(
    $input: DeleteCovidEntryInput!
    $condition: ModelCovidEntryConditionInput
  ) {
    deleteCovidEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      timesPositive
      lastPositive
      tested
      testMethod
      hospitalized
      symptomatic
      symptomsPreventScale
      medicationsTaken
      returnedToHealth
      createdAt
      updatedAt
      covidEntrySurveyEntryId
    }
  }
`;
export const createRecoveryEntry = /* GraphQL */ `
  mutation CreateRecoveryEntry(
    $input: CreateRecoveryEntryInput!
    $condition: ModelRecoveryEntryConditionInput
  ) {
    createRecoveryEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      recovered
      lengthOfRecovery {
        months
        days
      }
      hasLongCovid
      createdAt
      updatedAt
      recoveryEntrySurveyEntryId
    }
  }
`;
export const updateRecoveryEntry = /* GraphQL */ `
  mutation UpdateRecoveryEntry(
    $input: UpdateRecoveryEntryInput!
    $condition: ModelRecoveryEntryConditionInput
  ) {
    updateRecoveryEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      recovered
      lengthOfRecovery {
        months
        days
      }
      hasLongCovid
      createdAt
      updatedAt
      recoveryEntrySurveyEntryId
    }
  }
`;
export const deleteRecoveryEntry = /* GraphQL */ `
  mutation DeleteRecoveryEntry(
    $input: DeleteRecoveryEntryInput!
    $condition: ModelRecoveryEntryConditionInput
  ) {
    deleteRecoveryEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      recovered
      lengthOfRecovery {
        months
        days
      }
      hasLongCovid
      createdAt
      updatedAt
      recoveryEntrySurveyEntryId
    }
  }
`;
export const createGeneralHealthEntry = /* GraphQL */ `
  mutation CreateGeneralHealthEntry(
    $input: CreateGeneralHealthEntryInput!
    $condition: ModelGeneralHealthEntryConditionInput
  ) {
    createGeneralHealthEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      health
      generalHealthResults
      totalScore
      createdAt
      updatedAt
      generalHealthEntrySurveyEntryId
    }
  }
`;
export const updateGeneralHealthEntry = /* GraphQL */ `
  mutation UpdateGeneralHealthEntry(
    $input: UpdateGeneralHealthEntryInput!
    $condition: ModelGeneralHealthEntryConditionInput
  ) {
    updateGeneralHealthEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      health
      generalHealthResults
      totalScore
      createdAt
      updatedAt
      generalHealthEntrySurveyEntryId
    }
  }
`;
export const deleteGeneralHealthEntry = /* GraphQL */ `
  mutation DeleteGeneralHealthEntry(
    $input: DeleteGeneralHealthEntryInput!
    $condition: ModelGeneralHealthEntryConditionInput
  ) {
    deleteGeneralHealthEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      health
      generalHealthResults
      totalScore
      createdAt
      updatedAt
      generalHealthEntrySurveyEntryId
    }
  }
`;
export const createSymptomEntry = /* GraphQL */ `
  mutation CreateSymptomEntry(
    $input: CreateSymptomEntryInput!
    $condition: ModelSymptomEntryConditionInput
  ) {
    createSymptomEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      createdAt
      symptoms
      medicalConditions
      updatedAt
      symptomEntrySurveyEntryId
    }
  }
`;
export const updateSymptomEntry = /* GraphQL */ `
  mutation UpdateSymptomEntry(
    $input: UpdateSymptomEntryInput!
    $condition: ModelSymptomEntryConditionInput
  ) {
    updateSymptomEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      createdAt
      symptoms
      medicalConditions
      updatedAt
      symptomEntrySurveyEntryId
    }
  }
`;
export const deleteSymptomEntry = /* GraphQL */ `
  mutation DeleteSymptomEntry(
    $input: DeleteSymptomEntryInput!
    $condition: ModelSymptomEntryConditionInput
  ) {
    deleteSymptomEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      createdAt
      symptoms
      medicalConditions
      updatedAt
      symptomEntrySurveyEntryId
    }
  }
`;
export const createSocialDeterminantsEntry = /* GraphQL */ `
  mutation CreateSocialDeterminantsEntry(
    $input: CreateSocialDeterminantsEntryInput!
    $condition: ModelSocialDeterminantsEntryConditionInput
  ) {
    createSocialDeterminantsEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      hasMedicalInsurance
      difficultCoveringExpenses
      currentWorkSituation
      createdAt
      updatedAt
      socialDeterminantsEntrySurveyEntryId
    }
  }
`;
export const updateSocialDeterminantsEntry = /* GraphQL */ `
  mutation UpdateSocialDeterminantsEntry(
    $input: UpdateSocialDeterminantsEntryInput!
    $condition: ModelSocialDeterminantsEntryConditionInput
  ) {
    updateSocialDeterminantsEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      hasMedicalInsurance
      difficultCoveringExpenses
      currentWorkSituation
      createdAt
      updatedAt
      socialDeterminantsEntrySurveyEntryId
    }
  }
`;
export const deleteSocialDeterminantsEntry = /* GraphQL */ `
  mutation DeleteSocialDeterminantsEntry(
    $input: DeleteSocialDeterminantsEntryInput!
    $condition: ModelSocialDeterminantsEntryConditionInput
  ) {
    deleteSocialDeterminantsEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      hasMedicalInsurance
      difficultCoveringExpenses
      currentWorkSituation
      createdAt
      updatedAt
      socialDeterminantsEntrySurveyEntryId
    }
  }
`;
export const createMonthlyEntry = /* GraphQL */ `
  mutation CreateMonthlyEntry(
    $input: CreateMonthlyEntryInput!
    $condition: ModelMonthlyEntryConditionInput
  ) {
    createMonthlyEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      results
      createdAt
      updatedAt
      monthlyEntrySurveyEntryId
    }
  }
`;
export const updateMonthlyEntry = /* GraphQL */ `
  mutation UpdateMonthlyEntry(
    $input: UpdateMonthlyEntryInput!
    $condition: ModelMonthlyEntryConditionInput
  ) {
    updateMonthlyEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      results
      createdAt
      updatedAt
      monthlyEntrySurveyEntryId
    }
  }
`;
export const deleteMonthlyEntry = /* GraphQL */ `
  mutation DeleteMonthlyEntry(
    $input: DeleteMonthlyEntryInput!
    $condition: ModelMonthlyEntryConditionInput
  ) {
    deleteMonthlyEntry(input: $input, condition: $condition) {
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
        timeElapsed
        covidEntry {
          id
          state
          countyState
          age
          race
          sex
          timesPositive
          lastPositive
          tested
          testMethod
          hospitalized
          symptomatic
          symptomsPreventScale
          medicationsTaken
          returnedToHealth
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
          recovered
          hasLongCovid
          createdAt
          updatedAt
          recoveryEntrySurveyEntryId
        }
        generalHealthEntry {
          id
          state
          countyState
          age
          race
          sex
          health
          generalHealthResults
          totalScore
          createdAt
          updatedAt
          generalHealthEntrySurveyEntryId
        }
        symptomsEntry {
          id
          state
          countyState
          age
          race
          sex
          createdAt
          symptoms
          medicalConditions
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
        surveyEntryGeneralHealthEntryId
        surveyEntrySymptomsEntryId
        surveyEntryMonthlyEntryId
      }
      age
      race
      sex
      results
      createdAt
      updatedAt
      monthlyEntrySurveyEntryId
    }
  }
`;
