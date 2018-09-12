import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const params = {
    TableName: "notes",
    //Key condition expression defines the condition for the query. Only returns items with matching userId partition key
    KeyConditionExpression: "userId = :userId",
    //Expression attribute values defines the value in the condition - userId to be Identity Pool id of authenticated user
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  };

  try {
    const result = await dynamoDbLib.call("query", params);
    callback(null, success(result.Items));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
