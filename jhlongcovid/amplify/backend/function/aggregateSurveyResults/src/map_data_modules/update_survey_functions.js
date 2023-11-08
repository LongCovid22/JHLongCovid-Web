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
  //add to total in summaryAvgByDemo type
  property.total += 1;
};

const updateCovidCount = (region, result) => {
  if (checkNotNullAndBoolType(result)) {
    region.covidCount += result ? 1 : 0;
  }
};

const pushPropToObjectsToUpdate = (result, property, objectsToUpdate) => {
  if (checkNotNullAndBoolType(result)) {
    const prop = trueEqualsYes(result);
    objectsToUpdate.push(property[prop]);
  }
};

const pushPropToObjectsConditional = (
  conditionCheckFunc,
  result,
  property,
  objectsToUpdate
) => {
  if (conditionCheckFunc(result)) {
    objectsToUpdate.push(property[result]);
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
const incrementTotalFullEntries = (county, state) => {
  county.totalFullEntries += 1;
  state.totalFullEntries += 1;
};

const updateCovidCountSummaryTabStats = (eventInput, county, state, indexes) => {
  let record = {
    county,
    state,
  };

  const {
    SelfReportedLongCovid,
    OverFourWeeks,
    OverTwelveWeeks,
    SelfReportedLongCovidWithCovid,
    SelfReportedLongCovidWithoutCovid,
    LongCovid,
    hasCovid,
  } = hasLongCovid(
    eventInput.symptomResults,
    eventInput.covidResults,
    eventInput.recoveryResults
  );

  // console.log("LC Results : " + JSON.stringify(hasLongCovid(
  //   eventInput.symptomResults,
  //   eventInput.covidResults,
  //   eventInput.recoveryResults)));

  //high level stats
  for (const regionKey in record) {
    let region = record[regionKey];
    region.covidCount += hasCovid === 1 ? 1 : 0;
    region.longCovidOverFourWeeks += OverFourWeeks === 1 ? 1 : 0;
    region.longCovidOverTwelveWeeks += OverTwelveWeeks === 1 ? 1 : 0;
    region.selfReportedPlusCovidLongCovid +=
      SelfReportedLongCovidWithCovid === 1 ? 1 : 0;
    region.selfReportedLongCovid += SelfReportedLongCovid === 1 ? 1 : 0;
    region.longCovid += LongCovid === 1 ? 1 : 0;
  }

  //phq8AboveTen
  //recoveredCount
  //topMedicalCondition

}
//also will update everything related to the high level stats
const updateCovidSummary = (eventInput, county, state, indexes) => {
  let record = {
    county,
    state,
  };

  let { covidResults: new_survey_input_ } = eventInput;
  
  let data = {
    county: {
      covidSummary: county.covidSummary,
    },
    state: {
      covidSummary: state.covidSummary,
    },
  };

  

  //nested stats
  for (const dat in data) {
    if (data[dat].covidSummary) {
      //actual things in schema that need to be changed
      let {
        beenInfected,
        symptomatic,
        timesPositive,
        tested,
        positiveTest,
        symptomsPreventScale,
      } = data[dat].covidSummary;

      if (new_survey_input_ !== null) {
        if (checkNotNullAndBoolType(new_survey_input_.beenInfected)) {
          let prop = trueEqualsYes(new_survey_input_.beenInfected);
          addCustomToTallyBasedOnCondition(
            indexes,
            beenInfected[prop],
            true,
            1
          );
        }

        if (
          checkNotNullNumberGreaterThanZero(new_survey_input_.timesPositive)
        ) {
          let prop = resolveOneToThreePlus(new_survey_input_.timesPositive);
          addCustomToTallyBasedOnCondition(
            indexes,
            timesPositive[prop],
            true,
            1
          );
        }

        if (checkNotNullAndBoolType(new_survey_input_.tested)) {
          let prop = trueEqualsYes(new_survey_input_.tested);
          addCustomToTallyBasedOnCondition(indexes, tested[prop], true, 1);
        }

        if (
          checkNotNullAndStringType(new_survey_input_.positiveTest) &&
          checkYesNoDoNotKnowType(new_survey_input_.positiveTest)
        ) {
          addCustomToTallyBasedOnCondition(
            indexes,
            positiveTest[new_survey_input_.positiveTest],
            true,
            1
          );
        }

        if (checkNotNullAndBoolType(new_survey_input_.symptomatic)) {
          let prop = trueEqualsYes(new_survey_input_.symptomatic);
          addCustomToTallyBasedOnCondition(indexes, symptomatic[prop], true, 1);
        }

        if (
          checkNotNullAndStringType(new_survey_input_.symptomsPreventScale) &&
          checkNotAtAllToVeryMuchType(new_survey_input_.symptomsPreventScale)
        ) {
          addCustomToTallyBasedOnCondition(
            indexes,
            symptomsPreventScale[new_survey_input_.symptomsPreventScale],
            true,
            1
          );
        }
      }
    }
  }
};

const updateRecoverySummary = (eventInput, county, state, indexes) => {
  let {
    recoveryResults: new_survey_recovery_input_,
    covidResults: new_survey_covid_input_,
  } = eventInput;
  let data = {
    county: {
      recoverySummary: county.recoverySummary,
    },
    state: {
      recoverySummary: state.recoverySummary,
    },
  };

  if (!new_survey_recovery_input_ || !new_survey_covid_input_) {
    // throw new Error(
    //   "recoveryResults or covidResults missing in eventInput object!"
    // );
    return;
  }

  //high level stats
  if (checkNotNullAndBoolType(new_survey_recovery_input_.recovered) && new_survey_recovery_input_.recovered) {
    if (typeof county.recoveredCount === "number") {
      county.recoveredCount += 1;
    }
    if (typeof state.recoveredCount === "number") {
      state.recoveredCount += 1;
    }
  }

  for (const dat in data) {
    if (data[dat].recoverySummary) {
      let {
        hospitalized,
        timesHospitalized,
        medicationsPrescribed,
        medicationsTakenCount,
        recovered,
        avglengthOfRecovery,
      } = data[dat].recoverySummary;

      if (checkNotNullAndBoolType(new_survey_covid_input_.hospitalized)) {
        let prop = trueEqualsYes(new_survey_covid_input_.hospitalized);
        addCustomToTallyBasedOnCondition(indexes, hospitalized[prop], true, 1);
      }

      if (
        checkNotNullNumberGreaterThanZero(
          new_survey_covid_input_.timesHospitalized
        )
      ) {
        let prop = resolveOneToThreePlus(
          new_survey_covid_input_.timesHospitalized
        );
        addCustomToTallyBasedOnCondition(
          indexes,
          timesHospitalized[prop],
          true,
          1
        );
      }

      if (
        checkNotNullAndStringType(
          new_survey_covid_input_.medicationsPrescribed
        ) &&
        checkYesNoDoNotKnowType(new_survey_covid_input_.medicationsPrescribed)
      ) {
        addCustomToTallyBasedOnCondition(
          indexes,
          medicationsPrescribed[new_survey_covid_input_.medicationsPrescribed],
          true,
          1
        );
      }

      if (
        new_survey_covid_input_.medicationsTaken &&
        new_survey_covid_input_.medicationsTaken !== null &&
        Array.isArray(new_survey_covid_input_.medicationsTaken) &&
        checkMedicationsTakenType(new_survey_covid_input_.medicationsTaken) 
      ) {
        for (let medicine of new_survey_covid_input_.medicationsTaken) {
          addCustomToTallyBasedOnCondition(
            indexes,
            medicationsTakenCount[medicine],
            true,
            1
          );
        }
        
      }

      if (checkNotNullAndBoolType(new_survey_recovery_input_.recovered)) {
        let prop = trueEqualsYes(new_survey_recovery_input_.recovered);
        addCustomToTallyBasedOnCondition(indexes, recovered[prop], true, 1);
      }

      if (
        checkNotNullNumberGreaterThanZero(
          new_survey_recovery_input_.lengthOfRecovery
        )
      ) {
        addAverage(
          indexes,
          avglengthOfRecovery,
          new_survey_recovery_input_.lengthOfRecovery
        );
      }
    }
  }
};

const updateVaccinationSummary = (eventInput, county, state, indexes) => {
  let { vaccinationResults } = eventInput;
  let data = {
    county: {
      vaccinationSummary: county.vaccinationSummary,
    },
    state: {
      vaccinationSummary: state.vaccinationSummary,
    },
  };

  if (vaccinationResults === null || !vaccinationResults) {
    return;
  }

  for (const dat in data) {
    let { vaccinated, totalVaccineShots, vaccineType } =
      data[dat].vaccinationSummary;

    if (
      checkNotNullAndStringType(vaccinationResults.vaccinated) &&
      checkYesNoDoNotKnowType(vaccinationResults.vaccinated)
    ) {
      addCustomToTallyBasedOnCondition(indexes, vaccinated[vaccinationResults.vaccinated], true, 1);
    }

    // If the person is vaccinated, then we can check the other properties
    if (vaccinationResults.vaccinated) {
      if (
        checkNotNullNumberGreaterThanZero(vaccinationResults.totalVaccineShots)
      ) {
        let prop = resolveOneToFiveType(vaccinationResults.totalVaccineShots);
        addCustomToTallyBasedOnCondition(indexes, totalVaccineShots[prop], true, 1);
      }
      if (
        checkNotNullAndStringType(vaccinationResults.vaccineType)
      ) {
        if (checkVaccineType(vaccinationResults.vaccineType)) {
          addCustomToTallyBasedOnCondition(indexes, vaccineType[vaccinationResults.vaccineType], true, 1);
        } else {
          addCustomToTallyBasedOnCondition(indexes, vaccineType['other'], true, 1);
        }
        
      }
    }
  }
};

const updateGlobalHealthSummary = (eventInput, county, state, indexes) => {
  let { globalHealthResults } = eventInput;
  let data = {
    county: {
      globalHealthSummary: county.globalHealthSummary,
    },
    state: {
      globalHealthSummary: state.globalHealthSummary,
    },
  };

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

    if (
      checkNotNullAndStringType(globalHealthResults.healthRank) &&
      checkExcellentToPoor(globalHealthResults.healthRank)
    ) {
      addCustomToTallyBasedOnCondition(indexes, healthRank[globalHealthResults.healthRank], true, 1);

    }

    if (
      checkNotNullAndStringType(globalHealthResults.physicalHealthRank) &&
      checkExcellentToPoor(globalHealthResults.physicalHealthRank)
    ) {
      addCustomToTallyBasedOnCondition(indexes, physicalHealthRank[globalHealthResults.physicalHealthRank], true, 1);
    }

    if (
      checkNotNullAndStringType(globalHealthResults.carryPhysicalActivities) &&
      checkCompletelyToNotAtAll(globalHealthResults.carryPhysicalActivities)
    ) {
      addCustomToTallyBasedOnCondition(indexes, carryPhysicalActivities[globalHealthResults.carryPhysicalActivities], true, 1);
    }

    if (
      checkNotNullAndStringType(globalHealthResults.fatigueRank) &&
      checkNoneToVerySevere(globalHealthResults.fatigueRank)
    ) {
      addCustomToTallyBasedOnCondition(indexes, fatigueRank[globalHealthResults.fatigueRank], true, 1);
    }

    if (checkIsNumAndBetweenOneAndTen(globalHealthResults.painLevel)) {
      addAverage(indexes, avgpainLevel, globalHealthResults.painLevel);
    }
  }
};

const updateSymptomSummary = (eventInput, county, state, indexes) => {
  let { symptomResults } = eventInput;

  let data = {
    county: {
      symptomSummary: county.symptomSummary,
    },
    state: {
      symptomSummary: state.symptomSummary,
    },
  };

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
    if (
      checkNotNullAndStringType(symptomResults.qualityOfLifeRank) &&
      checkExcellentToPoor(symptomResults.qualityOfLifeRank)
    ) {
      addCustomToTallyBasedOnCondition(indexes, qualityOfLife[symptomResults.qualityOfLifeRank] , true, 1);
    }

    if (
      checkNotNullAndStringType(symptomResults.mentalHealthRank) &&
      checkExcellentToPoor(symptomResults.mentalHealthRank)
    ) {
      addCustomToTallyBasedOnCondition(indexes, mentalHealthRank[symptomResults.mentalHealthRank] , true, 1);
    }

    if (
      checkNotNullAndStringType(symptomResults.socialSatisfactionRank) &&
      checkExcellentToPoor(symptomResults.socialSatisfactionRank)
    ) {
      addCustomToTallyBasedOnCondition(indexes, socialSatisfactionRank[symptomResults.socialSatisfactionRank] , true, 1);
    }

    if (
      checkNotNullAndStringType(symptomResults.carryOutSocialActivitiesRank) &&
      checkExcellentToPoor(symptomResults.carryOutSocialActivitiesRank)
    ) {
      addCustomToTallyBasedOnCondition(indexes, carryOutSocialActivitiesRank[
        symptomResults.carryOutSocialActivitiesRank
      ], true, 1);

    }

    if (
      checkNotNullAndStringType(symptomResults.anxietyInPastWeekRank) &&
      checkNeverToAlways(symptomResults.anxietyInPastWeekRank)
    ) {
      addCustomToTallyBasedOnCondition(indexes, anxietyInPastWeekRank[symptomResults.anxietyInPastWeekRank], true, 1);
    }
  }
};

