/* Amplify Params - DO NOT EDIT
	API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIIDOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * Need to take those survey results and update the summary objects of the MapData aggregates
 * 1. Query for that county and state's (or just state's) MapData
 * 2. Parse survey results to update numbers within the summary object
 * 3. Run GraphQL mutation to update the changed MapData objects
 * @param {*} event event.arguments.surveyResults contain the results of the survey to update
 *                  aggregate information
 */



const crypto = require('@aws-crypto/sha256-js');
const { defaultProvider } = require('@aws-sdk/credential-provider-node');
const { SignatureV4 } = require('@aws-sdk/signature-v4');
const { HttpRequest } = require('@aws-sdk/protocol-http');
const fetch = require('node-fetch');
const { Request } = fetch;
const { Sha256 } = crypto;

const GRAPHQL_ENDPOINT = process.env.API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

// const query = /* GraphQL */ `
//     mutation CREATE_MAP_DATA($input: CreateMapDataInput!) {
//       createMapData(input: $input) {
//         level
//         name
//         stateAbbrev
//         lat
//         long
//         covidSummary {
//           covidCount
//           percentHospitalizedDueToCovid
//           avgPositiveCasesPerPerson
//           percentSymptomatic
//           percentTookMedication
//           medicationCounts
//           percentRecovered
//         }
//         symptomSummary {
//           mostCommonSymptom
//           symptomCounts
//         }
//         vaccinationSummary {
//           percentVaccinated
//           avgNumOfVaccPerPerson
//           pfizerCount
//           modernaCount
//           jjCount
//           azCount
//         }
//         generealHealthSummary {
//           avgTotalScore
//           avgHealthCounts
//         }
//         recoverySummary {
//           longCovidCount
//           percentLongCovid
//           avgRecoveryLength
//         }
//         socialSummary {
//           percentHaveMedicalInsurance
//           percentDifficultyCoveringExpenses
//           averageWorkingSituation
//           workingSituationCounts
//         }
//         totalFullEntries
//       }
//     }
//   `;

// const testAWSJSON = {
//   age: {
//     ranges: ["1-13", "13-25", "25-60", "60+"],
//     values: [6, 12, 53, 34],
//   },
//   race: {
//     ranges: ["White", "AfricanAmer"],
//     values: [6, 12],
//   },
//   sex: {
//     ranges: ["male", "female", "other"],
//     values: [6, 12, 53],
//   },
// };

// const variables = {
//   input: {
//     level: "county",
//     name: "Orange County",
//     stateAbbrev: "CA",
//     lat: 13.5,
//     long: -54.3,
//     covidSummary: {
//       covidCount: JSON.stringify(testAWSJSON),
//       percentHospitalizedDueToCovid: JSON.stringify(testAWSJSON),
//       avgPositiveCasesPerPerson: JSON.stringify(testAWSJSON),
//       percentSymptomatic: JSON.stringify(testAWSJSON),
//       percentTookMedication: JSON.stringify(testAWSJSON),
//       medicationCounts: JSON.stringify(testAWSJSON),
//       percentRecovered: JSON.stringify(testAWSJSON),
//     },
//     symptomSummary: {
//       mostCommonSymptom: JSON.stringify(testAWSJSON),
//       symptomCounts: JSON.stringify(testAWSJSON),
//     },
//     vaccinationSummary: {
//       percentVaccinated: JSON.stringify(testAWSJSON),
//       avgNumOfVaccPerPerson: JSON.stringify(testAWSJSON),
//       pfizerCount: JSON.stringify(testAWSJSON),
//       modernaCount: JSON.stringify(testAWSJSON),
//       jjCount: JSON.stringify(testAWSJSON),
//       azCount: JSON.stringify(testAWSJSON),
//     },
//     generealHealthSummary: {
//       avgTotalScore: JSON.stringify(testAWSJSON),
//       avgHealthCounts: JSON.stringify(testAWSJSON),
//     },
//     recoverySummary: {
//       longCovidCount: JSON.stringify(testAWSJSON),
//       percentLongCovid: JSON.stringify(testAWSJSON),
//       avgRecoveryLength: JSON.stringify(testAWSJSON),
//     },
//     socialSummary: {
//       percentHaveMedicalInsurance: JSON.stringify(testAWSJSON),
//       percentDifficultyCoveringExpenses: JSON.stringify(testAWSJSON),
//       averageWorkingSituation: JSON.stringify(testAWSJSON),
//       workingSituationCounts: JSON.stringify(testAWSJSON),
//     },
//     totalFullEntries: 0,
//   },
// };

const query = /* GraphQL */ `
  query LIST_TODOS {
    listTodos {
      items {
        id
        name
        description
      }
    }
  }
`;

// exports.handler = async (event) => {
//   // ****************** TO MOCK FUNCTION ******************
//   // amplify mock function aggregateSurveyResults --event ./src/event.json

//   // NOTE: Treat this directory as its own Node project
//   // as long as you are aggregateSurveyResults directory, you can add
//   // dependencies with npm just like the parent level project. When you push
//   // it will manage the dependecies on the server as well.
//   /**
//    * {
//    *   totalCovidCount: {
//    *      "age": {
//    *          ranges: ["1-13", "13-25", "25-60", "60+"],
//    *          values: [6, 12, 53, 34]
//    *       },
//    *      "race": {
//    *          ranges: ["White", "AfricanAmer", ... ],
//    *          values: [6, 12, 53, 34]
//    *      },
//    *      "sex": {
//    *          ranges: ["male", "female", "other"],
//    *          values: [6, 12, 53, 34]
//    *      }
//    *   }
//    * }
//    */

//   const endpoint = new URL(GRAPHQL_ENDPOINT);

//   const signer = new SignatureV4({
//     credentials : defaultProvider(),
//     region: AWS_REGION,
//     service: "appsync",
//     sha256: Sha256
//   });

//   const requestToBeSigned = new HttpRequest({
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       host: endpoint.host,
//     },
//     hostname: endpoint.host,
//     body: JSON.stringify({query, variables}),
//     path: endpoint.pathname
//   });

//   const signed = await signer.sign(requestToBeSigned);
//   const request = new Request(endpoint, signed);

//   let statusCode = 200;
//   let body;
//   let response;

//   try {
//     response = await fetch(request);
//     body = await response.json();
//     if (body.errors) statusCode = 400;
//   } catch (error) {
//     statusCode = 500;
//     body = {
//       errors: [
//         {
//           message: error.message,
//         },
//       ],
//     };
//   }

//   return {
//     statusCode,
//     body
//     // : JSON.stringify(body),
//   };
// };


exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
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
    body: JSON.stringify({ query }),
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