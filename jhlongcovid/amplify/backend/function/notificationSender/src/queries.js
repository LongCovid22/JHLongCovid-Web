const { Sha256 } = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@smithy/signature-v4");
const { HttpRequest } = require("@smithy/protocol-http");
const { default: fetch, Request } = require("node-fetch");

const GRAPHQL_ENDPOINT = process.env.API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION || "use-east-1";

const updateNotificationQuery = `
  mutation UpdateNotification($input: UpdateNotificationInput!) {
    updateNotification(input: $input) {
      id
      message
      recipientEmail
      sendStatus
      createdAt
    }
  }
`;

const endpoint = new URL(GRAPHQL_ENDPOINT);
const signer = new SignatureV4({
  credentials: defaultProvider(),
  region: AWS_REGION,
  service: "appsync",
  sha256: Sha256,
});

const updateNotificationDelivered = async (id) => {
  let body;
  let response;

  const currentTimestamp = new Date().getTime();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const formattedSevenDaysAgo = sevenDaysAgo.getTime();
  const variables = {
    input: {
      id: id,
      sendStatus: "DELIVERED",
    },
  };

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({
      query: updateNotificationQuery,
      variables: variables,
    }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(GRAPHQL_ENDPOINT, signed);

  response = await fetch(request);
  body = await response.json();
  return body;
};

module.exports = { updateNotificationDelivered };
