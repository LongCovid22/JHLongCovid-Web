const { Sha256 } = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");

const GRAPHQL_ENDPOINT = process.env.API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION || "use-east-1";

const pendingRemindersQuery = `
  query NotificationsByStatus($sendStatus: SendStatus!, $sortDirection: ModelSortDirection!, $limit: Int!) {
    notificationsByStatus(
      sendStatus: $sendStatus,
      sortDirection: $sortDirection,
      limit: $limit
    ) {
      items {
        id
        message
        recipientEmail
        sendStatus
        createdAt
      }
      nextToken
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

const getPendingReminders = async () => {
  let body;
  let response;

  const currentTimestamp = new Date().getTime();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const formattedSevenDaysAgo = sevenDaysAgo.getTime();

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({
      query: pendingRemindersQuery,
      variables: {
        sendStatus: "PENDING",
        sortDirection: "DESC",
        limit: 1000,
      },
    }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(GRAPHQL_ENDPOINT, signed);

  response = await fetch(request);
  body = await response.json();
  return body;
};

module.exports = { getPendingReminders };
