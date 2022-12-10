import { SummaryDemos } from "./answerTypes";

export const backgroundColors = {
  red: "rgba(255, 99, 132, 0.5)",
  orange: "rgba(255, 159, 64, 0.5)",
  yellow: "rgba(255, 205, 86, 0.5)",
  green: "rgba(75, 192, 192, 0.5)",
  blue: "rgba(54, 162, 235, 0.5)",
  purple: "rgba(153, 102, 255, 0.5)",
};

/**
 * The createTotalsChartData() function takes in an object and returns an object with two properties: labels and chartData.
 * The labels property is an array of strings, and the chartData property is an array of numbers.
 * @param data An object that contains keys for each value that you want to include in the chart.
 * Each key should be a string, and the corresponding value should be a `SummaryDemos` object
 * @returns An object with the following properties:
 * - labels: An array of strings, where each string is the label for a value in the chart. The labels are generated by converting the keys in the data object from camel case.
 * - chartData: An array of numbers, where each number is the sum of the values in the values array for the corresponding key in the data object.
 */
export const createTotalsChartData = (data: object) => {
  let labels: string[] = [];
  let chartData: number[] = [];
  Object.keys(data).forEach((value: string) => {
    let summariesDemo: SummaryDemos = data[value as keyof object];
    labels.push(convertCamelCase(value));
    chartData.push(
      summariesDemo.race.values.reduce(
        (acc: number, curr: number) => acc + curr,
        0
      )
    );
  });

  return { labels, chartData };
};

export const createTotalsChartConfig = (
  data: object,
  title: string,
  label: string,
  backgroundColors?: string[]
) => {
  const { labels, chartData } = createTotalsChartData(data);
  const config = {
    labels: labels,
    options: {
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: title,
        },
        datalabels: {
          anchor: "end",
          align: "top",
          formatter: Math.round,
          font: {
            weight: "bold",
            size: 16,
          },
        },
      },
    },
    data: {
      labels,
      datasets: [
        {
          label: label,
          data: chartData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: backgroundColors
            ? backgroundColors
            : "rgba(9, 30, 235, 0.5)",
        },
      ],
    },
  };
  return config;
};

export const getMostCommonInSummary = (data: object) => {
  let max = 0;
  let symptom = "None";
  Object.keys(data).forEach((value: string) => {
    let demo: SummaryDemos = data[value as keyof object];
    let count = demo.race.values.reduce(
      (acc: number, curr: number) => acc + curr,
      0
    );
    if (count > max) {
      max = count;
      symptom = convertCamelCase(value);
    }
  });
  return symptom;
};

export const convertCamelCase = (input: string): string => {
  // Use a regular expression to match words with upper case letters
  const regEx = /[A-Z]/g;

  // Replace each matched word with the word followed by a space
  const convertedString = input.replace(regEx, (match) => ` ${match}`);

  // Split the string into an array of words
  const words = convertedString.split(" ");

  // Capitalize the first word and lowercase the rest of the words
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
  }

  // Join the array of words back into a string and return it
  return words.join(" ");
};
