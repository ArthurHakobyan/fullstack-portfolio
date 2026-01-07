import { Router } from "express";
import * as controller from "../controllers/projectsController";

const router = Router();

// GET /projects
router.get("/", controller.getProjects);

// POST /projects
router.post("/", controller.createProject);

export default router;
