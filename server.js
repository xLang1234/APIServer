import express from "express";
import routes from "./routes/index.js";
import logger from "./logger.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
const port = process.env.PORT || 3000;

const dbUrl = process.env.MONGODB_ATLAS_URI;

async function connectDB() {
  try {
    await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB Atlas");
    app.listen(port, () => {
      logger.info(`Server running on http://localhost:${port}`);
    });
  } catch (e) {
    console.error("Error connecting to MongoDB Atlas:", e);
    process.exit(1);
  }
}

const db = mongoose.connection;
mongoose.set("debug", true);

db.on("error", (err) => console.error("Mongoose connection error:", err));

(async () => {
  await connectDB();
})();
