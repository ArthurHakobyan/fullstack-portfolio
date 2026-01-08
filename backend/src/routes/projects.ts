import { Router } from "express";
import * as controller from "../controllers/projectsController";
import { validateProject } from "../middleware/validateProject";

const router = Router();

router.get("/", controller.getProjects);
router.post("/", validateProject, controller.createProject);

export default router;
