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
                `${ac.long_name} state` +
                `&key=${apiKey}`
            );

            const west =
              stateResponse.data.results[0].geometry.bounds.southwest.lng;
            const east =
              stateResponse.data.results[0].geometry.bounds.northeast.lng;
            const lng = (west + east) / 2;

            const north =
              stateResponse.data.results[0].geometry.bounds.northeast.lat;
            const south =
              stateResponse.data.results[0].geometry.bounds.southwest.lat;
            const lat = (north + south) / 2;

            locationData.stateLat = Math.round(lat * 1000000) / 1000000;
            locationData.stateLong = Math.round(lng * 1000000) / 1000000;
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

export const parseHeightIntoInches = (height: string) => {
  if (height.length === 2) {
    let feet = parseInt(height.split("")[0]);
    let inches = parseInt(height.split("")[1]);
    return (feet * 12 + inches).toString();
  } else if (height.length === 1) {
    return (parseInt(height) * 12).toString();
  }
  return "0";
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
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: parseHeightIntoInches(surveyData.height),
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
  locationData: LocationData
) => {
  let details: CreateRecoveryEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: parseHeightIntoInches(surveyData.height),
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
  locationData: LocationData
) => {
  let details: CreateVaccinationEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: parseHeightIntoInches(surveyData.height),
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
  locationData: LocationData
) => {
  let details: CreateGlobalHealthEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: parseHeightIntoInches(surveyData.height),
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
  locationData: LocationData
) => {
  let details: CreatePatientHealthEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: parseHeightIntoInches(surveyData.height),
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
  locationData: LocationData
) => {
  let details: CreateSymptomEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: parseHeightIntoInches(surveyData.height),
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
  locationData: LocationData
) => {
  let details: CreateSocialDeterminantsEntryInput = {
    state: locationData.state,
    countyState:
      locationData.county !== ""
        ? locationData.county + "#" + locationData.stateAbbrev
        : null,
    age: parseInt(surveyData.age),
    race: surveyData.race.toUpperCase(),
    sex: surveyData.sex,
    height: parseHeightIntoInches(surveyData.height),
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
      height: parseHeightIntoInches(userInfo.height),
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
      surveyEntryMonthlyEntryId: ids.MonthlyEntry ? ids.MonthlyEntry : null,
    };

    const sEntry = (await API.graphql({
      query: mutations.createSurveyEntry,
      variables: { input: surveyDetails },
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
    id: ids["SurveyEntry"],
    email: user ? user.email : "",
    surveyVersion: 1,
    surveyType: SurveyType.GUEST,
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
      height: userInfo.height,
    },
  };

  // console.log("aggregateDetails: ", aggregateDetails);
  const variables = {
    results: JSON.stringify(aggregateDetails),
  };

  // console.log("Survey results: ", variables);

  const aggregateResult = await API.graphql({
    query: mutations.aggregateSurveyResults,
    variables: variables,
  });
};

export const emailReceiptConfirmation = async () => {
    console.log("testTwo");
    try {
        const data = {
            "questions": [
              [
                {
                  "title": "",
                  "questionNum": 0,
                  "question": "Welcome to the Johns Hopkins Long COVID Dashboard!",
                  "options": [
                    "The COVID-19 pandemic has caused unprecedented health and social challenges worldwide. To better understand the long-term consequences of this disease, a team of researchers from Johns Hopkins University and other institutions has developed this dashboard to amplify the voices of Long-COVID sufferers and raise awareness of their challenges and needs.",
                    "Your feedback on COVID-19 is important to us. We want to know how the pandemic has impacted your well-being, lifestyle, work, or social connections. Please fill out our survey questionnaire to share your experiences with us."
                  ],
                  "answerFormat": "welcome",
                  "answer": null,
                  "branching": null
                },
                {
                  "title": "Consent",
                  "questionNum": 1,
                  "question": "The following information will be collected to better understand your experience with COVID-19.",
                  "options": [
                    "COVID-19 Experience",
                    "COVID-19 Recovery (if applicable)",
                    "Vaccination History",
                    "General Health",
                    "Medical Conditions",
                    "Symptoms",
                    "Social Determinants"
                  ],
                  "answerFormat": "consent",
                  "answer": null,
                  "branching": null
                },
                {
                  "title": "Demographics",
                  "questionNum": 2,
                  "question": "Please enter the following demographic information:",
                  "options": [],
                  "answerFormat": "demographics",
                  "answer": null,
                  "branching": null
                }
              ],
              [
                {
                  "title": "COVID",
                  "questionNum": 3,
                  "question": "Have you ever been infected with COVID-19?",
                  "options": ["Yes", "No"],
                  "answerFormat": ["choice", "choice"],
                  "answer": null,
                  "branching": {
                    "predicate": "No",
                    "goto": {
                      "section": 3,
                      "question": 0
                    }
                  },
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "beenInfected",
                    "type": "Boolean"
                  }
                },
                {
                  "title": "COVID",
                  "questionNum": 4,
                  "question": "In total, since the beginning of the COVID-19 pandemic in the US (March 2020), how many times do you think you have been infected with COVID‐19? (please estimate even if you are not sure)",
                  "options": [
                    "1 infection (only once)",
                    "2 infections (reinfected once)",
                    "3 infections (reinfected twice)",
                    {
                      "title": "More than 3 infections: (please enter number)",
                      "type": "text",
                      "placeholder": "Enter number of infections",
                      "validation": {
                        "regex": "^[0-9]+$",
                        "errorText": "Please enter a valid number"
                      }
                    },
                    "Do not know"
                  ],
                  "answerFormat": ["choice", "choice", "choice", "input", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "timesPositive",
                    "type": "Int"
                  }
                },
                {
                  "title": "COVID",
                  "questionNum": 5,
                  "question": "Have you every been hospitalized for COVID-19?",
                  "options": ["Yes", "No"],
                  "answerFormat": ["choice", "choice"],
                  "answer": null,
                  "branching": {
                    "predicate": "No",
                    "goto": {
                      "section": 1,
                      "question": 4
                    }
                  },
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "hospitalized",
                    "type": "Boolean"
                  }
                },
                {
                  "title": "COVID",
                  "questionNum": 6,
                  "question": "How many times have you been hospitalized for COVID-19?",
                  "options": [
                    "1 COVID hospitalization",
                    "2 COVID hospitalizations",
                    "3 COVID hospitalizations",
                    {
                      "title": "More than 3 hospitalizations: (please enter number)",
                      "type": "text",
                      "placeholder": "Enter number of infections",
                      "validation": {
                        "regex": "^[0-9]+$",
                        "errorText": "Please enter a valid number"
                      }
                    },
                    "Do not know"
                  ],
                  "answerFormat": ["choice", "choice", "choice", "input", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "timesHospitalized",
                    "type": "Int"
                  }
                },
                {
                  "instructions": "The following questions refer to your most recent COVID-19 infection",
                  "title": "COVID",
                  "questionNum": 7,
                  "question": "When do you know or think you had COVID-19?",
                  "options": {
                    "title": "Date:",
                    "type": "date",
                    "placeholder": "Enter date"
                  },
                  "answerFormat": "input",
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "lastPositive",
                    "type": "AWSDateTime"
                  }
                },
                {
                  "title": "COVID",
                  "questionNum": 8,
                  "question": "Did you take a COVID test at that time?",
                  "options": ["Yes", "No"],
                  "answerFormat": ["choice", "choice"],
                  "answer": null,
                  "branching": {
                    "predicate": "No",
                    "goto": {
                      "section": 1,
                      "question": 7
                    }
                  },
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "tested",
                    "type": "Boolean"
                  }
                },
                {
                  "title": "COVID",
                  "questionNum": 9,
                  "question": "Did you have a positive test result? “Positive” means the test showed COVID-19.",
                  "options": ["Yes", "No", "Do not know"],
                  "answerFormat": ["choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "positiveTest",
                    "type": "String"
                  }
                },
                {
                  "title": "COVID",
                  "questionNum": 10,
                  "question": "Did you have any COVID19 symptoms, such as fever, cough, sore throat, or other symptoms?",
                  "options": ["Yes", "No"],
                  "answerFormat": ["choice", "choice"],
                  "answer": null,
                  "branching": {
                    "predicate": "No",
                    "goto": {
                      "section": 1,
                      "question": 9
                    }
                  },
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "symptomatic",
                    "type": "Boolean"
                  }
                },
                {
                  "title": "COVID",
                  "questionNum": 11,
                  "question": "When your symptoms were at their worst, did they prevent you from going about your daily activities?",
                  "options": [
                    "Not at all",
                    "A little bit",
                    "Somewhat",
                    "Quite a bit",
                    "Very much"
                  ],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "symptomsPreventScale",
                    "type": "String"
                  }
                },
                {
                  "title": "COVID",
                  "questionNum": 12,
                  "question": "Did a doctor or other health care professional prescribe any medications for you to take when you had COVID-19?",
                  "options": ["Yes", "No", "Do not know"],
                  "answerFormat": ["choice", "choice", "choice"],
                  "answer": null,
                  "branching": {
                    "predicate": ["No", "Do not know"],
                    "goto": {
                      "section": 2,
                      "question": 0
                    }
                  },
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "medicationsPrescribed",
                    "type": "String"
                  }
                },
                {
                  "title": "COVID",
                  "questionNum": 13,
                  "question": "Did the doctor or other health care professional prescribe any of the following medications for COVID-19? Check all that apply.",
                  "options": [
                    "Antiviral pill, such as Paxlovid",
                    "Oral steroids, such as dexamethasone, prednisone, or prednisolone",
                    "Antibiotics, such as a \"Z-pak\"",
                    {
                      "title": "Other",
                      "type": "text",
                      "placeholder": "Enter medication",
                      "validation": {
                        "regex": "^[0-9]+$",
                        "errorText": "Please enter a valid number"
                      }
                    },
                    "Do not know"
                  ],
                  "answerFormat": [
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "input",
                    "multichoice"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "CovidEntry",
                    "field": "medicationsTaken",
                    "type": "[String]"
                  }
                }
              ],
              [
                {
                  "title": "Recovery",
                  "questionNum": 14,
                  "question": "Would you say that you are completely recovered from COVID-19 now?",
                  "options": ["Yes", "No"],
                  "answerFormat": ["choice", "choice"],
                  "answer": null,
                  "branching": {
                    "predicate": "No",
                    "goto": {
                      "section": 3,
                      "question": 0
                    }
                  },
                  "schemaInfo": {
                    "tableName": "RecoveryEntry",
                    "field": "recovered",
                    "type": "Boolean"
                  }
                },
                {
                  "title": "Recovery",
                  "questionNum": 15,
                  "question": "How long did it take for you to recover from your most recent infection?",
                  "options": {
                    "type": "text",
                    "title": "Days: ",
                    "placeholder": "Enter number of days",
                    "validation": {
                      "regex": "^[0-9]+$",
                      "errorText": "Please enter a valid number"
                    }
                  },
                  "answerFormat": "input",
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "RecoveryEntry",
                    "field": "lengthOfRecovery",
                    "type": "Int"
                  }
                }
              ],
              [
                {
                  "title": "Vaccination",
                  "questionNum": 16,
                  "question": "Have you ever been vaccinated against COVID-19?",
                  "options": ["No", "Yes", "Do not know"],
                  "answerFormat": ["choice", "choice", "choice"],
                  "answer": null,
                  "branching": {
                    "predicate": "No",
                    "goto": {
                      "section": 5,
                      "question": 0
                    }
                  },
                  "schemaInfo": {
                    "tableName": "VaccinationEntry",
                    "field": "vaccinated",
                    "type": "String"
                  }
                },
                {
                  "title": "Vaccination",
                  "questionNum": 17,
                  "question": "In total, how many COVID-19 vaccine shots have you received?",
                  "options": [
                    {
                      "type": "dropdown",
                      "title": "Number of shots: ",
                      "placeholder": "Enter number of shots",
                      "validation": {
                        "regex": "^[0-9]+$",
                        "errorText": "Please enter a valid number"
                      }
                    },
                    "Do not know"
                  ],
                  "answerFormat": ["input", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "VaccinationEntry",
                    "field": "totalVaccineShots",
                    "type": "Int"
                  }
                },
                {
                  "title": "Vaccination",
                  "questionNum": 18,
                  "question": "When was your most recent COVID shot?",
                  "options": [
                    {
                      "type": "date",
                      "title": "Date of shot: ",
                      "placeholder": "Enter date of shot"
                    },
                    "Unsure",
                    "Decline to answer"
                  ],
                  "answerFormat": ["input", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "VaccinationEntry",
                    "field": "dateOfLastVaccine",
                    "type": "AWSDateTime"
                  }
                },
                {
                  "title": "Vaccination",
                  "questionNum": 19,
                  "question": "Which type of COVID vaccine was your last shot?",
                  "options": [
                    "Pfizer",
                    "Moderna",
                    "Janssen",
                    "Novavax",
                    {
                      "type": "text",
                      "title": "Other",
                      "placeholder": "Enter vaccine type"
                    },
                    "Do not know"
                  ],
                  "answerFormat": [
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "input",
                    "choice"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "VaccinationEntry",
                    "field": "vaccineType",
                    "type": "String"
                  }
                }
              ],
              [
                {
                  "title": "Your Global Health",
                  "questionNum": 20,
                  "question": "In general, would you say your health is:",
                  "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "GlobalHealthEntry",
                    "field": "healthRank",
                    "type": "String"
                  }
                },
                {
                  "title": "Your Global Health",
                  "questionNum": 21,
                  "question": "In general, how would you rate your physical health?",
                  "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "GlobalHealthEntry",
                    "field": "physicalHealthRank",
                    "type": "String"
                  }
                },
                {
                  "title": "Your Global Health",
                  "questionNum": 22,
                  "question": "To what extent are you able to carry out your everyday physical activities such as walking, climbing stairs, carrying groceries, or moving a chair?",
                  "options": [
                    "Completely",
                    "Mostly",
                    "Moderately",
                    "A little",
                    "Not at all"
                  ],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "GlobalHealthEntry",
                    "field": "carryPhysicalActivities",
                    "type": "String"
                  }
                },
                {
                  "title": "Your Global Health",
                  "questionNum": 23,
                  "question": "In the <timeframe>, how would you rate you fatigue (extreme tiredness resulting from mental or physical exertion or illness) on average?",
                  "timeframe": "past 7 days",
                  "options": ["None", "Mild", "Moderate", "Severe", "Very Severe"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "GlobalHealthEntry",
                    "field": "fatigueRank",
                    "type": "String"
                  }
                },
                {
                  "title": "Your Global Health",
                  "questionNum": 24,
                  "question": "In the <timeframe>, how would you rate your pain on average? Please provide a number from 1 (no pain) to 10 (worst imagineable pain): ",
                  "timeframe": "past 7 days",
                  "options": {
                    "title": "Enter pain level (1-10)",
                    "type": "slider",
                    "placeholder": "Enter pain level",
                    "sliderProps": {
                      "min": 1,
                      "max": 10,
                      "default": 5,
                      "step": 1
                    },
                    "sliderMarks": [
                      {
                        "value": 1,
                        "secondaryLabel": "No pain"
                      },
                      {
                        "value": 2,
                        "secondaryLabel": ""
                      },
                      {
                        "value": 3,
                        "secondaryLabel": ""
                      },
                      {
                        "value": 4,
                        "secondaryLabel": ""
                      },
                      {
                        "value": 5,
                        "secondaryLabel": "Moderate pain"
                      },
                      {
                        "value": 6,
                        "secondaryLabel": ""
                      },
                      {
                        "value": 7,
                        "secondaryLabel": ""
                      },
                      {
                        "value": 8,
                        "secondaryLabel": ""
                      },
                      {
                        "value": 9,
                        "secondaryLabel": ""
                      },
                      {
                        "value": 10,
                        "secondaryLabel": "Unimaginable pain"
                      }
                    ]
                  },
                  "answerFormat": "input",
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "GlobalHealthEntry",
                    "field": "painLevel",
                    "type": "Int"
                  }
                }
              ],
              [
                {
                  "title": "Symptoms",
                  "questionNum": 25,
                  "question": "During the <timeframe>, have you had any of the following symptoms? Check all that apply.",
                  "timeframe": "past month",
                  "answerFormat": [
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice"
                  ],
                  "options": [
                    "Headache",
                    "Body or muscle aches",
                    "Fever, chills, sweats or flushing",
                    "Feeling faint, dizzy, “goofy”; difficulty thinking soon after standing up from a sitting or lying position",
                    "Feeling sick after you exert yourself physically or mentally (“post-exertional malaise”)",
                    "Weakness in arms or legs",
                    "Shortness of breath (trouble breathing)",
                    "Cough",
                    "Palpitations, racing heart, arrhythmia, or skipped beats",
                    "Swelling of your legs",
                    "Indigestion, nausea, feeling uncomfortably full or vomiting after eating, diarrhea, or constipation",
                    "Bladder problems including incontinence, trouble passing urine or emptying bladder",
                    "Nerve problems including tremor, shaking, numbness, tingling, or burning",
                    "Problems thinking or concentrating (“brain fog”)",
                    "Problems with anxiety, depression, stress or trauma-related symptoms like nightmares or grief",
                    "Difficulty falling asleep, difficulty staying asleep, or early morning awakenings, 3 or more times per week",
                    "Feeling sleepy, trouble staying awake during the daytime, or falling asleep during the day when you do not intend to, 3 or more times per week",
                    "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week",
                    "Uncomfortable feelings in your legs (creepy, crawling feeling) that make you want to move your legs, that are worse at night and improved with movement",
                    "Skin rash",
                    "Loss of or change in smell or taste",
                    "Excessive thirst",
                    "Excessively dry mouth",
                    "Vision problems (blurry, light sensitivity, difficult reading or focusing, floaters, flashing lights, “snow”)",
                    "Problems with hearing (hearing loss, ringing in ears)",
                    "Problems with fertility, changes in your menstrual cycle, changes in menopause symptoms"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "symptoms",
                    "type": "[String]"
                  }
                },
                {
                  "title": "Symptoms",
                  "questionNum": 26,
                  "question": "In general, over the <timeframe>, how would you rate your mental health, including your mood and your ability to think?",
                  "timeframe": "last 2 weeks",
                  "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "mentalHealthRank",
                    "type": "String"
                  }
                },
                {
                  "title": "Symptoms",
                  "questionNum": 27,
                  "question": "In general, over the <timeframe>, how would you rate your satisfaction with your social activities and relationships?",
                  "timeframe": "last 2 weeks",
                  "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "socialSatisfactionRank",
                    "type": "String"
                  }
                },
                {
                  "title": "Symptoms",
                  "questionNum": 28,
                  "question": "In general, over the <timeframe>, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.)",
                  "timeframe": "last 2 weeks",
                  "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "carryOutSocialActivitiesRank",
                    "type": "String"
                  }
                },
                {
                  "title": "Symptoms",
                  "questionNum": 29,
                  "question": "In the <timeframe>, how often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?",
                  "timeframe": "past 7 days",
                  "options": ["Never", "Rarely", "Sometimes", "Often", "Always"],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "anxietyInPastWeekRank",
                    "type": "String"
                  }
                }
              ],
              [
                {
                  "title": "Patient Health",
                  "questionNum": 30,
                  "question": "Over the <timeframe>, how often have you been bothered by the following problems?",
                  "timeframe": "last 2 weeks",
                  "scale": [
                    "Not at all",
                    "Several days",
                    "More than half the days",
                    "Nearly every day"
                  ],
                  "answerFormat": "scale",
                  "options": [
                    "Little interest or pleasure in doing things?",
                    "Feeling down, depressed, or hopeless?",
                    "Trouble falling or staying asleep, or sleeping too much?",
                    "Feeling tired or having little energy?",
                    "Poor appetite or overeating?",
                    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
                    "Trouble concentrating on things, such as reading the newspaper or watching television?",
                    "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "PatientHealthEntry",
                    "field": "generalHealthResults",
                    "type": "AWSJSON"
                  }
                }
              ],
              [
                {
                  "title": "Medical Conditions",
                  "questionNum": 31,
                  "question": "Since the <timeframe>, has a health care provider given you a new diagnosis of any of the following conditions? Check all that apply.",
                  "timeframe": "beginning of 2020",
                  "options": [
                    "Heart problems, such as heart failure or arrhythmia (e.g., “atrial fibrillation”)",
                    "Lung problems, such as asthma, COPD, fibrosis or interstitial lung disease",
                    "Blood clots in the lung (“pulmonary embolism”), leg or arm (“deep vein thrombosis”)",
                    "Sleep apnea or insomnia",
                    "Memory or cognitive impairment or dementia ",
                    "Migraine or other headache disorder",
                    "Stroke",
                    "Seizure or epilepsy",
                    "Kidney problems or kidney disease",
                    "Stomach problems or gastrointestinal disease, like stomach ulcer or irritable bowel syndrome",
                    "Psychological problems or psychiatric problems, like depression or anxiety or psychosis",
                    "Diabetes",
                    "Autoimmune diseases (such as systemic lupus, thyroid disease)",
                    "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME-CFS), Postural Orthostatic Tachycardia Syndrome (POTS) or dysautonomia, or Ehlers Danlos Syndrome (EDS)",
                    {
                      "type": "text",
                      "title": "Other",
                      "placeholder": "Enter condition"
                    },
                    "Not sure",
                    "No new diagnoses since the beginning of 2020"
                  ],
                  "answerFormat": [
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "multichoice",
                    "input",
                    "multichoice",
                    "multichoice"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "medicalConditions",
                    "type": "[String]"
                  }
                },
                {
                  "title": "Medical Conditions",
                  "questionNum": 32,
                  "question": "Do you think that you are experiencing, or have ever experienced, what has been called “long COVID,” or symptoms related to COVID at least a month after your infection?",
                  "options": ["Yes", "No", "Do not know"],
                  "answerFormat": ["choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SymptomEntry",
                    "field": "hasLongCovid",
                    "type": "String"
                  }
                }
              ],
              [
                {
                  "title": "Your Social Determinants",
                  "questionNum": 33,
                  "question": "Do you currently have some form of health insurance to help pay for medical bills?",
                  "options": ["Yes", "No"],
                  "answerFormat": ["choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SocialDeterminantsEntry",
                    "field": "hasMedicalInsurance",
                    "type": "Boolean"
                  }
                },
                {
                  "title": "Your Social Determinants",
                  "questionNum": 34,
                  "question": "In the <timeframe>, how difficult has it been to pay for the things you need (or you and your family needs)?",
                  "timeframe": "past month",
                  "options": [
                    "Very difficult",
                    "Somewhat difficult",
                    "Not at all difficult",
                    "Do not know",
                    "Prefer not to answer"
                  ],
                  "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SocialDeterminantsEntry",
                    "field": "difficultCoveringExpenses",
                    "type": "String"
                  }
                },
                {
                  "title": "Your Social Determinants",
                  "questionNum": 35,
                  "question": "What is your current work situation?",
                  "options": [
                    "Working outside of the home",
                    "Working outside the home as well as working remotely from home (“hybrid” work)",
                    "Working remotely from home",
                    "Working at home to provide childcare, eldercare and/or to maintain the home",
                    "On leave from a job working outside the home (e.g, sick leave, family leave, maternity leave)",
                    "Looking for work, unemployed",
                    "Retired",
                    "Disabled, permanently or temporarily",
                    "Student",
                    "Don't know",
                    "Prefer not to answer"
                  ],
                  "answerFormat": [
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice",
                    "choice"
                  ],
                  "answer": null,
                  "branching": null,
                  "schemaInfo": {
                    "tableName": "SocialDeterminantsEntry",
                    "field": "currentWorkSituation",
                    "type": "String"
                  }
                }
              ],
              [
                {
                  "title": "Create Account",
                  "questionNum": 36,
                  "question": "In order to better understand Long COVID, we would like to check in to see how your COVID experience changes over time. To participate, enter your desired password to continue creating your account.\n\nIf you would like to skip creating an account and continue submitting your survey response, just click the skip button!",
                  "options": null,
                  "answer": null,
                  "answerFormat": "account",
                  "branching": {
                    "predicate": "skip",
                    "goto": {
                      "section": 9,
                      "question": 1
                    }
                  }
                },
                {
                  "title": "Thank You",
                  "questionNum": 37,
                  "question": "Thank you for participating in our Long COVID survey. You will be emailed with a receipt of your survey entry shortly!",
                  "options": null,
                  "answer": null,
                  "answerFormat": "thankYou",
                  "branching": null
                }
              ]
            ],
            "questionStack": [{ "section": 0, "question": 0 }, {"section": 0, "question": 1}, {"section": 0, "question": 2}],
            "answerStack": ["true", "2", { "zip": "10019", "age": "19", "race": "asian", "sex": "Male", "height": "100lbs", "weight": "50kg" }]
        };
        const variables = {
            results: JSON.stringify(data),
        };
        
        const emailReceipt = await API.graphql({
            query: mutations.emailReceiptConfirmation,
            variables: variables,
        })

        console.log(emailReceipt);
    } catch (error) {
        console.log(error);
    }
    
}

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
