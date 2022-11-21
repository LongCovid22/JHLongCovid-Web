import { UserInfo } from "./SurveyWrapper";
import * as mutations from "../../src/graphql/mutations";
import { API, input } from "aws-amplify";
import { CreateCovidEntryInput, CreateCovidEntryMutation } from "../../src/API";

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

export const createCovidEntry = async (entryDetails: CreateCovidEntryInput) => {
  try {
    const newCovidEntry: CreateCovidEntryMutation = await API.graphql({
      query: mutations.createCovidEntry,
      variables: { input: entryDetails },
    });
    if (newCovidEntry.createCovidEntry) {
    }
  } catch (error) {
    console.log("Error creating COVID Entry: ", error);
  }
};
