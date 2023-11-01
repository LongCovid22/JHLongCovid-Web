import {
  SymptomsAvailable,
  SummaryDemos,
  WorkingSituation,
  YesNo,
} from "../answerTypes";
import { convertCamelCase } from "../visualizationFunctions";

export const createhasMedInsurConfig = (
  medicalInsurance: YesNo
): { labels: string[]; options: any; data: any } => {
  let labels: string[] = ["Yes", "No"];
  let yes: number[] = [];
  let no: number[] = [];
  Object.keys(medicalInsurance).forEach((value: string) => {
    if (value === "yes") {
      yes.push(
        medicalInsurance.yes.race.values.reduce(
          (acc: number, curr: number) => acc + curr,
          0
        )
      );
    } else {
      no.push(
        medicalInsurance.no.race.values.reduce(
          (acc: number, curr: number) => acc + curr,
          0
        )
      );
    }
  });

  const medicalInsuranceConfig = {
    labels: labels,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: ["Participants That Have", "Medical Insurance"],
          font: {
            family: "Gentona",
            size: 18,
          },
        },
        datalabels: {
          anchor: "end",
          align: "top",
          formatter: Math.round,
          font: {
            weight: "Gentona",
            size: 16,
          },
        },
      },
    },
    data: {
      labels,
      datasets: [
        {
          label: "Recovered",
          data: [...yes, ...no],
          backgroundColor: [
            "rgba(97, 230, 235, 0.5)",
            "rgba(255, 99, 132, 0.5)",
          ],
        },
      ],
    },
  };

  return medicalInsuranceConfig;
};

export const capitalizeFirstLetters = (str: string): string => {
  // Split the string into an array of words
  const words = str.split(" ");

  // Loop through the words and capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a string and return it
  return words.join(" ");
};
