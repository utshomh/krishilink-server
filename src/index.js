import express from "express";
import cors from "cors";

import { PORT } from "./environment.js";
import { connectDB } from "./db.js";
import cropsRouter from "./routers/cropsRouter.js";
import interestsRouter from "./routers/interestsRouter.js";

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
app.use("/interests", interestsRouter);

// Start Server
app.listen(PORT, () => console.log(`[server] running at port: ${PORT}`));
