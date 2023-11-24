import express from "express";
const router = express.Router();

import apiRoute from "./api.js";

router.use("/api", apiRoute);

export default router;
