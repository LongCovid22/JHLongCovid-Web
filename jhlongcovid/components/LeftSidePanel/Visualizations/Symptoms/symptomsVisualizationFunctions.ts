import { SymptomsAvailable, YesNo } from "../answerTypes";
import { createTotalsChartData } from "../visualizationFunctions";

export const getSymptomsCount = (symptoms: YesNo) => {
  return symptoms.yes.race.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
};

export const createSymptomCountConfig = (
  symptomsCount: SymptomsAvailable
): { labels: string[]; options: any; data: any } => {
  const { labels, chartData } = createTotalsChartData(symptomsCount);

  const symptomsCountConfig = {
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
          text: "Symptom Counts",
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
          label: "Reports",
          data: chartData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(9, 30, 235, 0.5)",
        },
      ],
    },
  };

  return symptomsCountConfig;
};
