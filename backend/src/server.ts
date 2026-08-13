import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { contactRouter } from "./routes/contact";
import { projectsRouter } from "./routes/projects";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRouter);
app.use("/api/projects", projectsRouter);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`[Backend Server] Running on http://localhost:${PORT}`);
});
