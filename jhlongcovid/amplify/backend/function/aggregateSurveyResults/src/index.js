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

// const GRAPHQL_ENDPOINT = 'http://localhost:20002/graphql';
const AWS_REGION = process.env.AWS_REGION || "us-east-1";

// amplify mock function aggregateSurveyResults --event ./src/event.json

const query = /* GraphQL */ `
  mutation CREATE_MAP_DATA($input: CreateMapDataInput!) {
    createMapData(input: $input) {
      level
      name
      stateAbbrev
      lat
      long
      covidSummary {
        covidCount
        percentHospitalizedDueToCovid
        avgPositiveCasesPerPerson
        percentSymptomatic
        percentTookMedication
        medicationCounts
        percentRecovered
      }
      symptomSummary {
        mostCommonSymptom
        symptomCounts
      }
      vaccinationSummary {
        percentVaccinated
        avgNumOfVaccPerPerson
        pfizerCount
        modernaCount
        jjCount
        azCount
      }
      generealHealthSummary {
        avgTotalScore
        avgHealthCounts
      }
      recoverySummary {
        longCovidCount
        percentLongCovid
        avgRecoveryLength
      }
      socialSummary {
        percentHaveMedicalInsurance
        percentDifficultyCoveringExpenses
        averageWorkingSituation
        workingSituationCounts
      }
      totalFullEntries
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
      covidCount: JSON.stringify(NullJSONData),
      percentHospitalizedDueToCovid: JSON.stringify(NullJSONData),
      avgPositiveCasesPerPerson: JSON.stringify(NullJSONData),
      percentSymptomatic: JSON.stringify(NullJSONData),
      percentTookMedication: JSON.stringify(NullJSONData),
      medicationCounts: JSON.stringify({}),
      percentRecovered: JSON.stringify(NullJSONData),
    },
    symptomSummary: {
      mostCommonSymptom: JSON.stringify(NullJSONData),
      symptomCounts: JSON.stringify(NullJSONData),
    },
    vaccinationSummary: {
      percentVaccinated: JSON.stringify(NullJSONData),
      avgNumOfVaccPerPerson: JSON.stringify(NullJSONData),
      pfizerCount: JSON.stringify(NullJSONData),
      modernaCount: JSON.stringify(NullJSONData),
      jjCount: JSON.stringify(NullJSONData),
      azCount: JSON.stringify(NullJSONData),
    },
    generealHealthSummary: {
      avgTotalScore: JSON.stringify(NullJSONData),
      avgHealthCounts: JSON.stringify(NullJSONData),
    },
    recoverySummary: {
      longCovidCount: JSON.stringify(NullJSONData),
      percentLongCovid: JSON.stringify(NullJSONData),
      avgRecoveryLength: JSON.stringify(NullJSONData),
    },
    socialSummary: {
      percentHaveMedicalInsurance: JSON.stringify(NullJSONData),
      percentDifficultyCoveringExpenses: JSON.stringify(NullJSONData),
      averageWorkingSituation: JSON.stringify(NullJSONData),
      workingSituationCounts: JSON.stringify(NullJSONData),
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
    body: (variables != null) ? JSON.stringify({ query, variables }) : JSON.stringify({ query }),
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
  `
  let request = await makeRequest(listMapDataQuery);

  try {
    let response = await fetch(request);
    return response.json();
  } catch (error) {
    console.log(error.message);
    return "error";
  }
}

const deleteMapData = async (level, lat, long) => {
  const deleteQuery = `
  mutation DELETEMAPDATA($input : DeleteMapDataInput!) {
    deleteMapData(input: $input) {
      id
    }
  }
  `;
  const deleteVariables = {
    input: {level, lat, long},
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

  while(load.data.listMapData.items.length > 0) {
    for (const mapData of load.data.listMapData.items) {
      await deleteMapData(mapData.level, mapData.lat, mapData.long);
    }

    load = await getMapData();
  }
}

const getID = async (level, name, stateAbbrev) => {

  let query = null;

  if (level === 'county') {
    query =  `
    query MyQuery {
      mapDataByLevelNameState(
        level: "${level}"
        nameStateAbbrev: {eq: {name: "${name}", stateAbbrev: "${stateAbbrev}"}}
      ) {
        items {
          id
          name
          stateAbbrev
          covidSummary {
            covidCount
            percentHospitalizedDueToCovid
            avgPositiveCasesPerPerson
            percentSymptomatic
            percentTookMedication
            medicationCounts
            percentRecovered
          }
          totalFullEntries
        }

      }
    }
    `
  } else if (level === 'state') {
   query =
  `
  query MyQuery {
    mapDataByStateAbbrev(level: "state", filter: {name: {eq: "${name}"}}) {
      items {
        id
        name
        stateAbbrev
        covidSummary {
          covidCount
          percentHospitalizedDueToCovid
          avgPositiveCasesPerPerson
          percentSymptomatic
          percentTookMedication
          medicationCounts
          percentRecovered
        }
        totalFullEntries
      }
    }
  }
  `;
  }
  ;


  let request = await makeRequest(query);

  try {
    let response = await fetch(request);
    let load = await response.json();
    if(level === "county") {
      return load.data.mapDataByLevelNameState.items
    } else if (level === "state") {
      // return load.data.mapDataByStateAbbrev.items
      return load.data.mapDataByStateAbbrev.items
    }
    
  } catch (error) {
    console.log(error.message);
    return "error";
  }
}


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
      // console.log(body);

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
    }

  }
}

const testGetByID = async () => {
  console.log(await getID("county", "Webster", "NE"));
  console.log(await getID("state", "Florida", null));
}

const getStateAndCountyInfo = async (eventInput) => {
  const { county, state} = eventInput;

  const stateInfo = await getID("state", state, null);
  // console.log(stateInfo[0]);

  const countyInfo = await getID("county", county, stateInfo[0].stateAbbrev);
  
  return {
    county : countyInfo[0],
    state: stateInfo[0]
  }
}

const parse = (object) => {
  for (let property in object) {
    object[property] = JSON.parse(object[property])
  }
}

const stringify = (object) => {
  for (let property in object) {
    object[property] = JSON.stringify(object[property])
  }
}

const findMatchingIndex = (element, array) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === element) {
      return i;
    }
  }
  return -1;
}

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
}
 
const updateCovidSummary = async (eventInput) => {
  let { age, race, sex} = eventInput;
  let { county, state } =  await getStateAndCountyInfo(eventInput);
  age = parseInt(age);
  parse(county.covidSummary);
  parse(state.covidSummary);
  county.totalFullEntries += 1;
  state.totalFullEntries += 1;
  console.log(findMatchingIndex(race, county.covidSummary.covidCount.race.ranges));
  console.log(findHardCodedAgeRangeIndex(age));
  console.log(findMatchingIndex(sex, county.covidSummary.covidCount.sex.ranges));


  stringify(county.covidSummary);
  stringify(state.covidSummary);

  console.log(county);
  console.log(state);
}



/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  // await updateCovidSummary();

  // let statusCode = 200;
  // return {
  //   statusCode,
  //   // body: JSON.stringify(body),
  // };
  let input = event.arguments.surveyResults;
  await updateCovidSummary(input);

  //get id of associated county
  //get id of associated state

  // await testGetByID();
  // await populate();

  //aggregate information for county data, and update!

  //agregate information for state data, and update!

 
};
