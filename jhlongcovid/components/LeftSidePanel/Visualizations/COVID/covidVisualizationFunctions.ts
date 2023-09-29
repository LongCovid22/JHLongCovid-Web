import { API } from "aws-amplify";
import { GetMapDataQuery } from "../../../../src/API";
import {
  MedicationsAvailable,
  SummaryDemos,
  YesNo,
  YesNoDontKnow,
} from "../answerTypes";
import { createTotalsChartData } from "../visualizationFunctions";

export const getTotalCovidCases = (beenInfected: any) => {
  return beenInfected.yes.race.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
};

export const percentOfTotalCovid = (
  totalCovidReports: number,
  totalEntries: number
) => {
  return (totalCovidReports / totalEntries) * 100;
};

export const getTotalHospitalizations = (hospitalizations: YesNo) => {
  return hospitalizations.yes.race.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
};

export const getTotalSymptomatic = (symptomatic: YesNo) => {
  return symptomatic.yes.race.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
};

export const getTotalPrescribed = (medications: YesNoDontKnow) => {
  return medications.yes.race.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
};

export const getPercentSymptomatic = (
  totalSymptomatic: number,
  totalCovid: number
) => {
  if (totalCovid === 0) {
    return 0;
  }
  return (totalSymptomatic / totalCovid) * 100;
};

export const getPercentMedications = (
  medications: YesNoDontKnow,
  totalCovid: number
) => {
  if (totalCovid === 0) {
    return 0;
  }
  const totalPrescribed = medications.yes.race.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );

  return Math.round((totalPrescribed / totalCovid) * 100);
};

export const createMedicationsTakenConfig = (
  medicationsTaken: MedicationsAvailable
): { labels: string[]; options: any; data: any } => {


  let { labels, chartData } = createTotalsChartData({
      "antibiotics": medicationsTaken.antiBiotics,
      "antiviral": medicationsTaken.antiViral,
      "doNotKnow": medicationsTaken.doNotKnow,
      "oralSteroids": medicationsTaken.oralSteroids,
      "other": medicationsTaken.other
    });

  const medicationsTakenConfig = {
    labels: labels,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxis: {
          ticks: {
            font: {
              family: "Gentona",
              size: 13,
            },
          },
          title: { // Add y-axis label
            display: true,
            text: 'Medication Options',
            font: {
              family: "Gentona",
              size: 16,
            },
          },
        },
        yAxis: {
          ticks: {
            font: {
              family: "Gentona",
              size: 13,
            },
            stepSize: 1
          },
          title: { // Add y-axis label
            display: true,
            text: 'Number of Participants',
            font: {
              family: "Gentona",
              size: 16,
            },
            position: 'left'
          },
        },
      },
      plugins: {
        legend: false,
        title: {
          display: true,
          text: ["Medications Taken Amongst Participants", "With COVID History"],
          font: {
            family: "Gentona",
            size: 18,
          },
        },
        datalabels: {
          anchor: "end",
          align: "top",
          // formatter: Math.round,
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
          label: "# of people taking medication",
          data: chartData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(9, 30, 235, 0.5)",
        },
      ],
    },
  };

  return medicationsTakenConfig;
};

export const createRecoveryConfig = (
  recovery: YesNo
): { labels: string[]; options: any; data: any } => {
  let labels: string[] = ["Yes", "No"];
  let yes: number[] = [];
  let no: number[] = [];
  Object.keys(recovery).forEach((value: string) => {
    if (value === "yes") {
      yes.push(
        recovery.yes.race.values.reduce(
          (acc: number, curr: number) => acc + curr,
          0
        )
      );
    } else {
      no.push(
        recovery.no.race.values.reduce(
          (acc: number, curr: number) => acc + curr,
          0
        )
      );
    }
  });

  const recoveriesConfig = {
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
          text: ["Fully Recovered vs. Not Recovered", "Amongst Participants with COVID", "History"],
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

  return recoveriesConfig;
};
