import { VaccineTypes } from "../../../../src/API";
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

  let { labels, chartData } = createTotalsChartData({
    "doNotKnow": totalVaccines.dontKnow,
    "one": totalVaccines.one,
    "two": totalVaccines.two,
    "three": totalVaccines.three,
    "four": totalVaccines.four,
    "five": totalVaccines.five,
    "fivePlus": totalVaccines.fivePlus,
  } );


  const vaccinationsTakenConfig = {
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
            text: 'Number of Vaccine Dosages',
            font: {
              family: "Gentona",
              size: 16,
            },
            position: 'left'
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
          text: "Vaccines Taken per Person",
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
  vaccineTypes: VaccineTypes
): { labels: string[]; options: any; data: any } => {
  const { labels, chartData } = createTotalsChartData(vaccineTypes);

  const vaccinationsTakenConfig = {
    labels: labels,
    options: {
      scales: {
        xAxis: {
          ticks: {
            font: {
              family: "Gentona",
              size: 13,
            },
          },
          title: { 
            display: true,
            text: 'Vaccine Types',
            font: {
              family: "Gentona",
              size: 16,
            },
            position: 'left'
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
          title: { 
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
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: false,
        title: {
          display: true,
          text: "Vaccine Types",
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
            weight: "bold",
            size: 16,
            family: "Gentona",
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
