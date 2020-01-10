# A demo Application

## Front end

React, mongo stitch browser sdk and change streams

## Backend

managed by mongo Stitch, the serverless solution by MongoDB

## Improvement

Use Case :

- as a developer i want to apply filters in the pipeline of mongodb as `match expressions`
- in order to have a more efficient developed application

## Solution

- See construction of `match expression` below as applied in [changeStream.js](src/stitchApi/products/changeStream.js) for getting events when a product is `inserted` and the fields `name` , `price` exist in the document of product.

```javascript
const pipelineMatchExpression = {
  "fullDocument.name": { $exists: true },
  "fullDocument.price": { $exists: true },
  "operationType": "insert"
};
const stream = await client
  .db("shop")
  .collection("products")
  .watch(pipelineMatchExpression);
```
