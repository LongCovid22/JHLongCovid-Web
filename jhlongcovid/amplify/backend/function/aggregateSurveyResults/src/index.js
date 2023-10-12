global.fetch = require('node-fetch');
const gql = require('graphql-tag');


const { aggregateSurveyResults } = require("./map_data_modules/aggregate_survey.js");
const { deleteAllMapData} = require("./map_data_modules/map_data_crud.js")
// const AWSAppSyncClient = require('aws-appsync').default
// global.fetch = require('node-fetch')
// const gql = require('graphql-tag')

const createNotification = gql`
    mutation createNotifications($input: CreateNotificationsInput!) {
        createNotifications(input: $input) {
            id}
}`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


exports.handler = async (event) => {
  let input = event.arguments.results;

   //TO-DO: eventually comment this out!
   await deleteAllMapData();
  const { countyTotal, stateTotal } = await aggregateSurveyResults(input, "TOTAL");
  const { countyLong, stateLong } = await aggregateSurveyResults(input, "LONG");





  const statusCode = 200;
  const body = {
    message: `Successfully aggregated data for survey submission ${
      input.id ? input.id : "no id"
    }`,
    countyTotal, 
    stateTotal,
    countyLong, 
    stateLong
  };

  return {
    statusCode,
    body: body,
  };
};
