const config = {
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "arifwidi-notes-app",
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://ve9r9yjbqj.execute-api.ap-southeast-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_wulHuMlGE",
    APP_CLIENT_ID: "3a57sdrkqum1p6ead70gqv51mg",
    IDENTITY_POOL_ID: "ap-southeast-1:54282a67-ef9d-4610-a9b2-57ef58b02325",
  },
};

export default config;