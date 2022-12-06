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
          dontKnow
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
          dontKnow
        }
        tested {
          yes
          no
        }
        positiveTest {
          yes
          no
          dontKnow
        }
        symptomatic {
          yes
          no
        }
        symptomsPreventScale {
          notAtAll
          aLittleBit
          somewhat
          quiteABit
          veryMuch
        }
        medicationsPrescribed {
          yes
          no
          dontKnow
        }
        medicationsTakenCount {
          antiViral
          oralSteroids
          antiBiotics
          other
          dontKnow
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
          dontKnow
        }
        totalVaccineShots {
          one
          two
          three
          four
          five
          fivePlus
          dontKnow
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
          problemsThinkingConcentrating
          problemsAnxietyDepressionStress
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
          #add to the statistic only for women
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
          excellent
          veryGood
          good
          fair
          poor
        }
      }
      patientHealthQuestionnaireSummary {
        littleInterestThings {
          notAtAll
          severalDays
          moreThanHalfOfDays
          nearlyEveryDay
        }
        downDepressedHopeless {
          notAtAll
          severalDays
          moreThanHalfOfDays
          nearlyEveryDay
        }
        sleepProblems {
          notAtAll
          severalDays
          moreThanHalfOfDays
          nearlyEveryDay
        }
        tiredNoEnergy {
          notAtAll
          severalDays
          moreThanHalfOfDays
          nearlyEveryDay
        }
        dietProblems {
          notAtAll
          severalDays
          moreThanHalfOfDays
          nearlyEveryDay
        }
        badAboutSelf {
          notAtAll
          severalDays
          moreThanHalfOfDays
          nearlyEveryDay
        }
        concentrationProblems {
          notAtAll
          severalDays
          moreThanHalfOfDays
          nearlyEveryDay
        }
        slowOrRestless {
          notAtAll
          severalDays
          moreThanHalfOfDays
          nearlyEveryDay
        }
        avgPHQScore
      }

      medicalConditionsSummary {
        longCovid {
          yes
          no
          dontKnow
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
          dontKnow
          preferNotToAnswer
        }
        currentWorkSituation {
          workingOutsideTheHome
          onLeaveFromAJobWorkingOutsideHome
          workingInsideHome
          lookingForWorkUnemployed
          retired
          disabled
          student
          dontKnow
          preferNotToAnswer
        }
      }
      totalFullEntries
`;

const updateQuery = `
  mutation UPDATE_MAP_DATA($input: UpdateMapDataInput!) {
    updateMapData(input: $input) {
      `+ properties + `
    }
  }
