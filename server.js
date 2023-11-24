import express from "express";
import routes from "./routes/index.js";
import connectDB from "./config/db.js";
import logger from "./logger.js";

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}`);
});
