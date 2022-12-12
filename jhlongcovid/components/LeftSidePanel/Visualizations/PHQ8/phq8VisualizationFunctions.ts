import {
  SymptomsAvailable,
  SummaryDemos,
  WorkingSituation,
  YesNo,
  SummaryValues,
} from "../answerTypes";
import { convertCamelCase } from "../visualizationFunctions";

export const getAvgPhq8Score = (summaryValues: SummaryValues) => {
  const total = summaryValues.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
  return Math.round(total / summaryValues.values.length);
};
