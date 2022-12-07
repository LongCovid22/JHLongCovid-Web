export const getTotalCovidCases = (covidCount: any) => {
  const parsedJson: { ranges: string[]; values: number[] } = JSON.parse(
    covidCount.age
  );

  return parsedJson.values.reduce((acc, curr) => acc + curr, 0);
};

export const percentOfTotalCovid = (
  totalCovidReports: number,
  totalEntries: number
) => {
  return (totalCovidReports / totalEntries) * 100;
};
