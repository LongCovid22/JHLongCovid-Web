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

export const createPHQ8OverTenConfig = (
  phq8OverTen: number,
  totalEntries: number
): { labels: string[]; options: any; data: any } => {
  let labels: string[] = ["Report Score >10", "Report Score <=10"];
  let aboveTen: number[] = [phq8OverTen];
  let belowTen: number[] = [totalEntries - phq8OverTen];

  const phq8AboveTenConfig = {
    labels: labels,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top" as const,
          font: {
            weight: "Gentona",
            size: 14,
          },
        },
        title: {
          display: true,
          text: "Mental Health Depression Report Score",
          font: {
            family: "Gentona",
            size: 18,
          },
        },
        datalabels: {
          anchor: "end",
          align: "top",
    
          font: {
            weight: "Gentona",
            size: 14,
          },
        },
      },
    },
    data: {
      labels,
      datasets: [
        {
          label: "PHQ8 score above 10",
          data: [...aboveTen, ...belowTen],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(230, 230, 230, 0.5)",
          ],
        },
      ],
    },
  };

  return phq8AboveTenConfig;
};
