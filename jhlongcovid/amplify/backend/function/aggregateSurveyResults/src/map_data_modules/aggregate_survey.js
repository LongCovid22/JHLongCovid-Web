const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const credentials = defaultProvider();
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");
const {Sha256,
} = require("@aws-crypto/sha256-js");

const GRAPHQL_ENDPOINT = process.env.API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_JHLONGCOVID_GRAPHQLAPIKEYOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";

//TO DO : make properties with CovidSummary and without RecoverySummary (since it's optional now)
const {
  properties,
  updateQuery,
  query,
  deleteQuery,
} = require("./mutations_queries");
const {
  NullJSONData,
  avgNULLJSONData,
  variables,
} = require("./data_samples.js");

const {
  makeRequest,
  getMapData,
  deleteMapData,
  deleteAllMapData,
  getID,
  updateMapData,
  getStateAndCountyInfo,
  getStateAndCountyInfoByAggregation
} = require("./map_data_crud.js");
const {
  isObject,
  parse,
  stringify,
  findMatchingIndex,
  findHardCodedAgeRangeIndex,
} = require("./processing_functions.js");
const {
  aggregatePercentageCustomBasedOnCondition,
  addCustomToTallyBasedOnCondition,
  updateCovidSummary,
  updateRecoverySummary,
  addAverage,
  updateVaccinationSummary,
  updateGlobalHealthSummary,
  findMostFrequentDiagnosis,
  updateSymptomSummary,
  updateMedicalConditionsSummary,
  updatePatientHealthSummary,
  updateSocialSummary,
  incrementTotalFullEntries,
} = require("./update_survey_functions.js");

const tryFetchRequest = async (request) => {
  try {
    response = await fetch(request);
    body = await response.json();
    if (body.data.createMapData !== null) {
      county = body.data.createMapData;
    }
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    throw new Error(error.message);
  }
}

async function processRequest(level, name, stateAbbrev, lat, long, aggregationType) {
  variables.input.level = level;
  variables.input.name = name;
  variables.input.stateAbbrev = stateAbbrev;
  variables.input.lat = lat;
  variables.input.long = long;
  variables.input.aggregationType = aggregationType;
  const request = await makeRequest(query, variables);
  await tryFetchRequest(request);
}

const aggregateSurveyResults = async (eventInput, aggregationType) => {
  eventInput.age = parseInt(eventInput.age);
  let { county, state } = await getStateAndCountyInfoByAggregation(eventInput, aggregationType);
  let { location } = eventInput;

  //create county/state if it does not exist
  if (!county && location.county !== "") {
    await processRequest("county", location.county, location.stateAbbrev, location.countyLat, location.countyLong, aggregationType);
  }

  if (!state && location.state !== "") {
    await processRequest("state", location.state, location.stateAbbrev, location.stateLat, location.stateLong, aggregationType);
  }

  //after creation if county/state does not exist, county/state is guranteed to have base data
  if ((!county && eventInput.location.county !== "") || (!state && eventInput.location.state !== "")) {
    ({ county, state } = await getStateAndCountyInfoByAggregation(eventInput, aggregationType));
  }


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
  //eventInput breaks things down based on survey section
  //but this can differ from how mapData structures itself
  //i.e. parts of covid is transferred to recovery
  updateCovidSummary(eventInput, county, state, indexes);

  console.log("County after update Covid Summary is: " + JSON.stringify(county));
  console.log("State after update Covid Summary is: " + JSON.stringify(state));

  updateRecoverySummary(eventInput, county, state, indexes);
  updateVaccinationSummary(eventInput, county, state, indexes);
  updateGlobalHealthSummary(eventInput, county, state, indexes);
  updateSymptomSummary(eventInput, county, state, indexes);
  updateMedicalConditionsSummary(eventInput, county, state, indexes);
  updatePatientHealthSummary(eventInput, county, state, indexes);
  updateSocialSummary(eventInput, county, state, indexes);
  //increment at the last. updates require OLD count
  incrementTotalFullEntries(county, state);

  // //upload back to appsync, updated county/state
  await updateMapData(county, state);

  return { county, state };
};

const aggregateSurveyResultsLong = async (eventInput) => {

};

module.exports = { aggregateSurveyResults};
