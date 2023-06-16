import { UserInfo } from "./SurveyWrapper";
import * as mutations from "../../src/graphql/mutations";
import { API, input } from "aws-amplify";
import {
  CovidStatus,
  CreateCovidEntryInput,
  CreateCovidEntryMutation,
  CreateGlobalHealthEntryInput,
  CreateGlobalHealthEntryMutation,
  CreatePatientHealthEntryInput,
  CreatePatientHealthEntryMutation,
  CreateRecoveryEntryInput,
  CreateRecoveryEntryMutation,
  CreateSocialDeterminantsEntryInput,
  CreateSocialDeterminantsEntryMutation,
  CreateSurveyEntryInput,
  CreateSurveyEntryMutation,
  CreateSymptomEntryInput,
  CreateSymptomEntryMutation,
  CreateVaccinationEntryInput,
  CreateVaccinationEntryMutation,
  NotificationFrequency,
  NotificationMethod,
  Race,
  SurveyType,
  UpdateCovidEntryInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  User,
} from "../../src/API";
import axios from "axios";
import { LocationState } from "../../redux/slices/locationSlice";
import { GraphQLQuery } from "@aws-amplify/api";
import { LocationData } from "../../util/locationFunctions";

export const checkEmptyDemoFields = (answer: any) => {
  let emptyFields = [];
  let demographics = answer as {
    age: string;
    race: string;
    sex: string;
    height: string;
    weight: string;
  };
  if (demographics.age === "") {
    emptyFields.push("age");
  }
  if (demographics.race === "") {
    emptyFields.push("race");
  }
  if (demographics.sex === "") {
    emptyFields.push("sex");
  }
  if (demographics.height === "") {
    emptyFields.push("height");
  }
  if (demographics.weight === "") {
    emptyFields.push("weight");
  }

  return emptyFields;
};

