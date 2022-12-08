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
  return Math.round((totalCovidReports / totalEntries) * 100);
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

export const getPercentSymptomatic = (
  totalSymptomatic: number,
  totalCovid: number
) => {
  return Math.round((totalSymptomatic / totalCovid) * 100);
};

export const getPercentMedications = (
  medications: YesNoDontKnow,
  totalCovid: number
) => {
  const totalPrescribed = medications.yes.race.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );

  return Math.round((totalPrescribed / totalCovid) * 100);
};

export const createMedicationsTakenConfig = (
  medicationsTaken: MedicationsAvailable
): { labels: string[]; options: any; data: any } => {
  const { labels, chartData } = createTotalsChartData(medicationsTaken);

  const medicationsTakenConfig = {
    labels: labels,
    options: {
      options: {
        responsive: true,
        maintainsAspectRation: false,
      },
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "Medications taken",
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
      options: {
        responsive: true,
        maintainsAspectRation: false,
      },
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "Recovered vs. not recovered",
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
