import { SummaryAvgValues } from "../../../../src/API";

export const getAvgPhq8Score = (summaryValues: SummaryAvgValues) => {
  if (summaryValues.values) {
    let totalCount = 0;
    let totalAverage = 0;
    for (let i = 0; i < summaryValues.values.length; i++) {
      let sv = summaryValues.values[i];
      if (sv) {
        totalCount += sv.count ? sv.count : 0;
        totalAverage += sv.average ? sv.average : 0;
      }
    }

    return Math.round(totalAverage / totalCount);
  }

  return 0;
};