`;

const query = `
  mutation CREATE_MAP_DATA($input: CreateMapDataInput!) {
    createMapData(input: $input) {
      ` + properties + `
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

let variables = {
  input: {
    level: "county",
    name: "Orange Fruit County",
    stateAbbrev: "CA",
    lat: 13.54535353533555,
    long: -54.345353535635,
    covidSummary: {
      beenInfected: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData)
      },
      timesPositive: {
        one: JSON.stringify(NullJSONData),
        two: JSON.stringify(NullJSONData),
        three: JSON.stringify(NullJSONData),
        threePlus: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData)
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
        dontKnow: JSON.stringify(NullJSONData)
      },
      tested: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData)
      },
      positiveTest: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData)
      },
      symptomatic: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData)
      },
      symptomsPreventScale: {
        notAtAll: JSON.stringify(NullJSONData),
        aLittleBit: JSON.stringify(NullJSONData),
        somewhat: JSON.stringify(NullJSONData),
        quiteABit: JSON.stringify(NullJSONData),
        veryMuch: JSON.stringify(NullJSONData)
      },
      medicationsPrescribed: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData)
      },
      medicationsTakenCount: {
        antiViral: JSON.stringify(NullJSONData),
        oralSteroids: JSON.stringify(NullJSONData),
        antiBiotics: JSON.stringify(NullJSONData),
        other: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData),
      }
    }
    ,
    recoverySummary: {
      recovered: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData)
      },
      avglengthOfRecovery: JSON.stringify(NullJSONData)
    },

    vaccinationSummary: {
      vaccinated: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData)
      },
      totalVaccineShots: {
        one: JSON.stringify(NullJSONData),
        two: JSON.stringify(NullJSONData),
        three: JSON.stringify(NullJSONData),
        four: JSON.stringify(NullJSONData),
        five: JSON.stringify(NullJSONData),
        fivePlus: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData)
      },
      vaccineType: {
        pfizer: JSON.stringify(NullJSONData),
        moderna: JSON.stringify(NullJSONData),
        janssen: JSON.stringify(NullJSONData),
        novavax: JSON.stringify(NullJSONData),
        other: JSON.stringify(NullJSONData),
        doNotKnow: JSON.stringify(NullJSONData)
      }
    },

    globalHealthSummary: {
      healthRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData)
      },
      physicalHealthRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData)
      },
      carryPhysicalActivities: {
        completely: JSON.stringify(NullJSONData),
        mostly: JSON.stringify(NullJSONData),
        moderately: JSON.stringify(NullJSONData),
        aLittle: JSON.stringify(NullJSONData),
        notAtAll: JSON.stringify(NullJSONData)
      },
      fatigueRank: {
        none: JSON.stringify(NullJSONData),
        mild: JSON.stringify(NullJSONData),
        moderate: JSON.stringify(NullJSONData),
        severe: JSON.stringify(NullJSONData),
        verySevere: JSON.stringify(NullJSONData)
      },
      avgpainLevel: JSON.stringify(NullJSONData),
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
        problemsThinkingConcentrating: JSON.stringify(NullJSONData),
        problemsAnxietyDepressionStress: JSON.stringify(NullJSONData),
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
        poor: JSON.stringify(NullJSONData)
      },
      mentalHealthRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData)
      },
      socialSatisfactionRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData)
      },
      carryOutSocialActivitiesRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData)
      },
      anxietyInPastWeekRank: {
        excellent: JSON.stringify(NullJSONData),
        veryGood: JSON.stringify(NullJSONData),
        good: JSON.stringify(NullJSONData),
        fair: JSON.stringify(NullJSONData),
        poor: JSON.stringify(NullJSONData)
      }
    },

    patientHealthQuestionnaireSummary: {
      littleInterestThings: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfOfDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData)
      },
      downDepressedHopeless: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfOfDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData)
      },
      sleepProblems: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfOfDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData)
      },
      tiredNoEnergy: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfOfDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData)
      },
      dietProblems: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfOfDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData)
      },
      badAboutSelf: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfOfDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData)
      },
      concentrationProblems: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfOfDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData)
      },
      slowOrRestless: {
        notAtAll: JSON.stringify(NullJSONData),
        severalDays: JSON.stringify(NullJSONData),
        moreThanHalfOfDays: JSON.stringify(NullJSONData),
        nearlyEveryDay: JSON.stringify(NullJSONData),
      },
      avgPHQScore: JSON.stringify(NullJSONData),
    },
    medicalConditionsSummary: {
      longCovid: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData),
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
      }
    },
    socialSummary: {
      hasMedicalInsurance: {
        yes: JSON.stringify(NullJSONData),
        no: JSON.stringify(NullJSONData)
      },
      difficultCoveringExpenses: {
        veryDifficult: JSON.stringify(NullJSONData),
        somewhatDifficult: JSON.stringify(NullJSONData),
        notAtAllDifficult: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData),
        preferNotToAnswer: JSON.stringify(NullJSONData)
      },
      currentWorkSituation: {
        workingOutsideTheHome: JSON.stringify(NullJSONData),
        onLeaveFromAJobWorkingOutsideHome: JSON.stringify(NullJSONData),
        workingInsideHome: JSON.stringify(NullJSONData),
        lookingForWorkUnemployed: JSON.stringify(NullJSONData),
        retired: JSON.stringify(NullJSONData),
        disabled: JSON.stringify(NullJSONData),
        student: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData),
        preferNotToAnswer: JSON.stringify(NullJSONData),
      }
    },
    totalFullEntries: 0
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

    console.log(load);

    if (level === "county") {
      return load.data.mapDataByLevelNameState.items;
    } else if (level === "state") {
      // return load.data.mapDataByStateAbbrev.items
      return load.data.mapDataByStateAbbrev.items;
    }
  } catch (error) {
    console.log(error.message);
    return "error";
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

  body;
  response;

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
    county: countyInfo[0],
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

const findMatchingIndex = (element, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
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
  let data = {
    county: {
      covidSummary: county.covidSummary,
    },
    state: {
      covidSummary: state.covidSummary,
    },
  };

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
      medicationsTakenCount
    } = data[dat].covidSummary;

    if (covidResults.beenInfected != null) {
      let property = (covidResults.beenInfected) ? beenInfected.yes : beenInfected.no;
      addCustomToTallyBasedOnCondition(
        indexes,
        property,
        true,
        1
      );
    }

    if (covidResults.timesPositive != null) {
      let property;
      switch(covidResults.timesPositive) {
        case 0:
          property = timesPositive.dontKnow;
          break;
        case 1:
          property = timesPositive.one;
          break;
        case 2:
          property = timesPositive.two;
          break;
        case 3:
          property = timesPositive.three;
          break;
        default:
          property = timesPositive.threePlus
      }

      addCustomToTallyBasedOnCondition(
        indexes,
        property,
        true,
        1
      )

    }

    if (covidResults.hospitalized != null) {

      let property = (covidResults.hospitalized) ? hospitalized.yes : hospitalized.no;

      addCustomToTallyBasedOnCondition(
        indexes,
        property,
        true,
        1
      );

    }

    if (covidResults.timesHospitalized != null) {
      let property;
      switch(covidResults.timesHospitalized) {
        case 0:
          property = timesHospitalized.dontKnow;
          break;
        case 1:
          property = timesHospitalized.one;
          break;
        case 2:
          property = timesHospitalized.two;
          break;
        case 3:
          property = timesHospitalized.three;
          break;
        default:
          property = timesHospitalized.threePlus
      }
      addCustomToTallyBasedOnCondition(
        indexes,
        property,
        true,
        1
      );
    }

    if (covidResults.tested != null) {
      let property = (covidResults.tested) ? tested.yes : tested.no;

      addCustomToTallyBasedOnCondition(
        indexes,
        property,
        true,
        1
      );
    }

    if (covidResults.positiveTest != null) {
      let property;
      switch(covidResults.positiveTest) {
        case "yes" :
          property = positiveTest.yes;
        case "no" :
          property = positiveTest.no;
        case "doNotKnow" :
          property = positiveTest.doNotKnow;
      }

      addCustomToTallyBasedOnCondition(
        indexes,
        property,
        true,
        1
      );
    }

    if (covidResults.symptomatic != null) {
      let property = (covidResults.symptomatic) ? symptomatic.yes : symptomatic.no;
      addCustomToTallyBasedOnCondition(
        indexes,
        property,
        true,
        1
      );
    }

    if (covidResults.symptomsPreventScale != null) {

    }

    if (covidResults.medicationsPrescribed != null) {
      let property;
      switch(covidResults.medicationsPrescribed) {
        case "yes" :
          property = medicationsPrescribed.yes;
        case "no" :
          property = medicationsPrescribed.no;
        case "doNotKnow" :
          property = medicationsPrescribed.doNotKnow;
      }
      addCustomToTallyBasedOnCondition(
        indexes,
        property,
        true,
        1
      );
    }

    if (covidResults.medicationsTaken != null) {

    }



  }

  // console.log(county.covidSummary);
};

