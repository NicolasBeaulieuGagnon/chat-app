const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchEdit = async (addingObject) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  console.log("connected");

  try {
    await client
      .db("chat-app")
      .collection("users")
      .updateMany({}, { $set: addingObject });
  } catch (err) {
    console.log(`ERROR--- ${err}`);
  } finally {
    client.close();
    console.log("disconnected");
  }
};

batchEdit({ friendRequests: [] });
