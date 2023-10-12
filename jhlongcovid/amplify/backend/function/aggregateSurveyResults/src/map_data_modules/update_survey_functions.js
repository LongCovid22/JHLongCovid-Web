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

const {hasLongCovid} = require("./helper");

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
  if (county !== null) county.totalFullEntries += 1;
  state.totalFullEntries += 1;
};
const updateCovidSummary = (eventInput, county, state, indexes) => {
  let { covidResults: new_survey_input_ } = eventInput;
  let data = {
    county: {
      covidSummary: county.covidSummary,
    },
    state: {
      covidSummary: state.covidSummary,
    },
  };

  //high level stats
  if (checkNotNullAndBoolType(new_survey_input_.beenInfected)) {
    if (county.covidCount) {
      county.covidCount += new_survey_input_.beenInfected ? 1 : 0;
    } else if (state.covidCount) {
      state.covidCount += new_survey_input_.beenInfected ? 1 : 0;
    }
  }

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
            addCustomToTallyBasedOnCondition(indexes, beenInfected[prop], true, 1);
          }

          if (checkNotNullNumberGreaterThanZero(new_survey_input_.timesPositive)) {
            let prop = resolveOneToThreePlus(new_survey_input_.timesPositive);
            addCustomToTallyBasedOnCondition(indexes, timesPositive[prop], true, 1);
          }

          if (checkNotNullAndBoolType(new_survey_input_.tested)) {
            let prop = trueEqualsYes(new_survey_input_.tested);
            addCustomToTallyBasedOnCondition(indexes, tested[prop], true, 1);
          }

          if (
            checkNotNullAndStringType(new_survey_input_.positiveTest) &&
            checkYesNoDoNotKnowType(new_survey_input_.positiveTest)
          ) {
            addCustomToTallyBasedOnCondition(indexes, positiveTest[new_survey_input_.positiveTest], true, 1);
          }

          if (checkNotNullAndBoolType(new_survey_input_.symptomatic)) {
            let prop = trueEqualsYes(new_survey_input_.symptomatic);
            addCustomToTallyBasedOnCondition(indexes, symptomatic[prop], true, 1);
          }

          if (
            checkNotNullAndStringType(new_survey_input_.symptomsPreventScale) &&
            checkNotAtAllToVeryMuchType(new_survey_input_.symptomsPreventScale)
          ) {
            addCustomToTallyBasedOnCondition(indexes, symptomsPreventScale[new_survey_input_.symptomsPreventScale], true, 1);
          }
      }
    }
  }
};

const updateRecoverySummary = (eventInput, county, state, indexes) => {

  let { recoveryResults: new_survey_recovery_input_, covidResults: new_survey_covid_input_ } = eventInput;
  let data = {
    county: {
      recoverySummary: county.recoverySummary,
    },
    state: {
      recoverySummary: state.recoverySummary,
    },
  };

  if (!new_survey_recovery_input_ || !new_survey_covid_input_) {
    throw new Error("recoveryResults or covidResults missing in eventInput object!");
  }

  //high level stats
  if (new_survey_recovery_input_.recovered) {
    if (county.recoveredCount) {
      county.recoveredCount += 1;
    } else if (state.recoveredCount) {
      state.recoveredCount += 1;
    }
  }


  for (const dat in data) {
    if (data[dat].recoverySummary) {
      let { hospitalized, timesHospitalized, medicationsPrescribed, 
        medicationsTakenCount, recovered, avglengthOfRecovery } = data[dat].recoverySummary;
        
        if (checkNotNullAndBoolType(new_survey_covid_input_.hospitalized)) {
          let prop = trueEqualsYes(new_survey_covid_input_.hospitalized);
          addCustomToTallyBasedOnCondition(indexes, hospitalized[prop], true, 1);
        }
            
        if (checkNotNullNumberGreaterThanZero(new_survey_covid_input_.timesHospitalized)) {
          let prop = resolveOneToThreePlus(new_survey_covid_input_.timesHospitalized);
          addCustomToTallyBasedOnCondition(indexes, timesHospitalized[prop], true, 1);
        }

        if (
          checkNotNullAndStringType(new_survey_covid_input_.medicationsPrescribed) &&
          checkYesNoDoNotKnowType(new_survey_covid_input_.medicationsPrescribed)
        ) {
          addCustomToTallyBasedOnCondition(indexes, medicationsPrescribed[new_survey_covid_input_.medicationsPrescribed], true, 1);
        }

        if (
          new_survey_covid_input_.medicationsTaken &&
          new_survey_covid_input_.medicationsTaken !== null &&
          checkMedicationsTakenType(new_survey_covid_input_.medicationsTaken)
        ) {
          addCustomToTallyBasedOnCondition(indexes,medicationsTakenCount[new_survey_covid_input_.medicationsTaken], true, 1);
        }
      
      if (checkNotNullAndBoolType(new_survey_recovery_input_.recovered)) {
        let prop = trueEqualsYes(new_survey_recovery_input_.recovered);
        addCustomToTallyBasedOnCondition(indexes, recovered[prop], true, 1);
      }

      if (checkNotNullNumberGreaterThanZero(new_survey_recovery_input_.lengthOfRecovery)) {
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

  console.log("LC RESULTS: ", longCovidResults);

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
      const amountToAdd =
        longCovidResults.OverFourWeeks == 1 ||
        longCovidResults.OverTwelveWeeks == 1 ||
        longCovidResults.SelfReportedLongCovid == 1
          ? 1
          : 0;

      if (dat === "county") {
        // If longCovid already exists, add 1 if any long covid was reported
        county.longCovid = county.longCovid
          ? county.longCovid + amountToAdd
          : amountToAdd;

        //
        county.selfReportedLongCovid = county.selfReportedLongCovid
          ? county.selfReportedLongCovid +
            longCovidResults.SelfReportedLongCovid
          : longCovidResults.SelfReportedLongCovid;

        // If longCovidOverFourWeeks already exists, add the 1 if symptoms > 4 weeks were reported
        county.longCovidOverFourWeeks = county.longCovidOverFourWeeks
          ? county.longCovidOverFourWeeks + longCovidResults.OverFourWeeks
          : longCovidResults.OverFourWeeks;

        // If longCovidOverTwelveWeeks already exists, add 1 if symptoms > 12 weeks were reported
        county.longCovidOverTwelveWeeks = county.longCovidOverTwelveWeeks
          ? county.longCovidOverTwelveWeeks + longCovidResults.OverTwelveWeeks
          : longCovidResults.OverTwelveWeeks;
      } else {
        // If longCovid already exists, add 1 if any long covid was reported
        state.longCovid = state.longCovid
          ? state.longCovid + amountToAdd
          : amountToAdd;

        state.selfReportedLongCovid = state.selfReportedLongCovid
          ? state.selfReportedLongCovid + longCovidResults.SelfReportedLongCovid
          : longCovidResults.SelfReportedLongCovid;

        // If longCovidOverFourWeeks already exists, add the 1 if symptoms > 4 weeks were reported
        state.longCovidOverFourWeeks = state.longCovidOverFourWeeks
          ? state.longCovidOverFourWeeks + longCovidResults.OverFourWeeks
          : longCovidResults.OverFourWeeks;

        // If longCovidOverTwelveWeeks already exists, add 1 if symptoms > 12 weeks were reported
        state.longCovidOverTwelveWeeks = state.longCovidOverTwelveWeeks
          ? state.longCovidOverTwelveWeeks + longCovidResults.OverTwelveWeeks
          : longCovidResults.OverTwelveWeeks;
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

module.exports = {
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
