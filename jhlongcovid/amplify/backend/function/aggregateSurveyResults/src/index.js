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

// const query = /* GraphQL */ `
//   query LIST_TODOS {
//     listTodos {
//       items {
//         id
//         name
//         description
//       }
//     }
//   }
// `;

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
      medicationCounts: JSON.stringify(NullJSONData),
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

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {

  for (const county of data.getData().slice(0, 2)) {
    variables.input.level = county.level;
    variables.input.name = county.county;
    variables.input.stateAbbrev = county.stateAbbrev;
    variables.input.lat = parseFloat(county.lat);
    variables.input.long = parseFloat(county.long);

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

    let statusCode = 200;
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
    }
    
  }

  

  return {
    statusCode,
    // body: JSON.stringify(body),
  };
};
