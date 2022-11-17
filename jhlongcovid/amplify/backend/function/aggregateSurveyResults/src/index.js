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
        workingSituationCounts {
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
      workingSituationCounts: {
        workingOutsideTheHome: JSON.stringify(NullJSONData),
        onLeaveFromAJobWorkingOutsideHome: JSON.stringify(NullJSONData),
        workingInsideHome: JSON.stringify(NullJSONData),
        lookingForWorkUnemployed: JSON.stringify(NullJSONData),
        retired: JSON.stringify(NullJSONData),
        disabled: JSON.stringify(NullJSONData),
        student: JSON.stringify(NullJSONData),
        dontKnow: JSON.stringify(NullJSONData),
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
          covidSummary {
            covidCount
            percentHospitalizedDueToCovid
            avgPositiveCasesPerPerson
            percentSymptomatic
            percentTookMedication
            medicationCounts
            percentRecovered
          }
          vaccinationSummary {
            avgNumOfVaccPerPerson
            azCount
            jjCount
            modernaCount
            percentVaccinated
            pfizerCount
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
            workingSituationCounts {
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
        covidSummary {
          covidCount
          percentHospitalizedDueToCovid
          avgPositiveCasesPerPerson
          percentSymptomatic
          percentTookMedication
          medicationCounts
          percentRecovered
        }
        vaccinationSummary {
          avgNumOfVaccPerPerson
          azCount
          jjCount
          modernaCount
          percentVaccinated
          pfizerCount
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
          workingSituationCounts {
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
      }
    }
  }
  `;
  }
  let request = await makeRequest(query);

  try {
    let response = await fetch(request);
    let load = await response.json();
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

const populate = async () => {
  await deleteAllMapData();
  for (const county of data.getData()) {
    console.log(county);
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

const getStateAndCountyInfo = async (eventInput) => {
  const { county, state } = eventInput;

  const stateInfo = await getID("state", state, null);
  // console.log(stateInfo[0]);

  const countyInfo = await getID("county", county, stateInfo[0].stateAbbrev);

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
      for (prop in object[property]) {
        if (isObject(object[property][prop])) {
          for (p in object[property][prop]) {
            object[property][prop][p] = JSON.stringify(
              object[property][prop][p]
            );
          }
        } else {
          object[property][prop] = JSON.stringify(object[property][prop]);
        }
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
  raceIndex,
  ageIndex,
  sexIndex,
  total,
  property,
  condition,
  customAdd
) => {
  let addOne = condition ? customAdd : 0;
  property.race.values[raceIndex] = parseFloat(
    (property.race.values[raceIndex] * total + addOne) / (total + 1)
  );
  property.age.values[ageIndex] = parseFloat(
    (property.age.values[ageIndex] * total + addOne) / (total + 1)
  );
  property.sex.values[sexIndex] = parseFloat(
    (property.age.values[sexIndex] * total + addOne) / (total + 1)
  );
};

const addCustomToTallyBasedOnCondition = (
  raceIndex,
  ageIndex,
  sexIndex,
  property,
  condition,
  customAdd
) => {
  let addOne = condition ? customAdd : 0;
  property.race.values[raceIndex] += addOne;
  property.age.values[ageIndex] += addOne;
  property.sex.values[sexIndex] += addOne;
};

const updateCovidSummary = (eventInput, county, state, indexes) => {
  let { covidResults, recoveryResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;
  let {
    percentSymptomatic,
    percentTookMedication,
    percentRecovered,
    percentHospitalizedDueToCovid,
    avgPositiveCasesPerPerson,
    covidCount,
  } = county.covidSummary;

  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    covidCount,
    covidResults.timesPositive > 0,
    1
  );

  // Formula for percentHospitalizedDueToCovid
  // if(covidResults.hospitalized) {
  //   newPercent = ((oldPercent * county.totalFullEntries) + 1) / (county.totalFullEntries + 1)
  // } else {
  //   newPercent = (oldPercent * county.totalFullEntries) / (county.totalFullEntries + 1)
  // }
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentHospitalizedDueToCovid,
    covidResults.hospitalized,
    1
  );
  //averagePositiveCasesPerPerson Formula :
  //new = (old * county.totalFullEntries) + timesPositive / (county.totalFullEntries + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    avgPositiveCasesPerPerson,
    true,
    covidResults.timesPositive
  );
  // let average = county.covidSummary.avgPositiveCasesPerPerson;
  // average.race.values[raceIndex] = parseFloat((average.race.values[raceIndex] * county.totalFullEntries + covidResults.timesPositive) / (county.totalFullEntries + 1));
  // average.age.values[ageIndex] = parseFloat((average.age.values[ageIndex] * county.totalFullEntries + covidResults.timesPositive) / (county.totalFullEntries + 1));
  // average.sex.values[sexIndex] = parseFloat((average.sex.values[sexIndex] * county.totalFullEntries + covidResults.timesPositive) / (county.totalFullEntries + 1));
  //percentSymptomaticFormula :
  // new =(old * county.totalFullEntries) + ((covidResults.symptomatic) ? 1 : 0) / (county.totalFullEntries + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentSymptomatic,
    covidResults.symptomatic,
    1
  );
  //percentTookMedicationFormula :
  // new =(old * county.totalFullEntries) + ((covidResults.MedicationsTaken.length > 0) ? 1 : 0) / (county.totalFullEntries + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentTookMedication,
    covidResults.MedicationsTaken.length > 0,
    1
  );
  //percentRecoveredFormula :
  // new =(old * county.totalFullEntries) + ((covidResults.symptomatic) ? 1 : 0) / (county.totalFullEntries + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentRecovered,
    recoveryResults.recovered === "Yes",
    1
  );

  ({
    percentSymptomatic,
    percentTookMedication,
    percentRecovered,
    percentHospitalizedDueToCovid,
    avgPositiveCasesPerPerson,
    covidCount,
  } = state.covidSummary);

  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    covidCount,
    covidResults.timesPositive > 0,
    1
  );

  // Formula for percentHospitalizedDueToCovid
  // if(covidResults.hospitalized) {
  //   newPercent = ((oldPercent * county.totalFullEntries) + 1) / (county.totalFullEntries + 1)
  // } else {
  //   newPercent = (oldPercent * county.totalFullEntries) / (county.totalFullEntries + 1)
  // }
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentHospitalizedDueToCovid,
    covidResults.hospitalized,
    1
  );
  //averagePositiveCasesPerPerson Formula :
  //new = (old * county.totalFullEntries) + timesPositive / (county.totalFullEntries + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    avgPositiveCasesPerPerson,
    true,
    covidResults.timesPositive
  );
  // let average = county.covidSummary.avgPositiveCasesPerPerson;
  // average.race.values[raceIndex] = parseFloat((average.race.values[raceIndex] * county.totalFullEntries + covidResults.timesPositive) / (county.totalFullEntries + 1));
  // average.age.values[ageIndex] = parseFloat((average.age.values[ageIndex] * county.totalFullEntries + covidResults.timesPositive) / (county.totalFullEntries + 1));
  // average.sex.values[sexIndex] = parseFloat((average.sex.values[sexIndex] * county.totalFullEntries + covidResults.timesPositive) / (county.totalFullEntries + 1));
  //percentSymptomaticFormula :
  // new =(old * county.totalFullEntries) + ((covidResults.symptomatic) ? 1 : 0) / (county.totalFullEntries + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentSymptomatic,
    covidResults.symptomatic,
    1
  );
  //percentTookMedicationFormula :
  // new =(old * county.totalFullEntries) + ((covidResults.MedicationsTaken.length > 0) ? 1 : 0) / (county.totalFullEntries + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentTookMedication,
    covidResults.MedicationsTaken.length > 0,
    1
  );
  //percentRecoveredFormula :
  // new =(old * county.totalFullEntries) + ((covidResults.symptomatic) ? 1 : 0) / (county.totalFullEntries + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentRecovered,
    recoveryResults.recovered === "Yes",
    1
  );

  //TODO : update medicationCounts
};

const updateVaccinationSummary = (eventInput, county, state, indexes) => {
  let { vaccinationResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;

  //update county
  let {
    percentVaccinated,
    avgNumOfVaccPerPerson,
    pfizerCount,
    modernaCount,
    jjCount,
    azCount,
  } = county.vaccinationSummary;

  //percentVaccinated formula
  //new = (old * total + (vaccinated) ? 1 : 0) / (total + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentVaccinated,
    vaccinationResults.vaccinated,
    1
  );

  //avgNumOfVaccPerPerson = (old * total) + vaccinationResults.totalVacccineShots / (total + 1)
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    avgNumOfVaccPerPerson,
    true,
    vaccinationResults.totalVaccineShots
  );

  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    pfizerCount,
    vaccinationResults.vaccineType === "Pfizer",
    1
  );
  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    modernaCount,
    vaccinationResults.vaccineType === "Moderna",
    1
  );
  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    jjCount,
    vaccinationResults.vaccineType === "J&J",
    1
  );
  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    azCount,
    vaccinationResults.vaccineType === "AstraZeneca",
    1
  );

  //update state
  ({
    percentVaccinated,
    avgNumOfVaccPerPerson,
    pfizerCount,
    modernaCount,
    jjCount,
    azCount,
  } = state.vaccinationSummary);
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentVaccinated,
    vaccinationResults.vaccinated,
    1
  );
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    avgNumOfVaccPerPerson,
    true,
    vaccinationResults.totalVaccineShots
  );
  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    pfizerCount,
    vaccinationResults.vaccineType === "Pfizer",
    1
  );
  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    modernaCount,
    vaccinationResults.vaccineType === "Moderna",
    1
  );
  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    jjCount,
    vaccinationResults.vaccineType === "J&J",
    1
  );
  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    azCount,
    vaccinationResults.vaccineType === "AstraZeneca",
    1
  );
};

const updateRecoverySummary = (eventInput, county, state, indexes) => {
  let { recoveryResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;
  let { longCovidCount, percentLongCovid, avgRecoveryLength } =
    county.recoverySummary;

  //longCovidCount
  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    longCovidCount,
    recoveryResults.hasLongCovid === "Yes",
    1
  );

  //percentLongCovid
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentLongCovid,
    recoveryResults.hasLongCovid === "Yes",
    1
  );

  //avgRecoveryLength
  let recoveryLength =
    recoveryResults.lengthOfRecovery.months * 31 +
    recoveryResults.lengthOfRecovery.days;
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    avgRecoveryLength,
    true,
    recoveryLength
  );

  //state data
  ({ longCovidCount, percentLongCovid, avgRecoveryLength } =
    state.recoverySummary);
  //longCovidCount
  addCustomToTallyBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    longCovidCount,
    recoveryResults.hasLongCovid === "Yes",
    1
  );
  //percentLongCovid
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentLongCovid,
    recoveryResults.hasLongCovid === "Yes",
    1
  );
  //avgRecoveryLength
  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    avgRecoveryLength,
    true,
    recoveryLength
  );
};

const updateSocialSummary = (eventInput, county, state, indexes) => {
  let { socialDeterminantsResults } = eventInput;
  let { raceIndex, ageIndex, sexIndex } = indexes;
  let {
    percentHaveMedicalInsurance,
    percentDifficultyCoveringExpenses,
    averageWorkingSituation,
    workingSituationCounts,
  } = county.socialSummary;

  let {
    workingOutsideTheHome,
    onLeaveFromAJobWorkingOutsideHome,
    workingInsideHome,
    lookingForWorkUnemployed,
    retired,
    disabled,
    student,
    dontKnow,
    preferNotToAnswer,
  } = workingSituationCounts;

  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentHaveMedicalInsurance,
    socialDeterminantsResults.hasMedicalInsurance === "Yes",
    1
  );

  aggregatePercentageCustomBasedOnCondition(
    raceIndex,
    ageIndex,
    sexIndex,
    county.totalFullEntries,
    percentDifficultyCoveringExpenses,
    socialDeterminantsResults.difficultCoveringExpenses === "Very difficult" ||
    socialDeterminantsResults.difficultCoveringExpenses === "Somewhat difficult",
    1
  );


  /*
Working outside the home 
On leave from a job working outside the home (e.g, sick leave, family leave, maternity leave)  
Working inside the home 
Looking for work, unemployed 
Retired 
Disabled, permanently or temporarily  
Student 
Don't know 
Prefer not to answer 
*/

if (socialDeterminantsResults.currentWorkSituation === "Working outside the home") { 
  addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, workingOutsideTheHome,true,  1);
} else if (socialDeterminantsResults.currentWorkSituation === "On leave from a job working outside the home (e.g, sick leave, family leave, maternity leave)") { 
  addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, onLeaveFromAJobWorkingOutsideHome,true,  1);
} else if (socialDeterminantsResults.currentWorkSituation === "Working inside the home") { 
  addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, workingInsideHome,true,  1);
} else if (socialDeterminantsResults.currentWorkSituation === "Looking for work, unemployed") { 
  addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, lookingForWorkUnemployed,true,  1);
} else if (socialDeterminantsResults.currentWorkSituation === "Retired") { 
  addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, retired,true,  1);
} else if (socialDeterminantsResults.currentWorkSituation === "Disabled, permanently or temporarily") { 
  addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, disabled,true,  1);
} else if (socialDeterminantsResults.currentWorkSituation === "Student") { 
  addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, student,true,  1);
} else if (socialDeterminantsResults.currentWorkSituation === "Don't know") { 
  addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, dontKnow,true,  1);
} else if (socialDeterminantsResults.currentWorkSituation === "Prefer not to answer") { 
  addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, preferNotToAnswer,true,  1);
} 




  else if (socialDeterminantsResults.currentWorkSituation === "Looking for work, unemployed") { 
    addCustomToTallyBasedOnCondition(raceIndex, ageIndex, sexIndex, lookingForWorkUnemployed,true,  1);
  }

  


    //get rid of average!
  // averageWorkingSituation(
  //   raceIndex

  // )

  ({
    percentHaveMedicalInsurance,
    percentDifficultyCoveringExpenses,
    averageWorkingSituation,
    workingSituationCounts,
  } = state.socialSummary);
  ({
    workingOutsideTheHome,
    onLeaveFromAJobWorkingOutsideHome,
    workingInsideHome,
    lookingForWorkUnemployed,
    retired,
    disabled,
    student,
    dontKnow,
    preferNotToAnswer,
  } = workingSituationCounts);
};

const incrementTotalFullEntries = (county, state) => {
  county.totalFullEntries += 1;
  state.totalFullEntries += 1;
};

const aggregateSurveyResults = async (eventInput) => {
  eventInput.age = parseInt(eventInput.age);
  let { county, state } = await getStateAndCountyInfo(eventInput);

  parse(county);
  parse(state);

  let raceIndex = findMatchingIndex(
    eventInput.race,
    county.covidSummary.covidCount.race.ranges
  );
  let ageIndex = findHardCodedAgeRangeIndex(eventInput.age);
  let sexIndex = findMatchingIndex(
    eventInput.sex,
    county.covidSummary.covidCount.sex.ranges
  );
  updateCovidSummary(eventInput, county, state, {
    raceIndex,
    ageIndex,
    sexIndex,
  });
  updateVaccinationSummary(eventInput, county, state, {
    raceIndex,
    ageIndex,
    sexIndex,
  });
  updateRecoverySummary(eventInput, county, state, {
    raceIndex,
    ageIndex,
    sexIndex,
  });

  updateSocialSummary(eventInput, county, state, {
    raceIndex,
    ageIndex,
    sexIndex,
  });

  //Upload "county" and "state"

  //increment at the last. updates require OLD count
  incrementTotalFullEntries(county, state);

  stringify(county);
  stringify(state);

  console.log(county);
  // console.log(state);
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  let input = event.arguments.surveyResults;
  await aggregateSurveyResults(input);

  // await testGetByID();
  // await populate();
};
