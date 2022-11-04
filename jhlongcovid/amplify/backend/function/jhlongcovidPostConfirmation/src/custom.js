/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log("EVENT FOR POST CONFIRMATION TRIGGER: ", event);

  return event;
};
