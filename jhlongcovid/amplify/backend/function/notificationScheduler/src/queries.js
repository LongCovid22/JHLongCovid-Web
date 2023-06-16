const { Sha256 } = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");

const GRAPHQL_ENDPOINT = process.env.API_JHLONGCOVID_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION || "use-east-1";

const recoveredQuery = `
  query RecoveryQuery($id: ID!) {
    getRecoveryEntry(id: $id) {
      recovered
    }
  }
`;

const createNotificationMutation = `
  mutation CreateNotificationMutation($input: CreateNotificationInput!) {
    createNotification(input: $input) {
      id
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

const getRecovered = async (id) => {
  let statusCode = 200;
  let body;
  let response;

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({
      query: recoveredQuery,
      variables: { id: id },
    }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(GRAPHQL_ENDPOINT, signed);

  response = await fetch(request);
  body = await response.json();
  return body;
};

const createNotification = async (email) => {
  let statusCode = 200;
  let body;
  let response;

  let variables = {
    input: {
      recipientEmail: email,
      message: "It is time for your weekly check in!",
      sendStatus: "PENDING",
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
      query: createNotificationMutation,
      variables,
    }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(GRAPHQL_ENDPOINT, signed);

  response = await fetch(request);
  body = await response.json();
  return body;
};

module.exports = { getRecovered, createNotification };
