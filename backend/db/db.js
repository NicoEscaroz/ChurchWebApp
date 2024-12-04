const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = "CWA";

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
