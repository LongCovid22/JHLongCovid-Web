const { default: fetch } = require("node-fetch");

//TO DO : make properties with CovidSummary and without RecoverySummary (since it's optional now)
const {
  query,
} = require("./mutations_queries");
const {
  variables,
} = require("./data_samples.js");

const {
  makeRequest,
  makeMapData,
  updateMapData,
  getStateAndCountyInfoByAggregation
} = require("./map_data_crud.js");
const {
  findMatchingIndex,
  findHardCodedAgeRangeIndex,
} = require("./processing_functions.js");
const {
  updateCovidCountSummaryTabStats,
  updateCovidSummary,
  updateRecoverySummary,
  updateVaccinationSummary,
  updateGlobalHealthSummary,
  updateSymptomSummary,
  updateMedicalConditionsSummary,
  updatePatientHealthSummary,
  updateSocialSummary,
  incrementTotalFullEntries,
} = require("./update_survey_functions.js");

const { hasLongCovid } = require("./helper");

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

    const {statusCode, body} = await makeMapData("county", location.county, location.stateAbbrev, location.countyLat, location.countyLong, aggregationType);
    // await processRequest("county", location.county, location.stateAbbrev, location.countyLat, location.countyLong, aggregationType);
  }

  if (!state && location.state !== "") {
    const {statusCode, body} = await makeMapData("state", location.state, location.stateAbbrev, location.stateLat, location.stateLong, aggregationType);
    // await processRequest("county", location.state, location.stateAbbrev, location.stateLat, location.stateLong, aggregationType);
  }

  //after creation if county/state does not exist, county/state is guranteed to have base data
  if ((!county && location.county !== "") || (!state && location.state !== "")) {
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

  const {
    LongCovid
  } = hasLongCovid(
    eventInput.symptomResults,
    eventInput.covidResults,
    eventInput.recoveryResults
  );


  // //Only last 4 panel requires distiniction between Long vs Normal Covid

  //Percentages should update based on the TOTAL
  //Will update the "denominator" in a sense : number of long covid, covid, etc...
  updateCovidCountSummaryTabStats(eventInput, county, state, indexes);

  if (aggregationType === "TOTAL" || (aggregationType === "LONG" && (LongCovid === 1))) {
    
    updateCovidSummary(eventInput, county, state, indexes);
    //update recoveredCount as well
    updateRecoverySummary(eventInput, county, state, indexes);

    updateVaccinationSummary(eventInput, county, state, indexes);
    updateGlobalHealthSummary(eventInput, county, state, indexes);
    
    //update phq8AboveTen as well
    updateSymptomSummary(eventInput, county, state, indexes);
    
    //udpate topMedicalCondition as well
    updateMedicalConditionsSummary(eventInput, county, state, indexes);
    updatePatientHealthSummary(eventInput, county, state, indexes);
    updateSocialSummary(eventInput, county, state, indexes);
  }
  
  //increment at the last. updates require OLD count
  incrementTotalFullEntries(county, state);

  await updateMapData(county, state);

  //upload back to appsync, updated county/state
  return { county, state };
};

module.exports = { aggregateSurveyResults};
