import { OneToFivePlus, VaccineType, YesNo } from "../answerTypes";
import { createTotalsChartData } from "../visualizationFunctions";

export const getVaccinations = (vaccinated: YesNo) => {
  return vaccinated.yes.race.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
};

export const createTotalVaccineShotsConfig = (
  totalVaccines: OneToFivePlus
): { labels: string[]; options: any; data: any } => {
  const { labels, chartData } = createTotalsChartData(totalVaccines);

  const vaccinationsTakenConfig = {
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
          text: "Vaccination Counts",
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
          label: "Shots",
          data: chartData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(9, 30, 235, 0.5)",
        },
      ],
    },
  };

  return vaccinationsTakenConfig;
};

export const createVaccineTypeConfig = (
  vaccineTypes: VaccineType
): { labels: string[]; options: any; data: any } => {
  const { labels, chartData } = createTotalsChartData(vaccineTypes);

  const vaccinationsTakenConfig = {
    labels: labels,
    options: {
      scales: {
        y: {
          title: {
            text: "Sample Title",
          },
        },
      },
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
          text: "Vaccine Types",
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
          label: "People",
          data: chartData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(9, 30, 235, 0.5)",
        },
      ],
    },
  };

  return vaccinationsTakenConfig;
};
