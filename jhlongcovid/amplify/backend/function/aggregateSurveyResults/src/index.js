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
 * 3. Run GraphQL mutation to update the changed MapData object
 * @param {*} event event.arguments.surveyResults contain the results of the survey to update
 *                  aggregate information
 */
exports.handler = async (event) => {
  // ****************** TO MOCK FUNCTION ******************
  // amplify mock function aggregateSurveyResults --event ./src/event.json

  // NOTE: Treat this directory as its own Node project
  // as long as you are aggregateSurveyResults directory, you can add
  // dependencies with npm just like the parent level project. When you push
  // it will manage the dependecies on the server as well.

  console.log(`EVENT: ${JSON.stringify(event)}`);
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
};
