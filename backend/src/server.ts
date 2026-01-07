import express from "express";
import projectsRoutes from "./routes/projects";
import logger from "./middleware/logger";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/projects", projectsRoutes);

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
