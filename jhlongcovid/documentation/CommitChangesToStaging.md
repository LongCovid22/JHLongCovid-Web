
### Committing Changes to `staging` environment

## Merging Front-end and Back-end changes

1. Make sure that all code is comitted into the branch that you are merging from
2. Checkout in to the `staging` branch
3. Merge the branch with your changes in to `staging`
4. If merged locally, push to remote `staging` branch to kick off amplify CI/CD on the cloud.

Note: On the cloud, AWS Amplify uses a webhook to kick off the CI/CD pipeline for building the front and back end of the site and then deploying it.

## For safety

** Whenever you are pushing a back-end change **

Perform these additional steps to deploy backend changes locally:

1. Make sure that all code is comitted into the branch that you are merging from
2. Checkout in to the `staging` branch
3. Run `amplify env checkout <staging-env-name>`. This will tell amplify that we are now referring to our staging back-end.
4. Run `amplify status` or `amplify env list` to verify you are in the `stage` environment.
5. Run `amplify push` to push the changes to the backend. Make sure that you are confident that these changes you are about to make are intended - the push overwrites what is on the cloud.
6. Once amplify push is succesful, git push to kick off amplify CI/CD on the cloud.

The benefit of performing the changes locally is if you experience a problem with the deployment, you can make fixes without having to debug the issue within the cloud CI/CD logs. Also, you won't have to wait for the front-end to build to see if you have a back-end issue. 

## Checking the AWS Amplify CI/CD logs

1. Login the the AWS Console
2. Go to AWS Amplify
3. Click on `Hosting Environments`
4. There you should see the Ci/CD job running that you can click on and see the logs.

## Team Environments

To find more information about multi-environment development using AWS Amplify refer to this page in the documentation: https://docs.amplify.aws/cli/teams/overview/
