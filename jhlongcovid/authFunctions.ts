import { Auth } from "aws-amplify";
import { UserInfo } from "./components/Survey/SurveyWrapper";

export const signUp = async (info: UserInfo) => {
  const { user } = await Auth.signUp({
    username: info.email,
    password: info.password,
    autoSignIn: {
      enabled: true,
    },
  });
  return user;
};

export const confirmSignUp = async (info: UserInfo, code: string) => {
  await Auth.confirmSignUp(info.email, code);
};
