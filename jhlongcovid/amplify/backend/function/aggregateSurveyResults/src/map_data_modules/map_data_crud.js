const {properties, updateQuery} = require("./mutations_queries");
const {variables } = require("./data_samples.js");
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

const makeRequest = async (query, variables) => {
    // const endpoint = new URL(GRAPHQL_ENDPOINT);
    // const signer = new SignatureV4({
    //   credentials: defaultProvider(),
    //   region: AWS_REGION,
    //   service: "appsync",
    //   sha256: Sha256,
    // });
  
    // const requestToBeSigned = new HttpRequest({
    //   method: "POST",
    //   headers: {
    //     'x-api-key': GRAPHQL_API_KEY,
    //     "Content-Type": "application/json",
    //     // host: endpoint.host,
    //   },
    //   // hostname: endpoint.host,
    //   body:
    //     variables != null
    //       ? JSON.stringify({ query, variables })
    //       : JSON.stringify({ query }),
    //   // path: endpoint.pathname,
    // });

    const options = {
      method: 'POST',
      headers: {
        'x-api-key': GRAPHQL_API_KEY,
        'Content-Type': 'application/json'
      },
      body:
        variables != null
          ? JSON.stringify({ query, variables })
          : JSON.stringify({ query }),
    }
  
    // const signed = await signer.sign(requestToBeSigned);
    const request = new Request(GRAPHQL_ENDPOINT, options);
    return request;
  };
  
  const getMapData = async () => {
    const listMapDataQuery = `
    query MyQuery {
      listMapAggregations {
        items {
          id
          lat
          level
          long
          aggregationType
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
  
  const deleteMapData = async (level, lat, long, aggregationType) => {
    const deleteQuery = `
    mutation DELETEMAPDATA($input : DeleteMapAggregationInput!) {
      deleteMapAggregation(input: $input) {
        id
      }
    }
    `;
    const deleteVariables = {
      input: { level, lat, long, aggregationType },
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

    console.log(load);
  
    while (load.data.listMapAggregations.items.length > 0) {
      for (const mapData of load.data.listMapAggregations.items) {
        await deleteMapData(mapData.level, mapData.lat, mapData.long, mapData.aggregationType);
      }
  
      load = await getMapData();
    }
  };
  
  const queryString = properties;
  
  const getID = async (level, name, stateAbbrev) => {
    let query = null;
    if (level === "county") {
      query = 
      // `
      // query MyQuery {
      //   mapDataByLevelNameState(
      //     level: "${level}"
      //     nameStateAbbrev: {eq: {name: "${name}", stateAbbrev: "${stateAbbrev}"}}
      //   ) {
      //     items {
      //       ${queryString}
      //     }
  
      //   }
      // }
      // `;
      `
      query MyQuery {
        listMapAggregations(filter: {level: {eq: "${level}"}, name: {eq: "${name}"}, stateAbbrev: {eq: "${stateAbbrev}"}}) {
          items {
            ${queryString}
          }
        }
      }
      `
    } else if (level === "state") {
      query = 
    //   `
    // query MyQuery {
    //   mapDataByStateAbbrev(level: "state", filter: {name: {eq: "${name}"}}) {
    //     items {
    //       ${queryString}
    //     }
    //   }
    // }
    // `;
    `
    query MyQuery {
      listMapAggregations(filter: {level: {eq: "${level}"}, name: {eq: "${name}"}"}}) {
        items {
          ${queryString}
        }
      }
    }`;
    }
    let request = await makeRequest(query);
  
    try {
      let response = await fetch(request);
      let load = await response.json();
      console.log(`Fetching MapData for ${level} ${name}...`);
      if (level === "county") {
        return (load.data.mapDataByLevelNameState.items) ? (load.data.mapDataByLevelNameState.items) :  null;
      } else if (level === "state") {
        // return load.data.mapDataByStateAbbrev.items
        return (load.data.mapDataByStateAbbrev.items) ? (load.data.mapDataByStateAbbrev.items) : null;
      }
    } catch (error) {
      console.log(`${level} fetch: ` + error.message);
      return null;
    }
  };

  const getCountyOrStateByAggregationType = async (level, name, stateAbbrev, aggregationType) => {
    let query = null;
    if (level === "county") {
      query = `
      query MyQuery {
        listMapAggregations(filter: {aggregationType: {eq: ${aggregationType}}, level: {eq: "county"}, name: {eq: "${name}"}, stateAbbrev: {eq: "${stateAbbrev}"}}) {
          items {
            ${queryString}
          }
  
        }
      }
      `;
    } else if (level === "state") {
      query = `
    query MyQuery {
      listMapAggregations(filter: {aggregationType: {eq: ${aggregationType}}, level: {eq: "state"}, name: {eq: "${name}"} }) {
        items {
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
      console.log(`Fetching MapData for ${level} ${name}...`);
      console.log(load);
      if (level === "county" || level === "state") {
        return (load.data.listMapAggregations.items && load.data.listMapAggregations.items.length > 0) ? (load.data.listMapAggregations.items) :  null;
      }
    } catch (error) {
      console.log(`${level} fetch: ` + error.message);
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
    let variables
    if (county) {
       variables = { input: county };
  
      let requestToBeSigned = new HttpRequest({
        method: "POST",
        headers: {
          'x-api-key': GRAPHQL_API_KEY,
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
        console.log(`Updating MapData for ${county.level} ${county.name}...`);
  
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
        'x-api-key': GRAPHQL_API_KEY,
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
      console.log(`Updating MapData for ${state.level} ${state.name}...`);
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
  
    let stateInfo = null;
    let countyInfo = null;
  
    
    stateInfo = await getID("state", state, null);
    countyInfo = await getID("county", county, stateAbbrev);
    
  
    return {
      county: countyInfo ? countyInfo[0] : null,
      state: stateInfo ? stateInfo[0] : null,
    };
  };

  const getStateAndCountyInfoByAggregation = async (eventInput, aggregationType) => {
    // const { county, state } = eventInput;
  
    const { location } = eventInput;
  
    const { county, state, stateAbbrev } = location;
  
    let stateInfo = null;
    let countyInfo = null;
  
    
    stateInfo = await getCountyOrStateByAggregationType("state", state, null, aggregationType);
    countyInfo = await getCountyOrStateByAggregationType("county", county, stateAbbrev, aggregationType);

    // console.log(JSON.stringify(stateInfo));

    // console.log(JSON.stringify(countyInfo));
    
  
    return {
      county: countyInfo ? countyInfo[0] : null,
      state: stateInfo ? stateInfo[0] : null,
    };
  };

module.exports = { makeRequest, getMapData, deleteMapData, deleteAllMapData, getID, updateMapData, getStateAndCountyInfo, getStateAndCountyInfoByAggregation};