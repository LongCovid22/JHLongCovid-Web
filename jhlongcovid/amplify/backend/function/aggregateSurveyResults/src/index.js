/* Amplify Params - DO NOT EDIT
	API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIIDOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ const {
  Sha256,
} = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");
const {
  checkIsNumAndBetweenOneAndTen,
  checkNeverToAlways,
  checkNotAtAllToNearlyEveryDay,
  checkCompletelyToNotAtAll,
  checkNoneToVerySevere,
  checkExcellentToPoor,
  checkSymptomStringArray,
  checkMedicalConditionsArray,
  checkDifficultCoveringExpensesType,
  checkCurrentWorkSituationType,
  checkVaccineType,
  trueEqualsYes,
  resolveOneToFiveType,
  resolveOneToThreePlus,
  checkMedicationsTakenType,
  checkYesNoDoNotKnowType,
  checkNotAtAllToVeryMuchType,
  checkNotNullAndStringType,
  checkNotNullAndBoolType,
  checkNotNullNumberGreaterThanZero,
} = require("./checkTypes");

const GRAPHQL_ENDPOINT = process.env.API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT;

const data = require("../../../../../rawMockData");
const { ConsoleLogger } = require("@aws-amplify/core");

// const GRAPHQL_ENDPOINT = 'http://localhost:20002/graphql';
const AWS_REGION = process.env.AWS_REGION || "us-east-1";

// amplify mock function aggregateSurveyResults --event ./src/event.json

let properties = `
      level
      name
      stateAbbrev
      lat
      long
      covidCount
      longCovid
      topMedicalCondition
      covidSummary {
        beenInfected {
          yes 
          no
        }
        timesPositive {
          one 
          two 
          three
          threePlus
          doNotKnow
        }
        hospitalized {
          yes
          no
        }
        timesHospitalized {
          one
          two
          three
          threePlus
          doNotKnow
        }
        tested {
          yes
          no
        }
        positiveTest {
          yes
          no
          doNotKnow
        }
        symptomatic {
          yes
          no
        }
        symptomsPreventScale {
          notAtAll
          alittleBit
          somewhat
          quiteABit
          veryMuch
        }
        medicationsPrescribed {
          yes
          no
          doNotKnow
        }
        medicationsTakenCount {
          antiViral
          oralSteroids
          antiBiotics
          other
          doNotKnow
        }
      }
      recoverySummary {
        recovered {
          yes
          no
        }
        avglengthOfRecovery
      }
      vaccinationSummary {
        vaccinated {
          yes
          no
          doNotKnow
        }
        totalVaccineShots {
          one
          two
          three
          four
          five
          fivePlus
          doNotKnow
        }
        vaccineType {
          pfizer
          moderna
          janssen
          novavax
          other
          doNotKnow
        }
      }

      globalHealthSummary {
        healthRank {
          excellent
          veryGood
          good
          fair
          poor
        }
        physicalHealthRank {
          excellent
          veryGood
          good
          fair
          poor
        }
        carryPhysicalActivities {
          completely
          mostly
          moderately
          aLittle
          notAtAll
        }
        fatigueRank {
          none
          mild
          moderate
          severe
          verySevere
        }
        avgpainLevel
      }

      symptomSummary {
        symptomCounts {
          headache
          bodyMuscleAche
          feverChillsSweatsFlushing
          faintDizzyGoofy
          postExertionalMalaise
          weaknessInArmsLegs
          shortnessOfBreath
          cough
          palpitations
          swellingOfLegs
          indigestionNausea
          bladderProblem
          nerveProblems
          brainFog
          anxietyDepressionNightmares
          difficultyFallingAsleep
          sleepyDuringDaytime
          loudSnoring
          uncomfortableFeelingsInLegs
          skinRash
          lossOfChangeInSmell
          excessiveThirst
          excessiveDryMouth
          visionProblems
          hearingProblems
          fertilityProblemsForWomen
        }
        qualityOfLife {
          excellent
          veryGood
          good
          fair
          poor
        }
        mentalHealthRank {
          excellent
          veryGood
          good
          fair
          poor
        }
        socialSatisfactionRank {
          excellent
          veryGood
          good
          fair
          poor
        }
        carryOutSocialActivitiesRank {
          excellent
          veryGood
          good
          fair
          poor
        }
        anxietyInPastWeekRank {
          never
          rarely
          sometimes
          often
          always
        }
      }
      patientHealthQuestionnaireSummary {
        littleInterestThings {
          notAtAll
          severalDays
          moreThanHalfTheDays
          nearlyEveryDay
        }
        downDepressedHopeless {
          notAtAll
          severalDays
          moreThanHalfTheDays
          nearlyEveryDay
        }
        sleepProblems {
          notAtAll
          severalDays
          moreThanHalfTheDays
          nearlyEveryDay
        }
        tiredNoEnergy {
          notAtAll
          severalDays
          moreThanHalfTheDays
          nearlyEveryDay
        }
        dietProblems {
          notAtAll
          severalDays
          moreThanHalfTheDays
          nearlyEveryDay
        }
        badAboutSelf {
          notAtAll
          severalDays
          moreThanHalfTheDays
          nearlyEveryDay
        }
        concentrationProblems {
          notAtAll
          severalDays
          moreThanHalfTheDays
          nearlyEveryDay
        }
        slowOrRestless {
          notAtAll
          severalDays
          moreThanHalfTheDays
          nearlyEveryDay
        }
        avgPHQScore
      }

      medicalConditionsSummary {
        longCovid {
          yes
          no
          doNotKnow
        }
        newDiagnosisCounts {
          noNewDiagnosis
          heartProblems
          lungProblems
          bloodClotLung
          sleepApnea
          memory
          migraine
          stroke
          seizure
          kidneyProblems
          stomachProblems
          psychologicalProblems
          diabetes
          autoImmuneDiseases
          mecfs
          other
          notSure
        }
      }
      socialSummary {
        hasMedicalInsurance {
          yes
          no
        }
        difficultCoveringExpenses {
          veryDifficult
          somewhatDifficult
          notAtAllDifficult
          doNotKnow
          preferNotToAnswer
        }
        currentWorkSituation {
          atOffice
          hybrid
          remote
          remoteAndParenting
          onJobLeave
          unemployed
          retired
          disability
          student
          doNotKnow
          preferNotToAnswer
        }
      }
      totalFullEntries
`;

const updateQuery =
  `
  mutation UPDATE_MAP_DATA($input: UpdateMapDataInput!) {
    updateMapData(input: $input) {
      ` +
  properties +
  `
    }
  }
`;

const query =
  `
  mutation CREATE_MAP_DATA($input: CreateMapDataInput!) {
    createMapData(input: $input) {
      ` +
  properties +
  `
    }
  }
`;

const deleteQuery = `
mutation MyMutation {
  deleteMapData(input: {level: "county", lat: 13.5, long: -54.3}) {
    id
  }
}
`;

const mockCredentials = {
  accessKeyId: "ASIAVJKIAM-AuthRole",
  secretAccessKey: "fake",
};
const credentials = process.env.AWS_EXECUTION_ENV.endsWith("mock")
  ? mockCredentials
  : defaultProvider();

const NullJSONData = {
  age: {
    ranges: ["1-13", "13-25", "25-60", "60+"],
    values: [0, 0, 0, 0],
  },
  race: {
    ranges: ["White", "Black", "Asian", "Native", "Hispanic", "Other", "None"],
    values: [0, 0, 0, 0, 0, 0, 0],
  },
  sex: {
    ranges: ["Male", "Female", "Other"],
    values: [0, 0, 0],
  },
};

// each value is [count, average]
const avgNULLJSONData = {
  age: {
    ranges: ["1-13", "13-25", "25-60", "60+"],
    values: [
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
    ],
  },
  race: {
    ranges: ["White", "Black", "Asian", "Native", "Hispanic", "Other", "None"],
    values: [
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
    ],
  },
  sex: {
    ranges: ["Male", "Female", "Other"],
    values: [
      { count: 0, average: 0 },
      { count: 0, average: 0 },
      { count: 0, average: 0 },
    ],
  },
};

let variables = {
  input: {
    level: "county",
    name: "Orange Fruit County",
    stateAbbrev: "CA",
    lat: 13.54535353533555,
    long: -54.345353535635,
    covidCount: 0,
    longCovid: 0,
    topMedicalCondition: "",
    covidSummary: {
      beenInfected: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
      },
      timesPositive: {
        one: JSON.stringify(NullJSONData),
        two: JSON.stringify(NullJSONData),
        three: JSON.stringify(NullJSONData),
        threePlus: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
      },
      hospitalized: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
      },
      timesHospitalized: {
        one: JSON.stringify(NullJSONData),
        two: JSON.stringify(NullJSONData),
        three: JSON.stringify(NullJSONData),
        threePlus: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
      },
      tested: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
      },
      positiveTest: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
      },
      symptomatic: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
      },
      symptomsPreventScale: {
        notAtAll: JSON.stringify(NullJSONData),
        alittleBit: JSON.stringify(NullJSONData),
        somewhat: JSON.stringify(NullJSONData),
        quiteABit: JSON.stringify(NullJSONData),
        veryMuch: JSON.stringify(NullJSONData),
      },
      medicationsPrescribed: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
      },
      medicationsTakenCount: {
        antiViral: JSON.stringify(NullJSONData),
        oralSteroids: JSON.stringify(NullJSONData),
        antiBiotics: JSON.stringify(NullJSONData),
        other: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
      },
    },
    recoverySummary: {
      recovered: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
      },
      avglengthOfRecovery: JSON.stringify(avgNULLJSONData),
    },

    vaccinationSummary: {
      vaccinated: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
      },
      totalVaccineShots: {
        one: JSON.stringify(NullJSONData),
        two: JSON.stringify(NullJSONData),
        three: JSON.stringify(NullJSONData),
        four: JSON.stringify(NullJSONData),
        five: JSON.stringify(NullJSONData),
        fivePlus: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
      },
      vaccineType: {
        pfizer: JSON.stringify(NullJSONData),
        moderna: JSON.stringify(NullJSONData),
        janssen: JSON.stringify(NullJSONData),
        novavax: JSON.stringify(NullJSONData),
        other: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
      },
    },

    globalHealthSummary: {
      healthRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData),
      },
      physicalHealthRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData),
      },
      carryPhysicalActivities: {
        completely: JSON.stringify(NullJSONData),
        mostly: JSON.stringify(NullJSONData),
        moderately: JSON.stringify(NullJSONData),
        aLittle: JSON.stringify(NullJSONData),
        notAtAll: JSON.stringify(NullJSONData),
      },
      fatigueRank: {
        none: JSON.stringify(NullJSONData),
        mild: JSON.stringify(NullJSONData),
        moderate: JSON.stringify(NullJSONData),
        severe: JSON.stringify(NullJSONData),
        verySevere: JSON.stringify(NullJSONData),
      },
      avgpainLevel: JSON.stringify(avgNULLJSONData),
    },

    symptomSummary: {
      symptomCounts: {
        headache: JSON.stringify(NullJSONData),
        bodyMuscleAche: JSON.stringify(NullJSONData),
        feverChillsSweatsFlushing: JSON.stringify(NullJSONData),
        faintDizzyGoofy: JSON.stringify(NullJSONData),
        postExertionalMalaise: JSON.stringify(NullJSONData),
        weaknessInArmsLegs: JSON.stringify(NullJSONData),
        shortnessOfBreath: JSON.stringify(NullJSONData),
        cough: JSON.stringify(NullJSONData),
        palpitations: JSON.stringify(NullJSONData),
        swellingOfLegs: JSON.stringify(NullJSONData),
        indigestionNausea: JSON.stringify(NullJSONData),
        bladderProblem: JSON.stringify(NullJSONData),
        nerveProblems: JSON.stringify(NullJSONData),
        brainFog: JSON.stringify(NullJSONData),
        anxietyDepressionNightmares: JSON.stringify(NullJSONData),
        difficultyFallingAsleep: JSON.stringify(NullJSONData),
        sleepyDuringDaytime: JSON.stringify(NullJSONData),
        loudSnoring: JSON.stringify(NullJSONData),
        uncomfortableFeelingsInLegs: JSON.stringify(NullJSONData),
        skinRash: JSON.stringify(NullJSONData),
        lossOfChangeInSmell: JSON.stringify(NullJSONData),
        excessiveThirst: JSON.stringify(NullJSONData),
        excessiveDryMouth: JSON.stringify(NullJSONData),
        visionProblems: JSON.stringify(NullJSONData),
        hearingProblems: JSON.stringify(NullJSONData),
        fertilityProblemsForWomen: JSON.stringify(NullJSONData),
      },
      qualityOfLife: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData),
      },
      mentalHealthRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData),
      },
      socialSatisfactionRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData),
      },
      carryOutSocialActivitiesRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData),
      },
      anxietyInPastWeekRank: {
        never: JSON.stringify(NullJSONData),
        rarely: JSON.stringify(NullJSONData),
        sometimes: JSON.stringify(NullJSONData),
        often: JSON.stringify(NullJSONData),
        always: JSON.stringify(NullJSONData),
      },
    },

    patientHealthQuestionnaireSummary: {
      littleInterestThings: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfTheDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData),
      },
      downDepressedHopeless: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfTheDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData),
      },
      sleepProblems: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfTheDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData),
      },
      tiredNoEnergy: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfTheDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData),
      },
      dietProblems: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfTheDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData),
      },
      badAboutSelf: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfTheDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData),
      },
      concentrationProblems: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfTheDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData),
      },
      slowOrRestless: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfTheDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData),
      },
      avgPHQScore: JSON.stringify(avgNULLJSONData),
    },
    medicalConditionsSummary: {
      longCovid: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
      },
      newDiagnosisCounts: {
        noNewDiagnosis: JSON.stringify(NullJSONData),
        heartProblems: JSON.stringify(NullJSONData),
        lungProblems: JSON.stringify(NullJSONData),
        bloodClotLung: JSON.stringify(NullJSONData),
        sleepApnea: JSON.stringify(NullJSONData),
        memory: JSON.stringify(NullJSONData),
        migraine: JSON.stringify(NullJSONData),
        stroke: JSON.stringify(NullJSONData),
        seizure: JSON.stringify(NullJSONData),
        kidneyProblems: JSON.stringify(NullJSONData),
        stomachProblems: JSON.stringify(NullJSONData),
        psychologicalProblems: JSON.stringify(NullJSONData),
        diabetes: JSON.stringify(NullJSONData),
        autoImmuneDiseases: JSON.stringify(NullJSONData),
        mecfs: JSON.stringify(NullJSONData),
        other: JSON.stringify(NullJSONData),
        notSure: JSON.stringify(NullJSONData),
      },
    },
    socialSummary: {
      hasMedicalInsurance: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
      },
      difficultCoveringExpenses: {
        veryDifficult: JSON.stringify(NullJSONData),
        somewhatDifficult: JSON.stringify(NullJSONData),
        notAtAllDifficult: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
        preferNotToAnswer: JSON.stringify(NullJSONData),
      },
      currentWorkSituation: {
        atOffice: JSON.stringify(NullJSONData),
        hybrid: JSON.stringify(NullJSONData),
        remote: JSON.stringify(NullJSONData),
        remoteAndParenting: JSON.stringify(NullJSONData),
        onJobLeave: JSON.stringify(NullJSONData),
        unemployed: JSON.stringify(NullJSONData),
        retired: JSON.stringify(NullJSONData),
        disability: JSON.stringify(NullJSONData),
        student: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData),
        preferNotToAnswer: JSON.stringify(NullJSONData),
      },
    },
    totalFullEntries: 0,
  },
};

const makeRequest = async (query, variables) => {
  const endpoint = new URL(GRAPHQL_ENDPOINT);
  const signer = new SignatureV4({
    credentials: credentials,
    region: AWS_REGION,
    service: "appsync",
    sha256: Sha256,
  });

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body:
      variables != null
        ? JSON.stringify({ query, variables })
        : JSON.stringify({ query }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);
  return request;
};

const getMapData = async () => {
  const listMapDataQuery = `
  query MyQuery {
    listMapData {
      items {
        id
        lat
        level
        long
      }
    }
  }
  `;
  let request = await makeRequest(listMapDataQuery);

  try {
    let response = await fetch(request);
    return response.json();
  } catch (error) {
    console.log(error.message);
    return "error";
  }
};

const deleteMapData = async (level, lat, long) => {
  const deleteQuery = `
  mutation DELETEMAPDATA($input : DeleteMapDataInput!) {
    deleteMapData(input: $input) {
      id
    }
  }
  `;
  const deleteVariables = {
    input: { level, lat, long },
  };

  let request = await makeRequest(deleteQuery, deleteVariables);

  try {
    let response = await fetch(request);
    // console.log(await response.json());
  } catch (error) {
    console.log(error.message);
  }
};

const deleteAllMapData = async () => {
  let load = await getMapData();

  while (load.data.listMapData.items.length > 0) {
    for (const mapData of load.data.listMapData.items) {
      await deleteMapData(mapData.level, mapData.lat, mapData.long);
    }

    load = await getMapData();
  }
};

const populate = async () => {
  await deleteAllMapData();
  for (const county of data.getData()) {
    variables.input.level = county.level;
    variables.input.name = county.name;
    variables.input.stateAbbrev = county.stateAbbrev;
    variables.input.lat = county.lat;
    variables.input.long = county.long;

    const endpoint = new URL(GRAPHQL_ENDPOINT);
    const signer = new SignatureV4({
      // credentials: defaultProvider(),
      credentials: credentials,
      region: AWS_REGION,
      service: "appsync",
      sha256: Sha256,
    });

    const requestToBeSigned = new HttpRequest({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        host: endpoint.host,
      },
      hostname: endpoint.host,
      body: JSON.stringify({ query, variables }),
      path: endpoint.pathname,
    });

    const signed = await signer.sign(requestToBeSigned);
    const request = new Request(endpoint, signed);

    let body;
    let response;

    try {
      response = await fetch(request);
      body = await response.json();
      console.log(body);
      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 500;
      body = {
        errors: [
          {
            message: error.message,
          },
        ],
      };
      console.log(body);
    }
  }
};

const testGetByID = async () => {
  console.log(await getID("county", "Webster", "NE"));
  console.log(await getID("state", "Florida", null));
};

const queryString = properties;

const getID = async (level, name, stateAbbrev) => {
  let query = null;

  if (level === "county") {
    query = `
    query MyQuery {
      mapDataByLevelNameState(
        level: "${level}"
        nameStateAbbrev: {eq: {name: "${name}", stateAbbrev: "${stateAbbrev}"}}
      ) {
        items {
          id
          name
          stateAbbrev
          ${queryString}
        }

      }
    }
    `;
  } else if (level === "state") {
    query = `
  query MyQuery {
    mapDataByStateAbbrev(level: "state", filter: {name: {eq: "${name}"}}) {
      items {
        id
        name
        stateAbbrev
        ${queryString}
      }
    }
  }
  `;
  }
  let request = await makeRequest(query);

  try {
    let response = await fetch(request);
    let load = await response.json();
    console.log("RESPONSE: ", load);
    if (level === "county") {
      return load.data.mapDataByLevelNameState.items;
    } else if (level === "state") {
      // return load.data.mapDataByStateAbbrev.items
      return load.data.mapDataByStateAbbrev.items;
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const updateMapData = async (county, state) => {
  const endpoint = new URL(GRAPHQL_ENDPOINT);
  const signer = new SignatureV4({
    // credentials: defaultProvider(),
    credentials: credentials,
    region: AWS_REGION,
    service: "appsync",
    sha256: Sha256,
  });

  const query = updateQuery;
  let body;
  let response;

  if (county !== null) {
    let variables = { input: county };

    let requestToBeSigned = new HttpRequest({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        host: endpoint.host,
      },
      hostname: endpoint.host,
      body: JSON.stringify({ query, variables }),
      path: endpoint.pathname,
    });

    let signed = await signer.sign(requestToBeSigned);
    let request = new Request(endpoint, signed);

    try {
      response = await fetch(request);
      body = await response.json();
      console.log(body);

      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 500;
      body = {
        errors: [
          {
            message: error.message,
          },
        ],
      };
      console.log(body);
    }
  }

  variables = { input: state };

  requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query, variables }),
    path: endpoint.pathname,
  });

  signed = await signer.sign(requestToBeSigned);
  request = new Request(endpoint, signed);

  try {
    response = await fetch(request);
    body = await response.json();
    console.log(body);

    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message,
        },
      ],
    };
    console.log(body);
  }
};

const getStateAndCountyInfo = async (eventInput) => {
  // const { county, state } = eventInput;

  const { location } = eventInput;

  const { county, state, stateAbbrev } = location;

  const stateInfo = await getID("state", state, null);
  const countyInfo = await getID("county", county, stateAbbrev);

  return {
    county: countyInfo ? countyInfo[0] : null,
    state: stateInfo[0],
  };
};

const isObject = (variable) => {
  //https://bobbyhadz.com/blog/javascript-check-if-value-is-object
  return (
    typeof variable === "object" &&
    variable !== null &&
    !Array.isArray(variable)
  );
};

const parse = (object) => {
  for (let property in object) {
    if (isObject(object[property])) {
      for (prop in object[property]) {
        if (isObject(object[property][prop])) {
          for (p in object[property][prop]) {
            object[property][prop][p] = JSON.parse(object[property][prop][p]);
          }
        } else {
          object[property][prop] = JSON.parse(object[property][prop]);
        }
      }
    }
  }
};

const stringify = (object) => {
  for (let property in object) {
    if (isObject(object[property])) {
      if ("race" in object[property]) {
        object[property] = JSON.stringify(object[property]);
      } else {
        stringify(object[property]);
      }
    }
  }
};

const stringifyAverages = (object) => {};

const findMatchingIndex = (element, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === element.toLowerCase()) {
      return i;
    }
  }
  return -1;
};

const findHardCodedAgeRangeIndex = (age) => {
  if (age <= 13) {
    return 0;
  } else if (age <= 25) {
    return 1;
  } else if (age <= 60) {
    return 2;
  } else {
    return 3;
  }
};

const aggregatePercentageCustomBasedOnCondition = (
  indexes,
  total,
  property,
  condition,
  customAdd
) => {
  let addOne = condition ? customAdd : 0;

  let { raceIndex, ageIndex, sexIndex } = indexes;

  let { raceTotal, ageTotal, sexTotal } = total;

  property.race.values[raceIndex] = parseFloat(
    (property.race.values[raceIndex] * raceTotal + addOne) / (raceTotal + 1)
  );
  property.age.values[ageIndex] = parseFloat(
    (property.age.values[ageIndex] * ageTotal + addOne) / (ageTotal + 1)
  );
  property.sex.values[sexIndex] = parseFloat(
    (property.age.values[sexIndex] * sexTotal + addOne) / (sexTotal + 1)
  );
};

const addCustomToTallyBasedOnCondition = (
  indexes,
  property,
  condition,
  customAdd
) => {
  let { raceIndex, ageIndex, sexIndex } = indexes;
  let addOne = condition ? customAdd : 0;
  property.race.values[raceIndex] += addOne;
  property.age.values[ageIndex] += addOne;
  property.sex.values[sexIndex] += addOne;
};

const updateCovidSummary = (eventInput, county, state, indexes) => {
  let { covidResults } = eventInput;
  let data;
  if (county !== null) {
    data = {
      county: {
        covidSummary: county.covidSummary,
      },
      state: {
        covidSummary: state.covidSummary,
      },
    };
  } else {
    data = {
      state: {
        covidSummary: state.covidSummary,
      },
    };
  }

  for (const dat in data) {
    let {
      beenInfected,
      timesPositive,
      hospitalized,
      timesHospitalized,
      tested,
      positiveTest,
      symptomatic,
      symptomsPreventScale,
      medicationsPrescribed,
      medicationsTakenCount,
    } = data[dat].covidSummary;

    let objectsToUpdate = [];

    if (checkNotNullAndBoolType(covidResults.beenInfected)) {
      if (dat === "county") {
        county.covidCount += covidResults.beenInfected ? 1 : 0;
      } else {
        state.covidCount += covidResults.beenInfected ? 1 : 0;
      }

      let prop = trueEqualsYes(covidResults.beenInfected);
      objectsToUpdate.push(beenInfected[prop]);
    }

    if (checkNotNullNumberGreaterThanZero(covidResults.timesPositive)) {
      let prop = resolveOneToThreePlus(covidResults.timesPositive);
      objectsToUpdate.push(timesPositive[prop]);
    }

    if (checkNotNullAndBoolType(covidResults.hospitalized)) {
      let prop = trueEqualsYes(covidResults.hospitalized);
      objectsToUpdate.push(hospitalized[prop]);
    }

    if (checkNotNullNumberGreaterThanZero(covidResults.timesHospitalized)) {
      let prop = resolveOneToThreePlus(covidResults.timesHospitalized);
      objectsToUpdate.push(timesHospitalized[prop]);
    }

    if (checkNotNullAndBoolType(covidResults.tested)) {
      let prop = trueEqualsYes(covidResults.tested);
      objectsToUpdate.push(tested[prop]);
    }

    if (
      checkNotNullAndStringType(covidResults.positiveTest) &&
      checkYesNoDoNotKnowType(covidResults.positiveTest)
    ) {
      objectsToUpdate.push(positiveTest[covidResults.positiveTest]);
    }

    if (checkNotNullAndBoolType(covidResults.symptomatic)) {
      let prop = trueEqualsYes(covidResults.symptomatic);
      objectsToUpdate.push(symptomatic[prop]);
    }

    if (
      checkNotNullAndStringType(covidResults.symptomsPreventScale) &&
      checkNotAtAllToVeryMuchType(covidResults.symptomsPreventScale)
    ) {
      objectsToUpdate.push(
        symptomsPreventScale[covidResults.symptomsPreventScale]
      );
    }

    if (
      checkNotNullAndStringType(covidResults.medicationsPrescribed) &&
      checkYesNoDoNotKnowType(covidResults.medicationsPrescribed)
    ) {
      objectsToUpdate.push(
        medicationsPrescribed[covidResults.medicationsPrescribed]
      );
    }

    if (
      checkNotNullAndStringType(covidResults.medicationsTaken) &&
      checkMedicationsTakenType(covidResults.medicationsTaken)
    ) {
      objectsToUpdate.push(
        medicationsTakenCount[covidResults.medicationsTaken]
      );
    }
    for (const obj of objectsToUpdate) {
      addCustomToTallyBasedOnCondition(indexes, obj, true, 1);
    }
  }
};

const updateRecoverySummary = (eventInput, county, state, indexes) => {
  let { recoveryResults } = eventInput;
  let data;
  if (county !== null) {
    data = {
      county: {
        recoverySummary: county.recoverySummary,
      },
      state: {
        recoverySummary: state.recoverySummary,
      },
    };
  } else {
    data = {
      state: {
        recoverySummary: state.recoverySummary,
      },
    };
  }

  for (const dat in data) {
    let { recovered, avglengthOfRecovery } = data[dat].recoverySummary;

    if (checkNotNullAndBoolType(recoveryResults.recovered)) {
      let prop = trueEqualsYes(recoveryResults.recovered);
      addCustomToTallyBasedOnCondition(indexes, recovered[prop], true, 1);
    }

    if (checkNotNullNumberGreaterThanZero(recoveryResults.lengthOfRecovery)) {
      addAverage(
        indexes,
        avglengthOfRecovery,
        recoveryResults.lengthOfRecovery
      );
    }
  }
};

const addAverage = (indexes, property, numToAdd) => {
  const { raceIndex, sexIndex, ageIndex } = indexes;
  property.race.values[raceIndex].average = parseFloat(
    (property.race.values[raceIndex].average *
      property.race.values[raceIndex].count +
      numToAdd) /
      (property.race.values[raceIndex].count + 1)
  );
  property.race.values[raceIndex].count += 1;

  property.sex.values[sexIndex].average = parseFloat(
    (property.sex.values[sexIndex].average *
      property.sex.values[sexIndex].count +
      numToAdd) /
      (property.sex.values[sexIndex].count + 1)
  );
  property.sex.values[sexIndex].count += 1;

  property.age.values[ageIndex].average = parseFloat(
    (property.age.values[ageIndex].average *
      property.age.values[ageIndex].count +
      numToAdd) /
      (property.age.values[ageIndex].count + 1)
  );
  property.age.values[ageIndex].count += 1;
};

const updateVaccinationSummary = (eventInput, county, state, indexes) => {
  let { vaccinationResults } = eventInput;
  let data;
  if (county !== null) {
    data = {
      county: {
        vaccinationSummary: county.vaccinationSummary,
      },
      state: {
        vaccinationSummary: state.vaccinationSummary,
      },
    };
  } else {
    data = {
      state: {
        vaccinationSummary: state.vaccinationSummary,
      },
    };
  }

  for (const dat in data) {
    let { vaccinated, totalVaccineShots, vaccineType } =
      data[dat].vaccinationSummary;

    let objects = [];
    if (
      checkNotNullAndStringType(vaccinationResults.vaccinated) &&
      checkYesNoDoNotKnowType(vaccinationResults.vaccinated)
    ) {
      objects.push(vaccinated[vaccinationResults.vaccinated]);
    }

    if (
      checkNotNullNumberGreaterThanZero(vaccinationResults.totalVaccineShots)
    ) {
      let prop = resolveOneToFiveType(vaccinationResults.totalVaccineShots);
      objects.push(totalVaccineShots[prop]);
    }
    if (
      checkNotNullAndStringType(vaccinationResults.vaccineType) &&
      checkVaccineType(vaccinationResults.vaccineType)
    ) {
      objects.push(vaccineType[vaccinationResults.vaccineType]);
    }
    for (const obj of objects) {
      addCustomToTallyBasedOnCondition(indexes, obj, true, 1);
    }
  }
};

const updateGlobalHealthSummary = (eventInput, county, state, indexes) => {
  let { globalHealthResults } = eventInput;
  let data;
  if (county !== null) {
    data = {
      county: {
        globalHealthSummary: county.globalHealthSummary,
      },
      state: {
        globalHealthSummary: state.globalHealthSummary,
      },
    };
  } else {
    data = {
      state: {
        globalHealthSummary: state.globalHealthSummary,
      },
    };
  }

  for (const dat in data) {
    let {
      healthRank,
      physicalHealthRank,
      carryPhysicalActivities,
      fatigueRank,
      avgpainLevel,
    } = data[dat].globalHealthSummary;

    let objects = [];

    if (
      checkNotNullAndStringType(globalHealthResults.healthRank) &&
      checkExcellentToPoor(globalHealthResults.healthRank)
    ) {
      objects.push(healthRank[globalHealthResults.healthRank]);
    }

    if (
      checkNotNullAndStringType(globalHealthResults.physicalHealthRank) &&
      checkExcellentToPoor(globalHealthResults.physicalHealthRank)
    ) {
      objects.push(physicalHealthRank[globalHealthResults.physicalHealthRank]);
    }

    if (
      checkNotNullAndStringType(globalHealthResults.carryPhysicalActivities) &&
      checkCompletelyToNotAtAll(globalHealthResults.carryPhysicalActivities)
    ) {
      objects.push(
        carryPhysicalActivities[globalHealthResults.carryPhysicalActivities]
      );
    }

    if (
      checkNotNullAndStringType(globalHealthResults.fatigueRank) &&
      checkNoneToVerySevere(globalHealthResults.fatigueRank)
    ) {
      objects.push(fatigueRank[globalHealthResults.fatigueRank]);
    }

    if (checkIsNumAndBetweenOneAndTen(globalHealthResults.painLevel)) {
      addAverage(indexes, avgpainLevel, globalHealthResults.painLevel);
    }

    for (const obj of objects) {
      addCustomToTallyBasedOnCondition(indexes, obj, true, 1);
    }
  }
};

const findMostFrequentDiagnosis = (diagnosisCounts) => {
  let mostfreq = "more data needed";
  let num = 0;
  for (const diag in diagnosisCounts) {
    let arr = diagnosisCounts[diag].race.values;
    const sum = arr.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    if (sum > num) {
      num = sum;
      mostfreq = diag;
    }
  }
  return mostfreq;
};

const updateSymptomSummary = (eventInput, county, state, indexes) => {
  let { symptomResults } = eventInput;

  let data;
  if (county !== null) {
    data = {
      county: {
        symptomSummary: county.symptomSummary,
      },
      state: {
        symptomSummary: state.symptomSummary,
      },
    };
  } else {
    data = {
      state: {
        symptomSummary: state.symptomSummary,
      },
    };
  }

  for (const dat in data) {
    let { symptomCounts } = data[dat].symptomSummary;
    if (checkSymptomStringArray(symptomResults.symptoms)) {
      symptomResults.symptoms.forEach((symp) => {
        addCustomToTallyBasedOnCondition(indexes, symptomCounts[symp], true, 1);
      });
    }
    let {
      qualityOfLife,
      mentalHealthRank,
      socialSatisfactionRank,
      carryOutSocialActivitiesRank,
      anxietyInPastWeekRank,
    } = data[dat].symptomSummary;

    let objects = [];
    if (
      checkNotNullAndStringType(symptomResults.qualityOfLifeRank) &&
      checkExcellentToPoor(symptomResults.qualityOfLifeRank)
    ) {
      objects.push(qualityOfLife[symptomResults.qualityOfLifeRank]);
    }

    if (
      checkNotNullAndStringType(symptomResults.mentalHealthRank) &&
      checkExcellentToPoor(symptomResults.mentalHealthRank)
    ) {
      objects.push(mentalHealthRank[symptomResults.mentalHealthRank]);
    }

    if (
      checkNotNullAndStringType(symptomResults.socialSatisfactionRank) &&
      checkExcellentToPoor(symptomResults.socialSatisfactionRank)
    ) {
      objects.push(
        socialSatisfactionRank[symptomResults.socialSatisfactionRank]
      );
    }

    if (
      checkNotNullAndStringType(symptomResults.carryOutSocialActivitiesRank) &&
      checkExcellentToPoor(symptomResults.carryOutSocialActivitiesRank)
    ) {
      objects.push(
        carryOutSocialActivitiesRank[
          symptomResults.carryOutSocialActivitiesRank
        ]
      );
    }

    if (
      checkNotNullAndStringType(symptomResults.anxietyInPastWeekRank) &&
      checkNeverToAlways(symptomResults.anxietyInPastWeekRank)
    ) {
      objects.push(anxietyInPastWeekRank[symptomResults.anxietyInPastWeekRank]);
    }

    for (const obj of objects) {
      addCustomToTallyBasedOnCondition(indexes, obj, true, 1);
    }
  }
};

const updateMedicalConditionsSummary = (eventInput, county, state, indexes) => {
  let { symptomResults } = eventInput;
  let data;
  if (county !== null) {
    data = {
      county: {
        medicalConditionsSummary: county.medicalConditionsSummary,
      },
      state: {
        medicalConditionsSummary: state.medicalConditionsSummary,
      },
    };
  } else {
    data = {
      state: {
        medicalConditionsSummary: state.medicalConditionsSummary,
      },
    };
  }

  for (const dat in data) {
    let { longCovid, newDiagnosisCounts } = data[dat].medicalConditionsSummary;

    if (checkMedicalConditionsArray(symptomResults.medicalConditions)) {
      symptomResults.medicalConditions.forEach((cond) => {
        addCustomToTallyBasedOnCondition(
          indexes,
          newDiagnosisCounts[cond],
          true,
          1
        );
      });
    }

    if (dat === "county") {
      county.topMedicalCondition =
        findMostFrequentDiagnosis(newDiagnosisCounts);
    } else {
      state.topMedicalCondition = findMostFrequentDiagnosis(newDiagnosisCounts);
    }

    if (
      checkNotNullAndStringType(symptomResults.hasLongCovid) &&
      checkYesNoDoNotKnowType(symptomResults.hasLongCovid)
    ) {
      console.log("data", dat);
      if (dat === "county") {
        county.longCovid += symptomResults.hasLongCovid === "yes" ? 1 : 0;
      } else {
        state.longCovid += symptomResults.hasLongCovid === "yes" ? 1 : 0;
      }

      addCustomToTallyBasedOnCondition(
        indexes,
        longCovid[symptomResults.hasLongCovid],
        true,
        1
      );
    }
  }
};

const updatePatientHealthSummary = (eventInput, county, state, indexes) => {
  let { patientHealthResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;
  let data;
  if (county !== null) {
    data = {
      county: {
        patientHealthQuestionnaireSummary:
          county.patientHealthQuestionnaireSummary,
      },
      state: {
        patientHealthQuestionnaireSummary:
          state.patientHealthQuestionnaireSummary,
      },
    };
  } else {
    data = {
      state: {
        patientHealthQuestionnaireSummary:
          state.patientHealthQuestionnaireSummary,
      },
    };
  }
  for (const dat in data) {
    let {
      littleInterestThings,
      downDepressedHopeless,
      sleepProblems,
      tiredNoEnergy,
      dietProblems,
      badAboutSelf,
      concentrationProblems,
      slowOrRestless,
      avgPHQScore,
    } = data[dat].patientHealthQuestionnaireSummary;

    for (const health in patientHealthResults.generalHealthResults) {
      let curr = patientHealthResults.generalHealthResults[health];
      if (
        checkNotNullAndStringType(curr) &&
        checkNotAtAllToNearlyEveryDay(curr)
      ) {
        let healthQuestion;
        switch (health) {
          case "Little interest or pleasure in doing things?":
            healthQuestion = littleInterestThings;
            break;
          case "Feeling down, depressed, or hopeless?":
            healthQuestion = downDepressedHopeless;
            break;
          case "Trouble falling or staying asleep, or sleeping too much?":
            healthQuestion = sleepProblems;
            break;
          case "Feeling tired or having little energy?":
            healthQuestion = tiredNoEnergy;
            break;
          case "Poor appetite or overeating?":
            healthQuestion = dietProblems;
            break;
          case "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?":
            healthQuestion = badAboutSelf;
            break;
          case "Trouble concentrating on things, such as reading the newspaper or watching television?":
            healthQuestion = concentrationProblems;
            break;
          case "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?":
            healthQuestion = slowOrRestless;
            break;
        }
        // console.log(healthQuestion[curr]);
        // console.log(generalHealthResults[healthQuestion]);

        addCustomToTallyBasedOnCondition(
          indexes,
          healthQuestion[curr],
          true,
          1
        );
      }
    }

    if (checkNotNullNumberGreaterThanZero(patientHealthResults.totalScore)) {
      addAverage(indexes, avgPHQScore, patientHealthResults.totalScore);
    }
  }
};

const updateSocialSummary = (eventInput, county, state, indexes) => {
  let { socialDeterminantsResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;

  let data;
  if (county !== null) {
    data = {
      county: {
        socialSummary: county.socialSummary,
      },
      state: {
        socialSummary: state.socialSummary,
      },
    };
  } else {
    data = {
      state: {
        socialSummary: state.socialSummary,
      },
    };
  }

  for (const dat in data) {
    let {
      hasMedicalInsurance,
      difficultCoveringExpenses,
      currentWorkSituation,
    } = data[dat].socialSummary;

    if (
      checkNotNullAndBoolType(socialDeterminantsResults.hasMedicalInsurance)
    ) {
      addCustomToTallyBasedOnCondition(
        indexes,
        hasMedicalInsurance[
          trueEqualsYes(socialDeterminantsResults.hasMedicalInsurance)
        ],
        true,
        1
      );
    }

    if (
      checkDifficultCoveringExpensesType(
        socialDeterminantsResults.difficultCoveringExpenses
      )
    ) {
      addCustomToTallyBasedOnCondition(
        indexes,
        difficultCoveringExpenses[
          socialDeterminantsResults.difficultCoveringExpenses
        ],
        true,
        1
      );
    }

    if (
      checkCurrentWorkSituationType(
        socialDeterminantsResults.currentWorkSituation
      )
    ) {
      addCustomToTallyBasedOnCondition(
        indexes,
        currentWorkSituation[socialDeterminantsResults.currentWorkSituation],
        true,
        1
      );
    }
  }
};
const incrementTotalFullEntries = (county, state) => {
  if (county !== null) county.totalFullEntries += 1;
  state.totalFullEntries += 1;
};

const aggregateSurveyResults = async (eventInput) => {
  eventInput.age = parseInt(eventInput.age);
  // await deleteAllMapData();
  let { county, state } = await getStateAndCountyInfo(eventInput);
  let { location } = eventInput;

  if (county !== null) {
    variables.input.level = "county";
    variables.input.name = location.county;
    variables.input.stateAbbrev = location.stateAbbrev;
    variables.input.lat = location.countyLat;
    variables.input.long = location.countyLong;
    const endpoint = new URL(GRAPHQL_ENDPOINT);
    const signer = new SignatureV4({
      // credentials: defaultProvider(),
      credentials: credentials,
      region: AWS_REGION,
      service: "appsync",
      sha256: Sha256,
    });

    const requestToBeSigned = new HttpRequest({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        host: endpoint.host,
      },
      hostname: endpoint.host,
      body: JSON.stringify({ query, variables }),
      path: endpoint.pathname,
    });

    const signed = await signer.sign(requestToBeSigned);
    const request = new Request(endpoint, signed);
    let body;
    let response;

    try {
      response = await fetch(request);
      body = await response.json();

      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 500;
      body = {
        errors: [
          {
            message: error.message,
          },
        ],
      };
      console.log(body);
    }
  }

  if (state !== null) {
    variables.input.level = "state";
    variables.input.name = location.state;
    variables.input.stateAbbrev = location.stateAbbrev;
    variables.input.lat = location.stateLat;
    variables.input.long = location.stateLong;

    const endpoint = new URL(GRAPHQL_ENDPOINT);
    const signer = new SignatureV4({
      // credentials: defaultProvider(),
      credentials: credentials,
      region: AWS_REGION,
      service: "appsync",
      sha256: Sha256,
    });

    const requestToBeSigned = new HttpRequest({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        host: endpoint.host,
      },
      hostname: endpoint.host,
      body: JSON.stringify({ query, variables }),
      path: endpoint.pathname,
    });

    const signed = await signer.sign(requestToBeSigned);
    const request = new Request(endpoint, signed);
    let body;
    let response;

    try {
      response = await fetch(request);
      body = await response.json();

      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 500;
      body = {
        errors: [
          {
            message: error.message,
          },
        ],
      };
      console.log(body);
    }
  }

  if (!county || !state) {
    ({ county, state } = await getStateAndCountyInfo(eventInput));
  }

  parse(county);
  parse(state);

  let raceIndex = findMatchingIndex(
    eventInput.race,
    state.covidSummary.beenInfected.yes.race.ranges
  );
  let ageIndex = findHardCodedAgeRangeIndex(eventInput.age);
  let sexIndex = findMatchingIndex(
    eventInput.sex,
    state.covidSummary.beenInfected.yes.sex.ranges
  );

  let indexes = {
    raceIndex,
    ageIndex,
    sexIndex,
  };

  updateCovidSummary(eventInput, county, state, indexes);
  updateRecoverySummary(eventInput, county, state, indexes);
  updateVaccinationSummary(eventInput, county, state, indexes);
  updateGlobalHealthSummary(eventInput, county, state, indexes);
  updateSymptomSummary(eventInput, county, state, indexes);
  updateMedicalConditionsSummary(eventInput, county, state, indexes);
  updatePatientHealthSummary(eventInput, county, state, indexes);
  updateSocialSummary(eventInput, county, state, indexes);
  //increment at the last. updates require OLD count
  incrementTotalFullEntries(county, state);

  console.log("state", state);

  stringify(county);
  stringify(state);

  // //upload back to appsync, updated county/state
  await updateMapData(county, state);

  return { county, state };
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  let input = event.arguments.surveyResults;
  const { county, state } = await aggregateSurveyResults(input);

  // await populate();
  const statusCode = 200;
  const body = {
    message: `Successfully updated map data for survey submission ${event.arguments.surveyResults.id}`,
  };

  return {
    statusCode,
    body: body,
  };
  // return null;
};
