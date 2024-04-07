// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
        "OutputKey": "CognitoClientID",
        "OutputValue": "65scsb3o6c1fbf1aaip1h4vrs6",
        "Description": "The Cognito UserPool Client ID"
    },
    {
        "OutputKey": "CognitoDomainName",
        "OutputValue": "mytodoappdemo-sam-app.auth.ap-south-1.amazoncognito.com",
        "Description": "The Cognito Hosted UI Domain Name"
    },
    {
        "OutputKey": "AmplifyURL",
        "OutputValue": "https://master.d1rq0pm0cfagwz.amplifyapp.com"
    },
    {
        "OutputKey": "CognitoID",
        "OutputValue": "ap-south-1_7KD7TSCvy",
        "Description": "The Cognito UserPool ID"
    },
    {
        "OutputKey": "TodoFunctionApi",
        "OutputValue": "https://rn6y5v0t29.execute-api.ap-south-1.amazonaws.com/{StageNameParam}",
        "Description": "API Gateway endpoint URL for Prod stage"
    };

export default config;
