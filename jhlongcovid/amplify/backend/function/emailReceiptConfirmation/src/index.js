


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


const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {

    const tableRows = Object.keys(event).map(key => {
        return `<tr><td>${key}</td><td>${event[key]}</td></tr>`;
    }).join('');


    const params = {
        Destination: {
            ToAddresses: ['leo.hubert3@gmail.com'] // Replace with your recipient's email address
        },
        Message: {
            Body: {
                Html: {
                    Data: '<html><head><style>table { border-collapse: collapse; } th, td { border: 1px solid black; padding: 0.5rem; }</style></head><body><img src="https://upload.wikimedia.org/wikipedia/en/4/47/Bloomberg.logo.small.horizontal.blue.png" alt="Johns Hopkins Logo"><h1>Congratulations!</h1><p>Thank you for filling out the survey. Here is your survey data:</p><table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody>' + tableRows + '</tbody></table></body></html>', // Replace with your HTML content
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Test email from Amazon SES' // Replace with the subject of your email
            }
        },
        Source: 'hopkinslongcovidteam@gmail.com' // Replace with your sender's email address
    };

    try {
        const result = await ses.sendEmail(params).promise();
        console.log('Email sent successfully', result);
    } catch (error) {
        console.error('Error sending email', error);
    }
};
