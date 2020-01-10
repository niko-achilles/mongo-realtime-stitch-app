import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";

async function changeStream() {
  const client = Stitch.defaultAppClient.getServiceClient(
    RemoteMongoClient.factory,
    "shop-app-service"
  );

  const pipelineMatchExpression = {
    "fullDocument.name": { $exists: true },
    "fullDocument.price": { $exists: true },
    "operationType": "insert"
  };
  const stream = await client
    .db("shop")
    .collection("products")
    .watch(pipelineMatchExpression);

  return stream;
}

export { changeStream };
