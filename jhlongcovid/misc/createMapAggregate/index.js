const NullJSONData = {
    total: 0,
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
        aggregationType: "LONG",
        phq8AboveTen: 0,
        recoveredCount: 0,
        selfReportedLongCovid: 0,
        longCovidOverFourWeeks: 0,
        longCovidOverTwelveWeeks: 0,
        selfReportedPlusCovidLongCovid: 0,
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
        },
        recoverySummary: {
          recovered: {
            yes: NullJSONData,
            no: NullJSONData,
          },
          avglengthOfRecovery: avgNULLJSONData,
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
          }
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
    
   function replacer(key, value) {
    // If the value is an object, return it as is
    if (typeof value === "object" && !Array.isArray(value)) {
      let replacement = {};
      for (let k in value) {
        if (Object.hasOwnProperty.call(value, k)) {
          replacement[k] = value[k];
        }
      }
      return replacement;
    }
    return value;
  }
  
  // Convert object to JSON string without quotes on keys
  let jsonString = JSON.stringify(variables, replacer, 2).replace(/"([^"]+)":/g, '$1:');
  
  const fs = require('fs');

  // Your code to generate jsonString...
  
  // Save jsonString to a file
  fs.writeFile('output.txt', jsonString, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });