import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = process.env.PORT;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Welcome Route
app.get("/", (_req, res) => {
  res.json({ message: "Welcome to KrishiLink API" });
});

// Start Server
app.listen(port, () => console.log(`[server] running at port: ${port}`));
