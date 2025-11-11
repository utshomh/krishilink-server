import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./db.js";
import cropsRouter from "./routes/cropsRoute.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

// Connect to DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Welcome Route
app.get("/", (_req, res) => {
  res.json({ message: "Welcome to KrishiLink API" });
});

// All Routes
app.use("/crops", cropsRouter);

// Start Server
app.listen(port, () => console.log(`[server] running at port: ${port}`));
