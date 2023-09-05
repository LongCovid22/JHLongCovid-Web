const AWS = require("aws-sdk");
const axios = require("axios");
const secretsManager = new AWS.SecretsManager();
const secret_name = "GITHUB_PAT";

exports.handler = async (event) => {
  let pat;

  try {
    const response = await secretsManager
      .getSecretValue({
        SecretId: secret_name,
      })
      .promise();
    pat = JSON.parse(response.SecretString).GITHUB_PAT;
  } catch (error) {
    console.log(`Could not retrieve personal access token`);
    throw error;
  }
  // console.log("PAT: ", pat);
  // const tasks = event.Records.map(async (record) => {
  //   if (record.eventName == "INSERT") {
  //     const nameOfPersonSubmitting = record.dynamodb.NewImage.name.S;
  //     const feedback = record.dynamodb.NewImage.feedback.S;
  //     if (nameOfPersonSubmitting && feedback) {
  //       const owner = "LongCovid22";
  //       const repo = "JHLongCovid-Web";

  //       const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

  //       const headers = {
  //         Authorization: `Bearer ${pat}`,
  //         Accept: "application/vnd.github.v3+json",
  //         "X-GitHub-Api-Version": "2022-11-28",
  //       };
  //       const data = {
  //         title: "Summary of Bug",
  //         body: `${feedback}`,
  //       };

  //       console.log("SEDNING REPSONSE: ", data);
  //       try {
  //         let response = await axios.post(url, data, {
  //           headers: headers,
  //         });
  //         return response;
  //         console.log(response);
  //       } catch (error) {
  //         console.log(`Error creating issue: ${error}`);
  //       }
  //     } else {
  //       console.log("Name or feedback in record is null");
  //     }
  //   }

  //   console.log(record.eventID);
  //   console.log(record.eventName);
  //   console.log("DynamoDB Record: %j", record.dynamodb);
  // });

  // console.log("TASKS: ", tasks);
  // await Promise.all(tasks);
  return Promise.resolve("PENDING Github issues functionality");
};
