const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: "us-east-1" });
const sqs = new AWS.SQS({ region: "us-east-1" });
const Handlebars = require("handlebars");

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
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }
    p {
      font-size: 24px;
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
    <h1>Johns Hopkins Long COVID Weekly Check In</h1>
    <p>{{message}}</p>
    <div class="note">
      <p>Please note that this is an automated email. Do not reply.</p>
    </div>
    <div class="footer">
      <p>This email was sent by Your Company. © 2023 Your Company. All rights reserved.</p>
    </div>
</body>
</html>
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
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
        Source: "no-reply@aricvoice.com", // Replace with your SES-verified email address
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
        QueueUrl: process.env.WEEKLY_REMINDERS_QUEUE_URL,
        ReceiptHandle: record.receiptHandle,
      };

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
    body: `Successfully sent weekly check in reminder to ${event.Records[0].RecipientEmail.stringValue}`,
  };
};
