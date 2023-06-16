import { API, Auth } from "aws-amplify";
import * as mutations from "../../../src/graphql/mutations";
import { UserInfo } from "../../Survey/SurveyWrapper";
import { CreateUserMutation, UpdateUserMutation, User } from "../../../src/API";

/**
 * Verifies the code given by the currently signed up `User`
 * @param user currently signed up `User`
 * @param code verification code
 */
export const verifyTotp = async (user: User, code: string) => {
  // Verify Totp token setup for next sign in
  await Auth.verifyTotpToken(user, code);

  // Set as preffered MFA method
  await Auth.setPreferredMFA(user, "TOTP");
};

/**
 * Create `User` within DynamoDB with information provided by the `AuthenticationForm`
 * @param user cognito user from the confirmed sign up
 * @param email email form the sign in form
 * @param midSurvey flag whether or not the `AuthenticationForm` is being presented from within the survey
 * @param userInfo information form within the survey
 * @returns created `User`
 */
export const createUser = async (
  user: any,
  email: string,
  midSurvey: boolean,
  userInfo?: UserInfo
) => {
  let userDetails = {};
  if (userInfo) {
    userDetails = {
      id: user.username,
      email: email,
      age: userInfo.age,
      race: userInfo.race.toUpperCase(),
      lastSignIn: new Date(),
      sex: userInfo.sex,
      height: userInfo.height,
      weight: userInfo.weight,
      lastSubmission: midSurvey ? new Date() : null, // TODO: GET RID OF ASSUMPTION THAT IF A USER SIGNS UP, THEY ARE SUBMITTING
    };
  } else {
    userDetails = {
      id: user.username,
      email: email,
      lastSignIn: new Date(),
      lastSubmission: midSurvey ? new Date() : null,
    };
  }

  // CREATE USER within DynamoDB
  const newUser = (await API.graphql({
    query: mutations.createUser,
    variables: { input: userDetails },
    authMode: "AMAZON_COGNITO_USER_POOLS",
  })) as { data: CreateUserMutation; errors: any[] };

  return newUser.data.createUser ? newUser.data.createUser : null;
};

/**
 * Update a user that just recently signed in.
 * @param midSurvey flag whether or not the `AuthenticationForm` is being presented from within the survey
 * @param user recently signed in `User`
 * @returns
 */
export const updateUser = async (midSurvey: boolean, user?: any) => {
  const userUpdateDetails = {
    id: user.username,
    lastSignIn: new Date(),
    lastSubmission: midSurvey ? new Date() : null,
  };

  const updatedUser = (await API.graphql({
    query: mutations.updateUser,
    variables: { input: userUpdateDetails },
    authMode: "AMAZON_COGNITO_USER_POOLS",
  })) as { data: UpdateUserMutation; errors: any[] };

  return updatedUser.data.updateUser ? updatedUser.data.updateUser : null;
};