export const updateUserWithInfoFromSurvey = async (
  userInfo: UserInfo,
  user: User,
  surveyId: string,
  recovered?: boolean | null
) => {
  let race;
  if (userInfo.race.toUpperCase() === "WHITE") {
    race = Race.WHITE;
  } else if (userInfo.race.toUpperCase() === "BLACK") {
    race = Race.BLACK;
  } else if (userInfo.race.toUpperCase() === "ASIAN") {
    race = Race.ASIAN;
  } else if (userInfo.race.toUpperCase() === "HISPANIC") {
    race = Race.HISPANIC;
  } else if (userInfo.race.toUpperCase() === "NATIVE") {
    race = Race.NATIVE;
  } else if (userInfo.race.toUpperCase() === "OTHER") {
    race = Race.OTHER;
  } else {
    race = Race.NONE;
  }
  // Update user with new info
  let notFreq: NotificationFrequency | null = null;
  let notMethod: NotificationMethod | null = null;
  let covidStatus: CovidStatus = CovidStatus.NONE;

  if (recovered !== null && recovered !== undefined) {
    if (recovered === false) {
      covidStatus = CovidStatus.NOT_RECOVERED;
      notFreq = NotificationFrequency.WEEKLY;
      notMethod = NotificationMethod.EMAIL;
    } else {
      covidStatus = CovidStatus.RECOVERED;
    }
  }

  let userDetails = {
    input: {
      id: user.id,
      email: user.email,
      age: userInfo.age !== "" ? parseInt(userInfo.age) : user.age,
      race: userInfo.race !== "" ? race : user.race,
      sex: userInfo.sex !== "" ? userInfo.sex : user.sex,
      height: userInfo.height !== "" ? userInfo.height : user.height,
      weight: userInfo.weight !== "" ? userInfo.weight : user.weight,
      covidStatus: covidStatus,
      notificationFreq: notFreq,
      notificationMethod: notMethod,
      lastSubmission: new Date(),
      userLastSubmissionEntryId: surveyId,
      createdAt: user.createdAt,
    },
  };

  try {
    const updateUserMutation = await API.graphql<
      GraphQLQuery<UpdateUserMutation>
    >({
      query: mutations.updateUser,
      variables: userDetails,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    if (updateUserMutation.data && updateUserMutation.data.updateUser) {
      return updateUserMutation.data.updateUser as User;
    }
  } catch (error) {
    let graphqlResponse = error as { data?: UpdateUserMutation; error: any[] };

    if (graphqlResponse.data && graphqlResponse.data.updateUser) {
      return graphqlResponse.data.updateUser as User;
    }
    console.log("Error: ", error);
  }
};

export const userInfoIsEmpty = (userInfo: UserInfo) => {
  if (
    userInfo.age === "" &&
    userInfo.height === "" &&
    userInfo.weight === "" &&
    userInfo.race === "" &&
    userInfo.sex === ""
  ) {
    return true;
  }
  return false;
};

export const parseHeightIntoInches = (height: string | undefined | null) => {
  if (height) {
    if (height.length >= 2) {
      let feet = parseInt(height[0]);
      let inches = parseInt(height.slice(1, height.length));
      return (feet * 12 + inches).toString();
    } else if (height.length === 1) {
      return (parseInt(height) * 12).toString();
    }
    return "0";
  }
  return null;
};

export const createCovidEntry = async (
  surveyData: any,
  locationData: LocationData,
  user?: User
) => {
  let countyState =
    locationData.county !== ""
      ? locationData.county + "#" + locationData.stateAbbrev
      : null;
  let details: CreateCovidEntryInput = {
    state: locationData.state,
    countyState: countyState,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: surveyData.height,
    weight: surveyData.weight,
    beenInfected: surveyData.beenInfected ?? null,
    timesPositive: surveyData.timesPositive ?? null,
    tested: surveyData.tested ?? null,
    positiveTest: surveyData.positiveTest ?? null,
    testMethod: surveyData.testMethod ?? null,
    hospitalized: surveyData.hospitalized ?? null,
    timesHospitalized: surveyData.timesHospitalized ?? null,
    symptomatic: surveyData.symptomatic ?? null,
    medicationsPrescribed: surveyData.medicationsPrescribed ?? null,
    medicationsTaken: surveyData.medicationsTaken ?? null,
  };

  try {
    const cEntry = (await API.graphql({
      query: mutations.createCovidEntry,
      variables: { input: details },
      authMode: user ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY",
    })) as { data?: CreateCovidEntryMutation; errors: any[] };
    if (cEntry.data && cEntry.data.createCovidEntry) {
      return cEntry.data.createCovidEntry.id;
    }
  } catch (error) {
    let mutation = error as { data?: CreateCovidEntryMutation; errors: any[] };
    if (mutation.data && mutation.data.createCovidEntry) {
      return mutation.data.createCovidEntry.id;
    } else {
      console.log("Error creating COVID Entry: ", mutation.errors);
    }
  }
};

export const createRecoveryEntry = async (
  surveyData: any,
  locationData: LocationData,
  user?: User
) => {
  let countyState =
    locationData.county !== ""
      ? locationData.county + "#" + locationData.stateAbbrev
      : null;
  let details: CreateRecoveryEntryInput = {
    state: locationData.state,
    countyState: countyState,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: surveyData.height,
    weight: surveyData.weight,
    recovered: surveyData.recovered ?? null,
    lengthOfRecovery: surveyData.lengthOfRecovery ?? null,
  };

  try {
    const rEntry = (await API.graphql({
      query: mutations.createRecoveryEntry,
      variables: { input: details },
      authMode: user ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY",
    })) as CreateRecoveryEntryMutation;
    if (rEntry.createRecoveryEntry) {
      return rEntry.createRecoveryEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data?: CreateRecoveryEntryMutation;
      errors: any[];
    };
    if (mutation.data && mutation.data.createRecoveryEntry) {
      return mutation.data.createRecoveryEntry.id;
    } else {
      console.log("Error creating Recovery Entry: ", mutation.errors);
    }
  }
};

export const createVaccinationEntry = async (
  surveyData: any,
  locationData: LocationData,
  user?: User
) => {
  let countyState =
    locationData.county !== ""
      ? locationData.county + "#" + locationData.stateAbbrev
      : null;
  let details: CreateVaccinationEntryInput = {
    state: locationData.state,
    countyState: countyState,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: surveyData.height,
    weight: surveyData.weight,
    totalVaccineShots: surveyData.totalVaccineShots ?? null,
    vaccinated: surveyData.vaccinated ?? null,
    dateOfLastVaccine: surveyData.dateOfLastVaccine ?? null,
  };

  try {
    const vEntry = (await API.graphql({
      query: mutations.createVaccinationEntry,
      variables: { input: details },
      authMode: user ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY",
    })) as CreateVaccinationEntryMutation;
    if (vEntry.createVaccinationEntry) {
      return vEntry.createVaccinationEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data?: CreateVaccinationEntryMutation;
      errors: any[];
    };
    if (mutation.data && mutation.data.createVaccinationEntry) {
      return mutation.data.createVaccinationEntry.id;
    } else {
      console.log("Error creating Vaccination Entry: ", mutation.errors);
    }
  }
};

export const createGlobalHealthEntry = async (
  surveyData: any,
  locationData: LocationData,
  user?: User
) => {
  let countyState =
    locationData.county !== ""
      ? locationData.county + "#" + locationData.stateAbbrev
      : null;
  let details: CreateGlobalHealthEntryInput = {
    state: locationData.state,
    countyState: countyState,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: surveyData.height,
    weight: surveyData.weight,
    healthRank: surveyData.healthRank ?? null,
    physicalHealthRank: surveyData.physicalHealthRank ?? null,
    carryPhysicalActivities: surveyData.carryOutSocialActivitiesRank ?? null,
    fatigueRank: surveyData.fatigueRank ?? null,
    painLevel: surveyData.painLevel ?? null,
  };

  try {
    const ghEntry = (await API.graphql({
      query: mutations.createGlobalHealthEntry,
      variables: { input: details },
      authMode: user ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY",
    })) as CreateGlobalHealthEntryMutation;
    if (ghEntry.createGlobalHealthEntry) {
      return ghEntry.createGlobalHealthEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data?: CreateGlobalHealthEntryMutation;
      errors: any[];
    };
    if (mutation.data && mutation.data.createGlobalHealthEntry) {
      return mutation.data.createGlobalHealthEntry.id;
    } else {
      console.log("Error creating Global Health Entry: ", mutation.errors);
    }
  }
};

export const createPatientHealthEntry = async (
  surveyData: any,
  locationData: LocationData,
  user?: User
) => {
  let countyState =
    locationData.county !== ""
      ? locationData.county + "#" + locationData.stateAbbrev
      : null;
  let details: CreatePatientHealthEntryInput = {
    state: locationData.state,
    countyState: countyState,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: surveyData.height,
    weight: surveyData.weight,
    generalHealthResults:
      JSON.stringify(surveyData.generalHealthResults) ?? null,
    totalScore: surveyData.totalScore ?? null,
  };

  try {
    const phEntry = (await API.graphql({
      query: mutations.createPatientHealthEntry,
      variables: { input: details },
      authMode: user ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY",
    })) as CreatePatientHealthEntryMutation;
    if (phEntry.createPatientHealthEntry) {
      return phEntry.createPatientHealthEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data?: CreatePatientHealthEntryMutation;
      errors: any[];
    };
    if (mutation.data && mutation.data.createPatientHealthEntry) {
      return mutation.data.createPatientHealthEntry.id;
    } else {
      console.log("Error creating Patient Health Entry: ", mutation.errors);
    }
  }
};

export const createSymptomEntry = async (
  surveyData: any,
  locationData: LocationData,
  user?: User
) => {
  let countyState =
    locationData.county !== ""
      ? locationData.county + "#" + locationData.stateAbbrev
      : null;
  let details: CreateSymptomEntryInput = {
    state: locationData.state,
    countyState: countyState,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: surveyData.height,
    weight: surveyData.weight,
    symptoms: surveyData.symptoms ?? null,
    carryOutSocialActivitiesRank:
      surveyData.carryOutSocialActivitiesRank ?? null,
    anxietyInPastWeekRank: surveyData.anxietyInPastWeekRank ?? null,
    medicalConditions: surveyData.medicalConditions ?? null,
    hasLongCovid: surveyData.hasLongCovid ?? null,
  };
  try {
    const sEntry = (await API.graphql({
      query: mutations.createSymptomEntry,
      variables: { input: details },
      authMode: user ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY",
    })) as CreateSymptomEntryMutation;
    if (sEntry.createSymptomEntry) {
      return sEntry.createSymptomEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data?: CreateSymptomEntryMutation;
      errors: any[];
    };
    if (mutation.data && mutation.data.createSymptomEntry) {
      return mutation.data.createSymptomEntry.id;
    } else {
      console.log("Error creating Symptom Entry: ", mutation.errors);
    }
  }
};

export const createSocialDeterminantsEntry = async (
  surveyData: any,
  locationData: LocationData,
  user?: User
) => {
  let countyState =
    locationData.county !== ""
      ? locationData.county + "#" + locationData.stateAbbrev
      : null;
  let details: CreateSocialDeterminantsEntryInput = {
    state: locationData.state,
    countyState: countyState,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: surveyData.height,
    weight: surveyData.weight,
    hasMedicalInsurance: surveyData.hasMedicalInsurance ?? null,
    difficultCoveringExpenses: surveyData.difficultCoveringExpenses ?? null,
    currentWorkSituation: surveyData.currentWorkSituation ?? null,
  };
  try {
    const sdEntry = (await API.graphql({
      query: mutations.createSocialDeterminantsEntry,
      variables: { input: details },
      authMode: user ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY",
    })) as {
      data?: CreateSocialDeterminantsEntryMutation;
      errors: any[];
    };
    if (sdEntry.data && sdEntry.data.createSocialDeterminantsEntry) {
      return sdEntry.data.createSocialDeterminantsEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data?: CreateSocialDeterminantsEntryMutation;
      errors: any[];
    };
    if (mutation.data && mutation.data.createSocialDeterminantsEntry) {
      return mutation.data.createSocialDeterminantsEntry.id;
    } else {
      console.log("Error creating Symptom Entry: ", mutation.errors);
    }
  }
};

export const createSurveyEntry = async (
  ids: any,
  userInfo: UserInfo,
  locationData: LocationData,
  surveyType: SurveyType,
  user?: User
) => {
  try {
    let race;
    if (userInfo.race !== "") {
      if (userInfo.race.toUpperCase() === "WHITE") {
        race = Race.WHITE;
      } else if (userInfo.race.toUpperCase() === "BLACK") {
        race = Race.BLACK;
      } else if (userInfo.race.toUpperCase() === "ASIAN") {
        race = Race.ASIAN;
      } else if (userInfo.race.toUpperCase() === "HISPANIC") {
        race = Race.HISPANIC;
      } else if (userInfo.race.toUpperCase() === "NATIVE") {
        race = Race.NATIVE;
      } else if (userInfo.race.toUpperCase() === "OTHER") {
        race = Race.OTHER;
      } else {
        race = Race.NONE;
      }
    }

    let countyState =
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null;

    // If the current survey is a weekly survey, need to submit it
    // with a reference to the most recent GUEST survey that was filled out
    // This is because that is where this user reported that they were not recovered
    // from covid.
    let parentSurveyId;
    if (surveyType === SurveyType.WEEKLY) {
      if (user && user.lastSubmissionEntry) {
        let parentSurveyType = user.lastSubmissionEntry.surveyType;
        if (parentSurveyType === SurveyType.GUEST) {
          parentSurveyId = user.lastSubmissionEntry.id;
        } else {
          parentSurveyId = user.lastSubmissionEntry.parentSurveyId;
        }
      }
    }

    const surveyDetails = {
      surveyVersion: 1,
      surveyType: surveyType,
      parentSurveyId: parentSurveyId,
      email: user ? user.email : null,
      state: locationData.state,
      countyState: countyState,
      age:
        surveyType === SurveyType.WEEKLY ? user!.age! : parseInt(userInfo.age),
      race: surveyType === SurveyType.WEEKLY ? user!.race! : race,
      sex: surveyType === SurveyType.WEEKLY ? user!.sex! : userInfo.sex,
      height:
        surveyType === SurveyType.WEEKLY ? user!.height! : userInfo.height,
      weight:
        surveyType === SurveyType.WEEKLY ? user!.weight! : userInfo.weight,
      surveyEntryCovidEntryId: ids.CovidEntry ? ids.CovidEntry : null,
      surveyEntryVaccinationEntryId: ids.VaccinationEntry
        ? ids.VaccinationEntry
        : null,
      surveyEntrySocialDeterminantsEntryId: ids.SocialDeterminantsEntry
        ? ids.SocialDeterminantsEntry
        : null,
      surveyEntryRecoveryEntryId: ids.RecoveryEntry ? ids.RecoveryEntry : null,
      surveyEntryGlobalHealthEntryId: ids.GlobalHealthEntry
        ? ids.GlobalHealthEntry
        : null,
      surveyEntryPatientHealthEntryId: ids.PatientHealthEntry
        ? ids.PatientHealthEntry
        : null,
      surveyEntrySymptomsEntryId: ids.SymptomEntry ? ids.SymptomEntry : null,
      surveyEntryMonthlyEntryId: ids.MonthlyEntry ? ids.MonthlyEntry : null,
    };

    const sEntry = (await API.graphql({
      query: mutations.createSurveyEntry,
      variables: { input: surveyDetails },
      authMode: user ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY",
    })) as { data?: CreateSurveyEntryMutation; errors: any[] };
    if (sEntry.data && sEntry.data.createSurveyEntry) {
      return sEntry.data.createSurveyEntry.id;
    }
  } catch (error) {
    let mutation = error as { data?: CreateSurveyEntryMutation; errors: any[] };
    if (mutation.data && mutation.data.createSurveyEntry) {
      return mutation.data.createSurveyEntry.id;
    } else {
      console.log("Error creating Survey Entry: ", mutation.errors);
    }
  }
};

export const saveEntries = async (
  locationData: LocationData,
  surveyData: any,
  userInfo: UserInfo,
  surveyType: SurveyType,
  user?: User
) => {
  try {
    let ids: any = {};
    for await (const value of Object.keys(surveyData)) {
      switch (value) {
        case "CovidEntry":
          const covidEntryid = await createCovidEntry(
            surveyData[value],
            locationData,
            user
          );
          ids[value] = covidEntryid;
          break;
        case "RecoveryEntry":
          const recoveryEntryId = await createRecoveryEntry(
            surveyData[value],
            locationData,
            user
          );
          ids[value] = recoveryEntryId;
          break;
        case "VaccinationEntry":
          const vaccinationEntryId = await createVaccinationEntry(
            surveyData[value],
            locationData,
            user
          );
          ids[value] = vaccinationEntryId;
          break;
        case "PatientHealthEntry":
          const patientHealthEntryId = await createPatientHealthEntry(
            surveyData[value],
            locationData,
            user
          );
          ids[value] = patientHealthEntryId;
          break;
        case "GlobalHealthEntry":
          const globalHealthEntryId = await createGlobalHealthEntry(
            surveyData[value],
            locationData,
            user
          );
          ids[value] = globalHealthEntryId;
          break;
        case "SymptomEntry":
          const SymptomEntryId = await createSymptomEntry(
            surveyData[value],
            locationData,
            user
          );
          ids[value] = SymptomEntryId;
          break;
        case "SocialDeterminantsEntry":
          const socialDeterminantsEntryId = await createSocialDeterminantsEntry(
            surveyData[value],
            locationData,
            user
          );
          ids[value] = socialDeterminantsEntryId;
          break;
        default:
          break;
      }
    }

    ids["SurveyEntry"] = await createSurveyEntry(
      ids,
      userInfo,
      locationData,
      surveyType,
      user
    );
    return ids;
  } catch (error) {
    let graphqlResponse = error as {
      data?: CreateSurveyEntryMutation;
      error: any[];
    };
    if (!graphqlResponse.data) {
      console.log("Saving entries: ", error);
    }
  }
};

export const aggregateResults = async (
  entries: any,
  ids: any,
  userInfo: UserInfo,
  location: LocationData,
  surveyType: SurveyType,
  user?: User
) => {
  const aggregateDetails: any = {
    id: ids["SurveyEntry"],
    email: user ? user.email : "",
    surveyVersion: 1,
    surveyType: surveyType,
    age: userInfo.age,
    race: userInfo.race,
    sex: userInfo.sex,
    location: location,
    covidResults: ids["CovidEntry"]
      ? {
          id: ids["CovidEntry"],
          ...entries["CovidEntry"],
        }
      : null,
    recoveryResults: ids["RecoveryEntry"]
      ? {
          id: ids["RecoveryEntry"],
          ...entries["RecoveryEntry"],
        }
      : null,
    vaccinationResults: ids["VaccinationEntry"]
      ? {
          id: ids["VaccinationEntry"],
          ...entries["VaccinationEntry"],
        }
      : null,
    globalHealthResults: ids["GlobalHealthEntry"]
      ? {
          id: ids["GlobalHealthEntry"],
          ...entries["GlobalHealthEntry"],
        }
      : null,
    patientHealthResults: ids["PatientHealthEntry"]
      ? {
          id: ids["PatientHealthEntry"],
          ...entries["PatientHealthEntry"],
        }
      : null,
    symptomResults: ids["SymptomEntry"]
      ? {
          id: ids["SymptomEntry"],
          ...entries["SymptomEntry"],
        }
      : null,
    socialDeterminantsResults: ids["SocialDeterminantsEntry"]
      ? {
          id: ids["SocialDeterminantsEntry"],
          ...entries["SocialDeterminantsEntry"],
        }
      : null,
    healthRelatedResults: {
      weight: userInfo.weight,
      height: parseHeightIntoInches(userInfo.height),
    },
  };

  //   console.log("aggregateDetails: ", aggregateDetails);
  const variables = {
    results: JSON.stringify(aggregateDetails),
  };

  // console.log("Survey results: ", variables);

  const aggregateResult = await API.graphql({
    query: mutations.aggregateSurveyResults,
    variables: variables,
  });
};

export const medicalConditionsMap: any = {
  noNewDiagnosis: "None",
  heartProblems:
    "Heart problems, such as heart failure or arrhythmia (e.g., “atrial fibrillation”)",
  lungProblems:
    "Lung problems, such as asthma, COPD, fibrosis or interstitial lung disease",
  bloodClotLung:
    "Blood clots in the lung (“pulmonary embolism”), leg or arm (“deep vein thrombosis”)",
  sleepApnea: "Sleep apnea or insomnia",
  memory: "Memory or cognitive impairment or dementia",
  migraine: "Migraine or other headache disorder",
  stroke: "Stroke",
  seizure: "Seizure or epilepsy",
  kidneyProblems: "Kidney problems or kidney disease",
  stomachProblems:
    "Stomach problems or gastrointestinal disease, like stomach ulcer or irritable bowel syndrome",
  psychologicalProblems:
    "Psychological problems or psychiatric problems, like depression or anxiety or psychosis",
  diabetes: "Diabetes",
  autoImmuneDiseases:
    "Autoimmune diseases (such as systemic lupus, thyroid disease)",
  mecfs:
    "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME-CFS), Postural Orthostatic Tachycardia Syndrome (POTS) or dysautonomia, or Ehlers Danlos Syndrome (EDS)",
  notSure: "Not Sure",
};
