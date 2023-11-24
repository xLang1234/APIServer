import { MongoClient, ServerApiVersion } from "mongodb";

import dotenv from "dotenv";
dotenv.config();

// Replace with your Atlas connection string
const dbUrl = process.env.MONGODB_ATLAS_URI;
console.log("TCL  ~ file: server.js:10 ~ dbUrl:", dbUrl);
const dbName = "alldata"; // Replace with your database name
const client = new MongoClient(dbUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    return client.db(dbName);
  } catch (e) {
    console.error("Error connecting to MongoDB Atlas:", e);
    process.exit(1);
  }
}

connectDB().then((db) => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});

export default connectDB;
