const { SurveyDemographics, YesNo, OneToThreePlus,
  OneToFivePlus, YesNoDontKnow, NotAtAllToVeryMuch, 
  MedicationsAvailable, VaccineTypes, ExcellentToPoor,
  CompletelyToNotAtAll, NoneToVerySevere, SymptomsAvailable, 
  NeverToAlways, NotAtAllToNearlyEveryDay, SummaryAvgByDemo,
  DiagnosisTypes, DifficultExpenses, WorkingSituation
   } = require("./query_type_strings");

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
        beenInfected ${YesNo}
        timesPositive ${OneToThreePlus}
        tested ${YesNo}
        positiveTest ${YesNoDontKnow}
        symptomatic ${YesNo}
        symptomsPreventScale ${NotAtAllToVeryMuch}
      }
      recoverySummary {
        hospitalized ${YesNo}
        timesHospitalized ${OneToThreePlus}
        medicationsPrescribed ${YesNoDontKnow}
        medicationsTakenCount ${MedicationsAvailable}
        recovered ${YesNo}
        avglengthOfRecovery ${SummaryAvgByDemo}
      }
      vaccinationSummary {
        vaccinated ${YesNoDontKnow}
        totalVaccineShots ${OneToFivePlus}
        vaccineType ${VaccineTypes}
      }
      globalHealthSummary {
        healthRank ${ExcellentToPoor}
        physicalHealthRank ${ExcellentToPoor}
        carryPhysicalActivities ${CompletelyToNotAtAll}
        fatigueRank ${NoneToVerySevere}
        avgpainLevel ${SummaryAvgByDemo}
      }
      symptomSummary {
        symptomCounts ${SymptomsAvailable}
        qualityOfLife ${ExcellentToPoor}
        mentalHealthRank ${ExcellentToPoor}
        socialSatisfactionRank ${ExcellentToPoor}
        carryOutSocialActivitiesRank ${ExcellentToPoor}
        anxietyInPastWeekRank ${NeverToAlways}
      }
      patientHealthQuestionnaireSummary {
        littleInterestThings ${NotAtAllToNearlyEveryDay}
        downDepressedHopeless ${NotAtAllToNearlyEveryDay}
        sleepProblems ${NotAtAllToNearlyEveryDay}
        tiredNoEnergy ${NotAtAllToNearlyEveryDay}
        dietProblems ${NotAtAllToNearlyEveryDay}
        badAboutSelf ${NotAtAllToNearlyEveryDay}
        concentrationProblems ${NotAtAllToNearlyEveryDay}
        slowOrRestless ${NotAtAllToNearlyEveryDay}
        avgPHQScore ${SummaryAvgByDemo}
      }
      medicalConditionsSummary {
        longCovid ${YesNoDontKnow}
        newDiagnosisCounts ${DiagnosisTypes}
      }
      socialSummary {
        hasMedicalInsurance ${YesNo}
        difficultCoveringExpenses ${DifficultExpenses}
        currentWorkSituation ${WorkingSituation}
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

module.exports = { properties, updateQuery, query, deleteQuery };
