import { Router } from "express";
import * as controller from "../controllers/projectsController";
import { validateProject } from "../middleware/validateProject";

const router = Router();

// GET /projects
router.get("/", controller.getProjects);

// POST /projects
router.post("/", validateProject, controller.createProject);

export default router;
