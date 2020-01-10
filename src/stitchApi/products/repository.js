import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import BSON from "bson";

async function insertProduct(productDto) {
  const client = Stitch.defaultAppClient.getServiceClient(
    RemoteMongoClient.factory,
    "shop-app-service"
  );

  const product = {
    name: productDto.name,
    price: BSON.Decimal128.fromString(productDto.price),
    description: productDto.description
  };

  const db = client.db("shop");

  const insertCommand = await db.collection("products").insertOne(product);

  return insertCommand;
}

async function updateById(productDto) {
  const client = Stitch.defaultAppClient.getServiceClient(
    RemoteMongoClient.factory,
    "shop-app-service"
  );

  const _id = new BSON.ObjectID(productDto.id);
  const product = {
    name: productDto.name,
    price: BSON.Decimal128.fromString(productDto.price),
    description: productDto.description
  };

  const db = client.db("shop");

  const updateCommand = await db
    .collection("products")
    .updateOne({ _id }, { $set: {...product} });

  return updateCommand;
}

async function deleteById(productId) {
  const client = Stitch.defaultAppClient.getServiceClient(
    RemoteMongoClient.factory,
    "shop-app-service"
  );

  const db = client.db("shop");
  const _id = new BSON.ObjectID(productId);
  const deleteCommandResult = await db
    .collection("products")
    .deleteOne({ _id });
  return deleteCommandResult;
}

async function getProducts() {
  const client = Stitch.defaultAppClient.getServiceClient(
    RemoteMongoClient.factory,
    "shop-app-service"
  );

  const db = client.db("shop");

  const products = await db
    .collection("products")
    .find()
    .asArray();

  const productsDto = products.map(product => {
    return {
      id: String(product._id),
      name: product.name,
      description: product.description,
      price: String(product.price)
    };
  });

  return productsDto;
}

export { getProducts, deleteById, updateById, insertProduct };
