// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "AWS_USER_POOLS_WEB_CLIENT_ID",     // CognitoClientID
  "api_base_url": "http://127.0.0.1:8080",                                     // TodoFunctionApi
  "cognito_hosted_domain": "COGNITO_HOSTED_DOMAIN",                   // CognitoDomainName
  "redirect_url": "https://localhost:8080"                                      // AmplifyURL
};

export default config;
