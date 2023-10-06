# Amplify Pitfalls

## Stack Update Stuck

Performing certain actions incorrectly within Amplify can sometimes lead to the `CloudFormation` stack becoming stuck in an update state. Getting the stack out of that state is incredibly difficult and usually ends up in having to delete the resources that cause the stack to become stuck. This is increidbly dangerous because of the threat of losing user data. Here are some pitfalls that I have noticed cause these states.

### Schema Changes

- If you need to make a schema change that involes creating, deleting, or updating an index, make sure you make the changes one at a time. For some reason, Amplify cannot make multiple changes to indexes within one push.
- When changing a non-required variable to required, be cognisent of the state of the DynamoDB tables. If some values are null, there could be some collisions.

### Environment Variables for Lambda Functions

Make sure to always create Lambda variables via the CLI and not to manually input them in to the configuration. Another alternative would be to use AWS Secrets Manager to query for environment variables you set up on the cloud.

### Edits to configs

Be careful not to add sections to configuration files. I have caused the stack to get locked because I added a config for a resource that I created outside of Amplify CLI and it got locked. It is okay to edit already existing config sections but adding new ones may cause some complications when running an `amplify push`.

## Mocking

Mocking data is an important practice to be able to isolate your local environment when making UI updates. By running `amplify mock`, you are able to mock all of your Amplify resources locally. Unfortauntely it is difficult to get all of the services spun up but if you manage to get through the process of debugging the issues, it really comes in handy. 

### After Mocking

- Note that after a successful mock of the Graphql API, Amplify places the vtl files in charge of the querying logic inside a local folder located at amplify > backend > api > jhlongcovid > build > resolvers. Make sure that afer you are done mocking and you would like to `amplify push` you either stop the amplify mock or delete the .vtl files. Amplify looks at this build folder as the location for custom vtl logic. So if you make a change while there are vtl files sitting in that folder, it will use that version when pushing instead of your new version that contains your changes.

- After you are done mocking make sure to `amplify env checkout` into the environment that you are looking to push to. This will reset all env variables from mocked variables to the actual cloud envirnoment variables.

Ensure that any time you are confused about something you refer to the Amplify or AWS documentation. If you would like to speak with AWS Amplify engineers directly, they hold office hours on Thursdays @ 1pm on their Discord channel.

