
### Committing Changes to `staging` environment

## Merging Front-end and Back-end changes

1. Make sure that all code is comitted into the branch that you are merging from
2. Checkout in to the `staging` branch
3. Merge the branch with your changes in to `staging`

Note: On the cloud, AWS Amplify uses a webhook to kick off the CI/CD pipeline for building the front and back end of the site and then deploying it.

## For safefty

** Whenever you are pushing a back-end change **

Perform these additional steps to deploy backend changes locally:

Perform steps 1 & 2 from above
3. Run `amplify env checkout stage`. This will tell amplify that we are now referring to our staging back-end.
4. Run `amplify status` or `amplify env list` to verify you are in the `stage` environment.
5. Run `amplify push` to push the changes to the backend. Make sure that you are confident that these changes you are about to make are intended - the push overwrites what is on the cloud. 

The benefit of performing the changes locally is if you experience a problem with the deployment, you can make fixes without having to debug the issue within the cloud CI/CD logs. Also, you won't have to wait for the front-end to build to see if you have a back-end issue. 

To find more information about multi-environment development using AWS Amplify refer to this page in the documentation: https://docs.amplify.aws/cli/teams/overview/