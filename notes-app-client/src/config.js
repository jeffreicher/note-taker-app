export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notesfile-upload"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://zcxdqe319a.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_cfO3a2Tt3",
    APP_CLIENT_ID: "6haeeqk2h0a4vqukbpt8j9sjj3",
    IDENTITY_POOL_ID: "us-east-2:3d35269e-0d0d-4085-895e-dcb11e7cd8a0"
  },
  MAX_ATTACHMENT_SIZE: 5000000
};
