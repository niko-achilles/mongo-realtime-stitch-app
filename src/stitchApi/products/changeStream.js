import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";

/*
*   Use Case :
*   as a developer i want to apply filters 
*   in the pipeline of mongodb as match expressions 
*   in order to have a more efficient developed application
*   With the current written code i have to apply techniques like: if/then in oder to filter
    operationsTypes and interpret the fullDocument, documentKey of streams.
    The disadvantage is 
        * if/then code, 
        * mongodb sends data always over the wire, for big applications not efficient
        * 
*   const options = { fullDocument: "default" };
    const pipelineWithMatchExpression = [
        {
            $match: {
                "fullDocument.name": { $exists: true },
                "fullDocument.price": { $exists: true },
                "operationType": "insert"
            }
        }
    ];  -> check for support https://github.com/mongodb/stitch-js-sdk/blob/bd07a3d/packages/browser/services/mongodb-remote/src/RemoteMongoCollection.ts#L259
        -> Discusssion: -> https://mongodb.canny.io/mongodb-stitch/p/change-streams
*/

async function changeStream() {
  const client = Stitch.defaultAppClient.getServiceClient(
    RemoteMongoClient.factory,
    "shop-app-service"
  );

  const stream = await client
    .db("shop")
    .collection("products")
    .watch();

  return stream;
}

export { changeStream };