const updateMedicalConditionsSummary = (eventInput, county, state, indexes) => {
  let { symptomResults } = eventInput;
  let data = {
    county: {
      medicalConditionsSummary: county.medicalConditionsSummary,
    },
    state: {
      medicalConditionsSummary: state.medicalConditionsSummary,
    },
  };

  if (symptomResults === null || !symptomResults) {
    return;
  }

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

  let data = {
    county: {
      patientHealthQuestionnaireSummary:
        county.patientHealthQuestionnaireSummary,
    },
    state: {
      patientHealthQuestionnaireSummary:
        state.patientHealthQuestionnaireSummary,
    },
  };
  

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
      if (patientHealthResults.totalScore > 10) {
        county.phq8AboveTen += 1;
      }
    } else {
      if (patientHealthResults.totalScore > 10) {
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

  let data = {
    county: {
      socialSummary: county.socialSummary,
    },
    state: {
      socialSummary: state.socialSummary,
    },
  };

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

    console.log("Checking social determinatsresults.currentWorkSituation");
    console.log(socialDeterminantsResults.currentWorkSituation);

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

module.exports = {
  updateCovidCountSummaryTabStats,
  aggregatePercentageCustomBasedOnCondition,
  addCustomToTallyBasedOnCondition,
  updateCovidSummary,
  updateRecoverySummary,
  addAverage,
  updateVaccinationSummary,
  updateGlobalHealthSummary,
  findMostFrequentDiagnosis,
  updateSymptomSummary,
  updateMedicalConditionsSummary,
  updatePatientHealthSummary,
  updateSocialSummary,
  incrementTotalFullEntries,
};
