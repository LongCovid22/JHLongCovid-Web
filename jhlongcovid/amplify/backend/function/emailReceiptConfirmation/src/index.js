// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//      headers: {
//          "Access-Control-Allow-Origin": "*",
//          "Access-Control-Allow-Headers": "*"
//      },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };

const AWS = require("aws-sdk");
const ses = new AWS.SES();

/*
Look at surveySlice getNextQuestionAnswerDefault (line 60) for the default types of various answerFormats
*/

exports.handler = async (event) => {
  // let data = JSON.parse(event);
  //let variable = event.arguments.results;

  //event.arguments.results.questionStack (relook at JSON)
  try {
    const questions = [];
    const answers = [];
    const results = event.arguments.results;
    for (let i = 0; i < results.questionStack.length; i++) {
      const question =
        results.questions[results.questionStack[i].section][
          results.questionStack[i].question
        ];
      const answer = results.answerStack[i];

      if (
        question.answerFormat !== "welcome" &&
        question.answerFormat !== "consent"
      ) {
        if (Array.isArray(question.answerFormat)) {
          if (question.answerFormat.includes("multichoice")) {
            const { choices, other } = answer;
            //includes everything in choices array separated with comma, and in other if there's a valid string
            const ans = choices.concat(other).filter(Boolean).join(", ");
            answers.push(ans);
            questions.push(question.question);
          } else {
            //includes choice or other
            questions.push(question.question);
            answers.push(answer);
          }
        } else if (question.answerFormat === "scale") {
          //specifically for question No. 30
          questions.push(
            "Over the last 2 weeks, how often have you been bothered by the following problems?"
          );
          answers.push("");
          for (let i = 0; i < question.options.length; i++) {
            questions.push(question.options[i]);
            answers.push(answer[i]);
          }
        } else if (question.answerFormat === "demographics") {
          const propertyNames = [
            "zip",
            "age",
            "race",
            "sex",
            "height",
            "weight",
          ];
          const { zip, age, race, sex, height, weight } = answer;
          propertyNames.forEach((propertyName) => {
            questions.push(propertyName);
            answers.push(eval(propertyName));
          });
        } else if (question.answerFormat === "account") {
          const propertyNames = ["email", "password"];
          const { email, password } = answer;
          propertyNames.forEach((propertyName) => {
            questions.push(propertyName);
            answers.push(eval(propertyName));
          });
        } else {
          questions.push(question.question);
          answers.push(answer);
        }
      }
    }

    let tableRows = "";

    for (let i = 0; i < questions.length; i++) {
      tableRows += `<tr><td>${questions[i]}</td><td>${answers[i]}</td></tr>`;
    }

    const params = {
      Destination: {
        ToAddresses: ["leo.hubert3@gmail.com"], // Replace with your recipient's email address
      },
      Message: {
        Body: {
          Html: {
            Data:
              '<html><head><style>table { border-collapse: collapse; } th, td { border: 1px solid black; padding: 0.5rem; }</style></head><body><img src="https://upload.wikimedia.org/wikipedia/en/4/47/Bloomberg.logo.small.horizontal.blue.png" alt="Johns Hopkins Logo"><h1>Congratulations!</h1><p>Thank you for filling out the survey. Here is your survey data:</p><table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody>' +
              tableRows +
              "</tbody></table></body></html>", // Replace with your HTML content
            Charset: "UTF-8",
          },
        },
        Subject: {
          Data: "Test email from Amazon SES", // Replace with the subject of your email
        },
      },
      Source: "no-reply@aricvoice.com", // Replace with your sender's email address
    };

    let response;
    let statusCode;

    try {
      const result = await ses.sendEmail(params).promise();
      response = {
        input: event.arguments.results,
        event: event,
        statusCode: 200,
        body: JSON.stringify({ message: result }),
      };
      statusCode = 200;
    } catch (error) {
      response = {
        input: event.arguments.results,
        event: event,
        statusCode: 500,
        body: JSON.stringify({ message: error }),
      };
      statusCode = 400;
    }

    return {
      statusCode,
      body: response,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error,
    };
  }
};
