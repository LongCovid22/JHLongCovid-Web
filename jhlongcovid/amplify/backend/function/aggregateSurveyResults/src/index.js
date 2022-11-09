/* Amplify Params - DO NOT EDIT
	API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIIDOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */const { Sha256 } = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");

const GRAPHQL_ENDPOINT = process.env.API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT;

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
  "accessKeyId": "ASIAVJKIAM-AuthRole", 
  "secretAccessKey": "fake"
}
const credentials = process.env.AWS_EXECUTION_ENV.endsWith("mock") ? mockCredentials : defaultProvider()

const testAWSJSON = {
  age: {
    ranges: ["1-13", "13-25", "25-60", "60+"],
    values: [6, 12, 53, 34],
  },
  race: {
    ranges: ["White", "AfricanAmer"],
    values: [6, 12],
  },
  sex: {
    ranges: ["male", "female", "other"],
    values: [6, 12, 53],
  },
};

const variables = {
  input: {
    level: "county",
    name: "Orange Fruit County",
    stateAbbrev: "CA",
    lat: 13.5453535,
    long: -54.3453535,
    covidSummary: {
      covidCount: JSON.stringify(testAWSJSON),
      percentHospitalizedDueToCovid: JSON.stringify(testAWSJSON),
      avgPositiveCasesPerPerson: JSON.stringify(testAWSJSON),
      percentSymptomatic: JSON.stringify(testAWSJSON),
      percentTookMedication: JSON.stringify(testAWSJSON),
      medicationCounts: JSON.stringify(testAWSJSON),
      percentRecovered: JSON.stringify(testAWSJSON),
    },
    symptomSummary: {
      mostCommonSymptom: JSON.stringify(testAWSJSON),
      symptomCounts: JSON.stringify(testAWSJSON),
    },
    vaccinationSummary: {
      percentVaccinated: JSON.stringify(testAWSJSON),
      avgNumOfVaccPerPerson: JSON.stringify(testAWSJSON),
      pfizerCount: JSON.stringify(testAWSJSON),
      modernaCount: JSON.stringify(testAWSJSON),
      jjCount: JSON.stringify(testAWSJSON),
      azCount: JSON.stringify(testAWSJSON),
    },
    generealHealthSummary: {
      avgTotalScore: JSON.stringify(testAWSJSON),
      avgHealthCounts: JSON.stringify(testAWSJSON),
    },
    recoverySummary: {
      longCovidCount: JSON.stringify(testAWSJSON),
      percentLongCovid: JSON.stringify(testAWSJSON),
      avgRecoveryLength: JSON.stringify(testAWSJSON),
    },
    socialSummary: {
      percentHaveMedicalInsurance: JSON.stringify(testAWSJSON),
      percentDifficultyCoveringExpenses: JSON.stringify(testAWSJSON),
      averageWorkingSituation: JSON.stringify(testAWSJSON),
      workingSituationCounts: JSON.stringify(testAWSJSON),
    },
    totalFullEntries: 0,
  },
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  //   console.log(`EVENT: ${JSON.stringify(event)}`);

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

  return {
    statusCode,
    body: JSON.stringify(body),
  };
};
