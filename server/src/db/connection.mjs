import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.xcm0f.mongodb.net/`;

const client = new MongoClient(uri);

const DB_NAME = "sample_airbnb";
let db;

try {
  const conn = await client.connect();
  db = conn.db(DB_NAME);
  console.log(`Connected to the database ${DB_NAME}`);
} catch (e) {
  console.error("Error occurred connecting to the database", e);
}

export default db;
