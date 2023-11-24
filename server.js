import express from "express";
import routes from "./routes/index.js";
import connectDB from "./config/db.js";

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
