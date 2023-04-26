import React from "react";
import { UserInfo } from "../../SurveyWrapper";

export type HeightInputProps = {
  demos: UserInfo;
  setDemos: React.Dispatch<
    React.SetStateAction<{
      age: string;
      race: string;
      sex: string;
      height: string;
      weight: string;
    }>
  >;
  setAnswer: (answer: any) => void;
};

export const HeightInput: React.FC<HeightInputProps> = ({
  demos,
  setDemos,
  setAnswer,
}) => {
  const isValidAge = (age: string) => {
    const num = parseInt(age);
    if (isNaN(num) || num <= 0 || num > 8) {
      return false;
    }
    return true;
  };

  const handleHeightChange = (value: string) => {
    if (isValidAge(value)) {
      const demosCopy = { ...demos };
      demosCopy["height"] = value;
      setDemos(demosCopy);
    }
  };

  return <div>HeightInput</div>;
};
