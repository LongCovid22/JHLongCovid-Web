const { getPendingReminders } = require("./queries");
const AWS = require("aws-sdk");
const sqs = new AWS.SQS();

exports.handler = async (event) => {
  let notifications;

  if (
    process.env._X_AMZN_TRACE_ID &&
    process.env._X_AMZN_TRACE_ID.split("-").includes("mock")
  ) {
    // If mocking the lambda function, replace trace id with fake trace id
    process.env._X_AMZN_TRACE_ID =
      "Root=1-63b6ffe7-2c48b4e36086hhhf21d16c8c;Parent=51740oo32a9d2e68;Sampled=0";
  }

  try {
    const response = await getPendingReminders();
    if (response.data.notificationsByStatus.items) {
      notifications = response.data.notificationsByStatus.items;
      console.log(
        `Successfully queried ${notifications.length} pending notifications`
      );
      notifications = getNotificationsSevenDaysAgo(notifications);
    }
  } catch (error) {
    console.log("ERROR RETRIEVING NOTIFICATIONS: ", error);
  }

  let batchQueueMessages = [];
  console.log(`Scheduling ${notifications.length} notifications`);
  if (notifications.length > 0) {
    for (const notification of notifications) {
      // For each notification add a message to the weekly reminders queue
      const message = {
        Id: notification.id,
        MessageBody: `${notification.message}`,
        MessageAttributes: {
          RecipientEmail: {
            DataType: "String",
            StringValue: notification.recipientEmail,
          },
        },
      };

      batchQueueMessages.push(message);
    }

    let queueParams = {
      QueueUrl: process.env.WEEKLY_REMINDERS_QUEUE_URL,
      Entries: batchQueueMessages,
    };

    try {
      await sqs.sendMessageBatch(queueParams).promise();
    } catch (error) {
      console.log("ERROR SENGING MESSAGES TO QUEUE", error);
    }
  }

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify(
      `Successully scheduled ${notifications.length} weekly reminders`
    ),
  };
};

const getNotificationsSevenDaysAgo = (notifications) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  return notifications.filter((notification) => {
    const createdAt = new Date(notification.createdAt);
    createdAt.setHours(0, 0, 0, 0); // Set time to midnight for comparison
    return createdAt.getTime() === sevenDaysAgo.getTime();
  });
};