const updateRecoverySummary = (
  eventInput,
  popObject,
  county,
  state,
  indexes
) => {
  let { recoveryResults } = eventInput;
  let data = {
    county: {
      recoverySummary: county.recoverySummary,
      pop: popObject.countyPop,
    },
    state: {
      recoverySummary: state.recoverySummary,
      pop: popObject.statePop,
    },
  };

  for (const dat in data) {
    let { recoveryCount, avgRecoveryLength } = data[dat].recoverySummary;
    let pop = data[dat].pop;

    if (recoveryResults.recovered != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        recoveryCount,
        recoveryResults.recovered,
        1
      );
    }

    if (recoveryResults.daysToRecoverEst != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgRecoveryLength,
        true,
        recoveryResults.daysToRecoverEst
      );
    }
  }
};

const updateVaccinationSummary = (
  eventInput,
  popObject,
  county,
  state,
  indexes
) => {
  let { vaccinationResults } = eventInput;
  let data = {
    county: {
      vaccinationSummary: county.vaccinationSummary,
      pop: popObject.countyPop,
    },
    state: {
      vaccinationSummary: state.vaccinationSummary,
      pop: popObject.statePop,
    },
  };

  for (const dat in data) {
    let { percentVaccinated, avgNumOfVaccPerPerson, vaccineCount } =
      data[dat].vaccinationSummary;
    let pop = data[dat].pop;

    if (
      vaccinationResults.vaccinated != null &&
      vaccinationResults.vaccinated != 0
    ) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        percentVaccinated,
        vaccinationResults.vaccinated == 1,
        1
      );
    }

    if (
      vaccinationResults.totalVaccineShots != null &&
      vaccinationResults.totalVaccineShots != 0
    ) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgNumOfVaccPerPerson,
        true,
        vaccinationResults.totalVaccineShots
      );
    }

    if (vaccinationResults.vaccineType != null) {
      addCustomToTallyBasedOnCondition(
        indexes,
        vaccineCount[vaccinationResults.vaccineType],
        true,
        1
      );
    }
  }
};

