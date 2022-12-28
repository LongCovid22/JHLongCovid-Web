import { API } from "aws-amplify";
import { GetMapDataQuery } from "../../../../src/API";
import {
  MedicationsAvailable,
  SummaryDemos,
  YesNo,
  YesNoDontKnow,
} from "../answerTypes";
import { createTotalsChartData } from "../visualizationFunctions";

export const getSummaries = async (data: any) => {
  const { level, lat, long } = data;
  const getCovidSummaryQuery = `
    query GET_COVID_SUMMARY($level: String!, $lat: Float!, $long: Float!) {
      getMapData(level: $level, lat: $lat, long: $long) {
        covidSummary {
          beenInfected {
            yes {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            no {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          timesPositive {
            one {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            two {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            three {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            threePlus {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            doNotKnow {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          hospitalized {
            yes {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            no {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          timesHospitalized {
            one {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            two {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            three {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            threePlus {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            doNotKnow {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          tested {
            yes {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            no {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          positiveTest {
            yes {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            no {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            doNotKnow {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          symptomatic {
            yes {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            no {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          symptomsPreventScale {
            notAtAll {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            alittleBit {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            somewhat {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            quiteABit {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            veryMuch {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          medicationsPrescribed {
            yes {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            no {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            doNotKnow {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          medicationsTakenCount {
            antiViral {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            oralSteroids {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            antiBiotics {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            other {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            doNotKnow {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
        }
        recoverySummary {
          recovered {
            yes {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
            no {
              race {
                ranges
                values
              }
              sex {
                ranges
                values
              }
              age {
                ranges
                values
              }
            }
          }
          avglengthOfRecovery {
            race {
              ranges
              values {
                count
                average
              }
            }
            sex {
              ranges
              values {
                count
                average
              }
            }
            age {
              ranges
              values {
                count
                average
              }
            }
          }
        }
        totalFullEntries
      }
    }
  `;

  try {
    const covidSummary = (await API.graphql({
      query: getCovidSummaryQuery,
      variables: { level: level, lat: lat, long: long },
    })) as { data?: GetMapDataQuery; errors: any[] };
    if (covidSummary.data) {
      return covidSummary.data.getMapData;
    }
  } catch (error) {
    console.log("error getting covid summary: ", error);
  }
};

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
      scales: {
        xAxis: {
          ticks: {
            font: {
              family: "Gentona",
              size: 13,
            },
          },
        },
        yAxis: {
          ticks: {
            font: {
              family: "Gentona",
              size: 13,
            },
          },
        },
      },
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "Medications taken",
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
