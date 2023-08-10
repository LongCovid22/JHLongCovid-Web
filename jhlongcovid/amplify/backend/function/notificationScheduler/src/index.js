/* Amplify Params - DO NOT EDIT
	API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIIDOUTPUT
	API_JHLONGCOVID_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const { getRecovered, createNotification } = require("./queries");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  for (const record of event.Records) {
    if (record.eventName === "INSERT") {
      const { id, email, surveyEntryRecoveryEntryId } =
        record.dynamodb.NewImage;
      const idValue = id.S;
      console.log(`INSERT RECORD RECEIVED id: ${idValue}, email: ${email}`);
      if (email) {
        const recipientEmail = email.S;
        const surveyEntryRecoveryEntryIdValue = surveyEntryRecoveryEntryId.S;

        // Query for the recovery entry to determine whether the
        // user said they were recovered
        try {
          let graphqlResponse = await getRecovered(
            surveyEntryRecoveryEntryIdValue
          );
          if (graphqlResponse.data && graphqlResponse.data.getRecoveryEntry) {
            let recovered = graphqlResponse.data.getRecoveryEntry.recovered;
            if (!recovered) {
              // If the user hasn't recovered, schedule a notification for
              // their weekly check in
              let createNotificationResponse = await createNotification(
                recipientEmail
              );
              if (createNotificationResponse.data.createNotification) {
                console.log(
                  `Successfully scheduled Notification ${createNotificationResponse.data.createNotification.id} after survey entry ${idValue}`
                );
              }
            }
          }
        } catch (error) {
          console.log("Error ecnountered retrieving recovered: ", error);
        }
      }
    }
  }

  return Promise.resolve("Successfully processed DynamoDB record");
};
