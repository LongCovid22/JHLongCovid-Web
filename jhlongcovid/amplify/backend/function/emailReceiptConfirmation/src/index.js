const AWS = require("aws-sdk");
const ses = new AWS.SES();

const parseQuestionWithReplacements = (questionObj) => {
  //for the case where question has <timeframe> for instance, need to replace with objects.timeframe
  //generalized for ANY case so its not just timeframe
  const placeholderRegex = /<([^>]+)>/g;
  const questionWithReplacements = questionObj.question.replace(
    placeholderRegex,
    (match, placeholder) => {
      return questionObj[placeholder] || match;
    }
  );
  const questionWithTags = `${questionWithReplacements}`;
  return questionWithTags;
};

function capitalizeEachWord(str) {
  return str.replace(/\b./g, (match) => match.toUpperCase());
}

function parseHeightIntoInches(height) {
  height = height.toString();
  if (height) {
    if (height.length >= 2) {
      let feet = parseInt(height[0]);
      let inches = parseInt(height.slice(1, height.length));
      return `${feet} Feet and ${inches} Inches`;
    } else if (height.length === 1) {
      return `${parseInt(height)} Feet`;
    }
  }
  return height.length;
}
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
        question.answerFormat !== "consent" &&
        question.answerFormat !== "account" &&
        question.answerFormat !== "thankYou"
      ) {
        //follows logic of get
        if (Array.isArray(question.answerFormat)) {
          if (question.answerFormat.includes("multichoice")) {
            const { choices, other } = answer;
            questions.push(parseQuestionWithReplacements(question));
            //includes everything in choices array separated with comma, and in other if there's a valid string
            const ans = choices.concat(other).filter(Boolean).join(", ");
            answers.push(ans);
          } else {
            //includes choice or something else
            questions.push(parseQuestionWithReplacements(question));
            answers.push(answer);
          }
        } else if (question.answerFormat === "scale") {
          //specifically for question No. 30
          questions.push(`<b>${parseQuestionWithReplacements(question)}</b>`);
          answers.push("");
          for (let i = 0; i < question.options.length; i++) {
            questions.push(question.options[i]);
            answers.push(question.scale[answer[i]]);
            // answers.push(answer[i]);
          }
        } else if (question.answerFormat === "demographics") {
          const propertyNames = ["age", "race", "sex", "height", "weight"];
          let { age, race, sex, height, weight } = answer;
          race = capitalizeEachWord(race);
          sex = capitalizeEachWord(sex);
          propertyNames.forEach((propertyName) => {
            if (propertyName === "height") {
              questions.push(
                capitalizeEachWord(propertyName) + " (Feet and Inches)"
              );
            } else if (propertyName === "weight") {
              questions.push(capitalizeEachWord(propertyName) + " (Pounds)");
            } else {
              questions.push(capitalizeEachWord(propertyName));
            }

            if (propertyName === "height") {
              height = height ? parseHeightIntoInches(height) : "";
            }
            answers.push(eval(propertyName));
          });
        } else {
          questions.push(parseQuestionWithReplacements(question));
          answers.push(answer);
        }
      }
    }

    let tableRows = "";

    for (let i = 0; i < questions.length; i++) {
      tableRows += `<tr><td>${questions[i]}</td><td>${answers[i]}</td></tr>`;
    }

    const email = event.arguments.email;

    const params = {
      Destination: {
        ToAddresses: [email], // Replace with your recipient's email address
      },
      Message: {
        Body: {
          Html: {
            Data:
              '<html><head><style>table { border-collapse: collapse; } th, td { border: 1px solid black; padding: 0.5rem; }</style></head><body><div style="text-align: center;"><img src="https://upload.wikimedia.org/wikipedia/en/4/47/Bloomberg.logo.small.horizontal.blue.png" alt="Johns Hopkins Logo"></div><h1>Congratulations!</h1><p>Thank you for filling out the Johns Hopkins Long Covid Survey. Here is a record of your survey data:</p><table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody>' +
              tableRows +
              "</tbody></table>Thanks for taking the time to fill it out! Your contribution will help our researchers better understand the implications of Long COVID. </body></html>", // Replace with your HTML content
            Charset: "UTF-8",
          },
        },
        Subject: {
          Data: "Thank You for Participating in the Long Covid Health Survey!", // Replace with the subject of your email
        },
      },
      Source: "hopkinslongcovidteam@gmail.com", // Replace with your sender's email address
    };

    let response;
    let statusCode = 200;

    try {
      await ses.sendEmail(params).promise();
      response = {
        message: `Successfully sent survey receipt to email ${event.arguments.email}`,
      };
    } catch (error) {
      console.log(`Error sending email to ${event.arguments.email}: `, error);
      response = {
        message: error,
      };
      statusCode = 400;
    }

    return {
      statusCode: statusCode,
      body: response,
    };
  } catch (error) {
    console.log(`Error sending email to ${event.arguments.email}: `, error);
    return {
      statusCode: 501,
      body: error,
    };
  }
};
