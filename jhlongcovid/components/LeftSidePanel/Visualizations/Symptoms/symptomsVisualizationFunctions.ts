import { m } from "framer-motion";
import { SymptomsAvailable, SummaryDemos, YesNo } from "../answerTypes";
import {
  createTotalsChartData,
  convertCamelCase,
} from "../visualizationFunctions";

export const getSymptomsCount = (symptoms: YesNo) => {
  return symptoms.yes.race.values.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
};

export const getMostCommonSymptom = (symptoms: SymptomsAvailable) => {
  let max = 0;
  let symptom = "None";
  Object.keys(symptoms).forEach((value: string) => {
    let summariesDemo: SummaryDemos =
      symptoms[value as keyof SymptomsAvailable];
    let count = summariesDemo.race.values.reduce(
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

export const createSymptomCountConfig = (
  symptomsCount: SymptomsAvailable
): { labels: string[]; options: any; data: any } => {
  const { labels, chartData } = createSymptomTotalsChartData(symptomsCount);

  const symptomsCountConfig = {
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
          text: "Symptom Counts",
          font: {
            size: 18,
            family: "Gentona",
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

export const createSymptomTotalsChartData = (data: object) => {
  let labels: string[] = [];
  let chartData: number[] = [];
  Object.keys(data).forEach((value: string) => {
    let summariesDemo: SummaryDemos = data[value as keyof object];
    labels.push(symptomLabelMap[value]);
    chartData.push(
      summariesDemo.race.values.reduce(
        (acc: number, curr: number) => acc + curr,
        0
      )
    );
  });

  return { labels, chartData };
};

export const createDepressedConfig = (
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

const symptomLabelMap: any = {
  headache: "Headache",
  bodyMuscleAche: "Body ache",
  feverChillsSweatsFlushing: "Fever/Chills",
  faintDizzyGoofy: "Faint/Dizzy",
  postExertionalMalaise: "PEM",
  weaknessInArmsLegs: "Weakness",
  shortnessOfBreath: "Short breath",
  cough: "Cough",
  palpitations: "Palpitations",
  swellingOfLegs: "Swelling legs",
  indigestionNausea: "Indigestion",
  bladderProblem: "Bladder problems",
  nerveProblems: "Nerve problems",
  brainFog: "Brain fog",
  anxietyDepressionNightmares: "Anxiety/Depression",
  difficultyFallingAsleep: "Difficulty sleeping",
  sleepyDuringDaytime: "Sleepy in daytime",
  loudSnoring: "Loud snoring",
  uncomfortableFeelingsInLegs: "Uncomfortable legs",
  skinRash: "Skin rash",
  lossOfChangeInSmell: "Loss of smell",
  excessiveThirst: "Excessive thirst",
  excessiveDryMouth: "Excessive dry mouth",
  visionProblems: "Vision problems",
  hearingProblems: "Hearing problems",
  fertilityProblemsForWomen: "Fertility problems",
};