const updateGlobalHealthSummary = (
  eventInput,
  popObject,
  county,
  state,
  indexes
) => {
  let { generalHealthResults } = eventInput;
  let data = {
    county: {
      globalHealthSummary: county.globalHealthSummary,
      pop: popObject.countyPop,
    },
    state: {
      globalHealthSummary: state.globalHealthSummary,
      pop: popObject.statePop,
    },
  };

  for (const dat in data) {
    let {
      avgGeneralHealth,
      avgPhysicalHealth,
      avgEverydayPhysicalCompetency,
      avgFatigue,
      avgPain,
    } = data[dat].globalHealthSummary;
    let pop = data[dat].pop;
    if (generalHealthResults.generalHealth != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgGeneralHealth,
        true,
        generalHealthResults.generalHealth
      );
    }

    if (generalHealthResults.physicalHealth != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgPhysicalHealth,
        true,
        generalHealthResults.physicalHealth
      );
    }

    if (generalHealthResults.everdayPhysicalCompetency != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgEverydayPhysicalCompetency,
        true,
        generalHealthResults.everdayPhysicalCompetency
      );
    }

    if (generalHealthResults.averageFatigue != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgFatigue,
        true,
        generalHealthResults.averageFatigue
      );
    }

    if (generalHealthResults.averagePain != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgPain,
        true,
        generalHealthResults.averagePain
      );
    }
  }
};

const updateSymptomSummary = (
  eventInput,
  popObject,
  county,
  state,
  indexes
) => {
  let { symptomResults } = eventInput;

  let data = {
    county: {
      symptomSummary: county.symptomSummary,
      pop: popObject.countyPop,
    },
    state: {
      symptomSummary: state.symptomSummary,
      pop: popObject.statePop,
    },
  };

  for (const dat in data) {
    let { symptomCounts } = data[dat].symptomSummary;
    let pop = data[dat].pop;

    symptomResults.symptoms.forEach((symp) => {
      addCustomToTallyBasedOnCondition(indexes, symptomCounts[symp], true, 1);
    });

    let {
      avgQualityOfLife,
      avgMentalHealth,
      avgSocialActivitesRelationships,
      avgSocialActivitiesCapacity,
      avgEmotionalProblems,
    } = data[dat].symptomSummary;

    if (symptomResults.qualityOfLife != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgQualityOfLife,
        true,
        symptomResults.qualityOfLife
      );
    }

    if (symptomResults.mentalHealth != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgMentalHealth,
        true,
        symptomResults.mentalHealth
      );
    }

    if (symptomResults.socialActivitiesRelationships != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgSocialActivitesRelationships,
        true,
        symptomResults.socialActivitiesRelationships
      );
    }

    if (symptomResults.socialActivitiesCapacity != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgSocialActivitiesCapacity,
        true,
        symptomResults.socialActivitiesCapacity
      );
    }

    if (symptomResults.emotionalProblems != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        avgEmotionalProblems,
        true,
        symptomResults.emotionalProblems
      );
    }
  }
};

const updateMedicalConditionsSummary = (
  eventInput,
  popObject,
  county,
  state,
  indexes
) => {
  let { medicalConditionsChanges } = eventInput;
  let data = {
    county: {
      medicalConditionsSummary: county.medicalConditionsSummary,
      pop: popObject.countyPop,
    },
    state: {
      medicalConditionsSummary: state.medicalConditionsSummary,
      pop: popObject.statePop,
    },
  };

  for (const dat in data) {
    let { percentHaveLongCovid, newDiagnosisCounts } =
      data[dat].medicalConditionsSummary;
    let pop = data[dat].pop;

    medicalConditionsChanges.newDiagnosis.forEach((diag) => {
      addCustomToTallyBasedOnCondition(
        indexes,
        newDiagnosisCounts[diag],
        true,
        1
      );
    });

    if (
      medicalConditionsChanges.longCovid != null &&
      medicalConditionsChanges.longCovid != 0
    ) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        percentHaveLongCovid,
        medicalConditionsChanges.longCovid === 1,
        1
      );
    }
  }
};

