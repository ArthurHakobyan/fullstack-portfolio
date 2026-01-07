import express from "express";
import projectsRoutes from "./routes/projects";
import logger from "./middleware/logger";

const app = express();

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
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
