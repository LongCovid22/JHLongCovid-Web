let SurveyDemographics = `
{
  total
  race {
    ranges
    values
  }
  age {
    ranges
    values
  }
  sex {
    ranges
    values
  }
}
`;

let YesNo = `
{
  yes ${SurveyDemographics}
  no ${SurveyDemographics}
}
`;

let OneToThreePlus = `{
  one ${SurveyDemographics}
  two ${SurveyDemographics}
  three ${SurveyDemographics}
  threePlus ${SurveyDemographics}
  doNotKnow ${SurveyDemographics}
}`;

let OneToFivePlus = `
{
  one ${SurveyDemographics}
  two ${SurveyDemographics}
  three ${SurveyDemographics}
  four ${SurveyDemographics}
  five ${SurveyDemographics}
  fivePlus ${SurveyDemographics}
  doNotKnow ${SurveyDemographics}
}
`;

let YesNoDontKnow = `
{
  yes ${SurveyDemographics}
  no ${SurveyDemographics}
  doNotKnow ${SurveyDemographics}
}
`;

let NotAtAllToVeryMuch = `
{
  notAtAll ${SurveyDemographics}
  alittleBit ${SurveyDemographics}
  somewhat ${SurveyDemographics}
  quiteABit ${SurveyDemographics}
  veryMuch ${SurveyDemographics}
}
`;

let MedicationsAvailable = `
{
  antiViral ${SurveyDemographics}
  oralSteroids ${SurveyDemographics}
  antiBiotics ${SurveyDemographics}
  other ${SurveyDemographics}
  doNotKnow ${SurveyDemographics}
}
`;

let VaccineTypes = `
{
  pfizer ${SurveyDemographics}
  moderna ${SurveyDemographics}
  janssen ${SurveyDemographics}
  novavax ${SurveyDemographics}
  other ${SurveyDemographics}
  doNotKnow ${SurveyDemographics}
}
`;

const ExcellentToPoor = `{
          excellent ${SurveyDemographics}
          veryGood ${SurveyDemographics}
          good ${SurveyDemographics}
          fair ${SurveyDemographics}
          poor ${SurveyDemographics}
        }`;

const CompletelyToNotAtAll = `
{
          completely ${SurveyDemographics}
          mostly ${SurveyDemographics}
          moderately ${SurveyDemographics}
          aLittle ${SurveyDemographics}
          notAtAll ${SurveyDemographics}
        }
`;

const NoneToVerySevere = `{
          none ${SurveyDemographics}
          mild ${SurveyDemographics}
          moderate ${SurveyDemographics}
          severe ${SurveyDemographics}
          verySevere ${SurveyDemographics}
        }`;

const SymptomsAvailable = `{
          headache ${SurveyDemographics}
          bodyMuscleAche ${SurveyDemographics}
          feverChillsSweatsFlushing ${SurveyDemographics}
          faintDizzyGoofy ${SurveyDemographics}
          postExertionalMalaise ${SurveyDemographics}
          weaknessInArmsLegs ${SurveyDemographics}
          shortnessOfBreath ${SurveyDemographics}
          cough ${SurveyDemographics}
          palpitations ${SurveyDemographics}
          swellingOfLegs ${SurveyDemographics}
          indigestionNausea ${SurveyDemographics}
          bladderProblem ${SurveyDemographics}
          nerveProblems ${SurveyDemographics}
          brainFog ${SurveyDemographics}
          anxietyDepressionNightmares ${SurveyDemographics}
          difficultyFallingAsleep ${SurveyDemographics}
          sleepyDuringDaytime ${SurveyDemographics}
          loudSnoring ${SurveyDemographics}
          uncomfortableFeelingsInLegs ${SurveyDemographics}
          skinRash ${SurveyDemographics}
          lossOfChangeInSmell ${SurveyDemographics}
          excessiveThirst ${SurveyDemographics}
          excessiveDryMouth ${SurveyDemographics}
          visionProblems ${SurveyDemographics}
          hearingProblems ${SurveyDemographics}
          fertilityProblemsForWomen ${SurveyDemographics}
        }`;

const NeverToAlways = `{
          never ${SurveyDemographics}
          rarely ${SurveyDemographics}
          sometimes ${SurveyDemographics}
          often ${SurveyDemographics}
          always ${SurveyDemographics}
        }`;

const NotAtAllToNearlyEveryDay = `
{
          notAtAll ${SurveyDemographics}
          severalDays ${SurveyDemographics}
          moreThanHalfTheDays ${SurveyDemographics}
          nearlyEveryDay ${SurveyDemographics}
        }
`;

const SummaryAvgByDemo = `
{
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
`;

const DiagnosisTypes = `
{
  noNewDiagnosis ${SurveyDemographics}
  heartProblems ${SurveyDemographics}
  lungProblems ${SurveyDemographics}
  bloodClotLung ${SurveyDemographics}
  sleepApnea ${SurveyDemographics}
  memory ${SurveyDemographics}
  migraine ${SurveyDemographics}
  stroke ${SurveyDemographics}
  seizure ${SurveyDemographics}
  kidneyProblems ${SurveyDemographics}
  stomachProblems ${SurveyDemographics}
  psychologicalProblems ${SurveyDemographics}
  diabetes ${SurveyDemographics}
  autoImmuneDiseases ${SurveyDemographics}
  mecfs ${SurveyDemographics}
  other ${SurveyDemographics}
  notSure ${SurveyDemographics}
}
`;

const DifficultExpenses = `
{
          veryDifficult ${SurveyDemographics}
          somewhatDifficult ${SurveyDemographics}
          notAtAllDifficult ${SurveyDemographics}
          doNotKnow ${SurveyDemographics}
          preferNotToAnswer ${SurveyDemographics}
        }
`;

const WorkingSituation = `
{
  atOffice ${SurveyDemographics}
  hybrid ${SurveyDemographics}
  remote ${SurveyDemographics}
  remoteAndParenting ${SurveyDemographics}
  onJobLeave ${SurveyDemographics}
  unemployed ${SurveyDemographics}
  retired ${SurveyDemographics}
  disability ${SurveyDemographics}
  student ${SurveyDemographics}
  doNotKnow ${SurveyDemographics}
  preferNotToAnswer ${SurveyDemographics}
}
`;

module.exports = { SurveyDemographics, YesNo, OneToThreePlus,
OneToFivePlus, YesNoDontKnow, NotAtAllToVeryMuch, 
MedicationsAvailable, VaccineTypes, ExcellentToPoor,
CompletelyToNotAtAll, NoneToVerySevere, SymptomsAvailable, 
NeverToAlways, NotAtAllToNearlyEveryDay, SummaryAvgByDemo,
DiagnosisTypes, DifficultExpenses, WorkingSituation
 };
