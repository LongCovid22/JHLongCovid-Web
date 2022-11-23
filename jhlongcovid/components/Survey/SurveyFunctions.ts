import { UserInfo } from "./SurveyWrapper";
import * as mutations from "../../src/graphql/mutations";
import { API, input } from "aws-amplify";
import {
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
  Race,
  SurveyType,
  User,
} from "../../src/API";
import axios from "axios";
import { Console } from "console";

export type LocationData = {
  county: string;
  state: string;
  stateAbbrev: string;
  countyLat: number;
  countyLong: number;
  stateLat: number;
  stateLong: number;
};

export const checkEmptyDemoFields = (answer: any) => {
  let emptyFields = [];
  let demographics = answer as {
    zip: string;
    age: string;
    race: string;
    sex: string;
    height: string;
    weight: string;
  };
  if (demographics.zip === "") {
    emptyFields.push("zip code");
  }
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
  user: any
) => {
  // Update user with new info
  let userDetails = {};
  if (userInfo) {
    userDetails = {
      id: user.id,
      age: userInfo.age,
      race: userInfo.race.toUpperCase(),
      sex: userInfo.sex,
      height: userInfo.height,
      weight: userInfo.weight,
      lastSubmission: new Date(),
    };

    try {
      API.graphql({
        query: mutations.updateUser,
        variables: { input: userDetails },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    } catch (error) {
      console.log("Error: ", error);
    }
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

export const getCountyAndStateWithZip = async (
  zipCode: string,
  apiKey: string
) => {
  let locationData: LocationData = {
    county: "",
    state: "",
    stateAbbrev: "",
    countyLat: 0.0,
    countyLong: 0.0,
    stateLat: 0.0,
    stateLong: 0.0,
  };
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=` +
        zipCode +
        `&key=${apiKey}`
    );
    console.log("Response: ", response);
    if (response.data.results.length > 0) {
      await Promise.all(
        response.data.results[0].address_components.map(async (value: any) => {
          let ac = value as {
            long_name: string;
            short_name: string;
            types: string[];
          };

          if (ac.types.includes("administrative_area_level_1")) {
            locationData.state = ac.long_name;
            locationData.stateAbbrev = ac.short_name;
            const stateResponse = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?address=` +
                ac.long_name +
                `&key=${apiKey}`
            );
            locationData.stateLat =
              Math.round(
                stateResponse.data.results[0].geometry.location.lat * 1000000
              ) / 1000000;
            locationData.stateLong =
              Math.round(
                stateResponse.data.results[0].geometry.location.lng * 1000000
              ) / 1000000;
          }

          if (ac.types.includes("administrative_area_level_2")) {
            const countyResponse = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?address=` +
                ac.long_name +
                `&key=${apiKey}`
            );
            locationData.countyLat =
              Math.round(
                countyResponse.data.results[0].geometry.location.lat * 1000000
              ) / 1000000;
            locationData.countyLong =
              Math.round(
                countyResponse.data.results[0].geometry.location.lng * 1000000
              ) / 1000000;
            locationData.county = ac.long_name;
          }
        })
      );
    }
  } catch (errors) {
    console.error(errors);
  }

  return locationData;
};

export const createCovidEntry = async (
  surveyData: any,
  locationData: LocationData
) => {
  let details: CreateCovidEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: surveyData.age,
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
    })) as { data: CreateCovidEntryMutation; errors: any[] };
    if (cEntry.data.createCovidEntry) {
      return cEntry.data.createCovidEntry.id;
    }
  } catch (error) {
    let mutation = error as { data: CreateCovidEntryMutation; errors: any[] };
    if (mutation.data.createCovidEntry) {
      return mutation.data.createCovidEntry.id;
    } else {
      console.log("Error creating COVID Entry: ", mutation.errors);
    }
  }
};

export const createRecoveryEntry = async (
  surveyData: any,
  locationData: LocationData
) => {
  let details: CreateRecoveryEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: surveyData.age,
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
    })) as CreateRecoveryEntryMutation;
    if (rEntry.createRecoveryEntry) {
      return rEntry.createRecoveryEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data: CreateRecoveryEntryMutation;
      errors: any[];
    };
    if (mutation.data.createRecoveryEntry) {
      return mutation.data.createRecoveryEntry.id;
    } else {
      console.log("Error creating Recovery Entry: ", mutation.errors);
    }
  }
};

export const createVaccinationEntry = async (
  surveyData: any,
  locationData: LocationData
) => {
  let details: CreateVaccinationEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: surveyData.age,
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
    })) as CreateVaccinationEntryMutation;
    if (vEntry.createVaccinationEntry) {
      return vEntry.createVaccinationEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data: CreateVaccinationEntryMutation;
      errors: any[];
    };
    if (mutation.data.createVaccinationEntry) {
      return mutation.data.createVaccinationEntry.id;
    } else {
      console.log("Error creating Vaccination Entry: ", mutation.errors);
    }
  }
};

export const createGlobalHealthEntry = async (
  surveyData: any,
  locationData: LocationData
) => {
  let details: CreateGlobalHealthEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: surveyData.age,
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
    })) as CreateGlobalHealthEntryMutation;
    if (ghEntry.createGlobalHealthEntry) {
      return ghEntry.createGlobalHealthEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data: CreateGlobalHealthEntryMutation;
      errors: any[];
    };
    if (mutation.data.createGlobalHealthEntry) {
      return mutation.data.createGlobalHealthEntry.id;
    } else {
      console.log("Error creating Global Health Entry: ", mutation.errors);
    }
  }
};

export const createPatientHealthEntry = async (
  surveyData: any,
  locationData: LocationData
) => {
  let details: CreatePatientHealthEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: surveyData.age,
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
    })) as CreatePatientHealthEntryMutation;
    if (phEntry.createPatientHealthEntry) {
      return phEntry.createPatientHealthEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data: CreatePatientHealthEntryMutation;
      errors: any[];
    };
    if (mutation.data.createPatientHealthEntry) {
      return mutation.data.createPatientHealthEntry.id;
    } else {
      console.log("Error creating Patient Health Entry: ", mutation.errors);
    }
  }
};

export const createSymptomEntry = async (
  surveyData: any,
  locationData: LocationData
) => {
  let details: CreateSymptomEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: surveyData.age,
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
    })) as CreateSymptomEntryMutation;
    if (sEntry.createSymptomEntry) {
      return sEntry.createSymptomEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data: CreateSymptomEntryMutation;
      errors: any[];
    };
    if (mutation.data.createSymptomEntry) {
      return mutation.data.createSymptomEntry.id;
    } else {
      console.log("Error creating Symptom Entry: ", mutation.errors);
    }
  }
};

export const createSocialDeterminantsEntry = async (
  surveyData: any,
  locationData: LocationData
) => {
  let details: CreateSocialDeterminantsEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: surveyData.age,
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
    })) as {
      data: CreateSocialDeterminantsEntryMutation;
      errors: any[];
    };
    if (sdEntry.data.createSocialDeterminantsEntry) {
      return sdEntry.data.createSocialDeterminantsEntry.id;
    }
  } catch (error) {
    let mutation = error as {
      data: CreateSocialDeterminantsEntryMutation;
      errors: any[];
    };
    if (mutation.data.createSocialDeterminantsEntry) {
      return mutation.data.createSocialDeterminantsEntry.id;
    } else {
      console.log("Error creating Symptom Entry: ", mutation.errors);
    }
  }
};

export const createSurveyEntry = async (
  ids: any,
  userInfo: UserInfo,
  user?: User
) => {
  try {
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

    const surveyDetails: CreateSurveyEntryInput = {
      surveyVersion: 1,
      surveyType: SurveyType.GUEST,
      email: user ? user.email : null,
      age: parseInt(userInfo.age),
      race: race,
      sex: userInfo.sex,
      height: userInfo.height,
      weight: userInfo.weight,
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
    };

    const sEntry = (await API.graphql({
      query: mutations.createSurveyEntry,
      variables: { input: surveyDetails },
    })) as { data: CreateSurveyEntryMutation; errors: any[] };
    if (sEntry.data.createSurveyEntry) {
      return sEntry.data.createSurveyEntry.id;
    }
  } catch (error) {
    let mutation = error as { data: CreateSurveyEntryMutation; errors: any[] };
    if (mutation.data.createSurveyEntry) {
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
  user?: User
) => {
  try {
    let ids: any = {};
    for await (const value of Object.keys(surveyData)) {
      switch (value) {
        case "CovidEntry":
          const covidEntryid = await createCovidEntry(
            surveyData[value],
            locationData
          );
          ids[value] = covidEntryid;
          break;
        case "RecoveryEntry":
          const recoveryEntryId = await createRecoveryEntry(
            surveyData[value],
            locationData
          );
          ids[value] = recoveryEntryId;
          break;
        case "VaccinationEntry":
          const vaccinationEntryId = await createVaccinationEntry(
            surveyData[value],
            locationData
          );
          ids[value] = vaccinationEntryId;
          break;
        case "PatientHealthEntry":
          const patientHealthEntryId = await createPatientHealthEntry(
            surveyData[value],
            locationData
          );
          ids[value] = patientHealthEntryId;
          break;
        case "GlobalHealthEntry":
          const globalHealthEntryId = await createGlobalHealthEntry(
            surveyData[value],
            locationData
          );
          ids[value] = globalHealthEntryId;
          break;
        case "SymptomEntry":
          const SymptomEntryId = await createSymptomEntry(
            surveyData[value],
            locationData
          );
          ids[value] = SymptomEntryId;
          break;
        case "SocialDeterminantsEntry":
          const socialDeterminantsEntryId = await createSocialDeterminantsEntry(
            surveyData[value],
            locationData
          );
          ids[value] = socialDeterminantsEntryId;
          break;
        default:
          break;
      }
    }

    ids["SurveyEntry"] = await createSurveyEntry(ids, userInfo, user);
    return ids;
  } catch (error) {
    console.log("Saving entries: ", error);
  }
};

export const aggregateResults = async (
  entries: any,
  ids: any,
  userInfo: UserInfo,
  location: LocationData,
  user?: User
) => {
  const aggregateDetails: any = {
    surveyResults: {
      id: ids["SurveyEntry"],
      email: user ? user.email : "",
      surveyVersion: 1,
      surveyType: SurveyType.GUEST,
      age: userInfo.age,
      race: userInfo.race,
      sex: userInfo.sex,
      location: location,
      covidResults: {
        id: ids["CovidEntry"],
        ...entries["CovidEntry"],
      },
      recoveryResults: {
        id: ids["RecoveryEntry"],
        ...entries["RecoveryEntry"],
      },
      vaccinationResults: {
        id: ids["VaccinationEntry"],
        ...entries["VaccinationEntry"],
      },
      globalHealthResults: {
        id: ids["GlobalHealthEntry"],
        ...entries["GlobalHealthEntry"],
      },
      patientHealthResults: {
        id: ids["PatientHealthEntry"],
        ...entries["PatientHealthEntry"],
      },
      symptomResults: {
        id: ids["SymptomEntry"],
        ...entries,
      },
      socialDeterminantsResults: {
        id: ids["SocialDeterminantsEntry"],
        ...entries["SocialDeterminantsEntry"],
      },
      healthRelatedResults: {
        weight: userInfo.weight,
        height: userInfo.height,
      },
    },
  };
  console.log("Aggregate details: ", JSON.stringify(aggregateDetails));
};
