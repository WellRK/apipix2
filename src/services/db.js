import mongoose from "mongoose";
import { env } from "../env";

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const _db = mongoose.connection;

async function connect() {
  if (_db.readyState === 2 || _db.readyState === 3) _db;

  _db.on("connecting", function () {
    console.log("connecting to MongoDB...");
  });

  _db.on("error", function (error) {
    console.error("Error in MongoDb connection: ", error);
    mongoose.disconnect();
  });

  _db.on("connected", function () {
    console.log("MongoDB connected!");
  });

  _db.once("open", function () {
    console.log("MongoDB connection opened!");
  });

  _db.on("reconnected", function () {
    console.log("MongoDB reconnected!");
  });

  _db.on("disconnected", async function () {
    console.log("MongoDB disconnected!");
    //await mongoose.connect(env.MONGO_URL, mongoConfig);
  });

  await mongoose.connect(env.MONGO_URL, mongoConfig)

  return _db;
}

connect();

function getConnection() {
  return _db;
}

export { connect, getConnection };
