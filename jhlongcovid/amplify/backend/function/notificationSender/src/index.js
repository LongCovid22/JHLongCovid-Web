const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: "us-east-1" });
const sqs = new AWS.SQS({ region: "us-east-1" });
const Handlebars = require("handlebars");
const {
  updateNotification,
  updateNotificationDelivered,
} = require("./queries");

// Define your email template
const emailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    h3 {
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .note {
      font-size: 14px;
      color: #888;
      margin-top: 20px;
    }
    .footer {
      font-size: 12px;
      color: #888;
      margin-top: 40px;
      border-top: 1px solid #ddd;
      padding-top: 20px;
    }
  </style>
</head>
<body>
    <h3>Johns Hopkins Long COVID Weekly Check In</h3>
    <p>{{message}}</p>
    <div class="note">
      <p>Please note that this is an automated email. Do not reply.</p>
    </div>
</body>
</html>
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  if (
    process.env._X_AMZN_TRACE_ID &&
    process.env._X_AMZN_TRACE_ID.split("-").includes("mock")
  ) {
    // If mocking the lambda function, replace trace id with fake trace id
    process.env._X_AMZN_TRACE_ID =
      "Root=1-63b6ffe7-2c48b4e36086hhhf21d16c8c;Parent=51740oo32a9d2e68;Sampled=0";
  }

  try {
    for (const record of event.Records) {
      //   const queueMessage = JSON.parse(record);
      const template = Handlebars.compile(emailTemplate);

      const emailBody = template({
        message: record.body,
      });

      const emailParams = {
        Destination: {
          ToAddresses: [record.messageAttributes.RecipientEmail.stringValue],
        },
        Message: {
          Body: {
            Html: {
              Data: emailBody,
            },
          },
          Subject: {
            Data: "Johns Hopkins Long Covid Weekly Checkin",
          },
        },
        Source: "hopkinslongcovidteam@gmail.com", // Replace with your SES-verified email address
        // Define the attachment for the embedded image
        // Ensure that the `ContentId` matches the `src` attribute in the email template
      };

      console.log("Sending email for SQS message: ", record.receiptHandle);
      await ses.sendEmail(emailParams).promise();
      console.log("Email sent successfully");

      console.log(
        "Deleting SQS message with receipt handle: ",
        record.receiptHandle
      );
      const deleteParams = {
        QueueUrl:
          process.env.ENV === "staging"
            ? process.env.WEEKLY_REMINDERS_QUEUE_STAGING
            : process.env.WEEKLY_REMINDERS_QUEUE_DEV,
        ReceiptHandle: record.receiptHandle,
      };

      // Update the Notification in the DB to DELIVERED
      await updateNotificationDelivered(record.messageId);
      // Delete the Queue message
      await sqs.deleteMessage(deleteParams).promise();
      console.log("Deleting SQS message successful");
    }
  } catch (error) {
    console.error("Error: ", error);
    return {
      statusCode: 500,
      body: `Unable to send weekly reminder ${error.message}`,
    };
  }

  return {
    statusCode: 200,
    body: `Successfully sent weekly check in reminder to ${event.Records[0].messageAttributes.RecipientEmail.stringValue}`,
  };
};