const updateSocialSummary = (eventInput, popObject, county, state, indexes) => {
  let { socialDeterminantsResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;

  let data = {
    county: {
      socialSummary: county.socialSummary,
      pop: popObject.countyPop,
    },
    state: {
      socialSummary: state.socialSummary,
      pop: popObject.statePop,
    },
  };

  for (const dat in data) {
    let {
      percentHaveMedicalInsurance,
      averageDifficultyCoveringExpenses,
      workingSituationCounts,
    } = data[dat].socialSummary;
    let pop = data[dat].pop;

    if (socialDeterminantsResults.hasMedicalInsurance != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        percentHaveMedicalInsurance,
        socialDeterminantsResults.hasMedicalInsurance,
        1
      );
    }

    if (socialDeterminantsResults.difficultCoveringExpenses != null) {
      aggregatePercentageCustomBasedOnCondition(
        indexes,
        pop,
        averageDifficultyCoveringExpenses,
        true,
        socialDeterminantsResults.difficultCoveringExpenses
      );
    }

    if (socialDeterminantsResults.currentWorkSituation != null) {
      let curr =
        workingSituationCounts[socialDeterminantsResults.currentWorkSituation];
      addCustomToTallyBasedOnCondition(indexes, curr, true, 1);
    }
  }
};

const updateGeneralHealthSummary = (eventInput, county, state, indexes) => {
  let { generalHealthResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;
};

const incrementTotalFullEntries = (county, state) => {
  county.totalFullEntries += 1;
  state.totalFullEntries += 1;
};

const incrementDemographics = (eventInput, county, state, indexes) => {
  const { ageIndex, raceIndex, sexIndex } = indexes;

  let { totalDemoCount } = county;
  // console.log(county);
  // const { totalDemoCount } = county;

  addCustomToTallyBasedOnCondition(indexes, totalDemoCount, true, 1);

  ({ totalDemoCount } = state);

  addCustomToTallyBasedOnCondition(indexes, totalDemoCount, true, 1);
};

const getDemoCount = (countyDemoCount, stateDemoCount, indexes) => {
  let { raceIndex, ageIndex, sexIndex } = indexes;
  let countyRacePop = countyDemoCount.race.values[raceIndex];
  let countyAgePop = countyDemoCount.race.values[ageIndex];
  let countySexPop = countyDemoCount.race.values[sexIndex];

  let stateRacePop = stateDemoCount.race.values[raceIndex];
  let stateAgePop = stateDemoCount.race.values[ageIndex];
  let stateSexPop = stateDemoCount.race.values[sexIndex];

  return {
    countyPop: {
      raceTotal: countyRacePop,
      ageTotal: countyAgePop,
      sexTotal: countySexPop,
    },
    statePop: {
      raceTotal: stateRacePop,
      ageTotal: stateAgePop,
      sexTotal: stateSexPop,
    },
  };
};

const aggregateSurveyResults = async (eventInput) => {
  eventInput.age = parseInt(eventInput.age);
  // await deleteAllMapData();
  let { county, state } = await getStateAndCountyInfo(eventInput);
  let { location } = eventInput;

  if (!county) {
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

  if (!state) {
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
    county.covidSummary.beenInfected.yes.race.ranges
  );
  let ageIndex = findHardCodedAgeRangeIndex(eventInput.age);
  let sexIndex = findMatchingIndex(
    eventInput.sex,
    county.covidSummary.beenInfected.yes.sex.ranges
  );

  let indexes = {
    raceIndex,
    ageIndex,
    sexIndex,
  };

  // const popObject = getDemoCount(
  //   county.totalDemoCount,
  //   state.totalDemoCount,
  //   indexes
  // );

  updateCovidSummary(eventInput, county, state, indexes);
  // updateRecoverySummary(eventInput, popObject, county, state, indexes);
  // updateVaccinationSummary(eventInput, popObject, county, state, indexes);
  // updateGlobalHealthSummary(eventInput, popObject, county, state, indexes);

  // updateSymptomSummary(eventInput, popObject, county, state, indexes);
  // updateMedicalConditionsSummary(eventInput, popObject, county, state, indexes);
  // updateSocialSummary(eventInput, popObject, county, state, indexes);

  // // //increment at the last. updates require OLD count
  // incrementTotalFullEntries(county, state);
  // incrementDemographics(eventInput, county, state, indexes);

  stringify(county);
  stringify(state);

  console.log(county.covidSummary);
  console.log(state.covidSummary);

  // //upload back to appsync, updated county/state
  // await updateMapData(county, state);

  // return { county, state };
  return { county: null, state: null };
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  let input = event.arguments.surveyResults;
  const { county, state} = await aggregateSurveyResults(input);

  // await populate();
  return {
    county,
    state,
  };
  // return null;
};
